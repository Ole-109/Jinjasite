import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Props = {
  tone?: "washi" | "kinari" | "sumi" | "cedar";
  id?: string;
  children: ReactNode;
  className?: string;
  /** Extra classes for the inner container. */
  inner?: string;
  labelledBy?: string;
};

const tones = {
  washi: "washi-texture text-ink",
  kinari: "bg-kinari text-ink",
  sumi: "sumi-texture text-mist",
  cedar: "bg-cedar text-mist",
};

/** Page band: alternates washi / sumi, with generous vertical rhythm. */
export function Section({ tone = "washi", id, children, className = "", inner = "", labelledBy }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative overflow-hidden py-24 sm:py-32 ${tones[tone]} ${className}`}
    >
      <Container className={inner}>{children}</Container>
    </section>
  );
}
