import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/page/Section";
import { kouhoushi } from "@/data/kouhoushi";

export const metadata: Metadata = {
  title: "広報紙「玉置之巨杉」",
  description: "玉置神社の広報紙「玉置之巨杉」第1号（平成31年）から第13号（令和7年）までのバックナンバーを、PDFでご覧いただけます。",
};

export default function KouhoushiPage() {
  return (
    <>
      <PageHero
        ja="広報紙"
        en="Newsletter"
        lead="広報紙「玉置之巨杉（たまきのおおすぎ）」のバックナンバーです。"
        crumbs={[{ label: "広報紙" }]}
        image="/images/izumo-kyokai.jpg"
        imagePosition="center 30%"
      />
      <Section tone="washi">
        <SectionTitle en="Back Numbers" ja="玉置之巨杉" lead="表紙をクリックすると、PDFが別のタブで開きます。" />
        <ul className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
          {kouhoushi.map((k, i) => (
            <Reveal as="li" key={k.no} delay={(i % 4) * 80}>
              <a href={k.pdf} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="relative block aspect-[7/10] overflow-hidden border border-gold/40 bg-kinari shadow-[0_18px_40px_-24px_rgba(12,14,12,0.6)] transition-transform duration-700 group-hover:-translate-y-2">
                  <Image
                    src={k.cover}
                    alt={`${k.title}の表紙`}
                    fill
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 30vw, 46vw"
                    className="object-cover"
                  />
                </span>
                <span className="mt-5 block text-center">
                  <span className="font-latin block text-sm text-gold uppercase italic">No. {k.no}</span>
                  <span className="font-mincho mt-1 block text-sm tracking-[0.15em] text-ink group-hover:text-shu">第{k.no}号</span>
                  <span className="mt-1 block text-xs text-ink-soft">{k.dateLabel}</span>
                  <span className="sr-only">（PDFを新しいタブで開く）</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
