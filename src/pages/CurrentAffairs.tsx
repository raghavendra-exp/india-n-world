import React, { useState } from "react";
import { CURRENT_AFFAIRS } from "../data/currentAffairs";
import { Pill, SectionLabel, Stamp, TagBlock } from "../components/ui";
import { Newspaper, ChevronDown, ChevronUp } from "lucide-react";

const CATEGORIES = ["All", ...Array.from(new Set(CURRENT_AFFAIRS.map((c) => c.category)))];

export default function CurrentAffairs() {
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(CURRENT_AFFAIRS[0]?.id ?? null);
  const filtered = category === "All" ? CURRENT_AFFAIRS : CURRENT_AFFAIRS.filter((c) => c.category === category);

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 mb-1">
        <Newspaper size={20} className="text-[#b8863b]" />
        <h1 className="font-serif text-2xl">Current Affairs — Static Bridge</h1>
      </div>
      <p className="text-[13px] text-[#8a7c58] mb-5">
        Verified, dated developments in India's foreign policy and governance — each one traced back to the static
        syllabus topic it connects to, with a Prelims fact-set and a Mains angle. No invented events; every entry
        links to an official source.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
              category === c ? "bg-[#1f2937] text-white border-[#1f2937]" : "bg-white border-[#e0d6bd] text-[#5b5340] hover:border-[#b8863b]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((ca) => {
          const open = openId === ca.id;
          return (
            <div key={ca.id} className="bg-white border border-[#e0d6bd] rounded-xl overflow-hidden">
              <button onClick={() => setOpenId(open ? null : ca.id)} className="w-full text-left p-4 flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <Pill tone="navy">{ca.category}</Pill>
                    <Pill>{ca.date}</Pill>
                  </div>
                  <div className="font-serif text-[15.5px] leading-snug">{ca.title}</div>
                  {!open && <p className="text-[12.5px] text-[#8a7c58] mt-1.5 line-clamp-2">{ca.summary}</p>}
                </div>
                {open ? <ChevronUp size={18} className="text-[#8a7c58] shrink-0 mt-1" /> : <ChevronDown size={18} className="text-[#8a7c58] shrink-0 mt-1" />}
              </button>

              {open && (
                <div className="px-4 pb-5 pt-1 border-t border-[#eee7d6]">
                  <Field label="Why in news?">{ca.summary}</Field>
                  <Field label="Background">{ca.background}</Field>
                  <Field label="What changed?">{ca.whatChanged}</Field>
                  <Field label="Why India cares">{ca.indiaInterest}</Field>

                  <TagBlock title="Static syllabus links" items={ca.staticLinks} />

                  <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-lg p-4 mt-4">
                    <SectionLabel>UPSC Prelims facts</SectionLabel>
                    <ul className="space-y-1.5 mt-1">
                      {ca.prelims.map((p, i) => (
                        <li key={i} className="text-[13px] text-[#3b3527] flex gap-2">
                          <span className="text-[#b8863b]">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <SectionLabel>
                      <span className="mt-3 block">UPSC Mains angle</span>
                    </SectionLabel>
                    <p className="text-[13px] text-[#3b3527] italic">"{ca.mains}"</p>
                  </div>

                  <div className="mt-4">
                    <Stamp sourceKey={ca.sourceKey} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <div className="text-[10.5px] uppercase tracking-wide text-[#a89a72] mb-0.5">{label}</div>
      <p className="text-[13px] text-[#3b3527] leading-relaxed">{children}</p>
    </div>
  );
}
