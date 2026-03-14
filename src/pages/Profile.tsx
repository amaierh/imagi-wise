import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Mail, Calendar, LogOut, ArrowLeft,
  CreditCard, Clock, CheckCircle2, AlertTriangle, XCircle, Send
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ProfileData {
  id: string;
  full_name: string | null;
  subscription_type: string;
  subscription_start: string | null;
  subscription_end: string | null;
  created_at: string;
}

type SubscriptionStatus = "active" | "expiring-soon" | "expired" | "free";

const getSubscriptionStatus = (profile: ProfileData): SubscriptionStatus => {
  if (!profile.subscription_end || profile.subscription_type === "Free") return "free";
  const now = new Date();
  const end = new Date(profile.subscription_end);
  const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return "expired";
  if (daysLeft <= 7) return "expiring-soon";
  return "active";
};

const getDaysLeft = (endDate: string | null): number => {
  if (!endDate) return 0;
  const now = new Date();
  const end = new Date(endDate);
  return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
};

const getTotalDays = (startDate: string | null, endDate: string | null): number => {
  if (!startDate || !endDate) return 30;
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
};

const Profile = () => {
  const { user, signOut } = useAuth();
  const { t, lang, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  // Renewal form
  const [renewalName, setRenewalName] = useState("");
  const [renewalRequestType, setRenewalRequestType] = useState("");
  const [renewalNotes, setRenewalNotes] = useState("");
  const [renewalLoading, setRenewalLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (data) {
        setProfile(data as ProfileData);
        setRenewalName((data as ProfileData).full_name || "");
      }
      setLoadingProfile(false);
    };
    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    toast({ title: t("profile.signout.success") });
    navigate("/auth");
  };

  const handleRenewalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!renewalRequestType) {
      toast({ title: t("profile.renewal.error.type"), variant: "destructive" });
      return;
    }
    setRenewalLoading(true);
    const { error } = await supabase.from("renewal_requests").insert({
      user_id: user!.id,
      full_name: renewalName,
      email: user!.email,
      request_type: renewalRequestType,
      notes: renewalNotes || null,
    });
    setRenewalLoading(false);
    if (error) {
      toast({ title: t("profile.renewal.error.submit"), description: error.message, variant: "destructive" });
    } else {
      toast({ title: t("profile.renewal.success"), description: t("profile.renewal.success.desc") });
      setRenewalNotes("");
      setRenewalRequestType("");
    }
  };

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
        day: "numeric", month: "long", year: "numeric",
      })
    : "—";

  const status = profile ? getSubscriptionStatus(profile) : "free";
  const daysLeft = profile ? getDaysLeft(profile.subscription_end) : 0;
  const totalDays = profile ? getTotalDays(profile.subscription_start, profile.subscription_end) : 30;
  const progressPercent = totalDays > 0 ? Math.round((daysLeft / totalDays) * 100) : 0;

  const initials = (profile?.full_name || user?.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const subscriptionBadge = {
    active: { label: t("profile.badge.active"), className: "bg-success/10 text-success border-success/20" },
    "expiring-soon": { label: t("profile.badge.expiring"), className: "bg-warning/10 text-warning-foreground border-warning/30" },
    expired: { label: t("profile.badge.expired"), className: "bg-destructive/10 text-destructive border-destructive/20" },
    free: { label: t("profile.badge.free"), className: "bg-muted text-muted-foreground border-border" },
  };

  const progressBarColor = {
    active: "bg-success",
    "expiring-soon": "bg-warning",
    expired: "bg-destructive",
    free: "bg-muted-foreground",
  };

  const iconSide = isRTL ? "right-3" : "left-3";
  const inputPad = isRTL ? "pr-10" : "pl-10";

  return (
    <div className="min-h-screen gradient-hero px-4 py-8">
      <div className="max-w-lg mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> {t("profile.back")}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          {/* ───── Section 1: User Info ───── */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-primary-foreground font-bold text-xl">{initials}</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground truncate">
                  {profile?.full_name || t("profile.default_user")}
                </h1>
                <p className="text-sm text-muted-foreground truncate" dir="ltr">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{t("profile.email")}</p>
                  <p className="text-foreground font-medium text-sm truncate" dir="ltr">{user?.email}</p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{t("profile.membersince")}</p>
                  <p className="text-foreground font-medium text-sm">{createdAt}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ───── Section 2: Subscription ───── */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-bold text-foreground text-lg mb-5 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              {t("profile.subscription")}
            </h2>

            {loadingProfile ? (
              <div className="h-24 flex items-center justify-center">
                <span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Status Banner */}
                {status === "expiring-soon" && (
                  <div className="flex items-center gap-2 bg-warning/10 border border-warning/30 rounded-xl p-3">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0" />
                    <p className="text-sm font-medium text-warning-foreground">{t("profile.status.expiring")}</p>
                  </div>
                )}
                {status === "expired" && (
                  <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-xl p-3">
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    <p className="text-sm font-medium text-destructive">{t("profile.status.expired")}</p>
                  </div>
                )}
                {status === "active" && (
                  <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-xl p-3">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <p className="text-sm font-medium text-success">{t("profile.status.active")}</p>
                  </div>
                )}

                {/* Plan type */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${subscriptionBadge[status].className}`}>
                    {subscriptionBadge[status].label}
                  </span>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-xs text-muted-foreground">{t("profile.subscriptiontype")}</p>
                    <p className="font-bold text-foreground" dir="ltr">{profile?.subscription_type || "Free"}</p>
                  </div>
                </div>

                {status !== "free" && (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {t("profile.timeremaining")}
                        </span>
                        <span className="font-semibold text-foreground">
                          {status === "expired" ? t("profile.status.expired_label") : `${daysLeft} ${t("profile.days")}`}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all ${progressBarColor[status]}`}
                          style={{ width: `${Math.min(100, progressPercent)}%` }}
                        />
                      </div>
                    </div>

                    {profile?.subscription_end && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground" dir="ltr">
                          {new Date(profile.subscription_end).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB")}
                        </span>
                        <span className="text-muted-foreground">{t("profile.expiry")}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* ───── Section 3: Renewal Request ───── */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              {t("profile.renewal.title")}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              {t("profile.renewal.desc")}
            </p>

            <form onSubmit={handleRenewalSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="r-name">{t("auth.fullname")}</Label>
                <div className="relative">
                  <User className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                  <Input
                    id="r-name"
                    value={renewalName}
                    onChange={(e) => setRenewalName(e.target.value)}
                    className={inputPad}
                    placeholder={t("auth.fullname")}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="r-email">{t("auth.email")}</Label>
                <div className="relative">
                  <Mail className={`absolute ${iconSide} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                  <Input
                    id="r-email"
                    value={user?.email || ""}
                    disabled
                    className={`${inputPad} bg-muted/50 cursor-not-allowed`}
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>{t("profile.renewal.type")}</Label>
                <Select value={renewalRequestType} onValueChange={setRenewalRequestType} dir={isRTL ? "rtl" : "ltr"}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("profile.renewal.type.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="renew">{t("profile.renewal.renew")}</SelectItem>
                    <SelectItem value="upgrade-pro">{t("profile.renewal.upgradepro")}</SelectItem>
                    <SelectItem value="upgrade-enterprise">{t("profile.renewal.upgradeenterprise")}</SelectItem>
                    <SelectItem value="inquiry">{t("profile.renewal.inquiry")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="r-notes">
                  {t("profile.renewal.notes")} <span className="text-muted-foreground">{t("profile.renewal.notes.optional")}</span>
                </Label>
                <Textarea
                  id="r-notes"
                  value={renewalNotes}
                  onChange={(e) => setRenewalNotes(e.target.value)}
                  placeholder={t("profile.renewal.notes.placeholder")}
                  className="resize-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={renewalLoading}
                className="w-full gradient-primary text-primary-foreground font-semibold border-0 hover:opacity-90"
              >
                {renewalLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    {t("profile.renewal.submitting")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t("profile.renewal.submit")}
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* ───── Sign Out ───── */}
          <Button
            onClick={handleSignOut}
            disabled={signingOut}
            variant="destructive"
            className="w-full font-semibold"
          >
            {signingOut ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-destructive-foreground/40 border-t-destructive-foreground rounded-full animate-spin" />
                {t("profile.signingout")}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogOut className="w-4 h-4" /> {t("profile.signout")}
              </span>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
