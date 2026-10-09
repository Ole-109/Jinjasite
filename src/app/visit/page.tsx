import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { etiquette, petPolicy, reiwaDaikaisyu, seishikiSanpai } from "@/data/visit";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "参拝のご案内",
  description:
    "玉置神社の正式参拝（服装）、参拝の作法、ペット連れでのご参拝、「令和の大改修」ご奉賛のご案内。",
};

export default function VisitPage() {
  const r = reiwaDaikaisyu;
  return (
    <>
      <PageHero
        ja="参拝のご案内"
        en="Worship Guide"
        lead="霊峰玉置山の神域へ。心静かにお参りいただくための、ご案内です。"
        crumbs={[{ label: "参拝のご案内" }]}
        image="/images/honsha.jpg"
        imagePosition="center 30%"
      />

      {/* 正式参拝 */}
      <Section tone="washi" id="seishiki">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionTitle en="Formal Worship" ja={seishikiSanpai.title} align="left" />
            <Reveal className="mt-12">
              <h3 className="font-mincho text-lg tracking-[0.2em] text-ink">{seishikiSanpai.subtitle}</h3>
              <div className="prose-jinja mt-6 text-ink-soft">
                {seishikiSanpai.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-xs tracking-widest text-ink-soft/80">{seishikiSanpai.signature}</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="self-center">
            <dl className="grid grid-cols-2 gap-px bg-gold/40">
              {seishikiSanpai.dress.map((d) => (
                <div key={d.who} className="bg-washi px-6 py-10 text-center sm:px-8 sm:py-14">
                  <dt className="font-latin text-sm text-gold uppercase italic">{d.who === "男性" ? "Men" : "Women"}</dt>
                  <dd>
                    <span className="font-mincho mt-3 block text-2xl tracking-[0.2em] text-ink">{d.who}</span>
                    <span className="mt-3 block text-sm text-ink-soft">{d.what}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-loose text-ink-soft">
              ご祈祷・正式参拝のお申し込みは社務所へ（TEL <a href={`tel:${site.tel}`} className="underline underline-offset-4">{site.tel}</a>）。
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 参拝作法 */}
      <Section tone="sumi" id="reihou">
        <SectionTitle en="Etiquette" ja="参拝の作法" tone="dark" lead={etiquette.note} />
        <ol className="mx-auto mt-20 grid max-w-5xl gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-5">
          {etiquette.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="bg-sumi-2 p-7">
              <p className="font-latin text-4xl text-gold/70">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-mincho mt-4 text-lg tracking-[0.15em] text-washi">{s.title}</h3>
              <p className="mt-3 text-sm leading-loose text-mist/75">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ペット */}
      <Section tone="washi" id="pets">
        <div className="mx-auto max-w-3xl">
          <SectionTitle en="Pets" ja="ペット連れでのご参拝" lead={`${petPolicy.effective}`} />
          <Reveal className="mt-14">
            <div className="prose-jinja text-ink-soft">
              {petPolicy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 border-l-2 border-gold bg-kinari px-6 py-5 text-sm leading-loose text-ink">
              {petPolicy.exception}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 令和の大改修 */}
      <Section tone="cedar" id="reiwa">
        <SectionTitle en="The Great Restoration of Reiwa" ja={r.title} tone="dark" lead={r.subtitle} />

        <div className="mx-auto mt-20 grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h3 className="font-mincho text-lg tracking-[0.25em] text-gold-soft">{r.purposeTitle}</h3>
              <div className="prose-jinja mt-6 text-mist/90">
                {r.purpose.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-14">
              <h3 className="font-mincho text-lg tracking-[0.25em] text-gold-soft">{r.appealTitle}</h3>
              <div className="prose-jinja mt-6 text-mist/90">
                {r.appeal.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-xs leading-loose tracking-widest text-lichen">{r.signature}</p>
            </Reveal>
          </div>

          <Reveal delay={150} className="self-start border border-gold/40 bg-sumi/50 p-7 sm:p-9">
            <p className="font-latin text-sm text-gold-soft uppercase italic">Outline</p>
            <p className="font-mincho mt-3 text-4xl tracking-[0.1em] text-washi">{r.budget.replace("総事業費", "")}</p>
            <p className="text-xs tracking-[0.3em] text-lichen">総事業費</p>

            <h4 className="font-mincho mt-10 text-sm tracking-[0.25em] text-gold-soft">事業概要</h4>
            <ul className="mt-4 space-y-2 text-sm text-mist/85">
              {r.works.map((w) => (
                <li key={w} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-gold" />
                  {w}
                </li>
              ))}
            </ul>

            <h4 className="font-mincho mt-10 text-sm tracking-[0.25em] text-gold-soft">事業期間</h4>
            <p className="mt-3 text-sm text-mist/85">{r.period}</p>

            <h4 className="font-mincho mt-10 text-sm tracking-[0.25em] text-gold-soft">御奉賛金</h4>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist/85">
              {r.donation.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <h4 className="font-mincho mt-10 text-sm tracking-[0.25em] text-gold-soft">奉賛手続等</h4>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist/85">
              {r.procedure.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <ButtonLink href={r.onlineUrl} external variant="gold">
                オンラインでご奉賛
              </ButtonLink>
              <Link href={r.progressPosts[0].href} className="text-sm tracking-widest text-gold-soft underline underline-offset-8 hover:text-washi">
                {r.progressPosts[0].label}を見る
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center text-sm leading-loose text-mist/80">
          <p className="font-mincho tracking-[0.25em] text-washi">お問い合わせ先</p>
          <p className="mt-3">{r.contact.name}</p>
          <p>{r.contact.address}</p>
          <p>
            電話：<a href={`tel:${r.contact.tel}`} className="hover:text-gold-soft">{r.contact.tel}</a>　FAX：{r.contact.fax}
          </p>
        </Reveal>
      </Section>

      <Section tone="washi">
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 text-center">
          <ButtonLink href="/sukeikai">崇敬会のご案内</ButtonLink>
          <ButtonLink href="/access">アクセス</ButtonLink>
          <ButtonLink href="/road">道路情報</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
