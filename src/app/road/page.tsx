import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { ReportBody, formatJa, weekday } from "@/components/road/ReportBody";
import { roadReports, type RoadReport } from "@/data/road";

export const metadata: Metadata = {
  title: "道路情報",
  description:
    "玉置神社へ至る村道の道路情報。時間制通行止め・迂回路の地図、積雪・凍結の状況、臨時バスのお知らせなどを随時掲載しています。",
};

const LATEST = 6;

export default function RoadPage() {
  const latest = roadReports.slice(0, LATEST);
  const archive = roadReports.slice(LATEST);
  const byYear = new Map<string, RoadReport[]>();
  for (const r of archive) {
    const y = r.date.slice(0, 4);
    byYear.set(y, [...(byYear.get(y) ?? []), r]);
  }
  const years = [...byYear.keys()];

  return (
    <>
      <PageHero
        ja="道路情報"
        en="Road Information"
        lead="玉置神社へ上がる村道の通行止め・迂回路・路面状況をお知らせします。"
        crumbs={[{ label: "道路情報" }]}
        image="/images/honsha.jpg"
        imagePosition="center 80%"
      />

      <Section tone="sumi">
        <SectionTitle en="Latest" ja="最新の道路情報" tone="dark" lead="お出かけ前にご確認ください。" />
        <ol className="mx-auto mt-20 max-w-4xl space-y-6">
          {latest.map((r) => (
            <Reveal as="li" key={r.id}>
              <article className="border border-gold/30 bg-sumi-2/60 p-6 sm:p-9">
                <header className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <time dateTime={r.date} className="font-mincho text-xl tracking-[0.15em] text-washi">
                    {formatJa(r.date)}
                    <span className="ml-1 text-sm text-lichen">（{weekday(r.date)}）</span>
                  </time>
                  <span className="border border-gold/50 px-3 py-0.5 text-xs tracking-widest text-gold-soft">{r.kind}</span>
                  {r.note && <span className="text-xs text-lichen">{r.note}</span>}
                </header>
                <div className="mt-5 h-px w-10 bg-gold" />
                <div className="mt-5">
                  <ReportBody r={r} dark />
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="washi" id="archive">
        <SectionTitle en="Archive" ja="過去の道路情報" lead="これまでの道路情報を、年ごとにまとめています。" />
        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {years.map((y) => {
            const list = byYear.get(y)!;
            return (
              <details key={y} className="group border border-gold/40 bg-washi/70">
                <summary className="font-mincho flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg tracking-[0.2em] text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>
                    {y}年<span className="ml-3 text-sm text-ink-soft">{list.length}件</span>
                  </span>
                  <span aria-hidden className="text-gold transition-transform duration-500 group-open:rotate-45">＋</span>
                </summary>
                <ol className="divide-y divide-gold/25 border-t border-gold/30">
                  {list.map((r) => (
                    <li key={r.id} className="px-6 py-6">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <time dateTime={r.date} className="font-mincho tracking-[0.12em] text-ink">
                          {formatJa(r.date)}
                        </time>
                        <span className="text-xs tracking-widest text-gold">{r.kind}</span>
                        {r.note && <span className="text-xs text-ink-soft">{r.note}</span>}
                      </div>
                      <div className="mt-3">
                        <ReportBody r={r} />
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
            );
          })}
        </div>
      </Section>

      <Section tone="washi" className="!pt-0">
        <Reveal className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/access">アクセス</ButtonLink>
          <ButtonLink href="/news">お知らせ</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
