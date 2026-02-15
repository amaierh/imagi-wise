import { useState } from "react";
import { modalities } from "@/data/modalities";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onSelect: (modality: string) => void;
  onBack: () => void;
}

const ModalitySelection = ({ onSelect, onBack }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("");

  const handleCardClick = (modality: typeof modalities[0]) => {
    if (modality.options) {
      setExpandedId(expandedId === modality.id ? null : modality.id);
    } else {
      const value = modality.name;
      setSelected(value);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Select Imaging Modality</h1>
      <p className="text-muted-foreground mb-6">Choose the imaging type you would recommend</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modalities.map((mod) => {
          const isExpanded = expandedId === mod.id;
          const isSelected = selected === mod.name || (mod.options?.includes(selected) ?? false);

          return (
            <motion.div
              key={mod.id}
              layout
              className={`rounded-lg border-2 transition-colors cursor-pointer overflow-hidden ${
                isSelected
                  ? "border-primary bg-accent"
                  : "border-border bg-card hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div
                className="flex items-center gap-3 p-4"
                onClick={() => handleCardClick(mod)}
              >
                <span className="text-3xl">{mod.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{mod.name}</p>
                  {isSelected && (
                    <p className="text-xs text-primary font-medium mt-0.5">
                      {mod.options ? selected : "Selected"}
                    </p>
                  )}
                </div>
                {isSelected && (
                  <Check className="w-5 h-5 text-primary" />
                )}
                {mod.options && (
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              <AnimatePresence>
                {isExpanded && mod.options && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border"
                  >
                    <div className="p-2 space-y-1">
                      {mod.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionSelect(opt)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selected === opt
                              ? "bg-primary text-primary-foreground font-medium"
                              : "hover:bg-muted text-foreground"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium"
        >
          Back
        </button>
        <button
          onClick={() => selected && onSelect(selected)}
          disabled={!selected}
          className="px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity min-h-[48px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ModalitySelection;
