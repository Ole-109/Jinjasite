"use client";

import { useEffect, useState } from "react";

type Item = { id: string; name: string };

/** Sticky in-page index; highlights the section currently in view. */
export function PrecinctIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="境内のご案内 目次"
      className="sticky top-[var(--header-h)] z-30 border-b border-gold/25 bg-washi/90 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-3 whitespace-nowrap sm:px-8 [scrollbar-width:thin]">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`font-mincho block px-3 py-1.5 text-sm tracking-[0.15em] transition-colors ${
                active === i.id ? "text-shu" : "text-ink-soft hover:text-shu"
              }`}
            >
              {i.name.replace(/^(摂社・|末社・)/, "")}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
