export interface Session {
  time: string;
  title: string;
  speaker?: string;
  type: "lecture" | "break" | "practical" | "ceremony" | "header";
  description?: string[];
}

export interface DaySchedule {
  day: string;
  date: string;
  sessions: Session[];
}

export const PROGRAMME: DaySchedule[] = [
  {
    day: "Day 1",
    date: "26 June 2026 (Friday)",
    sessions: [
      { time: "07:00 – 08:00", title: "Registration", type: "ceremony" },
      { time: "08:00 – 08:30", title: "Welcome Speech / Opening Ceremony", speaker: "Azmi Alias", type: "ceremony" },
      { time: "", title: "SESSION 1: ENDONASAL BASIC & EXTENDED APPROACHES", type: "header" },
      { time: "08:30 – 08:50", title: "Instrument Selection and Dissection Techniques in Endoscopic Neurosurgery", speaker: "Tadashi Watanabe", type: "lecture" },
      { time: "08:50 – 09:10", title: "Endoscopic Pituitary Transposition with Posterior Clinoidectomy for Parasellar Tumours", speaker: "Takeo Goto", type: "lecture" },
      { time: "09:10 – 09:30", title: "Endoscopic Surgical Strategies for Giant Parasellar Tumours", speaker: "Tadashi Watanabe", type: "lecture" },
      { time: "09:30 – 09:45", title: "Evolution of Neuroendoscopy in Local Practice", speaker: "Azmi Alias", type: "lecture" },
      { time: "09:45 – 09:55", title: "Q&A Session", type: "break" },
      { time: "09:55 – 10:10", title: "Endoscopic Surgery in Functional Pituitary Tumours: Experience and Challenges", speaker: "Ng Wei Ping", type: "lecture" },
      { time: "10:10 – 10:25", title: "Neuroendoscopic Resection in Advanced ORL and Skull Base Surgery: An Evolving Paradigm", speaker: "Komathi", type: "lecture" },
      { time: "10:25 – 10:40", title: "Current Strategies in Reconstruction After Endoscopic Skull Base Surgery", speaker: "Maithrea", type: "lecture" },
      { time: "10:40 – 10:50", title: "Q&A Session", type: "break" },
      { time: "10:50 – 11:10", title: "Coffee Break & Exhibition", type: "break" },
      { time: "", title: "SESSION 2: SUPRAORBITAL/TRANSORBITAL NEUROENDOSCOPIC SURGERY (TONES)", type: "header" },
      { time: "11:10 – 11:30", title: "Endoscopic Approach to the Orbit", speaker: "Calvin Mak", type: "lecture" },
      { time: "11:30 – 12:00", title: "Endoscopic Supraorbital Approach: Techniques, Tips, and Applications", speaker: "Tadashi Watanabe", type: "lecture" },
      { time: "12:00 – 12:20", title: "The Versatility of Transorbital Endoscopic Surgery: From Anatomy to Pathology", speaker: "Chang Ki Hong", type: "lecture" },
      { time: "12:20 – 12:40", title: "The Transorbital Window: A Minimally Invasive Pathway for Deep Skull Base Pathology", speaker: "Doo Sik Kong", type: "lecture" },
      { time: "12:40 – 13:00", title: "Multiportal Applications with Endoscopic Transorbital Surgery", speaker: "Calvin Mak", type: "lecture" },
      { time: "13:00 – 13:10", title: "Q&A Session", type: "break" },
      { time: "13:10 – 14:30", title: "Lunch, Prayer Break & Exhibition", type: "break" },
      { time: "", title: "SESSION 3: ANTERIOR & MIDDLE CRANIAL FOSSA TRANSCRANIAL", type: "header" },
      { time: "14:30 – 14:50", title: "Tailored Surgical Access to the Cavernous Sinus", speaker: "Chang Ki Hong", type: "lecture" },
      { time: "14:50 – 15:10", title: "The Application of Advanced Visualization Tools in Skull Base Surgery", speaker: "Calvin Mak", type: "lecture" },
      { time: "15:10 – 15:30", title: "Improving Surgical Precision for Pituitary Tumours with Laser Microendoscopy", speaker: "Doo Sik Kong", type: "lecture" },
      { time: "15:30 – 15:40", title: "Q&A Session", type: "break" },
      { time: "15:40 – 16:10", title: "Coffee Break & Exhibition", type: "break" },
      { time: "", title: "SESSION 4: POSTERIOR CRANIAL FOSSA TRANSCRANIAL", type: "header" },
      { time: "16:10 – 16:30", title: "Mini-combined Petrosal Approach for Large Petroclival Tumour", speaker: "Takeo Goto", type: "lecture" },
      { time: "16:30 – 16:50", title: "Tailored Surgical Management of Foramen Magnum Meningiomas: Selecting the Optimal Route Based on Tumour", speaker: "Chang Ki Hong", type: "lecture" },
      { time: "16:50 – 17:10", title: "Impact of Preoperative Cranial Tractography on Surgical Approach Choice and Functional Outcome in Patients with Brain Tumours", speaker: "Doo Sik Kong", type: "lecture" },
      { time: "17:10 – 18:00", title: "Q&A Session, Certification, Closing Remarks", type: "ceremony" },
    ],
  },
  {
    day: "Day 2",
    date: "27 June 2026 (Saturday)",
    sessions: [
      { time: "", title: "ENDOSCOPIC & TRANSORBITAL CADAVERIC DISSECTION", type: "header" },
      { time: "08:00 – 08:30", title: "Morning Welcome & Safety Briefing", type: "ceremony" },
      {
        time: "08:30 – 13:00",
        title: "Hands-On Cadaveric Dissection (Endoscopic Endonasal)",
        type: "practical",
        description: [
          "Lecture: Basic and Extended Endoscopic Skull Base Anatomy and Surgical Approaches (Speakers: Takeo Goto, Tadashi Watanabe)",
          "Dissection: Nasoseptal Harvest, Transsellar, Transplanum, Transcribriform, Transclival, Transmaxillary–Transpterygoid Approaches, and Pituitary Transposition (Speaker: Takeo Goto)"
        ]
      },
      { time: "13:00 – 14:00", title: "Lunch", type: "break" },
      {
        time: "14:00 – 18:00",
        title: "Hands-On Cadaveric Dissection (Endoscopic Transorbital)",
        type: "practical",
        description: [
          "Lecture: Transorbital Neuroendoscopic Anatomy and Surgical Corridors (Speakers: Doo Sik Kong, Chang Ki Hong)",
          "Dissection: Transorbital Portals (Preseptal vs Retroseptal), Superior Eyelid Crease, Lateral Retrocanthal, Medial Transorbital (Transcaruncular) Approach, Key Orbital and Skull Base Landmarks (Speaker: Doo Sik Kong)"
        ]
      },
      { time: "18:00 – 18:30", title: "Debriefing & Q&A – Endoscopic & Transorbital Approaches", type: "ceremony" },
    ],
  },
  {
    day: "Day 3",
    date: "28 June 2026 (Sunday)",
    sessions: [
      { time: "", title: "TRANSCRANIAL (MICROSCOPIC) CADAVERIC DISSECTION", type: "header" },
      { time: "07:30 – 08:00", title: "Morning Welcome & Equipment Check (Microscope Setup)", type: "ceremony" },
      {
        time: "08:00 – 13:00",
        title: "Hands-On Cadaveric Dissection: Anterior & Middle Fossa",
        type: "practical",
        description: [
          "Lecture: Anterior And Middle Cranial Fossa Surgical Anatomy and Approaches (Speakers: Calvin Mak, Tadashi Watanabe)",
          "Dissection: Orbitozygomatic, Clinoidectomy, Anterior Petrosectomy, and Cavernous Sinus Exposure (Speaker: Tadashi Watanabe)"
        ]
      },
      { time: "13:00 – 14:00", title: "Lunch", type: "break" },
      {
        time: "14:00 – 17:00",
        title: "Hands-On Cadaveric Dissection: Posterior Fossa",
        type: "practical",
        description: [
          "Lecture: Microsurgical Anatomy of the Posterior Fossa, CPA, and Craniovertebral Junction (Speaker: Takeo Goto)",
          "Dissection: Retrosigmoid, Posterior Petrosectomy, Far Lateral Approach: Occipital Condyle Drilling and Vertebral Artery Exposure (Speaker: Takeo Goto)"
        ]
      },
      { time: "17:00 – 17:30", title: "Final Debriefing, Certification & End of Course", type: "ceremony" },
    ],
  },
];