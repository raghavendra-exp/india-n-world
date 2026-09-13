import React, { useMemo, useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  ScrollText,
  Globe2,
  ListChecks,
  PenLine,
  RotateCcw,
  Bookmark,
  Search,
  X,
  Menu,
  Compass,
  Newspaper,
  Sun,
  Moon,
  Command,
  Anchor,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MapPin,
  LucideIcon,
} from "lucide-react";
import { useBookmarks, useNotes, useProgress } from "./lib/hooks";
import { SCHEMES } from "./data/schemes";
import { COUNTRIES } from "./data/countries";
import { ORGANISATIONS } from "./data/organisations";
import { DOCTRINES } from "./data/doctrines";
import { CURRENT_AFFAIRS } from "./data/currentAffairs";
import { MAP_NODES } from "./data/mapNodes";
import { MCQS } from "./data/mcqs";
import { MAINS_QUESTIONS } from "./data/mains";
import { MiniCard, SectionLabel, Pill } from "./components/ui";

import Dashboard from "./pages/Dashboard";
import MapLab from "./pages/MapLab";
import { SchemesList, SchemeDetail } from "./pages/Schemes";
import { IRHome, CountryDetail, OrgDetail } from "./pages/IR";
import { DoctrinesList, DoctrineDetail } from "./pages/Doctrines";
import CurrentAffairs from "./pages/CurrentAffairs";
import PrelimsLab from "./pages/Prelims";
import MainsLab from "./pages/Mains";
import Revision from "./pages/Revision";
import Saved from "./pages/Saved";

interface NavGroup {
  group: string;
  items: { path: string; label: string; icon: LucideIcon }[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    group: "Geopolitics & Strategy",
    items: [
      { path: "/", label: "Dashboard", icon: LayoutDashboard },
      { path: "/map", label: "Strategic Map Lab", icon: Compass },
      { path: "/ir", label: "Int'l Relations", icon: Globe2 },
      { path: "/doctrines", label: "Doctrines & Strategy", icon: ShieldCheck },
      { path: "/current-affairs", label: "Current Affairs", icon: Newspaper },
    ],
  },
  {
    group: "Governance & Policies",
    items: [{ path: "/schemes", label: "Govt Schemes", icon: ScrollText }],
  },
  {
    group: "UPSC Exam Labs",
    items: [
      { path: "/prelims", label: "Prelims Lab (MCQs)", icon: ListChecks },
      { path: "/mains", label: "Mains Answer Lab", icon: PenLine },
    ],
  },
  {
    group: "Revision & Vault",
    items: [
      { path: "/revision", label: "Revision Vault", icon: RotateCcw },
      { path: "/saved", label: "Saved & Notes", icon: Bookmark },
    ],
  },
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [spotlightQuery, setSpotlightQuery] = useState("");

  // Dark Mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Global Keyboard Shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSpotlightOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const { bookmarks, toggleBookmark } = useBookmarks();
  const { notes, saveNote } = useNotes();
  const { progress, recordQuizAttempt, recordMainsAttempt, markRevisionSeen } = useProgress();

