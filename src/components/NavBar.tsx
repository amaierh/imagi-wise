import { useNavigate } from "react-router-dom";
import { User, LogOut, ChevronDown } from "lucide-react";
import logoSvg from "@/assets/radi_right_logo.svg";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center rounded-full border border-border overflow-hidden text-xs font-semibold">
      <button
        onClick={() => setLang("ar")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "ar"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        AR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

const NavBar = () => {
  const { user, signOut } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({ title: t("profile.signout.success") });
    navigate("/auth");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-extrabold text-primary text-lg tracking-tight"
        >
          <Activity className="w-5 h-5" />
          RadiRight
        </button>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <LanguageToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <div className="w-7 h-7 gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="hidden sm:inline text-sm truncate max-w-[140px]">{user.email}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer gap-2">
                  <User className="w-4 h-4" />
                  {t("nav.profile")}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer gap-2 text-destructive focus:text-destructive"
                >
                  <LogOut className="w-4 h-4" />
                  {t("nav.signout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
