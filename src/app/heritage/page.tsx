import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Shide } from "@/components/ui/Shide";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { Prose } from "@/components/page/Prose";
import { NabikiMap } from "@/components/heritage/NabikiMap";
import { heritage } from "@/data/visit";

export const metadata: Metadata = {
  title: "世界遺産 大峯奥駈道",
  description:
    "玉置山は大峯奥駈道七十五靡のうち10番目の靡。2004年に「紀伊山地の霊場と参詣道」として世界遺産に登録された、玉置神社の聖地としての意味をご紹介します。",
};

export default function HeritagePage() {
  return (
    <>
      <PageHero
        ja="世界遺産"
        en="World Heritage"
        lead="「紀伊山地の霊場と参詣道」大峯奥駈道。霊峰玉置山は、その極めて重要な聖地です。"
        crumbs={[{ label: "世界遺産" }]}
        image="/images/izumo-kyokai.jpg"
        imagePosition="center 35%"
      />

      <Section tone="washi">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionTitle en="Omine Okugake-michi" ja={heritage.title} align="left" />
            <ul className="mt-14 grid grid-cols-2 gap-px bg-gold/30">
              {heritage.figures.map((f, i) => (
                <Reveal as="li" key={f.label} delay={i * 80} className="bg-washi p-6 text-center sm:p-8">
                  <p className="font-latin text-5xl text-gold sm:text-6xl">{f.value}</p>
                  <p className="font-mincho mt-3 text-sm tracking-[0.2em] text-ink">{f.label}</p>
                  <p className="mt-1 text-xs text-ink-soft">{f.note}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal>
            <Prose>
              {heritage.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
        </div>
      </Section>

      <Section tone="sumi">
        <SectionTitle
          en="Seventy-five Nabiki"
          ja="大峯七十五靡"
          tone="dark"
          lead={`神仏が宿るとされた七十五の拝所・行場。1番は${heritage.nabiki.first}、75番は${heritage.nabiki.last}。玉置山は10番目の靡にあたります。`}
        />
        <Reveal className="mt-16">
          <NabikiMap />
        </Reveal>
        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <p className="font-mincho text-lg leading-loose tracking-[0.2em] text-washi">
            かつて山伏姿の行者の往来が盛んだった玉置山。
            <br />
            その神気は、今も杜に息づいています。
          </p>
        </Reveal>
      </Section>

      <Section tone="washi">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Shide tone="gold" />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/about">神社概要</ButtonLink>
            <ButtonLink href="/access">アクセス</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
