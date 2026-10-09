import Image from "next/image";
import type { RoadReport } from "@/data/road";

export function formatJa(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

const WD = ["日", "月", "火", "水", "木", "金", "土"];
export function weekday(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return WD[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
}

/** Body of a single road report (paragraphs, images, links). */
export function ReportBody({ r, dark }: { r: RoadReport; dark?: boolean }) {
  return (
    <div>
      <div className={`space-y-2 text-sm leading-loose ${dark ? "text-mist/85" : "text-ink-soft"}`}>
        {r.body.map((line, i) => (
          <p key={i} className="[overflow-wrap:anywhere]">{line}</p>
        ))}
      </div>
      {r.links && (
        <ul className="mt-4 space-y-1">
          {r.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm underline underline-offset-4 ${dark ? "text-gold-soft hover:text-washi" : "text-shu hover:text-shu-deep"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {r.images && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {r.images.map((im) => (
            <figure key={im.src} className="border border-gold/40 bg-sumi/30 p-2">
              <Image src={im.src} alt={im.alt} width={im.width} height={im.height} sizes="(min-width: 768px) 40vw, 100vw" className="h-auto w-full" />
              <figcaption className={`px-1 pt-2 text-xs ${dark ? "text-lichen" : "text-ink-soft"}`}>{im.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
