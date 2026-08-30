import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard, ScrollText, Globe2, ListChecks, PenLine, RotateCcw,
  Bookmark, Search, X, Menu,
} from "lucide-react";
import { useBookmarks, useNotes, useProgress } from "./lib/hooks";
import { SCHEMES } from "./data/schemes";
import { COUNTRIES } from "./data/countries";
import { ORGANISATIONS } from "./data/organisations";
import { MiniCard, SectionLabel } from "./components/ui";

import Dashboard from "./pages/Dashboard";
import { SchemesList, SchemeDetail } from "./pages/Schemes";
import { IRHome, CountryDetail, OrgDetail } from "./pages/IR";
import PrelimsLab from "./pages/Prelims";
import MainsLab from "./pages/Mains";
import Revision from "./pages/Revision";
import Saved from "./pages/Saved";

const NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/schemes", label: "Schemes", icon: ScrollText },
  { path: "/ir", label: "Int'l Relations", icon: Globe2 },
  { path: "/prelims", label: "Prelims Lab", icon: ListChecks },
  { path: "/mains", label: "Mains Lab", icon: PenLine },
  { path: "/revision", label: "Revision", icon: RotateCcw },
  { path: "/saved", label: "Saved & Notes", icon: Bookmark },
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { bookmarks, toggleBookmark } = useBookmarks();
  const { notes, saveNote } = useNotes();
  const { progress, recordQuizAttempt, recordMainsAttempt, markRevisionSeen } = useProgress();

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return {
      s: SCHEMES.filter((x) => x.name.toLowerCase().includes(q) || x.sector.toLowerCase().includes(q) || x.ministry.toLowerCase().includes(q)),
      c: COUNTRIES.filter((x) => x.name.toLowerCase().includes(q) || x.region.toLowerCase().includes(q)),
      o: ORGANISATIONS.filter((x) => x.name.toLowerCase().includes(q)),
    };
  }, [query]);

  const goSearch = (path: string) => {
    setQuery("");
    navigate(path);
  };

  return (
    <div className="min-h-screen w-full flex font-serif" style={{ background: "#f7f3e8", color: "#2b2a24" }}>
      <aside
        className={`fixed lg:static z-30 top-0 left-0 h-full w-64 bg-[#1f2937] text-[#e9e4d4] flex flex-col font-sans transition-transform duration-200 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-5 py-6 border-b border-[#374151]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#b8863b] flex items-center justify-center font-bold text-[#1f2937] font-serif">क</div>
            <div>
              <div className="font-serif text-[16px] leading-none tracking-tight">UPSC Knowledge Hub</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#a3ab8c] mt-1">Schemes · IR · Prelims · Mains</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scroll-thin">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition-colors ${
                  active ? "bg-[#b8863b] text-[#1f2937]" : "text-[#cfd0c4] hover:bg-[#2d3748]"
                }`}
              >
                <Icon size={16} /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-5 py-4 border-t border-[#374151] text-[10.5px] text-[#8b93a3] leading-relaxed">
          Facts are sourced against official portals; time-sensitive items carry a verification flag. Confirm against the linked source before an exam answer.
        </div>
      </aside>
      {menuOpen && <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setMenuOpen(false)} />}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="font-sans sticky top-0 z-10 bg-[#f7f3e8]/95 backdrop-blur border-b border-[#e0d6bd] px-4 lg:px-8 py-3 flex items-center gap-3">
          <button className="lg:hidden p-2 -ml-2" onClick={() => setMenuOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="relative flex-1 max-w-xl">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a89a72]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search schemes, countries, organisations..."
              className="w-full bg-white border border-[#e0d6bd] rounded-full pl-9 pr-8 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#b8863b]/40"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89a72]">
                <X size={14} />
              </button>
            )}
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 py-6 max-w-6xl w-full mx-auto font-sans">
          {searchResults ? (
            <SearchResults results={searchResults} query={query} onGo={goSearch} />
          ) : (
            <Routes>
              <Route path="/" element={<Dashboard progress={progress} bookmarks={bookmarks} />} />
              <Route path="/schemes" element={<SchemesList bookmarks={bookmarks} toggleBookmark={toggleBookmark} />} />
              <Route path="/schemes/:id" element={<SchemeDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />} />
              <Route path="/ir" element={<IRHome bookmarks={bookmarks} toggleBookmark={toggleBookmark} />} />
              <Route path="/ir/country/:id" element={<CountryDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />} />
              <Route path="/ir/org/:id" element={<OrgDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} notes={notes} saveNote={saveNote} />} />
              <Route path="/prelims" element={<PrelimsLab recordQuizAttempt={recordQuizAttempt} progress={progress} />} />
              <Route path="/mains" element={<MainsLab recordMainsAttempt={recordMainsAttempt} />} />
              <Route path="/revision" element={<Revision markRevisionSeen={markRevisionSeen} progress={progress} />} />
              <Route path="/saved" element={<Saved bookmarks={bookmarks} notes={notes} toggleBookmark={toggleBookmark} />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
}

function SearchResults({
  results,
  query,
  onGo,
}: {
  results: { s: typeof SCHEMES; c: typeof COUNTRIES; o: typeof ORGANISATIONS };
  query: string;
  onGo: (path: string) => void;
}) {
  const { s, c, o } = results;
  const total = s.length + c.length + o.length;
  return (
    <div>
      <h2 className="font-serif text-xl mb-1">Search results for "{query}"</h2>
      <p className="text-[13px] text-[#8a7c58] mb-6">
        {total} match{total !== 1 ? "es" : ""} found
      </p>
      {total === 0 && <p className="text-[13px] text-[#8a7c58]">No matches. Try a different keyword.</p>}
      {s.length > 0 && (
        <div className="mb-6">
          <SectionLabel>Schemes</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            {s.map((x) => (
              <MiniCard key={x.id} title={x.name} sub={x.ministry} onClick={() => onGo(`/schemes/${x.id}`)} />
            ))}
          </div>
        </div>
      )}
      {c.length > 0 && (
        <div className="mb-6">
          <SectionLabel>Countries</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            {c.map((x) => (
              <MiniCard key={x.id} title={x.name} sub={x.region} onClick={() => onGo(`/ir/country/${x.id}`)} />
            ))}
          </div>
        </div>
      )}
      {o.length > 0 && (
        <div className="mb-6">
          <SectionLabel>Organisations</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            {o.map((x) => (
              <MiniCard key={x.id} title={x.name} sub={x.purpose.slice(0, 60) + "..."} onClick={() => onGo(`/ir/org/${x.id}`)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
