import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Appointments() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
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

  // Set default form values
  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().substring(0, 5);
    
    setFormData(prev => ({
      ...prev,
      date: prev.date || today,
      time: prev.time || currentTime,
    }));
  }, []);

  const { data: appointments, isLoading } = useQuery({
    queryKey: ["/api/appointments"],
    retry: false,
  });

  const addAppointmentMutation = useMutation({
    mutationFn: async (appointmentData: typeof formData) => {
      await apiRequest("POST", "/api/appointments", appointmentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
      setShowAddModal(false);
      setFormData({ name: "", date: "", time: "" });
      toast({
        title: "Success",
        description: "Appointment scheduled successfully.",
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
        description: "Failed to schedule appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateAppointmentMutation = useMutation({
    mutationFn: async ({ id, completed }: { id: string; completed: boolean }) => {
      await apiRequest("PATCH", `/api/appointments/${id}`, { completed });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
      toast({
        title: "Success",
        description: "Appointment updated successfully.",
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
        description: "Failed to update appointment.",
        variant: "destructive",
      });
    },
  });

  const deleteAppointmentMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/appointments/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
      toast({
        title: "Success",
        description: "Appointment deleted successfully.",
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
        description: "Failed to delete appointment.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    addAppointmentMutation.mutate(formData);
  };

  const toggleCompleted = (id: string, completed: boolean) => {
    updateAppointmentMutation.mutate({ id, completed });
  };

  const deleteAppointment = (id: string) => {
    deleteAppointmentMutation.mutate(id);
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
        <h1 className="text-3xl font-bold text-foreground">Appointment Manager</h1>
        <Button
          onClick={() => setShowAddModal(true)}
          data-testid="button-add-appointment"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Appointment
        </Button>
      </div>

      {/* Appointment Form Modal */}
      {showAddModal && (
        <Card>
          <CardHeader>
            <CardTitle>Schedule New Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="appointmentName">Appointment Name</Label>
                  <Input
                    type="text"
                    id="appointmentName"
                    placeholder="e.g., Oncology Consultation"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-appointment-name"
                  />
                </div>
                <div>
                  <Label htmlFor="appointmentDate">Date</Label>
                  <Input
                    type="date"
                    id="appointmentDate"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    data-testid="input-appointment-date"
                  />
                </div>
                <div>
                  <Label htmlFor="appointmentTime">Time</Label>
                  <Input
                    type="time"
                    id="appointmentTime"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    data-testid="input-appointment-time"
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <Button
                  type="submit"
                  disabled={addAppointmentMutation.isPending}
                  data-testid="button-save-appointment"
                >
                  {addAppointmentMutation.isPending ? (
                    <>
                      <div className="loading-spinner w-4 h-4 mr-2"></div>
                      Scheduling...
                    </>
                  ) : (
                    "Schedule Appointment"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowAddModal(false);
                    setFormData({ name: "", date: "", time: "" });
                  }}
                  data-testid="button-cancel-appointment"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Appointments List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Appointments</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="loading-spinner w-6 h-6"></div>
            </div>
          ) : appointments && (appointments as any[]).length > 0 ? (
            <div data-testid="appointments-list">
              {(appointments as any[]).map((appointment: any, index: number) => (
                <div
                  key={appointment.id}
                  className={`flex items-center justify-between p-6 hover:bg-muted/5 transition-colors ${
                    index !== (appointments as any[]).length - 1 ? 'border-b border-border' : ''
                  } ${appointment.completed ? 'appointment-completed' : ''}`}
                  data-testid={`appointment-item-${appointment.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      checked={appointment.completed}
                      onCheckedChange={(checked) => 
                        toggleCompleted(appointment.id, checked as boolean)
                      }
                      data-testid={`checkbox-${appointment.id}`}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {appointment.name}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4 mt-1">
                        <span className="flex items-center">
                          <i className="fas fa-calendar mr-2"></i>
                          {new Date(appointment.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-clock mr-2"></i>
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteAppointment(appointment.id)}
                    disabled={deleteAppointmentMutation.isPending}
                    data-testid={`button-delete-${appointment.id}`}
                  >
                    <i className="fas fa-trash mr-1"></i>
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-testid="empty-appointments">
              <i className="fas fa-calendar-check text-4xl text-muted-foreground mb-4"></i>
              <p className="text-muted-foreground">
                You don't have any appointments yet. Add one above!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
