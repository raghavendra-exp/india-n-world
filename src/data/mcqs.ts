import { MCQ } from "./types";

export const MCQS: MCQ[] = [
  {
    id: "q1", topic: "Schemes", question: "Consider the following statements about PM-KISAN:\n1. It is a Centrally Sponsored Scheme with cost shared between Centre and States.\n2. Payment is made in three equal instalments of ₹2,000 each.\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], answer: 1,
    explanation: "PM-KISAN is a 100% Central Sector scheme (not Centrally Sponsored) — the Centre bears the full cost. Statement 2 is correct: ₹6,000/year paid in three instalments of ₹2,000 each.",
    trap: "Confusing 'Central Sector' (100% Centre-funded) with 'Centrally Sponsored' (cost-shared) is one of UPSC's favourite traps in the schemes category.",
    difficulty: "Medium",
  },
  {
    id: "q2", topic: "Schemes", question: "MGNREGA guarantees how many days of wage employment per household per year?",
    options: ["50 days", "80 days", "100 days", "150 days"], answer: 2,
    explanation: "MGNREGA is a statutory legal guarantee of 100 days of unskilled wage employment per rural household per financial year.",
    trap: "Do not confuse the 100-day guarantee with State-specific top-ups some States provide from their own funds.",
    difficulty: "Easy",
  },
  {
    id: "q3", topic: "International Organisations", question: "Which of the following is/are founding member(s) of the QUAD?\n1. India\n2. Japan\n3. South Korea\n4. Australia",
    options: ["1, 2 and 4 only", "1, 2, 3 and 4", "1 and 4 only", "2, 3 and 4 only"], answer: 0,
    explanation: "QUAD comprises only India, the United States, Japan and Australia. South Korea is not a QUAD member.",
    trap: "South Korea is frequently confused as a QUAD member because of its close US/Japan ties — it is not part of the grouping.",
    difficulty: "Medium",
  },
  {
    id: "q4", topic: "International Organisations", question: "The headquarters of the New Development Bank (NDB), set up by BRICS, is located in:",
    options: ["Beijing", "New Delhi", "Shanghai", "Moscow"], answer: 2,
    explanation: "The New Development Bank is headquartered in Shanghai, China, though its presidency rotates among member states.",
    trap: "Candidates often guess Beijing simply because China is the largest BRICS economy — but the NDB's HQ is specifically Shanghai.",
    difficulty: "Medium",
  },
  {
    id: "q5", topic: "International Organisations", question: "Which grouping is described as bridging South Asia and Southeast Asia and excludes Pakistan?",
    options: ["SAARC", "SCO", "BIMSTEC", "G20"], answer: 2,
    explanation: "BIMSTEC (Bay of Bengal Initiative) links five South Asian states (excluding Pakistan and Afghanistan) with Myanmar and Thailand from Southeast Asia.",
    trap: "SAARC is the common wrong choice since it is also South-Asia focused, but SAARC includes Pakistan and has no Southeast Asian members.",
    difficulty: "Easy",
  },
  {
    id: "q6", topic: "Schemes", question: "Ayushman Bharat — PM-JAY provides a health cover of what amount per family per year?",
    options: ["₹1 lakh", "₹2 lakh", "₹5 lakh", "₹10 lakh"], answer: 2,
    explanation: "PM-JAY provides ₹5 lakh per family per year on a family floater basis, with no cap on family size or age.",
    trap: "The 'family floater, no cap on size/age' feature is a common statement-based trap distinct from the amount itself.",
    difficulty: "Easy",
  },
  {
    id: "q7", topic: "Bilateral Relations", question: "The 'foundational' defence agreements enabling India-US military interoperability include LEMOA, COMCASA and:",
    options: ["BECA", "iCET", "2+2 Dialogue", "I2U2"], answer: 0,
    explanation: "BECA (Basic Exchange and Cooperation Agreement for Geo-Spatial Cooperation) is the third foundational agreement, alongside LEMOA and COMCASA.",
    trap: "iCET and the 2+2 Dialogue are important India-US mechanisms but are not among the three 'foundational' interoperability agreements.",
    difficulty: "Hard",
  },
  {
    id: "q8", topic: "Bilateral Relations", question: "Which treaty governs the 1950 foundation of India-Nepal relations, including free movement across the border?",
    options: ["Treaty of Peace and Friendship, 1950", "Panchsheel Agreement, 1954", "Simla Agreement, 1972", "Gujral Doctrine"], answer: 0,
    explanation: "The India-Nepal Treaty of Peace and Friendship (1950) underlies the open border and reciprocal rights of movement/residence.",
    trap: "Panchsheel (1954) is an India-China agreement, not India-Nepal — a common cross-country confusion.",
    difficulty: "Medium",
  },
];
