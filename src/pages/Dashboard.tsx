import React from "react";
import { Link } from "react-router-dom";
import { ScrollText, Globe2, ListChecks, PenLine, ChevronRight, Compass } from "lucide-react";
import { SCHEMES } from "../data/schemes";
import { COUNTRIES } from "../data/countries";
import { SectionLabel, VerifyBanner } from "../components/ui";
import type { Bookmarks, Progress } from "../lib/hooks";

export default function Dashboard({ progress, bookmarks }: { progress: Progress; bookmarks: Bookmarks }) {
  const quizCorrect = progress.quizAttempts.filter((a) => a.correct).length;
  const quizTotal = progress.quizAttempts.length;
  const accuracy = quizTotal ? Math.round((quizCorrect / quizTotal) * 100) : 0;
  const schemesTouched = new Set(progress.revisionSeen.filter((x) => x.startsWith("scheme:"))).size;
  const countriesTouched = new Set(progress.revisionSeen.filter((x) => x.startsWith("country:"))).size;
  const totalBookmarks = bookmarks.schemes.length + bookmarks.countries.length + bookmarks.orgs.length;

  const metrics = [
    { label: "Schemes explored", value: `${schemesTouched}/${SCHEMES.length}`, pct: Math.round((schemesTouched / SCHEMES.length) * 100) },
    { label: "Countries explored", value: `${countriesTouched}/${COUNTRIES.length}`, pct: Math.round((countriesTouched / COUNTRIES.length) * 100) },
    { label: "Prelims accuracy", value: quizTotal ? `${accuracy}%` : "—", pct: accuracy },
    { label: "Mains answers written", value: `${progress.mainsAttempts.length}`, pct: Math.min(100, progress.mainsAttempts.length * 20) },
  ];

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-serif text-2xl md:text-3xl leading-tight">Today's briefing</h1>
        <p className="text-[13px] text-[#8a7c58] mt-1.5">
          Schemes, foreign relations, prelims practice and mains structure — organised the way the syllabus actually connects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white border border-[#e0d6bd] rounded-xl p-4">
            <div className="text-[11px] uppercase tracking-wide text-[#8a7c58] mb-2">{m.label}</div>
            <div className="font-serif text-2xl mb-2">{m.value}</div>
            <div className="h-1.5 rounded-full bg-[#eee7d6] overflow-hidden">
              <div className="h-full bg-[#b8863b]" style={{ width: `${Math.min(100, m.pct)}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white border border-[#e0d6bd] rounded-xl p-5">
          <SectionLabel>Quick start</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <QuickAction icon={ScrollText} title="Browse schemes" desc="Filter by sector, ministry, funding, DBT" to="/schemes" />
            <QuickAction icon={Globe2} title="Country profile" desc="Bilateral relations, prelims + mains facts" to="/ir" />
            <QuickAction icon={Compass} title="Foreign policy doctrines" desc="Panchsheel to MAHASAGAR, with current relevance" to="/doctrines" />
            <QuickAction icon={ListChecks} title="Prelims Lab" desc="Statement-based MCQs with trap analysis" to="/prelims" />
            <QuickAction icon={PenLine} title="Mains Lab" desc="Timed answer writing with structure scoring" to="/mains" />
          </div>
        </div>
        <div className="bg-white border border-[#e0d6bd] rounded-xl p-5">
          <SectionLabel>Saved for revision</SectionLabel>
          {totalBookmarks === 0 ? (
            <p className="text-[12.5px] text-[#8a7c58] mt-2">Nothing bookmarked yet. Star a scheme, country or organisation to build your revision list.</p>
          ) : (
            <div className="mt-2 space-y-1.5">
              {bookmarks.schemes.slice(0, 3).map((id) => {
                const s = SCHEMES.find((x) => x.id === id);
                return (
                  s && (
                    <Link key={id} to={`/schemes/${id}`} className="block text-[12.5px] text-[#3b3527] hover:text-[#b8863b]">
                      → {s.name}
                    </Link>
                  )
                );
              })}
              {bookmarks.countries.slice(0, 3).map((id) => {
                const c = COUNTRIES.find((x) => x.id === id);
                return (
                  c && (
                    <Link key={id} to={`/ir/country/${id}`} className="block text-[12.5px] text-[#3b3527] hover:text-[#b8863b]">
                      → {c.name}
                    </Link>
                  )
                );
              })}
            </div>
          )}
          <Link to="/saved" className="text-[12px] text-[#b8863b] font-medium mt-3 flex items-center gap-1">
            View all saved <ChevronRight size={13} />
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <VerifyBanner text="This dataset covers 16 schemes, 14 countries, 16 organisations and 8 foreign-policy doctrines, web-verified as of August 2026. Extend src/data/*.ts following the existing shape as you study — see the README." />
      </div>
    </div>
  );
}

function QuickAction({ icon: Icon, title, desc, to }: { icon: any; title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="text-left border border-[#e0d6bd] rounded-lg p-3.5 hover:border-[#b8863b] hover:bg-[#fbf8ef] transition-colors block">
      <Icon size={17} className="text-[#b8863b] mb-2" />
      <div className="font-serif text-[14px]">{title}</div>
      <div className="text-[11.5px] text-[#8a7c58] mt-0.5">{desc}</div>
    </Link>
  );
}
