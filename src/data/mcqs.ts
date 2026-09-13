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
  }
];
