import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bookmark, ChevronRight, MapPin, Coins, Target, Layers, Users, AlertTriangle, Compass, X } from "lucide-react";
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
  const [countryRegion, setCountryRegion] = useState<string>("all");
  const [filterQuery, setFilterQuery] = useState<string>("");

  const filteredCountries = COUNTRIES.filter((c) => {
    const matchRegion =
      countryRegion === "all" ||
      (countryRegion === "neighbourhood" && (c.region.includes("Neighbourhood") || ["nepal", "bangladesh", "srilanka", "maldives", "bhutan", "myanmar", "china"].includes(c.id))) ||
      (countryRegion === "major-powers" && ["usa", "russia", "japan", "france", "uk", "germany"].includes(c.id)) ||
      (countryRegion === "indopacific" && (c.region.includes("Southeast Asia") || c.region.includes("Indo-Pacific") || ["australia", "vietnam", "indonesia", "singapore"].includes(c.id))) ||
      (countryRegion === "westasia" && (c.region.includes("West Asia") || c.region.includes("Gulf") || ["israel", "uae", "iran", "saudiarabia", "oman", "egypt"].includes(c.id))) ||
      (countryRegion === "africa-indianocean" && (c.region.includes("Africa") || c.region.includes("Indian Ocean") || ["mauritius", "seychelles", "southafrica"].includes(c.id))) ||
      (countryRegion === "other" && ["kazakhstan", "italy", "canada", "brazil"].includes(c.id));

    const matchQuery =
      !filterQuery.trim() ||
      c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.capital.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.relationship.toLowerCase().includes(filterQuery.toLowerCase());

    return matchRegion && matchQuery;
  });

  const filteredOrgs = ORGANISATIONS.filter((o) => {
    return (
      !filterQuery.trim() ||
      o.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      o.purpose.toLowerCase().includes(filterQuery.toLowerCase()) ||
      o.members.some((m) => m.toLowerCase().includes(filterQuery.toLowerCase()))
    );
  });

  return (
    <div>
      {/* Top Banner introducing Strategic Map Lab */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#1f2937] to-[#111827] text-white border border-slate-700/80 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8863b]">
            <Compass size={15} /> Visual Interactive Spatial Atlas
          </div>
          <h3 className="font-serif text-lg font-bold mt-1 text-white">
            Explore Strategic Overseas Ports, Chokepoints &amp; Corridors
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            View Chabahar, Duqm, Sabang, Agalega, Malacca, Hormuz, IMEC &amp; INSTC on an interactive vector map.
          </p>
        </div>
        <button
          onClick={() => navigate("/map")}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b8863b] hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-colors"
        >
          Open Strategic Map Lab <ChevronRight size={14} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl mb-1 text-[#1f2937] dark:text-slate-100">India &amp; The World</h1>
          <p className="text-[13px] text-[#8a7c58] dark:text-slate-400">
            30 bilateral partner profiles and 22 multilateral organisations, updated with 2024–2026 developments.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-1.5 self-start sm:self-auto bg-white dark:bg-slate-900 p-1 rounded-xl border border-[#e0d6bd] dark:border-slate-800">
          {(
            [
              ["countries", `Bilateral Relations (${COUNTRIES.length})`],
              ["orgs", `Groupings & Orgs (${ORGANISATIONS.length})`],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => {
                setTab(id);
                setFilterQuery("");
              }}
              className={`text-[12.5px] px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                tab === id
                  ? "bg-[#1f2937] text-white dark:bg-[#b8863b] dark:text-slate-950 font-semibold shadow-sm"
                  : "text-[#5b5340] dark:text-slate-400 hover:bg-[#f3ede0] dark:hover:bg-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Region & Keyword Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
        {tab === "countries" && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              ["all", "All (30)"],
              ["neighbourhood", "Neighbourhood (7)"],
              ["major-powers", "Major Powers (6)"],
              ["indopacific", "Indo-Pacific & ASEAN (4)"],
              ["westasia", "West Asia & Gulf (6)"],
              ["africa-indianocean", "Africa & Indian Ocean (3)"],
              ["other", "Central Asia, Americas & Europe (4)"],
            ].map(([regId, regLabel]) => (
              <button
                key={regId}
                onClick={() => setCountryRegion(regId)}
                className={`px-3 py-1 rounded-full border text-[11.5px] transition-colors ${
                  countryRegion === regId
                    ? "bg-[#b8863b] text-white border-[#b8863b] font-medium"
                    : "bg-white dark:bg-slate-900 border-[#e0d6bd] dark:border-slate-800 text-[#5b5340] dark:text-slate-300 hover:border-[#b8863b]"
                }`}
              >
                {regLabel}
              </button>
            ))}
          </div>
        )}

        {/* Live Filter Search input */}
        <div className="relative w-full md:w-64 self-end">
          <input
            type="text"
            placeholder={tab === "countries" ? "Search country or capital..." : "Search organisation..."}
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full text-xs pl-3 pr-8 py-1.5 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#b8863b]"
          />
          {filterQuery && (
            <button onClick={() => setFilterQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {tab === "countries" ? (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredCountries.map((c) => (
            <div key={c.id} className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:border-[#b8863b] dark:hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <button onClick={() => navigate(`/ir/country/${c.id}`)} className="text-left font-serif text-[16px] font-bold text-[#1f2937] dark:text-slate-100 hover:text-[#b8863b] flex items-center gap-1.5">
                    <MapPin size={15} className="text-[#b8863b] shrink-0" />
                    {c.name}
                  </button>
                  <button onClick={() => toggleBookmark("countries", c.id)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                    <Bookmark size={16} className={bookmarks.countries.includes(c.id) ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c] dark:text-slate-600"} />
                  </button>
                </div>
                <div className="text-[12px] text-[#8a7c58] dark:text-slate-400 mt-1">
                  {c.region} · Capital: <span className="font-semibold text-slate-700 dark:text-slate-300">{c.capital}</span>
                </div>
                <p className="text-[12.5px] text-[#4a4432] dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">{c.relationship}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-[#8a7c58] dark:text-slate-400">{c.organisations.slice(0, 2).join(", ")}</span>
                <button onClick={() => navigate(`/ir/country/${c.id}`)} className="text-[12px] font-semibold text-[#b8863b] flex items-center gap-0.5 hover:underline">
                  Full profile <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ))}
          {filteredCountries.length === 0 && (
            <div className="col-span-2 py-8 text-center text-xs text-slate-500">
              No bilateral partners match your filter.
            </div>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredOrgs.map((o) => (
            <div key={o.id} className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:border-[#b8863b] dark:hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <button onClick={() => navigate(`/ir/org/${o.id}`)} className="text-left font-serif text-[16px] font-bold text-[#1f2937] dark:text-slate-100 hover:text-[#b8863b]">
                    {o.name}
                  </button>
                  <button onClick={() => toggleBookmark("orgs", o.id)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                    <Bookmark size={16} className={bookmarks.orgs.includes(o.id) ? "fill-[#b8863b] text-[#b8863b]" : "text-[#c9bd9c] dark:text-slate-600"} />
                  </button>
                </div>
                <div className="text-[12px] text-[#8a7c58] dark:text-slate-400 mt-1">Est. {o.established} · HQ: {o.headquarters}</div>
                <p className="text-[12.5px] text-[#4a4432] dark:text-slate-300 mt-2 leading-relaxed line-clamp-2">{o.purpose}</p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {o.members.slice(0, 4).map((m, i) => (
                    <Pill key={i}>{m}</Pill>
                  ))}
                  {o.members.length > 4 && <Pill>+{o.members.length - 4} more</Pill>}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eee7d6] dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-[#8a7c58] dark:text-slate-400">{o.indiaStatus}</span>
                <button onClick={() => navigate(`/ir/org/${o.id}`)} className="text-[12px] font-semibold text-[#b8863b] flex items-center gap-0.5 hover:underline">
                  Full profile <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ))}
          {filteredOrgs.length === 0 && (
            <div className="col-span-2 py-8 text-center text-xs text-slate-500">
              No organisations match your search query.
            </div>
          )}
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
