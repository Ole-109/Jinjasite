import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Shide } from "@/components/ui/Shide";
import { Section } from "@/components/page/Section";
import { sukeikai } from "@/data/visit";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "玉置神社崇敬会",
  description:
    "玉置神社崇敬会は、国常立尊の御神徳を仰ぎ、玉置山の自然を愛する人の集い。春秋の大祭へのご案内、御神符、襖絵の無料拝観などの特典があります。",
};

export default function SukeikaiPage() {
  return (
    <>
      <PageHero
        ja="崇敬会"
        en="Supporters' Association"
        lead="国常立尊の御神徳を仰ぎ、玉置山の神気に満ちた自然を愛する人の集い。"
        crumbs={[{ label: "崇敬会" }]}
        image="/images/dainichido.jpg"
        imagePosition="center 60%"
      />

      <Section tone="washi">
        <div className="mx-auto max-w-3xl">
          <SectionTitle en="Purpose" ja={sukeikai.purposeTitle} />
          <Reveal className="mt-14">
            <div className="prose-jinja text-ink-soft">
              {sukeikai.purpose.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sumi">
        <SectionTitle en="Benefits" ja="ご入会の特典" tone="dark" lead={sukeikai.benefitsIntro} />
        <ol className="mx-auto mt-20 grid max-w-5xl gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {sukeikai.benefits.map((b, i) => (
            <Reveal as="li" key={b} delay={i * 90} className="bg-sumi-2 p-8">
              <p className="font-latin text-4xl text-gold/70">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-5 text-sm leading-loose text-mist/90">{b}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="washi">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Shide tone="gold" />
          <p className="mt-10 text-sm leading-loose text-ink-soft">{sukeikai.contactNote}</p>
          <p className="font-mincho mt-6 text-xl tracking-[0.2em] text-ink">{site.officeName}</p>
          <p className="mt-2 text-sm text-ink-soft">
            TEL <a href={`tel:${site.tel}`} className="underline underline-offset-4">{site.tel}</a>　FAX {site.fax}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/kouhoushi">広報紙「玉置之巨杉」</ButtonLink>
            <ButtonLink href="/festivals">祭事のご案内</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
