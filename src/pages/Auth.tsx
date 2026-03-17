import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import logoSvg from "@/assets/radi_right_logo.svg";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

type AuthView = "tabs" | "confirm-email";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [view, setView] = useState<AuthView>("tabs");
  const [confirmedEmail, setConfirmedEmail] = useState("");

  // Sign In state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInShowPw, setSignInShowPw] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);

  // Sign Up state
  const [signUpFullName, setSignUpFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPw, setSignUpConfirmPw] = useState("");
  const [signUpShowPw, setSignUpShowPw] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword
    });
    setSignInLoading(false);
    if (error) {
      toast({ title: t("auth.error.signin"), description: error.message, variant: "destructive" });
    } else {
      navigate("/");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpPassword !== signUpConfirmPw) {
      toast({ title: t("auth.error.passwordmismatch"), variant: "destructive" });
      return;
    }
    if (signUpPassword.length < 6) {
      toast({ title: t("auth.error.passwordshort"), description: t("auth.error.passwordshort.desc"), variant: "destructive" });
      return;
    }
    setSignUpLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: { full_name: signUpFullName },
        emailRedirectTo: window.location.origin
      }
    });
    setSignUpLoading(false);
    if (error) {
      toast({ title: t("auth.error.signup"), description: error.message, variant: "destructive" });
    } else {
      setConfirmedEmail(signUpEmail);
      setView("confirm-email");
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin
    });
    setGoogleLoading(false);
    if (result && 'error' in result && result.error) {
      toast({ title: t("auth.error.google"), description: String(result.error), variant: "destructive" });
    }
  };

  const handleResendEmail = async () => {
    const { error } = await supabase.auth.resend({ type: "signup", email: confirmedEmail });
    if (error) {
      toast({ title: t("auth.error.resend"), description: error.message, variant: "destructive" });
    } else {
      toast({ title: t("auth.resend.success") });
    }
  };

  const iconSide = isRTL ? "right-3" : "left-3";
  const inputPadStart = isRTL ? "pr-10" : "pl-10";
  const inputPadEnd = isRTL ? "pl-10" : "pr-10";
  const eyeSide = isRTL ? "left-3" : "right-3";

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8">
          
          <img src={logoSvg} alt="RadiRight" className="h-20 w-auto mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mt-1" dir="ltr">Evidence-Based Imaging Guidance</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === "tabs" ?
          <motion.div
            key="tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}>
            
              <div className="glass-card rounded-2xl p-6">
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="signin" className="flex-1">{t("auth.tab.signin")}</TabsTrigger>
                    <TabsTrigger value="signup" className="flex-1">{t("auth.tab.signup")}</TabsTrigger>
                  </TabsList>

                  {/* ===== Sign In Tab ===== */}
                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="si-email">{t("auth.email")}</Label>
                        <div className="relative">
                          <Mail className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                          <Input
                          id="si-email"
                          type="email"
                          placeholder="you@example.com"
                          value={signInEmail}
                          onChange={(e) => setSignInEmail(e.target.value)}
                          className={inputPadStart}
                          dir="ltr"
                          required />
                        
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <button
                          type="button"
                          onClick={() => toast({ title: t("auth.coming_soon"), description: t("auth.forgot_coming_soon") })}
                          className="text-xs text-primary hover:underline">
                          
                            {t("auth.forgotpassword")}
                          </button>
                          <Label htmlFor="si-password">{t("auth.password")}</Label>
                        </div>
                        <div className="relative">
                          <button
                          type="button"
                          onClick={() => setSignInShowPw(!signInShowPw)}
                          className={`absolute ${eyeSide} top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground`}>
                          
                            {signInShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <Input
                          id="si-password"
                          type={signInShowPw ? "text" : "password"}
                          placeholder="••••••••"
                          value={signInPassword}
                          onChange={(e) => setSignInPassword(e.target.value)}
                          className={inputPadEnd}
                          dir="ltr"
                          required />
                        
                        </div>
                      </div>

                      <Button
                      type="submit"
                      disabled={signInLoading}
                      className="w-full gradient-primary text-primary-foreground font-semibold border-0 hover:opacity-90">
                      
                        {signInLoading ?
                      <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                            {t("auth.signinloading")}
                          </span> :
                      t("auth.signinbtn")}
                      </Button>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-card px-3 text-muted-foreground">{t("auth.or")}</span>
                        </div>
                      </div>

                      <Button
                      type="button"
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="w-full flex items-center justify-center gap-2">
                      
                        <GoogleIcon />
                        {googleLoading ? t("auth.googleloading") : t("auth.continuewithgoogle")}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* ===== Sign Up Tab ===== */}
                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="su-name">{t("auth.fullname")}</Label>
                        <div className="relative">
                          <User className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                          <Input
                          id="su-name"
                          type="text"
                          placeholder={t("auth.fullname")}
                          value={signUpFullName}
                          onChange={(e) => setSignUpFullName(e.target.value)}
                          className={inputPadStart}
                          required />
                        
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-email">{t("auth.email")}</Label>
                        <div className="relative">
                          <Mail className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                          <Input
                          id="su-email"
                          type="email"
                          placeholder="you@example.com"
                          value={signUpEmail}
                          onChange={(e) => setSignUpEmail(e.target.value)}
                          className={inputPadStart}
                          dir="ltr"
                          required />
                        
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-password">{t("auth.password")}</Label>
                        <div className="relative">
                          <button
                          type="button"
                          onClick={() => setSignUpShowPw(!signUpShowPw)}
                          className={`absolute ${eyeSide} top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground`}>
                          
                            {signUpShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <Input
                          id="su-password"
                          type={signUpShowPw ? "text" : "password"}
                          placeholder="••••••••"
                          value={signUpPassword}
                          onChange={(e) => setSignUpPassword(e.target.value)}
                          className={inputPadEnd}
                          dir="ltr"
                          required />
                        
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-confirm">{t("auth.confirmpassword")}</Label>
                        <div className="relative">
                          <Lock className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                          <Input
                          id="su-confirm"
                          type={signUpShowPw ? "text" : "password"}
                          placeholder="••••••••"
                          value={signUpConfirmPw}
                          onChange={(e) => setSignUpConfirmPw(e.target.value)}
                          className={inputPadStart}
                          dir="ltr"
                          required />
                        
                        </div>
                      </div>

                      <Button
                      type="submit"
                      disabled={signUpLoading}
                      className="w-full gradient-primary text-primary-foreground font-semibold border-0 hover:opacity-90">
                      
                        {signUpLoading ?
                      <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                            {t("auth.signuploading")}
                          </span> :
                      t("auth.signupbtn")}
                      </Button>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-card px-3 text-muted-foreground">{t("auth.or")}</span>
                        </div>
                      </div>

                      <Button
                      type="button"
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="w-full flex items-center justify-center gap-2">
                      
                        <GoogleIcon />
                        {googleLoading ? t("auth.googleloading") : t("auth.continuewithgoogle")}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div> : (

          /* ===== Email Confirmation Screen ===== */
          <motion.div
            key="confirm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}>
            
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✉️</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{t("auth.verifyemail.title")}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {t("auth.verifyemail.sent")}
                </p>
                <p className="font-semibold text-primary mb-4 text-sm" dir="ltr">{confirmedEmail}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {t("auth.verifyemail.body")}
                </p>

                <Button
                variant="outline"
                onClick={handleResendEmail}
                className="w-full mb-3">
                
                  {t("auth.verifyemail.resend")}
                </Button>

                <button
                onClick={() => setView("tabs")}
                className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-full">
                
                  <ArrowLeft className="w-4 h-4" />
                  {t("auth.verifyemail.backtosignin")}
                </button>
              </div>
            </motion.div>)
          }
        </AnimatePresence>
      </div>
    </div>);

};

export default Auth;