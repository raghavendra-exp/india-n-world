import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bookmark, ChevronRight, MapPin, Coins, Target, Layers, Users, AlertTriangle } from "lucide-react";
import { COUNTRIES } from "../data/countries";
import { ORGANISATIONS } from "../data/organisations";
import { Pill, BackBtn, FactBox, Block, TagBlock, SectionLabel, Stamp, NoteEditor, VerifyBanner } from "../components/ui";
import type { Bookmarks, NoteMap } from "../lib/hooks";

export function IRHome({
  bookmarks,
  toggleBookmark,
}: {
  bookmarks: Bookmarks;
  toggleBookmark: (kind: keyof Bookmarks, id: string) => void;
}) {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"countries" | "orgs">("countries");

  return (
    <div>
      <h1 className="font-serif text-2xl mb-1">India & The World</h1>
      <p className="text-[13px] text-[#8a7c58] mb-5">Bilateral profiles and multilateral groupings, each with a prelims fact-set and a mains angle.</p>
      <div className="flex gap-1.5 mb-5">
        {(
          [
            ["countries", "Bilateral Relations"],
            ["orgs", "Groupings & Organisations"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`text-[12.5px] px-3.5 py-1.5 rounded-full border ${
              tab === id ? "bg-[#1f2937] text-white border-[#1f2937]" : "bg-white border-[#e0d6bd] text-[#5b5340]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "countries" ? (
        <div className="grid md:grid-cols-2 gap-4">
          {COUNTRIES.map((c) => (
            <div key={c.id} className="bg-white border border-[#e0d6bd] rounded-xl p-4">
              <div className="flex items-start justify-between gap-2">
                <button onClick={() => navigate(`/ir/country/${c.id}`)} className="text-left font-serif text-[15.5px] hover:text-[#b8863b] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#b8863b]" />
                  {c.name}
                </button>
                <button onClick={() => toggleBookmark("countries", c.id)}>
                  <Bookmark size={16} className={bookmarks.countries.includes(c.id) ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
                </button>
              </div>
              <div className="text-[12px] text-[#8a7c58] mt-1">
                {c.region} · Capital: {c.capital}
              </div>
              <p className="text-[12.5px] text-[#4a4432] mt-2 leading-relaxed line-clamp-3">{c.relationship}</p>
              <button onClick={() => navigate(`/ir/country/${c.id}`)} className="text-[11.5px] font-medium text-[#b8863b] flex items-center gap-0.5 mt-2.5">
                Full profile <ChevronRight size={13} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {ORGANISATIONS.map((o) => (
            <div key={o.id} className="bg-white border border-[#e0d6bd] rounded-xl p-4">
              <div className="flex items-start justify-between gap-2">
                <button onClick={() => navigate(`/ir/org/${o.id}`)} className="text-left font-serif text-[15.5px] hover:text-[#b8863b]">
                  {o.name}
                </button>
                <button onClick={() => toggleBookmark("orgs", o.id)}>
                  <Bookmark size={16} className={bookmarks.orgs.includes(o.id) ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
                </button>
              </div>
              <div className="text-[12px] text-[#8a7c58] mt-1">Est. {o.established}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {o.members.slice(0, 5).map((m, i) => (
                  <Pill key={i}>{m}</Pill>
                ))}
                {o.members.length > 5 && <Pill>+{o.members.length - 5} more</Pill>}
              </div>
              <button onClick={() => navigate(`/ir/org/${o.id}`)} className="text-[11.5px] font-medium text-[#b8863b] flex items-center gap-0.5 mt-2.5">
                Full profile <ChevronRight size={13} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CountryDetail({
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
  const c = COUNTRIES.find((x) => x.id === id);
  const [noteText, setNoteText] = useState(notes[`country:${id}`] || "");
  useEffect(() => {
    setNoteText(notes[`country:${id}`] || "");
  }, [id, notes]);

  if (!c) return <p className="text-[13px] text-[#8a7c58]">Country not found.</p>;
  const bookmarked = bookmarks.countries.includes(id);
  const branches: [string, string, any][] = [
    ["Trade", c.trade, Coins],
    ["Defence", c.defence, Target],
    ["Technology", c.technology, Layers],
    ["Diaspora", c.diaspora, Users],
    ["Security", c.security, AlertTriangle],
  ];

  return (
    <div className="max-w-3xl">
      <BackBtn onClick={() => navigate("/ir")} label="India & The World" />
      <div className="flex items-start justify-between gap-3 mt-3">
        <div>
          <h1 className="font-serif text-2xl">India — {c.name}</h1>
          <div className="text-[12.5px] text-[#8a7c58] mt-1">
            {c.region} · Capital: {c.capital}
          </div>
        </div>
        <button onClick={() => toggleBookmark("countries", c.id)} className="shrink-0 mt-1">
          <Bookmark size={20} className={bookmarked ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
        </button>
      </div>

      <Block title="Relationship overview">{c.relationship}</Block>

      <div className="mt-5">
        <SectionLabel>Relationship matrix</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-3">
          {branches.map(([label, text, Icon]) => (
            <div key={label} className="bg-white border border-[#e0d6bd] rounded-lg p-3.5">
              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1f2937] mb-1">
                <Icon size={13} className="text-[#b8863b]" />
                {label}
              </div>
              <p className="text-[12px] text-[#4a4432] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <TagBlock title="Shared organisations" items={c.organisations} />
      <Block title="Strategic significance">{c.strategicSignificance}</Block>
      <Block title="Challenges">{c.challenges}</Block>

      <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-xl p-4 mt-6">
        <SectionLabel>UPSC Prelims facts</SectionLabel>
        <ul className="space-y-1.5 mt-1">
          {c.prelims.map((p, i) => (
            <li key={i} className="text-[13px] text-[#3b3527] flex gap-2">
              <span className="text-[#b8863b]">•</span>
              {p}
            </li>
          ))}
        </ul>
        <SectionLabel>
          <span className="mt-3 block">UPSC Mains angle</span>
        </SectionLabel>
        <p className="text-[13px] text-[#3b3527] italic">"{c.mains}"</p>
      </div>

      <div className="mt-5">
        <Stamp sourceKey={c.sourceKey} />
      </div>
      <NoteEditor value={noteText} onChange={setNoteText} onSave={() => saveNote(`country:${id}`, noteText)} />
    </div>
  );
}

export function OrgDetail({
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
  const o = ORGANISATIONS.find((x) => x.id === id);
  const [noteText, setNoteText] = useState(notes[`org:${id}`] || "");
  useEffect(() => {
    setNoteText(notes[`org:${id}`] || "");
  }, [id, notes]);

  if (!o) return <p className="text-[13px] text-[#8a7c58]">Organisation not found.</p>;
  const bookmarked = bookmarks.orgs.includes(id);

  return (
    <div className="max-w-3xl">
      <BackBtn onClick={() => navigate("/ir")} label="India & The World" />
      <div className="flex items-start justify-between gap-3 mt-3">
        <h1 className="font-serif text-2xl">{o.name}</h1>
        <button onClick={() => toggleBookmark("orgs", o.id)} className="shrink-0 mt-1">
          <Bookmark size={20} className={bookmarked ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c]"} />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <FactBox label="Established" value={o.established} />
        <FactBox label="Headquarters" value={o.headquarters} />
        <FactBox label="India's status" value={o.indiaStatus} />
        <FactBox label="Last verified" value={o.lastVerified} />
      </div>

      <div className="mt-5">
        <SectionLabel>Who is in it? — {o.members.length} listed</SectionLabel>
        <div className="flex flex-wrap gap-1.5">
          {o.members.map((m, i) => (
            <Pill key={i} tone="navy">
              {m}
            </Pill>
          ))}
        </div>
      </div>

      <Block title="Purpose">{o.purpose}</Block>
      <TagBlock title="Major initiatives" items={o.initiatives} />
      <Block title="India's role">{o.indiaRole}</Block>
      <Block title="Current issues">{o.currentIssues}</Block>

      <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-xl p-4 mt-6">
        <SectionLabel>UPSC Prelims facts</SectionLabel>
        <ul className="space-y-1.5 mt-1">
          {o.prelims.map((p, i) => (
            <li key={i} className="text-[13px] text-[#3b3527] flex gap-2">
              <span className="text-[#b8863b]">•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      {o.membershipUncertain && (
        <div className="mt-4">
          <VerifyBanner text="Membership of this grouping has changed recently — confirm the current full roster against the official source before quoting it." />
        </div>
      )}
      <div className="mt-5">
        <Stamp sourceKey={o.sourceKey} />
      </div>
      <NoteEditor value={noteText} onChange={setNoteText} onSave={() => saveNote(`org:${id}`, noteText)} />
    </div>
  );
}
