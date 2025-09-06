import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Symptoms() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    severity: 5,
    notes: "",
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, authLoading, toast]);

  const { data: symptoms, isLoading } = useQuery({
    queryKey: ["/api/symptoms"],
    retry: false,
  });

  const addSymptomMutation = useMutation({
    mutationFn: async (symptomData: typeof formData) => {
      await apiRequest("POST", "/api/symptoms", symptomData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/symptoms"] });
      setShowAddModal(false);
      setFormData({ type: "", severity: 5, notes: "" });
      toast({
        title: "Success",
        description: "Symptom recorded successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to record symptom. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type) {
      toast({
        title: "Error",
        description: "Please select a symptom type.",
        variant: "destructive",
      });
      return;
    }
    addSymptomMutation.mutate(formData);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-8 h-8"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Symptom Tracking</h1>
        <Button
          onClick={() => setShowAddModal(true)}
          data-testid="button-add-symptom"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Symptom
        </Button>
      </div>

      {/* Symptom Form Modal */}
      {showAddModal && (
        <Card>
          <CardHeader>
            <CardTitle>Record New Symptom</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="symptomType">Symptom Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    required
                  >
                    <SelectTrigger data-testid="select-symptom-type">
                      <SelectValue placeholder="Select symptom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fatigue">Fatigue</SelectItem>
                      <SelectItem value="nausea">Nausea</SelectItem>
                      <SelectItem value="pain">Pain</SelectItem>
                      <SelectItem value="headache">Headache</SelectItem>
                      <SelectItem value="fever">Fever</SelectItem>
                      <SelectItem value="dizziness">Dizziness</SelectItem>
                      <SelectItem value="mouth_sores">Mouth Sores</SelectItem>
                      <SelectItem value="skin_irritation">Skin Irritation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="symptomSeverity">Severity (1-10)</Label>
                  <div className="space-y-2">
                    <Input
                      type="range"
                      id="symptomSeverity"
                      min="1"
                      max="10"
                      value={formData.severity}
                      onChange={(e) => setFormData({ ...formData, severity: parseInt(e.target.value) })}
                      className="w-full"
                      data-testid="input-severity"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Mild</span>
                      <span className="font-medium" data-testid="severity-value">
                        {formData.severity}
                      </span>
                      <span>Severe</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="symptomNotes">Additional Notes</Label>
                <Textarea
                  id="symptomNotes"
                  placeholder="Describe your symptom in detail..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  data-testid="textarea-notes"
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  type="submit"
                  disabled={addSymptomMutation.isPending}
                  data-testid="button-save-symptom"
                >
                  {addSymptomMutation.isPending ? (
                    <>
                      <div className="loading-spinner w-4 h-4 mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    "Save Symptom"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowAddModal(false);
                    setFormData({ type: "", severity: 5, notes: "" });
                  }}
                  data-testid="button-cancel-symptom"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Symptom History */}
      <Card>
        <CardHeader>
          <CardTitle>Symptom History</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="loading-spinner w-6 h-6"></div>
            </div>
          ) : symptoms && (symptoms as any[]).length > 0 ? (
            <div className="space-y-4" data-testid="symptom-history">
              {(symptoms as any[]).map((symptom: any) => (
                <div
                  key={symptom.id}
                  className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-border"
                  data-testid={`symptom-item-${symptom.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        symptom.severity <= 3
                          ? "symptom-severity-low"
                          : symptom.severity <= 7
                          ? "symptom-severity-medium"
                          : "symptom-severity-high"
                      }`}
                    ></div>
                    <div>
                      <h3 className="font-medium text-foreground capitalize">
                        {symptom.type.replace('_', ' ')}
                      </h3>
                      {symptom.notes && (
                        <p className="text-sm text-muted-foreground">
                          {symptom.notes}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      Severity: <span data-testid={`severity-${symptom.id}`}>{symptom.severity}/10</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(symptom.createdAt).toLocaleDateString()} at{" "}
                      {new Date(symptom.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-testid="empty-symptoms">
              <i className="fas fa-stethoscope text-4xl text-muted-foreground mb-4"></i>
              <p className="text-muted-foreground">
                No symptoms recorded yet. Add your first symptom above!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
