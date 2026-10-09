import { UpcomingFestivals } from "@/components/festivals/UpcomingFestivals";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { festivals } from "@/data/festivals";

const MONTHS = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"];

export function HomeFestivals() {
  const byMonth = MONTHS.map((name, i) => ({ name, n: i + 1, items: festivals.filter((f) => f.month === i + 1) }));

  return (
    <section className="relative overflow-hidden bg-sumi-2 py-28 text-washi sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="font-latin text-sm text-gold-soft uppercase italic">Rites &amp; Festivals</p>
            <h2 className="font-mincho mt-4 text-3xl font-semibold tracking-[0.18em] sm:text-5xl">祭事</h2>
            <div className="mt-6 h-px w-14 bg-gold" />
            <p className="mt-8 max-w-xl leading-[2.2] text-mist/80">
              歳旦祭に始まり、除夜祭に終わる一年。毎朝の日供祭から十月二十四日の例祭まで、祈りは絶えることなく続いています。
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ButtonLink href="/festivals" variant="outline-light">
              年間祭事一覧
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <UpcomingFestivals limit={3} />
        </Reveal>

        {/* Year ribbon */}
        <Reveal className="mt-20">
          <ol className="grid grid-cols-3 gap-px bg-washi/10 sm:grid-cols-4 lg:grid-cols-12">
            {byMonth.map((m) => (
              <li key={m.n} className="flex min-h-36 flex-col bg-sumi-2 p-4">
                <span className="font-mincho text-2xl text-washi/90">
                  {m.n}
                  <span className="text-xs">月</span>
                </span>
                <span className="text-[0.6rem] tracking-[0.3em] text-lichen">{m.name}</span>
                <ul className="mt-3 space-y-1.5">
                  {m.items.map((f) => (
                    <li
                      key={f.id}
                      className={`text-[0.7rem] leading-snug tracking-wide ${f.major ? "text-gold-soft" : "text-mist/60"}`}
                    >
                      {f.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
