import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/page/Section";
import { deityGroups, type DeityGroup } from "@/data/deities";

export const metadata: Metadata = {
  title: "御祭神",
  description:
    "玉置神社の御祭神。本社の国常立尊・伊弉諾尊・伊弉冉尊・天照大御神・神日本磐余彦尊をはじめ、摂社・三柱神社、末社の神々をご紹介します。",
};

function DeityCard({ d, featured, dark }: { d: DeityGroup["deities"][number]; featured?: boolean; dark?: boolean }) {
  return (
    <article
      className={`relative border p-7 sm:p-8 ${
        featured ? "border-gold/70 sm:p-12" : dark ? "border-gold/25" : "border-gold/35"
      } ${dark ? "bg-sumi-2/60" : "bg-washi/70"}`}
    >
      <span aria-hidden className="absolute -top-px left-6 h-px w-12 bg-gold" />
      <p className="font-latin text-[0.7rem] text-gold uppercase italic">{d.reading}</p>
      <h3
        className={`font-mincho mt-3 font-semibold tracking-[0.2em] ${dark ? "text-washi" : "text-ink"} ${
          featured ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"
        }`}
      >
        {d.name}
      </h3>
      {d.role && (
        <p className={`mt-5 text-sm leading-loose ${dark ? "text-mist/80" : "text-ink-soft"} ${featured ? "max-w-xl sm:text-base" : ""}`}>
          {d.role}
        </p>
      )}
    </article>
  );
}

function Group({ g, dark }: { g: DeityGroup; dark?: boolean }) {
  const [first, ...rest] = g.deities;
  const isHonsha = g.id === "honsha";
  return (
    <div className="mt-20 first:mt-0">
      <Reveal className="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <span className="font-latin text-sm text-gold uppercase italic">{g.rank}</span>
        <h3 className={`font-mincho text-2xl tracking-[0.3em] sm:text-3xl ${dark ? "text-washi" : "text-ink"}`}>{g.shrine}</h3>
        <span aria-hidden className="hidden h-px min-w-12 flex-1 bg-gold/40 sm:block" />
      </Reveal>
      {g.summary && (
        <Reveal>
          <p className={`mb-10 max-w-3xl text-sm leading-loose sm:text-base ${dark ? "text-mist/80" : "text-ink-soft"}`}>{g.summary}</p>
        </Reveal>
      )}
      {isHonsha ? (
        <div className="space-y-6">
          <Reveal>
            <DeityCard d={first} featured dark={dark} />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <DeityCard d={d} dark={dark} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {g.deities.map((d, i) => (
            <Reveal key={d.name} delay={i * 100}>
              <DeityCard d={d} dark={dark} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DeitiesPage() {
  const honsha = deityGroups.filter((g) => g.id === "honsha");
  const sessha = deityGroups.filter((g) => g.id === "mihashira");
  const massha = deityGroups.filter((g) => ["wakamiya", "jinmu", "tamaishi"].includes(g.id));
  return (
    <>
      <PageHero
        ja="御祭神"
        en="Deities"
        lead="天地開闢の神・国常立尊を主祭神に、本社の五柱をはじめ、摂社・末社の神々をお祀りしています。"
        crumbs={[{ label: "御祭神" }]}
        image="/images/honsha.jpg"
        imagePosition="center 40%"
      />

      <Section tone="washi">
        <SectionTitle en="Honsha" ja="本社の五柱" lead="本殿には三基の宮殿が安置され、合せて五柱の神々を奉祀しています。" />
        <div className="mt-20">
          {honsha.map((g) => (
            <Group key={g.id} g={g} />
          ))}
        </div>
      </Section>

      <Section tone="sumi">
        <SectionTitle en="Sessha & Massha" ja="摂社・末社の神々" tone="dark" lead="境内には、古くから地主神としてお祀りされる三柱神社をはじめ、さまざまな神々が鎮座されています。" />
        <div className="mt-20">
          {sessha.map((g) => (
            <Group key={g.id} g={g} dark />
          ))}
          {massha.map((g) => (
            <Group key={g.id} g={g} dark />
          ))}
        </div>
        <Reveal className="mt-24 flex flex-col items-center gap-8 text-center">
          <div className="relative aspect-[3/2] w-full max-w-xl overflow-hidden">
            <Image src="/images/wakamiya-jinmu.jpg" alt="並んで鎮座する若宮社と神武社" fill sizes="(min-width: 640px) 36rem, 100vw" className="object-cover opacity-90" />
          </div>
          <ButtonLink href="/precincts" variant="outline-light">境内のご案内を見る</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
