import { useState } from "react";
import { modalities } from "@/data/modalities";
import { Check } from "lucide-react";

interface Props {
  onSelect: (modality: string) => void;
  onBack: () => void;
}

const ModalitySelection = ({ onSelect, onBack }: Props) => {
  const [selected, setSelected] = useState<string>("");

  const handleCardClick = (modality: typeof modalities[0]) => {
    setSelected(modality.name);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Select Imaging Modality</h1>
      <p className="text-muted-foreground mb-6">Choose the imaging type you would recommend</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modalities.map((mod) => {
          const isSelected = selected === mod.name;

          return (
            <div
              key={mod.id}
              onClick={() => handleCardClick(mod)}
              className={`rounded-lg border-2 transition-all cursor-pointer flex items-center gap-3 p-4 ${
                isSelected
                  ? "border-primary bg-accent"
                  : "border-border bg-card hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <span className="text-3xl">{mod.icon}</span>
              <p className="font-semibold text-foreground flex-1">{mod.name}</p>
              {isSelected && <Check className="w-5 h-5 text-primary" />}
            </div>
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
