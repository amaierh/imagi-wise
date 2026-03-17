import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Bot, RotateCcw, Star } from "lucide-react";
import type { ResultPayload } from "./QuestionFlow";
import type { Recommendation } from "@/data/mskTypes";

interface Props {
  payload: ResultPayload;
  selectedModality: string;
  onRestart: () => void;
}

const RESULT_CONFIG = {
  FIRST_CHOICE: {
    headerBg: "bg-success",
    cardBg: "result-true",
    icon: CheckCircle2,
    label: "✅ 1st Choice — Imaging Indicated",
    badge: "1st Choice",
    badgeClass: "bg-success/15 text-success",
  },
  ALTERNATIVE: {
    headerBg: "bg-warning",
    cardBg: "result-second",
    icon: AlertTriangle,
    label: "⚠️ Alternative — May Be Appropriate",
    badge: "2nd Choice",
    badgeClass: "bg-warning/15 text-warning-foreground",
  },
  NOT_INDICATED: {
    headerBg: "bg-destructive",
    cardBg: "result-false",
    icon: XCircle,
    label: "❌ Not Recommended for This Scenario",
    badge: "Not Recommended",
    badgeClass: "bg-destructive/15 text-destructive",
  },
  NO_GUIDELINES: {
    headerBg: "bg-ai",
    cardBg: "result-ai",
    icon: Bot,
    label: "🤖 No Current ACR Guidelines",
    badge: "No Guidelines",
    badgeClass: "bg-ai/15 text-ai",
  },
};

function PriorityBadge({ priority }: { priority: 1 | 2 }) {
  return priority === 1 ? (
    <span className="flex items-center gap-1 text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
      <Star className="w-3 h-3 fill-success" /> 1st Choice
    </span>
  ) : (
    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
      Alternative
    </span>
  );
}

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2.5 border-b border-border last:border-0">
      <div>
        <p className="font-semibold text-foreground">{rec.modality}</p>
        <p className="text-sm text-muted-foreground">{rec.procedure}</p>
      </div>
      <PriorityBadge priority={rec.priority} />
    </div>
  );
}

const ResultScreen = ({ payload, selectedModality, onRestart }: Props) => {
  const isNoGuidelines = payload.type === "noGuidelines";
  const cr = payload.compareResult;
  const config = isNoGuidelines
    ? RESULT_CONFIG.NO_GUIDELINES
    : RESULT_CONFIG[cr?.result ?? "NOT_INDICATED"];
  const Icon = config.icon;

  const allRecs = cr ? [...cr.topModalities, ...cr.altModalities] : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header band */}
      <div className={`${config.headerBg} py-8 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Icon className="w-16 h-16 mx-auto mb-3 text-primary-foreground" />
          </motion.div>
          <h1 className="text-2xl font-bold text-primary-foreground">{config.label}</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-5">
        {/* User's selection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={`rounded-xl border-2 p-5 ${config.cardBg}`}
        >
          <p className="text-xs font-medium text-muted-foreground mb-1">Your Selection</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg font-semibold text-foreground">{selectedModality}</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badgeClass}`}>
              {config.badge}
            </span>
          </div>
        </motion.div>

        {/* Scenario summary */}
        {(cr?.summary || (isNoGuidelines && payload.node.summary)) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-medium text-muted-foreground mb-1">Clinical Scenario</p>
            <p className="text-foreground font-medium">
              {isNoGuidelines ? payload.node.summary : cr?.summary}
            </p>
          </motion.div>
        )}

        {/* ACR Recommendations */}
        {!isNoGuidelines && allRecs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              ACR Recommendations
            </p>
            {allRecs.map((rec) => (
              <RecommendationCard key={rec.procedure} rec={rec} />
            ))}
          </motion.div>
        )}

        {/* No-guidelines AI panel */}
        {isNoGuidelines && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-5 h-5 text-ai" />
              <p className="text-sm font-semibold text-foreground">AI Clinical Assessment</p>
            </div>
            <div className="bg-accent/50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                No ACR Appropriateness Criteria currently cover this specific clinical scenario.
              </p>
              <p className="text-sm text-muted-foreground">
                Clinical judgment and consultation with radiology is recommended. An AI-generated
                opinion can be provided based on current literature and clinical context.
              </p>
            </div>
            <div className="mt-3 bg-warning/10 border border-warning/20 rounded-lg p-3">
              <p className="text-xs text-warning-foreground flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                Final imaging decision depends on physician's clinical judgment.
              </p>
            </div>
          </motion.div>
        )}

        {/* Restart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-2"
        >
          <button
            onClick={onRestart}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity min-h-[56px]"
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
