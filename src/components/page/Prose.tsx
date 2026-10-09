import type { ReactNode } from "react";

/** Long-form body text block using the shrine prose style. */
export function Prose({ children, className = "", tone = "light" }: { children: ReactNode; className?: string; tone?: "light" | "dark" }) {
  return (
    <div className={`prose-jinja ${tone === "dark" ? "text-mist/90" : "text-ink-soft"} ${className}`}>{children}</div>
  );
}
