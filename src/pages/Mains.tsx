import React, { useState } from "react";
import { Clock } from "lucide-react";
import { MAINS_QUESTIONS } from "../data/mains";
import { Pill, SectionLabel, ScoreTile } from "../components/ui";
import type { MainsAttempt } from "../lib/hooks";

interface ScoreResult {
  structureScore: number;
  contentScore: number;
  overall: number;
  keywordHits: string[];
  suggestions: string[];
  words: number;
}

export default function MainsLab({ recordMainsAttempt }: { recordMainsAttempt: (a: MainsAttempt) => void }) {
  const [qid, setQid] = useState(MAINS_QUESTIONS[0].id);
  const [answer, setAnswer] = useState("");
  const [scored, setScored] = useState<ScoreResult | null>(null);
  const q = MAINS_QUESTIONS.find((x) => x.id === qid)!;
  const words = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  const evaluate = () => {
    const lower = answer.toLowerCase();
    const hasIntro = answer.trim().length > 0 && answer.trim().split("\n")[0].length < 400;
    const hasConclusion = /way forward|conclusion|in conclusion|going forward|thus,|therefore,/i.test(answer.slice(-400));
    const keywordHits = q.keywords.filter((k) => lower.includes(k.toLowerCase()));
    const withinLimit = words > 0 && words <= q.wordLimit * 1.15;
    const balanced = /however|but|while|on the other hand|challenge|criticism|limitation/i.test(answer);

    const structureScore = (hasIntro ? 25 : 0) + (hasConclusion ? 25 : 0) + (withinLimit ? 25 : 0) + (balanced ? 25 : 0);
    const contentScore = Math.min(100, Math.round((keywordHits.length / q.keywords.length) * 100));
    const overall = Math.round((structureScore + contentScore) / 2);

    const suggestions: string[] = [];
    if (!hasIntro) suggestions.push("Add a clear opening line that directly frames the question.");
    if (!hasConclusion) suggestions.push("End with a 'Way Forward' or conclusion sentence — Mains answers should not trail off.");
    if (!withinLimit) suggestions.push(words === 0 ? "Write your answer above before evaluating." : `Aim closer to the ${q.wordLimit}-word limit (currently ${words} words).`);
    if (!balanced) suggestions.push("Show balance — mention at least one challenge/limitation, not only positives.");
    if (keywordHits.length < q.keywords.length / 2) suggestions.push("Bring in more specific keywords/examples relevant to this topic (see the keyword list below).");

    const result: ScoreResult = { structureScore, contentScore, overall, keywordHits, suggestions, words };
    setScored(result);
    recordMainsAttempt({ id: q.id, words, overall, at: Date.now() });
  };

  return (
    <div className="max-w-3xl">
      <h1 className="font-serif text-2xl mb-1">Mains Answer Lab</h1>
      <p className="text-[13px] text-[#8a7c58] mb-5">Rule-based structure + keyword-coverage feedback — not an official evaluator, but a discipline check.</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {MAINS_QUESTIONS.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setQid(m.id);
              setAnswer("");
              setScored(null);
            }}
            className={`text-[11.5px] px-3 py-1.5 rounded-full border ${
              qid === m.id ? "bg-[#1f2937] text-white border-[#1f2937]" : "bg-white border-[#e0d6bd] text-[#5b5340]"
            }`}
          >
            {m.topic}
          </button>
        ))}
      </div>

      <div className="bg-white border border-[#e0d6bd] rounded-xl p-5">
        <div className="flex gap-1.5 mb-2 flex-wrap">
          <Pill tone="navy">{q.gsPaper}</Pill>
          <Pill>{q.directive}</Pill>
          <Pill>
            <Clock size={10} className="inline mr-1" />
            {q.time} min
          </Pill>
          <Pill>{q.wordLimit} words</Pill>
        </div>
        <p className="text-[14px] text-[#2b2a24] leading-relaxed mb-4">{q.question}</p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={10}
          placeholder="Write your answer here — Introduction, Body (issues/analysis/initiatives), Way Forward, Conclusion..."
          className="w-full text-[13.5px] leading-relaxed border border-[#e0d6bd] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#b8863b]/30"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-[11.5px] text-[#8a7c58]">
            {words} words (limit {q.wordLimit})
          </span>
          <button onClick={evaluate} className="text-[12.5px] px-4 py-2 rounded-full bg-[#1f2937] text-white">
            Evaluate answer
          </button>
        </div>

        {scored && (
          <div className="mt-5 pt-5 border-t border-[#eee7d6]">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <ScoreTile label="Structure" value={scored.structureScore} />
              <ScoreTile label="Content coverage" value={scored.contentScore} />
              <ScoreTile label="Overall" value={scored.overall} highlight />
            </div>
            <div className="mb-3">
              <SectionLabel>Suggested improvements</SectionLabel>
              {scored.suggestions.length === 0 ? (
                <p className="text-[12.5px] text-[#2c5c33]">Solid structure and coverage — nice work.</p>
              ) : (
                <ul className="space-y-1">
                  {scored.suggestions.map((s, i) => (
                    <li key={i} className="text-[12.5px] text-[#3b3527] flex gap-2">
                      <span className="text-[#b8863b]">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <SectionLabel>
                Keyword coverage ({scored.keywordHits.length}/{q.keywords.length})
              </SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {q.keywords.map((k, i) => (
                  <Pill key={i} tone={scored.keywordHits.includes(k) ? "green" : "default"}>
                    {k}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
