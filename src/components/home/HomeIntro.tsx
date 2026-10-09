import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Shide } from "@/components/ui/Shide";

const facts = [
  { value: "1,076", unit: "m", label: "玉置山 標高", en: "Elevation" },
  { value: "紀元前37", unit: "年", label: "創建と伝わる", en: "Founded" },
  { value: "3,000", unit: "年", label: "神代杉 樹齢", en: "Sacred Cedar" },
  { value: "2004", unit: "年", label: "世界遺産登録", en: "UNESCO" },
];

export function HomeIntro() {
  return (
    <section id="intro" className="washi-texture relative overflow-hidden py-28 sm:py-40">
      {/* Giant faint watermark */}
      <p
        aria-hidden
        className="font-mincho tategaki pointer-events-none absolute top-16 -right-6 text-[9rem] leading-none text-ink/[0.035] select-none sm:text-[14rem]"
      >
        玉置
      </p>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[auto_1fr] lg:gap-24">
          <Reveal className="flex justify-center lg:justify-start">
            <h2 className="font-mincho tategaki text-[1.7rem] leading-[2.1] font-medium tracking-[0.3em] whitespace-nowrap text-ink sm:text-4xl">
              <span className="block">悠久の霧に抱かれし</span>
              <span className="block pt-16 text-shu-deep">熊野三山の奥院</span>
            </h2>
          </Reveal>

          <div>
            <Reveal delay={150}>
              <p className="font-latin text-sm text-gold uppercase italic">The Inner Sanctuary of Kumano</p>
              <p className="font-mincho mt-8 text-lg leading-[2.3] tracking-[0.12em] text-ink sm:text-xl">
                大峰山脈の南端、標高1,076mの玉置山。その山頂近く、樹齢三千年と伝わる神代杉の杜に、玉置神社は鎮まります。
              </p>
              <p className="mt-8 leading-[2.2] text-ink-soft">
                創立は紀元前三十七年、第十代崇神天皇の御宇に、王城火防鎮護と悪魔退散のため早玉神を奉祀したことに始まると伝えられます。古くより熊野から吉野に至る熊野・大峰修験の行場の一つとされ、平安時代には玉置三所権現、また熊野三山の奥院と称せられ、霊場として栄えてまいりました。
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-12">
              <ButtonLink href="/about">神社概要を見る</ButtonLink>
            </Reveal>
          </div>
        </div>

        <Shide className="mt-28" />

        <dl className="mt-20 grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              key={f.en}
              delay={i * 120}
              className={`px-4 text-center ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${
                i > 0 ? "lg:border-l lg:border-ink/10" : ""
              }`}
            >
              <dt className="font-latin text-xs text-gold uppercase italic">{f.en}</dt>
              <dd className="mt-3">
                <span className="font-mincho text-3xl font-semibold tracking-wider text-ink sm:text-5xl">{f.value}</span>
                <span className="font-mincho ml-1 text-sm text-ink-soft">{f.unit}</span>
              </dd>
              <dd className="mt-2 text-xs tracking-[0.25em] text-ink-soft">{f.label}</dd>
            </Reveal>
          ))}
        </dl>

        {/* Secondary photo pairing */}
        <div className="mt-32 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden md:col-span-7">
            <Image
              src="/images/wakamiya-jinmu.jpg"
              alt="杉木立に佇む末社・若宮社と神武社"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover transition-transform duration-[2500ms] ease-out hover:scale-105"
            />
          </Reveal>
          <Reveal delay={200} className="md:col-span-5 md:pb-10">
            <div className="relative aspect-[4/5] overflow-hidden md:-ml-20 md:aspect-[3/4]">
              <Image
                src="/images/dainichido.jpg"
                alt="大日堂社"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[60%_center] transition-transform duration-[2500ms] ease-out hover:scale-105"
              />
            </div>
            <p className="mt-6 text-sm leading-loose text-ink-soft">
              境内には天然記念物に指定された杉の巨樹が叢生し、三万平方メートルの杜は永らく聖域として守られてきました。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
