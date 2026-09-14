import { MCQ } from "./types";

export const MCQS: MCQ[] = [
  // ---------- Schemes ----------
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
    id: "q6", topic: "Schemes", question: "Ayushman Bharat — PM-JAY provides a health cover of what amount per family per year?",
    options: ["₹1 lakh", "₹2 lakh", "₹5 lakh", "₹10 lakh"], answer: 2,
    explanation: "PM-JAY provides ₹5 lakh per family per year on a family floater basis, with no cap on family size or age.",
    trap: "The 'family floater, no cap on size/age' feature is a common statement-based trap distinct from the amount itself.",
    difficulty: "Easy",
  },
  {
    id: "q9", topic: "Schemes", question: "The subsidy under PM Surya Ghar: Muft Bijli Yojana for a household installing a 2kW rooftop solar system is capped at approximately:",
    options: ["₹30,000", "₹48,000", "₹60,000", "₹78,000"], answer: 2,
    explanation: "The subsidy is ₹30,000/kW for the first 2kW — so a 2kW system gets ₹60,000. The ₹78,000 figure is the cap for 3kW-and-above systems (₹30,000×2 + ₹18,000 for the 3rd kW).",
    trap: "Candidates often quote the ₹78,000 headline figure without checking it applies to 3kW+ systems, not the base 2kW tier.",
    difficulty: "Hard",
  },
  {
    id: "q10", topic: "Schemes", question: "Which of the following best describes PM Vishwakarma?",
    options: [
      "A pension scheme for organised-sector industrial workers",
      "A support scheme for traditional artisans and craftspeople across 18 identified trades",
      "A credit guarantee scheme exclusively for women entrepreneurs",
      "A scholarship scheme for engineering students",
    ], answer: 1,
    explanation: "PM Vishwakarma (launched September 2023) supports traditional artisans/craftspeople across 18 trades with a digital ID, skill training, a ₹15,000 toolkit incentive, and collateral-free loans.",
    trap: "The scheme name evokes a generic 'worker welfare' scheme; the trap is not recognising its specific artisan-trade focus.",
    difficulty: "Medium",
  },
  {
    id: "q11", topic: "Schemes", question: "Under the Startup India initiative, Section 80-IAC of the Income Tax Act provides:",
    options: [
      "A permanent 15% concessional tax rate for all startups",
      "100% tax deduction on profits for any 3 consecutive years within the first 10 years of incorporation",
      "Exemption from GST for the first 5 years",
      "A one-time cash grant of ₹10 lakh to every recognised startup",
    ], answer: 1,
    explanation: "Section 80-IAC gives DPIIT-recognised eligible startups a 100% profit-tax deduction for any 3 consecutive years within their first 10 years — a tax holiday, not a cash grant or GST exemption.",
    trap: "Section 115BAB's 15% concessional rate (for new manufacturing companies) is a different provision often confused with 80-IAC.",
    difficulty: "Hard",
  },
  {
    id: "q12", topic: "Schemes", question: "The Production Linked Incentive (PLI) scheme currently covers how many key sectors?",
    options: ["8", "10", "14", "20"], answer: 2,
    explanation: "PLI schemes have been notified for 14 key sectors (electronics, pharma, telecom, textiles, solar PV, automobiles/EVs, specialty steel, drones, food processing, and others) with a combined outlay of about ₹1.97 lakh crore.",
    trap: "10 was the number of sectors covered in the original November 2020 tranche before later sectors (textiles, solar PV Tranche-II, drones, etc.) were added, bringing the total to 14.",
    difficulty: "Medium",
  },
  {
    id: "q13", topic: "Schemes", question: "Jal Jeevan Mission's objective of 'Har Ghar Jal' specifically refers to:",
    options: [
      "A functional household tap connection providing potable water to every rural household",
      "Free electricity to every rural household",
      "A toilet in every household under Swachh Bharat Mission",
      "A bank account for every rural household",
    ], answer: 0,
    explanation: "Jal Jeevan Mission's 'Har Ghar Jal' tagline refers specifically to Functional Household Tap Connections (FHTC) for potable water, implemented under the Ministry of Jal Shakti.",
    trap: "Candidates sometimes conflate 'Har Ghar' taglines across different schemes (Har Ghar Jal vs Har Ghar Tiranga vs Har Ghar Nal Yojana informally used names) — the ministry and specific objective must be matched carefully.",
    difficulty: "Easy",
  },
  {
    id: "q14", topic: "Schemes", question: "Which of the following statements about the financial-inclusion trio (PMJDY, PMJJBY, PMSBY) is correct?",
    options: [
      "All three are entirely free with no premium paid by the beneficiary",
      "PMJDY is a bank account scheme; PMJJBY and PMSBY are contributory insurance schemes with a small annual premium",
      "PMJJBY offers accident cover and PMSBY offers life cover",
      "All three schemes are administered exclusively by LIC",
    ], answer: 1,
    explanation: "PMJDY (Jan Dhan) provides zero-balance bank accounts; PMJJBY (life cover, ~₹436/year) and PMSBY (accident cover, ~₹20/year) are auto-debited contributory insurance schemes, not free.",
    trap: "Swapping PMJJBY (Jeevan Jyoti = life) and PMSBY (Suraksha = accident/safety) cover types is a classic UPSC-style trap given their similar names.",
    difficulty: "Medium",
  },
  {
    id: "q15", topic: "Schemes", question: "PM SHRI Schools aim to develop selected existing government schools as models demonstrating the implementation of:",
    options: ["The Right to Education Act, 2009", "National Education Policy (NEP) 2020", "The Sarva Shiksha Abhiyan framework", "The Digital India programme"], answer: 1,
    explanation: "PM SHRI schools (over 14,000 targeted) are meant to be exemplar schools showcasing all components of NEP 2020, selected via a challenge-mode process among States/UTs.",
    trap: "Sarva Shiksha Abhiyan is an older, now-subsumed programme (folded into Samagra Shiksha) — not the current policy framework PM SHRI demonstrates.",
    difficulty: "Medium",
  },

  // ---------- International Organisations ----------
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
    id: "q16", topic: "International Organisations", question: "As of 2026, which of the following became a full BRICS member effective January 2025 (after the initial January 2024 expansion cohort)?",
    options: ["Argentina", "Indonesia", "Turkey", "Nigeria"], answer: 1,
    explanation: "Indonesia formally became a full BRICS member from January 2025, a year after the initial 2024 expansion cohort (Egypt, Ethiopia, Iran, Saudi Arabia, UAE). Argentina was invited but withdrew before accession under its new government; Nigeria and Turkey are partner countries, not full members.",
    trap: "Argentina is commonly misremembered as a member because it was part of the original 2023 Johannesburg invitation list — but it withdrew before the January 2024 accession date.",
    difficulty: "Hard",
  },
  {
    id: "q17", topic: "International Organisations", question: "India is hosting which major multilateral summit in New Delhi in September 2026?",
    options: ["G20 Summit", "18th BRICS Summit", "SCO Summit", "ASEAN-India Summit"], answer: 1,
    explanation: "India holds the BRICS presidency in 2026 and is hosting the 18th BRICS Summit in New Delhi on 12–13 September 2026. India's G20 presidency was earlier, in 2023.",
    trap: "Candidates may default to 'G20' as their reflexive answer for any India-hosted 2020s summit, forgetting India's G20 turn was already in 2023 — 2026 is a BRICS year for India.",
    difficulty: "Medium",
  },
  {
    id: "q18", topic: "International Organisations", question: "Which country holds the G20 presidency in 2026?",
    options: ["India", "Brazil", "South Africa", "United States"], answer: 3,
    explanation: "The G20 presidency sequence after India (2023) is: Brazil (2024) → South Africa (2025) → United States (2026) → United Kingdom (2027).",
    trap: "This is a fast-moving fact that changes annually — always verify the current year's G20 host rather than relying on memory of India's own 2023 presidency.",
    difficulty: "Medium",
  },
  {
    id: "q19", topic: "International Organisations", question: "Consider the following statements about the UN Security Council (UNSC):\n1. It has 5 permanent members, each holding veto power.\n2. Non-permanent members serve 3-year terms.\n3. Reform requires ratification by all 5 permanent members.\nWhich of the statements given above is/are correct?",
    options: ["1 and 3 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"], answer: 0,
    explanation: "Statements 1 and 3 are correct. Statement 2 is wrong — UNSC non-permanent members serve 2-year terms, not 3.",
    trap: "The 2-year non-permanent term is frequently confused with the UN Human Rights Council's 3-year term — a cross-body mix-up.",
    difficulty: "Hard",
  },
  {
    id: "q20", topic: "International Organisations", question: "The WHO Global Centre for Traditional Medicine — WHO's first and only such global knowledge centre — is located in:",
    options: ["Geneva, Switzerland", "New Delhi, India", "Jamnagar, Gujarat, India", "Kerala, India"], answer: 2,
    explanation: "The WHO Global Centre for Traditional Medicine was established in Jamnagar, Gujarat, in 2022 — the WHO's first and only global centre dedicated to traditional medicine.",
    trap: "Candidates often guess New Delhi by default for any India-hosted WHO facility, without recalling the specific Jamnagar location.",
    difficulty: "Medium",
  },
  {
    id: "q21", topic: "International Organisations", question: "The India-Middle East-Europe Economic Corridor (IMEC) was announced at which forum?",
    options: ["G7 Summit, 2023", "G20 New Delhi Summit, 2023", "QUAD Summit, 2023", "SCO Summit, 2023"], answer: 1,
    explanation: "IMEC was announced on the sidelines of the G20 New Delhi Summit in September 2023, involving India, the US, Saudi Arabia, UAE, EU and other partners.",
    trap: "Given IMEC's geopolitical framing (seen as a counter to China's BRI), candidates sometimes wrongly associate it with QUAD or G7, which did not host its announcement.",
    difficulty: "Medium",
  },
  {
    id: "q22", topic: "International Organisations", question: "Which grouping brings together India, Israel, the UAE and the United States for economic and technology cooperation?",
    options: ["I2U2", "QUAD", "IORA", "Abraham Accords"], answer: 0,
    explanation: "I2U2 (India, Israel, UAE, US) is a minilateral grouping focused on joint investment in areas like food security, clean energy and technology.",
    trap: "The Abraham Accords are a separate set of Israel-Arab normalisation agreements that India is not a party to — easily confused with I2U2 given the overlapping Gulf/Israel geography.",
    difficulty: "Medium",
  },
  {
    id: "q23", topic: "International Organisations", question: "The Indian Ocean Rim Association (IORA) Secretariat is located in:",
    options: ["Mumbai, India", "Colombo, Sri Lanka", "Ebène, Mauritius", "Perth, Australia"], answer: 2,
    explanation: "IORA's Secretariat is located in Ebène, Mauritius. IORA was established in 1997 and has 23 member states across the Indian Ocean rim.",
    trap: "Given India's central role in the Indian Ocean, candidates sometimes wrongly assume the secretariat must be in an Indian city.",
    difficulty: "Medium",
  },

  // ---------- Bilateral Relations ----------
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
  {
    id: "q24", topic: "Bilateral Relations", question: "The India-UK Comprehensive Economic and Trade Agreement (CETA) came into force on:",
    options: ["24 July 2025", "1 January 2026", "15 July 2026", "6 May 2025"], answer: 2,
    explanation: "CETA was signed on 24 July 2025 at Chequers but came into force later, on 15 July 2026, after parliamentary processes in both countries.",
    trap: "The signing date (24 July 2025) is often wrongly given as the 'in force' date — UPSC-style questions frequently test this signing-vs-entry-into-force distinction for trade agreements.",
    difficulty: "Hard",
  },
  {
    id: "q25", topic: "Bilateral Relations", question: "The MAHASAGAR vision, announced by India's PM in March 2025, was unveiled during a visit to which country?",
    options: ["Sri Lanka", "Mauritius", "Maldives", "Seychelles"], answer: 1,
    explanation: "MAHASAGAR (Mutual and Holistic Advancement for Security and Growth Across Regions) was announced during PM Modi's visit to Mauritius in March 2025, elevating the 2015 SAGAR doctrine.",
    trap: "Given MAHASAGAR's IOR-island-state framing, candidates often guess Maldives or Seychelles instead of the actual announcement location, Mauritius.",
    difficulty: "Hard",
  },
  {
    id: "q26", topic: "Bilateral Relations", question: "The India-UAE Comprehensive Economic Partnership Agreement (CEPA) came into force in which year?",
    options: ["2020", "2021", "2022", "2023"], answer: 2,
    explanation: "The India-UAE CEPA came into force in May 2022, marking India's first major trade agreement under its renewed post-2019 FTA push.",
    trap: "This is sometimes confused with the year negotiations began or were announced, rather than the actual entry-into-force date.",
    difficulty: "Medium",
  },
  {
    id: "q27", topic: "Bilateral Relations", question: "Which country is described as India's most consistent Western defence-technology-transfer partner, notably for the Scorpène-class submarine programme?",
    options: ["United States", "United Kingdom", "France", "Israel"], answer: 2,
    explanation: "France has supplied technology for the Scorpène-class submarines (Project-75) and Rafale fighter jets, and is widely regarded as India's most consistent Western partner on sensitive technology transfer.",
    trap: "The US is often the default guess for any advanced defence-technology question given the scale of the India-US relationship, but France's track record on technology-sharing specifically is distinct and older.",
    difficulty: "Medium",
  },
  {
    id: "q28", topic: "Bilateral Relations", question: "The Colombo Security Conclave is a maritime security grouping comprising India, Sri Lanka, Maldives, and (as observer/associate) which other states?",
    options: ["Bangladesh and Seychelles", "Mauritius and Myanmar", "Thailand and Indonesia", "Pakistan and Iran"], answer: 0,
    explanation: "The Colombo Security Conclave includes India, Sri Lanka and the Maldives as core members, with Mauritius, Bangladesh and Seychelles participating as observers/associate members in various configurations.",
    trap: "Candidates sometimes confuse this Indian-Ocean-specific grouping with the broader IORA, which has a much larger 23-member roster.",
    difficulty: "Hard",
  },
  {
    id: "q29", topic: "Current Affairs", question: "India held the Indus Waters Treaty 'in abeyance' from 23 April 2025. This decision was announced immediately after which event?",
    options: ["The Galwan Valley clash", "The Pahalgam terror attack", "The Uri attack", "Operation Sindoor"], answer: 1,
    explanation: "India announced the abeyance decision on 23 April 2025, one day after the Pahalgam terror attack in Jammu & Kashmir.",
    trap: "Operation Sindoor (May 2025) came after and partly because of the same escalation cycle, but the IWT abeyance decision itself was a direct response to the Pahalgam attack specifically, not Operation Sindoor.",
    difficulty: "Medium",
  },
  {
    id: "q30", topic: "Current Affairs", question: "Which international body ruled in August 2026 that the Indus Waters Treaty remains fully in force despite India's abeyance declaration?",
    options: ["International Court of Justice (ICJ)", "Permanent Court of Arbitration (Court of Arbitration constituted under the Treaty)", "UN Security Council", "World Bank Board of Governors"], answer: 1,
    explanation: "Pakistan approached the Court of Arbitration (a mechanism under the Treaty's own dispute-resolution framework, seated at the Permanent Court of Arbitration, The Hague); India has rejected the tribunal's jurisdiction as 'illegally constituted.'",
    trap: "Many candidates default to the ICJ for any international legal dispute — the correct body here is the treaty-specific Court of Arbitration, not the ICJ.",
    difficulty: "Hard",
  },
  {
    id: "q31", topic: "Bilateral Relations", question: "The India-EU Free Trade Agreement, politically concluded in January 2026, traces its origins to trade talks launched under which framework in 2007?",
    options: ["Comprehensive Economic Partnership Agreement (CEPA)", "Broad-based Trade and Investment Agreement (BTIA)", "Economic Cooperation and Trade Agreement (ECTA)", "Trade and Technology Council (TTC)"], answer: 1,
    explanation: "The original 2007 talks were held under the BTIA framework, which stalled in 2013 and were relaunched only in 2022, eventually leading to the January 2026 conclusion.",
    trap: "CEPA and ECTA are the naming conventions India has used for its more recently concluded FTAs (with UAE and Australia respectively) — not the EU negotiation, which retains the older BTIA lineage.",
    difficulty: "Medium",
  },
  {
    id: "q32", topic: "International Organisations", question: "Which of the following countries joined BRICS as full members effective January 2024?\n1. Indonesia\n2. Egypt\n3. Saudi Arabia\n4. Ethiopia",
    options: ["1, 2 and 3 only", "2, 3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"], answer: 1,
    explanation: "Egypt, Ethiopia, Iran, Saudi Arabia and the UAE joined from January 2024. Indonesia joined a year later, from January 2025 — a distinct, later expansion round.",
    trap: "Indonesia's accession is often incorrectly bundled into the same January 2024 batch — it was actually a separate accession a full year later.",
    difficulty: "Hard",
  },
  {
    id: "q33", topic: "Bilateral Relations", question: "Under the February 2026 India-US interim trade framework, the reciprocal tariff on Indian goods was reduced to:",
    options: ["10%", "18%", "25%", "50%"], answer: 1,
    explanation: "The framework cut the reciprocal tariff to 18%, down from the 50% peak (25% reciprocal + 25% Russia-linked penalty) reached in August 2025.",
    trap: "50% was the pre-framework peak rate, and 25% was one of its two components (the reciprocal portion alone) — the question asks for the post-framework figure specifically.",
    difficulty: "Medium",
  },
  {
    id: "q34",
    topic: "Chabahar Port & Geopolitics",
    difficulty: "Medium",
    question: "With reference to the Chabahar Port, consider the following statements:\n1. It is located on the Makran coast in the Sistan-Baluchestan province of Iran outside the Persian Gulf.\n2. India operates the Shahid Kalantari terminal under a 10-year bilateral contract signed in May 2024.\n3. The port connects directly with the International North-South Transport Corridor (INSTC).\nWhich of the statements given above is/are correct?",
    options: [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    answer: 1,
    explanation: "Statement 1 is correct: Chabahar is located on Iran's Makran coast outside the Strait of Hormuz, giving it direct deep-water access to the Arabian Sea. Statement 2 is incorrect: India operates the Shahid Beheshti terminal (not Shahid Kalantari) through India Ports Global Limited (IPGL). Statement 3 is correct: Chabahar serves as an official gateway terminal connecting with the INSTC transit network.",
    trap: "Candidates often confuse the two terminals of Chabahar Port: Shahid Beheshti (developed and operated by India) and Shahid Kalantari."
  },
  {
    id: "q35",
    topic: "Maritime Chokepoints",
    difficulty: "Hard",
    question: "Consider the following pairs of strategic maritime channels and the water bodies they connect:\n1. Strait of Hormuz : Persian Gulf and Gulf of Oman\n2. Bab-el-Mandeb : Red Sea and Gulf of Aden\n3. Six Degree Channel : Andaman Sea and Bay of Bengal\n4. Lombok Strait : Java Sea and Indian Ocean\nHow many of the above pairs are correctly matched?",
    options: [
      "Only one pair",
      "Only two pairs",
      "Only three pairs",
      "All four pairs"
    ],
    answer: 2,
    explanation: "Pair 1 is correctly matched: Hormuz connects the Persian Gulf to the Gulf of Oman. Pair 2 is correctly matched: Bab-el-Mandeb links the Red Sea to the Gulf of Aden. Pair 3 is incorrectly matched: The Six Degree Channel (Great Channel) lies between India's Great Nicobar Island and Indonesia's Rondo Island, connecting the Bay of Bengal / Indian Ocean to the Andaman Sea / Malacca gateway. Pair 4 is correctly matched: The Lombok Strait connects the Java Sea (Pacific) with the Indian Ocean.",
    trap: "UPSC frequently tests the exact geographic bounds of regional passages and archipelagic straits."
  },
  {
    id: "q36",
    topic: "Agalega & SAGAR",
    difficulty: "Medium",
    question: "In early 2024, an upgraded 3,000-metre airstrip and the St. James Jetty were jointly inaugurated by India in which of the following island nations to enhance maritime surveillance in the Western Indian Ocean?",
    options: [
      "Seychelles (Assumption Island)",
      "Mauritius (Agalega Island)",
      "Maldives (Uthuru Thila Falhu)",
      "Madagascar (Nosy Be)"
    ],
    answer: 1,
    explanation: "On February 29, 2024, Indian PM Narendra Modi and Mauritian PM Pravind Jugnauth jointly inaugurated the newly upgraded 3,000-metre airstrip and St. James Jetty on North Agalega Island in Mauritius, bolstering maritime domain awareness and anti-piracy operations under India's SAGAR vision.",
    trap: "Do not confuse the Agalega Island project in Mauritius with the Assumption Island project in Seychelles."
  },
  {
    id: "q37",
    topic: "I2U2 Grouping",
    difficulty: "Easy",
    question: "The 'I2U2' minilateral initiative, often referred to as the 'West Asian Quad', focuses on joint investments across six mutually identified sectors. Which of the following is NOT one of these six focus areas?",
    options: [
      "Water and Energy",
      "Transportation and Space",
      "Health and Food Security",
      "Nuclear Non-Proliferation and Border Fencing"
    ],
    answer: 3,
    explanation: "The six focus sectors mutually agreed by the I2U2 leaders (India, Israel, UAE, USA) are: water, energy, transportation, space, health, and food security. Nuclear non-proliferation and border fencing are not part of the I2U2 mandate.",
    trap: "Candidates may presume security or defense pacts form the formal focus, whereas I2U2 is strictly economic and infrastructure oriented."
  },
  {
    id: "q38",
    topic: "IMEC Corridor",
    difficulty: "Medium",
    question: "With reference to the India-Middle East-Europe Economic Corridor (IMEC), consider the following statements:\n1. It was officially launched on the sidelines of the G20 New Delhi Leaders' Summit in 2023.\n2. It comprises two distinct corridors: an Eastern Corridor connecting India to the Arabian Gulf, and a Northern Corridor connecting the Gulf to Europe.\n3. China and Iran are founding signatories to the memorandum of understanding.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 0,
    explanation: "Statements 1 and 2 are correct: IMEC was launched on September 9, 2023 at the New Delhi G20 Summit with Eastern (maritime) and Northern (rail-maritime) corridors. Statement 3 is incorrect: China and Iran are not signatories; founding partners are India, US, UAE, Saudi Arabia, France, Germany, Italy, and the EU.",
    trap: "Notice that IMEC is conceived in part to provide an open, rules-based alternative to China's BRI."
  },
  {
    id: "q39",
    topic: "INSTC Corridor",
    difficulty: "Hard",
    question: "Which of the following transport routes is considered the vital missing link on the Western route of the International North-South Transport Corridor (INSTC)?",
    options: [
      "Chabahar to Zahedan rail line",
      "Rasht to Astara rail line",
      "Bandar Abbas to Tehran high-speed link",
      "Baku to Tbilisi highway"
    ],
    answer: 1,
    explanation: "The 162-km Rasht-Astara railway section in northern Iran is the crucial missing rail connection on the Western arm of the INSTC. Once completed (backed by Russian financing), it will provide unbroken railway connectivity from the Persian Gulf via Iran and Azerbaijan into the Russian railway grid.",
    trap: "Both Chabahar-Zahedan and Rasht-Astara are Iranian rail links, but Rasht-Astara connects Iran directly to Azerbaijan on the INSTC trunk route."
  },
  {
    id: "q40",
    topic: "Financial Action Task Force (FATF)",
    difficulty: "Medium",
    question: "With reference to the Financial Action Task Force (FATF), consider the following statements:\n1. It was established by the G7 Summit held in Paris in 1989.\n2. India has been a founding member of the FATF since 1989.\n3. In its 2024 Mutual Evaluation, India was placed in the highest 'regular follow-up' category.\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    answer: 1,
    explanation: "Statement 1 is correct: Established at the 1989 Paris G7 Summit. Statement 2 is incorrect: India joined FATF as an observer in 2006 and became a full member only in 2010 (not a founding member). Statement 3 is correct: In June 2024, FATF adopted India's Mutual Evaluation Report, categorising it under 'regular follow-up', a distinction shared by only 4 other G20 members.",
    trap: "Check member joining dates: India is a founding member of UN, NAM, BRICS, and WTO, but NOT of FATF (joined 2010)."
  },
  {
    id: "q41",
    topic: "Foreign Policy Doctrines",
    difficulty: "Easy",
    question: "The principle of 'unilateral non-reciprocity' with immediate South Asian neighbours is the defining feature of which Indian foreign policy doctrine?",
    options: [
      "Nehruvian Panchsheel (1954)",
      "Indira Doctrine (1971)",
      "Gujral Doctrine (1996)",
      "Look East Policy (1992)"
    ],
    answer: 2,
    explanation: "The Gujral Doctrine, enunciated in 1996 by External Affairs Minister (later Prime Minister) I.K. Gujral, laid down five core principles, foremost among which was that with immediate neighbours like Bangladesh, Bhutan, Maldives, Nepal, and Sri Lanka, India must give what it can without asking for reciprocity.",
    trap: "Panchsheel emphasizes mutual benefit and reciprocity, whereas the Gujral Doctrine explicitly mandates non-reciprocity."
  },
  {
    id: "q42",
    topic: "PM MITRA Scheme",
    difficulty: "Medium",
    question: "Under the PM Mega Integrated Textile Regions and Apparel (PM MITRA) scheme, the 5F vision represents which of the following sequences?",
    options: [
      "Fiber to Fabric to Factory to Fashion to Foreign",
      "Farm to Fibre to Factory to Fashion to Foreign",
      "Farm to Factory to Finance to Fashion to Foreign",
      "Fibre to Factory to Fashion to Future to Foreign"
    ],
    answer: 1,
    explanation: "The PM MITRA scheme is inspired by the 5F formula: Farm to Fibre to Factory to Fashion to Foreign, capturing the entire integrated textile supply chain.",
    trap: "The sequence starts at the agricultural source ('Farm') before processing into 'Fibre'."
  },
  {
    id: "q43",
    topic: "National Green Hydrogen Mission",
    difficulty: "Medium",
    question: "Under India's National Green Hydrogen Mission, what is the officially notified emission threshold for hydrogen to be certified as 'Green Hydrogen'?",
    options: [
      "Not exceeding 1 kg CO2 equivalent per kg H2 produced",
      "Not exceeding 2 kg CO2 equivalent per kg H2 produced",
      "Zero absolute carbon emissions across all lifecycle stages",
      "Not exceeding 4.5 kg CO2 equivalent per kg H2 produced"
    ],
    answer: 1,
    explanation: "The Ministry of New and Renewable Energy (MNRE) notified that Green Hydrogen produced in India must have a well-to-gate carbon emission threshold not exceeding 2 kg CO2 equivalent per kg of H2 produced (taken as an average over a 12-month period).",
    trap: "Absolute zero emissions is practically unattainable in the near term when accounting for supply-chain water treatment and electrical transmission."
  },
  {
    id: "q44",
    topic: "PM E-DRIVE Scheme",
    difficulty: "Easy",
    question: "In September 2024, the Union Cabinet approved the PM E-DRIVE scheme to accelerate electric vehicle adoption. Which landmark predecessor scheme did it replace?",
    options: [
      "FAME-II (Faster Adoption and Manufacturing of Electric Vehicles)",
      "PM Kusum Scheme",
      "National Clean Air Programme (NCAP)",
      "SATAT Scheme"
    ],
    answer: 0,
    explanation: "The PM E-DRIVE (PM Electric Drive Revolution in Innovative Vehicle Enhancement) scheme with a ₹10,900 Crore budget replaced the legacy FAME-II framework in September 2024.",
    trap: "EMPS was merely a short-term 4-month transition scheme; FAME-II was the flagship predecessor."
  },
  {
    id: "q45",
    topic: "Mission Mausam",
    difficulty: "Medium",
    question: "Consider the following statements regarding 'Mission Mausam' approved by the Union Cabinet in September 2024:\n1. It is implemented under the aegis of the Ministry of Earth Sciences.\n2. It includes experimental exploration of cloud seeding and precipitation enhancement technologies.\n3. It aims to improve numerical weather prediction forecasts down to the panchayat/village scale.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 3,
    explanation: "All three statements are correct: Mission Mausam (₹2,000 Crore outlay) is under the Ministry of Earth Sciences, executed by IMD, IITM Pune, and NCMRWF Noida, featuring Doppler radar expansion, village-level micro-forecasts, and cloud simulation chambers for rainfall enhancement research.",
    trap: "Many aspirants assume weather modification is science fiction, but Mission Mausam explicitly includes experimental cloud-seeding microphysics research."
  },
  {
    id: "q46",
    topic: "Anusandhan National Research Foundation (ANRF)",
    difficulty: "Hard",
    question: "With reference to the Anusandhan National Research Foundation (ANRF), consider the following statements:\n1. The Prime Minister of India acts as the ex-officio President of its Governing Board.\n2. The ANRF Act, 2023 repealed and subsumed the Science and Engineering Research Board (SERB).\n3. Over 70% of its planned five-year ₹50,000 Crore outlay is targeted to be mobilised from non-governmental and private sector sources.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 3,
    explanation: "All three statements are correct. The ANRF Act (2023) established the ANRF with the Prime Minister as President of the Governing Board, repealed the SERB Act (2008), and targets raising ₹36,000 Crore (~72%) from private and philanthropic donors out of its ₹50,000 Crore 5-year budget.",
    trap: "It is unusual for Indian government research bodies to count on a 70% private sector contribution, which is precisely why UPSC focuses on ANRF's unique funding architecture."
  },
  {
    id: "q47",
    topic: "Bilateral Naval Exercises",
    difficulty: "Medium",
    question: "Consider the following pairs of bilateral military exercises and partner countries:\n1. SIMBEX : Singapore\n2. Samudra Shakti : Indonesia\n3. Naseem Al Bahr : Oman\n4. Cyclone : Egypt\nHow many of the above pairs are correctly matched?",
    options: [
      "Only one pair",
      "Only two pairs",
      "Only three pairs",
      "All four pairs"
    ],
    answer: 3,
    explanation: "All four pairs are correctly matched: SIMBEX is the naval drill with Singapore; Samudra Shakti is with Indonesia; Naseem Al Bahr is the naval exercise with Oman; and Cyclone is the joint special forces drill launched with Egypt in 2023.",
    trap: "Exercise names are high-frequency Prelims questions. Ensure you don't confuse Naseem Al Bahr (Oman) with Al Mohed Al Hindi (Saudi Arabia) or Zayed Talwar (UAE)."
  },
  {
    id: "q48",
    topic: "Global Multilateralism",
    difficulty: "Easy",
    question: "During India's G20 Presidency at the New Delhi Summit in September 2023, which regional organisation was formally admitted as a permanent full member of the G20?",
    options: [
      "Association of Southeast Asian Nations (ASEAN)",
      "African Union (AU)",
      "Gulf Cooperation Council (GCC)",
      "Community of Latin American and Caribbean States (CELAC)"
    ],
    answer: 1,
    explanation: "The 55-nation African Union (AU) was admitted as a permanent member of the G20 at the New Delhi Summit in September 2023, championed by India as a historic milestone for Global South representation.",
    trap: "The European Union was previously the only regional bloc in the G20; the African Union is the second."
  },
  {
    id: "q49",
    topic: "India-Middle East-Europe Economic Corridor (IMEC)",
    difficulty: "Hard",
    question: "Consider the following statements regarding the India-Middle East-Europe Economic Corridor (IMEC):\nStatement-I: IMEC is projected to slash freight transit time between India and Europe by up to 40% and logistics costs by 30%.\nStatement-II: The corridor establishes a contiguous overland railway link across the UAE, Saudi Arabia, and Jordan terminating at Israel's Haifa Port, bypassing the congested Suez Canal and Bab-el-Mandeb.\nWhich one of the following is correct in respect of the above statements?",
    options: [
      "Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I",
      "Both Statement-I and Statement-II are correct but Statement-II is not the correct explanation for Statement-I",
      "Statement-I is correct but Statement-II is incorrect",
      "Statement-I is incorrect but Statement-II is correct"
    ],
    answer: 0,
    explanation: "Both statements are correct and Statement-II directly explains Statement-I. By substituting maritime navigation through the narrow Bab-el-Mandeb Strait, Red Sea, and Suez Canal with high-speed direct rail transit connecting Arabian Gulf ports to Israel's Mediterranean port of Haifa, shipping distances and chokepoint delays are reduced significantly.",
    trap: "The Statement-I and Statement-II format tests causal understanding. Candidates must recognize that the physical bypassing of the Red Sea/Suez choke is the precise reason for the 40% transit time reduction."
  },
  {
    id: "q50",
    topic: "BRICS Expansion (BRICS-10)",
    difficulty: "Medium",
    question: "Which of the following countries officially became full members of the expanded BRICS grouping on January 1, 2024?\n1. Egypt\n2. Ethiopia\n3. Iran\n4. United Arab Emirates (UAE)\n5. Argentina\nSelect the correct answer using the code given below:",
    options: [
      "1, 2, 3 and 4 only",
      "1, 3 and 4 only",
      "2, 4 and 5 only",
      "1, 2, 3, 4 and 5"
    ],
    answer: 0,
    explanation: "At the 15th BRICS Summit in Johannesburg (August 2023), six countries were invited. However, following the election of President Javier Milei, Argentina formally declined the invitation. Thus, on January 1, 2024, Egypt, Ethiopia, Iran, Saudi Arabia, and the UAE became full members, creating BRICS-10.",
    trap: "Argentina withdrew its accession under Javier Milei; including Argentina is a common exam trap."
  },
  {
    id: "q51",
    topic: "Shanghai Cooperation Organisation (SCO)",
    difficulty: "Easy",
    question: "At the 24th Meeting of the Council of Heads of State of the Shanghai Cooperation Organisation (SCO) held in Astana, Kazakhstan in July 2024, which country was formally inducted as the 10th full member state?",
    options: [
      "Belarus",
      "Turkmenistan",
      "Armenia",
      "Mongolia"
    ],
    answer: 0,
    explanation: "Belarus officially became the 10th member of the SCO at the Astana Summit in July 2024. Iran had previously been inducted as the 9th member in July 2023 during India's virtual SCO chairmanship.",
    trap: "Turkmenistan maintains permanent neutrality and is NOT an SCO member; Mongolia remains an observer state."
  },
  {
    id: "q52",
    topic: "Maritime Security & Operation Sankalp",
    difficulty: "Medium",
    question: "With reference to the Indian Navy's 'Operation Sankalp', consider the following statements:\n1. It was originally initiated in 2019 to ensure safe passage of Indian-flagged merchant vessels through the Strait of Hormuz and Gulf of Oman.\n2. In 2023-2024, its operational scope was substantially augmented in the Arabian Sea and Gulf of Aden to counter maritime piracy and drone attacks.\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    answer: 2,
    explanation: "Both statements are correct. Operation Sankalp was launched in June 2019 following tanker attacks in the Gulf of Oman. In late 2023 and 2024, in response to Houthi attacks and resurging Somali piracy, the Indian Navy deployed over 10 frontline guided missile destroyers and frigates under Operation Sankalp across the North and Central Arabian Sea.",
    trap: "Candidates often confuse Operation Sankalp with Operation Kaveri (evacuation from Sudan) or Operation Ajay (evacuation from Israel)."
  },
  {
    id: "q53",
    topic: "Chabahar Port Strategic Agreement",
    difficulty: "Hard",
    question: "In May 2024, India signed a historic 10-year long-term bilateral contract for operations at Chabahar Port. Which Indian entity executed this agreement, and for which specific terminal?",
    options: [
      "Adani Ports & SEZ for Shahid Kalantari Terminal",
      "India Ports Global Limited (IPGL) for Shahid Beheshti Terminal",
      "Jawaharlal Nehru Port Authority for Shahid Beheshti Terminal",
      "Container Corporation of India (CONCOR) for Shahid Kalantari Terminal"
    ],
    answer: 1,
    explanation: "The 10-year contract was signed between India Ports Global Limited (IPGL) and Iran's Ports and Maritime Organisation (PMO) for equipping and operating the Shahid Beheshti terminal at Chabahar Port.",
    trap: "Chabahar has two terminals: Shahid Beheshti and Shahid Kalantari. India only equips and operates the Shahid Beheshti terminal."
  },
  {
    id: "q54",
    topic: "I2U2 Grouping",
    difficulty: "Medium",
    question: "Consider the following statements regarding the I2U2 grouping:\n1. Its member countries are India, Israel, the United Arab Emirates, and the United States.\n2. The grouping focuses on mobilizing private sector capital across six identified sectors: water, energy, transportation, space, health, and food security.\n3. The UAE announced a $2 billion investment to develop integrated food parks across Gujarat and Madhya Pradesh.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 3,
    explanation: "All three statements are correct. I2U2 (dubbed the West Asian Quad) held its inaugural leaders' summit in July 2022. It focuses on 6 key sectors and announced two anchor projects: $2 billion UAE investment for integrated food parks in India, and a 300 MW hybrid solar-wind renewable project in Dwarka, Gujarat.",
    trap: "Do not confuse I2U2 members with Quad members (Quad is India, US, Japan, Australia)."
  },
  {
    id: "q55",
    topic: "Coalition for Disaster Resilient Infrastructure (CDRI)",
    difficulty: "Medium",
    question: "With reference to the Coalition for Disaster Resilient Infrastructure (CDRI), consider the following statements:\n1. It was launched by the Prime Minister of India at the UN Climate Action Summit in New York in 2019.\n2. Its permanent headquarters and secretariat are located in New Delhi, India.\n3. It operates as a specialized agency of the United Nations under ECOSOC.\nWhich of the statements given above is/are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: CDRI is an independent global partnership of national governments, UN agencies, multilateral development banks, and the private sector; it is NOT a formal subsidiary or specialized agency of the United Nations.",
    trap: "Like the International Solar Alliance (ISA), CDRI was conceptualized by India and is headquartered in India, but neither is a UN specialized agency."
  },
  {
    id: "q56",
    topic: "Multilateral Export Control Regimes",
    difficulty: "Hard",
    question: "India is a full participating member of which of the following Multilateral Export Control Regimes?\n1. Missile Technology Control Regime (MTCR)\n2. Wassenaar Arrangement\n3. Australia Group\n4. Nuclear Suppliers Group (NSG)\nSelect the correct answer using the code given below:",
    options: [
      "1, 2 and 3 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    answer: 0,
    explanation: "India is a member of 3 out of the 4 regimes: MTCR (joined in 2016), Wassenaar Arrangement (joined in 2017), and Australia Group (joined in 2018). India is NOT a member of the Nuclear Suppliers Group (NSG) due to persistent procedural blocking by China insisting on NPT accession.",
    trap: "The '3 out of 4' rule is one of the most tested static facts in UPSC CSE Prelims."
  },
  {
    id: "q57",
    topic: "Global Biofuels Alliance (GBA)",
    difficulty: "Medium",
    question: "The Global Biofuels Alliance (GBA), launched during the G20 New Delhi Summit in 2023, was initiated jointly by India along with which other two leading biofuel producing nations as co-founders?",
    options: [
      "United States and Brazil",
      "France and Germany",
      "Russia and Saudi Arabia",
      "Indonesia and Malaysia"
    ],
    answer: 0,
    explanation: "India, the United States, and Brazil — which together account for ~85% of global ethanol production — are the three co-founding core pillars of the Global Biofuels Alliance (GBA).",
    trap: "Indonesia and Malaysia lead in palm oil biodiesel, but the GBA core was formed by the three ethanol giants: India, USA, and Brazil."
  },
  {
    id: "q58",
    topic: "UPPSC Special: Defence Industrial Corridor",
    difficulty: "Medium",
    question: "The Uttar Pradesh Defence Industrial Corridor (UPDIC) is planned across how many designated regional nodes?",
    options: [
      "4 nodes",
      "5 nodes",
      "6 nodes",
      "8 nodes"
    ],
    answer: 2,
    explanation: "The UP Defence Industrial Corridor comprises exactly six nodes: Lucknow, Kanpur, Aligarh, Agra, Jhansi, and Chitrakoot. BrahMos aerospace missile assembly is located at the Lucknow node.",
    trap: "Do not include Varanasi, Gorakhpur, or Meerut — the six designated nodes are Agra, Aligarh, Chitrakoot, Jhansi, Kanpur, and Lucknow."
  },
  {
    id: "q59",
    topic: "UPPSC Special: One District One Product (ODOP)",
    difficulty: "Medium",
    question: "Consider the following pairs under the Uttar Pradesh One District One Product (ODOP) initiative:\n1. Kannauj : Ittar (Natural Perfumes)\n2. Bhadohi : Hand-knotted Carpets\n3. Moradabad : Metal & Brass Craft\n4. Firozabad : Glassware & Bangles\nHow many of the pairs given above are correctly matched?",
    options: [
      "Only one pair",
      "Only two pairs",
      "Only three pairs",
      "All four pairs"
    ],
    answer: 3,
    explanation: "All four pairs are correctly matched. Kannauj is known as India's perfume capital; Bhadohi produces globally recognized GI-tagged handmade carpets; Moradabad is famous as 'Peetal Nagari' (Brass City); and Firozabad is celebrated as the glass capital of India.",
    trap: "ODOP pair matching is a recurring high-yield question in UPPSC PCS Prelims Paper-I and UP Special Paper-V/VI."
  },
  {
    id: "q60",
    topic: "UPPSC Special: Strategic Border Management",
    difficulty: "Hard",
    question: "Uttar Pradesh shares an international border of approximately 551 km with Nepal. Which Central Armed Police Force (CAPF) is mandated to guard this porous open border?",
    options: [
      "Border Security Force (BSF)",
      "Sashastra Seema Bal (SSB)",
      "Indo-Tibetan Border Police (ITBP)",
      "Assam Rifles"
    ],
    answer: 1,
    explanation: "The Sashastra Seema Bal (SSB), functioning under the Ministry of Home Affairs, is the dedicated border guarding force for India's borders with Nepal (1,751 km) and Bhutan (699 km), including the 551 km UP-Nepal sector.",
    trap: "BSF guards Pakistan and Bangladesh borders; ITBP guards the China (LAC) border; Assam Rifles guards the Myanmar border."
  },
  {
    id: "q61",
    topic: "UPPSC Special: Infrastructure & Connectivity",
    difficulty: "Medium",
    question: "Noida International Airport at Jewar in Gautam Buddha Nagar, Uttar Pradesh is being developed as:",
    options: [
      "India's first net-zero emission greenfield airport",
      "An exclusively dedicated military air logistics hub",
      "A joint inland port managed by Cochin Shipyard",
      "A state-funded runway for cargo drones only"
    ],
    answer: 0,
    explanation: "Jewar Noida International Airport is designed as India's first net-zero carbon emissions airport, developed via public-private partnership (PPP) with concessionaire Yamuna International Airport Pvt Ltd (a subsidiary of Zurich Airport International AG).",
    trap: "Noida Airport is designed for massive international passenger and cargo operations, not exclusively for military or drone use."
  },
  {
    id: "q62",
    topic: "PM Surya Ghar: Muft Bijli Yojana",
    difficulty: "Medium",
    question: "With reference to the PM Surya Ghar: Muft Bijli Yojana launched in February 2024, consider the following statements:\n1. It aims to provide up to 300 units of free electricity every month to 1 crore households across India.\n2. The central financial assistance provides a subsidy of ₹30,000 per kW for up to 2 kW capacity, and an additional ₹18,000 for the 3rd kW, capping the maximum subsidy at ₹78,000.\n3. The scheme is restricted only to BPL (Below Poverty Line) cardholders.\nWhich of the statements given above is/are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    answer: 0,
    explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: PM Surya Ghar is open to all residential households with a suitable rooftop and a grid connection, regardless of whether they are BPL or not.",
    trap: "UPSC frequently adds false restrictive criteria like 'restricted only to BPL families' to central energy transition schemes."
  },
  {
    id: "q63",
    topic: "PM-JANMAN Mission",
    difficulty: "Hard",
    question: "The PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) focuses specifically on the socio-economic development of:",
    options: [
      "All Scheduled Tribes across Fifth and Sixth Schedule areas",
      "75 Particularly Vulnerable Tribal Groups (PVTGs) across 18 States and 1 Union Territory",
      "Forest dwellers displaced by tiger reserves",
      "Tribal artisans practicing Dokra and Warli art forms only"
    ],
    answer: 1,
    explanation: "PM-JANMAN has a budget of over ₹24,000 Crore aimed at delivering 11 critical interventions (housing, clean drinking water, electricity, road connectivity, mobile towers) to 75 PVTGs across 18 States and the Union Territory of Andaman and Nicobar Islands.",
    trap: "PVTGs have distinct criteria: declining/stagnant population, pre-agricultural technology, low literacy, and economic backwardness."
  },
  {
    id: "q64",
    topic: "Lakhpati Didi Initiative",
    difficulty: "Easy",
    question: "What is the primary target objective of the 'Lakhpati Didi' scheme promoted under the Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM)?",
    options: [
      "To provide a one-time direct cash transfer of ₹1,00,000 to pregnant women",
      "To enable at least 3 crore rural women Self-Help Group (SHG) members to earn a sustainable annual income of at least ₹1,00,000",
      "To waive off agricultural debts up to ₹1,00,000 for female-headed farming households",
      "To provide interest-free gold loans up to ₹1,00,000 for girl child education"
    ],
    answer: 1,
    explanation: "The Lakhpati Didi initiative targets enabling 3 crore rural SHG women to earn a sustainable income of at least ₹1 Lakh ($1,200) per annum through micro-enterprises, skill development, financial literacy, and digital tools.",
    trap: "Lakhpati Didi is an income-generation and livelihood capacity-building initiative, not a one-time cash dole or debt waiver."
  },
  {
    id: "q65",
    topic: "Namo Drone Didi Scheme",
    difficulty: "Medium",
    question: "Under the Central Sector Scheme 'Namo Drone Didi', agricultural drones are provided to:",
    options: [
      "Individual large farm owners in arid zones",
      "15,000 selected Women Self-Help Groups (SHGs) for rental services to farmers for nano-fertilizer and pesticide application",
      "Agricultural universities for crop yield satellite research",
      "Customs officers along border districts for aerial smuggling detection"
    ],
    answer: 1,
    explanation: "Namo Drone Didi provides 15,000 drones to women SHGs with financial assistance of 80% of drone cost (up to ₹8 lakh) to provide rental spray services to farmers for liquid fertilizers (like Nano Urea) and pesticides.",
    trap: "The drones are owned and operated by women SHGs as community rental business assets, not gifted to individual private farmers."
  },
  {
    id: "q66",
    topic: "Ayushman Bharat Universal Senior Citizen Coverage",
    difficulty: "Medium",
    question: "In September 2024, the Union Cabinet approved a landmark expansion of the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY). What is the key provision of this decision?",
    options: [
      "Free health cover of ₹5 lakh per year to all senior citizens aged 70 years and above, irrespective of their income or socio-economic status",
      "Exemption from all diagnostic charges in private tertiary hospitals for citizens aged 60 and above",
      "Cash pension of ₹5,000 per month for all citizens aged 75 and above",
      "Free annual international medical treatment for retirees of central services"
    ],
    answer: 0,
    explanation: "The Union Cabinet approved universal health coverage under AB-PMJAY for all citizens aged 70 and above, offering a ₹5 lakh family health cover per year strictly on an individual basis, regardless of socio-economic category.",
    trap: "Note the age threshold: exactly 70 years and above (not 60 or 65)."
  },
  {
    id: "q67",
    topic: "PM Vishwakarma Credit & Skill Framework",
    difficulty: "Hard",
    question: "Under PM Vishwakarma, eligible artisans receive collateral-free enterprise development credit at what concessional interest rate?",
    options: [
      "Zero interest",
      "5% concessional interest rate (with an 8% interest subvention paid by the Ministry)",
      "9% floating interest rate tied to RBI repo rate",
      "12% standard MSME rate"
    ],
    answer: 1,
    explanation: "Under PM Vishwakarma, enterprise loans up to ₹3 lakh (₹1 lakh first tranche, ₹2 lakh second tranche) are provided at a concessional interest rate of 5%, with the remaining interest burden (~8%) subsidized by the Ministry of MSME.",
    trap: "The loans are not zero-interest; artisans pay a nominal 5% interest rate to foster financial discipline."
  },
  {
    id: "q68",
    topic: "PM-MITRA Mega Textile Parks",
    difficulty: "Medium",
    question: "The Government of India has approved the setting up of 7 PM Mega Integrated Textile Region and Apparel (PM MITRA) Parks. Which of the following sites in Uttar Pradesh was selected?",
    options: [
      "Varanasi-Chandauli",
      "Lucknow-Hardoi",
      "Kanpur-Unnao",
      "Gorakhpur-Basti"
    ],
    answer: 1,
    explanation: "In Uttar Pradesh, the 1,000-acre PM MITRA Park is being established in the Lucknow-Hardoi industrial corridor, realizing the Prime Minister's 5F vision (Farm to Fibre to Factory to Fashion to Foreign).",
    trap: "While Kanpur and Varanasi are traditional textile hubs, the notified mega greenfield PM MITRA park site in UP is Lucknow-Hardoi."
  },
  {
    id: "q69",
    topic: "Galathea Bay & Six Degree Channel",
    difficulty: "Hard",
    question: "Consider the following statements regarding the planned International Container Transhipment Port (ICTP) at Galathea Bay:\n1. It is located on Great Nicobar Island.\n2. It sits immediately adjacent to the Six Degree Channel (Great Channel).\n3. The Six Degree Channel carries nearly 30% of global seaborne crude oil trade transit entering the Strait of Malacca.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 3,
    explanation: "All three statements are correct. Galathea Bay on Great Nicobar Island overlooks the Six Degree Channel (between Great Nicobar and Indonesia's Sumatra), a key East-West trunk trade route connecting the Indian Ocean with the Malacca Strait and Pacific.",
    trap: "The Ten Degree Channel separates the Andaman and Nicobar groups; the Six Degree Channel separates Great Nicobar from Sumatra (Indonesia)."
  },
  {
    id: "q70",
    topic: "Indian Ocean Island Diplomacy: Agalega",
    difficulty: "Medium",
    question: "In February 2024, India and Mauritius jointly inaugurated a new 3,000-metre airstrip and the St. James Jetty on which strategic island?",
    options: [
      "Agalega Island",
      "Assumption Island",
      "Socotra Island",
      "Diego Garcia"
    ],
    answer: 0,
    explanation: "The airstrip and St. James Jetty were inaugurated on North Agalega Island, Mauritius, bolstering maritime domain awareness and search-and-rescue operations across the South-Western Indian Ocean under India's SAGAR policy.",
    trap: "Assumption Island belongs to Seychelles; Agalega belongs to Mauritius."
  },
  {
    id: "q71",
    topic: "Law of the Sea: UNCLOS Maritime Zones",
    difficulty: "Hard",
    question: "Under the 1982 United Nations Convention on the Law of the Sea (UNCLOS), which of the following statements is INCORRECT?",
    options: [
      "The Territorial Sea extends up to 12 nautical miles from the baseline, over which the coastal state exercises full sovereignty.",
      "The Contiguous Zone extends up to 24 nautical miles from the baseline, where the coastal state may enforce customs, fiscal, immigration, and sanitary laws.",
      "The Exclusive Economic Zone (EEZ) extends up to 200 nautical miles, where foreign vessels are prohibited from exercising freedom of navigation.",
      "Landlocked states have the right of access to and from the sea and enjoy freedom of transit through the territory of transit states."
    ],
    answer: 2,
    explanation: "Option C is INCORRECT (and hence the answer). Within the EEZ (up to 200 nautical miles), the coastal state has sovereign rights over exploring and exploiting natural resources (fisheries, seabed minerals), but ALL other states enjoy standard high-seas freedoms including freedom of navigation and overflight.",
    trap: "UPSC tests this misconception constantly: an EEZ gives resource rights, NOT sovereign ownership or maritime transit blockade rights."
  },
  {
    id: "q72",
    topic: "Colombo Port West Container Terminal (CWIT)",
    difficulty: "Medium",
    question: "The West Container Terminal at Colombo Port is being constructed by an Indian consortium led by Adani Ports with significant financial backing from which multilateral or bilateral institution?",
    options: [
      "Asian Infrastructure Investment Bank (AIIB)",
      "US International Development Finance Corporation (DFC)",
      "New Development Bank (NDB)",
      "Japan International Cooperation Agency (JICA)"
    ],
    answer: 1,
    explanation: "The US International Development Finance Corporation (DFC) committed $553 million in project financing for the Colombo West Container Terminal, symbolizing concrete QUAD strategic infrastructure counter-balancing against China's Colombo International Container Terminal.",
    trap: "Although JICA frequently funds Sri Lankan infra, this specific terminal was funded by the US DFC alongside Adani Ports."
  },
  {
    id: "q73",
    topic: "Duqm Port Strategic Agreement",
    difficulty: "Easy",
    question: "India signed a military logistics and port access agreement allowing the Indian Navy to utilize the dry docks and refuelling facilities at the Port of Duqm. In which country is the Port of Duqm located?",
    options: [
      "Oman",
      "United Arab Emirates",
      "Qatar",
      "Djibouti"
    ],
    answer: 0,
    explanation: "The Port of Duqm is located in the Sultanate of Oman on the southeastern Arabian Sea coast, providing the Indian Navy with an indispensable logistics and turnaround hub overlooking the western Indian Ocean.",
    trap: "Djibouti hosts naval bases of the US, China, and France, but India's key access agreement is at Duqm (Oman)."
  },
  {
    id: "q74",
    topic: "West Asia Policy: Two-State Solution",
    difficulty: "Medium",
    question: "Which of the following statements best articulates India's longstanding official diplomatic stance on the Israel-Palestine issue?",
    options: [
      "Support for a one-state bi-national confederation under UN administration",
      "Establishment of a sovereign, independent, and viable State of Palestine living within secure and mutually recognized borders side-by-side in peace with Israel",
      "Complete de-recognition of the Palestinian Authority following the 2023 escalation",
      "Advocating sole jurisdiction of the Arab League over Jerusalem"
    ],
    answer: 1,
    explanation: "India has consistently championed a negotiated Two-State Solution leading to the establishment of a sovereign, independent, and viable State of Palestine living within secure and mutually recognized borders, side-by-side at peace with Israel.",
    trap: "Despite India's deep strategic partnership with Israel, India has never renounced its commitment to an independent Palestinian state."
  },
  {
    id: "q75",
    topic: "Raisina Dialogue",
    difficulty: "Easy",
    question: "The Raisina Dialogue, India's premier annual geopolitical and geoeconomics conference, is organized by the Ministry of External Affairs (MEA) in partnership with which think tank?",
    options: [
      "Manohar Parrikar Institute for Defence Studies and Analyses (MP-IDSA)",
      "Observer Research Foundation (ORF)",
      "Indian Council of World Affairs (ICWA)",
      "Center for Policy Research (CPR)"
    ],
    answer: 1,
    explanation: "The Raisina Dialogue has been held annually in New Delhi since 2016, organized by the Observer Research Foundation (ORF) in collaboration with the Ministry of External Affairs of India.",
    trap: "While MP-IDSA and ICWA are government-associated think tanks, ORF is the official co-host of the Raisina Dialogue."
  },
  {
    id: "q76",
    topic: "Indo-Pacific Oceans Initiative (IPOI)",
    difficulty: "Hard",
    question: "The Indo-Pacific Oceans Initiative (IPOI), proposed by Prime Minister Narendra Modi at the East Asia Summit in 2019, is structured around how many functional pillars?",
    options: [
      "3 pillars",
      "5 pillars",
      "7 pillars",
      "10 pillars"
    ],
    answer: 2,
    explanation: "The IPOI is structured around seven collaborative pillars: 1. Maritime Security; 2. Maritime Ecology; 3. Maritime Resources; 4. Capacity Building & Resource Sharing; 5. Disaster Risk Reduction & Management; 6. Science, Technology & Academic Cooperation; 7. Trade, Connectivity & Maritime Transport.",
    trap: "Different partner nations lead different pillars (e.g., Australia leads Maritime Ecology; France and Indonesia lead Maritime Resources; Japan leads Connectivity)."
  },
  {
    id: "q77",
    topic: "UN Security Council Resolution 1267",
    difficulty: "Medium",
    question: "The UN Security Council 1267 Sanctions Committee is primarily mandated to handle international sanctions and asset freezes against:",
    options: [
      "State sponsors of cyber espionage",
      "Individuals and entities associated with ISIL (Da'esh) and Al-Qaida",
      "Nations violating carbon emission quotas",
      "Vessels engaged in illegal, unreported and unregulated (IUU) fishing"
    ],
    answer: 1,
    explanation: "The UNSC 1267 Committee (ISIL and Al-Qaida Sanctions Committee) oversees sanctions (asset freeze, travel ban, arms embargo) against designated individuals and entities affiliated with Al-Qaida and ISIS.",
    trap: "India has frequently utilized the 1267 Committee to seek global terrorist designations against Pakistan-based operatives (e.g., Masood Azhar, Hafiz Saeed, Sajid Mir)."
  },
  {
    id: "q78",
    topic: "Rasht-Astara Railway & INSTC",
    difficulty: "Hard",
    question: "Which missing rail link, currently being financed and constructed under a Russian-Iranian bilateral agreement, is considered the crucial missing bottleneck to complete the direct overland railway corridor of the INSTC to Europe?",
    options: [
      "Chabahar-Zahedan link",
      "Rasht-Astara link",
      "Mashhad-Herat link",
      "Khaif-Kerman link"
    ],
    answer: 1,
    explanation: "The 162-km Rasht-Astara railway link along Iran's Caspian coast is the final missing rail section connecting the Iranian rail network to Azerbaijan and Russia, enabling an uninterrupted freight rail link from Bandar Abbas to Saint Petersburg.",
    trap: "Chabahar-Zahedan connects Chabahar northward to Afghanistan, whereas Rasht-Astara completes the western Caspian branch of INSTC."
  },
  {
    id: "q79",
    topic: "Ashgabat Agreement",
    difficulty: "Hard",
    question: "With reference to the Ashgabat Agreement, which India acceded to in 2018, consider the following statements:\n1. It is an international multimodal transport and transit agreement facilitating trade between Central Asia and the Persian Gulf.\n2. The founding members of the agreement are Iran, Oman, Qatar, Turkmenistan, and Uzbekistan.\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    answer: 0,
    explanation: "Statement 1 is correct. Statement 2 is incorrect: Qatar withdrew from the agreement in 2013. The founding members signed it in 2011 (Iran, Oman, Turkmenistan, and Uzbekistan; Pakistan and Kazakhstan joined later, and India acceded in February 2018).",
    trap: "India's accession to the Ashgabat Agreement synchronizes with its operations at Chabahar Port to tap Central Asian energy and mineral markets."
  },
  {
    id: "q80",
    topic: "India-Myanmar-Thailand (IMT) Trilateral Highway",
    difficulty: "Medium",
    question: "The India-Myanmar-Thailand (IMT) Trilateral Highway, an anchor initiative of India's Act East Policy, connects which Indian border town with Mae Sot in Thailand?",
    options: [
      "Moreh (Manipur)",
      "Dawki (Meghalaya)",
      "Zokhawthar (Mizoram)",
      "Jaigaon (West Bengal)"
    ],
    answer: 0,
    explanation: "The 1,360 km IMT Trilateral Highway links Moreh in Manipur (India) with Mae Sot in Thailand via Bagan and Mandalay in Myanmar.",
    trap: "Moreh (Manipur) is the primary land border gateway to Myanmar on Asian Highway 1 (AH1)."
  },
  {
    id: "q81",
    topic: "Kaladan Multi-Modal Transit Transport Project (KMMTTP)",
    difficulty: "Hard",
    question: "Which of the following correctly outlines the geographic sequence of multimodal legs under the Kaladan Project from India's east coast to Mizoram?",
    options: [
      "Kolkata to Sittwe (Sea route) → Sittwe to Paletwa (Kaladan River inland waterway) → Paletwa to Zorinpui (Road route to Mizoram)",
      "Chennai to Yangon (Sea route) → Yangon to Mandalay (River route) → Mandalay to Moreh (Road route)",
      "Paradip to Sittwe (Sea route) → Sittwe to Akyab (Canal route) → Akyab to Champhai (Highway)",
      "Haldia to Chittagong (Sea route) → Chittagong to Feni (River route) → Feni to Agartala (Road)"
    ],
    answer: 0,
    explanation: "KMMTTP comprises: 1. Sea route from Kolkata/Haldia to Sittwe Port in Myanmar (539 km); 2. Inland water transport along the Kaladan River from Sittwe to Paletwa (158 km); 3. Road route from Paletwa to Zorinpui on the India-Myanmar border in Mizoram (110 km).",
    trap: "This multi-modal routing bypasses the vulnerable 22-km Siliguri Corridor ('Chicken's Neck') entirely."
  },
  {
    id: "q82",
    topic: "Maitri Setu Bridge",
    difficulty: "Easy",
    question: "The 1.9 km long 'Maitri Setu' (Friendship Bridge), inaugurating direct connectivity between Northeast India and Bangladesh, is built over which river?",
    options: [
      "Feni River",
      "Teesta River",
      "Surma River",
      "Kushiyara River"
    ],
    answer: 0,
    explanation: "Maitri Setu is built over the Feni River, connecting Sabroom in South Tripura with Ramgarh in Bangladesh, providing Tripura with direct access to Chattogram port just 80 km away.",
    trap: "Do not confuse Feni with Teesta (which has an ongoing water sharing dispute)."
  },
  {
    id: "q83",
    topic: "Strategic Petroleum Reserves (SPR)",
    difficulty: "Hard",
    question: "Under Phase-I of the Strategic Petroleum Reserve (SPR) program managed by Indian Strategic Petroleum Reserves Limited (ISPRL), underground rock caverns are located at:\n1. Visakhapatnam (Andhra Pradesh)\n2. Mangalore (Karnataka)\n3. Padur (Karnataka)\n4. Chandikhol (Odisha)\nSelect the correct answer using the code given below:",
    options: [
      "1, 2 and 3 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    answer: 0,
    explanation: "Phase-I created 5.33 MMT of strategic crude storage capacity across three locations: Visakhapatnam (1.33 MMT), Mangalore (1.5 MMT), and Padur (2.5 MMT). Chandikhol (along with an expansion at Padur) is part of Phase-II (commercial-cum-strategic model).",
    trap: "Phase-I includes Visakhapatnam, Mangalore, and Padur; Chandikhol is in Phase-II."
  },
  {
    id: "q84",
    topic: "Deep Ocean Mission & Samudrayaan",
    difficulty: "Medium",
    question: "Under the Ministry of Earth Sciences' Deep Ocean Mission, India's first manned scientific deep-submersible vehicle designed to carry three scientists to a depth of 6,000 metres is named:",
    options: [
      "MATSYA 6000",
      "VARUNA 6000",
      "SAGARIKA 6000",
      "SAMUDRA 6000"
    ],
    answer: 0,
    explanation: "MATSYA 6000 is the indigenous manned submersible being developed by the National Institute of Ocean Technology (NIOT), Chennai under the Samudrayaan initiative to explore deep-sea biodiversity and polymetallic nodules.",
    trap: "MATSYA 6000 is distinct from uncrewed remotely operated vehicles (ROVs)."
  },
  {
    id: "q85",
    topic: "Polar Diplomacy: Arctic Council",
    difficulty: "Medium",
    question: "India operates its permanent Arctic research base named 'Himadri' in which location?",
    options: [
      "Ny-Ålesund, Svalbard (Norway)",
      "Nuuk (Greenland)",
      "Tromsø (Norway)",
      "Murmansk (Russia)"
    ],
    answer: 0,
    explanation: "India established its permanent research station 'Himadri' at Ny-Ålesund in Svalbard, Norway in 2008. India was granted permanent Observer status in the Arctic Council in 2013.",
    trap: "Himadri is in the Arctic (Svalbard, Norway); Bharati and Maitri are in Antarctica."
  },
  {
    id: "q86",
    topic: "Antarctic Stations of India",
    difficulty: "Easy",
    question: "Which was India's first permanent research station in Antarctica, established in 1983 and currently submerged under ice?",
    options: [
      "Dakshin Gangotri",
      "Maitri",
      "Bharati",
      "Indira Point Base"
    ],
    answer: 0,
    explanation: "Dakshin Gangotri was India's first Antarctic base (1983), which was later abandoned after being buried under ice. Maitri was built in 1989 at Schirmacher Oasis, and Bharati was commissioned in 2012 at Larsemann Hills.",
    trap: "Chronological sequence: Dakshin Gangotri (1983) → Maitri (1989) → Bharati (2012)."
  },
  {
    id: "q87",
    topic: "G20 Troika Mechanism",
    difficulty: "Medium",
    question: "The G20 operates without a permanent secretariat; leadership is steered by the 'Troika' consisting of the previous, current, and incoming presidencies. During the 2024 G20 cycle, the Troika comprised:",
    options: [
      "India, Brazil, and South Africa",
      "Indonesia, India, and Brazil",
      "Brazil, South Africa, and United States",
      "Japan, India, and Australia"
    ],
    answer: 0,
    explanation: "During 2024, the G20 Troika consisted of India (2023 president), Brazil (2024 president), and South Africa (2025 president) — marking the first time the Troika was composed entirely of developing Global South nations.",
    trap: "During 2023, the Troika was Indonesia, India, and Brazil; in 2024, it shifted to India, Brazil, and South Africa."
  },
  {
    id: "q88",
    topic: "Indo-Pacific Economic Framework (IPEF)",
    difficulty: "Hard",
    question: "Under the US-led Indo-Pacific Economic Framework for Prosperity (IPEF) comprising 14 partner nations, India has decided to participate in three pillars but stay out of which specific pillar?",
    options: [
      "Pillar I: Fair & Resilient Trade",
      "Pillar II: Supply Chain Resilience",
      "Pillar III: Clean Economy & Decarbonisation",
      "Pillar IV: Fair Economy (Tax & Anti-Corruption)"
    ],
    answer: 0,
    explanation: "India joined Pillar II (Supply Chains), Pillar III (Clean Economy), and Pillar IV (Fair Economy), but chose not to join Pillar I (Trade) over concerns regarding binding commitments on digital trade, labor standards, environment, and agriculture.",
    trap: "India signed the landmark IPEF Supply Chain Agreement in 2023 (under Pillar II) while remaining outside the Trade Pillar."
  },
  {
    id: "q89",
    topic: "Minerals Security Partnership (MSP)",
    difficulty: "Medium",
    question: "India was inducted into the US-led Minerals Security Partnership (MSP) in June 2023. What is the core mandate of the MSP?",
    options: [
      "To accelerate resilient global supply chains for critical energy minerals (lithium, cobalt, nickel, rare earths) and reduce reliance on China",
      "To establish fixed international pricing for thermal coal exports",
      "To ban all deep-sea mining exploration across international waters",
      "To regulate global trade in rough diamonds through the Kimberley Process"
    ],
    answer: 0,
    explanation: "The Minerals Security Partnership (MSP), initiated by the US with 14 partner countries and the EU, aims to catalyze public and private investment in critical mineral supply chains essential for clean energy and defense technologies.",
    trap: "India is the only developing country member in the Minerals Security Partnership."
  },
  {
    id: "q90",
    topic: "Critical Technologies: iCET",
    difficulty: "Medium",
    question: "The Initiative on Critical and Emerging Technology (iCET) is a landmark bilateral framework between India and:",
    options: [
      "United States of America",
      "France",
      "Japan",
      "United Kingdom"
    ],
    answer: 0,
    explanation: "iCET was launched in May 2022 by Prime Minister Narendra Modi and US President Joe Biden, led by the National Security Councils of India and the US, to build strategic technology partnerships in AI, quantum, semiconductors, 6G, biotech, space, and defense (INDUS-X).",
    trap: "iCET is an India-US bilateral initiative, not a Quad-wide framework."
  },
  {
    id: "q91",
    topic: "Colombo Security Conclave (CSC)",
    difficulty: "Hard",
    question: "In July 2024, which country formally signed the founding charter and joined the Colombo Security Conclave (CSC) as its fifth full member?",
    options: [
      "Bangladesh",
      "Seychelles",
      "Myanmar",
      "Oman"
    ],
    answer: 0,
    explanation: "Bangladesh became the 5th full member of the Colombo Security Conclave (joining India, Sri Lanka, Maldives, and Mauritius) during the meeting held in Colombo in July 2024. Seychelles participated as an observer.",
    trap: "Maldives remained in the CSC despite recent diplomatic realignments; Bangladesh is the newest full member."
  },
  {
    id: "q92",
    topic: "Joint Military Exercises: Surya Kiran",
    difficulty: "Easy",
    question: "'Exercise Surya Kiran' is a periodic bilateral joint military training exercise conducted between the armies of India and:",
    options: [
      "Nepal",
      "Bhutan",
      "Sri Lanka",
      "Bangladesh"
    ],
    answer: 0,
    explanation: "Exercise Surya Kiran is conducted annually between the Indian Army and the Nepalese Army, focusing on counter-insurgency and jungle warfare in mountainous terrain.",
    trap: "Sampriti is with Bangladesh; Mitra Shakti is with Sri Lanka; Surya Kiran is with Nepal."
  },
  {
    id: "q93",
    topic: "SAGAR Doctrine",
    difficulty: "Easy",
    question: "What does the acronym SAGAR stand for in the context of India's maritime vision articulated in 2015?",
    options: [
      "Security and Growth for All in the Region",
      "Strategic Action for Global Atlantic Readiness",
      "South Asian Geographic Alignment Regime",
      "Surveillance and Geolocation Across Reefs"
    ],
    answer: 0,
    explanation: "SAGAR stands for 'Security and Growth for All in the Region', unveiled by PM Modi in Mauritius in 2015 as the foundational blueprint for India's maritime outreach in the Indian Ocean.",
    trap: "SAGAR emphasizes inclusive consultative growth and mutual security, contrasting with unilateral sea denial doctrines."
  },
  {
    id: "q94",
    topic: "Project Mausam",
    difficulty: "Medium",
    question: "With reference to 'Project Mausam', consider the following statements:\n1. It is an initiative of the Ministry of External Affairs executed by the Indian Navy.\n2. Its objective is to re-connect and re-establish communications between countries of the Indian Ocean world, building cultural and economic ties based on ancient monsoon trade routes.\nWhich of the statements given above is/are correct?",
    options: [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    answer: 1,
    explanation: "Statement 1 is incorrect: Project Mausam is an initiative of the Ministry of Culture, implemented by the Indira Gandhi National Centre for the Arts (IGNCA) with archaeological support from the Archaeological Survey of India (ASI). Statement 2 is correct.",
    trap: "Students frequently assume 'Project Mausam' is run by IMD or the Ministry of External Affairs; it is actually under the Ministry of Culture."
  },
  {
    id: "q95",
    topic: "UPPSC Special: Bundelkhand Expressway",
    difficulty: "Medium",
    question: "The 296-km four-lane Bundelkhand Expressway originates from Bharatkoop in Chitrakoot district and terminates by merging into the Agra-Lucknow Expressway at Kudrail in which district?",
    options: [
      "Etawah",
      "Auraiya",
      "Jalaun",
      "Hamirpur"
    ],
    answer: 0,
    explanation: "The Bundelkhand Expressway begins near Bharatkoop in Chitrakoot and terminates at Kudrail village in Etawah district, where it joins the Agra-Lucknow Expressway.",
    trap: "Route traversal: Chitrakoot → Banda → Mahoba → Hamirpur → Jalaun → Auraiya → Etawah."
  },
  {
    id: "q96",
    topic: "UPPSC Special: Purvanchal Expressway",
    difficulty: "Medium",
    question: "The 340.8 km Purvanchal Expressway connects Lucknow with which eastern district of Uttar Pradesh?",
    options: [
      "Ghazipur (Haidaria)",
      "Ballia",
      "Varanasi",
      "Gorakhpur"
    ],
    answer: 0,
    explanation: "The Purvanchal Expressway starts from Chand Sarai village on the Lucknow-Sultanpur road (NH-731) and ends at Haidaria village on NH-31 in Ghazipur district. It features a 3.2-km emergency airstrip at Kurebhar in Sultanpur.",
    trap: "The expressway terminates at Ghazipur (near the Bihar border), not Ballia or Varanasi."
  },
  {
    id: "q97",
    topic: "UPPSC Special: Mineral Wealth of UP",
    difficulty: "Hard",
    question: "In Uttar Pradesh, high-grade silica sand (glass sand) suitable for glass and optical manufacturing is predominantly quarried in which region?",
    options: [
      "Shankargarh area in Prayagraj district",
      "Obra in Sonbhadra district",
      "Baheri in Bareilly district",
      "Khurja in Bulandshahr district"
    ],
    answer: 0,
    explanation: "Shankargarh and adjoining areas of Prayagraj (Allahabad) and Chitrakoot districts yield some of the finest silica sand deposits in India, supplying the glassworks of Firozabad and Naini.",
    trap: "Khurja is renowned for ceramics and pottery, not raw silica sand mining."
  },
  {
    id: "q98",
    topic: "UPPSC Special: Terai Ecology & Dudhwa",
    difficulty: "Easy",
    question: "Dudhwa National Park, the premier habitat of the swamp deer (Barasingha) and Royal Bengal Tiger in Uttar Pradesh, is located in which district?",
    options: [
      "Lakhimpur Kheri",
      "Pilibhit",
      "Bahraich",
      "Bijnor"
    ],
    answer: 0,
    explanation: "Dudhwa National Park is located in Lakhimpur Kheri district along the Indo-Nepal border in the Terai belt. It forms the core of the Dudhwa Tiger Reserve (along with Kishanpur and Katarniaghat wildlife sanctuaries).",
    trap: "Pilibhit Tiger Reserve is adjacent, but Dudhwa National Park is situated in Lakhimpur Kheri."
  },
  {
    id: "q99",
    topic: "UPPSC Special: Ramsar Wetland Sites",
    difficulty: "Medium",
    question: "Which of the following Ramsar wetland sites in Uttar Pradesh is famous as a bird sanctuary surrounding the historic Keetham Lake near Agra?",
    options: [
      "Sur Sarovar",
      "Sandi Bird Sanctuary",
      "Saman Bird Sanctuary",
      "Bakhira Wildlife Sanctuary"
    ],
    answer: 0,
    explanation: "Sur Sarovar, also known as Keetham Lake, is a designated Ramsar wetland site situated on the Delhi-Agra highway in Agra district.",
    trap: "Bakhira is in Sant Kabir Nagar; Saman is in Mainpuri; Sandi is in Hardoi."
  },
  {
    id: "q100",
    topic: "Jal Jeevan Mission (JJM)",
    difficulty: "Medium",
    question: "Under the Jal Jeevan Mission (JJM): Har Ghar Jal, what is the mandated service delivery benchmark for potable tap water provided to every rural household?",
    options: [
      "40 litres per capita per day (lpcd)",
      "55 litres per capita per day (lpcd)",
      "70 litres per capita per day (lpcd)",
      "100 litres per capita per day (lpcd)"
    ],
    answer: 1,
    explanation: "JJM guarantees the supply of 55 litres per capita per day (lpcd) of potable water to every rural household through Functional Household Tap Connections (FHTC) of prescribed BIS:10500 quality standard.",
    trap: "40 lpcd was the older National Rural Drinking Water Programme (NRDWP) norm; JJM upgraded this to 55 lpcd."
  },
  {
    id: "q101",
    topic: "National Green Hydrogen Mission",
    difficulty: "Hard",
    question: "The National Green Hydrogen Mission sets which of the following quantitative targets to be achieved by the year 2030?\n1. Developing green hydrogen production capacity of at least 5 MMT (Million Metric Tonnes) per annum.\n2. Addition of about 125 GW of associated renewable energy capacity.\n3. Cumulative reduction in fossil fuel imports over ₹1 lakh crore.\nWhich of the statements given above are correct?",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    answer: 3,
    explanation: "All three statements are correct targets under the National Green Hydrogen Mission (notified January 2023): 5 MMT per annum green hydrogen, ~125 GW renewable addition, over ₹8 lakh crore total investments, and >₹1 lakh crore fossil fuel import savings.",
    trap: "Be sure to note the target year: 2030."
  },
  {
    id: "q102",
    topic: "UPPSC Special: Ganga Expressway Alignment",
    difficulty: "Hard",
    question: "The 594-km greenfield Ganga Expressway connects Meerut with Prayagraj across how many districts of Uttar Pradesh?",
    options: [
      "8 districts",
      "10 districts",
      "12 districts",
      "15 districts"
    ],
    answer: 2,
    explanation: "The Ganga Expressway traverses exactly 12 districts: Meerut, Hapur, Bulandshahr, Amroha, Sambhal, Budaun, Shahjahanpur, Hardoi, Unnao, Rae Bareli, Pratapgarh, and Prayagraj.",
    trap: "It does not pass through Kanpur or Lucknow; it runs along an independent northern/central alignment."
  },
  {
    id: "q103",
    topic: "Paris Agreement Article 6 & Carbon Markets",
    difficulty: "Hard",
    question: "Under the 2015 Paris Agreement, Article 6 provides the international framework for:",
    options: [
      "International carbon crediting mechanisms and voluntary cooperation among nations to achieve Nationally Determined Contributions (NDCs)",
      "Loss and Damage funding allocations for small island developing states",
      "Mandatory phase-out deadlines for coal-fired power stations",
      "Maritime bunker fuel emission standards under the IMO"
    ],
    answer: 0,
    explanation: "Article 6 of the Paris Agreement establishes market and non-market approaches for international carbon trading: Article 6.2 covers bilateral Internationally Transferred Mitigation Outcomes (ITMOs), and Article 6.4 establishes a centralized UN carbon crediting mechanism.",
    trap: "Loss and damage is governed by Article 8; carbon markets are under Article 6."
  },
  {
    id: "q104",
    topic: "Treaty on the Prohibition of Nuclear Weapons (TPNW)",
    difficulty: "Medium",
    question: "What is India's official stance regarding the Treaty on the Prohibition of Nuclear Weapons (TPNW / Ban Treaty) which entered into force in January 2021?",
    options: [
      "India signed and ratified the treaty in 2022",
      "India does not support the treaty and stated it does not constitute customary international law binding on non-parties",
      "India has signed the treaty with reservations on its no-first-use doctrine",
      "India is an observer state pending parliamentary review"
    ],
    answer: 1,
    explanation: "India (like all other nuclear-armed states) refused to participate in TPNW negotiations and maintains that it does not create any new obligations, nor does it establish customary international law.",
    trap: "India remains committed to universal, non-discriminatory nuclear disarmament through the Conference on Disarmament (CD), but rejects partial bans that ignore deterrence realities."
  },
  {
    id: "q105",
    topic: "UNCLOS Freedom of Navigation Operations (FONOPs)",
    difficulty: "Hard",
    question: "Regarding maritime passage rights in a coastal state's Territorial Sea (up to 12 nautical miles) under UNCLOS, which right do all foreign ships (including warships) enjoy?",
    options: [
      "Right of Innocent Passage",
      "Right of Transit Passage",
      "Right of Archipelagic Sea Lanes Passage",
      "Unconditional High Seas Freedom"
    ],
    answer: 0,
    explanation: "Under UNCLOS, foreign ships enjoy the Right of Innocent Passage through the territorial sea, provided it is continuous, expeditious, and not prejudicial to the peace, good order, or security of the coastal state. Warships are not permitted to conduct military exercises or weapons tests during innocent passage.",
    trap: "Transit Passage applies to straits used for international navigation (e.g., Strait of Hormuz, Malacca); Innocent Passage applies to territorial waters."
  },
  {
    id: "q106",
    topic: "South China Sea Arbitration (Philippines v. China)",
    difficulty: "Hard",
    question: "In the landmark 2016 South China Sea ruling under UNCLOS Annex VII, the Permanent Court of Arbitration (PCA) concluded that:",
    options: [
      "China's 'Nine-Dash Line' claim had no legal basis under international law",
      "Scarborough Shoal constitutes an Exclusive Economic Zone of China",
      "All low-tide elevations generate a 12-nautical-mile territorial sea",
      "The Spratly Islands are an integral territory of Taiwan"
    ],
    answer: 0,
    explanation: "The PCA tribunal ruled unanimously that China's historic rights claim within the 'Nine-Dash Line' had no legal effect under UNCLOS. India officially 'noted' the award and consistently calls for adherence to UNCLOS and peaceful dispute resolution without use of force.",
    trap: "The tribunal also ruled that none of the Spratly features generate an EEZ (they are rocks or low-tide elevations)."
  }
];
