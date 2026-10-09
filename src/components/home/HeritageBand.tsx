import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Mist } from "@/components/ui/Mist";

/** 大峯奥駈道 — the 75 靡 pilgrimage stations, with 玉置山 as the 10th. */
export function HeritageBand() {
  const stations = Array.from({ length: 75 }, (_, i) => i + 1);
  return (
    <section className="relative isolate overflow-hidden bg-cedar py-28 text-washi sm:py-40">
      <Image
        src="/images/izumo-kyokai.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sumi via-sumi/80 to-sumi/40" />
      <Mist className="-z-10" intensity={0.7} />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-latin text-sm text-gold-soft uppercase italic">UNESCO World Heritage · 2004</p>
          <h2 className="font-mincho mt-4 text-3xl leading-snug font-semibold tracking-[0.18em] sm:text-5xl">
            大峯奥駈道
            <span className="mt-3 block text-lg font-normal tracking-[0.3em] text-mist/80 sm:text-2xl">
              紀伊山地の霊場と参詣道
            </span>
          </h2>
          <p className="mt-10 max-w-xl leading-[2.2] text-mist/85">
            熊野本宮大社から吉野へ。神仏が宿るとされた七十五の拝所・行場「靡（なびき）」を結ぶ修験の道。
            霊峰玉置山はその第十番の靡にあたり、かつては山伏姿の行者の往来が絶えませんでした。
          </p>
          <div className="mt-12">
            <ButtonLink href="/heritage" variant="outline-light">
              世界遺産について
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <figure aria-label="大峯七十五靡のうち、玉置山は第十番">
            <div className="grid grid-cols-15 gap-1.5 sm:gap-2" aria-hidden>
              {stations.map((n) => (
                <span
                  key={n}
                  className={`flex aspect-square items-center justify-center rounded-full text-[0.55rem] transition ${
                    n === 10
                      ? "scale-150 bg-gold font-semibold text-sumi shadow-[0_0_24px_rgba(214,192,143,0.7)]"
                      : "border border-washi/20 text-transparent"
                  }`}
                >
                  {n === 10 ? "10" : ""}
                </span>
              ))}
            </div>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-widest text-mist/70">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />第十番　玉置山
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full border border-washi/30" />大峯七十五靡（うち35が十津川村内）
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
