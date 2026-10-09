import Image from "next/image";
import { Mist } from "@/components/ui/Mist";
import { site } from "@/data/site";

/** Full-bleed opening scene: misty 本殿, vertical title, slow Ken-Burns drift. */
export function HomeHero() {
  return (
    <section className="relative isolate h-svh min-h-[640px] overflow-hidden bg-sumi text-washi">
      <div className="animate-hero-zoom absolute inset-0 -z-20">
        <Image
          src="/images/honsha.jpg"
          alt="霧に包まれた玉置神社の本殿と鳥居"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_center]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sumi/55 via-sumi/10 to-sumi/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(12,14,12,0.55))]" />
      <Mist intensity={1.2} />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-end px-5 sm:px-8">
        {/* Vertical title block */}
        <div className="animate-hero-in flex flex-row-reverse items-start gap-6 sm:gap-10 lg:mr-10">
          <h1 className="font-mincho tategaki text-5xl leading-none font-semibold tracking-[0.42em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] sm:text-7xl">
            {site.name}
          </h1>
          <div className="flex flex-col items-center gap-5 pt-2">
            <span className="h-14 w-px bg-gold-soft/70" />
            <p className="font-mincho tategaki text-lg tracking-[0.55em] text-washi/90 sm:text-2xl">{site.tagline}</p>
          </div>
          <p className="font-mincho tategaki hidden pt-24 text-xs tracking-[0.5em] text-mist/70 sm:block">
            奈良県十津川村　霊峰玉置山　標高一〇七六米
          </p>
        </div>
      </div>

      {/* Bottom bar: latin title + scroll cue */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 pb-8 sm:px-8 sm:pb-10">
          <div className="animate-hero-in [animation-delay:600ms]">
            <p className="font-latin text-xs text-gold-soft uppercase italic sm:text-sm">{site.taglineEn}</p>
            <p className="mt-2 max-w-xs text-[0.7rem] leading-relaxed tracking-widest text-mist/70 sm:max-w-sm sm:text-xs">
              熊野三山の奥院 ・ 世界遺産「紀伊山地の霊場と参詣道」
            </p>
          </div>
          <a href="#intro" className="group flex flex-col items-center gap-3 text-mist/80">
            <span className="font-latin text-[0.65rem] uppercase [writing-mode:vertical-rl]">Scroll</span>
            <span className="relative block h-16 w-px overflow-hidden bg-washi/15">
              <span className="animate-scroll-cue absolute inset-0 bg-gold-soft" />
            </span>
            <span className="sr-only">本文へ</span>
          </a>
        </div>
      </div>
    </section>
  );
}
