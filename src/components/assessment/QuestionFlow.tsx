import { useState, useMemo } from "react";
import { topics, type Scenario, type Question } from "@/data/topics";
import { motion } from "framer-motion";

interface Props {
  topicId: string;
  selectedModality: string;
  onResult: (scenario: Scenario) => void;
  onBack: () => void;
}

const QuestionFlow = ({ topicId, selectedModality, onResult, onBack }: Props) => {
  const topic = topics.find((t) => t.id === topicId);
  const [currentQuestionId, setCurrentQuestionId] = useState(topic?.questions[0]?.id || "");
  const [answeredCount, setAnsweredCount] = useState(0);

  const currentQuestion = useMemo(
    () => topic?.questions.find((q) => q.id === currentQuestionId),
    [topic, currentQuestionId]
  );

  if (!topic || !currentQuestion) return null;

  const totalQuestions = topic.questions.length;

  const handleAnswer = (answerId: string) => {
    const answer = currentQuestion.answers.find((a) => a.id === answerId);
    if (!answer) return;

    setAnsweredCount((c) => c + 1);

    if (answer.evaluation) {
      // Find matching scenario
      const scenario = answer.evaluation.scenarios.find(
        (s) => s.userSelected === selectedModality || s.userSelected === "any"
      );

      if (scenario) {
        onResult(scenario);
      } else {
        // Default FALSE if no specific scenario
        onResult({
          userSelected: selectedModality,
          result: "FALSE",
          display: "❌ FALSE - Imaging NOT Indicated",
          message: `${selectedModality} is not the recommended imaging for this scenario.`,
          alternatives: [answer.evaluation.recommendation],
          aiPrompt: "Explain the appropriate imaging for this clinical scenario",
        });
      }
    } else if (answer.nextQuestion) {
      setCurrentQuestionId(answer.nextQuestion);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onBack}
          className="text-sm text-primary hover:underline font-medium"
        >
          ← Back to Topics
        </button>
        <span className="text-xs text-muted-foreground">
          Question {answeredCount + 1} of ~{totalQuestions}
        </span>
      </div>

      <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full gradient-primary rounded-full"
          animate={{ width: `${((answeredCount + 1) / totalQuestions) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h2 className="text-lg font-semibold text-muted-foreground mb-2">{topic.name}</h2>

      <motion.div
        key={currentQuestionId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl border border-border shadow-sm p-8 text-center"
      >
        <span className="text-4xl mb-4 block">❓</span>
        <h3 className="text-xl font-bold text-foreground mb-8">{currentQuestion.text}</h3>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswer(answer.id)}
              className="flex-1 py-4 px-6 rounded-xl border-2 border-primary/30 text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all min-h-[56px]"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionFlow;
