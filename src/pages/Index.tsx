import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
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
            clinical scenarios and our evidence-based recommendations.
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

        <p className="text-xs text-muted-foreground mt-8">For Medical Professionals</p>
      </motion.div>
    </div>
  );
};

export default Index;
