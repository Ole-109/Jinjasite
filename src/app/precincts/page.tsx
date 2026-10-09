import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Shide } from "@/components/ui/Shide";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FramedImage } from "@/components/page/FramedImage";
import { PrecinctIndex } from "@/components/precincts/PrecinctIndex";
import { precincts } from "@/data/precincts";

export const metadata: Metadata = {
  title: "境内のご案内",
  description:
    "本社、三柱神社、若宮社・神武社、社務所、出雲大社玉置教会、大日堂社、神楽殿、絵馬堂、御神輿殿、杉の巨樹群など、玉置神社の境内をご案内します。",
};

export default function PrecinctsPage() {
  const items = precincts.map((p) => ({ id: p.id, name: p.name }));
  return (
    <>
      <PageHero
        ja="境内のご案内"
        en="Precincts"
        lead="3万平方メートルの聖域に点在する社殿と文化財、そして三千年の杉の杜。"
        crumbs={[{ label: "境内のご案内" }]}
        image="/images/dainichido.jpg"
        imagePosition="center 40%"
      />
      <PrecinctIndex items={items} />

      <div className="washi-texture">
        {precincts.map((p, idx) => {
          const dark = idx % 2 === 1;
          const big = p.images.find((im) => !im.small);
          const smalls = p.images.filter((im) => im.small);
          const flip = idx % 4 >= 2;
          return (
            <section
              key={p.id}
              id={p.id}
              className={`relative scroll-mt-[calc(var(--header-h)+3.5rem)] py-20 sm:py-28 ${
                dark ? "sumi-texture text-mist" : "text-ink"
              }`}
            >
              <Container>
                <div className={`grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}>
                  <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <Reveal>
                      <p className="font-latin text-sm text-gold uppercase italic">
                        {String(idx + 1).padStart(2, "0")} — {p.kind}
                      </p>
                      <h2
                        className={`font-mincho mt-3 text-3xl leading-snug font-semibold tracking-[0.18em] sm:text-4xl ${
                          dark ? "text-washi" : "text-ink"
                        }`}
                      >
                        {p.name}
                      </h2>
                      {p.reading && <p className="mt-2 text-xs tracking-[0.3em] text-lichen">{p.reading}</p>}
                      <div className="mt-6 h-px w-14 bg-gold" />
                    </Reveal>

                    {p.notice && (
                      <Reveal className="mt-8">
                        <p className={`inline-block border px-5 py-3 text-sm tracking-widest ${
                            dark ? "border-gold/60 bg-gold/10 text-gold-soft" : "border-shu/60 bg-shu/5 text-shu-deep"
                          }`}>
                          {p.notice}
                        </p>
                      </Reveal>
                    )}

                    <Reveal className="mt-8">
                      <div className={`prose-jinja ${dark ? "text-mist/90" : "text-ink-soft"}`}>
                        {p.paragraphs.map((t) => (
                          <p key={t}>{t}</p>
                        ))}
                      </div>
                      {p.footnotes?.map((f) => (
                        <p key={f} className={`mt-6 text-xs leading-loose ${dark ? "text-lichen" : "text-ink-soft/80"}`}>
                          {f}
                        </p>
                      ))}
                    </Reveal>
                  </div>

                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    {p.images.length === 0 && (
                      <Reveal delay={150} className="hidden justify-center lg:flex">
                        <p aria-hidden className="font-mincho tategaki text-6xl tracking-[0.3em] text-gold/25">
                          {p.name.replace(/^(摂社・|末社・)/, "")}
                        </p>
                      </Reveal>
                    )}
                    {big && (
                      <Reveal delay={150}>
                        <FramedImage {...big} tone={dark ? "dark" : "light"} sizes="(min-width: 1024px) 40vw, 100vw" />
                      </Reveal>
                    )}
                    {smalls.length > 0 && (
                      <Reveal delay={150} className="flex flex-wrap gap-8 pr-3 pb-3 sm:gap-10">
                        {smalls.map((im) => (
                          <FramedImage key={im.src} {...im} tone={dark ? "dark" : "light"} className="w-full" />
                        ))}
                      </Reveal>
                    )}
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="washi-texture py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <Shide tone="gold" />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/deities">御祭神</ButtonLink>
            <ButtonLink href="/visit">参拝のご案内</ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
