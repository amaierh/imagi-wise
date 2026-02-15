export interface Modality {
  id: string;
  name: string;
  icon: string;
  options?: string[];
}

export const modalities: Modality[] = [
  {
    id: "us",
    name: "Ultrasound",
    icon: "📡",
  },
  {
    id: "mri",
    name: "MRI",
    icon: "🧲",
    options: [
      "MRI without IV contrast",
      "MRI with IV contrast",
      "MRI without and with IV contrast",
      "MR Arthrography",
      "MRCP",
      "MRA (MR Angiography)",
    ],
  },
  {
    id: "ct",
    name: "CT Scan",
    icon: "💿",
    options: [
      "CT without IV contrast",
      "CT with IV contrast",
      "CT without and with IV contrast",
      "CT Arthrography",
      "CTA (CT Angiography)",
    ],
  },
  {
    id: "nuclear",
    name: "Nuclear Medicine",
    icon: "☢️",
    options: [
      "Bone Scan",
      "Labeled WBC Scan",
      "Thyroid Scan",
      "HIDA Scan",
      "Renal Scan",
      "V/Q Scan",
    ],
  },
  {
    id: "pet",
    name: "PET Imaging",
    icon: "🔬",
    options: ["FDG-PET", "PET/CT"],
  },
  {
    id: "angiography",
    name: "Angiography",
    icon: "🩸",
    options: [
      "CT Angiography (CTA)",
      "MR Angiography (MRA)",
      "Conventional Angiography",
    ],
  },
  {
    id: "mammo",
    name: "Mammography",
    icon: "🎀",
  },
  {
    id: "arthro",
    name: "Arthrography",
    icon: "💉",
    options: ["CT Arthrography", "MR Arthrography"],
  },
  {
    id: "xray",
    name: "X-ray",
    icon: "⚡",
    options: ["Standard X-ray", "X-ray with special views"],
  },
];
