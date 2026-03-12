import { useNavigate } from "react-router-dom";
import { Activity, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NavBar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({ title: "Signed out successfully." });
    navigate("/login");
  };

  if (!user) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-extrabold text-primary text-lg tracking-tight"
        >
          <Activity className="w-5 h-5" />
          RadiRight
        </button>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/profile")}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline text-sm truncate max-w-[140px]">{user.email}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
