import React, { useState } from "react";
import {
  ShieldCheck,
  Building2,
  Package,
  Plane,
  Compass,
  FileText,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
  TrendingUp,
  Globe2,
} from "lucide-react";
import { Pill, SectionLabel } from "../components/ui";

const DEFENCE_NODES = [
  {
    id: "lucknow",
    name: "1. Lucknow Node",
    role: "Missiles, Aerospace & Avionics",
    anchor: "BrahMos Aerospace Next-Gen Cruise Missiles",
    area: "200+ Acres",
    details: "Home to the state-of-the-art BrahMos Aerospace manufacturing and testing center. Focuses on BrahMos-NG (Next Generation) lightweight supersonic cruise missiles for Sukhoi-30MKI and Tejas fighter jets."
  },
  {
    id: "kanpur",
    name: "2. Kanpur Node",
    role: "Ordnance, Small Arms & Defense Textiles",
    anchor: "Small Arms Factory, Gliders India & Troop Comforts",
    area: "Defence Testing & Industrial Cluster",
    details: "Historically known as the 'Manchester of the East'. Manufacturing hub for high-grade small arms, bulletproof ballistic protection vests, night-vision equipment, and defence aeronautics via IIT Kanpur C3iHub."
  },
  {
    id: "aligarh",
    name: "3. Aligarh Node",
    role: "Precision Hardware & Drone Components",
    anchor: "Ankur Udyog, Precision Tooling & UAV Parks",
    area: "100+ Acres on Khair Road",
    details: "Capitalizes on Aligarh's world-famous lock and precision metalworking heritage. Specializes in unmanned aerial vehicle (UAV) airframes, high-tolerance mechanical linkages, and missile canisters."
  },
  {
    id: "agra",
    name: "4. Agra Node",
    role: "Aero-structures & Parachutes",
    anchor: "Aerial Delivery Systems & Aviation Assemblies",
    area: "National Highway Hub",
    details: "Focuses on military parachutes, heavy-drop aerial delivery systems, specialized lightweight alloys, and supply chains feeding aircraft maintenance."
  },
  {
    id: "jhansi",
    name: "5. Jhansi Node",
    role: "Missile Propulsion & Ammunition",
    anchor: "Bharat Dynamics Limited (BDL)",
    area: "1,000+ Acres in Bundelkhand",
    details: "Massive facility by Bharat Dynamics Limited for testing and manufacturing propulsion systems for anti-tank guided missiles (ATGMs) and surface-to-air missiles. Anchored by the Bundelkhand Expressway."
  },
  {
    id: "chitrakoot",
    name: "6. Chitrakoot Node",
    role: "Explosives, Propellants & Heavy Machinery",
    anchor: "Strategic Energetics & Assembly Facilities",
    area: "Bundelkhand Corridor Node",
    details: "Dedicated node for defence propellants, high-energy explosives, heavy armored vehicle components, and dual-use industrial alloys, leveraging mineral access."
  }
];

const ODOP_EXPORT_MAP = [
  { district: "Bhadohi", product: "Handmade Silk & Wool Carpets", market: "USA, Germany, UK, UAE", highlight: "Accounts for over 50% of India's total carpet exports ($1B+ export value)." },
  { district: "Moradabad", product: "Brassware & Metal Handicrafts", market: "USA, Canada, EU, Middle East", highlight: "Globally known as 'Peetal Nagari'. Traditional electroplated brass and metal artifacts." },
  { district: "Varanasi", product: "Banarasi Silk Sarees & Brocade", market: "Worldwide Indian Diaspora", highlight: "Ancient GI tag handloom craft incorporating pure gold and silver Zari threads." },
  { district: "Kannauj", product: "Natural Perfume (Deg-Bhapka Ittar)", market: "France, Gulf, Saudi Arabia", highlight: "World's traditional perfume capital using hydro-distillation of flowers into sandalwood oil." },
  { district: "Firozabad", product: "Glassware, Chandeliers & Bangles", market: "South Asia, Middle East, Africa", highlight: "Known as 'Suhag Nagari'. Largest glass melting and blowing cluster in India." },
  { district: "Aligarh", product: "Locks, Hardware & Metal Castings", market: "Africa, Gulf, Southeast Asia", highlight: "Traditional brass and iron security locks evolving into high-tech electronic security systems." },
  { district: "Saharanpur", product: "Intricate Carved Woodcraft", market: "USA, UK, Europe, Australia", highlight: "Sheesham and Teak wood carving with royal Arab and Victorian heritage designs." },
  { district: "Siddharthnagar", product: "Kala Namak Rice ('Buddha Rice')", market: "Singapore, Japan, Dubai", highlight: "Ancient aromatic, iron-and-zinc-rich black-husk rice nurtured since Lord Buddha's era." },
  { district: "Kanpur Nagar", product: "Finished Leather & Saddlery", market: "UK, Italy, Germany, USA", highlight: "Premier leather export hub, especially for equestrian saddlery and safety boots." },
  { district: "Gorakhpur", product: "Terracotta Clay Handicrafts", market: "National & Global Eco-Crafts", highlight: "Hand-crafted unglazed earthen pottery and terracotta elephants with natural red clay." }
];

