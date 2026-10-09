import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Legacy ≈300px photos: shown at (at most) their natural size inside a gold-offset frame. */
  small?: boolean;
  tone?: "light" | "dark";
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Photo with a thin offset gold frame. Small legacy photos are never stretched. */
export function FramedImage({ src, alt, width, height, small, tone = "light", className = "", sizes, priority }: Props) {
  const maxW = small ? Math.min(width, 320) : undefined;
  return (
    <div className={`relative ${className}`} style={maxW ? { maxWidth: maxW } : undefined}>
      <div
        aria-hidden
        className={`absolute inset-0 translate-x-3 translate-y-3 border ${
          tone === "dark" ? "border-gold/40" : "border-gold/60"
        }`}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? (small ? `${maxW}px` : "(min-width: 1024px) 50vw, 100vw")}
        className="relative h-auto w-full"
      />
    </div>
  );
}
