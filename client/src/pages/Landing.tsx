import { Button } from "@/components/ui/button";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-card/90 glass-effect rounded-2xl shadow-xl p-8 w-full max-w-md border border-border">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
            <i className="fas fa-ribbon text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Welcome to PinkHope</h1>
          <p className="text-muted-foreground">
            Track and manage treatment side effects with our supportive community
          </p>
        </div>

        <Button 
          onClick={handleLogin} 
          className="w-full"
          data-testid="button-login"
        >
          Sign In to Continue
        </Button>

        <div className="mt-8 bg-muted/20 rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-2">What PinkHope offers:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Track symptoms and side effects</li>
            <li>• Manage appointments</li>
            <li>• Access nutrition guidance</li>
            <li>• Learn about treatment side effects</li>
            <li>• Connect with support community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
