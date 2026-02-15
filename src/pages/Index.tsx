import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight, BookOpen, Bot, ShieldCheck, Globe, Sparkles } from "lucide-react";

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
          <p className="text-lg font-medium text-secondary mb-8">Evidence-Based MSK Imaging Guidance</p>

          <div className="glass-card rounded-2xl p-6 mb-8 text-left">
            <p className="text-foreground leading-relaxed">
              RadiRight guides healthcare professionals to choose the most appropriate imaging based on
              clinical scenarios and our evidence-based recommendations synthesized from over{" "}
              <span className="font-bold text-primary">10 international guidelines</span>.
            </p>
          </div>

          <motion.button
            onClick={() => navigate("/assessment")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl gradient-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-shadow min-h-[56px] animate-pulse-soft"
          >
            Start Assessment
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-muted-foreground mt-6">For Medical Professionals</p>
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
                Built on Evidence
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Powered by 10+ International Guidelines
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our recommendations are carefully synthesized from the world's most trusted radiology and medical imaging authorities, ensuring you get reliable, up-to-date guidance.
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
                  <p className="font-bold text-foreground text-sm">{g.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{g.full}</p>
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
                    <h3 className="font-bold text-foreground text-lg mb-2">Evidence-Based Recommendations</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every imaging recommendation in RadiRight is derived from a thorough review of guidelines published by organizations like the{" "}
                      <span className="font-semibold text-foreground">ACR Appropriateness Criteria</span>,{" "}
                      <span className="font-semibold text-foreground">iRefer</span> (Royal College of Radiologists),{" "}
                      <span className="font-semibold text-foreground">CAR</span>,{" "}
                      <span className="font-semibold text-foreground">WHO</span>, and more. When guidelines agree, we present the consensus. When they differ, we highlight the options and context.
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
                    <h3 className="font-bold text-foreground text-lg mb-2">AI-Powered Clinical Reasoning</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      RadiRight integrates AI to provide{" "}
                      <span className="font-semibold text-foreground">contextual explanations</span> for every recommendation — explaining <em>why</em> a modality is appropriate, when alternatives should be considered, and what the clinical evidence says. When no guideline exists, AI steps in with evidence-based reasoning to guide your decision.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Highlights */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-ai" />
                <h3 className="font-bold text-foreground text-lg">How AI Enhances Your Assessment</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Clinical Explanations",
                    desc: "Understand the reasoning behind each recommendation with plain-language explanations grounded in radiology literature.",
                  },
                  {
                    title: "Gap Coverage",
                    desc: "When guidelines don't cover a specific scenario, AI provides evidence-based opinions while clearly noting the absence of formal guidance.",
                  },
                  {
                    title: "Educational Feedback",
                    desc: "Learn from every assessment — whether your choice was correct, a 2nd choice, or not indicated, AI explains what to consider next time.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-accent/50 rounded-xl p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary" />
                AI explanations are designed to support — never replace — clinical judgment. All outputs include appropriate disclaimers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
