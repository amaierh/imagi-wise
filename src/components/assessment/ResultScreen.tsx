import type { Scenario } from "@/data/topics";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Bot, RotateCcw } from "lucide-react";

interface Props {
  scenario: Scenario;
  selectedModality: string;
  onRestart: () => void;
}

const resultConfig = {
  TRUE: {
    bg: "result-true",
    headerBg: "bg-success",
    icon: CheckCircle2,
    iconColor: "text-success",
    label: "Imaging Indicated",
    animation: "animate-check-bounce",
  },
  FALSE: {
    bg: "result-false",
    headerBg: "bg-destructive",
    icon: XCircle,
    iconColor: "text-destructive",
    label: "Imaging NOT Indicated",
    animation: "animate-shake",
  },
  SECOND_CHOICE: {
    bg: "result-second",
    headerBg: "bg-warning",
    icon: AlertTriangle,
    iconColor: "text-warning",
    label: "May Be Appropriate",
    animation: "",
  },
  NO_GUIDELINES: {
    bg: "result-ai",
    headerBg: "bg-ai",
    icon: Bot,
    iconColor: "text-ai",
    label: "No Current Guidelines",
    animation: "",
  },
};

const ResultScreen = ({ scenario, selectedModality, onRestart }: Props) => {
  const config = resultConfig[scenario.result];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${config.headerBg} py-8 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Icon className={`w-16 h-16 mx-auto mb-3 text-primary-foreground ${config.animation}`} />
          </motion.div>
          <h1 className="text-2xl font-bold text-primary-foreground">{scenario.display}</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* User's Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-xl border-2 p-5 ${config.bg}`}
        >
          <p className="text-sm font-medium text-muted-foreground mb-1">Your Selection</p>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-foreground">{selectedModality}</span>
            {scenario.result === "FALSE" && (
              <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">
                {scenario.correctSpec ? "Wrong Specification" : "Not indicated"}
              </span>
            )}
            {scenario.result === "SECOND_CHOICE" && (
              <span className="text-xs bg-warning/10 text-warning-foreground px-2 py-0.5 rounded-full font-medium">
                2nd Choice
              </span>
            )}
          </div>
        </motion.div>

        {/* Recommendation */}
        {scenario.result !== "NO_GUIDELINES" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {scenario.result === "TRUE" ? "Our Recommendation" : scenario.correctSpec ? "Correct Specification" : "Recommended Option(s)"}
            </p>
            {scenario.correctSpec ? (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-semibold text-foreground">{scenario.correctSpec}</span>
              </div>
            ) : scenario.alternatives && scenario.alternatives.length > 0 ? (
              <ul className="space-y-2">
                {scenario.alternatives.map((alt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span className="text-foreground">{alt}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-semibold text-foreground">{selectedModality}</span>
              </div>
            )}
            <p className="text-sm text-muted-foreground mt-3">{scenario.message}</p>
          </motion.div>
        )}

        {/* AI Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-xl border border-border bg-card p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-5 h-5 text-ai" />
            <p className="text-sm font-semibold text-foreground">
              {scenario.result === "NO_GUIDELINES" ? "AI Clinical Assessment" : "AI Explanation"}
            </p>
          </div>

          {scenario.result === "NO_GUIDELINES" && scenario.aiTasks ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{scenario.message}</p>
              <div className="bg-accent/50 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">The AI would assess:</p>
                <ul className="space-y-1.5">
                  {scenario.aiTasks.map((task, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-ai mt-0.5">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              {scenario.disclaimer && (
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                  <p className="text-xs text-warning-foreground flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    {scenario.disclaimer}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-accent/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground italic">
                {scenario.aiPrompt
                  ? `AI explanation will be generated here: "${scenario.aiPrompt}"`
                  : "AI-generated explanation will appear here based on the clinical scenario and your selection."}
              </p>
            </div>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 pt-4"
        >
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity min-h-[56px]"
          >
            <RotateCcw className="w-5 h-5" />
            Start New Assessment
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultScreen;
