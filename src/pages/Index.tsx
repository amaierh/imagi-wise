import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight, BookOpen, Bot, ShieldCheck, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const guidelines = [
  { name: "ACR", full: "American College of Radiology" },
  { name: "CAR", full: "Canadian Association of Radiologists" },
  { name: "WHO", full: "World Health Organization" },
  { name: "iRefer", full: "Royal College of Radiologists" },
  { name: "ESR", full: "European Society of Radiology" },
  { name: "RANZCR", full: "Royal Australian & NZ College" },
  { name: "NICE", full: "National Institute for Health and Care Excellence" },
  { name: "SNM", full: "Society of Nuclear Medicine" },
  { name: "ESSR", full: "European Society of Skeletal Radiology" },
  { name: "ISR", full: "International Society of Radiology" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero */}
      <section className="flex items-center justify-center px-4 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Activity className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h1 className="text-5xl font-extrabold text-primary mb-2 tracking-tight">RadiRight</h1>
          <p className="text-lg font-medium text-secondary mb-8" dir="ltr">Evidence-Based MSK Imaging Guidance</p>

          <div className="glass-card rounded-2xl p-6 mb-8 text-start">
            <p className="text-foreground leading-relaxed">
              {t("home.description")}{" "}
              <span className="font-bold text-primary">{t("home.guidelines_count")}</span>.
            </p>
          </div>

          <motion.button
            onClick={() => navigate("/assessment")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl gradient-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-shadow min-h-[56px] animate-pulse-soft"
          >
            {t("home.startassessment")}
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-muted-foreground mt-6">{t("home.forprofessionals")}</p>
        </motion.div>
      </section>

      {/* Guidelines Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Section Header */}
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                {t("home.builton")}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                {t("home.powered_title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.powered_desc")}
              </p>
            </motion.div>

            {/* Guidelines Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
              {guidelines.map((g) => (
                <div
                  key={g.name}
                  className="glass-card rounded-xl p-4 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <Globe className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-foreground text-sm" dir="ltr">{g.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight" dir="ltr">{g.full}</p>
                </div>
              ))}
            </motion.div>

            {/* Features Row */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-5 mb-12">
              {/* Evidence Card */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{t("home.evidence_title")}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("home.evidence_desc")}{" "}
                      <span className="font-semibold text-foreground" dir="ltr">ACR Appropriateness Criteria</span>,{" "}
                      <span className="font-semibold text-foreground" dir="ltr">iRefer</span>{" "}
                      <span className="font-semibold text-foreground" dir="ltr">(Royal College of Radiologists)</span>,{" "}
                      <span className="font-semibold text-foreground" dir="ltr">CAR</span>,{" "}
                      <span className="font-semibold text-foreground" dir="ltr">WHO</span>,{" "}
                      {t("home.evidence_desc2")}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Card */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-ai/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-ai" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{t("home.ai_title")}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("home.ai_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Highlights */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-ai" />
                <h3 className="font-bold text-foreground text-lg">{t("home.ai_enhance_title")}</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { titleKey: "home.ai_feature1_title", descKey: "home.ai_feature1_desc" },
                  { titleKey: "home.ai_feature2_title", descKey: "home.ai_feature2_desc" },
                  { titleKey: "home.ai_feature3_title", descKey: "home.ai_feature3_desc" },
                ].map((item) => (
                  <div key={item.titleKey} className="bg-accent/50 rounded-xl p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{t(item.titleKey)}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary" />
                {t("home.disclaimer")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
