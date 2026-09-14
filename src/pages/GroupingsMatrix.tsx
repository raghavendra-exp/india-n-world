import React, { useState, useMemo } from "react";
import {
  Globe2,
  ShieldCheck,
  Building2,
  CheckCircle2,
  XCircle,
  Search,
  ExternalLink,
  Zap,
  Info,
  Layers,
  Sparkles,
} from "lucide-react";
import { Pill, SectionLabel } from "../components/ui";

interface Grouping {
  id: string;
  name: string;
  category: "strategic" | "economic" | "maritime" | "regimes" | "indialed";
  categoryLabel: string;
  established: string;
  headquarters: string;
  members: string[];
  indiaStatus: "Founding Member" | "Full Member" | "Presidency Held" | "Non-Member (Excluded)";
  mandate: string;
  latestHighlights: string;
  examTrap: string;
}

const GLOBAL_GROUPINGS: Grouping[] = [
  {
    id: "quad",
    name: "QUAD (Quadrilateral Security Dialogue)",
    category: "strategic",
    categoryLabel: "Indo-Pacific Strategic",
    established: "2007 (revived 2017)",
    headquarters: "No permanent secretariat (Rotating leadership)",
    members: ["India", "United States", "Japan", "Australia"],
    indiaStatus: "Founding Member",
    mandate: "Ensuring a Free, Open, Inclusive, and Rules-based Indo-Pacific (FOIP), maritime domain awareness (IPMDA), clean energy supply chains, STEM fellowships, and humanitarian disaster relief (HADR).",
    latestHighlights: "Malabar naval exercise rotated among all 4 members. Quad Cyber Challenge, critical semiconductor partnerships, and Open-RAN 5G deployment.",
    examTrap: "UPSC Trap: Quad is NOT a formal military alliance like NATO! There is no Article 5 mutual defense pact. It is a strategic plurilateral partnership."
  },
  {
    id: "i2u2",
    name: "I2U2 (West Asian Quad)",
    category: "strategic",
    categoryLabel: "West Asian Economic/Tech",
    established: "October 2021 (First Leaders' Summit July 2022)",
    headquarters: "Virtual diplomatic consultative platform",
    members: ["India", "Israel", "UAE", "United States"],
    indiaStatus: "Founding Member",
    mandate: "Joint investments and initiatives across 6 priority sectors: Water, Energy, Transportation, Space, Health, and Food Security.",
    latestHighlights: "UAE's $2 billion investment to develop a series of integrated agricultural food parks across India (Gujarat and Madhya Pradesh); 300 MW hybrid solar and wind renewable project in Dwarka, Gujarat.",
    examTrap: "Focus: I2U2 leverages American & Israeli technology, UAE capital/finance, and Indian agricultural workforce/scale."
  },
  {
    id: "brics",
    name: "BRICS+ (Expanded Economic Coalition)",
    category: "economic",
    categoryLabel: "Global South & Emerging Economies",
    established: "2006 (First Summit 2009 in Yekaterinburg)",
    headquarters: "NDB Headquarters in Shanghai, China",
    members: [
      "Brazil", "Russia", "India", "China", "South Africa",
      "Egypt", "Ethiopia", "Iran", "United Arab Emirates", "Saudi Arabia"
    ],
    indiaStatus: "Founding Member",
    mandate: "Championing reformed multilateralism, South-South cooperation, local currency trade settlement to reduce dollar dependence, and alternative development finance via the New Development Bank (NDB).",
    latestHighlights: "Expanded from BRICS-5 to BRICS-10 at Johannesburg (2023) and Kazan (2024). Over 30 partner countries have expressed formal interest in joining.",
    examTrap: "Membership Check: Argentina withdrew following elections; Egypt, Ethiopia, Iran, and UAE formally joined on Jan 1, 2024. NDB has equal voting rights for founding 5 members (no veto power)."
  },
  {
    id: "sco",
    name: "Shanghai Cooperation Organisation (SCO)",
    category: "economic",
    categoryLabel: "Eurasian Political & Security",
    established: "2001 (Evolved from Shanghai Five 1996)",
    headquarters: "Secretariat in Beijing, China; RATS in Tashkent, Uzbekistan",
    members: [
      "China", "Russia", "Kazakhstan", "Kyrgyzstan", "Tajikistan",
      "Uzbekistan", "India", "Pakistan", "Iran", "Belarus"
    ],
    indiaStatus: "Full Member",
    mandate: "Strengthening mutual trust and good-neighborly ties among Eurasian states; combating the 'Three Evils' of Terrorism, Separatism, and Extremism through the Regional Anti-Terrorist Structure (RATS).",
    latestHighlights: "India hosted the 23rd SCO Summit in 2023 (New Delhi Declaration). Iran joined as 9th member in 2023; Belarus joined as 10th member at Astana Summit 2024.",
    examTrap: "India and Pakistan joined simultaneously in 2017 at the Astana Summit. India refuses to endorse China's BRI in official SCO communiqués."
  },
  {
    id: "g20",
    name: "G20 (Group of Twenty / G21)",
    category: "economic",
    categoryLabel: "Premier Global Economic Steering",
    established: "1999 (Finance Ministers), 2008 (Leaders' Summit)",
    headquarters: "Troika-led rotating presidency (No permanent secretariat)",
    members: [
      "19 Sovereign Countries", "European Union (EU)", "African Union (AU, 55 states)"
    ],
    indiaStatus: "Presidency Held",
    mandate: "International economic cooperation, financial stability, sustainable climate finance, digital public infrastructure (DPI), multilateral development bank (MDB) reforms.",
    latestHighlights: "New Delhi Summit 2023 achieved 100% consensus on 83 paragraphs of the Leaders' Declaration; inducted the African Union; launched Global Biofuels Alliance and IMEC corridor.",
    examTrap: "Troika concept: G20 presidency is supported by the previous, current, and incoming hosts (e.g. Indonesia -> India -> Brazil -> South Africa)."
  },
  {
    id: "export_regimes",
    name: "The 4 Multilateral Export Control Regimes",
    category: "regimes",
    categoryLabel: "Non-Proliferation & Dual-Use",
    established: "Various (1974 - 1996)",
    headquarters: "Vienna, Paris, etc.",
    members: ["India is a member of 3 out of 4!"],
    indiaStatus: "Full Member",
    mandate: "Preventing proliferation of weapons of mass destruction (nuclear, chemical, biological) and delivery missiles through coordinated export controls on sensitive dual-use items.",
    latestHighlights: "1. MTCR (joined 2016) - Missiles >300 km / 500 kg payload (unlocked BrahMos range upgrade). 2. Wassenaar Arrangement (joined 2017) - Conventional arms & dual-use goods (India chaired plenary 2023). 3. Australia Group (joined 2018) - Chemical & biological weapons. 4. Nuclear Suppliers Group (NSG) - India is NOT a member (blocked by China demanding NPT signature).",
    examTrap: "Golden UPSC Rule: India is a member of MTCR, Wassenaar, and Australia Group, but NOT the NSG or the NPT!"
  },
  {
    id: "imec",
    name: "India-Middle East-Europe Economic Corridor (IMEC)",
    category: "indialed",
    categoryLabel: "Global Connectivity Infrastructure",
    established: "September 2023 (G20 New Delhi)",
    headquarters: "Steering Working Group",
    members: ["India", "USA", "UAE", "Saudi Arabia", "France", "Germany", "Italy", "European Union"],
    indiaStatus: "Founding Member",
    mandate: "Trans-continental green infrastructure, digital cable, and transport network integrating rail, ports, clean hydrogen pipelines, and high-speed data cables across two legs: 1. Eastern Corridor: India to Arabian Gulf (Mundra/Jawaharlal Nehru Port to Jebel Ali/Fujairah/Haifa). 2. Northern Corridor: Arabian Gulf to Europe (Haifa to Piraeus/Marseille).",
    latestHighlights: "Counterpart to China's BRI; cuts transit time between India and Europe by 40% and logistics costs by 30%.",
    examTrap: "Geography check: Overcomes reliance on the congested Suez Canal and narrow Bab-el-Mandeb strait by using overland railway transit across Saudi Arabia and Jordan to Israel's Haifa Port."
  },
  {
    id: "isa",
    name: "International Solar Alliance (ISA)",
    category: "indialed",
    categoryLabel: "Treaty-Based Intergovernmental Body",
    established: "November 2015 (COP21 Paris)",
    headquarters: "National Institute of Solar Energy (NISE), Gurugram, Haryana, India",
    members: ["100+ Signatory & Ratifying States worldwide"],
    indiaStatus: "Founding Member",
    mandate: "'One Sun, One World, One Grid' (OSOWOG). Unlocking $1,000 billion in solar investments by 2030, reducing solar technology costs, and deploying mini-grids across African and island nations.",
    latestHighlights: "First treaty-based international intergovernmental organization headquartered in India.",
    examTrap: "Historical trap: Originally open only to sunshine countries between Tropics of Cancer and Capricorn ('Suryaputras'); charter amended in 2020 to open membership to ALL UN member nations."
  }
];

