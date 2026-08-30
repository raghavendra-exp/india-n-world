import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Download } from "lucide-react";
import { SCHEMES } from "../data/schemes";
import { COUNTRIES } from "../data/countries";
import { ORGANISATIONS } from "../data/organisations";
import { SectionLabel } from "../components/ui";
import { exportAllData } from "../lib/storage";
import type { Bookmarks, NoteMap } from "../lib/hooks";

export default function Saved({
  bookmarks,
  notes,
  toggleBookmark,
}: {
  bookmarks: Bookmarks;
  notes: NoteMap;
  toggleBookmark: (kind: keyof Bookmarks, id: string) => void;
}) {
  const navigate = useNavigate();
  const noteEntries = Object.entries(notes).filter(([, v]) => v && v.trim());

  const downloadExport = () => {
    const data = exportAllData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `upsc-hub-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="font-serif text-2xl mb-1">Saved & Notes</h1>
          <p className="text-[13px] text-[#8a7c58]">Everything here lives in your browser's local storage — nothing leaves your device.</p>
        </div>
        <button onClick={downloadExport} className="shrink-0 text-[12px] px-3 py-2 rounded-full border border-[#e0d6bd] bg-white flex items-center gap-1.5 hover:border-[#b8863b]">
          <Download size={13} /> Export data
        </button>
      </div>

      <SectionLabel>Bookmarked schemes ({bookmarks.schemes.length})</SectionLabel>
      <div className="space-y-1.5 mb-6">
        {bookmarks.schemes.length === 0 && <p className="text-[12.5px] text-[#8a7c58]">None yet.</p>}
        {bookmarks.schemes.map((id) => {
          const s = SCHEMES.find((x) => x.id === id);
          if (!s) return null;
          return <SavedRow key={id} title={s.name} onOpen={() => navigate(`/schemes/${id}`)} onRemove={() => toggleBookmark("schemes", id)} />;
        })}
      </div>

      <SectionLabel>Bookmarked countries ({bookmarks.countries.length})</SectionLabel>
      <div className="space-y-1.5 mb-6">
        {bookmarks.countries.length === 0 && <p className="text-[12.5px] text-[#8a7c58]">None yet.</p>}
        {bookmarks.countries.map((id) => {
          const c = COUNTRIES.find((x) => x.id === id);
          if (!c) return null;
          return <SavedRow key={id} title={c.name} onOpen={() => navigate(`/ir/country/${id}`)} onRemove={() => toggleBookmark("countries", id)} />;
        })}
      </div>

      <SectionLabel>Bookmarked organisations ({bookmarks.orgs.length})</SectionLabel>
      <div className="space-y-1.5 mb-6">
        {bookmarks.orgs.length === 0 && <p className="text-[12.5px] text-[#8a7c58]">None yet.</p>}
        {bookmarks.orgs.map((id) => {
          const o = ORGANISATIONS.find((x) => x.id === id);
          if (!o) return null;
          return <SavedRow key={id} title={o.name} onOpen={() => navigate(`/ir/org/${id}`)} onRemove={() => toggleBookmark("orgs", id)} />;
        })}
      </div>

      <SectionLabel>My notes ({noteEntries.length})</SectionLabel>
      <div className="space-y-2">
        {noteEntries.length === 0 && <p className="text-[12.5px] text-[#8a7c58]">No notes yet — add one from any scheme, country or organisation page.</p>}
        {noteEntries.map(([key, text]) => (
          <div key={key} className="bg-white border border-[#e0d6bd] rounded-lg p-3">
            <div className="text-[11px] text-[#8a7c58] mb-1">{key.replace(":", " → ")}</div>
            <p className="text-[12.5px] text-[#3b3527] whitespace-pre-line">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SavedRow({ title, onOpen, onRemove }: { title: string; onOpen: () => void; onRemove: () => void }) {
  return (
    <div className="flex items-center justify-between bg-white border border-[#e0d6bd] rounded-lg px-3.5 py-2">
      <button onClick={onOpen} className="text-[13px] text-left hover:text-[#b8863b]">
        {title}
      </button>
      <button onClick={onRemove} className="text-[#c9bd9c] hover:text-[#8a4b1f]">
        <Trash2 size={14} />
      </button>
    </div>
  );
}
