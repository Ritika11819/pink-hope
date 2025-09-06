import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const { toast } = useToast();

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

  const { data: symptoms, isLoading: symptomsLoading } = useQuery({
    queryKey: ["/api/symptoms"],
    retry: false,
  });

  const { data: appointments, isLoading: appointmentsLoading } = useQuery({
    queryKey: ["/api/appointments"],
    retry: false,
  });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-8 h-8"></div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const recentSymptoms = (symptoms as any[])?.slice(0, 3) || [];
  const upcomingAppointments = (appointments as any[])?.filter((apt: any) => !apt.completed).slice(0, 2) || [];
  const todaySymptoms = (symptoms as any[])?.filter((symptom: any) => 
    new Date(symptom.createdAt).toDateString() === new Date().toDateString()
  )?.length || 0;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2" data-testid="welcome-message">
            Welcome back, {(user as any)?.firstName || (user as any)?.email?.split('@')[0] || 'Patient'}!
          </h1>
          <p className="text-primary-foreground/90 mb-4" data-testid="current-date">
            {currentDate}
          </p>
          <p className="text-lg italic max-w-2xl">
            "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
          </p>
        </div>
        <div className="absolute top-4 right-4 opacity-20">
          <i className="fas fa-quote-left text-6xl"></i>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Today's Symptoms</p>
                <p className="text-2xl font-bold text-foreground" data-testid="stat-today-symptoms">
                  {todaySymptoms}
                </p>
              </div>
              <div className="w-12 h-12 bg-chart-1/10 rounded-full flex items-center justify-center">
                <i className="fas fa-stethoscope text-chart-1"></i>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Upcoming Appointments</p>
                <p className="text-2xl font-bold text-foreground" data-testid="stat-upcoming-appointments">
                  {upcomingAppointments.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center">
                <i className="fas fa-calendar-alt text-chart-2"></i>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Symptoms</p>
                <p className="text-2xl font-bold text-foreground" data-testid="stat-total-symptoms">
                  {(symptoms as any[])?.length || 0}
                </p>
              </div>
              <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center">
                <i className="fas fa-calendar-check text-chart-3"></i>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Weekly Progress</p>
                <p className="text-2xl font-bold text-foreground">85%</p>
              </div>
              <div className="w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-chart-4"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Symptoms */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center">
                <i className="fas fa-stethoscope text-primary mr-3"></i>
                Recent Symptoms
              </h2>
              <Link href="/symptoms">
                <Button variant="ghost" size="sm" data-testid="link-view-all-symptoms">
                  View All
                </Button>
              </Link>
            </div>
            
            {symptomsLoading ? (
              <div className="flex justify-center py-8">
                <div className="loading-spinner w-6 h-6"></div>
              </div>
            ) : recentSymptoms.length > 0 ? (
              <div className="space-y-4">
                {recentSymptoms.map((symptom: any) => (
                  <div key={symptom.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-circle text-chart-1"></i>
                      <span className="font-medium capitalize" data-testid={`symptom-${symptom.id}`}>
                        {symptom.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        symptom.severity <= 3 ? 'symptom-severity-low' :
                        symptom.severity <= 7 ? 'symptom-severity-medium' :
                        'symptom-severity-high'
                      }`}></div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(symptom.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">No symptoms recorded yet.</p>
            )}
            
            <Link href="/symptoms">
              <Button className="w-full mt-4" data-testid="button-track-symptom">
                Track New Symptom
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center">
                <i className="fas fa-calendar-alt text-primary mr-3"></i>
                Upcoming Appointments
              </h2>
              <Link href="/appointments">
                <Button variant="ghost" size="sm" data-testid="link-view-all-appointments">
                  View All
                </Button>
              </Link>
            </div>
            
            {appointmentsLoading ? (
              <div className="flex justify-center py-8">
                <div className="loading-spinner w-6 h-6"></div>
              </div>
            ) : upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment: any) => (
                  <div key={appointment.id} className="p-4 bg-secondary/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`appointment-${appointment.id}`}>
                      {appointment.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <span className="flex items-center">
                        <i className="fas fa-calendar mr-1"></i>
                        {new Date(appointment.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">No upcoming appointments.</p>
            )}
            
            <Link href="/appointments">
              <Button className="w-full mt-4" data-testid="button-schedule-appointment">
                Schedule Appointment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/nutrition">
          <Card className="cursor-pointer hover:bg-accent/5 transition-colors group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Nutrition Guide</h3>
                  <p className="text-muted-foreground text-sm">Get personalized nutrition advice</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <i className="fas fa-apple-alt text-accent"></i>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/sideeffects">
          <Card className="cursor-pointer hover:bg-accent/5 transition-colors group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Side Effects</h3>
                  <p className="text-muted-foreground text-sm">Learn about managing side effects</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <i className="fas fa-exclamation-triangle text-accent"></i>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Card className="cursor-pointer hover:bg-accent/5 transition-colors group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Support Community</h3>
                <p className="text-muted-foreground text-sm">Connect with other patients</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <i className="fas fa-users text-accent"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
