import Link from "next/link";
import { nav, site } from "@/data/site";
import { Emblem } from "@/components/ui/Emblem";
import { Mist } from "@/components/ui/Mist";

export function Footer() {
  return (
    <footer className="sumi-texture relative overflow-hidden text-mist">
      <Mist className="opacity-40" intensity={0.6} />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-10 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex gap-10">
            <p
              aria-hidden
              className="font-mincho tategaki hidden text-3xl leading-relaxed tracking-[0.45em] text-washi/90 sm:block"
            >
              {site.tagline}
            </p>
            <div>
              <Link href="/" className="flex items-center gap-4 text-washi">
                <Emblem className="h-14 w-14 text-gold-soft" />
                <span>
                  <span className="font-mincho block text-2xl font-semibold tracking-[0.35em]">{site.name}</span>
                  <span className="font-latin mt-1 block text-xs text-gold-soft/80 uppercase">{site.nameEn}</span>
                </span>
              </Link>
              <address className="mt-8 space-y-1.5 text-sm leading-relaxed not-italic">
                <p className="font-mincho text-washi">{site.officeName}</p>
                <p>
                  {site.postalCode} {site.address}
                </p>
                <p>
                  TEL{" "}
                  <a href={`tel:${site.tel}`} className="transition hover:text-gold-soft">
                    {site.tel}
                  </a>
                  <span className="mx-3 text-gold/50">|</span>FAX {site.fax}
                </p>
              </address>
              <p className="mt-8 max-w-md text-xs leading-loose text-mist/60">
                標高{site.elevation}の玉置山山頂近くに鎮座。世界遺産「紀伊山地の霊場と参詣道」大峯奥駈道の聖地。
              </p>
            </div>
          </div>

          <nav aria-label="フッターメニュー">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group block py-1">
                    <span className="font-mincho block text-sm tracking-[0.2em] text-washi/90 transition group-hover:text-gold-soft">
                      {item.ja}
                    </span>
                    <span className="font-latin block text-[0.65rem] text-mist/40 uppercase">{item.en}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hairline-gold mt-20 opacity-40" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.7rem] tracking-widest text-mist/50 sm:flex-row">
          <p>Copyright © {site.name} All Rights Reserved.</p>
          <a href="#top" className="font-latin uppercase transition hover:text-gold-soft">
            Page Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
