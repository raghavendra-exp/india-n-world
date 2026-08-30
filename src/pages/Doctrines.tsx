import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bookmark, ChevronRight, Compass } from "lucide-react";
import { DOCTRINES } from "../data/doctrines";
import { Pill, BackBtn, FactBox, Block, TagBlock, SectionLabel, Stamp, NoteEditor } from "../components/ui";
import type { Bookmarks, NoteMap } from "../lib/hooks";

export function DoctrinesList({
  bookmarks,
  toggleBookmark,
}: {
  bookmarks: Bookmarks;
  toggleBookmark: (kind: keyof Bookmarks, id: string) => void;
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-serif text-2xl mb-1">Foreign Policy Doctrines</h1>
      <p className="text-[13px] text-[#8a7c58] mb-5">
        The vision documents and guiding concepts behind India's foreign policy — from Panchsheel to MAHASAGAR — in roughly chronological order.
      </p>
      <div className="space-y-3">
        {DOCTRINES.map((d) => (
          <div key={d.id} className="bg-white border border-[#e0d6bd] rounded-xl p-4">
            <div className="flex items-start justify-between gap-2">
              <button onClick={() => navigate(`/doctrines/${d.id}`)} className="text-left font-serif text-[15.5px] hover:text-[#b8863b] flex items-center gap-1.5">
                <Compass size={14} className="text-[#b8863b] shrink-0" />
                {d.name}
              </button>
              <button onClick={() => toggleBookmark("doctrines", d.id)} className="shrink-0">
                <Bookmark size={16} className={bookmarks.doctrines.includes(d.id) ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
              </button>
            </div>
            <div className="text-[12px] text-[#8a7c58] mt-1">{d.period}</div>
            <p className="text-[12.5px] text-[#4a4432] mt-2 leading-relaxed line-clamp-2">{d.summary}</p>
            <button onClick={() => navigate(`/doctrines/${d.id}`)} className="text-[11.5px] font-medium text-[#b8863b] flex items-center gap-0.5 mt-2.5">
              Full brief <ChevronRight size={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DoctrineDetail({
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
  const d = DOCTRINES.find((x) => x.id === id);
  const [noteText, setNoteText] = useState(notes[`doctrine:${id}`] || "");
  useEffect(() => {
    setNoteText(notes[`doctrine:${id}`] || "");
  }, [id, notes]);

  if (!d) return <p className="text-[13px] text-[#8a7c58]">Doctrine not found.</p>;
  const bookmarked = bookmarks.doctrines.includes(id);

  return (
    <div className="max-w-3xl">
      <BackBtn onClick={() => navigate("/doctrines")} label="Foreign Policy Doctrines" />
      <div className="flex items-start justify-between gap-3 mt-3">
        <h1 className="font-serif text-2xl leading-tight">{d.name}</h1>
        <button onClick={() => toggleBookmark("doctrines", d.id)} className="shrink-0 mt-1">
          <Bookmark size={20} className={bookmarked ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <FactBox label="Period" value={d.period} />
        <FactBox label="Announced by" value={d.announcedBy} />
      </div>

      <Block title="Summary">{d.summary}</Block>
      <TagBlock title="Key ideas" items={d.keyIdeas} />
      <Block title="Evolution">{d.evolution}</Block>
      <Block title="Current relevance">{d.currentRelevance}</Block>

      <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-xl p-4 mt-6">
        <SectionLabel>UPSC Prelims facts</SectionLabel>
        <ul className="space-y-1.5 mt-1">
          {d.prelims.map((p, i) => (
            <li key={i} className="text-[13px] text-[#3b3527] flex gap-2">
              <span className="text-[#b8863b]">•</span>
              {p}
            </li>
          ))}
        </ul>
        <SectionLabel>
          <span className="mt-3 block">UPSC Mains angle</span>
        </SectionLabel>
        <p className="text-[13px] text-[#3b3527] italic">"{d.mains}"</p>
      </div>

      <div className="mt-5">
        <Stamp sourceKey={d.sourceKey} />
      </div>
      <NoteEditor value={noteText} onChange={setNoteText} onSave={() => saveNote(`doctrine:${id}`, noteText)} />
    </div>
  );
}
