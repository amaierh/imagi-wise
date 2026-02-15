import { Bone, Brain, Heart, Stethoscope } from "lucide-react";

interface Props {
  onSelect: () => void;
  onBack: () => void;
}

const panels = [
  {
    id: "msk",
    name: "Musculoskeletal",
    description: "Bones, Joints & Soft Tissue",
    topics: 28,
    icon: Bone,
    available: true,
  },
  {
    id: "chest",
    name: "Chest",
    description: "Lungs & Thorax",
    topics: 0,
    icon: Heart,
    available: false,
  },
  {
    id: "neuro",
    name: "Neurological",
    description: "Brain & Spine",
    topics: 0,
    icon: Brain,
    available: false,
  },
  {
    id: "abdominal",
    name: "Abdominal",
    description: "GI & Abdominal Organs",
    topics: 0,
    icon: Stethoscope,
    available: false,
  },
];

const PanelSelection = ({ onSelect, onBack }: Props) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Select Clinical Area</h1>
      <p className="text-muted-foreground mb-6">Choose the body system to evaluate</p>

      <div className="space-y-4">
        {panels.map((panel) => {
          const Icon = panel.icon;
          return (
            <button
              key={panel.id}
              disabled={!panel.available}
              onClick={() => panel.available && onSelect()}
              className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                panel.available
                  ? "border-primary/30 bg-card hover:border-primary hover:shadow-lg cursor-pointer"
                  : "border-border bg-muted/50 opacity-50 cursor-not-allowed"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  panel.available ? "gradient-primary" : "bg-muted"
                }`}
              >
                <Icon className={`w-6 h-6 ${panel.available ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-lg">
                  {panel.name}
                  {!panel.available && (
                    <span className="ml-2 text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">{panel.description}</p>
              </div>
              {panel.available && (
                <span className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                  {panel.topics} Topics
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-start mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PanelSelection;
