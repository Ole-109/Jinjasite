import { heritage } from "@/data/visit";

/** 75 numbered dots: 1 (熊野本宮大社) → 75 (吉野川 柳の宿), with 玉置山 (10) in gold. */
export function NabikiMap() {
  const { total, tamaki, first, last } = heritage.nabiki;
  return (
    <figure className="mx-auto max-w-4xl">
      <figcaption className="sr-only">
        大峯七十五靡の一覧。1番は{first}、10番が玉置山、75番は{last}。
      </figcaption>
      <div className="flex items-center justify-between gap-4 text-xs tracking-[0.15em] text-lichen">
        <span>
          <span className="font-latin text-gold-soft">1</span>　{first}
        </span>
        <span aria-hidden className="hidden h-px flex-1 bg-gold/30 sm:block" />
        <span className="text-right">
          {last}　<span className="font-latin text-gold-soft">{total}</span>
        </span>
      </div>
      <ol className="mt-8 grid grid-cols-10 gap-1.5 sm:grid-cols-15 sm:gap-2.5">
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => {
          const isTamaki = n === tamaki;
          return (
            <li
              key={n}
              aria-label={isTamaki ? `${n}番 玉置山` : `${n}番`}
              className={`font-latin relative flex aspect-square items-center justify-center rounded-full border text-[0.65rem] sm:text-xs ${
                isTamaki
                  ? "border-gold bg-gold text-sumi shadow-[0_0_28px_rgba(185,153,92,0.55)]"
                  : "border-lichen/30 text-lichen/70"
              }`}
            >
              {n}
            </li>
          );
        })}
      </ol>
      <p className="mt-8 text-center text-sm tracking-[0.2em] text-gold-soft">
        <span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full bg-gold align-middle" />
        10番　玉置山（標高1,076m）
      </p>
    </figure>
  );
}
