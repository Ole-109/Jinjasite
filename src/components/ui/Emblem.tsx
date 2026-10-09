/** 宝珠 (sacred jewel) mark — a nod to 玉置, "where the jewel was placed". Decorative. */
export function Emblem({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="none" stroke="currentColor">
      <circle cx="32" cy="32" r="30" strokeWidth="1" opacity="0.55" />
      <circle cx="32" cy="32" r="26.5" strokeWidth="0.6" opacity="0.35" />
      <path
        d="M32 13c4.5 6.5 12.5 11.5 12.5 21a12.5 12.5 0 0 1-25 0c0-9.5 8-14.5 12.5-21Z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M32 13c-1 6 3 9 3 14" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M21 50h22M24 53.5h16" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
