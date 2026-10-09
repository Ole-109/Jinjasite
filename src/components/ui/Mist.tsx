/**
 * Drifting mountain mist. Pure CSS — soft radial "fog banks" tiled seamlessly
 * along a 200%-wide strip that translates at two speeds for parallax.
 * Place inside a `relative overflow-hidden` parent.
 */
const bank = (a: number) =>
  [
    `radial-gradient(ellipse 38% 22% at 18% 72%, rgba(255,255,255,${0.16 * a}), transparent 70%)`,
    `radial-gradient(ellipse 30% 16% at 52% 58%, rgba(255,255,255,${0.11 * a}), transparent 70%)`,
    `radial-gradient(ellipse 42% 26% at 84% 80%, rgba(255,255,255,${0.14 * a}), transparent 70%)`,
    `radial-gradient(ellipse 26% 12% at 66% 34%, rgba(255,255,255,${0.07 * a}), transparent 70%)`,
  ].join(",");

export function Mist({ className = "", intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-mist-drift absolute inset-y-0 left-0 w-[200%] blur-2xl"
        style={{ backgroundImage: bank(intensity), backgroundSize: "50% 100%", backgroundRepeat: "repeat-x" }}
      />
      <div
        className="animate-mist-drift-slow absolute inset-y-0 left-0 w-[200%] blur-3xl"
        style={{
          backgroundImage: bank(intensity * 0.8),
          backgroundSize: "50% 120%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 -10%",
        }}
      />
    </div>
  );
}
