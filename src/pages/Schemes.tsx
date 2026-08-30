import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bookmark, ChevronRight, GitCompare, X } from "lucide-react";
import { SCHEMES } from "../data/schemes";
import { Pill, StarRating, BackBtn, FactBox, Block, TagBlock, SectionLabel, Stamp, NoteEditor } from "../components/ui";
import type { Bookmarks, NoteMap } from "../lib/hooks";

export function SchemesList({
  bookmarks,
  toggleBookmark,
}: {
  bookmarks: Bookmarks;
  toggleBookmark: (kind: keyof Bookmarks, id: string) => void;
}) {
  const navigate = useNavigate();
  const [sector, setSector] = useState("All");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const sectors = ["All", ...Array.from(new Set(SCHEMES.map((s) => s.sector)))];
  const filtered = sector === "All" ? SCHEMES : SCHEMES.filter((s) => s.sector === sector);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev));
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <h1 className="font-serif text-2xl">Government Schemes</h1>
          <p className="text-[13px] text-[#8a7c58] mt-1">{SCHEMES.length} schemes · filter by sector, then compare up to 3</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setSector(s)}
              className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                sector === s ? "bg-[#1f2937] text-white border-[#1f2937]" : "bg-white border-[#e0d6bd] text-[#5b5340] hover:border-[#b8863b]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {compareIds.length > 0 && (
        <SchemeCompareBar ids={compareIds} onClear={() => setCompareIds([])} onRemove={(id) => setCompareIds((p) => p.filter((x) => x !== id))} />
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((s) => {
          const bookmarked = bookmarks.schemes.includes(s.id);
          const inCompare = compareIds.includes(s.id);
          return (
            <div key={s.id} className="bg-white border border-[#e0d6bd] rounded-xl p-4 flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <button onClick={() => navigate(`/schemes/${s.id}`)} className="text-left font-serif text-[15.5px] leading-snug hover:text-[#b8863b]">
                  {s.name}
                </button>
                <button onClick={() => toggleBookmark("schemes", s.id)} className="shrink-0">
                  <Bookmark size={16} className={bookmarked ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
                </button>
              </div>
              <div className="text-[12px] text-[#8a7c58] mt-1">
                {s.ministry} · Launched {s.launchYear}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <Pill tone="navy">{s.type}</Pill>
                <Pill>{s.sector}</Pill>
                {s.dbt && <Pill tone="green">DBT</Pill>}
              </div>
              <p className="text-[12.5px] text-[#4a4432] mt-2.5 leading-relaxed">{s.benefit}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#eee7d6]">
                <label className="flex items-center gap-1.5 text-[11px] text-[#8a7c58] cursor-pointer">
                  <input type="checkbox" checked={inCompare} onChange={() => toggleCompare(s.id)} className="accent-[#b8863b]" /> Compare
                </label>
                <button onClick={() => navigate(`/schemes/${s.id}`)} className="text-[11.5px] font-medium text-[#b8863b] flex items-center gap-0.5">
                  Full card <ChevronRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SchemeCompareBar({ ids, onClear, onRemove }: { ids: string[]; onClear: () => void; onRemove: (id: string) => void }) {
  const items = ids.map((id) => SCHEMES.find((s) => s.id === id)).filter(Boolean) as typeof SCHEMES;
  const rows: [string, (s: (typeof SCHEMES)[number]) => React.ReactNode][] = [
    ["Ministry", (s) => s.ministry],
    ["Launch year", (s) => s.launchYear],
    ["Type", (s) => s.type],
    ["Target", (s) => s.target],
    ["Benefit", (s) => s.benefit],
    ["Funding", (s) => s.funding],
    ["Prelims relevance", (s) => <StarRating n={s.prelimsRelevance} />],
    ["Mains relevance", (s) => <StarRating n={s.mainsRelevance} />],
  ];
  return (
    <div className="bg-white border-2 border-[#b8863b] rounded-xl p-4 mb-5 overflow-x-auto scroll-thin">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#1f2937]">
          <GitCompare size={15} /> Comparing {items.length} scheme{items.length !== 1 ? "s" : ""}
        </div>
        <button onClick={onClear} className="text-[11.5px] text-[#8a7c58]">
          Clear all
        </button>
      </div>
      <table className="min-w-full text-[12px] border-collapse">
        <thead>
          <tr>
            <th className="text-left py-1.5 pr-4 text-[#8a7c58] font-medium w-32"></th>
            {items.map((s) => (
              <th key={s.id} className="text-left py-1.5 px-3 font-serif text-[13px] font-normal align-top">
                <div className="flex items-start gap-1.5">
                  {s.name}
                  <button onClick={() => onRemove(s.id)} className="text-[#c9bd9c] hover:text-[#8a4b1f] mt-0.5">
                    <X size={12} />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, get]) => (
            <tr key={label} className="border-t border-[#eee7d6]">
              <td className="py-2 pr-4 text-[#8a7c58] align-top">{label}</td>
              {items.map((s) => (
                <td key={s.id} className="py-2 px-3 align-top text-[#3b3527]">
                  {get(s)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SchemeDetail({
  bookmarks,
  toggleBookmark,
  notes,
  saveNote,
}: {
  bookmarks: Bookmarks;
  toggleBookmark: (kind: keyof Bookmarks, id: string) => void;
  notes: NoteMap;
  saveNote: (id: string, text: string) => void;
}) {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const s = SCHEMES.find((x) => x.id === id);
  const [noteText, setNoteText] = useState(notes[`scheme:${id}`] || "");
  useEffect(() => {
    setNoteText(notes[`scheme:${id}`] || "");
  }, [id, notes]);

  if (!s) return <p className="text-[13px] text-[#8a7c58]">Scheme not found.</p>;
  const bookmarked = bookmarks.schemes.includes(id);

  return (
    <div className="max-w-3xl">
      <BackBtn onClick={() => navigate("/schemes")} label="All schemes" />
      <div className="flex items-start justify-between gap-3 mt-3">
        <h1 className="font-serif text-2xl leading-tight">{s.name}</h1>
        <button onClick={() => toggleBookmark("schemes", s.id)} className="shrink-0 mt-1">
          <Bookmark size={20} className={bookmarked ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        <Pill tone="navy">{s.type}</Pill>
        <Pill>{s.sector}</Pill>
        <Pill>{s.ministry}</Pill>
        {s.dbt && <Pill tone="green">DBT-enabled</Pill>}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <FactBox label="Launch year" value={s.launchYear} />
        <FactBox label="Funding pattern" value={s.funding} />
        <FactBox label="Target group" value={s.target} />
        <FactBox label="Core benefit" value={s.benefit} />
      </div>

      <Block title="Objective">{s.objective}</Block>
      <Block title="Implementation mechanism">{s.implementation}</Block>
      <Block title="Current status">{s.currentStatus}</Block>
      <div className="grid sm:grid-cols-2 gap-4">
        <Block title="Achievements">{s.achievements}</Block>
        <Block title="Challenges / criticism">{s.challenges}</Block>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-2">
        <TagBlock title="Convergence with" items={s.convergence} />
        <TagBlock title="SDGs" items={s.sdgs} />
        <TagBlock title="Constitutional links" items={s.constitutionalLinks} />
      </div>

      <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-xl p-4 mt-6">
        <SectionLabel>UPSC Prelims facts</SectionLabel>
        <ul className="space-y-1.5 mt-1">
          {s.prelims.map((p, i) => (
            <li key={i} className="text-[13px] text-[#3b3527] flex gap-2">
              <span className="text-[#b8863b]">•</span>
              {p}
            </li>
          ))}
        </ul>
        <SectionLabel>
          <span className="mt-3 block">UPSC Mains angle</span>
        </SectionLabel>
        <p className="text-[13px] text-[#3b3527] italic">"{s.mains}"</p>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-[11px] text-[#8a7c58]">Prelims relevance</span>
          <StarRating n={s.prelimsRelevance} />
          <span className="text-[11px] text-[#8a7c58] ml-2">Mains relevance</span>
          <StarRating n={s.mainsRelevance} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <Stamp sourceKey={s.sourceKey} />
        <span className="text-[11px] text-[#8a7c58]">Editorial relevance rating, not an official UPSC weightage.</span>
      </div>

      <NoteEditor value={noteText} onChange={setNoteText} onSave={() => saveNote(`scheme:${id}`, noteText)} />
    </div>
  );
}
