import Link from "next/link";
import { deityGroups } from "@/data/deities";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** The five deities of the main sanctuary, presented as vertical name tablets. */
export function HomeDeities() {
  const honsha = deityGroups.find((g) => g.id === "honsha") ?? deityGroups[0];
  const others = deityGroups.filter((g) => g.id !== honsha.id);

  return (
    <section className="sumi-texture relative overflow-hidden py-28 text-washi sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal>
            <p className="font-latin text-sm text-gold-soft uppercase italic">Enshrined Deities</p>
            <h2 className="font-mincho mt-4 text-3xl leading-snug font-semibold tracking-[0.18em] sm:text-5xl">御祭神</h2>
            <div className="mt-6 h-px w-14 bg-gold" />
            <p className="mt-10 leading-[2.2] text-mist/85">
              本殿の内陣中央には、天地開闢の始めに現れたとされる
              <span className="font-mincho text-gold-soft">国常立尊</span>
              を奉斎し、国土を創生した二柱の神、天照大御神、そして初代天皇・神武天皇を合わせ、五柱の神々をお祀りしています。
            </p>
            <ul className="mt-10 space-y-3 text-sm">
              {others.map((g) => (
                <li key={g.id} className="flex items-baseline gap-4 border-b border-washi/10 pb-3">
                  <span className="w-12 shrink-0 text-xs tracking-widest text-gold-soft/80">{g.rank}</span>
                  <span className="font-mincho tracking-[0.2em]">{g.shrine}</span>
                  <span className="ml-auto text-right text-xs text-mist/60">
                    {g.deities.map((d) => d.name).join("・")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <ButtonLink href="/deities" variant="outline-light">
                御祭神について
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ol className="flex flex-row-reverse justify-center gap-2 sm:gap-4 lg:justify-end">
              {honsha.deities.map((d, i) => (
                <li key={d.name}>
                  <Link
                    href="/deities"
                    className={`group relative flex min-h-[22rem] w-14 flex-col items-center border border-gold/25 bg-sumi-2/60 py-6 transition duration-700 hover:border-gold hover:bg-cedar sm:min-h-[30rem] sm:w-20 ${
                      i === 0 ? "border-gold/70 bg-cedar/80" : ""
                    } ${i % 2 === 1 ? "lg:mt-12" : ""}`}
                  >
                    <span className="font-latin text-[0.6rem] text-gold-soft/70">{["壱", "弐", "参", "肆", "伍"][i]}</span>
                    <span className="font-mincho tategaki mt-5 text-lg whitespace-nowrap tracking-[0.3em] text-washi sm:text-2xl">
                      {d.name}
                    </span>
                    <span className="tategaki mt-auto pt-6 text-[0.6rem] whitespace-nowrap tracking-[0.2em] text-mist/50 transition group-hover:text-mist/80 sm:text-[0.65rem]">
                      {d.reading}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
