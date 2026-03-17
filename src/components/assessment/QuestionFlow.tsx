import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mskDecisionTrees } from "@/data/msk_decision_trees";
import type { DecisionNode, QuestionNode, ResultNode, NoGuidelinesNode } from "@/data/mskTypes";
import { compareModality } from "@/data/mskTypes";

interface Props {
  topicId: string;
  selectedModality: string;
  onResult: (result: ResultPayload) => void;
  onBack: () => void;
}

export interface ResultPayload {
  type: "result" | "noGuidelines";
  node: ResultNode | NoGuidelinesNode;
  compareResult?: ReturnType<typeof compareModality>;
}

const QuestionFlow = ({ topicId, selectedModality, onResult, onBack }: Props) => {
  const topic = (mskDecisionTrees.topics as unknown as Array<{
    id: string;
    name: string;
    rootNodeId: string;
    nodes: Record<string, DecisionNode>;
  }>).find((t) => t.id === topicId);

  const [currentNodeId, setCurrentNodeId] = useState(topic?.rootNodeId ?? "");
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = topic?.nodes[currentNodeId] as DecisionNode | undefined;

  // Fire onResult when we land on a terminal node
  useEffect(() => {
    if (!currentNode) return;
    if (currentNode.type === "result") {
      const compare = compareModality(selectedModality, currentNode as ResultNode);
      onResult({ type: "result", node: currentNode as ResultNode, compareResult: compare });
    } else if (currentNode.type === "noGuidelines") {
      onResult({ type: "noGuidelines", node: currentNode as NoGuidelinesNode });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNodeId]);

  if (!topic || !currentNode) return null;
  if (currentNode.type !== "question") return null;

  const qNode = currentNode as QuestionNode;
  const progress = Math.min(((history.length + 1) / (history.length + 3)) * 100, 90);

  const handleAnswer = (nextNodeId: string) => {
    setHistory((h) => [...h, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  };

  const handleStepBack = () => {
    if (history.length === 0) {
      onBack();
      return;
    }
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentNodeId(prev);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handleStepBack}
          className="text-sm text-primary hover:underline font-medium"
        >
          ← Back
        </button>
        <span className="text-xs text-muted-foreground">
          Question {history.length + 1}
        </span>
      </div>

      <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full gradient-primary rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h2 className="text-lg font-semibold text-muted-foreground mb-4">{topic.name}</h2>

      <motion.div
        key={currentNodeId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl border border-border shadow-sm p-8"
      >
        <h3 className="text-xl font-bold text-foreground mb-3 text-center leading-snug">
          {qNode.questionText}
        </h3>

        {qNode.hint && (
          <div className="mb-6 bg-accent/60 rounded-xl px-4 py-3 text-sm text-muted-foreground text-center">
            💡 {qNode.hint}
          </div>
        )}

        <div className="flex flex-col gap-3 mt-6">
          {qNode.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(opt.nextNodeId)}
              className="w-full py-4 px-6 rounded-xl border-2 border-primary/30 text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all text-left"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionFlow;
