import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Compass,
  Navigation,
  Globe2,
  ExternalLink,
  ChevronRight,
  Search,
  Filter,
  Layers,
  MapPin,
  ShieldAlert,
  Info,
} from "lucide-react";
import { MAP_NODES } from "../data/mapNodes";
import type { MapNode } from "../data/types";
import { Pill, SectionLabel, Stamp } from "../components/ui";

export default function MapLab() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "port" | "chokepoint" | "corridor">("all");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("chabahar");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredNode, setHoveredNode] = useState<MapNode | null>(null);

  const filteredNodes = useMemo(() => {
    return MAP_NODES.filter((n) => {
      const matchCat = selectedCategory === "all" || n.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.countryOrBody.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeNode = useMemo(() => {
    return MAP_NODES.find((n) => n.id === selectedNodeId) || MAP_NODES[0];
  }, [selectedNodeId]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e0d6bd] dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#b8863b]">
            <Compass size={15} /> Strategic Geopolitics &amp; Maritime Map Lab
          </div>
          <h1 className="font-serif text-2xl md:text-3xl text-[#1f2937] dark:text-slate-100 mt-1">
            Indian Ocean &amp; Eurasian Strategic Atlas
          </h1>
          <p className="text-[13px] text-[#8a7c58] dark:text-slate-400 mt-1">
            Interactive spatial mapping of India's overseas ports, global maritime chokepoints, and high-impact connectivity corridors.
          </p>
        </div>

        {/* Quick Filter Pill Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 p-1.5 rounded-xl self-start md:self-auto">
          {(
            [
              ["all", "All Nodes", MAP_NODES.length],
              ["port", "⚓ Ports & Bases", MAP_NODES.filter((n) => n.category === "port").length],
              ["chokepoint", "🌊 Chokepoints", MAP_NODES.filter((n) => n.category === "chokepoint").length],
              ["corridor", "🛣️ Corridors", MAP_NODES.filter((n) => n.category === "corridor").length],
            ] as const
          ).map(([cat, label, count]) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[12px] font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? "bg-[#b8863b] text-white dark:text-slate-950 font-semibold shadow-sm"
                  : "text-[#5b5340] dark:text-slate-400 hover:bg-[#f3ede0] dark:hover:bg-slate-800"
              }`}
            >
              {label}
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat ? "bg-black/20 text-white" : "bg-[#eee7d6] dark:bg-slate-800 text-[#8a7c58] dark:text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left interactive Map, Right Details Drawer */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* SVG Map Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm relative overflow-hidden">
          {/* Map Controls & Search */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-[12px] text-[#8a7c58] dark:text-slate-400">
              <Layers size={14} className="text-[#b8863b]" />
              <span>Tap any node or corridor to inspect strategic exam briefing</span>
            </div>
            <div className="relative w-44 md:w-56">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#a89a72]" />
              <input
                type="text"
                placeholder="Find node / strait..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-[12px] pl-8 pr-2 py-1 bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#b8863b]"
              />
            </div>
          </div>

          {/* Interactive SVG Map */}
          <div className="relative w-full rounded-xl overflow-hidden bg-[#f4efe2] dark:bg-[#0f172a] border border-[#e8dfcb] dark:border-slate-800">
            <svg
              viewBox="0 0 1000 560"
              className="w-full h-auto select-none"
              style={{ minHeight: "360px", maxHeight: "560px" }}
            >
              <defs>
                {/* Ocean Pattern */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#e2d7c0] dark:text-slate-800/60" />
                </pattern>
                {/* Pulse Glow filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ocean Grid Background */}
              <rect width="1000" height="560" fill="url(#grid)" />

              {/* Latitude / Longitude lines */}
              <line x1="0" y1="280" x2="1000" y2="280" stroke="#b8863b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
              <text x="20" y="275" fill="#b8863b" fontSize="9" fontFamily="monospace" opacity="0.8">Tropic of Cancer (23.5° N)</text>

              <line x1="0" y1="410" x2="1000" y2="410" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
              <text x="20" y="405" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.8">Equator (0°)</text>

              {/* ================= SIMPLIFIED GEOGRAPHIC LANDMASSES ================= */}
              {/* African Continent */}
              <path
                d="M 230 140 L 320 140 L 350 180 L 320 220 L 350 320 L 380 340 L 360 440 L 330 500 L 280 540 L 250 540 L 220 460 L 190 320 L 170 240 L 220 180 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1.2"
              />
              {/* Madagascar */}
              <path
                d="M 370 420 L 390 440 L 375 510 L 355 480 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1"
              />
              {/* Arabian Peninsula & Levant */}
              <path
                d="M 325 150 L 390 150 L 440 210 L 440 250 L 410 300 L 345 320 L 340 250 L 325 210 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1.2"
              />
              {/* Eurasia / Russia / Central Asia */}
              <path
                d="M 230 50 L 520 40 L 750 40 L 800 120 L 720 180 L 600 160 L 520 180 L 470 170 L 410 140 L 330 110 L 270 90 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1.2"
              />
              {/* Iranian Plateau */}
              <path
                d="M 400 150 L 500 160 L 510 220 L 440 245 L 430 220 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1"
              />
              {/* Indian Subcontinent */}
              <path
                d="M 500 170 L 540 180 L 590 190 L 640 220 L 630 260 L 590 320 L 560 380 L 540 380 L 500 290 L 480 230 Z"
                className="fill-[#ded1ba] dark:fill-amber-950/30 stroke-[#b8863b] dark:stroke-amber-600/70"
                strokeWidth="1.6"
              />
              {/* Sri Lanka */}
              <ellipse cx="565" cy="385" rx="9" ry="14" className="fill-[#ded1ba] dark:fill-amber-950/30 stroke-[#b8863b]" strokeWidth="1" />
              {/* Southeast Asia & Indochina */}
              <path
                d="M 640 200 L 730 200 L 760 250 L 740 320 L 710 360 L 685 300 L 660 250 Z"
                className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80"
                strokeWidth="1.2"
              />
              {/* Indonesian Archipelago (Sumatra, Java, Borneo) */}
              <path d="M 680 370 L 745 425 L 730 435 L 670 385 Z" className="fill-[#e7ded0] dark:fill-slate-800 stroke-[#d2c2a3] dark:stroke-slate-700" strokeWidth="1" />
              <path d="M 740 430 L 820 440 L 810 450 L 745 440 Z" className="fill-[#e7ded0] dark:fill-slate-800 stroke-[#d2c2a3] dark:stroke-slate-700" strokeWidth="1" />
              <path d="M 740 340 L 790 340 L 780 400 L 735 390 Z" className="fill-[#e7ded0] dark:fill-slate-800 stroke-[#d2c2a3] dark:stroke-slate-700" strokeWidth="1" />
              {/* Australia (NW Coast tip) */}
              <path d="M 850 450 L 960 450 L 960 550 L 850 550 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />

              {/* Water Labels */}
              <text x="440" y="340" fill="#8a7c58" dark:fill-slate-500 fontSize="12" fontStyle="italic" opacity="0.6">Arabian Sea</text>
              <text x="610" y="320" fill="#8a7c58" dark:fill-slate-500 fontSize="12" fontStyle="italic" opacity="0.6">Bay of Bengal</text>
              <text x="490" y="470" fill="#8a7c58" dark:fill-slate-500 fontSize="14" fontStyle="italic" fontWeight="bold" opacity="0.5">INDIAN OCEAN</text>
              <text x="750" y="270" fill="#8a7c58" dark:fill-slate-500 fontSize="11" fontStyle="italic" opacity="0.6">South China Sea</text>

              {/* ================= STRATEGIC CONNECTIVITY CORRIDOR ARCS ================= */}
              {/* 1. IMEC Corridor */}
              <g className="cursor-pointer group" onClick={() => setSelectedNodeId("imec-corridor")}>
                <path
                  d="M 515 265 Q 450 260 422 226 L 380 200 L 340 180 L 290 130"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeDasharray="6 4"
                  className="transition-all hover:stroke-width-5"
                />
                <circle cx="400" cy="210" r="4" fill="#10b981" />
                <text x="360" y="190" fill="#047857" dark:fill-emerald-400 fontSize="9.5" fontWeight="bold">IMEC Corridor</text>
              </g>

              {/* 2. INSTC Corridor */}
              <g className="cursor-pointer group" onClick={() => setSelectedNodeId("instc-corridor")}>
                <path
                  d="M 515 265 Q 470 250 448 242 L 440 180 L 450 120 L 460 70"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3.5"
                  strokeDasharray="5 4"
                  className="transition-all hover:stroke-width-5"
                />
                <text x="445" y="100" fill="#4338ca" dark:fill-indigo-400 fontSize="9.5" fontWeight="bold">INSTC (to Moscow)</text>
              </g>

              {/* 3. Kaladan Corridor */}
              <g className="cursor-pointer group" onClick={() => setSelectedNodeId("kaladan-corridor")}>
                <path
                  d="M 620 240 Q 640 255 672 268"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="4 3"
                />
                <text x="635" y="275" fill="#b45309" dark:fill-amber-400 fontSize="8.5" fontWeight="bold">Kaladan</text>
              </g>

              {/* ================= NODES / MARKERS ================= */}
              {filteredNodes.map((node) => {
                const isSelected = node.id === activeNode.id;
                const isPort = node.category === "port";
                const isChoke = node.category === "chokepoint";

                // Marker visual styling
                const fillColor = isPort ? "#b8863b" : isChoke ? "#ef4444" : "#10b981";

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-150 group"
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Pulsing ring on selected node */}
                    {isSelected && (
                      <circle
                        cx={node.coords.x}
                        cy={node.coords.y}
                        r="14"
                        fill="none"
                        stroke={fillColor}
                        strokeWidth="2"
                        opacity="0.8"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer hover halo */}
                    <circle
                      cx={node.coords.x}
                      cy={node.coords.y}
                      r={isSelected ? "9" : "6.5"}
                      fill={fillColor}
                      stroke="#ffffff"
                      strokeWidth="1.8"
                      className="transition-all group-hover:r-8 shadow-md"
                    />

                    {/* Small inner dot */}
                    <circle cx={node.coords.x} cy={node.coords.y} r="2" fill="#ffffff" />

                    {/* Node label text */}
                    <text
                      x={node.coords.x + 9}
                      y={node.coords.y + 3.5}
                      fontSize={isSelected ? "11" : "9"}
                      fontWeight={isSelected ? "bold" : "normal"}
                      className={`select-none pointer-events-none ${
                        isSelected
                          ? "fill-[#1f2937] dark:fill-slate-100 font-bold"
                          : "fill-[#4a4432] dark:fill-slate-300"
                      }`}
                    >
                      {node.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Overlay */}
            {hoveredNode && (
              <div
                className="absolute pointer-events-none z-20 px-3 py-1.5 rounded-lg shadow-lg border text-[11.5px] font-sans bg-white/95 dark:bg-slate-900/95 border-[#e0d6bd] dark:border-slate-700 text-[#1f2937] dark:text-slate-100"
                style={{
                  left: `${Math.min(hoveredNode.coords.x / 10, 75)}%`,
                  top: `${Math.max((hoveredNode.coords.y / 5.6) - 12, 5)}%`,
                }}
              >
                <div className="font-bold flex items-center gap-1">
                  <span>{hoveredNode.category === "port" ? "⚓" : hoveredNode.category === "chokepoint" ? "🌊" : "🛣️"}</span>
                  {hoveredNode.name}
                </div>
                <div className="text-[10px] text-[#8a7c58] dark:text-slate-400">{hoveredNode.region} · {hoveredNode.countryOrBody}</div>
              </div>
            )}
          </div>

          {/* Map Legend Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-[#eee7d6] dark:border-slate-800 text-[11px] text-[#6b624a] dark:text-slate-400 font-sans">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b8863b] inline-block" />
                Strategic Port / Base
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block" />
                Maritime Chokepoint
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3.5 h-1 bg-[#10b981] inline-block rounded" />
                Corridor (IMEC/INSTC)
              </span>
            </div>
            <span className="text-[10.5px] text-[#a89a72] dark:text-slate-500">Source: MEA &amp; Naval Hydrographic Office</span>
          </div>
        </div>

        {/* Right Column: Deep Strategic Inspection Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            {/* Header info */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Pill tone={activeNode.category === "port" ? "navy" : activeNode.category === "chokepoint" ? "default" : "green"}>
                    {activeNode.category.toUpperCase()}
                  </Pill>
                  <span className="text-[11px] text-[#8a7c58] dark:text-slate-400">{activeNode.region}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-[#1f2937] dark:text-slate-100 mt-1">
                  {activeNode.name}
                </h2>
                <div className="flex items-center gap-1 text-[12px] text-[#8a7c58] dark:text-slate-400 mt-0.5">
                  <MapPin size={12} className="text-[#b8863b]" />
                  <span>{activeNode.countryOrBody}</span>
                  <span className="text-[10.5px] font-mono ml-2 text-slate-400">
                    ({activeNode.latLon.lat.toFixed(2)}°, {activeNode.latLon.lon.toFixed(2)}°)
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Significance */}
            <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800">
              <SectionLabel>Geopolitical &amp; Maritime Significance</SectionLabel>
              <p className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed mt-1">
                {activeNode.strategicSignificance}
              </p>
            </div>

            {/* India's Strategic Relevance */}
            <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800">
              <SectionLabel>Strategic Importance to India</SectionLabel>
              <p className="text-[13px] text-[#3b3527] dark:text-slate-300 leading-relaxed mt-1">
                {activeNode.indiaRelevance}
              </p>
            </div>

            {/* Latest Status */}
            <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800 bg-[#fbf8ef] dark:bg-slate-800/40 p-3 rounded-xl border border-[#eedfc0] dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#b8863b] dark:text-amber-400">
                <ShieldAlert size={14} /> Latest Operational Status (2024–2026)
              </div>
              <p className="text-[12.5px] text-[#4a4432] dark:text-slate-300 leading-relaxed mt-1">
                {activeNode.latestStatus}
              </p>
            </div>

            {/* High-Yield Prelims Takeaways */}
            <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800">
              <SectionLabel>UPSC Prelims High-Yield Facts</SectionLabel>
              <ul className="mt-1 space-y-1.5">
                {activeNode.prelimsFacts.map((fact, i) => (
                  <li key={i} className="text-[12px] text-[#4a4432] dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                    <span className="text-[#b8863b] font-bold mt-0.5">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons & link to full profile */}
            <div className="mt-5 pt-4 border-t border-[#eee7d6] dark:border-slate-800 flex items-center justify-between gap-3">
              <Stamp sourceKey={activeNode.sourceKey} />

              {activeNode.linkId && (
                <Link
                  to={
                    activeNode.category === "corridor" || activeNode.linkId === "imec" || activeNode.linkId === "instc"
                      ? `/ir/org/${activeNode.linkId}`
                      : `/ir/country/${activeNode.linkId}`
                  }
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-white bg-[#1f2937] hover:bg-[#b8863b] dark:bg-slate-800 dark:hover:bg-[#b8863b] px-3.5 py-1.5 rounded-lg transition-colors"
                >
                  Bilateral Profile <ChevronRight size={13} />
                </Link>
              )}
            </div>
          </div>

          {/* Quick Nodes List Selector */}
          <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a7c58] dark:text-slate-400 mb-2">
              Browse All Strategic Map Nodes ({filteredNodes.length})
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto scroll-thin pr-1">
              {filteredNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  className={`text-left text-[11.5px] p-2 rounded-lg border transition-colors flex items-center justify-between ${
                    n.id === activeNode.id
                      ? "bg-[#b8863b]/10 dark:bg-amber-950/40 border-[#b8863b] text-[#1f2937] dark:text-slate-100 font-semibold"
                      : "bg-[#fcfaf5] dark:bg-slate-800/60 border-[#e8dfcb] dark:border-slate-700/60 text-[#5b5340] dark:text-slate-300 hover:bg-[#f3ede0] dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="truncate pr-1">
                    {n.category === "port" ? "⚓ " : n.category === "chokepoint" ? "🌊 " : "🛣️ "}
                    {n.name.split(" ")[0]}
                  </span>
                  <ChevronRight size={11} className="text-[#a89a72] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