export default function UppscSpecial() {
  const [activeTab, setActiveTab] = useState<"defence" | "odop" | "infra" | "nepal">("defence");

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#e0d6bd] dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#b8863b]">
          <ShieldCheck size={15} /> UPPSC PCS Special Hub (Mains Papers 5 &amp; 6)
        </div>
        <h1 className="font-serif text-2xl md:text-3xl text-[#1f2937] dark:text-slate-100 mt-1">
          Uttar Pradesh in Global Trade, Strategic Defence &amp; Diplomacy
        </h1>
        <p className="text-[13px] text-[#8a7c58] dark:text-slate-400 mt-1">
          Complete high-yield coverage for UPPSC PCS Prelims &amp; Mains: Defence Corridor 6 Nodes, ODOP Export Map, Jewar Airport, PM-MITRA, and Indo-Nepal Border Security.
        </p>

        {/* Tab Selector */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 p-1.5 rounded-xl w-fit">
          {[
            { id: "defence", label: "🛡️ UP Defence Corridor (6 Nodes)" },
            { id: "odop", label: "📦 ODOP Global Export Hub" },
            { id: "infra", label: "✈️ Mega Projects & Logistics" },
            { id: "nepal", label: "🏔️ Indo-Nepal Border Security" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-[12px] font-medium px-3.5 py-1.5 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-[#b8863b] text-white font-semibold shadow-xs"
                  : "text-[#5b5340] dark:text-slate-400 hover:bg-[#f3ede0] dark:hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Defence Corridor */}
      {activeTab === "defence" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8863b] block">
                  UPEIDA STRATEGIC INITIATIVE
                </span>
                <h3 className="font-serif text-xl text-[#1f2937] dark:text-slate-100 mt-0.5">
                  The 6 Nodes of Uttar Pradesh Defence Industrial Corridor
                </h3>
              </div>
              <span className="text-[11.5px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#b8863b]/15 text-[#8a5d1b] dark:text-[#f3c882]">
                Target: ₹50,000 Cr Investment
              </span>
            </div>
            <p className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed font-sans">
              Notified in 2018 across 6 nodes strategically connected by the Agra-Lucknow Expressway, Purvanchal Expressway, and Bundelkhand Expressway. Focuses on indigenization of defence manufacturing under Atmanirbhar Bharat.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {DEFENCE_NODES.map((node) => (
                <div
                  key={node.id}
                  className="p-4 rounded-xl bg-[#fcfaf5] dark:bg-slate-800/80 border border-[#e0d6bd] dark:border-slate-700 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1f2937] dark:text-slate-100">
                      {node.name}
                    </h4>
                    <span className="text-[11px] font-medium text-[#b8863b] block mt-0.5">
                      {node.role}
                    </span>
                    <p className="text-[12px] text-[#4a4432] dark:text-slate-300 mt-2 leading-relaxed">
                      {node.details}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#eee7d6] dark:border-slate-700/60 text-[11px] font-mono text-[#8a7c58] dark:text-slate-400">
                    <span className="font-semibold text-[#8a5d1b] dark:text-[#f3c882]">Anchor: </span>
                    {node.anchor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: ODOP Export Map */}
      {activeTab === "odop" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8863b] block">
                FLAGSHIP MSME EXPORT ENGINE
              </span>
              <h3 className="font-serif text-xl text-[#1f2937] dark:text-slate-100 mt-0.5">
                UP One District One Product (ODOP) Global Export Footprint
              </h3>
              <p className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed font-sans mt-1">
                Launched in January 2018 to revive traditional indigenous craft ecosystems, provide design modernization, and link rural artisan clusters directly to overseas trade fairs and e-commerce platforms.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12.5px] border-collapse">
                <thead>
                  <tr className="border-b border-[#e0d6bd] dark:border-slate-700 text-[#8a7c58] dark:text-slate-400 font-mono text-[11px] uppercase">
                    <th className="py-2.5 pr-3 font-bold">District</th>
                    <th className="py-2.5 px-3 font-bold">Identified ODOP Craft</th>
                    <th className="py-2.5 px-3 font-bold">Primary Overseas Markets</th>
                    <th className="py-2.5 pl-3 font-bold">Strategic Exam Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee7d6] dark:divide-slate-800 text-[#2b2a24] dark:text-slate-200">
                  {ODOP_EXPORT_MAP.map((item, i) => (
                    <tr key={i} className="hover:bg-[#fcfaf5] dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-2.5 pr-3 font-bold text-[#1f2937] dark:text-slate-100">{item.district}</td>
                      <td className="py-2.5 px-3 text-[#b8863b] font-medium">{item.product}</td>
                      <td className="py-2.5 px-3">{item.market}</td>
                      <td className="py-2.5 pl-3 text-[11.5px] text-[#5b5340] dark:text-slate-300">{item.highlight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Mega Infra & Logistics */}
      {activeTab === "infra" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#b8863b] font-bold text-[12px] uppercase">
                <Plane size={16} /> Noida International Airport (Jewar)
              </div>
              <h4 className="font-serif text-lg text-[#1f2937] dark:text-slate-100">
                India's Largest Green-field Aviation &amp; Cargo Hub
              </h4>
              <p className="text-[12.5px] text-[#3b3527] dark:text-slate-300 leading-relaxed">
                Spanning over 5,000 hectares upon full development. Designed with a massive Multi-Modal Cargo Terminal (MMCT) and MRO (Maintenance, Repair &amp; Overhaul) facility, directly linked to the Western Dedicated Freight Corridor (WDFC) and Yamuna Expressway.
              </p>
              <div className="p-3 rounded-xl bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 text-[11.5px] space-y-1">
                <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block">UPPSC Mains Takeaway:</span>
                <span className="text-[#4a4432] dark:text-slate-300">Positions western UP as the multi-modal logistics gateway of North India, de-congesting Delhi IGI airport and accelerating electronic hardware exports.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#b8863b] font-bold text-[12px] uppercase">
                <Package size={16} /> PM-MITRA Mega Textile Park (Lucknow-Hardoi)
              </div>
              <h4 className="font-serif text-lg text-[#1f2937] dark:text-slate-100">
                1,000-Acre Integrated Farm-to-Fashion Hub
              </h4>
              <p className="text-[12.5px] text-[#3b3527] dark:text-slate-300 leading-relaxed">
                Approved under the 7 national PM-MITRA parks. Combines spinning, weaving, processing, dyeing, and garment manufacturing under one roof with plug-and-play common effluent treatment plants (CETP) and logistics support.
              </p>
              <div className="p-3 rounded-xl bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 text-[11.5px] space-y-1">
                <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block">UPPSC Mains Takeaway:</span>
                <span className="text-[#4a4432] dark:text-slate-300">Boosts value addition to UP's traditional handloom/powerloom sector (Chikan, Zardozi, Varanasi silk) and generates an estimated 1 lakh direct and 2 lakh indirect jobs.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Indo-Nepal Border Security */}
      {activeTab === "nepal" && (
        <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8863b] block">
              INTERNATIONAL STRATEGIC BORDER
            </span>
            <h3 className="font-serif text-xl text-[#1f2937] dark:text-slate-100 mt-0.5">
              Uttar Pradesh - Nepal 551 km Strategic Border Management
            </h3>
            <p className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed font-sans mt-1">
              Uttar Pradesh shares a 551 km open, porous international border with Nepal spanning 7 border districts: Pilibhit, Lakhimpur Kheri, Bahraich, Shravasti, Balrampur, Siddharthnagar, and Maharajganj.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 pt-2 text-[12px]">
            <div className="p-4 rounded-xl bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 space-y-1.5">
              <span className="font-bold text-[#1f2937] dark:text-slate-100 block text-[13px]">1. Integrated Check Posts (ICPs)</span>
              <p className="text-[#4a4432] dark:text-slate-300 leading-relaxed">
                <strong>Rupaidiha (Bahraich)</strong> and <strong>Sonauli (Maharajganj)</strong> have modern ICPs with cargo scanning, automated customs, and biometric tracking, handling 70% of bilateral bilateral trade with Nepal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 space-y-1.5">
              <span className="font-bold text-[#1f2937] dark:text-slate-100 block text-[13px]">2. Border Guarding Force</span>
              <p className="text-[#4a4432] dark:text-slate-300 leading-relaxed">
                Manned by the <strong>Sashastra Seema Bal (SSB)</strong> under the Ministry of Home Affairs. Focuses on curbing human trafficking, illegal counterfeit currency (FICN), and wildlife contraband from Dudhwa forest reserve.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 space-y-1.5">
              <span className="font-bold text-[#1f2937] dark:text-slate-100 block text-[13px]">3. Cross-Border Hydro &amp; Connectivity</span>
              <p className="text-[#4a4432] dark:text-slate-300 leading-relaxed">
                Crucial for joint flood management of trans-boundary rivers (Sharda/Mahakali, Ghaghara/Karnali, Rapti, Gandak). Connects Buddhist circuit pilgrimage tourists visiting Lumbini (Nepal) through Sonauli.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
