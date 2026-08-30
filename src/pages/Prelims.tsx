import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { MCQS } from "../data/mcqs";
import { Pill } from "../components/ui";
import type { Progress, QuizAttempt } from "../lib/hooks";

export default function PrelimsLab({
  recordQuizAttempt,
  progress,
}: {
  recordQuizAttempt: (a: QuizAttempt) => void;
  progress: Progress;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const q = MCQS[idx];

  const answer = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    const correct = i === q.answer;
    setSessionScore((p) => ({ correct: p.correct + (correct ? 1 : 0), total: p.total + 1 }));
    recordQuizAttempt({ id: q.id, correct, at: Date.now() });
  };

  const next = () => {
    setSelected(null);
    setRevealed(false);
    setIdx((p) => (p + 1) % MCQS.length);
  };

  const attemptedIds = new Set(progress.quizAttempts.map((a) => a.id));

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-serif text-2xl">Prelims Lab</h1>
          <p className="text-[13px] text-[#8a7c58] mt-1">
            Statement-based practice with trap analysis · Question {idx + 1} of {MCQS.length}
          </p>
        </div>
        <div className="text-[12px] text-[#8a7c58] text-right">
          Session: {sessionScore.correct}/{sessionScore.total}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {MCQS.map((m, i) => (
          <button
            key={m.id}
            onClick={() => {
              setIdx(i);
              setSelected(null);
              setRevealed(false);
            }}
            className={`w-7 h-7 rounded-full text-[11px] border flex items-center justify-center ${
              i === idx
                ? "bg-[#1f2937] text-white border-[#1f2937]"
                : attemptedIds.has(m.id)
                ? "bg-[#e3ede2] border-[#c3dcc4] text-[#2c5c33]"
                : "bg-white border-[#e0d6bd] text-[#8a7c58]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bg-white border border-[#e0d6bd] rounded-xl p-5">
        <div className="flex gap-1.5 mb-3">
          <Pill tone="navy">{q.topic}</Pill>
          <Pill>{q.difficulty}</Pill>
        </div>
        <p className="text-[14px] text-[#2b2a24] whitespace-pre-line leading-relaxed mb-4">{q.question}</p>
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let cls = "border-[#e0d6bd] hover:border-[#b8863b]";
            if (revealed) {
              if (i === q.answer) cls = "border-[#8fbf8f] bg-[#e3ede2]";
              else if (i === selected) cls = "border-[#d99a7a] bg-[#fbeee0]";
              else cls = "border-[#eee7d6] opacity-60";
            }
            return (
              <button key={i} onClick={() => answer(i)} className={`w-full text-left text-[13px] px-3.5 py-2.5 rounded-lg border transition-colors ${cls}`}>
                {String.fromCharCode(97 + i)}) {opt}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="mt-4 pt-4 border-t border-[#eee7d6] space-y-3">
            <div className={`text-[13px] font-semibold ${selected === q.answer ? "text-[#2c5c33]" : "text-[#8a4b1f]"}`}>
              {selected === q.answer ? "Correct." : "Not quite."}
            </div>
            <p className="text-[13px] text-[#3b3527] leading-relaxed">{q.explanation}</p>
            <div className="bg-[#fbf8ef] border border-[#e0d6bd] rounded-lg p-3">
              <div className="text-[11px] font-semibold text-[#8a4b1f] mb-1">TRAP ANALYSIS</div>
              <p className="text-[12.5px] text-[#4a4432]">{q.trap}</p>
            </div>
            <button onClick={next} className="text-[12.5px] px-4 py-2 rounded-full bg-[#1f2937] text-white flex items-center gap-1.5">
              Next question <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
