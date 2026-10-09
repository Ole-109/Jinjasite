import { Reveal } from "./Reveal";

type Props = {
  en: string;
  ja: string;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

/** Standard section heading: latin eyebrow + Mincho title + optional lead. */
export function SectionTitle({ en, ja, lead, align = "center", tone = "light", className = "" }: Props) {
  const isDark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className={`font-latin text-sm uppercase italic ${isDark ? "text-gold-soft" : "text-gold"}`}>{en}</p>
      <h2
        className={`font-mincho mt-3 text-3xl leading-snug font-semibold tracking-[0.18em] sm:text-4xl ${
          isDark ? "text-washi" : "text-ink"
        }`}
      >
        {ja}
      </h2>
      <div className={`mt-6 h-px w-14 ${align === "center" ? "mx-auto" : ""} bg-gold`} />
      {lead && (
        <p className={`mt-7 text-[0.95rem] leading-loose ${isDark ? "text-mist/80" : "text-ink-soft"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
