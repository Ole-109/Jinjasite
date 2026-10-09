import type { Metadata } from "next";
import { Mist } from "@/components/ui/Mist";
import { Emblem } from "@/components/ui/Emblem";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="sumi-texture relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-40 text-center text-mist">
      <Mist intensity={0.9} />
      <div className="relative">
        <Emblem className="mx-auto h-16 w-16 text-gold-soft" />
        <p className="font-latin mt-8 text-sm text-gold-soft uppercase italic">404 — Not Found</p>
        <h1 className="font-mincho mt-4 text-3xl tracking-[0.3em] text-washi sm:text-4xl">ページが見つかりません</h1>
        <p className="mx-auto mt-8 max-w-md text-sm leading-loose text-mist/80">
          お探しのページは、霧の向こうへ移ったか、存在しないようです。トップページからあらためてお探しください。
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="gold">トップページへ</ButtonLink>
          <ButtonLink href="/news" variant="outline-light">お知らせ</ButtonLink>
        </div>
      </div>
    </section>
  );
}
