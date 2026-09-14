import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import {
  Compass,
  ExternalLink,
  ChevronRight,
  Search,
  Layers,
  MapPin,
  ShieldAlert,
  BookOpen,
  Maximize2,
  Navigation,
} from "lucide-react";
import { MAP_NODES } from "../data/mapNodes";
import type { MapNode } from "../data/types";
import { Pill, SectionLabel, Stamp } from "../components/ui";

// Tile providers: Google Hybrid Satellite, Google Physical Terrain, Google Roadmap, OpenStreetMap
const TILE_PROVIDERS = {
  googleHybrid: {
    id: "googleHybrid",
    name: "Google Satellite Hybrid",
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    attribution: "&copy; Google Maps Imagery",
    badge: "Satellite + Borders",
  },
  googleTerrain: {
    id: "googleTerrain",
    name: "Google Physical / Terrain",
    url: "https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    attribution: "&copy; Google Maps Terrain",
    badge: "3D Relief & Elevation",
  },
  googleRoadmap: {
    id: "googleRoadmap",
    name: "Google Standard Roadmap",
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    attribution: "&copy; Google Maps Vector",
    badge: "Vector Roadmap",
  },
  osm: {
    id: "osm",
    name: "OpenStreetMap Carto",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
    badge: "Open Source",
  },
};

type TileProviderKey = keyof typeof TILE_PROVIDERS;

const REGION_PRESETS = [
  { id: "all", label: "Indian Ocean & Eurasia", center: [18.0, 70.0] as [number, number], zoom: 4 },
  { id: "westasia", label: "Persian Gulf & Red Sea (Sankalp)", center: [20.0, 48.0] as [number, number], zoom: 5 },
  { id: "malacca", label: "Malacca & Southeast Asia", center: [4.0, 98.0] as [number, number], zoom: 5 },
  { id: "centralasia", label: "Central Asia & INSTC", center: [37.0, 56.0] as [number, number], zoom: 5 },
  { id: "swio", label: "South-West Indian Ocean (SAGAR)", center: [-10.0, 55.0] as [number, number], zoom: 5 },
];

