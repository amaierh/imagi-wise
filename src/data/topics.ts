export interface Scenario {
  userSelected: string;
  result: "TRUE" | "FALSE" | "SECOND_CHOICE" | "NO_GUIDELINES";
  display: string;
  message: string;
  alternatives?: string[];
  correctSpec?: string;
  aiPrompt?: string;
  aiTasks?: string[];
  disclaimer?: string;
}

export interface Evaluation {
  recommendation: string;
  scenarios: Scenario[];
}

export interface Answer {
  id: string;
  text: string;
  nextQuestion?: string;
  evaluation?: Evaluation;
}

export interface Question {
  id: string;
  text: string;
  type: "yes_no" | "multiple_choice";
  answers: Answer[];
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: "acute_elbow",
    name: "Acute Elbow or Forearm Pain",
    icon: "💪",
    questions: [
      {
        id: "q1",
        text: "Is it initial imaging?",
        type: "yes_no",
        answers: [
          {
            id: "yes",
            text: "Yes",
            evaluation: {
              recommendation: "X-ray",
              scenarios: [
                { userSelected: "Standard X-ray", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice)", message: "Correct! X-ray is the appropriate initial imaging.", alternatives: [], aiPrompt: "Explain why X-ray is the correct initial imaging for acute elbow pain" },
                { userSelected: "X-ray with special views", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice)", message: "Correct! X-ray is the appropriate initial imaging.", alternatives: [], aiPrompt: "Explain why X-ray is the correct initial imaging for acute elbow pain" },
                { userSelected: "CT without IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "CT without IV contrast is not appropriate at this stage.", alternatives: ["X-ray should be performed first"], aiPrompt: "Explain why CT is not appropriate as initial imaging and why X-ray is better" },
                { userSelected: "CT with IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "CT with IV contrast is not appropriate.", alternatives: ["X-ray should be performed first"], aiPrompt: "Explain why CT with contrast is not appropriate initially" },
                { userSelected: "MRI without IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "MRI is not appropriate at this stage.", alternatives: ["X-ray should be performed first"], aiPrompt: "Explain why MRI is not appropriate as initial imaging" },
                { userSelected: "MRI with IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "MRI with IV contrast is not appropriate at this stage.", alternatives: ["X-ray should be performed first"], aiPrompt: "Explain why MRI is not needed initially" },
                { userSelected: "Ultrasound", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "Ultrasound is not appropriate at this stage.", alternatives: ["X-ray should be performed first"], aiPrompt: "Explain why ultrasound is not appropriate as initial imaging" },
              ],
            },
          },
          { id: "no", text: "No", nextQuestion: "q2" },
        ],
      },
      {
        id: "q2",
        text: "Is initial imaging (X-ray) normal or indeterminate?",
        type: "yes_no",
        answers: [
          {
            id: "no",
            text: "No",
            evaluation: {
              recommendation: "NO_GUIDELINES",
              scenarios: [
                { userSelected: "any", result: "NO_GUIDELINES", display: "🤖 No Current Guidelines Available", message: "This specific scenario is not covered by current guidelines.", aiTasks: ["Ask additional clinical questions about the X-ray findings", "Assess clinical urgency and patient risk factors", "Provide evidence-based opinion on next steps", "Explain clinical reasoning"], disclaimer: "Final decision depends on physician's clinical judgment" },
              ],
            },
          },
          { id: "yes", text: "Yes", nextQuestion: "q3" },
        ],
      },
      {
        id: "q3",
        text: "Do you suspect fracture?",
        type: "yes_no",
        answers: [
          {
            id: "yes",
            text: "Yes",
            evaluation: {
              recommendation: "X-ray repeat in 10-14 days OR CT without IV contrast",
              scenarios: [
                { userSelected: "Standard X-ray", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice - Option 1)", message: "Correct! X-ray repeat is one of two appropriate options.", alternatives: ["CT without IV contrast"], aiPrompt: "Explain when to use X-ray repeat vs CT for suspected occult fracture" },
                { userSelected: "X-ray with special views", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice - Option 1)", message: "Correct! X-ray repeat is one of two appropriate options.", alternatives: ["CT without IV contrast"], aiPrompt: "Explain when to use X-ray repeat vs CT for suspected occult fracture" },
                { userSelected: "CT without IV contrast", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice - Option 2)", message: "Correct! CT without IV contrast is one of two appropriate options.", alternatives: ["X-ray repeat in 10-14 days"], aiPrompt: "Explain when CT is preferred over delayed X-ray for occult fracture" },
                { userSelected: "CT with IV contrast", result: "FALSE", display: "❌ FALSE - Wrong Specification", message: "CT with IV contrast is not needed. IV contrast does not add value.", correctSpec: "CT WITHOUT IV contrast", aiPrompt: "Explain why IV contrast is not needed for fracture detection" },
                { userSelected: "MRI without IV contrast", result: "SECOND_CHOICE", display: "⚠️ 2ND CHOICE - May Be Appropriate", message: "MRI may be considered but is not the primary recommendation.", alternatives: ["X-ray repeat in 10-14 days", "CT without IV contrast"], aiPrompt: "Explain why X-ray or CT are preferred over MRI for fracture detection" },
                { userSelected: "MRI with IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "MRI with contrast is not indicated for suspected fracture.", alternatives: ["X-ray repeat OR CT without IV contrast"], aiPrompt: "Explain why MRI with contrast is not needed" },
                { userSelected: "Ultrasound", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "Ultrasound is not appropriate for fracture evaluation.", alternatives: ["X-ray repeat OR CT without IV contrast"], aiPrompt: "Explain why ultrasound is not suitable for fracture assessment" },
              ],
            },
          },
          { id: "no", text: "No", nextQuestion: "q4" },
        ],
      },
      {
        id: "q4",
        text: "Do you suspect tendon, ligament, or muscle injury?",
        type: "yes_no",
        answers: [
          {
            id: "yes",
            text: "Yes",
            evaluation: {
              recommendation: "Ultrasound OR MRI without IV contrast",
              scenarios: [
                { userSelected: "Ultrasound", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice - Option 1)", message: "Correct! Ultrasound is one of two appropriate options.", alternatives: ["MRI without IV contrast"], aiPrompt: "Explain advantages of ultrasound for soft tissue evaluation" },
                { userSelected: "MRI without IV contrast", result: "TRUE", display: "✅ TRUE - Imaging Indicated (1st Choice - Option 2)", message: "Correct! MRI without IV contrast is one of two appropriate options.", alternatives: ["Ultrasound"], aiPrompt: "Explain when MRI is preferred over ultrasound for soft tissue" },
                { userSelected: "MRI with IV contrast", result: "FALSE", display: "❌ FALSE - Wrong Specification", message: "IV contrast is not needed for evaluating tendons and ligaments.", correctSpec: "MRI WITHOUT IV contrast", aiPrompt: "Explain why IV contrast doesn't add value for tendon/ligament imaging" },
                { userSelected: "Standard X-ray", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "X-ray cannot visualize soft tissues.", alternatives: ["Ultrasound OR MRI without IV contrast"], aiPrompt: "Explain why X-ray cannot evaluate soft tissue injuries" },
                { userSelected: "X-ray with special views", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "X-ray cannot visualize soft tissues.", alternatives: ["Ultrasound OR MRI without IV contrast"], aiPrompt: "Explain why X-ray cannot evaluate soft tissue injuries" },
                { userSelected: "CT without IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "CT has poor soft tissue contrast.", alternatives: ["Ultrasound OR MRI without IV contrast"], aiPrompt: "Explain why CT is not suitable for soft tissue evaluation" },
                { userSelected: "CT with IV contrast", result: "FALSE", display: "❌ FALSE - Imaging NOT Indicated", message: "CT is not suitable for soft tissue evaluation.", alternatives: ["Ultrasound OR MRI without IV contrast"], aiPrompt: "Explain why CT is not suitable for soft tissue evaluation" },
              ],
            },
          },
          {
            id: "no",
            text: "No",
            evaluation: {
              recommendation: "NO_GUIDELINES",
              scenarios: [
                { userSelected: "any", result: "NO_GUIDELINES", display: "🤖 No Current Guidelines Available", message: "This specific scenario is not covered by current guidelines.", aiTasks: ["Ask about pain severity and duration", "Assess clinical urgency", "Provide opinion on conservative management vs imaging", "Explain clinical reasoning"], disclaimer: "Final decision depends on physician's clinical judgment" },
              ],
            },
          },
        ],
      },
    ],
  },
];

export const allTopicsList = [
  { id: "acute_elbow", name: "Acute Elbow or Forearm Pain", icon: "💪" },
  { id: "acute_hand", name: "Acute Hand and Wrist Trauma", icon: "✋" },
  { id: "acute_hip", name: "Acute Hip Pain", icon: "🦴" },
  { id: "acute_shoulder", name: "Acute Shoulder Pain", icon: "🦴" },
  { id: "acute_cervical", name: "Acute Spinal Trauma - Cervical", icon: "🦴" },
  { id: "acute_thoracic", name: "Acute Spinal Trauma - Thoracic/Lumbar", icon: "🦴" },
  { id: "acute_ankle", name: "Acute Trauma to Ankle", icon: "🦶" },
  { id: "acute_foot", name: "Acute Trauma to Foot", icon: "🦶" },
  { id: "acute_knee", name: "Acute Trauma to Knee", icon: "🦵" },
  { id: "chronic_ankle", name: "Chronic Ankle Pain", icon: "⚡" },
  { id: "chronic_elbow", name: "Chronic Elbow Pain", icon: "⚡" },
  { id: "chronic_foot", name: "Chronic Foot Pain", icon: "⚡" },
  { id: "chronic_hand", name: "Chronic Hand and Wrist Pain", icon: "⚡" },
  { id: "chronic_hip", name: "Chronic Hip Pain", icon: "⚡" },
  { id: "chronic_knee", name: "Chronic Knee Pain", icon: "⚡" },
  { id: "chronic_shoulder", name: "Chronic Shoulder Pain", icon: "⚡" },
  { id: "after_shoulder", name: "After Shoulder Arthroplasty", icon: "🏥" },
  { id: "after_hip", name: "After Hip Arthroplasty", icon: "🏥" },
  { id: "after_knee", name: "After Knee Arthroplasty", icon: "🏥" },
  { id: "inflammatory_back", name: "Inflammatory Back Pain", icon: "🔥" },
  { id: "msk_tumor", name: "MSK Tumor Staging", icon: "🎗️" },
  { id: "compression_fx", name: "Vertebral Compression Fractures", icon: "💥" },
  { id: "osteonecrosis", name: "Osteonecrosis", icon: "🦴" },
  { id: "osteoporosis", name: "Osteoporosis", icon: "🦴" },
  { id: "stress_fracture", name: "Stress Fracture", icon: "⚡" },
  { id: "infection", name: "Suspected Infection", icon: "🦠" },
  { id: "bone_tumors", name: "Suspected Bone Tumors", icon: "🎗️" },
  { id: "inflammatory_arthritis", name: "Inflammatory Arthritis", icon: "🔬" },
];
