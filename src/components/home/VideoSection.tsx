"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

/** YouTube films behind a click-to-load facade (no third-party JS until play). */
export function VideoSection() {
  const [active, setActive] = useState<number>(1);
  const [playing, setPlaying] = useState(false);
  const video = site.videos[active];

  return (
    <section className="sumi-texture relative overflow-hidden py-28 text-washi sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          en="Film"
          ja="映像で巡る玉置の杜"
          lead="霧が流れ、巨樹が息づく。神の棲む杜の四季を、映像でご覧ください。"
          tone="dark"
        />

        <Reveal className="mt-16">
          <div className="relative aspect-video overflow-hidden bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] ring-1 ring-gold/20">
            {playing ? (
              <iframe
                key={video.id}
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`${video.title}（${video.duration}）を再生`}
              >
                <Image
                  src={video.thumb}
                  alt=""
                  fill
                  sizes="(min-width: 1152px) 1100px, 100vw"
                  className="object-cover opacity-80 transition duration-[1500ms] group-hover:scale-[1.03] group-hover:opacity-95"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-sumi/80 via-transparent to-sumi/20" />
                <span className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-washi/60 backdrop-blur-sm transition duration-500 group-hover:scale-110 group-hover:border-gold-soft sm:h-24 sm:w-24">
                  <span className="ml-1.5 h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-washi transition group-hover:border-l-gold-soft" />
                </span>
                <span className="absolute bottom-5 left-5 text-left sm:bottom-8 sm:left-8">
                  <span className="font-mincho block text-lg tracking-[0.2em] sm:text-2xl">{video.title}</span>
                  <span className="font-latin mt-1 block text-xs text-gold-soft">{video.duration}</span>
                </span>
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="映像を選択">
          {site.videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              className={`px-5 py-2.5 text-xs tracking-[0.25em] transition ${
                i === active
                  ? "border border-gold bg-gold/10 text-gold-soft"
                  : "border border-washi/15 text-mist/70 hover:border-washi/40 hover:text-washi"
              }`}
            >
              {v.title.replace("神の棲む杜 ", "")}　{v.duration}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
