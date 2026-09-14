import React, { useState, useMemo } from "react";
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Lightbulb,
  Zap,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Compass,
  Award,
  ShieldCheck,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import confetti from "canvas-confetti";
import { ALL_PYQS } from "../data/pyqs";
import type { PYQItem } from "../data/types";
import { Pill, SectionLabel } from "../components/ui";

export default function PyqExplorer() {
  const [selectedExam, setSelectedExam] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mode, setMode] = useState<"study" | "test">("study");
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  const years = useMemo(() => {
    const set = new Set(ALL_PYQS.map((q) => q.year));
    return ["All", ...Array.from(set).sort((a, b) => b - a).map(String)];
  }, []);

  const topics = useMemo(() => {
    const set = new Set(ALL_PYQS.map((q) => q.topic));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredPyqs = useMemo(() => {
    return ALL_PYQS.filter((q) => {
      if (selectedExam !== "All" && q.exam !== selectedExam) return false;
      if (selectedYear !== "All" && String(q.year) !== selectedYear) return false;
      if (selectedTopic !== "All" && q.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(query);
        const matchExpl = q.plainExplanation.toLowerCase().includes(query);
        const matchBook = Object.values(q.bookReference).some((b) => b && b.toLowerCase().includes(query));
        return matchQ || matchExpl || matchBook;
      }
      return true;
    });
  }, [selectedExam, selectedYear, selectedTopic, searchQuery]);

  const handleSelectOption = (qId: string, optionIdx: number, correctIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    if (optionIdx === correctIdx) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch (e) {}
    }
  };

  const handleResetAnswers = () => {
    setUserAnswers({});
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#e0d6bd] dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#b8863b]">
          <Award size={15} /> Authentic Official PYQ Deep-Dive Engine
        </div>
        <h1 className="font-serif text-2xl md:text-3xl text-[#1f2937] dark:text-slate-100 mt-1">
          UPSC CSE &amp; UPPSC PCS Solved PYQs (2011–2024)
        </h1>
        <p className="text-[13px] text-[#8a7c58] dark:text-slate-400 mt-1">
          Grounded in standard literature: <strong>Pavneet Singh</strong>, <strong>Pushpesh Pant</strong>, official MEA bilateral briefs, and PIB gazettes. Every question includes option-by-option elimination reasoning and 30-second topper shortcuts.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Exam Filter */}
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="text-[12px] font-medium bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-[#2b2a24] dark:text-slate-200"
            >
              <option value="All">All Examinations</option>
              <option value="UPSC CSE Prelims">UPSC CSE Prelims</option>
              <option value="UPPSC PCS">UPPSC PCS</option>
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="text-[12px] font-medium bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-[#2b2a24] dark:text-slate-200"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  Year: {y}
                </option>
              ))}
            </select>

            {/* Topic Filter */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="text-[12px] font-medium bg-[#fcfaf5] dark:bg-slate-800 border border-[#e0d6bd] dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-[#2b2a24] dark:text-slate-200 max-w-[210px]"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  Topic: {t}
                </option>
              ))}
            </select>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex bg-[#eee7d6] dark:bg-slate-800 p-1 rounded-xl text-[12px] font-medium">
              <button
                onClick={() => setMode("study")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mode === "study"
                    ? "bg-[#b8863b] text-white font-semibold shadow-xs"
                    : "text-[#5b5340] dark:text-slate-400 hover:text-[#2b2a24]"
                }`}
              >
                Study Mode
              </button>
              <button
                onClick={() => setMode("test")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  mode === "test"
                    ? "bg-[#b8863b] text-white font-semibold shadow-xs"
                    : "text-[#5b5340] dark:text-slate-400 hover:text-[#2b2a24]"
                }`}
              >
                Test Mode
              </button>
            </div>

            {mode === "test" && Object.keys(userAnswers).length > 0 && (
              <button
                onClick={handleResetAnswers}
                className="p-1.5 rounded-lg border border-[#e0d6bd] dark:border-slate-700 hover:bg-[#f3ede0] dark:hover:bg-slate-800 text-[#8a7c58]"
                title="Reset answers"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Search Field */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-3 text-[#8a7c58] dark:text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by treaty, country, strait, grouping (Quad/BRICS), or book citation..."
            className="w-full pl-9 pr-4 py-2 text-[12.5px] bg-[#fcfaf5] dark:bg-slate-800/60 border border-[#e0d6bd] dark:border-slate-700 rounded-xl text-[#2b2a24] dark:text-slate-100 placeholder-[#8a7c58] focus:outline-hidden focus:border-[#b8863b]"
          />
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredPyqs.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-6">
            <p className="text-[13px] text-[#8a7c58] dark:text-slate-400 font-medium">
              No previous year questions match your selected criteria.
            </p>
            <button
              onClick={() => {
                setSelectedExam("All");
                setSelectedYear("All");
                setSelectedTopic("All");
                setSearchQuery("");
              }}
              className="mt-3 text-[12px] font-bold px-4 py-1.5 rounded-lg bg-[#b8863b] text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredPyqs.map((q, qIdx) => {
            const answeredIdx = userAnswers[q.id];
            const isAttempted = answeredIdx !== undefined;
            const showExplanation = mode === "study" || isAttempted;
            const isCorrect = answeredIdx === q.correctOption;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-[#e0d6bd] dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4 transition-all"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eee7d6] dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#b8863b]/15 text-[#8a5d1b] dark:text-[#f3c882] border border-[#b8863b]/30">
                      {q.exam} • {q.year}
                    </span>
                    <span className="text-[11.5px] font-medium text-[#8a7c58] dark:text-slate-400">
                      {q.topic}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8a7c58] dark:text-slate-500">
                    Q#{qIdx + 1}
                  </span>
                </div>

                {/* Question Text */}
                <div className="text-[13.5px] md:text-[14.5px] text-[#1f2937] dark:text-slate-100 font-medium leading-relaxed whitespace-pre-line">
                  {q.question}
                </div>

                {/* Options Grid */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isOptionCorrect = optIdx === q.correctOption;
                    const isUserSelected = answeredIdx === optIdx;

                    let btnClass = "border-[#e0d6bd] dark:border-slate-700 bg-[#fcfaf5] dark:bg-slate-800 hover:border-[#b8863b]";

                    if (showExplanation) {
                      if (isOptionCorrect) {
                        btnClass = "border-[#34d399] bg-[#e3ede2] dark:bg-emerald-950/40 text-[#2c5c33] dark:text-emerald-200 font-semibold ring-2 ring-emerald-400";
                      } else if (isUserSelected) {
                        btnClass = "border-[#f87171] bg-[#fbeee0] dark:bg-rose-950/40 text-[#991b1b] dark:text-rose-200 font-semibold";
                      }
                    } else if (isUserSelected) {
                      btnClass = "border-[#b8863b] bg-[#f3ede0] dark:bg-slate-700 font-semibold";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={mode === "study"}
                        onClick={() => handleSelectOption(q.id, optIdx, q.correctOption)}
                        className={`w-full text-left text-[13px] px-3.5 py-2.5 rounded-xl border transition-all flex items-start gap-2.5 ${btnClass}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>

                        {showExplanation && isOptionCorrect && (
                          <CheckCircle2 size={16} className="text-[#2c5c33] dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {showExplanation && isUserSelected && !isOptionCorrect && (
                          <XCircle size={16} className="text-[#991b1b] dark:text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Test Mode Result Banner */}
                {mode === "test" && isAttempted && (
                  <div
                    className={`p-3 rounded-xl text-[12.5px] font-semibold flex items-center gap-2 ${
                      isCorrect
                        ? "bg-[#e3ede2] text-[#2c5c33] dark:bg-emerald-950/50 dark:text-emerald-300"
                        : "bg-[#fbeee0] text-[#991b1b] dark:bg-rose-950/50 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={16} />
                        <span>Correct! Outstanding elimination. Read the textbook citations below.</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={16} />
                        <span>
                          Option {String.fromCharCode(65 + q.correctOption)} is the official UPSC answer. Review the literature analysis below.
                        </span>
                      </>
                    )}
                  </div>
                )}

                {/* Deep-Dive Explanations & Citations */}
                {showExplanation && (
                  <div className="space-y-3 pt-3 border-t border-[#eee7d6] dark:border-slate-800 text-[12.5px]">
                    {/* Standard Book Reference Card */}
                    <div className="p-3.5 rounded-xl bg-[#fbf8ef] dark:bg-slate-800/60 border border-[#e0d6bd] dark:border-slate-700 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-[#b8863b]">
                        <BookOpen size={14} /> Official Standard Literature Citations:
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 pt-1 text-[12px]">
                        {q.bookReference.pavneetSingh && (
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-[#eee7d6] dark:border-slate-800">
                            <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block text-[10.5px]">
                              Pavneet Singh IR:
                            </span>
                            <span className="text-[#3b3527] dark:text-slate-300">{q.bookReference.pavneetSingh}</span>
                          </div>
                        )}
                        {q.bookReference.officialSource && (
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-[#eee7d6] dark:border-slate-800">
                            <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block text-[10.5px]">
                              MEA / Official Gazette:
                            </span>
                            <span className="text-[#3b3527] dark:text-slate-300">{q.bookReference.officialSource}</span>
                          </div>
                        )}
                        {q.bookReference.pushpeshPant && (
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-[#eee7d6] dark:border-slate-800">
                            <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block text-[10.5px]">
                              Pushpesh Pant:
                            </span>
                            <span className="text-[#3b3527] dark:text-slate-300">{q.bookReference.pushpeshPant}</span>
                          </div>
                        )}
                        {q.bookReference.ncertOrPib && (
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-[#eee7d6] dark:border-slate-800">
                            <span className="font-bold text-[#8a5d1b] dark:text-[#f3c882] block text-[10.5px]">
                              NCERT / PIB Reference:
                            </span>
                            <span className="text-[#3b3527] dark:text-slate-300">{q.bookReference.ncertOrPib}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Conceptual Explanation */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/70 border border-[#e0d6bd] dark:border-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1f2937] dark:text-slate-200 text-[11.5px] uppercase">
                        <Lightbulb size={14} className="text-[#b8863b]" /> Conceptual Reasoning in Plain English:
                      </div>
                      <p className="text-[#3b3527] dark:text-slate-300 leading-relaxed font-sans pt-0.5">
                        {q.plainExplanation}
                      </p>
                    </div>

                    {/* Option-by-Option Elimination */}
                    <div className="p-3.5 rounded-xl bg-[#fcfaf5] dark:bg-slate-900/80 border border-[#e0d6bd] dark:border-slate-800 space-y-2">
                      <span className="font-bold text-[11px] uppercase tracking-wider text-[#8a7c58] dark:text-slate-400 block">
                        Option-by-Option Elimination Analysis:
                      </span>
                      <div className="space-y-1.5">
                        {Object.entries(q.optionElimination).map(([key, reason]) => (
                          <div key={key} className="flex items-start gap-2 text-[#3b3527] dark:text-slate-300">
                            <span className="text-[#b8863b] font-bold shrink-0">•</span>
                            <span>{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topper 30-Second Elimination Trick */}
                    {q.topperTrick && (
                      <div className="p-3 rounded-xl bg-[#e3ede2] dark:bg-emerald-950/40 border border-[#c3dcc4] dark:border-emerald-800 text-[#2c5c33] dark:text-emerald-300 flex items-start gap-2 text-[12px]">
                        <Zap size={15} className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <span className="font-bold">Topper 30-Second Elimination Shortcut: </span>
                          <span>{q.topperTrick}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
