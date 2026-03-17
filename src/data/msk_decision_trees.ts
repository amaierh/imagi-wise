export const mskDecisionTrees =
{
  "panel_info": {
    "id": "msk",
    "name": "Musculoskeletal",
    "nameAr": "العضلات والهيكل العظمي",
    "description": "ACR Appropriateness Criteria for musculoskeletal imaging",
    "descriptionAr": "معايير ملاءمة ACR لتصوير العضلات والهيكل العظمي",
    "iconName": "skeleton",
    "isEnabled": true
  },
  "topics": [
    {
      "id": "acute_elbow_forearm_pain",
      "panelId": "msk",
      "name": "Acute Elbow or Forearm Pain",
      "nameAr": "[Arabic: Acute Elbow or Forearm Pain]",
      "description": "Imaging for acute elbow or forearm pain",
      "descriptionAr": "[Arabic: Imaging for acute elbow or forearm pain]",
      "iconName": "elbow",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute elbow or forearm pain",
          "summaryAr": "[Arabic: Initial imaging for acute elbow or forearm pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs elbow or forearm",
              "procedureAr": "[Arabic: Radiographs elbow or forearm]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Is initial imaging (X-ray) normal or indeterminate?",
          "questionTextAr": "[Arabic: Is initial imaging (X-ray) normal or indeterminate?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "No (abnormal findings)",
              "textAr": "[Arabic: No (abnormal findings)]",
              "nextNodeId": "r_no_imaging"
            },
            {
              "id": "q2_a2",
              "text": "Yes (normal or indeterminate)",
              "textAr": "[Arabic: Yes (normal or indeterminate)]",
              "nextNodeId": "q3"
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "Do you suspect fracture?",
          "questionTextAr": "[Arabic: Do you suspect fracture?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q3_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q4"
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Imaging for suspected occult fracture",
          "summaryAr": "[Arabic: Imaging for suspected occult fracture]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs repeat in 10-14 days",
              "procedureAr": "[Arabic: Radiographs repeat in 10-14 days]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT elbow or forearm without IV contrast",
              "procedureAr": "[Arabic: CT elbow or forearm without IV contrast]",
              "priority": 1
            }
          ]
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "Do you suspect tendon, ligament, or muscle injury?",
          "questionTextAr": "[Arabic: Do you suspect tendon, ligament, or muscle injury?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_soft_tissue"
            },
            {
              "id": "q4_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging2"
            }
          ]
        },
        "r_soft_tissue": {
          "id": "r_soft_tissue",
          "type": "result",
          "summary": "Imaging for suspected soft tissue injury",
          "summaryAr": "[Arabic: Imaging for suspected soft tissue injury]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound elbow or forearm",
              "procedureAr": "[Arabic: Ultrasound elbow or forearm]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow or forearm without IV contrast",
              "procedureAr": "[Arabic: MRI elbow or forearm without IV contrast]",
              "priority": 1
            }
          ]
        },
        "r_no_imaging2": {
          "id": "r_no_imaging2",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "r_no_guidelines_example": {
          "id": "r_no_guidelines_example",
          "type": "noGuidelines",
          "summary": "No ACR guidelines currently cover this specific clinical scenario. Clinical judgment and consultation with radiology is recommended.",
          "summaryAr": "لا توجد حاليًا إرشادات ACR تغطي هذا السيناريو السريري المحدد. يُنصح بالحكم السريري والتشاور مع قسم الأشعة."
        }
      }
    },
    {
      "id": "acute_hand_wrist_trauma",
      "panelId": "msk",
      "name": "Acute Hand and Wrist Trauma",
      "nameAr": "[Arabic: Acute Hand and Wrist Trauma]",
      "description": "Imaging for acute hand and wrist trauma",
      "descriptionAr": "[Arabic: Imaging for acute hand and wrist trauma]",
      "iconName": "hand",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute hand and wrist trauma",
          "summaryAr": "[Arabic: Initial imaging for acute hand and wrist trauma]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs hand or wrist",
              "procedureAr": "[Arabic: Radiographs hand or wrist]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Is initial imaging (X-ray) normal or equivocal?",
          "questionTextAr": "[Arabic: Is initial imaging (X-ray) normal or equivocal?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Yes (normal or equivocal)",
              "textAr": "[Arabic: Yes (normal or equivocal)]",
              "nextNodeId": "q3"
            },
            {
              "id": "q2_a2",
              "text": "No (abnormal findings)",
              "textAr": "[Arabic: No (abnormal findings)]",
              "nextNodeId": "q4"
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "Is there a foreign body in the soft tissues of the hand or wrist?",
          "questionTextAr": "[Arabic: Is there a foreign body in the soft tissues of the hand or wrist?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_occult"
            },
            {
              "id": "q3_a2",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_foreign_body"
            }
          ]
        },
        "r_occult": {
          "id": "r_occult",
          "type": "result",
          "summary": "Imaging for suspected occult fracture (no foreign body)",
          "summaryAr": "[Arabic: Imaging for suspected occult fracture (no foreign body)]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs repeat in 10-14 days",
              "procedureAr": "[Arabic: Radiographs repeat in 10-14 days]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand or wrist without IV contrast",
              "procedureAr": "[Arabic: MRI hand or wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hand or wrist without IV contrast",
              "procedureAr": "[Arabic: CT hand or wrist without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_foreign_body": {
          "id": "r_foreign_body",
          "type": "result",
          "summary": "Imaging for suspected foreign body",
          "summaryAr": "[Arabic: Imaging for suspected foreign body]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hand or wrist",
              "procedureAr": "[Arabic: Ultrasound hand or wrist]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hand or wrist without IV contrast",
              "procedureAr": "[Arabic: CT hand or wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand or wrist without IV contrast",
              "procedureAr": "[Arabic: MRI hand or wrist without IV contrast]",
              "priority": 2
            }
          ]
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "What does the initial imaging show?",
          "questionTextAr": "[Arabic: What does the initial imaging show?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "Acute wrist fracture",
              "textAr": "[Arabic: Acute wrist fracture]",
              "nextNodeId": "q5"
            },
            {
              "id": "q4_a2",
              "text": "Acute hand fracture",
              "textAr": "[Arabic: Acute hand fracture]",
              "nextNodeId": "q6"
            },
            {
              "id": "q4_a3",
              "text": "Distal radioulnar joint or carpal malalignment (no fracture)",
              "textAr": "[Arabic: Distal radioulnar joint or carpal malalignment (no fracture)]",
              "nextNodeId": "r_wrist_malalign"
            },
            {
              "id": "q4_a4",
              "text": "MCP/IP joint malalignment (no fracture)",
              "textAr": "[Arabic: MCP/IP joint malalignment (no fracture)]",
              "nextNodeId": "r_hand_malalign"
            },
            {
              "id": "q4_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_wrist_malalign": {
          "id": "r_wrist_malalign",
          "type": "result",
          "summary": "Imaging for wrist joint malalignment without fracture",
          "summaryAr": "[Arabic: Imaging for wrist joint malalignment without fracture]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography wrist",
              "procedureAr": "[Arabic: MR arthrography wrist]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI wrist without IV contrast",
              "procedureAr": "[Arabic: MRI wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT wrist without IV contrast bilateral",
              "procedureAr": "[Arabic: CT wrist without IV contrast bilateral]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography wrist",
              "procedureAr": "[Arabic: CT arthrography wrist]",
              "priority": 2
            }
          ]
        },
        "r_hand_malalign": {
          "id": "r_hand_malalign",
          "type": "result",
          "summary": "Imaging for hand joint malalignment without fracture",
          "summaryAr": "[Arabic: Imaging for hand joint malalignment without fracture]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hand",
              "procedureAr": "[Arabic: Ultrasound hand]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand without IV contrast",
              "procedureAr": "[Arabic: MRI hand without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q5": {
          "id": "q5",
          "type": "question",
          "questionText": "Do you suspect wrist tendon or ligament trauma?",
          "questionTextAr": "[Arabic: Do you suspect wrist tendon or ligament trauma?]",
          "options": [
            {
              "id": "q5_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_wrist_soft"
            },
            {
              "id": "q5_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_wrist_soft": {
          "id": "r_wrist_soft",
          "type": "result",
          "summary": "Imaging for wrist soft tissue injury with fracture",
          "summaryAr": "[Arabic: Imaging for wrist soft tissue injury with fracture]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound wrist",
              "procedureAr": "[Arabic: Ultrasound wrist]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography wrist",
              "procedureAr": "[Arabic: MR arthrography wrist]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI wrist without IV contrast",
              "procedureAr": "[Arabic: MRI wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography wrist",
              "procedureAr": "[Arabic: CT arthrography wrist]",
              "priority": 2
            }
          ]
        },
        "q6": {
          "id": "q6",
          "type": "question",
          "questionText": "Do you suspect hand tendon or ligament trauma?",
          "questionTextAr": "[Arabic: Do you suspect hand tendon or ligament trauma?]",
          "options": [
            {
              "id": "q6_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_hand_soft"
            },
            {
              "id": "q6_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_hand_soft": {
          "id": "r_hand_soft",
          "type": "result",
          "summary": "Imaging for hand soft tissue injury with fracture",
          "summaryAr": "[Arabic: Imaging for hand soft tissue injury with fracture]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hand",
              "procedureAr": "[Arabic: Ultrasound hand]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand without IV contrast",
              "procedureAr": "[Arabic: MRI hand without IV contrast]",
              "priority": 2
            }
          ]
        }
      }
    },
    {
      "id": "acute_hip_pain",
      "panelId": "msk",
      "name": "Acute Hip Pain",
      "nameAr": "[Arabic: Acute Hip Pain]",
      "description": "Imaging for acute hip pain",
      "descriptionAr": "[Arabic: Imaging for acute hip pain]",
      "iconName": "hip",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute hip pain",
          "summaryAr": "[Arabic: Initial imaging for acute hip pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs hip",
              "procedureAr": "[Arabic: Radiographs hip]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Is initial imaging (X-ray) normal or indeterminate?",
          "questionTextAr": "[Arabic: Is initial imaging (X-ray) normal or indeterminate?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "No (abnormal findings)",
              "textAr": "[Arabic: No (abnormal findings)]",
              "nextNodeId": "q3"
            },
            {
              "id": "q2_a2",
              "text": "Yes (normal or indeterminate)",
              "textAr": "[Arabic: Yes (normal or indeterminate)]",
              "nextNodeId": "q4"
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "What does the initial imaging show?",
          "questionTextAr": "[Arabic: What does the initial imaging show?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "Hip fracture",
              "textAr": "[Arabic: Hip fracture]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q3_a2",
              "text": "Hip dislocation (post reduction imaging)",
              "textAr": "[Arabic: Hip dislocation (post reduction imaging)]",
              "nextNodeId": "r_dislocation"
            },
            {
              "id": "q3_a3",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Additional imaging for hip fracture",
          "summaryAr": "[Arabic: Additional imaging for hip fracture]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_dislocation": {
          "id": "r_dislocation",
          "type": "result",
          "summary": "Post-reduction imaging for hip dislocation",
          "summaryAr": "[Arabic: Post-reduction imaging for hip dislocation]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs hip",
              "procedureAr": "[Arabic: Radiographs hip]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "Do you suspect fracture?",
          "questionTextAr": "[Arabic: Do you suspect fracture?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_occult_fracture"
            },
            {
              "id": "q4_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q5"
            }
          ]
        },
        "r_occult_fracture": {
          "id": "r_occult_fracture",
          "type": "result",
          "summary": "Imaging for suspected occult hip fracture",
          "summaryAr": "[Arabic: Imaging for suspected occult hip fracture]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "q5": {
          "id": "q5",
          "type": "question",
          "questionText": "Do you suspect tendon, muscle, or ligament injury?",
          "questionTextAr": "[Arabic: Do you suspect tendon, muscle, or ligament injury?]",
          "options": [
            {
              "id": "q5_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_soft_tissue"
            },
            {
              "id": "q5_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_soft_tissue": {
          "id": "r_soft_tissue",
          "type": "result",
          "summary": "Imaging for suspected soft tissue injury of the hip",
          "summaryAr": "[Arabic: Imaging for suspected soft tissue injury of the hip]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "acute_shoulder_pain",
      "panelId": "msk",
      "name": "Acute Shoulder Pain",
      "nameAr": "[Arabic: Acute Shoulder Pain]",
      "description": "Imaging for acute shoulder pain",
      "descriptionAr": "[Arabic: Imaging for acute shoulder pain]",
      "iconName": "shoulder",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute shoulder pain",
          "summaryAr": "[Arabic: Initial imaging for acute shoulder pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs shoulder",
              "procedureAr": "[Arabic: Radiographs shoulder]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Is initial imaging (X-ray) normal or indeterminate?",
          "questionTextAr": "[Arabic: Is initial imaging (X-ray) normal or indeterminate?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "No (abnormal findings)",
              "textAr": "[Arabic: No (abnormal findings)]",
              "nextNodeId": "q3"
            },
            {
              "id": "q2_a2",
              "text": "Yes (normal or indeterminate)",
              "textAr": "[Arabic: Yes (normal or indeterminate)]",
              "nextNodeId": "q4"
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "What does the initial imaging show?",
          "questionTextAr": "[Arabic: What does the initial imaging show?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "Proximal humerus, scapular, or clavicle fracture",
              "textAr": "[Arabic: Proximal humerus, scapular, or clavicle fracture]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q3_a2",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Additional imaging for shoulder fracture",
          "summaryAr": "[Arabic: Additional imaging for shoulder fracture]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "What is the clinical suspicion?",
          "questionTextAr": "[Arabic: What is the clinical suspicion?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "Occult fracture",
              "textAr": "[Arabic: Occult fracture]",
              "nextNodeId": "r_occult"
            },
            {
              "id": "q4_a2",
              "text": "Dislocation or instability",
              "textAr": "[Arabic: Dislocation or instability]",
              "nextNodeId": "r_instability"
            },
            {
              "id": "q4_a3",
              "text": "Labral tear",
              "textAr": "[Arabic: Labral tear]",
              "nextNodeId": "r_labral"
            },
            {
              "id": "q4_a4",
              "text": "Rotator cuff tear",
              "textAr": "[Arabic: Rotator cuff tear]",
              "nextNodeId": "r_rotator"
            },
            {
              "id": "q4_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_occult": {
          "id": "r_occult",
          "type": "result",
          "summary": "Imaging for suspected occult shoulder fracture",
          "summaryAr": "[Arabic: Imaging for suspected occult shoulder fracture]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_instability": {
          "id": "r_instability",
          "type": "result",
          "summary": "Imaging for suspected dislocation or instability",
          "summaryAr": "[Arabic: Imaging for suspected dislocation or instability]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_labral": {
          "id": "r_labral",
          "type": "result",
          "summary": "Imaging for suspected labral tear",
          "summaryAr": "[Arabic: Imaging for suspected labral tear]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography shoulder",
              "procedureAr": "[Arabic: CT arthrography shoulder]",
              "priority": 2
            }
          ]
        },
        "r_rotator": {
          "id": "r_rotator",
          "type": "result",
          "summary": "Imaging for suspected rotator cuff tear",
          "summaryAr": "[Arabic: Imaging for suspected rotator cuff tear]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            }
          ]
        }
      }
    },
    {
      "id": "acute_cervical_spine_trauma",
      "panelId": "msk",
      "name": "Acute Spinal Trauma - Cervical Spine",
      "nameAr": "[Arabic: Acute Spinal Trauma - Cervical Spine]",
      "description": "Imaging for acute cervical spine trauma",
      "descriptionAr": "[Arabic: Imaging for acute cervical spine trauma]",
      "iconName": "spine",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Patient age 16 years or older with acute cervical spine blunt trauma. Do Canadian C-Spine Rule (CCR) or NEXUS criteria indicate imaging?",
          "questionTextAr": "[Arabic: Patient age 16 years or older with acute cervical spine blunt trauma. Do Canadian C-Spine Rule (CCR) or NEXUS criteria indicate imaging?]",
          "hint": "CCR: Age ≥65, dangerous mechanism, paresthesias. NEXUS: Midline tenderness, altered consciousness, intoxication, distracting injury, neurologic deficit",
          "hintAr": "[Arabic: CCR/NEXUS criteria hint]",
          "options": [
            {
              "id": "q1_a1",
              "text": "No (low-risk criteria met)",
              "textAr": "[Arabic: No (low-risk criteria met)]",
              "nextNodeId": "r_no_imaging"
            },
            {
              "id": "q1_a2",
              "text": "Yes (imaging indicated)",
              "textAr": "[Arabic: Yes (imaging indicated)]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q2_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q3"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute cervical spine trauma",
          "summaryAr": "[Arabic: Initial imaging for acute cervical spine trauma]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT cervical spine without IV contrast",
              "procedureAr": "[Arabic: CT cervical spine without IV contrast]",
              "priority": 1
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "What are the clinical findings?",
          "questionTextAr": "[Arabic: What are the clinical findings?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "No unstable injury initially but kept in collar for neck pain, no new neurologic symptoms",
              "textAr": "[Arabic: No unstable injury initially but kept in collar for neck pain, no new neurologic symptoms]",
              "nextNodeId": "r_collar"
            },
            {
              "id": "q3_a2",
              "text": "Suspected arterial injury with or without positive cervical spine CT",
              "textAr": "[Arabic: Suspected arterial injury with or without positive cervical spine CT]",
              "nextNodeId": "r_arterial"
            },
            {
              "id": "q3_a3",
              "text": "Suspected or confirmed ligamentous, spinal cord, or nerve root injury",
              "textAr": "[Arabic: Suspected or confirmed ligamentous, spinal cord, or nerve root injury]",
              "nextNodeId": "r_ligament"
            },
            {
              "id": "q3_a4",
              "text": "Obtunded patient, no trauma on CT",
              "textAr": "[Arabic: Obtunded patient, no trauma on CT]",
              "nextNodeId": "r_obtunded"
            },
            {
              "id": "q3_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_collar": {
          "id": "r_collar",
          "type": "result",
          "summary": "Imaging for persistent neck pain in collar",
          "summaryAr": "[Arabic: Imaging for persistent neck pain in collar]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT cervical spine without IV contrast",
              "procedureAr": "[Arabic: CT cervical spine without IV contrast]",
              "priority": 1
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs cervical spine",
              "procedureAr": "[Arabic: Radiographs cervical spine]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI cervical spine without IV contrast",
              "procedureAr": "[Arabic: MRI cervical spine without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_arterial": {
          "id": "r_arterial",
          "type": "result",
          "summary": "Imaging for suspected arterial injury",
          "summaryAr": "[Arabic: Imaging for suspected arterial injury]",
          "recommendations": [
            {
              "modality": "CTA",
              "modalityAr": "[Arabic: CTA]",
              "procedure": "CTA head and neck with IV contrast",
              "procedureAr": "[Arabic: CTA head and neck with IV contrast]",
              "priority": 1
            }
          ]
        },
        "r_ligament": {
          "id": "r_ligament",
          "type": "result",
          "summary": "Imaging for suspected ligamentous/cord/nerve root injury",
          "summaryAr": "[Arabic: Imaging for suspected ligamentous/cord/nerve root injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 1
            }
          ]
        },
        "r_obtunded": {
          "id": "r_obtunded",
          "type": "result",
          "summary": "Imaging for obtunded patient with negative CT",
          "summaryAr": "[Arabic: Imaging for obtunded patient with negative CT]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI cervical spine without IV contrast",
              "procedureAr": "[Arabic: MRI cervical spine without IV contrast]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "acute_thoracolumbar_spine_trauma",
      "panelId": "msk",
      "name": "Acute Spinal Trauma - Thoracic/Lumbar Spine",
      "nameAr": "[Arabic: Acute Spinal Trauma - Thoracic/Lumbar Spine]",
      "description": "Imaging for acute thoracic or lumbar spine trauma",
      "descriptionAr": "[Arabic: Imaging for acute thoracic or lumbar spine trauma]",
      "iconName": "spine",
      "rootNodeId": "atlst_q1",
      "isEnabled": true,
      "nodes": {
        "atlst_q1": {
          "id": "atlst_q1",
          "type": "question",
          "questionText": "Age 16 years or older with acute thoracic or lumbar spine blunt trauma in a high-risk or unexaminable patient. Is it initial imaging?",
          "questionTextAr": "[Arabic: Age 16 years or older with acute thoracic or lumbar spine blunt trauma in a high-risk or unexaminable patient. Is it initial imaging?]",
          "options": [
            {
              "id": "atlst_q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "atlst_r_initial"
            },
            {
              "id": "atlst_q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "atlst_q2"
            }
          ]
        },
        "atlst_r_initial": {
          "id": "atlst_r_initial",
          "type": "result",
          "summary": "Initial imaging for acute thoracic/lumbar spine trauma",
          "summaryAr": "[Arabic: Initial imaging for acute thoracic/lumbar spine trauma]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT spine area of interest without IV contrast",
              "procedureAr": "[Arabic: CT spine area of interest without IV contrast]",
              "priority": 1
            }
          ]
        },
        "atlst_q2": {
          "id": "atlst_q2",
          "type": "question",
          "questionText": "Do you suspect ligamentous, spinal cord, or nerve root injury?",
          "questionTextAr": "[Arabic: Do you suspect ligamentous, spinal cord, or nerve root injury?]",
          "options": [
            {
              "id": "atlst_q2_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "atlst_r_ligament"
            },
            {
              "id": "atlst_q2_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "atlst_r_no_imaging"
            }
          ]
        },
        "atlst_r_ligament": {
          "id": "atlst_r_ligament",
          "type": "result",
          "summary": "Imaging for suspected ligamentous/cord/nerve root injury",
          "summaryAr": "[Arabic: Imaging for suspected ligamentous/cord/nerve root injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 1
            }
          ]
        },
        "atlst_r_no_imaging": {
          "id": "atlst_r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    },
    {
      "id": "acute_ankle_trauma",
      "panelId": "msk",
      "name": "Acute Trauma to the Ankle",
      "nameAr": "[Arabic: Acute Trauma to the Ankle]",
      "description": "Imaging for acute ankle trauma",
      "descriptionAr": "[Arabic: Imaging for acute ankle trauma]",
      "iconName": "ankle",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult or child ≥5 years old with acute trauma to ankle. Are there exclusionary criteria (neurologic disorder, neuropathy, etc.)?",
          "questionTextAr": "[Arabic: Adult or child ≥5 years old with acute trauma to ankle. Are there exclusionary criteria?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes (exclusionary criteria present)",
              "textAr": "[Arabic: Yes (exclusionary criteria present)]",
              "nextNodeId": "q2"
            },
            {
              "id": "q1_a2",
              "text": "No (can apply Ottawa rules)",
              "textAr": "[Arabic: No (can apply Ottawa rules)]",
              "nextNodeId": "q3"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Patient with exclusionary criteria. Is it initial imaging?",
          "questionTextAr": "[Arabic: Patient with exclusionary criteria. Is it initial imaging?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_exclusion_initial"
            },
            {
              "id": "q2_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_specialist"
            }
          ]
        },
        "r_exclusion_initial": {
          "id": "r_exclusion_initial",
          "type": "result",
          "summary": "Initial imaging for patient with exclusionary criteria",
          "summaryAr": "[Arabic: Initial imaging for patient with exclusionary criteria]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle",
              "procedureAr": "[Arabic: Radiographs ankle]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_specialist": {
          "id": "r_specialist",
          "type": "result",
          "summary": "Seek specialist evaluation",
          "summaryAr": "[Arabic: Seek specialist evaluation]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "Specialist evaluation recommended",
              "procedureAr": "[Arabic: Specialist evaluation recommended]",
              "priority": 1
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "Does the patient meet Ottawa Ankle Rules criteria?",
          "questionTextAr": "[Arabic: Does the patient meet Ottawa Ankle Rules criteria?]",
          "hint": "Ottawa Ankle Rules: Inability to bear weight OR point tenderness over malleoli/talus/calcaneus OR inability to walk 4 steps",
          "hintAr": "[Arabic: Ottawa Ankle Rules criteria]",
          "options": [
            {
              "id": "q3_a1",
              "text": "No (Ottawa Rules negative)",
              "textAr": "[Arabic: No (Ottawa Rules negative)]",
              "nextNodeId": "r_no_imaging"
            },
            {
              "id": "q3_a2",
              "text": "Yes (Ottawa Rules positive)",
              "textAr": "[Arabic: Yes (Ottawa Rules positive)]",
              "nextNodeId": "q4"
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q4_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q5"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute ankle trauma",
          "summaryAr": "[Arabic: Initial imaging for acute ankle trauma]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle",
              "procedureAr": "[Arabic: Radiographs ankle]",
              "priority": 1
            }
          ]
        },
        "q5": {
          "id": "q5",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical situation?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical situation?]",
          "options": [
            {
              "id": "q5_a1",
              "text": "Initial radiographs negative, persistent pain 1-3 weeks",
              "textAr": "[Arabic: Initial radiographs negative, persistent pain 1-3 weeks]",
              "nextNodeId": "r_persistent"
            },
            {
              "id": "q5_a2",
              "text": "Radiographs show fracture or potential osteochondral injury",
              "textAr": "[Arabic: Radiographs show fracture or potential osteochondral injury]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q5_a3",
              "text": "Radiographs negative but alignment abnormality suggesting syndesmotic/ligamentous injury",
              "textAr": "[Arabic: Radiographs negative but alignment abnormality suggesting syndesmotic/ligamentous injury]",
              "nextNodeId": "r_ligament"
            },
            {
              "id": "q5_a4",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_persistent": {
          "id": "r_persistent",
          "type": "result",
          "summary": "Imaging for persistent pain with negative radiographs",
          "summaryAr": "[Arabic: Imaging for persistent pain with negative radiographs]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle repeat or stress views",
              "procedureAr": "[Arabic: Radiographs ankle repeat or stress views]",
              "priority": 2
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Additional imaging for fracture or osteochondral injury",
          "summaryAr": "[Arabic: Additional imaging for fracture or osteochondral injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle Broden's view",
              "procedureAr": "[Arabic: Radiographs ankle Broden's view]",
              "priority": 2
            }
          ]
        },
        "r_ligament": {
          "id": "r_ligament",
          "type": "result",
          "summary": "Imaging for suspected syndesmotic/ligamentous injury",
          "summaryAr": "[Arabic: Imaging for suspected syndesmotic/ligamentous injury]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle stress views or leg",
              "procedureAr": "[Arabic: Radiographs ankle stress views or leg]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            }
          ]
        }
      }
    },
    {
      "id": "acute_foot_trauma",
      "panelId": "msk",
      "name": "Acute Trauma to the Foot",
      "nameAr": "[Arabic: Acute Trauma to the Foot]",
      "description": "Imaging for acute foot trauma",
      "descriptionAr": "[Arabic: Imaging for acute foot trauma]",
      "iconName": "foot",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult or child >5 years old with acute trauma to foot. Can Ottawa rules be evaluated (no exclusionary criteria)?",
          "questionTextAr": "[Arabic: Adult or child >5 years old with acute trauma to foot. Can Ottawa rules be evaluated?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "No (exclusionary criteria present)",
              "textAr": "[Arabic: No (exclusionary criteria present)]",
              "nextNodeId": "q2"
            },
            {
              "id": "q1_a2",
              "text": "Yes (can apply Ottawa rules)",
              "textAr": "[Arabic: Yes (can apply Ottawa rules)]",
              "nextNodeId": "q3"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Patient has exclusionary criteria. Is it initial imaging?",
          "questionTextAr": "[Arabic: Patient has exclusionary criteria. Is it initial imaging?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_exclusion_initial"
            },
            {
              "id": "q2_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_exclusion_initial": {
          "id": "r_exclusion_initial",
          "type": "result",
          "summary": "Initial imaging for patient with exclusionary criteria",
          "summaryAr": "[Arabic: Initial imaging for patient with exclusionary criteria]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs foot",
              "procedureAr": "[Arabic: Radiographs foot]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "Are Ottawa foot rules positive?",
          "questionTextAr": "[Arabic: Are Ottawa foot rules positive?]",
          "hint": "Ottawa Foot Rules: Inability to bear weight OR point tenderness at navicular/base of 5th metatarsal OR inability to walk 4 steps",
          "hintAr": "[Arabic: Ottawa Foot Rules criteria]",
          "options": [
            {
              "id": "q3_a1",
              "text": "No (Ottawa Rules negative)",
              "textAr": "[Arabic: No (Ottawa Rules negative)]",
              "nextNodeId": "q4"
            },
            {
              "id": "q3_a2",
              "text": "Yes (Ottawa Rules positive)",
              "textAr": "[Arabic: Yes (Ottawa Rules positive)]",
              "nextNodeId": "r_initial"
            }
          ]
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "Is there suspected pathology in an anatomic area not addressed by Ottawa rules?",
          "questionTextAr": "[Arabic: Is there suspected pathology in an anatomic area not addressed by Ottawa rules?]",
          "hint": "e.g., metatarsal-phalangeal joint, metatarsal, toe, tendon",
          "hintAr": "[Arabic: e.g., metatarsal-phalangeal joint, metatarsal, toe, tendon]",
          "options": [
            {
              "id": "q4_a1",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_no_imaging"
            },
            {
              "id": "q4_a2",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_other_area"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute foot trauma (Ottawa positive)",
          "summaryAr": "[Arabic: Initial imaging for acute foot trauma (Ottawa positive)]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs foot or foot with weightbearing",
              "procedureAr": "[Arabic: Radiographs foot or foot with weightbearing]",
              "priority": 1
            }
          ]
        },
        "r_other_area": {
          "id": "r_other_area",
          "type": "result",
          "summary": "Imaging for pathology outside Ottawa rules coverage",
          "summaryAr": "[Arabic: Imaging for pathology outside Ottawa rules coverage]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs foot or foot with weightbearing",
              "procedureAr": "[Arabic: Radiographs foot or foot with weightbearing]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            }
          ]
        },
        "q5": {
          "id": "q5",
          "type": "question",
          "questionText": "Follow-up after initial radiographs. What is the clinical situation?",
          "questionTextAr": "[Arabic: Follow-up after initial radiographs. What is the clinical situation?]",
          "options": [
            {
              "id": "q5_a1",
              "text": "Suspect Lisfranc injury, tendon injury, or occult fracture/dislocation (radiographs normal/equivocal)",
              "textAr": "[Arabic: Suspect Lisfranc injury, tendon injury, or occult fracture/dislocation]",
              "nextNodeId": "r_lisfranc"
            },
            {
              "id": "q5_a2",
              "text": "Suspect penetrating trauma with foreign body (radiographs negative)",
              "textAr": "[Arabic: Suspect penetrating trauma with foreign body (radiographs negative)]",
              "nextNodeId": "r_foreign"
            },
            {
              "id": "q5_a3",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_lisfranc": {
          "id": "r_lisfranc",
          "type": "result",
          "summary": "Imaging for suspected Lisfranc/tendon/occult injury",
          "summaryAr": "[Arabic: Imaging for suspected Lisfranc/tendon/occult injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "الرنين المغناطيسي",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 2
            }
          ]
        },
        "r_foreign": {
          "id": "r_foreign",
          "type": "result",
          "summary": "Imaging for suspected foreign body",
          "summaryAr": "[Arabic: Imaging for suspected foreign body]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            }
          ]
        }
      }
    },
    {
      "id": "acute_knee_trauma",
      "panelId": "msk",
      "name": "Acute Trauma to the Knee",
      "nameAr": "[Arabic: Acute Trauma to the Knee]",
      "description": "Imaging for acute knee trauma",
      "descriptionAr": "[Arabic: Imaging for acute knee trauma]",
      "iconName": "knee",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult or child ≥5 years old with fall or acute twisting trauma to knee. Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult or child ≥5 years old with fall or acute twisting trauma to knee. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "q2"
            },
            {
              "id": "q1_a2",
              "text": "No (follow-up imaging)",
              "textAr": "[Arabic: No (follow-up imaging)]",
              "nextNodeId": "q4"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Are any of the following present: focal tenderness, effusion, or inability to bear weight?",
          "questionTextAr": "[Arabic: Are any of the following present: focal tenderness, effusion, or inability to bear weight?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_maybe_xray"
            },
            {
              "id": "q2_a2",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            }
          ]
        },
        "r_maybe_xray": {
          "id": "r_maybe_xray",
          "type": "result",
          "summary": "Initial imaging may be appropriate without clinical findings",
          "summaryAr": "[Arabic: Initial imaging may be appropriate without clinical findings]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs knee",
              "procedureAr": "[Arabic: Radiographs knee]",
              "priority": 1
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for acute knee trauma with clinical findings",
          "summaryAr": "[Arabic: Initial imaging for acute knee trauma with clinical findings]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs knee",
              "procedureAr": "[Arabic: Radiographs knee]",
              "priority": 1
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "For significant trauma (e.g., motor vehicle accident, knee dislocation). Is it initial imaging?",
          "questionTextAr": "[Arabic: For significant trauma (e.g., motor vehicle accident, knee dislocation). Is it initial imaging?]",
          "options": [
            {
              "id": "q3_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_significant"
            },
            {
              "id": "q3_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "r_vascular"
            }
          ]
        },
        "r_significant": {
          "id": "r_significant",
          "type": "result",
          "summary": "Initial imaging for significant knee trauma",
          "summaryAr": "[Arabic: Initial imaging for significant knee trauma]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs knee",
              "procedureAr": "[Arabic: Radiographs knee]",
              "priority": 1
            },
            {
              "modality": "CTA",
              "modalityAr": "[Arabic: CTA]",
              "procedure": "CTA lower extremity with IV contrast",
              "procedureAr": "[Arabic: CTA lower extremity with IV contrast]",
              "priority": 2
            },
            {
              "modality": "Angiography",
              "modalityAr": "[Arabic: Angiography]",
              "procedure": "Arteriography lower extremity",
              "procedureAr": "[Arabic: Arteriography lower extremity]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee with/without IV contrast",
              "procedureAr": "[Arabic: CT knee with/without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_vascular": {
          "id": "r_vascular",
          "type": "result",
          "summary": "Consult vascular surgery for possible vascular injury",
          "summaryAr": "[Arabic: Consult vascular surgery for possible vascular injury]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "Vascular surgery consultation",
              "procedureAr": "[Arabic: Vascular surgery consultation]",
              "priority": 1
            }
          ]
        },
        "q4": {
          "id": "q4",
          "type": "question",
          "questionText": "Initial radiographs performed. What do they show?",
          "questionTextAr": "[Arabic: Initial radiographs performed. What do they show?]",
          "options": [
            {
              "id": "q4_a1",
              "text": "No fracture, suspect occult fracture or internal derangement (adult/skeletally mature)",
              "textAr": "[Arabic: No fracture, suspect occult fracture or internal derangement (adult)]",
              "nextNodeId": "r_occult_adult"
            },
            {
              "id": "q4_a2",
              "text": "No fracture, suspect occult fracture or internal derangement (skeletally immature child)",
              "textAr": "[Arabic: No fracture, suspect occult fracture or internal derangement (child)]",
              "nextNodeId": "r_occult_child"
            },
            {
              "id": "q4_a3",
              "text": "Tibial plateau fracture, suspect additional bone or soft-tissue injury",
              "textAr": "[Arabic: Tibial plateau fracture, suspect additional injury]",
              "nextNodeId": "r_plateau"
            },
            {
              "id": "q4_a4",
              "text": "Focal patellar tenderness, effusion, able to walk (mechanism unknown)",
              "textAr": "[Arabic: Focal patellar tenderness, effusion, able to walk]",
              "nextNodeId": "r_patellar"
            },
            {
              "id": "q4_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_occult_adult": {
          "id": "r_occult_adult",
          "type": "result",
          "summary": "Imaging for suspected occult fracture/internal derangement (adult)",
          "summaryAr": "[Arabic: Imaging for suspected occult fracture/internal derangement (adult)]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_occult_child": {
          "id": "r_occult_child",
          "type": "result",
          "summary": "Imaging for suspected occult fracture/internal derangement (child)",
          "summaryAr": "[Arabic: Imaging for suspected occult fracture/internal derangement (child)]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_plateau": {
          "id": "r_plateau",
          "type": "result",
          "summary": "Imaging for tibial plateau fracture with suspected additional injury",
          "summaryAr": "[Arabic: Imaging for tibial plateau fracture with suspected additional injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_patellar": {
          "id": "r_patellar",
          "type": "result",
          "summary": "Imaging for focal patellar tenderness",
          "summaryAr": "[Arabic: Imaging for focal patellar tenderness]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs knee",
              "procedureAr": "[Arabic: Radiographs knee]",
              "priority": 1
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_ankle_pain",
      "panelId": "msk",
      "name": "Chronic Ankle Pain",
      "nameAr": "[Arabic: Chronic Ankle Pain]",
      "description": "Imaging for chronic ankle pain",
      "descriptionAr": "[Arabic: Imaging for chronic ankle pain]",
      "iconName": "ankle",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic ankle pain",
          "summaryAr": "[Arabic: Initial imaging for chronic ankle pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs ankle",
              "procedureAr": "[Arabic: Radiographs ankle]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical suspicion?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Multiple sites of degenerative joint disease in hindfoot",
              "textAr": "[Arabic: Multiple sites of degenerative joint disease in hindfoot]",
              "nextNodeId": "r_djd"
            },
            {
              "id": "q2_a2",
              "text": "Radiographs normal, suspected osteochondral lesion",
              "textAr": "[Arabic: Radiographs normal, suspected osteochondral lesion]",
              "nextNodeId": "r_osteochondral"
            },
            {
              "id": "q2_a3",
              "text": "Radiographs normal or nonspecific, suspected tendon abnormality",
              "textAr": "[Arabic: Radiographs normal or nonspecific, suspected tendon abnormality]",
              "nextNodeId": "r_tendon"
            },
            {
              "id": "q2_a4",
              "text": "Radiographs normal or nonspecific, suspected ankle instability",
              "textAr": "[Arabic: Radiographs normal or nonspecific, suspected ankle instability]",
              "nextNodeId": "r_instability"
            },
            {
              "id": "q2_a5",
              "text": "Radiographs normal or nonspecific, suspected ankle impingement syndrome",
              "textAr": "[Arabic: Radiographs normal or nonspecific, suspected ankle impingement syndrome]",
              "nextNodeId": "r_impingement"
            },
            {
              "id": "q2_a6",
              "text": "Radiographs normal, pain of uncertain etiology",
              "textAr": "[Arabic: Radiographs normal, pain of uncertain etiology]",
              "nextNodeId": "r_uncertain"
            },
            {
              "id": "q2_a7",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_djd": {
          "id": "r_djd",
          "type": "result",
          "summary": "Imaging for multiple sites of DJD in hindfoot",
          "summaryAr": "[Arabic: Imaging for multiple sites of DJD in hindfoot]",
          "recommendations": [
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic injection",
              "procedureAr": "[Arabic: Image-guided anesthetic injection]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle/hindfoot without IV contrast",
              "procedureAr": "[Arabic: MRI ankle/hindfoot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle/hindfoot without IV contrast",
              "procedureAr": "[Arabic: CT ankle/hindfoot without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_osteochondral": {
          "id": "r_osteochondral",
          "type": "result",
          "summary": "Imaging for suspected osteochondral lesion",
          "summaryAr": "[Arabic: Imaging for suspected osteochondral lesion]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography ankle",
              "procedureAr": "[Arabic: MR arthrography ankle]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan with SPECT/SPECT-CT]",
              "priority": 2
            }
          ]
        },
        "r_tendon": {
          "id": "r_tendon",
          "type": "result",
          "summary": "Imaging for suspected tendon abnormality",
          "summaryAr": "[Arabic: Imaging for suspected tendon abnormality]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound ankle",
              "procedureAr": "[Arabic: Ultrasound ankle]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "US-guided anesthetic injection",
              "procedureAr": "[Arabic: US-guided anesthetic injection]",
              "priority": 2
            }
          ]
        },
        "r_instability": {
          "id": "r_instability",
          "type": "result",
          "summary": "Imaging for suspected ankle instability",
          "summaryAr": "[Arabic: Imaging for suspected ankle instability]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography ankle",
              "procedureAr": "[Arabic: MR arthrography ankle]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound ankle",
              "procedureAr": "[Arabic: Ultrasound ankle]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs stress views",
              "procedureAr": "[Arabic: Radiographs stress views]",
              "priority": 2
            }
          ]
        },
        "r_impingement": {
          "id": "r_impingement",
          "type": "result",
          "summary": "Imaging for suspected ankle impingement syndrome",
          "summaryAr": "[Arabic: Imaging for suspected ankle impingement syndrome]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound ankle",
              "procedureAr": "[Arabic: Ultrasound ankle]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic injection",
              "procedureAr": "[Arabic: Image-guided anesthetic injection]",
              "priority": 2
            }
          ]
        },
        "r_uncertain": {
          "id": "r_uncertain",
          "type": "result",
          "summary": "Imaging for ankle pain of uncertain etiology",
          "summaryAr": "[Arabic: Imaging for ankle pain of uncertain etiology]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI ankle without IV contrast",
              "procedureAr": "[Arabic: MRI ankle without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound ankle",
              "procedureAr": "[Arabic: Ultrasound ankle]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic injection",
              "procedureAr": "[Arabic: Image-guided anesthetic injection]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT ankle without IV contrast",
              "procedureAr": "[Arabic: CT ankle without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan with SPECT/SPECT-CT]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_elbow_pain",
      "panelId": "msk",
      "name": "Chronic Elbow Pain",
      "nameAr": "[Arabic: Chronic Elbow Pain]",
      "description": "Imaging for chronic elbow pain",
      "descriptionAr": "[Arabic: Imaging for chronic elbow pain]",
      "iconName": "elbow",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic elbow pain",
          "summaryAr": "[Arabic: Initial imaging for chronic elbow pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs elbow",
              "procedureAr": "[Arabic: Radiographs elbow]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical suspicion?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Radiographs normal/nonspecific, mechanical symptoms, suspect intra-articular pathology",
              "textAr": "[Arabic: Radiographs normal/nonspecific, mechanical symptoms, suspect intra-articular pathology]",
              "nextNodeId": "r_intraarticular"
            },
            {
              "id": "q2_a2",
              "text": "Radiographs normal/nonspecific, suspect occult stress fracture or other bone abnormality",
              "textAr": "[Arabic: Radiographs normal/nonspecific, suspect occult stress fracture]",
              "nextNodeId": "r_stress"
            },
            {
              "id": "q2_a3",
              "text": "Radiographs normal/nonspecific, suspect chronic epicondylalgia or tendon tear",
              "textAr": "[Arabic: Radiographs normal/nonspecific, suspect chronic epicondylalgia or tendon tear]",
              "nextNodeId": "r_tendon"
            },
            {
              "id": "q2_a4",
              "text": "Radiographs normal/nonspecific, suspect collateral ligament tear",
              "textAr": "[Arabic: Radiographs normal/nonspecific, suspect collateral ligament tear]",
              "nextNodeId": "r_ligament"
            },
            {
              "id": "q2_a5",
              "text": "Radiographs normal/nonspecific, suspect nerve abnormality",
              "textAr": "[Arabic: Radiographs normal/nonspecific, suspect nerve abnormality]",
              "nextNodeId": "r_nerve"
            },
            {
              "id": "q2_a6",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_intraarticular": {
          "id": "r_intraarticular",
          "type": "result",
          "summary": "Imaging for suspected intra-articular pathology",
          "summaryAr": "[Arabic: Imaging for suspected intra-articular pathology]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography elbow",
              "procedureAr": "[Arabic: MR arthrography elbow]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow without IV contrast",
              "procedureAr": "[Arabic: MRI elbow without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography elbow",
              "procedureAr": "[Arabic: CT arthrography elbow]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT elbow without IV contrast",
              "procedureAr": "[Arabic: CT elbow without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_stress": {
          "id": "r_stress",
          "type": "result",
          "summary": "Imaging for suspected stress fracture or bone abnormality",
          "summaryAr": "[Arabic: Imaging for suspected stress fracture or bone abnormality]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow without IV contrast",
              "procedureAr": "[Arabic: MRI elbow without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT elbow without IV contrast",
              "procedureAr": "[Arabic: CT elbow without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            }
          ]
        },
        "r_tendon": {
          "id": "r_tendon",
          "type": "result",
          "summary": "Imaging for chronic epicondylalgia or tendon tear",
          "summaryAr": "[Arabic: Imaging for chronic epicondylalgia or tendon tear]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound elbow",
              "procedureAr": "[Arabic: Ultrasound elbow]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow without IV contrast",
              "procedureAr": "[Arabic: MRI elbow without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_ligament": {
          "id": "r_ligament",
          "type": "result",
          "summary": "Imaging for suspected collateral ligament tear",
          "summaryAr": "[Arabic: Imaging for suspected collateral ligament tear]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound elbow",
              "procedureAr": "[Arabic: Ultrasound elbow]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography elbow",
              "procedureAr": "[Arabic: MR arthrography elbow]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow without IV contrast",
              "procedureAr": "[Arabic: MRI elbow without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography elbow",
              "procedureAr": "[Arabic: CT arthrography elbow]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs stress views",
              "procedureAr": "[Arabic: Radiographs stress views]",
              "priority": 2
            }
          ]
        },
        "r_nerve": {
          "id": "r_nerve",
          "type": "result",
          "summary": "Imaging for suspected nerve abnormality",
          "summaryAr": "[Arabic: Imaging for suspected nerve abnormality]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound elbow",
              "procedureAr": "[Arabic: Ultrasound elbow]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI elbow without IV contrast",
              "procedureAr": "[Arabic: MRI elbow without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT elbow without IV contrast",
              "procedureAr": "[Arabic: CT elbow without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_inflammatory_arthritis",
      "panelId": "msk",
      "name": "Chronic Extremity Joint Pain - Suspected Inflammatory Arthritis",
      "nameAr": "[Arabic: Chronic Extremity Joint Pain - Suspected Inflammatory Arthritis]",
      "description": "Imaging for chronic extremity joint pain with suspected inflammatory arthritis",
      "descriptionAr": "[Arabic: Imaging for chronic extremity joint pain with suspected inflammatory arthritis]",
      "iconName": "joint",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Chronic extremity joint pain with suspected inflammatory, crystalline, or erosive osteoarthritis. Is it initial imaging?",
          "questionTextAr": "[Arabic: Chronic extremity joint pain with suspected inflammatory, crystalline, or erosive OA. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected inflammatory arthritis",
          "summaryAr": "[Arabic: Initial imaging for suspected inflammatory arthritis]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs area of interest",
              "procedureAr": "[Arabic: Radiographs area of interest]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What is the clinical suspicion?",
          "questionTextAr": "[Arabic: What is the clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Suspect inflammatory arthritis (seropositive or seronegative), radiographs normal or inconclusive",
              "textAr": "[Arabic: Suspect inflammatory arthritis, radiographs normal or inconclusive]",
              "nextNodeId": "r_inflammatory"
            },
            {
              "id": "q2_a2",
              "text": "Suspect gout, radiographs normal or inconclusive",
              "textAr": "[Arabic: Suspect gout, radiographs normal or inconclusive]",
              "nextNodeId": "r_gout"
            },
            {
              "id": "q2_a3",
              "text": "Suspect calcium pyrophosphate dihydrate disease (pseudogout), radiographs normal or inconclusive",
              "textAr": "[Arabic: Suspect CPPD (pseudogout), radiographs normal or inconclusive]",
              "nextNodeId": "r_cppd"
            },
            {
              "id": "q2_a4",
              "text": "Suspect erosive osteoarthritis, radiographs normal or inconclusive",
              "textAr": "[Arabic: Suspect erosive osteoarthritis, radiographs normal or inconclusive]",
              "nextNodeId": "r_erosive"
            },
            {
              "id": "q2_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_inflammatory": {
          "id": "r_inflammatory",
          "type": "result",
          "summary": "Imaging for suspected inflammatory arthritis",
          "summaryAr": "[Arabic: Imaging for suspected inflammatory arthritis]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_gout": {
          "id": "r_gout",
          "type": "result",
          "summary": "Imaging for suspected gout",
          "summaryAr": "[Arabic: Imaging for suspected gout]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 2
            }
          ]
        },
        "r_cppd": {
          "id": "r_cppd",
          "type": "result",
          "summary": "Imaging for suspected CPPD (pseudogout)",
          "summaryAr": "[Arabic: Imaging for suspected CPPD (pseudogout)]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 2
            }
          ]
        },
        "r_erosive": {
          "id": "r_erosive",
          "type": "result",
          "summary": "Imaging for suspected erosive osteoarthritis",
          "summaryAr": "[Arabic: Imaging for suspected erosive osteoarthritis]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_foot_pain",
      "panelId": "msk",
      "name": "Chronic Foot Pain",
      "nameAr": "[Arabic: Chronic Foot Pain]",
      "description": "Imaging for chronic foot pain",
      "descriptionAr": "[Arabic: Imaging for chronic foot pain]",
      "iconName": "foot",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult with chronic foot pain, unknown etiology. Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult with chronic foot pain, unknown etiology. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic foot pain",
          "summaryAr": "[Arabic: Initial imaging for chronic foot pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs foot",
              "procedureAr": "[Arabic: Radiographs foot]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical suspicion?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Radiographs negative/indeterminate, suspect soft tissue origin (tendon/ligament/fascia/muscle)",
              "textAr": "[Arabic: Radiographs negative/indeterminate, suspect soft tissue origin]",
              "nextNodeId": "r_soft_tissue"
            },
            {
              "id": "q2_a2",
              "text": "Radiographs negative/indeterminate, suspect occult fracture or painful ossicles or osseous origin",
              "textAr": "[Arabic: Radiographs negative/indeterminate, suspect osseous origin]",
              "nextNodeId": "r_osseous"
            },
            {
              "id": "q2_a3",
              "text": "Radiographs negative/indeterminate, suspect osteochondral lesion or cartilage abnormality or articular origin",
              "textAr": "[Arabic: Radiographs negative/indeterminate, suspect articular origin]",
              "nextNodeId": "r_articular"
            },
            {
              "id": "q2_a4",
              "text": "Radiographs negative/indeterminate, suspect foreign body",
              "textAr": "[Arabic: Radiographs negative/indeterminate, suspect foreign body]",
              "nextNodeId": "r_foreign"
            },
            {
              "id": "q2_a5",
              "text": "Radiographs negative/indeterminate, suspect neurogenic origin (Baxter neuropathy, CRPS, entrapment)",
              "textAr": "[Arabic: Radiographs negative/indeterminate, suspect neurogenic origin]",
              "nextNodeId": "r_neurogenic"
            },
            {
              "id": "q2_a6",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_soft_tissue": {
          "id": "r_soft_tissue",
          "type": "result",
          "summary": "Imaging for suspected soft tissue origin",
          "summaryAr": "[Arabic: Imaging for suspected soft tissue origin]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic/corticosteroid injection",
              "procedureAr": "[Arabic: Image-guided anesthetic/corticosteroid injection]",
              "priority": 2
            }
          ]
        },
        "r_osseous": {
          "id": "r_osseous",
          "type": "result",
          "summary": "Imaging for suspected osseous origin",
          "summaryAr": "[Arabic: Imaging for suspected osseous origin]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            }
          ]
        },
        "r_articular": {
          "id": "r_articular",
          "type": "result",
          "summary": "Imaging for suspected articular origin",
          "summaryAr": "[Arabic: Imaging for suspected articular origin]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot without IV contrast",
              "procedureAr": "[Arabic: CT foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography foot",
              "procedureAr": "[Arabic: MR arthrography foot]",
              "priority": 2
            }
          ]
        },
        "r_foreign": {
          "id": "r_foreign",
          "type": "result",
          "summary": "Imaging for suspected foreign body",
          "summaryAr": "[Arabic: Imaging for suspected foreign body]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without and with IV contrast",
              "procedureAr": "[Arabic: MRI foot without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT foot with or without IV contrast",
              "procedureAr": "[Arabic: CT foot with or without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_neurogenic": {
          "id": "r_neurogenic",
          "type": "result",
          "summary": "Imaging for suspected neurogenic origin",
          "summaryAr": "[Arabic: Imaging for suspected neurogenic origin]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without IV contrast",
              "procedureAr": "[Arabic: MRI foot without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound foot",
              "procedureAr": "[Arabic: Ultrasound foot]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI foot without and with IV contrast",
              "procedureAr": "[Arabic: MRI foot without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_hand_wrist_pain",
      "panelId": "msk",
      "name": "Chronic Hand and Wrist Pain",
      "nameAr": "[Arabic: Chronic Hand and Wrist Pain]",
      "description": "Imaging for chronic hand and wrist pain",
      "descriptionAr": "[Arabic: Imaging for chronic hand and wrist pain]",
      "iconName": "hand",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult with chronic hand or wrist pain. Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult with chronic hand or wrist pain. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic hand/wrist pain",
          "summaryAr": "[Arabic: Initial imaging for chronic hand/wrist pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs area of interest",
              "procedureAr": "[Arabic: Radiographs area of interest]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 2
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What location and radiograph findings?",
          "questionTextAr": "[Arabic: What location and radiograph findings?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Chronic wrist pain, radiographs normal or show nonspecific arthritis",
              "textAr": "[Arabic: Chronic wrist pain, radiographs normal/arthritis]",
              "nextNodeId": "r_wrist"
            },
            {
              "id": "q2_a2",
              "text": "Chronic hand pain, radiographs normal or show nonspecific arthritis",
              "textAr": "[Arabic: Chronic hand pain, radiographs normal/arthritis]",
              "nextNodeId": "r_hand"
            },
            {
              "id": "q2_a3",
              "text": "Chronic wrist pain, radiographs show old scaphoid fracture",
              "textAr": "[Arabic: Chronic wrist pain, old scaphoid fracture]",
              "nextNodeId": "r_scaphoid"
            },
            {
              "id": "q2_a4",
              "text": "Symptoms suspicious for carpal tunnel syndrome",
              "textAr": "[Arabic: Symptoms suspicious for carpal tunnel syndrome]",
              "nextNodeId": "r_cts"
            },
            {
              "id": "q2_a5",
              "text": "Suspect tendon injury/tenosynovitis/tendon pathology",
              "textAr": "[Arabic: Suspect tendon pathology]",
              "nextNodeId": "r_tendon"
            },
            {
              "id": "q2_a6",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_wrist": {
          "id": "r_wrist",
          "type": "result",
          "summary": "Imaging for chronic wrist pain",
          "summaryAr": "[Arabic: Imaging for chronic wrist pain]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography wrist",
              "procedureAr": "[Arabic: MR arthrography wrist]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI wrist without IV contrast",
              "procedureAr": "[Arabic: MRI wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound wrist",
              "procedureAr": "[Arabic: Ultrasound wrist]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT wrist without IV contrast",
              "procedureAr": "[Arabic: CT wrist without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_hand": {
          "id": "r_hand",
          "type": "result",
          "summary": "Imaging for chronic hand pain",
          "summaryAr": "[Arabic: Imaging for chronic hand pain]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand without IV contrast",
              "procedureAr": "[Arabic: MRI hand without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hand",
              "procedureAr": "[Arabic: Ultrasound hand]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hand without and with IV contrast",
              "procedureAr": "[Arabic: MRI hand without and with IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_scaphoid": {
          "id": "r_scaphoid",
          "type": "result",
          "summary": "Imaging for old scaphoid fracture evaluation",
          "summaryAr": "[Arabic: Imaging for old scaphoid fracture evaluation]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI wrist without IV contrast",
              "procedureAr": "[Arabic: MRI wrist without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT wrist without IV contrast",
              "procedureAr": "[Arabic: CT wrist without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI wrist without and with IV contrast",
              "procedureAr": "[Arabic: MRI wrist without and with IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_cts": {
          "id": "r_cts",
          "type": "result",
          "summary": "Imaging for suspected carpal tunnel syndrome",
          "summaryAr": "[Arabic: Imaging for suspected carpal tunnel syndrome]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_tendon": {
          "id": "r_tendon",
          "type": "result",
          "summary": "Imaging for suspected tendon pathology",
          "summaryAr": "[Arabic: Imaging for suspected tendon pathology]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_hip_pain",
      "panelId": "msk",
      "name": "Chronic Hip Pain",
      "nameAr": "[Arabic: Chronic Hip Pain]",
      "description": "Imaging for chronic hip pain",
      "descriptionAr": "[Arabic: Imaging for chronic hip pain]",
      "iconName": "hip",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic hip pain",
          "summaryAr": "[Arabic: Initial imaging for chronic hip pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs pelvis or hip",
              "procedureAr": "[Arabic: Radiographs pelvis or hip]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical suspicion?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Radiographs negative/nondiagnostic, suspect noninfectious extra-articular abnormality (tendonitis/bursitis)",
              "textAr": "[Arabic: Suspect extra-articular abnormality]",
              "nextNodeId": "r_extraarticular"
            },
            {
              "id": "q2_a2",
              "text": "Radiographs negative/nondiagnostic, suspect impingement or dysplasia",
              "textAr": "[Arabic: Suspect impingement or dysplasia]",
              "nextNodeId": "r_fai"
            },
            {
              "id": "q2_a3",
              "text": "Radiographs negative/nondiagnostic, suspect labral tear",
              "textAr": "[Arabic: Suspect labral tear]",
              "nextNodeId": "r_labral"
            },
            {
              "id": "q2_a4",
              "text": "Radiographs equivocal/positive for mild OA, evaluate articular cartilage",
              "textAr": "[Arabic: Evaluate articular cartilage]",
              "nextNodeId": "r_cartilage"
            },
            {
              "id": "q2_a5",
              "text": "Radiographs suspicious for intra-articular synovial hyperplasia or neoplasia",
              "textAr": "[Arabic: Suspect synovial abnormality]",
              "nextNodeId": "r_synovial"
            },
            {
              "id": "q2_a6",
              "text": "Radiographs demonstrate hip OA with low back/knee pain, want to quantify pain related to hip",
              "textAr": "[Arabic: OA with referred pain]",
              "nextNodeId": "r_injection"
            },
            {
              "id": "q2_a7",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_extraarticular": {
          "id": "r_extraarticular",
          "type": "result",
          "summary": "Imaging for suspected extra-articular abnormality",
          "summaryAr": "[Arabic: Imaging for suspected extra-articular abnormality]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hip",
              "procedureAr": "[Arabic: Ultrasound hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            }
          ]
        },
        "r_fai": {
          "id": "r_fai",
          "type": "result",
          "summary": "Imaging for suspected FAI or dysplasia",
          "summaryAr": "[Arabic: Imaging for suspected FAI or dysplasia]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography hip",
              "procedureAr": "[Arabic: MR arthrography hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs additional views",
              "procedureAr": "[Arabic: Radiographs additional views]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_labral": {
          "id": "r_labral",
          "type": "result",
          "summary": "Imaging for suspected labral tear",
          "summaryAr": "[Arabic: Imaging for suspected labral tear]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography hip",
              "procedureAr": "[Arabic: MR arthrography hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography hip",
              "procedureAr": "[Arabic: CT arthrography hip]",
              "priority": 2
            }
          ]
        },
        "r_cartilage": {
          "id": "r_cartilage",
          "type": "result",
          "summary": "Imaging to evaluate articular cartilage",
          "summaryAr": "[Arabic: Imaging to evaluate articular cartilage]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography hip",
              "procedureAr": "[Arabic: MR arthrography hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography hip",
              "procedureAr": "[Arabic: CT arthrography hip]",
              "priority": 2
            }
          ]
        },
        "r_synovial": {
          "id": "r_synovial",
          "type": "result",
          "summary": "Imaging for suspected synovial abnormality",
          "summaryAr": "[Arabic: Imaging for suspected synovial abnormality]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without and with IV contrast",
              "procedureAr": "[Arabic: MRI hip without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography hip",
              "procedureAr": "[Arabic: CT arthrography hip]",
              "priority": 2
            }
          ]
        },
        "r_injection": {
          "id": "r_injection",
          "type": "result",
          "summary": "Image-guided injection to quantify hip-related pain",
          "summaryAr": "[Arabic: Image-guided injection to quantify hip-related pain]",
          "recommendations": [
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic injection hip",
              "procedureAr": "[Arabic: Image-guided anesthetic injection hip]",
              "priority": 1
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_knee_pain",
      "panelId": "msk",
      "name": "Chronic Knee Pain",
      "nameAr": "[Arabic: Chronic Knee Pain]",
      "description": "Imaging for chronic knee pain",
      "descriptionAr": "[Arabic: Imaging for chronic knee pain]",
      "iconName": "knee",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult or child ≥5 years old with chronic knee pain. Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult or child ≥5 years old with chronic knee pain. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic knee pain",
          "summaryAr": "[Arabic: Initial imaging for chronic knee pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs knee",
              "procedureAr": "[Arabic: Radiographs knee]",
              "priority": 1
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What do the initial knee radiographs show?",
          "questionTextAr": "[Arabic: What do the initial knee radiographs show?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Negative or demonstrate joint effusion",
              "textAr": "[Arabic: Negative or joint effusion]",
              "nextNodeId": "r_effusion"
            },
            {
              "id": "q2_a2",
              "text": "OCD, loose bodies, or history of cartilage/meniscal repair",
              "textAr": "[Arabic: OCD, loose bodies, or repair history]",
              "nextNodeId": "r_ocd"
            },
            {
              "id": "q2_a3",
              "text": "Degenerative changes or chondrocalcinosis",
              "textAr": "[Arabic: Degenerative changes or chondrocalcinosis]",
              "nextNodeId": "r_degen"
            },
            {
              "id": "q2_a4",
              "text": "Signs of prior osseous injury (Segond fracture, tibial spine avulsion)",
              "textAr": "[Arabic: Signs of prior osseous injury]",
              "nextNodeId": "r_prior"
            },
            {
              "id": "q2_a5",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_effusion": {
          "id": "r_effusion",
          "type": "result",
          "summary": "Imaging for negative radiographs or joint effusion",
          "summaryAr": "[Arabic: Imaging for negative radiographs or joint effusion]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound knee",
              "procedureAr": "[Arabic: Ultrasound knee]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography knee",
              "procedureAr": "[Arabic: MR arthrography knee]",
              "priority": 2
            },
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 2
            }
          ]
        },
        "r_ocd": {
          "id": "r_ocd",
          "type": "result",
          "summary": "Imaging for OCD, loose bodies, or repair follow-up",
          "summaryAr": "[Arabic: Imaging for OCD, loose bodies, or repair follow-up]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography knee",
              "procedureAr": "[Arabic: MR arthrography knee]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography knee",
              "procedureAr": "[Arabic: CT arthrography knee]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_degen": {
          "id": "r_degen",
          "type": "result",
          "summary": "Imaging for degenerative changes or chondrocalcinosis",
          "summaryAr": "[Arabic: Imaging for degenerative changes or chondrocalcinosis]",
          "recommendations": [
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_prior": {
          "id": "r_prior",
          "type": "result",
          "summary": "Imaging for signs of prior osseous injury",
          "summaryAr": "[Arabic: Imaging for signs of prior osseous injury]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography knee",
              "procedureAr": "[Arabic: CT arthrography knee]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "chronic_shoulder_pain",
      "panelId": "msk",
      "name": "Chronic Shoulder Pain",
      "nameAr": "[Arabic: Chronic Shoulder Pain]",
      "description": "Imaging for chronic shoulder pain",
      "descriptionAr": "[Arabic: Imaging for chronic shoulder pain]",
      "iconName": "shoulder",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is it initial imaging?",
          "questionTextAr": "[Arabic: Is it initial imaging?]",
          "options": [
            {
              "id": "q1_a1",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_a2",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for chronic shoulder pain",
          "summaryAr": "[Arabic: Initial imaging for chronic shoulder pain]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "Radiographs shoulder",
              "procedureAr": "[Arabic: Radiographs shoulder]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 2
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings and clinical suspicion?",
          "questionTextAr": "[Arabic: What are the radiograph findings and clinical suspicion?]",
          "options": [
            {
              "id": "q2_a1",
              "text": "Radiographs normal/inconclusive, suspect rotator cuff disorders or SASD bursitis (no prior surgery)",
              "textAr": "[Arabic: Suspect rotator cuff/bursitis (no prior surgery)]",
              "nextNodeId": "r_rotator"
            },
            {
              "id": "q2_a2",
              "text": "Radiographs demonstrate calcific tendinopathy or calcific bursitis",
              "textAr": "[Arabic: Calcific tendinopathy/bursitis]",
              "nextNodeId": "r_calcific"
            },
            {
              "id": "q2_a3",
              "text": "Radiographs normal/inconclusive, suspect labral pathology or shoulder instability",
              "textAr": "[Arabic: Suspect labral pathology/instability]",
              "nextNodeId": "r_labral"
            },
            {
              "id": "q2_a4",
              "text": "Radiographs normal/inconclusive, suspect adhesive capsulitis",
              "textAr": "[Arabic: Suspect adhesive capsulitis]",
              "nextNodeId": "r_adhesive"
            },
            {
              "id": "q2_a5",
              "text": "Radiographs normal/inconclusive, suspect biceps tendon abnormality",
              "textAr": "[Arabic: Suspect biceps tendon abnormality]",
              "nextNodeId": "r_biceps"
            },
            {
              "id": "q2_a6",
              "text": "Radiographs demonstrate osteoarthritis",
              "textAr": "[Arabic: Osteoarthritis on radiographs]",
              "nextNodeId": "r_oa"
            },
            {
              "id": "q2_a7",
              "text": "History of prior rotator cuff repair, suspect rotator cuff disorders or SASD bursitis",
              "textAr": "[Arabic: Prior rotator cuff repair, suspect disorders]",
              "nextNodeId": "r_post_repair"
            },
            {
              "id": "q2_a8",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_rotator": {
          "id": "r_rotator",
          "type": "result",
          "summary": "Imaging for suspected rotator cuff disorders (no prior surgery)",
          "summaryAr": "[Arabic: Imaging for suspected rotator cuff disorders (no prior surgery)]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            }
          ]
        },
        "r_calcific": {
          "id": "r_calcific",
          "type": "result",
          "summary": "Imaging/treatment for calcific tendinopathy/bursitis",
          "summaryAr": "[Arabic: Imaging/treatment for calcific tendinopathy/bursitis]",
          "recommendations": [
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic/corticosteroid injection",
              "procedureAr": "[Arabic: Image-guided anesthetic/corticosteroid injection]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_labral": {
          "id": "r_labral",
          "type": "result",
          "summary": "Imaging for suspected labral pathology/instability",
          "summaryAr": "[Arabic: Imaging for suspected labral pathology/instability]",
          "recommendations": [
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography shoulder",
              "procedureAr": "[Arabic: CT arthrography shoulder]",
              "priority": 2
            }
          ]
        },
        "r_adhesive": {
          "id": "r_adhesive",
          "type": "result",
          "summary": "Imaging for suspected adhesive capsulitis",
          "summaryAr": "[Arabic: Imaging for suspected adhesive capsulitis]",
          "recommendations": [
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic/corticosteroid injection",
              "procedureAr": "[Arabic: Image-guided anesthetic/corticosteroid injection]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            }
          ]
        },
        "r_biceps": {
          "id": "r_biceps",
          "type": "result",
          "summary": "Imaging for suspected biceps tendon abnormality",
          "summaryAr": "[Arabic: Imaging for suspected biceps tendon abnormality]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 1
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic/corticosteroid injection",
              "procedureAr": "[Arabic: Image-guided anesthetic/corticosteroid injection]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_oa": {
          "id": "r_oa",
          "type": "result",
          "summary": "Imaging for shoulder with osteoarthritis",
          "summaryAr": "[Arabic: Imaging for shoulder with osteoarthritis]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 1
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_post_repair": {
          "id": "r_post_repair",
          "type": "result",
          "summary": "Imaging for suspected rotator cuff disorders after prior repair",
          "summaryAr": "[Arabic: Imaging for suspected rotator cuff disorders after prior repair]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 1
            },
            {
              "modality": "MR Arthrography",
              "modalityAr": "[Arabic: MR Arthrography]",
              "procedure": "MR arthrography shoulder",
              "procedureAr": "[Arabic: MR arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography shoulder",
              "procedureAr": "[Arabic: CT arthrography shoulder]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided injection",
              "procedureAr": "[Arabic: Image-guided injection]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "shoulder_arthroplasty",
      "panelId": "msk",
      "name": "Imaging After Shoulder Arthroplasty",
      "nameAr": "[Arabic: Imaging After Shoulder Arthroplasty]",
      "description": "Imaging after shoulder arthroplasty",
      "descriptionAr": "[Arabic: Imaging after shoulder arthroplasty]",
      "iconName": "shoulder",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is this routine follow-up of an asymptomatic patient with primary shoulder arthroplasty?",
          "questionTextAr": "[Arabic: Is this routine follow-up of an asymptomatic patient with primary shoulder arthroplasty?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_routine"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Symptomatic patient with primary shoulder arthroplasty. Is it initial imaging?",
          "questionTextAr": "[Arabic: Symptomatic patient with primary shoulder arthroplasty. Is it initial imaging?]",
          "options": [
            {
              "id": "q2_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q2_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q3"
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "What is the clinical concern?",
          "questionTextAr": "[Arabic: What is the clinical concern?]",
          "options": [
            {
              "id": "q3_a",
              "text": "Infection not excluded",
              "textAr": "[Arabic: Infection not excluded]",
              "nextNodeId": "r_infection"
            },
            {
              "id": "q3_b",
              "text": "Infection excluded, suspected loosening",
              "textAr": "[Arabic: Infection excluded, suspected loosening]",
              "nextNodeId": "r_loosening"
            },
            {
              "id": "q3_c",
              "text": "Infection excluded, suspected rotator cuff tear or other soft tissue abnormality",
              "textAr": "[Arabic: Infection excluded, suspected rotator cuff tear or other soft tissue abnormality]",
              "nextNodeId": "r_soft_tissue"
            },
            {
              "id": "q3_d",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_routine": {
          "id": "r_routine",
          "type": "result",
          "summary": "Routine follow-up of asymptomatic shoulder arthroplasty",
          "summaryAr": "[Arabic: Routine follow-up of asymptomatic shoulder arthroplasty]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray shoulder",
              "procedureAr": "[Arabic: X-ray shoulder]",
              "priority": 1
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for symptomatic shoulder arthroplasty",
          "summaryAr": "[Arabic: Initial imaging for symptomatic shoulder arthroplasty]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray shoulder",
              "procedureAr": "[Arabic: X-ray shoulder]",
              "priority": 1
            }
          ]
        },
        "r_infection": {
          "id": "r_infection",
          "type": "result",
          "summary": "Suspected infection - shoulder arthroplasty",
          "summaryAr": "[Arabic: Suspected infection - shoulder arthroplasty]",
          "recommendations": [
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration shoulder",
              "procedureAr": "[Arabic: Image-guided aspiration shoulder]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without and with IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan and WBC scan and sulfur colloid scan with/without SPECT/SPECT-CT",
              "procedureAr": "[Arabic: 3-phase bone scan and WBC scan and sulfur colloid scan with/without SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan]",
              "priority": 2
            }
          ]
        },
        "r_loosening": {
          "id": "r_loosening",
          "type": "result",
          "summary": "Suspected loosening - shoulder arthroplasty (infection excluded)",
          "summaryAr": "[Arabic: Suspected loosening - shoulder arthroplasty (infection excluded)]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT shoulder without IV contrast",
              "procedureAr": "[Arabic: CT shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: 3-phase bone scan with SPECT/SPECT-CT]",
              "priority": 2
            }
          ]
        },
        "r_soft_tissue": {
          "id": "r_soft_tissue",
          "type": "result",
          "summary": "Suspected rotator cuff tear or soft tissue abnormality - shoulder arthroplasty",
          "summaryAr": "[Arabic: Suspected rotator cuff tear or soft tissue abnormality - shoulder arthroplasty]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound shoulder",
              "procedureAr": "[Arabic: Ultrasound shoulder]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI shoulder without IV contrast",
              "procedureAr": "[Arabic: MRI shoulder without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT Arthrography",
              "modalityAr": "[Arabic: CT Arthrography]",
              "procedure": "CT arthrography shoulder",
              "procedureAr": "[Arabic: CT arthrography shoulder]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "hip_arthroplasty",
      "panelId": "msk",
      "name": "Imaging After Total Hip Arthroplasty",
      "nameAr": "[Arabic: Imaging After Total Hip Arthroplasty]",
      "description": "Imaging after total hip arthroplasty",
      "descriptionAr": "[Arabic: Imaging after total hip arthroplasty]",
      "iconName": "hip",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Is this routine follow-up of an asymptomatic patient after hip arthroplasty?",
          "questionTextAr": "[Arabic: Is this routine follow-up of an asymptomatic patient after hip arthroplasty?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_routine"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "Symptomatic patient with hip prosthesis. Is it initial imaging?",
          "questionTextAr": "[Arabic: Symptomatic patient with hip prosthesis. Is it initial imaging?]",
          "options": [
            {
              "id": "q2_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q2_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q3"
            }
          ]
        },
        "q3": {
          "id": "q3",
          "type": "question",
          "questionText": "What is the clinical situation?",
          "questionTextAr": "[Arabic: What is the clinical situation?]",
          "options": [
            {
              "id": "q3_a",
              "text": "History of acute injury",
              "textAr": "[Arabic: History of acute injury]",
              "nextNodeId": "r_acute_injury"
            },
            {
              "id": "q3_b",
              "text": "Infection not excluded",
              "textAr": "[Arabic: Infection not excluded]",
              "nextNodeId": "r_infection"
            },
            {
              "id": "q3_c",
              "text": "Infection excluded",
              "textAr": "[Arabic: Infection excluded]",
              "nextNodeId": "r_infection_excluded"
            },
            {
              "id": "q3_d",
              "text": "Metal-on-metal prosthesis or findings suggesting trunnionosis, question of adverse reaction to metal debris",
              "textAr": "[Arabic: Metal-on-metal prosthesis or findings suggesting trunnionosis, question of adverse reaction to metal debris]",
              "nextNodeId": "r_metal"
            },
            {
              "id": "q3_e",
              "text": "Trochanteric pain, suspect abductor injury or trochanteric bursitis or other soft tissue abnormality",
              "textAr": "[Arabic: Trochanteric pain, suspect abductor injury or trochanteric bursitis or other soft tissue abnormality]",
              "nextNodeId": "r_trochanteric"
            },
            {
              "id": "q3_f",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_routine": {
          "id": "r_routine",
          "type": "result",
          "summary": "Routine follow-up of asymptomatic hip arthroplasty",
          "summaryAr": "[Arabic: Routine follow-up of asymptomatic hip arthroplasty]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray hip",
              "procedureAr": "[Arabic: X-ray hip]",
              "priority": 1
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for symptomatic hip prosthesis",
          "summaryAr": "[Arabic: Initial imaging for symptomatic hip prosthesis]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray hip",
              "procedureAr": "[Arabic: X-ray hip]",
              "priority": 1
            }
          ]
        },
        "r_acute_injury": {
          "id": "r_acute_injury",
          "type": "result",
          "summary": "Hip arthroplasty with history of acute injury",
          "summaryAr": "[Arabic: Hip arthroplasty with history of acute injury]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_infection": {
          "id": "r_infection",
          "type": "result",
          "summary": "Suspected infection - hip arthroplasty",
          "summaryAr": "[Arabic: Suspected infection - hip arthroplasty]",
          "recommendations": [
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration hip",
              "procedureAr": "[Arabic: Image-guided aspiration hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan hip",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan hip]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hip",
              "procedureAr": "[Arabic: Ultrasound hip]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without and with IV contrast",
              "procedureAr": "[Arabic: MRI hip without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip with IV contrast",
              "procedureAr": "[Arabic: CT hip with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_infection_excluded": {
          "id": "r_infection_excluded",
          "type": "result",
          "summary": "Hip arthroplasty - infection excluded",
          "summaryAr": "[Arabic: Hip arthroplasty - infection excluded]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic injection",
              "procedureAr": "[Arabic: Image-guided anesthetic injection]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "Bone scan with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan with SPECT/SPECT-CT]",
              "priority": 2
            }
          ]
        },
        "r_metal": {
          "id": "r_metal",
          "type": "result",
          "summary": "Metal-on-metal prosthesis - suspected adverse reaction to metal debris",
          "summaryAr": "[Arabic: Metal-on-metal prosthesis - suspected adverse reaction to metal debris]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hip",
              "procedureAr": "[Arabic: Ultrasound hip]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT hip without IV contrast",
              "procedureAr": "[Arabic: CT hip without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_trochanteric": {
          "id": "r_trochanteric",
          "type": "result",
          "summary": "Trochanteric pain - suspected abductor injury or bursitis",
          "summaryAr": "[Arabic: Trochanteric pain - suspected abductor injury or bursitis]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound hip",
              "procedureAr": "[Arabic: Ultrasound hip]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI hip without IV contrast",
              "procedureAr": "[Arabic: MRI hip without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Injection",
              "modalityAr": "[Arabic: Injection]",
              "procedure": "Image-guided anesthetic/corticosteroid injection",
              "procedureAr": "[Arabic: Image-guided anesthetic/corticosteroid injection]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "knee_arthroplasty",
      "panelId": "msk",
      "name": "Imaging After Total Knee Arthroplasty",
      "nameAr": "[Arabic: Imaging After Total Knee Arthroplasty]",
      "description": "Imaging after total knee arthroplasty",
      "descriptionAr": "[Arabic: Imaging after total knee arthroplasty]",
      "iconName": "knee",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Follow-up of symptomatic or asymptomatic patient with total knee arthroplasty. Is it initial imaging?",
          "questionTextAr": "[Arabic: Follow-up of symptomatic or asymptomatic patient with total knee arthroplasty. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What is the clinical concern?",
          "questionTextAr": "[Arabic: What is the clinical concern?]",
          "options": [
            {
              "id": "q2_a",
              "text": "Suspected infection",
              "textAr": "[Arabic: Suspected infection]",
              "nextNodeId": "r_infection"
            },
            {
              "id": "q2_b",
              "text": "Pain, infection excluded, suspect aseptic loosening or osteolysis or instability",
              "textAr": "[Arabic: Pain, infection excluded, suspect aseptic loosening or osteolysis or instability]",
              "nextNodeId": "r_loosening"
            },
            {
              "id": "q2_c",
              "text": "Pain, suspect periprosthetic or hardware fracture",
              "textAr": "[Arabic: Pain, suspect periprosthetic or hardware fracture]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q2_d",
              "text": "Pain, measuring component rotation",
              "textAr": "[Arabic: Pain, measuring component rotation]",
              "nextNodeId": "r_rotation"
            },
            {
              "id": "q2_e",
              "text": "Pain, suspect periprosthetic soft-tissue abnormality unrelated to infection",
              "textAr": "[Arabic: Pain, suspect periprosthetic soft-tissue abnormality unrelated to infection]",
              "nextNodeId": "r_soft_tissue"
            },
            {
              "id": "q2_f",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for knee arthroplasty",
          "summaryAr": "[Arabic: Initial imaging for knee arthroplasty]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray knee",
              "procedureAr": "[Arabic: X-ray knee]",
              "priority": 1
            }
          ]
        },
        "r_infection": {
          "id": "r_infection",
          "type": "result",
          "summary": "Suspected infection - knee arthroplasty",
          "summaryAr": "[Arabic: Suspected infection - knee arthroplasty]",
          "recommendations": [
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration knee",
              "procedureAr": "[Arabic: Image-guided aspiration knee]",
              "priority": 1
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound knee",
              "procedureAr": "[Arabic: Ultrasound knee]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without and with IV contrast",
              "procedureAr": "[Arabic: MRI knee without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee with IV contrast",
              "procedureAr": "[Arabic: CT knee with IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan]",
              "priority": 2
            }
          ]
        },
        "r_loosening": {
          "id": "r_loosening",
          "type": "result",
          "summary": "Suspected loosening, osteolysis, or instability - knee arthroplasty",
          "summaryAr": "[Arabic: Suspected loosening, osteolysis, or instability - knee arthroplasty]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Suspected periprosthetic or hardware fracture - knee arthroplasty",
          "summaryAr": "[Arabic: Suspected periprosthetic or hardware fracture - knee arthroplasty]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            }
          ]
        },
        "r_rotation": {
          "id": "r_rotation",
          "type": "result",
          "summary": "Measuring component rotation - knee arthroplasty",
          "summaryAr": "[Arabic: Measuring component rotation - knee arthroplasty]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT knee without IV contrast",
              "procedureAr": "[Arabic: CT knee without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_soft_tissue": {
          "id": "r_soft_tissue",
          "type": "result",
          "summary": "Suspected periprosthetic soft-tissue abnormality - knee arthroplasty",
          "summaryAr": "[Arabic: Suspected periprosthetic soft-tissue abnormality - knee arthroplasty]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound knee",
              "procedureAr": "[Arabic: Ultrasound knee]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI knee without IV contrast",
              "procedureAr": "[Arabic: MRI knee without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "inflammatory_back_pain",
      "panelId": "msk",
      "name": "Inflammatory Back Pain - Axial Spondyloarthropathy",
      "nameAr": "[Arabic: Inflammatory Back Pain - Axial Spondyloarthropathy]",
      "description": "Imaging for inflammatory back pain with suspected axial spondyloarthropathy",
      "descriptionAr": "[Arabic: Imaging for inflammatory back pain with suspected axial spondyloarthropathy]",
      "iconName": "spine",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Inflammatory back pain, suspected axial spondyloarthritis. Is it initial imaging?",
          "questionTextAr": "[Arabic: Inflammatory back pain, suspected axial spondyloarthritis. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What is the clinical situation?",
          "questionTextAr": "[Arabic: What is the clinical situation?]",
          "options": [
            {
              "id": "q2_a",
              "text": "Additional imaging following radiographs (suspected axial spondyloarthritis)",
              "textAr": "[Arabic: Additional imaging following radiographs (suspected axial spondyloarthritis)]",
              "nextNodeId": "r_additional"
            },
            {
              "id": "q2_b",
              "text": "Negative radiographs AND negative MRI of sacroiliac joints",
              "textAr": "[Arabic: Negative radiographs AND negative MRI of sacroiliac joints]",
              "nextNodeId": "r_neg_xray_mri"
            },
            {
              "id": "q2_c",
              "text": "Known axial spondyloarthritis, follow-up for treatment response or disease progression",
              "textAr": "[Arabic: Known axial spondyloarthritis, follow-up for treatment response or disease progression]",
              "nextNodeId": "r_followup"
            },
            {
              "id": "q2_d",
              "text": "Axial spondyloarthritis with spine ankylosis, suspected fracture",
              "textAr": "[Arabic: Axial spondyloarthritis with spine ankylosis, suspected fracture]",
              "nextNodeId": "r_fracture"
            },
            {
              "id": "q2_e",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected axial spondyloarthritis",
          "summaryAr": "[Arabic: Initial imaging for suspected axial spondyloarthritis]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray sacroiliac joints",
              "procedureAr": "[Arabic: X-ray sacroiliac joints]",
              "priority": 1
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray sacroiliac joints and spine area of interest",
              "procedureAr": "[Arabic: X-ray sacroiliac joints and spine area of interest]",
              "priority": 2
            }
          ]
        },
        "r_additional": {
          "id": "r_additional",
          "type": "result",
          "summary": "Additional imaging following radiographs for suspected axial spondyloarthritis",
          "summaryAr": "[Arabic: Additional imaging following radiographs for suspected axial spondyloarthritis]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints and spine without and with IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints and spine without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints and spine without IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints and spine without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints without and with IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints without IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT sacroiliac joints without IV contrast",
              "procedureAr": "[Arabic: CT sacroiliac joints without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT sacroiliac joints and spine without IV contrast",
              "procedureAr": "[Arabic: CT sacroiliac joints and spine without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_neg_xray_mri": {
          "id": "r_neg_xray_mri",
          "type": "result",
          "summary": "Negative radiographs and negative MRI of sacroiliac joints",
          "summaryAr": "[Arabic: Negative radiographs and negative MRI of sacroiliac joints]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray spine area of interest",
              "procedureAr": "[Arabic: X-ray spine area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT spine area of interest without IV contrast",
              "procedureAr": "[Arabic: CT spine area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_followup": {
          "id": "r_followup",
          "type": "result",
          "summary": "Follow-up for known axial spondyloarthritis",
          "summaryAr": "[Arabic: Follow-up for known axial spondyloarthritis]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray sacroiliac joints",
              "procedureAr": "[Arabic: X-ray sacroiliac joints]",
              "priority": 1
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray sacroiliac joints and spine area of interest",
              "procedureAr": "[Arabic: X-ray sacroiliac joints and spine area of interest]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints and spine without and with IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints and spine without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints and spine without IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints and spine without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints without and with IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI sacroiliac joints without IV contrast",
              "procedureAr": "[Arabic: MRI sacroiliac joints without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_fracture": {
          "id": "r_fracture",
          "type": "result",
          "summary": "Axial spondyloarthritis with spine ankylosis - suspected fracture",
          "summaryAr": "[Arabic: Axial spondyloarthritis with spine ankylosis - suspected fracture]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray spine area of interest",
              "procedureAr": "[Arabic: X-ray spine area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT spine area of interest without IV contrast",
              "procedureAr": "[Arabic: CT spine area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "msk_tumor_staging",
      "panelId": "msk",
      "name": "Malignant or Aggressive Primary MSK Tumor - Staging and Surveillance",
      "nameAr": "[Arabic: Malignant or Aggressive Primary MSK Tumor - Staging and Surveillance]",
      "description": "Staging and surveillance for malignant or aggressive primary musculoskeletal tumors",
      "descriptionAr": "[Arabic: Staging and surveillance for malignant or aggressive primary musculoskeletal tumors]",
      "iconName": "bone",
      "rootNodeId": "mst_q1",
      "isEnabled": true,
      "nodes": {
        "mst_q1": {
          "id": "mst_q1",
          "type": "question",
          "questionText": "What is the clinical purpose?",
          "questionTextAr": "[Arabic: What is the clinical purpose?]",
          "options": [
            {
              "id": "mst_q1_a",
              "text": "Initial staging - evaluation for pulmonary metastasis",
              "textAr": "[Arabic: Initial staging - evaluation for pulmonary metastasis]",
              "nextNodeId": "mst_r_pulmonary"
            },
            {
              "id": "mst_q1_b",
              "text": "Initial staging - evaluation for extrapulmonary metastasis",
              "textAr": "[Arabic: Initial staging - evaluation for extrapulmonary metastasis]",
              "nextNodeId": "mst_r_extrapulmonary"
            },
            {
              "id": "mst_q1_c",
              "text": "Surveillance for pulmonary metastasis (no suspected or known recurrence)",
              "textAr": "[Arabic: Surveillance for pulmonary metastasis (no suspected or known recurrence)]",
              "nextNodeId": "mst_r_surveillance_pulm"
            },
            {
              "id": "mst_q1_d",
              "text": "Surveillance for local recurrence - malignant or aggressive primary bone tumor",
              "textAr": "[Arabic: Surveillance for local recurrence - malignant or aggressive primary bone tumor]",
              "nextNodeId": "mst_r_recur_bone"
            },
            {
              "id": "mst_q1_e",
              "text": "Surveillance for local recurrence - malignant or aggressive primary soft tissue tumor",
              "textAr": "[Arabic: Surveillance for local recurrence - malignant or aggressive primary soft tissue tumor]",
              "nextNodeId": "mst_r_recur_soft"
            },
            {
              "id": "mst_q1_f",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "mst_r_no_imaging"
            }
          ]
        },
        "mst_r_pulmonary": {
          "id": "mst_r_pulmonary",
          "type": "result",
          "summary": "Initial staging - evaluation for pulmonary metastasis",
          "summaryAr": "[Arabic: Initial staging - evaluation for pulmonary metastasis]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT chest without IV contrast",
              "procedureAr": "[Arabic: CT chest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 2
            }
          ]
        },
        "mst_r_extrapulmonary": {
          "id": "mst_r_extrapulmonary",
          "type": "result",
          "summary": "Initial staging - evaluation for extrapulmonary metastasis",
          "summaryAr": "[Arabic: Initial staging - evaluation for extrapulmonary metastasis]",
          "recommendations": [
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI whole body without IV contrast",
              "procedureAr": "[Arabic: MRI whole body without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body",
              "procedureAr": "[Arabic: Bone scan whole body]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/MRI",
              "modalityAr": "[Arabic: FDG-PET/MRI]",
              "procedure": "FDG-PET/MRI whole body",
              "procedureAr": "[Arabic: FDG-PET/MRI whole body]",
              "priority": 2
            },
            {
              "modality": "Fluoride PET/CT",
              "modalityAr": "[Arabic: Fluoride PET/CT]",
              "procedure": "Fluoride PET/CT whole body",
              "procedureAr": "[Arabic: Fluoride PET/CT whole body]",
              "priority": 2
            }
          ]
        },
        "mst_r_surveillance_pulm": {
          "id": "mst_r_surveillance_pulm",
          "type": "result",
          "summary": "Surveillance for pulmonary metastasis",
          "summaryAr": "[Arabic: Surveillance for pulmonary metastasis]",
          "recommendations": [
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT chest without IV contrast",
              "procedureAr": "[Arabic: CT chest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 2
            }
          ]
        },
        "mst_r_recur_bone": {
          "id": "mst_r_recur_bone",
          "type": "result",
          "summary": "Surveillance for local recurrence - primary bone tumor",
          "summaryAr": "[Arabic: Surveillance for local recurrence - primary bone tumor]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray area of interest",
              "procedureAr": "[Arabic: X-ray area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            }
          ]
        },
        "mst_r_recur_soft": {
          "id": "mst_r_recur_soft",
          "type": "result",
          "summary": "Surveillance for local recurrence - soft tissue tumor",
          "summaryAr": "[Arabic: Surveillance for local recurrence - soft tissue tumor]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/MRI",
              "modalityAr": "[Arabic: FDG-PET/MRI]",
              "procedure": "FDG-PET/MRI whole body",
              "procedureAr": "[Arabic: FDG-PET/MRI whole body]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            }
          ]
        },
        "mst_r_no_imaging": {
          "id": "mst_r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    },
    {
      "id": "vertebral_compression_fractures",
      "panelId": "msk",
      "name": "Management of Vertebral Compression Fractures",
      "nameAr": "[Arabic: Management of Vertebral Compression Fractures]",
      "description": "Management and imaging of vertebral compression fractures",
      "descriptionAr": "[Arabic: Management and imaging of vertebral compression fractures]",
      "iconName": "spine",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "New symptomatic vertebral compression fracture (VCF) identified on radiographs. Is there known malignancy?",
          "questionTextAr": "[Arabic: New symptomatic vertebral compression fracture (VCF) identified on radiographs. Is there known malignancy?]",
          "options": [
            {
              "id": "q1_no",
              "text": "No known malignancy",
              "textAr": "[Arabic: No known malignancy]",
              "nextNodeId": "r_no_malignancy"
            },
            {
              "id": "q1_yes",
              "text": "Yes, history of malignancy",
              "textAr": "[Arabic: Yes, history of malignancy]",
              "nextNodeId": "r_malignancy"
            }
          ]
        },
        "r_no_malignancy": {
          "id": "r_no_malignancy",
          "type": "result",
          "summary": "New symptomatic VCF - no known malignancy",
          "summaryAr": "[Arabic: New symptomatic VCF - no known malignancy]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT spine area of interest without IV contrast",
              "procedureAr": "[Arabic: CT spine area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body",
              "procedureAr": "[Arabic: Bone scan whole body]",
              "priority": 2
            },
            {
              "modality": "SPECT/SPECT-CT",
              "modalityAr": "[Arabic: SPECT/SPECT-CT]",
              "procedure": "SPECT/SPECT-CT spine",
              "procedureAr": "[Arabic: SPECT/SPECT-CT spine]",
              "priority": 2
            }
          ]
        },
        "r_malignancy": {
          "id": "r_malignancy",
          "type": "result",
          "summary": "New symptomatic VCF - history of malignancy",
          "summaryAr": "[Arabic: New symptomatic VCF - history of malignancy]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT spine area of interest without IV contrast",
              "procedureAr": "[Arabic: CT spine area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI spine area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT",
              "procedureAr": "[Arabic: FDG-PET/CT]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body",
              "procedureAr": "[Arabic: Bone scan whole body]",
              "priority": 2
            },
            {
              "modality": "Biopsy",
              "modalityAr": "[Arabic: Biopsy]",
              "procedure": "Image-guided biopsy",
              "procedureAr": "[Arabic: Image-guided biopsy]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI spine with IV contrast",
              "procedureAr": "[Arabic: MRI spine with IV contrast]",
              "priority": 2
            },
            {
              "modality": "SPECT/SPECT-CT",
              "modalityAr": "[Arabic: SPECT/SPECT-CT]",
              "procedure": "SPECT/SPECT-CT spine",
              "procedureAr": "[Arabic: SPECT/SPECT-CT spine]",
              "priority": 2
            },
            {
              "modality": "CT Myelography",
              "modalityAr": "[Arabic: CT Myelography]",
              "procedure": "CT myelography",
              "procedureAr": "[Arabic: CT myelography]",
              "priority": 2
            }
          ]
        }
      }
    },
    {
      "id": "osteonecrosis",
      "panelId": "msk",
      "name": "Osteonecrosis",
      "nameAr": "[Arabic: Osteonecrosis]",
      "description": "Imaging for suspected osteonecrosis",
      "descriptionAr": "[Arabic: Imaging for suspected osteonecrosis]",
      "iconName": "bone",
      "rootNodeId": "on_q1",
      "isEnabled": true,
      "nodes": {
        "on_q1": {
          "id": "on_q1",
          "type": "question",
          "questionText": "Clinically suspected osteonecrosis. Is it initial imaging?",
          "questionTextAr": "[Arabic: Clinically suspected osteonecrosis. Is it initial imaging?]",
          "options": [
            {
              "id": "on_q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "on_r_initial"
            },
            {
              "id": "on_q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "on_q2"
            }
          ]
        },
        "on_q2": {
          "id": "on_q2",
          "type": "question",
          "questionText": "What are the clinical findings?",
          "questionTextAr": "[Arabic: What are the clinical findings?]",
          "options": [
            {
              "id": "on_q2_a",
              "text": "Normal radiographs or radiographs suspicious for osteonecrosis",
              "textAr": "[Arabic: Normal radiographs or radiographs suspicious for osteonecrosis]",
              "nextNodeId": "on_r_suspicious"
            },
            {
              "id": "on_q2_b",
              "text": "Known osteonecrosis with articular collapse on radiographs, surgery planned",
              "textAr": "[Arabic: Known osteonecrosis with articular collapse on radiographs, surgery planned]",
              "nextNodeId": "on_r_collapse"
            },
            {
              "id": "on_q2_c",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "on_r_no_imaging"
            }
          ]
        },
        "on_r_initial": {
          "id": "on_r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected osteonecrosis",
          "summaryAr": "[Arabic: Initial imaging for suspected osteonecrosis]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray area of interest",
              "procedureAr": "[Arabic: X-ray area of interest]",
              "priority": 1
            }
          ]
        },
        "on_r_suspicious": {
          "id": "on_r_suspicious",
          "type": "result",
          "summary": "Normal or suspicious radiographs for osteonecrosis",
          "summaryAr": "[Arabic: Normal or suspicious radiographs for osteonecrosis]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "on_r_collapse": {
          "id": "on_r_collapse",
          "type": "result",
          "summary": "Known osteonecrosis with articular collapse - surgery planned",
          "summaryAr": "[Arabic: Known osteonecrosis with articular collapse - surgery planned]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "on_r_no_imaging": {
          "id": "on_r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    },
    {
      "id": "osteoporosis_bmd",
      "panelId": "msk",
      "name": "Osteoporosis and Bone Mineral Density",
      "nameAr": "[Arabic: Osteoporosis and Bone Mineral Density]",
      "description": "Imaging for osteoporosis and bone mineral density assessment",
      "descriptionAr": "[Arabic: Imaging for osteoporosis and bone mineral density assessment]",
      "iconName": "bone",
      "rootNodeId": "obmd_q1",
      "isEnabled": true,
      "nodes": {
        "obmd_q1": {
          "id": "obmd_q1",
          "type": "question",
          "questionText": "What is the clinical indication?",
          "questionTextAr": "[Arabic: What is the clinical indication?]",
          "options": [
            {
              "id": "obmd_q1_a",
              "text": "Osteoporosis screening or initial imaging of clinically suspected low bone mineral density",
              "textAr": "[Arabic: Osteoporosis screening or initial imaging of clinically suspected low bone mineral density]",
              "nextNodeId": "obmd_r_screening"
            },
            {
              "id": "obmd_q1_b",
              "text": "Follow-up imaging of patients with risk for fracture or surveillance of established low BMD",
              "textAr": "[Arabic: Follow-up imaging of patients with risk for fracture or surveillance of established low BMD]",
              "nextNodeId": "obmd_r_followup"
            },
            {
              "id": "obmd_q1_c",
              "text": "Follow-up for patients with T-scores <-1.0 and risk factors (age ≥70F/≥80M, height loss >4cm, prior VCF, glucocorticoid therapy)",
              "textAr": "[Arabic: Follow-up for patients with T-scores <-1.0 and risk factors]",
              "nextNodeId": "obmd_r_risk_factors"
            },
            {
              "id": "obmd_q1_d",
              "text": "Initial imaging for premenopausal females or males <50 years with risk factors",
              "textAr": "[Arabic: Initial imaging for premenopausal females or males <50 years with risk factors]",
              "nextNodeId": "obmd_r_young_initial"
            },
            {
              "id": "obmd_q1_e",
              "text": "Follow-up for premenopausal females or males <50 years with risk factors and low BMD",
              "textAr": "[Arabic: Follow-up for premenopausal females or males <50 years with risk factors and low BMD]",
              "nextNodeId": "obmd_r_young_followup"
            },
            {
              "id": "obmd_q1_f",
              "text": "Males and females ≥50 years, suspected osteoporosis with advanced degenerative changes or scoliosis",
              "textAr": "[Arabic: Males and females ≥50 years, suspected osteoporosis with advanced degenerative changes or scoliosis]",
              "nextNodeId": "obmd_r_degeneration"
            },
            {
              "id": "obmd_q1_g",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "obmd_r_no_imaging"
            }
          ]
        },
        "obmd_r_screening": {
          "id": "obmd_r_screening",
          "type": "result",
          "summary": "Osteoporosis screening or initial imaging",
          "summaryAr": "[Arabic: Osteoporosis screening or initial imaging]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 1
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 2
            }
          ]
        },
        "obmd_r_followup": {
          "id": "obmd_r_followup",
          "type": "result",
          "summary": "Follow-up for fracture risk or established low BMD",
          "summaryAr": "[Arabic: Follow-up for fracture risk or established low BMD]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 1
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 2
            },
            {
              "modality": "TBS",
              "modalityAr": "[Arabic: TBS]",
              "procedure": "TBS lumbar spine",
              "procedureAr": "[Arabic: TBS lumbar spine]",
              "priority": 2
            }
          ]
        },
        "obmd_r_risk_factors": {
          "id": "obmd_r_risk_factors",
          "type": "result",
          "summary": "T-scores <-1.0 with risk factors",
          "summaryAr": "[Arabic: T-scores <-1.0 with risk factors]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 1
            },
            {
              "modality": "DXA VFA",
              "modalityAr": "[Arabic: DXA VFA]",
              "procedure": "DXA VFA",
              "procedureAr": "[Arabic: DXA VFA]",
              "priority": 2
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray axial skeleton",
              "procedureAr": "[Arabic: X-ray axial skeleton]",
              "priority": 2
            }
          ]
        },
        "obmd_r_young_initial": {
          "id": "obmd_r_young_initial",
          "type": "result",
          "summary": "Initial imaging for premenopausal females or males <50 with risk factors",
          "summaryAr": "[Arabic: Initial imaging for premenopausal females or males <50 with risk factors]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 1
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 2
            }
          ]
        },
        "obmd_r_young_followup": {
          "id": "obmd_r_young_followup",
          "type": "result",
          "summary": "Follow-up for premenopausal females or males <50 with risk factors and low BMD",
          "summaryAr": "[Arabic: Follow-up for premenopausal females or males <50 with risk factors and low BMD]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 1
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 2
            },
            {
              "modality": "QCT",
              "modalityAr": "[Arabic: QCT]",
              "procedure": "QCT lumbar spine and hip",
              "procedureAr": "[Arabic: QCT lumbar spine and hip]",
              "priority": 2
            }
          ]
        },
        "obmd_r_degeneration": {
          "id": "obmd_r_degeneration",
          "type": "result",
          "summary": "Suspected osteoporosis with advanced degenerative changes or scoliosis",
          "summaryAr": "[Arabic: Suspected osteoporosis with advanced degenerative changes or scoliosis]",
          "recommendations": [
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA distal forearm",
              "procedureAr": "[Arabic: DXA distal forearm]",
              "priority": 1
            },
            {
              "modality": "DXA",
              "modalityAr": "[Arabic: DXA]",
              "procedure": "DXA lumbar spine and hip(s)",
              "procedureAr": "[Arabic: DXA lumbar spine and hip(s)]",
              "priority": 2
            },
            {
              "modality": "QCT",
              "modalityAr": "[Arabic: QCT]",
              "procedure": "QCT lumbar spine and hip(s)",
              "procedureAr": "[Arabic: QCT lumbar spine and hip(s)]",
              "priority": 2
            }
          ]
        },
        "obmd_r_no_imaging": {
          "id": "obmd_r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    },
    {
      "id": "stress_fracture",
      "panelId": "msk",
      "name": "Stress (Fatigue/Insufficiency) Fracture",
      "nameAr": "[Arabic: Stress (Fatigue/Insufficiency) Fracture]",
      "description": "Imaging for suspected stress fracture",
      "descriptionAr": "[Arabic: Imaging for suspected stress fracture]",
      "iconName": "bone",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult, suspect stress fracture (excluding vertebrae). Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult, suspect stress fracture (excluding vertebrae). Is it initial imaging?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What is the clinical situation?",
          "questionTextAr": "[Arabic: What is the clinical situation?]",
          "options": [
            {
              "id": "q2_a",
              "text": "Radiographs negative or indeterminate (general case)",
              "textAr": "[Arabic: Radiographs negative or indeterminate (general case)]",
              "nextNodeId": "r_neg_general"
            },
            {
              "id": "q2_b",
              "text": "Suspect pelvis/hip/sacrum stress fracture in pregnant patient, radiographs negative/indeterminate",
              "textAr": "[Arabic: Suspect pelvis/hip/sacrum stress fracture in pregnant patient, radiographs negative/indeterminate]",
              "nextNodeId": "r_pregnant"
            },
            {
              "id": "q2_c",
              "text": "High risk for fracture completion or immediate need-to-know, radiographs negative/indeterminate",
              "textAr": "[Arabic: High risk for fracture completion or immediate need-to-know, radiographs negative/indeterminate]",
              "nextNodeId": "r_high_risk"
            },
            {
              "id": "q2_d",
              "text": "Suspect subchondral stress fracture at extremity joint, radiographs negative/indeterminate",
              "textAr": "[Arabic: Suspect subchondral stress fracture at extremity joint, radiographs negative/indeterminate]",
              "nextNodeId": "r_subchondral"
            },
            {
              "id": "q2_e",
              "text": "Positive stress fracture on radiographs, need to determine extent or associated complication",
              "textAr": "[Arabic: Positive stress fracture on radiographs, need to determine extent or associated complication]",
              "nextNodeId": "r_positive"
            },
            {
              "id": "q2_f",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "r_no_imaging"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected stress fracture",
          "summaryAr": "[Arabic: Initial imaging for suspected stress fracture]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray area of interest",
              "procedureAr": "[Arabic: X-ray area of interest]",
              "priority": 1
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            }
          ]
        },
        "r_neg_general": {
          "id": "r_neg_general",
          "type": "result",
          "summary": "Radiographs negative or indeterminate - general case",
          "summaryAr": "[Arabic: Radiographs negative or indeterminate - general case]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray repeat in 10-14 days",
              "procedureAr": "[Arabic: X-ray repeat in 10-14 days]",
              "priority": 2
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_pregnant": {
          "id": "r_pregnant",
          "type": "result",
          "summary": "Suspected pelvis/hip/sacrum stress fracture in pregnant patient",
          "summaryAr": "[Arabic: Suspected pelvis/hip/sacrum stress fracture in pregnant patient]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            }
          ]
        },
        "r_high_risk": {
          "id": "r_high_risk",
          "type": "result",
          "summary": "High risk for fracture completion or immediate need-to-know",
          "summaryAr": "[Arabic: High risk for fracture completion or immediate need-to-know]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_subchondral": {
          "id": "r_subchondral",
          "type": "result",
          "summary": "Suspected subchondral stress fracture at extremity joint",
          "summaryAr": "[Arabic: Suspected subchondral stress fracture at extremity joint]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "Bone Scan",
              "modalityAr": "[Arabic: Bone Scan]",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_positive": {
          "id": "r_positive",
          "type": "result",
          "summary": "Positive stress fracture - determining extent or complication",
          "summaryAr": "[Arabic: Positive stress fracture - determining extent or complication]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray repeat in 10-14 days",
              "procedureAr": "[Arabic: X-ray repeat in 10-14 days]",
              "priority": 2
            }
          ]
        },
        "r_no_imaging": {
          "id": "r_no_imaging",
          "type": "result",
          "summary": "No additional imaging indicated",
          "summaryAr": "[Arabic: No additional imaging indicated]",
          "recommendations": [
            {
              "modality": "Clinical",
              "modalityAr": "[Arabic: Clinical]",
              "procedure": "No imaging indicated - clinical management",
              "procedureAr": "[Arabic: No imaging indicated - clinical management]",
              "priority": 1
            }
          ]
        }
      }
    },
    {
      "id": "osteomyelitis_infection",
      "panelId": "msk",
      "name": "Suspected Osteomyelitis, Septic Arthritis, or Soft Tissue Infection",
      "nameAr": "[Arabic: Suspected Osteomyelitis, Septic Arthritis, or Soft Tissue Infection]",
      "description": "Imaging for suspected osteomyelitis, septic arthritis, or soft tissue infection",
      "descriptionAr": "[Arabic: Imaging for suspected osteomyelitis, septic arthritis, or soft tissue infection]",
      "iconName": "medical",
      "rootNodeId": "osi_q1",
      "isEnabled": true,
      "nodes": {
        "osi_q1": {
          "id": "osi_q1",
          "type": "question",
          "questionText": "Suspected osteomyelitis, septic arthritis, or soft tissue infection (excluding spine and diabetic foot). Is it initial imaging?",
          "questionTextAr": "[Arabic: Suspected osteomyelitis, septic arthritis, or soft tissue infection (excluding spine and diabetic foot). Is it initial imaging?]",
          "options": [
            {
              "id": "osi_q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "osi_r_initial"
            },
            {
              "id": "osi_q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "osi_q2"
            }
          ]
        },
        "osi_q2": {
          "id": "osi_q2",
          "type": "question",
          "questionText": "What is the clinical suspicion and radiograph findings?",
          "questionTextAr": "[Arabic: What is the clinical suspicion and radiograph findings?]",
          "options": [
            {
              "id": "osi_q2_a",
              "text": "Suspected septic arthritis or soft tissue infection, radiographs normal or show joint effusion/soft tissue swelling",
              "textAr": "[Arabic: Suspected septic arthritis or soft tissue infection, radiographs normal or show joint effusion/soft tissue swelling]",
              "nextNodeId": "osi_r_septic_soft"
            },
            {
              "id": "osi_q2_b",
              "text": "Suspected osteomyelitis, radiographs normal or suggestive of osteomyelitis",
              "textAr": "[Arabic: Suspected osteomyelitis, radiographs normal or suggestive of osteomyelitis]",
              "nextNodeId": "osi_r_osteomyelitis"
            },
            {
              "id": "osi_q2_c",
              "text": "Suspected osteomyelitis or soft tissue infection with implanted extra-articular surgical hardware",
              "textAr": "[Arabic: Suspected osteomyelitis or soft tissue infection with implanted extra-articular surgical hardware]",
              "nextNodeId": "osi_r_hardware_extra"
            },
            {
              "id": "osi_q2_d",
              "text": "Suspected septic arthritis with arthroplasty or other implanted intra-articular surgical hardware",
              "textAr": "[Arabic: Suspected septic arthritis with arthroplasty or other implanted intra-articular surgical hardware]",
              "nextNodeId": "osi_r_hardware_intra"
            },
            {
              "id": "osi_q2_e",
              "text": "Suspected soft tissue infection, history of puncture wound with possible retained foreign body, radiographs normal",
              "textAr": "[Arabic: Suspected soft tissue infection, history of puncture wound with possible retained foreign body, radiographs normal]",
              "nextNodeId": "osi_r_foreign_body"
            },
            {
              "id": "osi_q2_f",
              "text": "Suspected soft tissue infection, radiographs show soft tissue gas OR normal radiographs with high clinical suspicion of necrotizing fasciitis",
              "textAr": "[Arabic: Suspected soft tissue infection, radiographs show soft tissue gas OR normal radiographs with high clinical suspicion of necrotizing fasciitis]",
              "nextNodeId": "osi_r_necrotizing"
            },
            {
              "id": "osi_q2_g",
              "text": "None of the above",
              "textAr": "[Arabic: None of the above]",
              "nextNodeId": "osi_r_no_imaging"
            }
          ]
        },
        "osi_r_initial": {
          "id": "osi_r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected infection",
          "summaryAr": "[Arabic: Initial imaging for suspected infection]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray area of interest",
              "procedureAr": "[Arabic: X-ray area of interest]",
              "priority": 1
            }
          ]
        },
        "osi_r_septic_soft": {
          "id": "osi_r_septic_soft",
          "type": "result",
          "summary": "Suspected septic arthritis or soft tissue infection",
          "summaryAr": "[Arabic: Suspected septic arthritis or soft tissue infection]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "osi_r_osteomyelitis": {
          "id": "osi_r_osteomyelitis",
          "type": "result",
          "summary": "Suspected osteomyelitis",
          "summaryAr": "[Arabic: Suspected osteomyelitis]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan",
              "procedureAr": "[Arabic: 3-phase bone scan]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan and WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: 3-phase bone scan and WBC scan and sulfur colloid scan]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan and WBC scan",
              "procedureAr": "[Arabic: 3-phase bone scan and WBC scan]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT",
              "procedureAr": "[Arabic: FDG-PET/CT]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "osi_r_hardware_extra": {
          "id": "osi_r_hardware_extra",
          "type": "result",
          "summary": "Suspected infection with extra-articular surgical hardware",
          "summaryAr": "[Arabic: Suspected infection with extra-articular surgical hardware]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan and WBC scan",
              "procedureAr": "[Arabic: 3-phase bone scan and WBC scan]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT",
              "procedureAr": "[Arabic: FDG-PET/CT]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan",
              "procedureAr": "[Arabic: WBC scan]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "osi_r_hardware_intra": {
          "id": "osi_r_hardware_intra",
          "type": "result",
          "summary": "Suspected septic arthritis with arthroplasty or intra-articular hardware",
          "summaryAr": "[Arabic: Suspected septic arthritis with arthroplasty or intra-articular hardware]",
          "recommendations": [
            {
              "modality": "Aspiration",
              "modalityAr": "[Arabic: Aspiration]",
              "procedure": "Image-guided aspiration",
              "procedureAr": "[Arabic: Image-guided aspiration]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "3-phase bone scan and WBC scan",
              "procedureAr": "[Arabic: 3-phase bone scan and WBC scan]",
              "priority": 2
            },
            {
              "modality": "FDG-PET/CT",
              "modalityAr": "[Arabic: FDG-PET/CT]",
              "procedure": "FDG-PET/CT",
              "procedureAr": "[Arabic: FDG-PET/CT]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan and sulfur colloid scan",
              "procedureAr": "[Arabic: WBC scan and sulfur colloid scan]",
              "priority": 2
            },
            {
              "modality": "Nuclear Medicine",
              "modalityAr": "[Arabic: Nuclear Medicine]",
              "procedure": "WBC scan",
              "procedureAr": "[Arabic: WBC scan]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "osi_r_foreign_body": {
          "id": "osi_r_foreign_body",
          "type": "result",
          "summary": "Suspected soft tissue infection with possible retained foreign body",
          "summaryAr": "[Arabic: Suspected soft tissue infection with possible retained foreign body]",
          "recommendations": [
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without and with IV contrast",
              "procedureAr": "[Arabic: CT area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "osi_r_necrotizing": {
          "id": "osi_r_necrotizing",
          "type": "result",
          "summary": "Suspected necrotizing fasciitis or soft tissue gas",
          "summaryAr": "[Arabic: Suspected necrotizing fasciitis or soft tissue gas]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "US",
              "modalityAr": "[Arabic: US]",
              "procedure": "Ultrasound area of interest",
              "procedureAr": "[Arabic: Ultrasound area of interest]",
              "priority": 2
            }
          ]
        },
        "osi_r_no_imaging": {
          "id": "osi_r_no_imaging",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    },
    {
      "id": "primary_bone_tumors",
      "panelId": "msk",
      "name": "Suspected Primary Bone Tumors",
      "nameAr": "[Arabic: Suspected Primary Bone Tumors]",
      "description": "Imaging for suspected primary bone tumors",
      "descriptionAr": "[Arabic: Imaging for suspected primary bone tumors]",
      "iconName": "bone",
      "rootNodeId": "q1",
      "isEnabled": true,
      "nodes": {
        "q1": {
          "id": "q1",
          "type": "question",
          "questionText": "Adult or child, suspected primary bone tumor. Is it initial imaging?",
          "questionTextAr": "[Arabic: Adult or child, suspected primary bone tumor. Is it initial imaging?]",
          "options": [
            {
              "id": "q1_yes",
              "text": "Yes",
              "textAr": "[Arabic: Yes]",
              "nextNodeId": "r_initial"
            },
            {
              "id": "q1_no",
              "text": "No",
              "textAr": "[Arabic: No]",
              "nextNodeId": "q2"
            }
          ]
        },
        "q2": {
          "id": "q2",
          "type": "question",
          "questionText": "What are the radiograph findings?",
          "questionTextAr": "[Arabic: What are the radiograph findings?]",
          "options": [
            {
              "id": "q2_a",
              "text": "No lesions on radiographs",
              "textAr": "[Arabic: No lesions on radiographs]",
              "nextNodeId": "r_no_lesion"
            },
            {
              "id": "q2_b",
              "text": "Lesion with benign appearance (not osteoid osteoma)",
              "textAr": "[Arabic: Lesion with benign appearance (not osteoid osteoma)]",
              "nextNodeId": "r_benign"
            },
            {
              "id": "q2_c",
              "text": "Osteoid osteoma suspected on radiographs OR osteoid osteoma suspected based on clinical presentation with no lesions on radiographs",
              "textAr": "[Arabic: Osteoid osteoma suspected on radiographs OR osteoid osteoma suspected based on clinical presentation with no lesions on radiographs]",
              "nextNodeId": "r_osteoid"
            },
            {
              "id": "q2_d",
              "text": "Lesion with indeterminate or aggressive appearance for malignancy",
              "textAr": "[Arabic: Lesion with indeterminate or aggressive appearance for malignancy]",
              "nextNodeId": "r_aggressive"
            },
            {
              "id": "a1",
              "text": "None of the above",
              "textAr": "[Arabic: New Option]",
              "nextNodeId": "n1"
            }
          ]
        },
        "r_initial": {
          "id": "r_initial",
          "type": "result",
          "summary": "Initial imaging for suspected primary bone tumor",
          "summaryAr": "[Arabic: Initial imaging for suspected primary bone tumor]",
          "recommendations": [
            {
              "modality": "X-ray",
              "modalityAr": "[Arabic: X-ray]",
              "procedure": "X-ray area of interest",
              "procedureAr": "[Arabic: X-ray area of interest]",
              "priority": 1
            }
          ]
        },
        "r_no_lesion": {
          "id": "r_no_lesion",
          "type": "result",
          "summary": "No lesions on radiographs",
          "summaryAr": "[Arabic: No lesions on radiographs]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "NM",
              "modalityAr": "الطب النووي",
              "procedure": "Bone scan whole body",
              "procedureAr": "[Arabic: Bone scan whole body]",
              "priority": 2
            },
            {
              "modality": "NM",
              "modalityAr": "الطب النووي",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_benign": {
          "id": "r_benign",
          "type": "result",
          "summary": "Lesion with benign appearance (not osteoid osteoma)",
          "summaryAr": "[Arabic: Lesion with benign appearance (not osteoid osteoma)]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "الأشعة المقطعية",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_osteoid": {
          "id": "r_osteoid",
          "type": "result",
          "summary": "Suspected osteoid osteoma",
          "summaryAr": "[Arabic: Suspected osteoid osteoma]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without and with IV contrast",
              "procedureAr": "[Arabic: CT area of interest without and with IV contrast]",
              "priority": 2
            }
          ]
        },
        "r_aggressive": {
          "id": "r_aggressive",
          "type": "result",
          "summary": "Lesion with indeterminate or aggressive appearance for malignancy",
          "summaryAr": "[Arabic: Lesion with indeterminate or aggressive appearance for malignancy]",
          "recommendations": [
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without and with IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without and with IV contrast]",
              "priority": 1
            },
            {
              "modality": "MRI",
              "modalityAr": "[Arabic: MRI]",
              "procedure": "MRI area of interest without IV contrast",
              "procedureAr": "[Arabic: MRI area of interest without IV contrast]",
              "priority": 1
            },
            {
              "modality": "PET",
              "modalityAr": "التصوير المقطعي بالإصدار البوزيتروني",
              "procedure": "FDG-PET/CT whole body",
              "procedureAr": "[Arabic: FDG-PET/CT whole body]",
              "priority": 1
            },
            {
              "modality": "NM",
              "modalityAr": "الطب النووي",
              "procedure": "Bone scan whole body with SPECT/SPECT-CT",
              "procedureAr": "[Arabic: Bone scan whole body with SPECT/SPECT-CT]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest with IV contrast",
              "procedureAr": "[Arabic: CT area of interest with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without and with IV contrast",
              "procedureAr": "[Arabic: CT area of interest without and with IV contrast]",
              "priority": 2
            },
            {
              "modality": "CT",
              "modalityAr": "[Arabic: CT]",
              "procedure": "CT area of interest without IV contrast",
              "procedureAr": "[Arabic: CT area of interest without IV contrast]",
              "priority": 2
            }
          ]
        },
        "n1": {
          "id": "n1",
          "type": "noGuidelines",
          "summary": "No current guidelines covering this topic",
          "summaryAr": "لا توجد إرشادات حالية تغطي هذا الموضوع"
        }
      }
    }
  ]
} as const;