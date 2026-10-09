import Image from "next/image";
import Link from "next/link";
import { Mist } from "./Mist";

type Crumb = { href?: string; label: string };

type Props = {
  ja: string;
  en: string;
  lead?: string;
  image?: string;
  imagePosition?: string;
  crumbs?: Crumb[];
};

/** Sub-page hero: dark photographic band with mist, vertical title and breadcrumbs. */
export function PageHero({ ja, en, lead, image = "/images/honsha.jpg", imagePosition = "center", crumbs = [] }: Props) {
  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-sumi text-washi">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-75"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sumi/70 via-sumi/30 to-sumi" />
      <Mist className="-z-10" intensity={0.8} />

      <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-10 px-5 pt-36 pb-14 sm:px-8 lg:pb-20">
        <div className="max-w-2xl">
          <p className="font-latin text-sm text-gold-soft uppercase italic">{en}</p>
          <h1 className="font-mincho mt-4 text-4xl font-semibold tracking-[0.25em] sm:text-6xl">{ja}</h1>
          {lead && <p className="mt-6 max-w-xl text-sm leading-loose text-mist/85 sm:text-base">{lead}</p>}
          <nav aria-label="パンくずリスト" className="mt-10 text-xs tracking-widest text-mist/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-gold-soft">
                  ホーム
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden className="text-gold/60">／</span>
                  {c.href ? (
                    <Link href={c.href} className="transition hover:text-gold-soft">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-mist/90">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <p aria-hidden className="font-mincho tategaki hidden text-sm tracking-[0.6em] text-washi/40 lg:block">
          霊峰玉置山　神の棲む杜
        </p>
      </div>
    </section>
  );
}
