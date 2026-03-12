import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Calendar, LogOut, ArrowLeft, ShieldCheck } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    toast({ title: "Signed out", description: "You have been signed out successfully." });
    navigate("/login");
  };

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <div className="min-h-screen gradient-hero px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Avatar */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your account</p>
          </div>

          {/* Info Card */}
          <div className="glass-card rounded-2xl p-6 mb-4 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</p>
                <p className="text-foreground font-semibold truncate">{user?.email ?? "—"}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Member since</p>
                <p className="text-foreground font-semibold">{createdAt}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Account Status</p>
                <p className="text-success font-semibold">
                  {user?.email_confirmed_at ? "Verified" : "Pending verification"}
                </p>
              </div>
            </div>
          </div>

          {/* Sign Out */}
          <Button
            onClick={handleSignOut}
            disabled={signingOut}
            variant="destructive"
            className="w-full font-semibold"
          >
            {signingOut ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-destructive-foreground/40 border-t-destructive-foreground rounded-full animate-spin" />
                Signing out…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Sign Out
              </span>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
