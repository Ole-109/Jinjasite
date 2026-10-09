import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Shide } from "@/components/ui/Shide";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { Prose } from "@/components/page/Prose";
import { aboutOverview, timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "神社概要",
  description:
    "玉置神社は大峰山脈の南端、標高1,076mの玉置山山頂近くに鎮座。紀元前37年創建と伝わる熊野三山の奥院の由緒と歴史年表をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        ja="神社概要"
        en="About the Shrine"
        lead="大峰山脈の南端、標高1,076mの玉置山山頂近く。神武天皇御東征の途上として伝承される古社です。"
        crumbs={[{ label: "神社概要" }]}
      />

      <Section tone="washi">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div>
            <SectionTitle en="Overview" ja="由緒と沿革" align="left" />
            <Reveal className="mt-12">
              <Prose>
                {aboutOverview.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Prose>
            </Reveal>
          </div>

          <Reveal delay={150} className="self-start">
            <div className="relative border border-gold/50 bg-washi/60 p-8 sm:p-10">
              <span aria-hidden className="absolute -top-px left-8 h-px w-16 bg-gold" />
              <h3 className="font-mincho text-lg tracking-[0.3em] text-ink">玉置神社 概要</h3>
              <dl className="mt-8 divide-y divide-gold/25">
                {aboutOverview.facts.map((f) => (
                  <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                    <dt className="font-mincho text-sm tracking-[0.2em] text-gold">{f.label}</dt>
                    <dd className="text-sm leading-relaxed text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sumi">
        <SectionTitle en="History" ja="歴史年表" tone="dark" lead="紀元前の創立伝承から世界遺産登録、そして現在の大改修まで。" />

        <ol className="relative mx-auto mt-20 max-w-4xl">
          <span aria-hidden className="absolute top-2 bottom-2 left-[0.45rem] w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2" />
          {timeline.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <li key={`${e.year}-${e.title}`} className="relative pb-14 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span aria-hidden className="absolute top-2 left-0 h-[0.9rem] w-[0.9rem] rotate-45 border border-gold bg-sumi md:left-1/2 md:-ml-[0.45rem]" />
                <Reveal className={left ? "md:pr-6 md:text-right" : "md:col-start-2 md:pl-6"}>
                  <p className="font-mincho text-2xl tracking-[0.15em] text-gold-soft sm:text-3xl">{e.year}</p>
                  {e.era && <p className="mt-1 text-xs tracking-[0.25em] text-lichen">{e.era}</p>}
                  <h3 className="font-mincho mt-4 text-lg tracking-[0.15em] text-washi">{e.title}</h3>
                  <p className="mt-3 text-sm leading-loose text-mist/80">{e.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section tone="washi">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Shide tone="gold" />
          <p className="font-mincho mt-10 text-xl leading-loose tracking-[0.2em] text-ink">
            三千年の杉が見守る、
            <br className="sm:hidden" />
            神々の杜へ。
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/deities">御祭神</ButtonLink>
            <ButtonLink href="/precincts">境内のご案内</ButtonLink>
            <ButtonLink href="/heritage">世界遺産</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
