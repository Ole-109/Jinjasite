/** 紙垂 (shide) zig-zag paper streamer with shimenawa rope — section divider ornament. */
export function Shide({ className = "", tone = "gold" }: { className?: string; tone?: "gold" | "ink" | "washi" }) {
  const color = tone === "gold" ? "text-gold" : tone === "ink" ? "text-ink/60" : "text-washi/70";
  return (
    <div aria-hidden className={`flex items-center justify-center gap-5 ${color} ${className}`}>
      <span className="h-px w-16 bg-current opacity-50 sm:w-28" />
      <svg viewBox="0 0 120 40" className="h-8 w-24" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M4 6c18 6 38 8 56 8s38-2 56-8" strokeLinecap="round" />
        <path d="M4 9c18 6 38 8 56 8s38-2 56-8" strokeLinecap="round" opacity="0.5" />
        <path d="M38 14v6h6v6h-6v6h6v6" strokeLinejoin="miter" />
        <path d="M82 14v6h-6v6h6v6h-6v6" strokeLinejoin="miter" />
        <circle cx="60" cy="24" r="2" fill="currentColor" stroke="none" />
      </svg>
      <span className="h-px w-16 bg-current opacity-50 sm:w-28" />
    </div>
  );
}
