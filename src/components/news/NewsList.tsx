"use client";

import Link from "next/link";
import { useState } from "react";
import { newsCategories, type NewsCategory } from "@/data/news";

export type NewsListItem = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: NewsCategory;
  excerpt: string;
};

const catStyle: Record<NewsCategory, string> = {
  お知らせ: "border-ink/40 text-ink-soft",
  祭事: "border-shu/60 text-shu",
  道路: "border-gold text-gold",
  広報紙: "border-moss text-moss",
};

/** Filterable (by category) list of news posts. */
export function NewsList({ items }: { items: NewsListItem[] }) {
  const [cat, setCat] = useState<NewsCategory | "all">("all");
  const shown = cat === "all" ? items : items.filter((i) => i.category === cat);
  const tabs: { key: NewsCategory | "all"; label: string }[] = [
    { key: "all", label: "すべて" },
    ...newsCategories.map((c) => ({ key: c, label: c })),
  ];

  return (
    <div>
      <div role="group" aria-label="カテゴリで絞り込み" className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            aria-pressed={cat === t.key}
            onClick={() => setCat(t.key)}
            className={`font-mincho border px-5 py-2 text-sm tracking-[0.2em] transition-colors duration-500 ${
              cat === t.key ? "border-ink bg-ink text-washi" : "border-gold/50 text-ink-soft hover:border-shu hover:text-shu"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-xs tracking-widest text-ink-soft" aria-live="polite">
        {shown.length}件
      </p>

      <ul className="mx-auto mt-10 max-w-4xl divide-y divide-gold/30 border-y border-gold/30">
        {shown.map((n) => (
          <li key={n.slug}>
            <Link href={`/news/${n.slug}`} className="group grid gap-3 px-2 py-7 transition-colors duration-500 hover:bg-kinari/70 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:px-6">
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                <time dateTime={n.date} className="font-latin text-lg tracking-widest text-ink-soft">
                  {n.dateLabel}
                </time>
                <span className={`border px-3 py-0.5 text-xs tracking-widest ${catStyle[n.category]}`}>{n.category}</span>
              </div>
              <div>
                <h2 className="font-mincho text-base leading-relaxed tracking-[0.1em] text-ink transition-colors duration-500 group-hover:text-shu sm:text-lg">
                  {n.title}
                </h2>
                <p className="mt-2 text-sm leading-loose text-ink-soft">{n.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