export default function GroupingsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredGroupings = useMemo(() => {
    return GLOBAL_GROUPINGS.filter((g) => {
      if (selectedCategory !== "all" && g.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = g.name.toLowerCase().includes(q);
        const matchMandate = g.mandate.toLowerCase().includes(q);
        const matchMembers = g.members.some((m) => m.toLowerCase().includes(q));
        const matchTrap = g.examTrap.toLowerCase().includes(q);
        return matchName || matchMandate || matchMembers || matchTrap;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#e0d6bd] dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#b8863b]">
          <Layers size={15} /> Strategic Multilateral Blueprint
        </div>
        <h1 className="font-serif text-2xl md:text-3xl text-[#1f2937] dark:text-slate-100 mt-1">
          Global Groupings, Treaties &amp; Export Control Regimes
        </h1>
        <p className="text-[13px] text-[#8a7c58] dark:text-slate-400 mt-1">
          Comprehensive comparative matrix for UPSC Prelims &amp; Mains: Quad, I2U2, BRICS+, SCO, G20, the 4 Export Control Regimes, and India-led treaties (IMEC, ISA, CDRI).
        </p>

        {/* Filter Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 p-1.5 rounded-xl w-fit">
          {[
            { id: "all", label: "All Groupings" },
            { id: "strategic", label: "🛡️ Strategic (Quad, I2U2)" },
            { id: "economic", label: "🌐 Global Economic (BRICS+, SCO, G20)" },
            { id: "regimes", label: "☢️ Export Regimes (MTCR, Wassenaar)" },
            { id: "indialed", label: "☀️ India-Led (IMEC, ISA)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-[12px] font-medium px-3 py-1.5 rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? "bg-[#b8863b] text-white font-semibold shadow-xs"
                  : "text-[#5b5340] dark:text-slate-400 hover:bg-[#f3ede0] dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-3 text-[#8a7c58] dark:text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter by country, treaty, headquarters, or acronym..."
          className="w-full pl-9 pr-4 py-2 text-[12.5px] bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-xl text-[#2b2a24] dark:text-slate-100 placeholder-[#8a7c58] focus:outline-hidden focus:border-[#b8863b]"
        />
      </div>

      {/* Groupings Grid */}
      <div className="space-y-4">
        {filteredGroupings.map((g) => (
          <div
            key={g.id}
            className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#eee7d6] dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#b8863b] block">
                  {g.categoryLabel}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#1f2937] dark:text-slate-100 mt-0.5">
                  {g.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 text-[#8a7c58] dark:text-slate-300">
                  Est. {g.established}
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#b8863b]/15 text-[#8a5d1b] dark:text-[#f3c882] border border-[#b8863b]/30">
                  {g.indiaStatus}
                </span>
              </div>
            </div>

            {/* Headquarters & Members */}
            <div className="grid sm:grid-cols-2 gap-3 text-[12.5px]">
              <div className="p-3 rounded-xl bg-[#fcfaf5] dark:bg-slate-800/60 border border-[#e0d6bd] dark:border-slate-700/60 space-y-1">
                <span className="font-bold text-[11px] uppercase text-[#8a5d1b] dark:text-[#f3c882] block">
                  Headquarters / Secretariat:
                </span>
                <span className="text-[#3b3527] dark:text-slate-300">{g.headquarters}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#fcfaf5] dark:bg-slate-800/60 border border-[#e0d6bd] dark:border-slate-700/60 space-y-1">
                <span className="font-bold text-[11px] uppercase text-[#8a5d1b] dark:text-[#f3c882] block">
                  Member States:
                </span>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {g.members.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-[#eee7d6] dark:border-slate-700 text-[11px] font-medium text-[#2b2a24] dark:text-slate-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Mandate */}
            <div className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line">
              <strong className="text-[#1f2937] dark:text-slate-100">Strategic Mandate &amp; Architecture: </strong>
              {g.mandate}
            </div>

            {/* Recent Highlights */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-[#eee7d6] dark:border-slate-700 text-[12.5px] space-y-1">
              <span className="font-bold text-[#1f2937] dark:text-slate-200 text-[11.5px] uppercase block">
                Latest 2024–2026 Milestone:
              </span>
              <p className="text-[#4a4432] dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {g.latestHighlights}
              </p>
            </div>

            {/* Exam Trap */}
            <div className="p-3 rounded-xl bg-[#fbeee0] dark:bg-amber-950/40 border border-[#e0d6bd] dark:border-amber-800/60 text-[#8a4b1f] dark:text-amber-300 flex items-start gap-2 text-[12px]">
              <Zap size={15} className="shrink-0 mt-0.5 text-[#b8863b]" />
              <div>
                <span className="font-bold">UPSC Core Mental Trap: </span>
                <span>{g.examTrap}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
