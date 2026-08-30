import { Doctrine } from "./types";

// India's foreign-policy doctrines and vision statements — a distinct,
// high-yield UPSC angle (Mains GS-II especially) that's separate from
// both "countries" and "organisations". Chronological order.
export const DOCTRINES: Doctrine[] = [
  {
    id: "panchsheel",
    name: "Panchsheel (Five Principles of Peaceful Coexistence)",
    period: "1954",
    announcedBy: "Jointly articulated by India and China (Nehru–Zhou Enlai)",
    summary:
      "Five principles first formalised in the 1954 India-China agreement on Tibet: mutual respect for territorial integrity and sovereignty, mutual non-aggression, mutual non-interference in internal affairs, equality and mutual benefit, and peaceful coexistence.",
    keyIdeas: [
      "Mutual respect for territorial integrity and sovereignty",
      "Mutual non-aggression",
      "Mutual non-interference in internal affairs",
      "Equality and mutual benefit",
      "Peaceful coexistence",
    ],
    evolution:
      "Underpinned India's early non-aligned foreign policy and was cited at the 1955 Bandung Conference; its credibility was damaged by the 1962 India-China war, but the five principles remain formally invoked in Indian diplomatic statements.",
    currentRelevance: "Still cited as a normative reference point in India-China joint statements, even though practical relations are shaped far more by the unresolved LAC dispute.",
    prelims: ["Panchsheel was signed between India and China in 1954, in the context of the Tibet agreement.", "The five principles were reiterated at the 1955 Bandung Conference (Asian-African Conference)."],
    mains: "Assess whether Panchsheel remains a credible framework for India-China relations today.",
    sourceKey: "mea",
  },
  {
    id: "nonalignment",
    name: "Non-Alignment",
    period: "1950s–1991 (core doctrine); legacy continues",
    announcedBy: "Jawaharlal Nehru, alongside Tito (Yugoslavia) and Nasser (Egypt)",
    summary:
      "India's foundational Cold War-era policy of not formally aligning with either the US-led or Soviet-led bloc, while engaging both, and building solidarity among newly-independent Asian and African states through the Non-Aligned Movement (NAM), founded 1961 in Belgrade.",
    keyIdeas: ["Strategic independence from Cold War blocs", "Anti-colonialism and Third World solidarity", "Multilateralism through the UN"],
    evolution:
      "Effectively reinterpreted after the Soviet Union's collapse (1991) as India opened its economy and deepened US ties; many scholars argue it evolved into today's 'strategic autonomy' and 'multi-alignment'.",
    currentRelevance: "NAM itself is now largely dormant as a bloc, but its successor idiom — 'strategic autonomy' — actively shapes India's simultaneous QUAD and Russia engagement.",
    prelims: ["The Non-Aligned Movement was founded in 1961 at the Belgrade Conference.", "India, Yugoslavia, Egypt, Indonesia and Ghana are considered NAM's founding voices."],
    mains: "Trace the continuity and change between Cold War-era Non-Alignment and post-1991 'strategic autonomy'.",
    sourceKey: "mea",
  },
  {
    id: "strategic-autonomy",
    name: "Strategic Autonomy / Multi-alignment",
    period: "Post-1991, especially post-2014",
    announcedBy: "Evolved doctrine, not a single announcement — associated with successive governments' foreign policy practice",
    summary:
      "The principle that India retains freedom of independent judgement and action in foreign affairs, engaging multiple powers (US, Russia, EU, Gulf states) simultaneously on issue-specific terms rather than joining a formal alliance system.",
    keyIdeas: ["No formal military alliance commitments", "Issue-based, transactional partnerships", "Preserving policy space on contentious global issues (e.g., abstaining on certain UN votes)"],
    evolution:
      "Most visibly tested by India's continued Russian oil purchases and defence ties after 2022, even as it deepened QUAD and US technology cooperation (iCET) in parallel.",
    currentRelevance: "The central lens through which most current India foreign-policy Mains questions are framed — QUAD-vs-Russia, Israel-Palestine positioning, and US tariff pressure are all read through this doctrine.",
    prelims: ["'Strategic autonomy' is a practised doctrine, not a single treaty or formal declaration.", "India abstained rather than voted against Russia in multiple UN resolutions following the 2022 invasion of Ukraine — commonly cited as evidence of strategic autonomy in practice."],
    mains: "Examine how 'strategic autonomy' shapes India's simultaneous engagement with the QUAD and its continued strategic partnership with Russia.",
    sourceKey: "mea",
  },
  {
    id: "neighbourhood-first",
    name: "Neighbourhood First Policy",
    period: "2014–present",
    announcedBy: "Government of India, from 2014",
    summary:
      "Prioritises India's immediate South Asian neighbours (Bangladesh, Bhutan, Nepal, Sri Lanka, Maldives, Myanmar, Afghanistan) for connectivity, development assistance, trade and security cooperation, aiming to counter-balance China's regional Belt and Road footprint.",
    keyIdeas: ["Connectivity (road, rail, energy grids, digital)", "Lines of credit and grant assistance", "First-responder role in regional disasters/crises", "Non-reciprocal accommodation of smaller neighbours' concerns"],
    evolution: "Tested repeatedly by China's growing influence in Sri Lanka, Nepal and the Maldives; the 2025 India-Maldives reset and continued Bangladesh engagement post-2024 political transition are recent stress tests.",
    currentRelevance: "Directly complemented since 2025 by the MAHASAGAR vision, which extends similar principles beyond the immediate neighbourhood to the wider Global South.",
    prelims: ["Neighbourhood First covers Bangladesh, Bhutan, Nepal, Sri Lanka, Maldives, Myanmar and Afghanistan.", "It is often discussed alongside SAGAR/MAHASAGAR (maritime) and Act East (Southeast Asia) as complementary, geographically distinct doctrines."],
    mains: "Critically examine the successes and limitations of Neighbourhood First in countering China's regional influence.",
    sourceKey: "mea",
  },
  {
    id: "act-east",
    name: "Act East Policy (successor to Look East)",
    period: "Look East: 1991–2014; Act East: 2014–present",
    announcedBy: "Look East under P.V. Narasimha Rao (1991); renamed/reoriented as Act East from 2014",
    summary:
      "Deepens India's economic and strategic engagement with Southeast Asia and the wider Asia-Pacific, centred on ASEAN, moving from the original 'Look East' economic-opening rationale to a more active strategic and security orientation.",
    keyIdeas: ["ASEAN centrality", "Connectivity (India-Myanmar-Thailand Trilateral Highway)", "Defence and maritime cooperation with Vietnam, Japan, Australia", "Cultural/civilisational diplomacy (Buddhist circuit)"],
    evolution: "Originally an economic-liberalisation-era policy to integrate with fast-growing East Asian economies; since 2014 it has added a security dimension aligned with the Indo-Pacific concept.",
    currentRelevance: "Frames India's ASEAN-India FTA review push and its Indo-Pacific maritime security cooperation with Vietnam, Japan and the Philippines.",
    prelims: ["Look East was launched under P.V. Narasimha Rao in 1991-92 following economic liberalisation.", "The India-Myanmar-Thailand Trilateral Highway is a flagship Act East connectivity project."],
    mains: "Evaluate how the shift from 'Look East' to 'Act East' reflects a change in India's strategic posture, not merely economic orientation.",
    sourceKey: "mea",
  },
  {
    id: "sagar-mahasagar",
    name: "SAGAR → MAHASAGAR (Maritime Vision)",
    period: "SAGAR: 2015; elevated to MAHASAGAR: March 2025",
    announcedBy: "PM Narendra Modi — SAGAR announced 2015; MAHASAGAR announced during a visit to Mauritius, March 2025",
    summary:
      "SAGAR (Security and Growth for All in the Region), announced in 2015, focused on India as a net security provider and development partner in the Indian Ocean Region. In March 2025, PM Modi elevated this to MAHASAGAR (Mutual and Holistic Advancement for Security and Growth Across Regions) — extending the vision's economic, technological and security cooperation beyond the Indian Ocean to the wider Global South (invoked as far afield as Trinidad and Tobago, Ghana and the Philippines).",
    keyIdeas: [
      "Maritime domain awareness (MDA) and naval diplomacy",
      "Humanitarian assistance and disaster response (HADR) — India as 'first responder'",
      "Extends beyond the Indian Ocean to the wider Global South",
      "Economic growth, trade and technology cooperation, not security alone",
    ],
    evolution:
      "MAHASAGAR remains institutionally light — as of 2026 it is still described by analysts as a broad vision rather than a fully codified strategy, spread across MEA, Ministry of Defence, Finance, and Ports/Shipping/Waterways. Concrete actions since announcement include the AIKEYME anti-piracy exercise (April 2025, 9 littoral countries) and a $175 million economic package for Seychelles (February 2026).",
    currentRelevance: "One of the most current (2025–26) UPSC-relevant foreign-policy developments — directly testable on both the SAGAR-to-MAHASAGAR distinction and its Global South framing.",
    prelims: [
      "SAGAR was announced in 2015; MAHASAGAR (Mutual and Holistic Advancement for Security and Growth Across Regions) was announced by PM Modi in Mauritius in March 2025.",
      "MAHASAGAR explicitly extends India's engagement beyond the Indian Ocean Region to the wider Global South — unlike SAGAR, which was IOR-focused.",
    ],
    mains: "MAHASAGAR marks India's maritime doctrine evolving from a regional to a global vision — critically examine its institutional readiness to match this ambition.",
    sourceKey: "mea",
  },
  {
    id: "indo-pacific",
    name: "Indo-Pacific Outlook",
    period: "Formally articulated 2018 onward (Shangri-La Dialogue)",
    announcedBy: "PM Narendra Modi, 2018 Shangri-La Dialogue keynote",
    summary:
      "India's vision of the Indo-Pacific as a free, open, inclusive region governed by international law (especially UNCLOS), rejecting bloc politics, and centred on ASEAN — distinct from a purely military/containment framing of the term used by some other powers.",
    keyIdeas: ["Freedom of navigation and overflight", "ASEAN centrality", "Inclusiveness — not aimed against any one country, officially", "Indo-Pacific Oceans Initiative (IPOI) — 7 pillars of functional cooperation"],
    evolution: "Operationalised through QUAD cooperation, the Indo-Pacific Oceans Initiative (IPOI, launched 2019), and bilateral logistics/defence agreements with the US, Japan, Australia, France and the UK.",
    currentRelevance: "The umbrella concept connecting QUAD, MAHASAGAR, and Act East into a single strategic frame frequently tested in Mains answers.",
    prelims: ["PM Modi articulated India's Indo-Pacific vision at the 2018 Shangri-La Dialogue in Singapore.", "The Indo-Pacific Oceans Initiative (IPOI) has seven functional pillars of cooperation, launched in 2019."],
    mains: "How does India's conception of the Indo-Pacific differ from that of the US or China? Discuss with reference to ASEAN centrality.",
    sourceKey: "mea",
  },
  {
    id: "vaccine-maitri",
    name: "Vaccine Maitri & Health Diplomacy",
    period: "January 2021 onward",
    announcedBy: "Government of India, Ministry of External Affairs",
    summary:
      "India's COVID-19 vaccine diplomacy initiative supplying domestically-manufactured vaccines (grant, commercial and COVAX routes) to partner countries, positioning India as the 'pharmacy of the world'.",
    keyIdeas: ["Grant assistance to neighbourhood and Indian Ocean island states", "Commercial exports and COVAX contributions", "Soft-power complement to Neighbourhood First"],
    evolution: "Paused mid-2021 during India's own second COVID wave, then resumed; frequently cited as a case study in health/vaccine diplomacy as an instrument of soft power.",
    currentRelevance: "A standard Mains example for 'India as the pharmacy of the world' and for soft-power/health-diplomacy essay-type questions.",
    prelims: ["Vaccine Maitri was launched in January 2021.", "It combined grant assistance, commercial supply and contributions routed through the COVAX facility."],
    mains: "Vaccine Maitri as a case study in India's use of health diplomacy to advance soft power — discuss.",
    sourceKey: "mea",
  },
];
