// ─── Types for the new MSK decision-tree data format ───────────────────────

export interface Recommendation {
  modality: string;
  modalityAr: string;
  procedure: string;
  procedureAr: string;
  priority: 1 | 2;
}

export interface NodeOption {
  id: string;
  text: string;
  textAr: string;
  nextNodeId: string;
}

export interface QuestionNode {
  id: string;
  type: "question";
  questionText: string;
  questionTextAr: string;
  hint?: string;
  hintAr?: string;
  options: NodeOption[];
}

export interface ResultNode {
  id: string;
  type: "result";
  summary: string;
  summaryAr: string;
  recommendations: Recommendation[];
}

export interface NoGuidelinesNode {
  id: string;
  type: "noGuidelines";
  summary: string;
  summaryAr: string;
}

export type DecisionNode = QuestionNode | ResultNode | NoGuidelinesNode;

export interface MskTopic {
  id: string;
  panelId: string;
  name: string;
  nameAr: string;
  description: string;
  iconName: string;
  rootNodeId: string;
  isEnabled: boolean;
  nodes: Record<string, DecisionNode>;
}

export interface MskPanel {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  iconName: string;
  isEnabled: boolean;
}

// ─── Comparison result types ────────────────────────────────────────────────

export type CompareResult = "FIRST_CHOICE" | "ALTERNATIVE" | "NOT_INDICATED" | "NO_GUIDELINES";

export interface ModalityCompareResult {
  result: CompareResult;
  selectedModality: string;
  topModalities: Recommendation[]; // priority 1
  altModalities: Recommendation[]; // priority 2
  summary: string;
}

/**
 * Normalise a modality label for fuzzy matching.
 * e.g.  "MRI without IV contrast" → "mri"
 *        "CT Scan" → "ct"
 *        "Ultrasound" → "us"  (via alias map)
 */
const ALIAS: Record<string, string> = {
  "ultrasound": "us",
  "x-ray": "xray",
  "xray": "xray",
  "radiograph": "xray",
  "ct scan": "ct",
  "cta": "cta",
  "ct angiography": "cta",
  "mra": "mra",
  "mr angiography": "mra",
  "mri": "mri",
  "mr arthrography": "mr arthrography",
  "ct arthrography": "ct arthrography",
  "nuclear medicine": "nuclear",
  "pet imaging": "pet",
  "angiography": "angiography",
  "mammography": "mammo",
};

function normalise(label: string): string {
  const lower = label.toLowerCase().trim();
  for (const [key, val] of Object.entries(ALIAS)) {
    if (lower.startsWith(key)) return val;
  }
  // strip protocol qualifiers like "without IV contrast"
  return lower
    .replace(/\s*(without|with|and)\s*(iv\s*)?contrast/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Given the user's selected modality string (from ModalitySelection) and a
 * result node, determine whether the user made the right choice.
 */
export function compareModality(
  userSelected: string,
  node: ResultNode
): ModalityCompareResult {
  const norm = normalise(userSelected);
  const top = node.recommendations.filter((r) => r.priority === 1);
  const alt = node.recommendations.filter((r) => r.priority === 2);

  let result: CompareResult = "NOT_INDICATED";

  if (top.some((r) => normalise(r.modality) === norm)) {
    result = "FIRST_CHOICE";
  } else if (alt.some((r) => normalise(r.modality) === norm)) {
    result = "ALTERNATIVE";
  }

  return {
    result,
    selectedModality: userSelected,
    topModalities: top,
    altModalities: alt,
    summary: node.summary,
  };
}
