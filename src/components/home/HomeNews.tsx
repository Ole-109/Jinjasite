import Link from "next/link";
import { formatNewsDate, news } from "@/data/news";
import { roadReports } from "@/data/road";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeNews() {
  const latest = news.slice(0, 6);
  const road = roadReports[0];

  return (
    <section className="washi-texture py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-24">
        <Reveal>
          <p className="font-latin text-sm text-gold uppercase italic">Information</p>
          <h2 className="font-mincho mt-4 text-3xl font-semibold tracking-[0.18em] text-ink sm:text-4xl">お知らせ</h2>
          <div className="mt-6 h-px w-14 bg-gold" />

          {road && (
            <Link
              href="/road"
              className="group mt-12 block border-l-2 border-shu bg-kinari/70 p-6 transition hover:bg-kinari"
            >
              <span className="flex items-center gap-3 text-xs tracking-[0.2em] text-shu">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shu opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-shu" />
                </span>
                最新の道路情報　{formatNewsDate(road.date)}
              </span>
              <span className="mt-3 line-clamp-3 block text-sm leading-relaxed text-ink-soft">{road.body[0]}</span>
              <span className="mt-4 block text-xs tracking-[0.2em] text-ink group-hover:text-shu">道路情報を見る →</span>
            </Link>
          )}

          <div className="mt-10 hidden lg:block">
            <ButtonLink href="/news">お知らせ一覧</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="border-t border-ink/15">
            {latest.map((n) => (
              <li key={n.slug} className="border-b border-ink/15">
                <Link
                  href={`/news/${n.slug}`}
                  className="group grid gap-2 py-6 transition-colors sm:grid-cols-[7rem_5.5rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <time dateTime={n.date} className="font-latin text-sm tracking-[0.15em] text-ink-soft">
                    {formatNewsDate(n.date)}
                  </time>
                  <span className="w-fit border border-gold/60 px-2 py-0.5 text-center text-[0.65rem] tracking-[0.2em] text-gold">
                    {n.category}
                  </span>
                  <span className="font-mincho tracking-[0.08em] text-ink transition group-hover:translate-x-1 group-hover:text-shu">
                    {n.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 lg:hidden">
            <ButtonLink href="/news">お知らせ一覧</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
