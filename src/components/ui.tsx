import React from "react";
import { ArrowLeft, BadgeCheck, ExternalLink, Star, StickyNote, Check, AlertTriangle } from "lucide-react";
import { SOURCES } from "../data/sources";

export function Stamp({ sourceKey }: { sourceKey: string }) {
  const src = SOURCES[sourceKey];
  if (!src) return null;
  return (
    <a
      href={src.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#8a6d3b] bg-[#f3e8d0] border border-[#d9c295] rounded-full px-2.5 py-1 hover:bg-[#ecd9ad] transition-colors"
      title="Open official source"
    >
      <BadgeCheck size={12} /> {src.name} <ExternalLink size={10} />
    </a>
  );
}

export function VerifyBanner({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-[12px] text-[#8a4b1f] bg-[#fbeee0] border border-[#eccba4] rounded-lg px-3 py-2">
      <AlertTriangle size={14} className="mt-0.5 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

export function StarRating({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < n ? "fill-[#b8863b] text-[#b8863b]" : "text-[#d8cdb8]"} />
      ))}
    </span>
  );
}

export function Pill({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "navy" | "green" }) {
  const tones: Record<string, string> = {
    default: "bg-[#eee7d6] text-[#5b5340] border-[#ded2b3]",
    navy: "bg-[#e5e9f2] text-[#1f3a63] border-[#c4cfe6]",
    green: "bg-[#e3ede2] text-[#2c5c33] border-[#c3dcc4]",
  };
  return <span className={`inline-block text-[11px] font-medium border rounded-full px-2.5 py-0.5 ${tones[tone]}`}>{children}</span>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8a7c58] mb-1.5">{children}</div>;
}

export function FactBox({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e0d6bd] rounded-lg px-3.5 py-2.5">
      <div className="text-[10.5px] uppercase tracking-wide text-[#a89a72]">{label}</div>
      <div className="text-[13px] text-[#2b2a24] mt-0.5">{value}</div>
    </div>
  );
}

export function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <SectionLabel>{title}</SectionLabel>
      <p className="text-[13.5px] text-[#3b3527] leading-relaxed">{children}</p>
    </div>
  );
}

export function TagBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-5">
      <SectionLabel>{title}</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it, i) => (
          <Pill key={i}>{it}</Pill>
        ))}
      </div>
    </div>
  );
}

export function BackBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 text-[12.5px] text-[#8a7c58] hover:text-[#b8863b]">
      <ArrowLeft size={14} /> {label}
    </button>
  );
}

export function NoteEditor({ value, onChange, onSave }: { value: string; onChange: (v: string) => void; onSave: () => void }) {
  const [saved, setSaved] = React.useState(false);
  return (
    <div className="mt-6 mb-10 bg-white border border-[#e0d6bd] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2 text-[12.5px] font-semibold text-[#1f2937]">
        <StickyNote size={15} /> My notes
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setSaved(false);
        }}
        rows={3}
        placeholder="Jot a quick note for revision..."
        className="w-full text-[13px] border border-[#e0d6bd] rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#b8863b]/30"
      />
      <button
        onClick={() => {
          onSave();
          setSaved(true);
        }}
        className="text-[12px] mt-2 px-3 py-1.5 rounded-full bg-[#1f2937] text-white flex items-center gap-1.5"
      >
        <Check size={13} /> {saved ? "Saved" : "Save note"}
      </button>
    </div>
  );
}

export function MiniCard({ title, sub, onClick }: { title: string; sub: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-left bg-white border border-[#e0d6bd] rounded-xl px-4 py-3 hover:border-[#b8863b] hover:shadow-sm transition-all">
      <div className="font-serif text-[14.5px] leading-snug">{title}</div>
      <div className="text-[11.5px] text-[#8a7c58] mt-1">{sub}</div>
    </button>
  );
}

export function ScoreTile({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-3 text-center ${highlight ? "bg-[#1f2937] text-white" : "bg-[#fbf8ef] border border-[#e0d6bd]"}`}>
      <div className="font-serif text-xl">{value}</div>
      <div className={`text-[10.5px] uppercase tracking-wide mt-0.5 ${highlight ? "text-[#cfd0c4]" : "text-[#8a7c58]"}`}>{label}</div>
    </div>
  );
}
