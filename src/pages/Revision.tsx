import React, { useMemo, useState } from "react";
import { Check, ChevronLeft, Shuffle } from "lucide-react";
import { SCHEMES } from "../data/schemes";
import { COUNTRIES } from "../data/countries";
import { ORGANISATIONS } from "../data/organisations";
import type { Progress } from "../lib/hooks";

interface Card {
  key: string;
  front: string;
  back: string;
}

export default function Revision({ markRevisionSeen, progress }: { markRevisionSeen: (id: string) => void; progress: Progress }) {
  const deck: Card[] = useMemo(() => {
    const schemeCards = SCHEMES.map((s) => ({
      key: `scheme:${s.id}`,
      front: s.name,
      back: `${s.ministry} · Launched ${s.launchYear} · ${s.type}\n\n${s.benefit}`,
    }));
    const countryCards = COUNTRIES.map((c) => ({
      key: `country:${c.id}`,
      front: `India — ${c.name}`,
      back: c.prelims.join("\n\n"),
    }));
    const orgCards = ORGANISATIONS.map((o) => ({
      key: `org:${o.id}`,
      front: o.name,
      back: `Est. ${o.established} · HQ: ${o.headquarters}\nMembers: ${o.members.join(", ")}`,
    }));
    return [...schemeCards, ...countryCards, ...orgCards];
  }, []);

  const [order, setOrder] = useState<number[]>(() => deck.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = deck[order[pos]];
  const seenCount = progress.revisionSeen.length;

  const shuffle = () => {
    const arr = [...order];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setPos(0);
    setFlipped(false);
  };

  const markAndNext = () => {
    markRevisionSeen(card.key);
    setFlipped(false);
    setPos((p) => (p + 1) % deck.length);
  };

  return (
    <div className="max-w-xl">
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-serif text-2xl">Smart Revision</h1>
        <button onClick={shuffle} className="text-[12px] text-[#8a7c58] flex items-center gap-1">
          <Shuffle size={13} /> Shuffle
        </button>
      </div>
      <p className="text-[13px] text-[#8a7c58] mb-5">
        Card {pos + 1} of {deck.length} · {seenCount} cards marked reviewed overall
      </p>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full text-left bg-white border-2 border-[#e0d6bd] rounded-xl p-8 min-h-[220px] flex flex-col justify-center hover:border-[#b8863b] transition-colors"
      >
        {!flipped ? (
          <div className="text-center">
            <div className="text-[10.5px] uppercase tracking-wide text-[#a89a72] mb-3">Tap to reveal</div>
            <div className="font-serif text-xl">{card.front}</div>
          </div>
        ) : (
          <div>
            <div className="text-[10.5px] uppercase tracking-wide text-[#a89a72] mb-2">Answer</div>
            <p className="text-[13.5px] leading-relaxed whitespace-pre-line text-[#3b3527]">{card.back}</p>
          </div>
        )}
      </button>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => {
            setPos((p) => (p - 1 + deck.length) % deck.length);
            setFlipped(false);
          }}
          className="text-[12.5px] px-3 py-2 rounded-full border border-[#e0d6bd] flex items-center gap-1"
        >
          <ChevronLeft size={14} /> Prev
        </button>
        <button onClick={markAndNext} className="text-[12.5px] px-4 py-2 rounded-full bg-[#1f2937] text-white flex items-center gap-1.5">
          <Check size={14} /> Got it — next
        </button>
      </div>
    </div>
  );
}
