import { useState } from "react";
import { mskTopicList } from "@/data/mskTopicList";
import { mskDecisionTrees } from "@/data/msk_decision_trees";
import { Search, ChevronRight } from "lucide-react";

interface Props {
  onSelect: (topicId: string) => void;
  onBack: () => void;
}

// IDs that actually have data in the decision-tree file
const AVAILABLE_IDS = new Set(
  (mskDecisionTrees.topics as Array<{ id: string; isEnabled: boolean }>)
    .filter((t) => t.isEnabled)
    .map((t) => t.id)
);

const TopicSelection = ({ onSelect, onBack }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = mskTopicList.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Select Clinical Scenario</h1>
      <p className="text-muted-foreground mb-6">Choose the relevant clinical presentation</p>

      <div className="relative mb-4 sticky top-16 z-10">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((topic) => {
          const available = AVAILABLE_IDS.has(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => available && onSelect(topic.id)}
              disabled={!available}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                available
                  ? "border-border bg-card hover:border-primary/40 hover:shadow-md cursor-pointer"
                  : "border-border/50 bg-muted/30 opacity-50 cursor-not-allowed"
              }`}
            >
              <span className="text-2xl">{topic.icon}</span>
              <span className="flex-1 font-medium text-foreground">{topic.name}</span>
              {available ? (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              ) : (
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  Soon
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

export default TopicSelection;
