"use client";

import { useMemo, useSyncExternalStore } from "react";
import { upcomingFestivals } from "@/data/festivals";

const subscribe = () => () => {};
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};

const WD = ["日", "月", "火", "水", "木", "金", "土"];

/** Client-only: the next few rites counted from the visitor's own today. */
export function UpcomingFestivals({ limit = 3 }: { limit?: number }) {
  const key = useSyncExternalStore(subscribe, today, () => "");
  const list = useMemo(() => {
    if (!key) return [];
    const [y, m, d] = key.split("-").map(Number);
    return upcomingFestivals(new Date(y, m, d), limit);
  }, [key, limit]);

  if (!key) {
    return <div aria-hidden className="min-h-56" />;
  }

  const [y, m, d] = key.split("-").map(Number);
  const now = new Date(y, m, d);

  return (
    <ol className="grid gap-px bg-gold/25 md:grid-cols-3">
      {list.map(({ festival, date }, i) => {
        const days = Math.round((date.getTime() - now.getTime()) / 86_400_000);
        return (
          <li key={festival.id} className="bg-sumi-2 p-8">
            <p className="font-latin text-sm text-gold-soft uppercase italic">{i === 0 ? "Next" : "Upcoming"}</p>
            <p className="font-mincho mt-4 text-3xl tracking-[0.1em] text-washi">
              {date.getMonth() + 1}月{date.getDate()}日
              <span className="ml-2 text-base text-lichen">（{WD[date.getDay()]}）</span>
            </p>
            <h3 className="font-mincho mt-4 text-lg tracking-[0.15em] text-gold-soft">{festival.name}</h3>
            <p className="mt-4 text-xs tracking-widest text-mist/70">
              {days === 0 ? "本日" : `あと${days}日`}
              {festival.time ? `　${festival.time}` : ""}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