  return (
    <div className="min-h-screen w-full flex font-serif bg-[#f7f3e8] dark:bg-[#0b0f19] text-[#2b2a24] dark:text-[#e2e8f0] transition-colors duration-200">
      {/* Sidebar (Desktop & Slide-out Mobile) */}
      <aside
        className={`fixed lg:static z-30 top-0 left-0 h-full w-64 bg-[#1f2937] dark:bg-[#0f172a] text-[#e9e4d4] flex flex-col font-sans transition-transform duration-200 border-r border-[#374151] dark:border-slate-800 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand Header */}
        <div className="px-5 py-5 border-b border-[#374151] dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#b8863b] flex items-center justify-center font-bold text-[#1f2937] font-serif shadow-sm">
              क
            </div>
            <div>
              <div className="font-serif text-[16px] leading-tight font-bold tracking-tight text-white">
                India &amp; The World
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#a3ab8c] mt-0.5 font-sans">
                UPSC CSE Knowledge Hub
              </div>
            </div>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-white p-1"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Search Shortcut in Drawer */}
        <div className="px-3 pt-3">
          <button
            onClick={() => {
              setMenuOpen(false);
              setSpotlightOpen(true);
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#2d3748] dark:bg-slate-800/80 hover:bg-[#374151] text-[#a0aec0] text-[12.5px] transition-colors border border-slate-700/60"
          >
            <span className="flex items-center gap-2">
              <Search size={14} className="text-[#b8863b]" />
              <span>Search Atlas...</span>
            </span>
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 font-mono">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Categorized Navigation */}
        <nav className="flex-1 py-3 px-3 space-y-4 overflow-y-auto scroll-thin">
          {NAV_GROUPS.map((grp) => (
            <div key={grp.group}>
              <div className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#818cf8] dark:text-amber-500/90 mb-1">
                {grp.group}
              </div>
              <div className="space-y-0.5">
                {grp.items.map((item) => {
                  const Icon = item.icon;
                  const active =
                    location.pathname === item.path ||
                    (item.path !== "/" && location.pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-[#b8863b] text-white dark:text-slate-950 font-semibold shadow-sm"
                          : "text-[#cfd0c4] hover:bg-[#2d3748] dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <Icon size={15} /> {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-4 py-3.5 border-t border-[#374151] dark:border-slate-800 flex items-center justify-between text-[11px] text-[#8b93a3]">
          <span>Verified Sept 2026</span>
          <button
            onClick={() => setIsDark((p) => !p)}
            className="flex items-center gap-1.5 text-xs text-[#b8863b] hover:text-amber-300 transition-colors"
            title="Toggle theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0">
        {/* Top Header */}
        <header className="font-sans sticky top-0 z-10 bg-[#f7f3e8]/95 dark:bg-[#0b0f19]/95 backdrop-blur border-b border-[#e0d6bd] dark:border-slate-800 px-4 lg:px-8 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden p-2 rounded-lg text-[#5b5340] dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
            <Link to="/" className="lg:hidden flex items-center gap-1.5">
              <span className="w-6 h-6 rounded bg-[#b8863b] text-white flex items-center justify-center text-xs font-serif font-bold">
                क
              </span>
              <span className="font-serif text-sm font-bold truncate">India &amp; The World</span>
            </Link>
          </div>

          {/* Center Search Trigger */}
          <div className="flex-1 max-w-xl mx-2">
            <button
              onClick={() => setSpotlightOpen(true)}
              className="w-full bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-full pl-3.5 pr-3 py-1.5 text-[13px] text-left text-[#8a7c58] dark:text-slate-400 flex items-center justify-between hover:border-[#b8863b] dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <span className="flex items-center gap-2 truncate">
                <Search size={14} className="text-[#b8863b]" />
                <span className="truncate">Search 30 countries, 22 orgs, 20 map nodes, schemes...</span>
              </span>
              <kbd className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#f4efe2] dark:bg-slate-800 text-[#8a7c58] dark:text-slate-300 font-mono border border-[#e0d6bd] dark:border-slate-700">
                Ctrl+K
              </kbd>
            </button>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark((p) => !p)}
              className="p-2 rounded-full border border-[#e0d6bd] dark:border-slate-800 text-[#5b5340] dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              title={isDark ? "Switch to Day Parchment" : "Switch to Night Atlas"}
            >
              {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* Page Content View */}
        <main className="flex-1 px-4 lg:px-8 py-6 max-w-6xl w-full mx-auto font-sans">
          <Routes>
            <Route path="/" element={<Dashboard progress={progress} bookmarks={bookmarks} />} />
            <Route path="/map" element={<MapLab />} />
            <Route path="/current-affairs" element={<CurrentAffairs />} />
            <Route path="/schemes" element={<SchemesList bookmarks={bookmarks} toggleBookmark={toggleBookmark} />} />
            <Route
              path="/schemes/:id"
              element={<SchemeDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />}
            />
            <Route path="/ir" element={<IRHome bookmarks={bookmarks} toggleBookmark={toggleBookmark} />} />
            <Route
              path="/ir/country/:id"
              element={<CountryDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />}
            />
            <Route
              path="/ir/org/:id"
              element={<OrgDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />}
            />
            <Route path="/doctrines" element={<DoctrinesList bookmarks={bookmarks} toggleBookmark={toggleBookmark} />} />
            <Route
              path="/doctrines/:id"
              element={<DoctrineDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />}
            />
            <Route path="/prelims" element={<PrelimsLab recordQuizAttempt={recordQuizAttempt} progress={progress} />} />
            <Route path="/mains" element={<MainsLab recordMainsAttempt={recordMainsAttempt} />} />
            <Route path="/revision" element={<Revision markRevisionSeen={markRevisionSeen} progress={progress} />} />
            <Route path="/saved" element={<Saved bookmarks={bookmarks} notes={notes} toggleBookmark={toggleBookmark} />} />
          </Routes>
        </main>
      </div>

      {/* Sticky Mobile Bottom Navigation Ribbon */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-[#e0d6bd] dark:border-slate-800 flex items-center justify-around py-1.5 px-2 shadow-lg">
        <Link
          to="/"
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium p-1 ${
            location.pathname === "/" ? "text-[#b8863b] font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          <LayoutDashboard size={18} />
          <span>Home</span>
        </Link>
        <Link
          to="/map"
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium p-1 ${
            location.pathname === "/map" ? "text-[#b8863b] font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          <Compass size={18} />
          <span>Map Lab</span>
        </Link>
        <button
          onClick={() => setSpotlightOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[10px] font-medium p-1 text-[#b8863b]"
        >
          <div className="w-8 h-8 -mt-3.5 rounded-full bg-[#b8863b] text-white flex items-center justify-center shadow-md">
            <Search size={16} />
          </div>
          <span className="font-semibold">Search</span>
        </button>
        <Link
          to="/ir"
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium p-1 ${
            location.pathname.startsWith("/ir") ? "text-[#b8863b] font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          <Globe2 size={18} />
          <span>IR Hub</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[10px] font-medium p-1 text-slate-600 dark:text-slate-400"
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>
      </div>

      {/* Spotlight Search Modal */}
      {spotlightOpen && (
        <SpotlightModal
          query={spotlightQuery}
          setQuery={setSpotlightQuery}
          onClose={() => setSpotlightOpen(false)}
          onNavigate={(path) => {
            setSpotlightOpen(false);
            setSpotlightQuery("");
            navigate(path);
          }}
        />
      )}
    </div>
  );
}

function SpotlightModal({
  query,
  setQuery,
  onClose,
  onNavigate,
}: {
  query: string;
  setQuery: (q: string) => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return null;
    return {
      countries: COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          c.trade.toLowerCase().includes(q) ||
          c.defence.toLowerCase().includes(q)
      ).slice(0, 5),
      orgs: ORGANISATIONS.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.purpose.toLowerCase().includes(q) ||
          o.members.some((m) => m.toLowerCase().includes(q))
      ).slice(0, 5),
      mapNodes: MAP_NODES.filter(
        (n) =>
          n.name.toLowerCase().includes(q) ||
          n.region.toLowerCase().includes(q) ||
          n.countryOrBody.toLowerCase().includes(q) ||
          n.strategicSignificance.toLowerCase().includes(q)
      ).slice(0, 5),
      doctrines: DOCTRINES.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.summary.toLowerCase().includes(q) ||
          d.announcedBy.toLowerCase().includes(q)
      ).slice(0, 4),
      schemes: SCHEMES.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.sector.toLowerCase().includes(q) ||
          s.ministry.toLowerCase().includes(q) ||
          s.objective.toLowerCase().includes(q)
      ).slice(0, 5),
      currentAffairs: CURRENT_AFFAIRS.filter(
        (ca) =>
          ca.title.toLowerCase().includes(q) ||
          ca.category.toLowerCase().includes(q) ||
          ca.summary.toLowerCase().includes(q)
      ).slice(0, 4),
      mcqs: MCQS.filter(
        (m) =>
          m.topic.toLowerCase().includes(q) ||
          m.question.toLowerCase().includes(q) ||
          m.explanation.toLowerCase().includes(q)
      ).slice(0, 3),
      mains: MAINS_QUESTIONS.filter(
        (mq) =>
          mq.topic.toLowerCase().includes(q) ||
          mq.question.toLowerCase().includes(q) ||
          mq.keywords.some((k) => k.toLowerCase().includes(q))
      ).slice(0, 3),
    };
  }, [q]);

  const totalHits = results
    ? results.countries.length +
      results.orgs.length +
      results.mapNodes.length +
      results.doctrines.length +
      results.schemes.length +
      results.currentAffairs.length +
      results.mcqs.length +
      results.mains.length
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-[#e0d6bd] dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#eee7d6] dark:border-slate-800 flex items-center gap-3">
          <Search size={18} className="text-[#b8863b] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries, chokepoints, ports, schemes, doctrines, PYQs..."
            className="w-full text-[15px] bg-transparent text-[#1f2937] dark:text-slate-100 placeholder-[#8a7c58] dark:placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-[#f3ede0] dark:bg-slate-800 text-[#5b5340] dark:text-slate-300 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto scroll-thin flex-1 space-y-4 text-left">
          {!q && (
            <div className="py-8 text-center text-[13px] text-[#8a7c58] dark:text-slate-400">
              <p>Type keywords like <span className="font-semibold text-[#b8863b]">"Chabahar"</span>, <span className="font-semibold text-[#b8863b]">"Malacca"</span>, <span className="font-semibold text-[#b8863b]">"Green Hydrogen"</span>, or <span className="font-semibold text-[#b8863b]">"I2U2"</span></p>
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {["IMEC", "Agalega", "Gujral", "PM MITRA", "Indonesia", "FATF", "Red Sea"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#f4efe2] dark:bg-slate-800 hover:bg-[#e8dfcb] text-[#5b5340] dark:text-slate-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && totalHits === 0 && (
            <div className="py-8 text-center text-[13px] text-[#8a7c58] dark:text-slate-400">
              No matching records found for "<strong>{query}</strong>". Try a broader query.
            </div>
          )}

          {results && results.countries.length > 0 && (
            <div>
              <SectionLabel>Bilateral Countries</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.countries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onNavigate(`/ir/country/${c.id}`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group"
                  >
                    <div className="font-bold text-[13.5px] text-[#1f2937] dark:text-slate-100 flex items-center justify-between">
                      <span>{c.name}</span>
                      <ChevronRight size={13} className="text-[#a89a72] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#8a7c58] dark:text-slate-400 mt-0.5">{c.region} · Capital: {c.capital}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.mapNodes.length > 0 && (
            <div>
              <SectionLabel>Strategic Ports &amp; Chokepoints (Map Lab)</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.mapNodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => onNavigate(`/map`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group"
                  >
                    <div className="font-bold text-[13.5px] text-[#1f2937] dark:text-slate-100 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{n.category === "port" ? "⚓" : n.category === "chokepoint" ? "🌊" : "🛣️"}</span>
                        {n.name}
                      </span>
                      <ChevronRight size={13} className="text-[#a89a72] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#8a7c58] dark:text-slate-400 mt-0.5">{n.region} · {n.countryOrBody}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.orgs.length > 0 && (
            <div>
              <SectionLabel>International Organisations &amp; Groupings</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.orgs.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => onNavigate(`/ir/org/${o.id}`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group"
                  >
                    <div className="font-bold text-[13.5px] text-[#1f2937] dark:text-slate-100 flex items-center justify-between">
                      <span>{o.name}</span>
                      <ChevronRight size={13} className="text-[#a89a72] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#8a7c58] dark:text-slate-400 mt-0.5 truncate">{o.purpose}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.doctrines.length > 0 && (
            <div>
              <SectionLabel>Foreign Policy Doctrines</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.doctrines.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => onNavigate(`/doctrines/${d.id}`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group"
                  >
                    <div className="font-bold text-[13.5px] text-[#1f2937] dark:text-slate-100 flex items-center justify-between">
                      <span>{d.name}</span>
                      <ChevronRight size={13} className="text-[#a89a72] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#8a7c58] dark:text-slate-400 mt-0.5 truncate">{d.period} · {d.announcedBy}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.schemes.length > 0 && (
            <div>
              <SectionLabel>Flagship Government Schemes</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.schemes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onNavigate(`/schemes/${s.id}`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group"
                  >
                    <div className="font-bold text-[13.5px] text-[#1f2937] dark:text-slate-100 flex items-center justify-between">
                      <span>{s.name}</span>
                      <ChevronRight size={13} className="text-[#a89a72] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#8a7c58] dark:text-slate-400 mt-0.5">{s.ministry} · {s.sector}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.currentAffairs.length > 0 && (
            <div>
              <SectionLabel>Current Affairs</SectionLabel>
              <div className="space-y-1.5 mt-1">
                {results.currentAffairs.map((ca) => (
                  <button
                    key={ca.id}
                    onClick={() => onNavigate(`/current-affairs`)}
                    className="w-full p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-[13px] text-[#1f2937] dark:text-slate-100">{ca.title}</div>
                      <div className="text-[11px] text-[#8a7c58] dark:text-slate-400">{ca.date} · {ca.category}</div>
                    </div>
                    <ChevronRight size={13} className="text-[#a89a72] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && (results.mcqs.length > 0 || results.mains.length > 0) && (
            <div>
              <SectionLabel>Exam Practice Labs</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-2 mt-1">
                {results.mcqs.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onNavigate(`/prelims`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#b8863b]">Prelims MCQ · {m.topic}</div>
                    <div className="text-[12px] text-[#1f2937] dark:text-slate-200 mt-0.5 line-clamp-2">{m.question}</div>
                  </button>
                ))}
                {results.mains.map((mq) => (
                  <button
                    key={mq.id}
                    onClick={() => onNavigate(`/mains`)}
                    className="p-2.5 rounded-xl border border-[#e0d6bd] dark:border-slate-800 hover:border-[#b8863b] bg-[#fcfaf5] dark:bg-slate-800/60 text-left transition-all"
                  >
                    <div className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">Mains Question · {mq.topic}</div>
                    <div className="text-[12px] text-[#1f2937] dark:text-slate-200 mt-0.5 line-clamp-2">{mq.question}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#fbf8ef] dark:bg-slate-950 border-t border-[#eee7d6] dark:border-slate-800 flex items-center justify-between text-[11px] text-[#8a7c58] dark:text-slate-400">
          <span>Navigate with mouse or touch · Press <kbd className="font-mono px-1 py-0.5 bg-white dark:bg-slate-800 rounded border">ESC</kbd> to close</span>
          {totalHits > 0 && <span className="font-semibold text-[#b8863b]">{totalHits} match{totalHits !== 1 ? "es" : ""} found</span>}
        </div>
      </div>
    </div>
  );
}
