import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline-light" | "outline-dark";
  external?: boolean;
  className?: string;
};

const styles = {
  gold: "bg-gold text-sumi hover:bg-gold-soft",
  "outline-light": "border border-washi/40 text-washi hover:border-gold-soft hover:text-gold-soft",
  "outline-dark": "border border-ink/30 text-ink hover:border-shu hover:text-shu",
};

/** Elegant pill-less button with a sliding arrow. */
export function ButtonLink({ href, children, variant = "outline-dark", external, className = "" }: Props) {
  const cls = `group inline-flex items-center gap-4 px-7 py-3.5 text-sm tracking-[0.2em] transition-colors duration-500 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="relative block h-px w-8 bg-current transition-all duration-500 group-hover:w-12">
        <span className="absolute -top-[3px] right-0 h-[7px] w-[7px] rotate-45 border-t border-r border-current" />
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
