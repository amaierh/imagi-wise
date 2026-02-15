import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalitySelection from "@/components/assessment/ModalitySelection";
import PanelSelection from "@/components/assessment/PanelSelection";
import TopicSelection from "@/components/assessment/TopicSelection";
import QuestionFlow from "@/components/assessment/QuestionFlow";
import ResultScreen from "@/components/assessment/ResultScreen";
import type { Scenario } from "@/data/topics";

type Step = "modality" | "panel" | "topic" | "questions" | "result";

const Assessment = () => {
  const [step, setStep] = useState<Step>("modality");
  const [selectedModality, setSelectedModality] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [result, setResult] = useState<Scenario | null>(null);

  const stepNumber = { modality: 1, panel: 2, topic: 3, questions: 4, result: 5 };

  const handleModalitySelected = (modality: string) => {
    setSelectedModality(modality);
    setStep("panel");
  };

  const handlePanelSelected = () => {
    setStep("topic");
  };

  const handleTopicSelected = (topicId: string) => {
    setSelectedTopic(topicId);
    setStep("questions");
  };

  const handleResult = (scenario: Scenario) => {
    setResult(scenario);
    setStep("result");
  };

  const handleRestart = () => {
    setSelectedModality("");
    setSelectedTopic("");
    setResult(null);
    setStep("modality");
  };

  const handleBack = () => {
    if (step === "panel") setStep("modality");
    else if (step === "topic") setStep("panel");
    else if (step === "questions") setStep("topic");
  };

  return (
    <div className="min-h-screen bg-background">
      {step !== "result" && (
        <div className="sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur-md px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-primary">RadiRight</h2>
              <span className="text-xs text-muted-foreground">
                Step {stepNumber[step]} of 4
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full gradient-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(stepNumber[step] / 4) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {step === "modality" && (
            <ModalitySelection onSelect={handleModalitySelected} onBack={() => window.history.back()} />
          )}
          {step === "panel" && (
            <PanelSelection onSelect={handlePanelSelected} onBack={handleBack} />
          )}
          {step === "topic" && (
            <TopicSelection onSelect={handleTopicSelected} onBack={handleBack} />
          )}
          {step === "questions" && (
            <QuestionFlow
              topicId={selectedTopic}
              selectedModality={selectedModality}
              onResult={handleResult}
              onBack={handleBack}
            />
          )}
          {step === "result" && result && (
            <ResultScreen
              scenario={result}
              selectedModality={selectedModality}
              onRestart={handleRestart}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Assessment;