export default function MapLab() {
  const [mapMode, setMapMode] = useState<"google" | "schematic">("google");
  const [selectedProvider, setSelectedProvider] = useState<TileProviderKey>("googleHybrid");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "port" | "chokepoint" | "corridor">("all");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("chabahar");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredNode, setHoveredNode] = useState<MapNode | null>(null);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

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

  // Initialize Leaflet Map
  useEffect(() => {
    if (mapMode !== "google" || !mapContainerRef.current) return;

    if (!leafletMapRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [18.0, 70.0],
        zoom: 4,
        minZoom: 3,
        maxZoom: 17,
        zoomControl: true,
      });

      const provider = TILE_PROVIDERS[selectedProvider];
      const tileLayer = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: 18,
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);

      leafletMapRef.current = map;
      tileLayerRef.current = tileLayer;
      markersLayerRef.current = markersGroup;

      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }
  }, [mapMode]);

  // Handle Tile Provider Switch
  useEffect(() => {
    if (!leafletMapRef.current) return;
    const map = leafletMapRef.current;
    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }
    const provider = TILE_PROVIDERS[selectedProvider];
    const newTileLayer = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: 18,
    }).addTo(map);
    tileLayerRef.current = newTileLayer;
  }, [selectedProvider]);

  // Render & Update Leaflet Markers
  useEffect(() => {
    if (!leafletMapRef.current || !markersLayerRef.current) return;
    const markersGroup = markersLayerRef.current;
    markersGroup.clearLayers();

    filteredNodes.forEach((node) => {
      const isSelected = node.id === selectedNodeId;
      const isPort = node.category === "port";
      const isChoke = node.category === "chokepoint";
      
      const badgeColor = isPort ? "#b8863b" : isChoke ? "#ef4444" : "#10b981";
      const badgeIcon = isPort ? "⚓" : isChoke ? "🌊" : "🛣️";

      const customIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: `
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${isSelected ? "34px" : "26px"};
            height: ${isSelected ? "34px" : "26px"};
            border-radius: 9999px;
            background: ${badgeColor};
            color: #ffffff;
            font-size: ${isSelected ? "15px" : "12px"};
            border: 2.5px solid #ffffff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: all 0.2s ease;
            ${isSelected ? "outline: 3px solid #facc15; outline-offset: 2px;" : ""}
          ">
            ${badgeIcon}
          </div>
        `,
        iconSize: [0, 0],
      });

      const marker = L.marker([node.latLon.lat, node.latLon.lon], { icon: customIcon });

      marker.on("click", () => {
        setSelectedNodeId(node.id);
        if (leafletMapRef.current) {
          leafletMapRef.current.flyTo([node.latLon.lat, node.latLon.lon], 6, {
            duration: 1.0,
          });
        }
      });

      marker.bindTooltip(`
        <div style="font-family: inherit; font-size: 11.5px; line-height: 1.3; padding: 2px;">
          <strong>${badgeIcon} ${node.name}</strong><br/>
          <span style="color: #64748b; font-size: 10px;">${node.countryOrBody}</span>
        </div>
      `, { direction: "top", offset: [0, -16] });

      markersGroup.addLayer(marker);
    });
  }, [filteredNodes, selectedNodeId]);

  // Pan to node on selection change
  const handleSelectNode = (node: MapNode) => {
    setSelectedNodeId(node.id);
    if (leafletMapRef.current && mapMode === "google") {
      leafletMapRef.current.flyTo([node.latLon.lat, node.latLon.lon], 6, {
        duration: 1.0,
      });
    }
  };

  const handleRegionPreset = (preset: (typeof REGION_PRESETS)[0]) => {
    if (leafletMapRef.current && mapMode === "google") {
      leafletMapRef.current.flyTo(preset.center, preset.zoom, { duration: 1.2 });
    }
  };

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
            High-resolution satellite, terrain &amp; schematic spatial mapping of India&apos;s overseas ports, global maritime chokepoints, and connectivity corridors.
          </p>
        </div>

        {/* Mode Switcher: Google Live vs Schematic */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="flex items-center bg-[#f0e9d7] dark:bg-slate-800 p-1 rounded-xl border border-[#dfd3b9] dark:border-slate-700">
            <button
              onClick={() => setMapMode("google")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
                mapMode === "google"
                  ? "bg-[#b8863b] text-white shadow-sm"
                  : "text-[#5b5340] dark:text-slate-300 hover:text-black dark:hover:text-white"
              }`}
            >
              <Navigation size={13} /> Google Maps (Satellite &amp; Terrain)
            </button>
            <button
              onClick={() => setMapMode("schematic")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
                mapMode === "schematic"
                  ? "bg-[#b8863b] text-white shadow-sm"
                  : "text-[#5b5340] dark:text-slate-300 hover:text-black dark:hover:text-white"
              }`}
            >
              <Layers size={13} /> Schematic Arc Atlas
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Quick Jump Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 p-3 rounded-2xl shadow-sm">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
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

        {/* Search bar */}
        <div className="relative w-full sm:w-60">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#a89a72]" />
          <input
            type="text"
            placeholder="Search port, strait, country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-[12px] pl-8 pr-2 py-1.5 bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#b8863b]"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Map Canvas Column (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm relative overflow-hidden">
          {/* Map Layer Toolbar (When Google mode is active) */}
          {mapMode === "google" && (
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[#eee7d6] dark:border-slate-800">
              {/* Tile layer selector */}
              <div className="flex items-center gap-1 text-[11px] font-medium">
                <span className="text-[#8a7c58] dark:text-slate-400 mr-1 flex items-center gap-1">
                  <Layers size={13} /> Layer:
                </span>
                {(Object.keys(TILE_PROVIDERS) as TileProviderKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProvider(key)}
                    className={`px-2 py-1 rounded text-[11px] transition-colors ${
                      selectedProvider === key
                        ? "bg-[#1f2937] text-white font-semibold dark:bg-slate-700"
                        : "bg-[#f4efe2] dark:bg-slate-800 text-[#5b5340] dark:text-slate-400 hover:bg-[#eadecc]"
                    }`}
                  >
                    {TILE_PROVIDERS[key].badge}
                  </button>
                ))}
              </div>

              {/* 1-Click Satellite Region Presets */}
              <div className="flex items-center gap-1 text-[10.5px]">
                <span className="text-[#8a7c58] dark:text-slate-400 mr-0.5">Jump:</span>
                {REGION_PRESETS.slice(1).map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleRegionPreset(preset)}
                    className="px-1.5 py-0.5 bg-[#fbf8ef] dark:bg-slate-800 border border-[#e8dfcb] dark:border-slate-700 rounded text-[#8a7c58] dark:text-slate-400 hover:border-[#b8863b] hover:text-[#b8863b]"
                  >
                    {preset.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Map Container */}
          <div className="relative w-full rounded-xl overflow-hidden border border-[#e8dfcb] dark:border-slate-800">
            {mapMode === "google" ? (
              <div
                ref={mapContainerRef}
                className="w-full h-[540px] z-10"
                style={{ background: "#0f172a" }}
              />
            ) : (
              /* Schematic SVG Map */
              <svg
                viewBox="0 0 1000 560"
                className="w-full h-auto select-none bg-[#f4efe2] dark:bg-[#0f172a]"
                style={{ minHeight: "360px", maxHeight: "560px" }}
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#e2d7c0] dark:text-slate-800/60" />
                  </pattern>
                </defs>

                <rect width="1000" height="560" fill="url(#grid)" />

                <line x1="0" y1="280" x2="1000" y2="280" stroke="#b8863b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                <text x="20" y="275" fill="#b8863b" fontSize="9" fontFamily="monospace" opacity="0.8">Tropic of Cancer (23.5° N)</text>

                <line x1="0" y1="410" x2="1000" y2="410" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                <text x="20" y="405" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.8">Equator (0°)</text>

                {/* Simplified Continents */}
                <path d="M 230 140 L 320 140 L 350 180 L 320 220 L 350 320 L 380 340 L 360 440 L 330 500 L 280 540 L 250 540 L 220 460 L 190 320 L 170 240 L 220 180 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />
                <path d="M 370 420 L 390 440 L 375 510 L 355 480 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1" />
                <path d="M 325 150 L 390 150 L 440 210 L 440 250 L 410 300 L 345 320 L 340 250 L 325 210 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />
                <path d="M 230 50 L 520 40 L 750 40 L 800 120 L 720 180 L 600 160 L 520 180 L 470 170 L 410 140 L 330 110 L 270 90 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />
                <path d="M 400 150 L 500 160 L 510 220 L 440 245 L 430 220 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />
                <path d="M 500 170 L 540 180 L 590 190 L 640 220 L 630 260 L 590 320 L 560 380 L 540 380 L 500 290 L 480 230 Z" className="fill-[#ded1ba] dark:fill-amber-950/30 stroke-[#b8863b] dark:stroke-amber-600/70" strokeWidth="1.6" />
                <ellipse cx="565" cy="385" rx="9" ry="14" className="fill-[#ded1ba] dark:fill-amber-950/30 stroke-[#b8863b]" strokeWidth="1" />
                <path d="M 640 200 L 730 200 L 760 250 L 740 320 L 710 360 L 685 300 L 660 250 Z" className="fill-[#e7ded0] dark:fill-slate-800/80 stroke-[#d2c2a3] dark:stroke-slate-700/80" strokeWidth="1.2" />
                <path d="M 680 370 L 745 425 L 730 435 L 670 385 Z" className="fill-[#e7ded0] dark:fill-slate-800 stroke-[#d2c2a3] dark:stroke-slate-700" strokeWidth="1" />
                <path d="M 740 430 L 820 440 L 810 450 L 745 440 Z" className="fill-[#e7ded0] dark:fill-slate-800 stroke-[#d2c2a3] dark:stroke-slate-700" strokeWidth="1" />

                {/* IMEC Corridor */}
                <g className="cursor-pointer group" onClick={() => handleSelectNode(MAP_NODES.find(n => n.id === "imec-corridor") || MAP_NODES[0])}>
                  <path d="M 515 265 Q 450 260 422 226 L 380 200 L 340 180 L 290 130" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="6 4" />
                  <text x="360" y="190" fill="#047857" fontSize="9.5" fontWeight="bold">IMEC Corridor</text>
                </g>

                {/* INSTC Corridor */}
                <g className="cursor-pointer group" onClick={() => handleSelectNode(MAP_NODES.find(n => n.id === "instc-corridor") || MAP_NODES[0])}>
                  <path d="M 515 265 Q 470 250 448 242 L 440 180 L 450 120 L 460 70" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeDasharray="5 4" />
                  <text x="445" y="100" fill="#4338ca" fontSize="9.5" fontWeight="bold">INSTC (to Moscow)</text>
                </g>

                {/* Schematic Markers */}
                {filteredNodes.map((node) => {
                  const isSelected = node.id === activeNode.id;
                  const isPort = node.category === "port";
                  const isChoke = node.category === "chokepoint";
                  const fillColor = isPort ? "#b8863b" : isChoke ? "#ef4444" : "#10b981";

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer group"
                      onClick={() => handleSelectNode(node)}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {isSelected && (
                        <circle cx={node.coords.x} cy={node.coords.y} r="14" fill="none" stroke={fillColor} strokeWidth="2" opacity="0.8" className="animate-ping" />
                      )}
                      <circle cx={node.coords.x} cy={node.coords.y} r={isSelected ? "9" : "6.5"} fill={fillColor} stroke="#ffffff" strokeWidth="1.8" />
                      <circle cx={node.coords.x} cy={node.coords.y} r="2" fill="#ffffff" />
                      <text
                        x={node.coords.x + 9}
                        y={node.coords.y + 3.5}
                        fontSize={isSelected ? "11" : "9"}
                        fontWeight={isSelected ? "bold" : "normal"}
                        className={isSelected ? "fill-[#1f2937] dark:fill-slate-100 font-bold" : "fill-[#4a4432] dark:fill-slate-300"}
                      >
                        {node.name.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}

            {/* Hover Tooltip Overlay for Schematic Mode */}
            {mapMode === "schematic" && hoveredNode && (
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
                <div className="text-[10px] text-[#8a7c58] dark:text-slate-400">{hoveredNode.region} &middot; {hoveredNode.countryOrBody}</div>
              </div>
            )}
          </div>

          {/* Map Footer & 1-Click Google Maps & Earth launch */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-[#eee7d6] dark:border-slate-800 text-[11px] text-[#6b624a] dark:text-slate-400">
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
                Corridor
              </span>
            </div>

            {/* Direct Google External Links */}
            <div className="flex items-center gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${activeNode.latLon.lat},${activeNode.latLon.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#b8863b] hover:underline"
              >
                Google Maps <ExternalLink size={10} />
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a
                href={`https://earth.google.com/web/search/${activeNode.latLon.lat},${activeNode.latLon.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Google Earth 3D <Maximize2 size={10} />
              </a>
            </div>
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
                    ({activeNode.latLon.lat.toFixed(2)}&deg;, {activeNode.latLon.lon.toFixed(2)}&deg;)
                  </span>
                </div>
              </div>
            </div>

            {/* Standard Exam Literature Reference */}
            <div className="mt-3 p-2.5 rounded-xl bg-[#f7f2e7] dark:bg-slate-800/60 border border-[#e4d7be] dark:border-slate-700/70 text-[11.5px] text-[#5b5340] dark:text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-[#b8863b] text-[11px] uppercase tracking-wide">
                <BookOpen size={12} /> Standard Literature Citation
              </div>
              <p className="mt-0.5 leading-relaxed">
                Referenced in <em>Pavneet Singh (Ch. Indian Ocean Diplomacy)</em> &amp; <em>Pushpesh Pant (India&apos;s Maritime Security Arc)</em>. Aligns with MEA Policy Division reports.
              </p>
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
                <ShieldAlert size={14} /> Latest Operational Status (2024&ndash;2026)
              </div>
              <p className="text-[12.5px] text-[#4a4432] dark:text-slate-300 leading-relaxed mt-1">
                {activeNode.latestStatus}
              </p>
            </div>

            {/* High-Yield Prelims Takeaways */}
            <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800">
              <SectionLabel>UPSC / UPPSC High-Yield Prelims Facts</SectionLabel>
              <ul className="mt-1 space-y-1.5">
                {activeNode.prelimsFacts.map((fact, i) => (
                  <li key={i} className="text-[12px] text-[#4a4432] dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                    <span className="text-[#b8863b] font-bold mt-0.5">&bull;</span>
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
                  onClick={() => handleSelectNode(n)}
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
