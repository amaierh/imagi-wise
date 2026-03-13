import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

type AuthView = "tabs" | "confirm-email";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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

  // Google loading
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword,
    });
    setSignInLoading(false);
    if (error) {
      toast({ title: "خطأ في تسجيل الدخول", description: error.message, variant: "destructive" });
    } else {
      navigate("/");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpPassword !== signUpConfirmPw) {
      toast({ title: "كلمات المرور غير متطابقة", variant: "destructive" });
      return;
    }
    if (signUpPassword.length < 6) {
      toast({ title: "كلمة المرور قصيرة جداً", description: "يجب أن تكون 6 أحرف على الأقل.", variant: "destructive" });
      return;
    }
    setSignUpLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: { full_name: signUpFullName },
        emailRedirectTo: window.location.origin,
      },
    });
    setSignUpLoading(false);
    if (error) {
      toast({ title: "خطأ في إنشاء الحساب", description: error.message, variant: "destructive" });
    } else {
      setConfirmedEmail(signUpEmail);
      setView("confirm-email");
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    setGoogleLoading(false);
    if (result && 'error' in result && result.error) {
      toast({ title: "خطأ في تسجيل الدخول بـ Google", description: String(result.error), variant: "destructive" });
    }
  };

  const handleResendEmail = async () => {
    const { error } = await supabase.auth.resend({ type: "signup", email: confirmedEmail });
    if (error) {
      toast({ title: "خطأ في الإرسال", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "✅ تم إرسال البريد مجدداً!" });
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Activity className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">RadiRight</h1>
          <p className="text-sm text-muted-foreground mt-1">Evidence-Based MSK Imaging Guidance</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === "tabs" ? (
            <motion.div
              key="tabs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-2xl p-6">
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="signin" className="flex-1">تسجيل الدخول</TabsTrigger>
                    <TabsTrigger value="signup" className="flex-1">إنشاء حساب</TabsTrigger>
                  </TabsList>

                  {/* ===== Sign In Tab ===== */}
                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="si-email">البريد الإلكتروني</Label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="si-email"
                            type="email"
                            placeholder="you@example.com"
                            value={signInEmail}
                            onChange={(e) => setSignInEmail(e.target.value)}
                            className="pr-10 text-right"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => toast({ title: "قريباً", description: "ميزة استعادة كلمة المرور قادمة." })}
                            className="text-xs text-primary hover:underline"
                          >
                            نسيت كلمة المرور؟
                          </button>
                          <Label htmlFor="si-password">كلمة المرور</Label>
                        </div>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setSignInShowPw(!signInShowPw)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {signInShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <Input
                            id="si-password"
                            type={signInShowPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={signInPassword}
                            onChange={(e) => setSignInPassword(e.target.value)}
                            className="pl-10 text-right"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={signInLoading}
                        className="w-full gradient-primary text-primary-foreground font-semibold border-0 hover:opacity-90"
                      >
                        {signInLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                            جاري الدخول…
                          </span>
                        ) : "تسجيل الدخول"}
                      </Button>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-card px-3 text-muted-foreground">أو</span>
                        </div>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <GoogleIcon />
                        {googleLoading ? "جاري التحميل…" : "المتابعة مع Google"}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* ===== Sign Up Tab ===== */}
                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="su-name">الاسم الكامل</Label>
                        <div className="relative">
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="su-name"
                            type="text"
                            placeholder="الاسم الكامل"
                            value={signUpFullName}
                            onChange={(e) => setSignUpFullName(e.target.value)}
                            className="pr-10 text-right"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-email">البريد الإلكتروني</Label>
                        <div className="relative">
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="su-email"
                            type="email"
                            placeholder="you@example.com"
                            value={signUpEmail}
                            onChange={(e) => setSignUpEmail(e.target.value)}
                            className="pr-10 text-right"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-password">كلمة المرور</Label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setSignUpShowPw(!signUpShowPw)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {signUpShowPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <Input
                            id="su-password"
                            type={signUpShowPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={signUpPassword}
                            onChange={(e) => setSignUpPassword(e.target.value)}
                            className="pl-10 text-right"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="su-confirm">تأكيد كلمة المرور</Label>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="su-confirm"
                            type={signUpShowPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={signUpConfirmPw}
                            onChange={(e) => setSignUpConfirmPw(e.target.value)}
                            className="pr-10 text-right"
                            dir="ltr"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={signUpLoading}
                        className="w-full gradient-primary text-primary-foreground font-semibold border-0 hover:opacity-90"
                      >
                        {signUpLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                            جاري الإنشاء…
                          </span>
                        ) : "إنشاء حساب"}
                      </Button>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-card px-3 text-muted-foreground">أو</span>
                        </div>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <GoogleIcon />
                        {googleLoading ? "جاري التحميل…" : "المتابعة مع Google"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          ) : (
            /* ===== Email Confirmation Screen ===== */
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✉️</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">تحقق من بريدك الإلكتروني</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  أرسلنا رابط التأكيد إلى
                </p>
                <p className="font-semibold text-primary mb-4 text-sm" dir="ltr">{confirmedEmail}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  يرجى فتح بريدك الإلكتروني والنقر على الرابط لتفعيل حسابك.
                </p>

                <Button
                  variant="outline"
                  onClick={handleResendEmail}
                  className="w-full mb-3"
                >
                  إعادة إرسال البريد
                </Button>

                <button
                  onClick={() => setView("tabs")}
                  className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
                >
                  <ArrowLeft className="w-4 h-4" />
                  العودة لتسجيل الدخول
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Auth;
