/**
 * Flat list of all MSK topics derived from the decision-tree data.
 * Icons use emoji until a proper icon library is wired up.
 */
export interface TopicListItem {
  id: string;
  name: string;
  icon: string;
}

const ICON_MAP: Record<string, string> = {
  elbow: "💪",
  hand: "✋",
  hip: "🦴",
  shoulder: "🤲",
  spine: "🦴",
  ankle: "🦶",
  foot: "🦶",
  knee: "🦵",
  chronic: "⚡",
  arthroplasty: "🏥",
  inflammatory: "🔥",
  tumor: "🎗️",
  compression: "💥",
  osteonecrosis: "🦴",
  osteoporosis: "🦴",
  stress: "⚡",
  infection: "🦠",
  bone_tumors: "🎗️",
  default: "🩺",
};

function iconForTopic(id: string): string {
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (id.includes(key)) return icon;
  }
  return ICON_MAP.default;
}

/** All MSK topic IDs that exist in the decision-tree data file */
export const MSK_TOPIC_IDS = [
  "acute_elbow_forearm_pain",
  "acute_hand_wrist_trauma",
  "acute_hip_pain",
  "acute_shoulder_pain",
  "acute_cervical_spine_trauma",
  "acute_thoracolumbar_spine_trauma",
  "acute_ankle_trauma",
  "acute_foot_trauma",
  "acute_knee_trauma",
  "chronic_ankle_pain",
  "chronic_elbow_pain",
  "chronic_foot_pain",
  "chronic_hand_wrist_pain",
  "chronic_hip_pain",
  "chronic_knee_pain",
  "chronic_shoulder_pain",
  "after_shoulder_arthroplasty",
  "after_hip_arthroplasty",
  "after_knee_arthroplasty",
  "inflammatory_back_pain",
  "msk_tumor_staging",
  "vertebral_compression_fractures",
  "osteonecrosis",
  "osteoporosis",
  "stress_fracture",
  "suspected_infection",
  "suspected_bone_tumors",
  "inflammatory_arthritis",
] as const;

export type MskTopicId = (typeof MSK_TOPIC_IDS)[number];

/** Human-readable names keyed by topic ID */
const TOPIC_NAMES: Record<string, string> = {
  acute_elbow_forearm_pain: "Acute Elbow or Forearm Pain",
  acute_hand_wrist_trauma: "Acute Hand and Wrist Trauma",
  acute_hip_pain: "Acute Hip Pain",
  acute_shoulder_pain: "Acute Shoulder Pain",
  acute_cervical_spine_trauma: "Acute Spinal Trauma – Cervical Spine",
  acute_thoracolumbar_spine_trauma: "Acute Spinal Trauma – Thoracic/Lumbar Spine",
  acute_ankle_trauma: "Acute Trauma to the Ankle",
  acute_foot_trauma: "Acute Trauma to the Foot",
  acute_knee_trauma: "Acute Trauma to the Knee",
  chronic_ankle_pain: "Chronic Ankle Pain",
  chronic_elbow_pain: "Chronic Elbow Pain",
  chronic_foot_pain: "Chronic Foot Pain",
  chronic_hand_wrist_pain: "Chronic Hand and Wrist Pain",
  chronic_hip_pain: "Chronic Hip Pain",
  chronic_knee_pain: "Chronic Knee Pain",
  chronic_shoulder_pain: "Chronic Shoulder Pain",
  after_shoulder_arthroplasty: "After Shoulder Arthroplasty",
  after_hip_arthroplasty: "After Hip Arthroplasty",
  after_knee_arthroplasty: "After Knee Arthroplasty",
  inflammatory_back_pain: "Inflammatory Back Pain",
  msk_tumor_staging: "MSK Tumor Staging",
  vertebral_compression_fractures: "Vertebral Compression Fractures",
  osteonecrosis: "Osteonecrosis",
  osteoporosis: "Osteoporosis",
  stress_fracture: "Stress Fracture",
  suspected_infection: "Suspected Infection",
  suspected_bone_tumors: "Suspected Bone Tumors",
  inflammatory_arthritis: "Inflammatory Arthritis",
};

export const mskTopicList: TopicListItem[] = MSK_TOPIC_IDS.map((id) => ({
  id,
  name: TOPIC_NAMES[id] ?? id,
  icon: iconForTopic(id),
}));
