import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const cards = [
  {
    href: "/access",
    en: "Access",
    ja: "アクセス",
    body: "大阪・名古屋・和歌山・三重からの道のり、十津川温泉からのバス・タクシーのご案内。",
  },
  {
    href: "/road",
    en: "Road Information",
    ja: "道路情報",
    body: "山道の積雪・凍結や通行規制など、十津川温泉周辺から玉置神社への最新の道路状況。",
  },
  {
    href: "/visit",
    en: "Worship",
    ja: "参拝のご案内",
    body: "正式参拝（ご祈祷）のお申し込み、ペット連れでの参拝についてのお願い。",
  },
];

export function HomeAccess() {
  return (
    <section className="washi-texture py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          en="Plan Your Visit"
          ja="ご参拝にあたって"
          lead="玉置神社は深い山中に鎮座しております。お出かけの前に、道路情報と交通手段をご確認ください。"
        />

        <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={i * 120} className="bg-washi">
              <Link href={c.href} className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-kinari sm:p-10">
                <span className="font-latin text-xs text-gold uppercase italic">{c.en}</span>
                <span className="font-mincho mt-3 text-2xl tracking-[0.2em] text-ink">{c.ja}</span>
                <span className="mt-5 flex-1 text-sm leading-loose text-ink-soft">{c.body}</span>
                <span className="mt-8 flex items-center gap-3 text-xs tracking-[0.25em] text-shu">
                  詳しく見る
                  <span aria-hidden className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-10 border border-ink/10 bg-washi/60 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mincho text-xl tracking-[0.2em] text-ink">{site.officeName}</p>
            <p className="mt-3 text-sm text-ink-soft">
              {site.postalCode}　{site.address}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-10">
            <a href={`tel:${site.tel}`} className="group">
              <span className="font-latin block text-xs text-gold uppercase italic">Tel</span>
              <span className="font-mincho text-2xl tracking-[0.12em] text-ink transition group-hover:text-shu sm:text-3xl">
                {site.tel}
              </span>
            </a>
            <div>
              <span className="font-latin block text-xs text-gold uppercase italic">Fax</span>
              <span className="font-mincho text-2xl tracking-[0.12em] text-ink-soft sm:text-3xl">{site.fax}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
