import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { UpcomingFestivals } from "@/components/festivals/UpcomingFestivals";
import { dailyRite, festivals, monthlyRites, newYearSchedule } from "@/data/festivals";

export const metadata: Metadata = {
  title: "祭事",
  description:
    "玉置神社の年中祭事。歳旦祭、初午祭、夏越大祓、大日堂大祭、例祭（10月24日）、年越大祓など、年間の祭事と月次祭・日供祭をご案内します。",
};

const months = Array.from({ length: 12 }, (_, i) => i + 1);

export default function FestivalsPage() {
  const major = festivals.filter((f) => f.major);
  return (
    <>
      <PageHero
        ja="祭事"
        en="Festivals & Rites"
        lead="山の四季とともに、神々へ祈りを捧げる年中の祭り。"
        crumbs={[{ label: "祭事" }]}
        image="/images/honsha.jpg"
        imagePosition="center 55%"
      />

      <Section tone="sumi">
        <SectionTitle en="Upcoming" ja="次の祭事" tone="dark" lead="本日からみて近い順に、次に行われる祭事をお知らせします。" />
        <div className="mt-16">
          <UpcomingFestivals limit={3} />
        </div>
      </Section>

      <Section tone="washi">
        <SectionTitle en="Major Rites" ja="主な祭事" lead="とくに盛大に執り行われる、玉置神社の大切な祭りです。" />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {major.map((f, i) => (
            <Reveal key={f.id} delay={(i % 2) * 100}>
              <article className="relative h-full border border-gold/50 bg-washi/70 p-8 sm:p-10">
                <span aria-hidden className="absolute -top-px left-8 h-px w-16 bg-gold" />
                <p className="font-latin text-sm text-gold uppercase italic">{f.dateLabel}</p>
                <h3 className="font-mincho mt-3 text-2xl tracking-[0.2em] text-ink">{f.name}</h3>
                {(f.time || f.place) && (
                  <p className="mt-3 text-xs tracking-widest text-ink-soft">
                    {f.place && <span>{f.place}　</span>}
                    {f.time}
                  </p>
                )}
                {f.description && <p className="mt-5 text-sm leading-loose text-ink-soft">{f.description}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="kinari">
        <SectionTitle en="Annual Calendar" ja="年間祭事暦" lead="月ごとの祭事の一覧です。" />
        <ol className="mt-20 grid gap-px bg-gold/30 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((m) => {
            const list = festivals.filter((f) => f.month === m);
            return (
              <li key={m} className="bg-washi p-7 sm:p-8">
                <p className="font-mincho flex items-baseline gap-2 text-gold">
                  <span className="font-latin text-4xl">{m}</span>
                  <span className="text-sm tracking-[0.3em]">月</span>
                </p>
                {list.length === 0 ? (
                  <p className="mt-4 text-xs tracking-widest text-ink-soft/60">―</p>
                ) : (
                  <ul className="mt-4 space-y-4">
                    {list.map((f) => (
                      <li key={f.id}>
                        <p className="text-xs tracking-widest text-ink-soft">{f.dateLabel}</p>
                        <p className={`font-mincho tracking-[0.12em] ${f.major ? "font-semibold text-shu" : "text-ink"}`}>{f.name}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-xs text-ink-soft">
          <span aria-hidden className="mr-2 inline-block h-2 w-2 bg-shu align-middle" />
          赤字は主な祭事です。日程は年により変更となる場合があります。
        </p>
      </Section>

      <Section tone="sumi">
        <SectionTitle en="Monthly & Daily" ja="月次祭・日供祭" tone="dark" />
        <div className="mx-auto mt-20 grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h3 className="font-mincho text-lg tracking-[0.3em] text-gold-soft">月次祭</h3>
            <ul className="mt-6 divide-y divide-gold/20 border-y border-gold/20">
              {monthlyRites.map((r) => (
                <li key={`${r.name}-${r.dayLabel}`} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <p className="font-mincho text-washi tracking-[0.15em]">{r.dayLabel}</p>
                  <p className="text-sm text-mist/85">
                    {r.name}　<span className="text-gold-soft">{r.place}</span>
                    {r.note && <span className="mt-1 block text-xs text-lichen">{r.note}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="font-mincho text-lg tracking-[0.3em] text-gold-soft">{dailyRite.name}</h3>
            <div className="mt-6 border border-gold/30 p-8 text-center">
              <p className="font-mincho text-2xl tracking-[0.2em] text-washi">{dailyRite.label}</p>
              <p className="mt-3 text-sm text-mist/80">{dailyRite.time}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="washi">
        <SectionTitle en="New Year" ja="大晦日から歳旦祭へ" lead="年末及び新年の祭事（令和5年の案内より）。" />
        <ol className="mx-auto mt-16 grid max-w-4xl gap-px bg-gold/30 sm:grid-cols-2">
          {newYearSchedule.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 80} className="bg-washi p-7">
              <p className="font-mincho text-lg tracking-[0.2em] text-ink">{s.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{s.when}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-16 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/news">お知らせ一覧</ButtonLink>
          <ButtonLink href="/access">アクセス</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
