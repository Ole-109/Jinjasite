import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

const tiles = [
  { id: "honsha", name: "本社", note: "寛政6年再建・入母屋造の本殿", img: "/images/honsha.jpg", cls: "md:col-span-7 md:row-span-2", pos: "40% center" },
  { id: "dainichido", name: "大日堂社", note: "双身大日如来を祀る堂社", img: "/images/dainichido.jpg", cls: "md:col-span-5", pos: "center" },
  { id: "izumo-kyokai", name: "出雲大社玉置教会", note: "明治20年造営", img: "/images/izumo-kyokai.jpg", cls: "md:col-span-5", pos: "center" },
  { id: "wakamiya-jinmu", name: "若宮社・神武社", note: "見世棚造の末社", img: "/images/wakamiya-jinmu.jpg", cls: "md:col-span-12", pos: "center 60%" },
];

const others = ["社務所（重要文化財）", "彩色戸襖", "梵鐘（重要文化財）", "杉の巨樹群（天然記念物）", "神楽殿", "絵馬堂", "御神輿殿"];

export function HomePrecincts() {
  return (
    <section className="washi-texture py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          en="Sacred Precincts"
          ja="境内のご案内"
          lead="三万平方メートルの杜に、社殿と堂宇、そして千古の巨樹が静かに佇みます。"
        />

        <div className="mt-16 grid auto-rows-[15rem] gap-3 sm:auto-rows-[18rem] md:grid-cols-12">
          {tiles.map((t, i) => (
            <Reveal key={t.id} delay={i * 100} className={`${t.cls} ${t.id === "wakamiya-jinmu" ? "md:h-[18rem]" : ""}`}>
              <Link href={`/precincts#${t.id}`} className="group relative block h-full overflow-hidden bg-sumi">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover opacity-90 transition duration-[2000ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                  style={{ objectPosition: t.pos }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-sumi/85 via-sumi/10 to-transparent" />
                <span className="absolute bottom-0 left-0 p-6 text-washi sm:p-8">
                  <span className="font-mincho block text-xl tracking-[0.25em] sm:text-2xl">{t.name}</span>
                  <span className="mt-1 block text-xs tracking-widest text-mist/80">{t.note}</span>
                </span>
                <span
                  aria-hidden
                  className="absolute top-6 right-6 h-8 w-8 border-t border-r border-gold-soft/0 transition duration-700 group-hover:border-gold-soft/80"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-10">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {others.map((o) => (
              <li key={o} className="border border-ink/15 px-4 py-1.5 text-xs tracking-[0.2em] text-ink-soft">
                {o}
              </li>
            ))}
          </ul>
          <ButtonLink href="/precincts">境内をめぐる</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
