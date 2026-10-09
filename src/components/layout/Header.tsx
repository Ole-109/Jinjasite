"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, primaryNav, site } from "@/data/site";
import { Emblem } from "@/components/ui/Emblem";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid ? "bg-sumi/85 shadow-[0_1px_0_rgba(185,153,92,0.25)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3 text-washi" aria-label={`${site.name} ホーム`}>
            <Emblem className="h-10 w-10 text-gold-soft transition-transform duration-700 group-hover:rotate-[20deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-mincho text-xl font-semibold tracking-[0.35em]">{site.name}</span>
              <span className="font-latin mt-1.5 text-[0.65rem] text-gold-soft/80 uppercase">{site.nameEn}</span>
            </span>
          </Link>

          <nav aria-label="メインメニュー" className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mincho relative text-[0.9rem] tracking-[0.2em] text-washi/85 transition hover:text-gold-soft ${
                    active ? "text-gold-soft" : ""
                  }`}
                >
                  {item.ja}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="group relative flex h-11 items-center gap-3 text-washi"
          >
            <span className="font-latin hidden text-xs uppercase sm:inline">{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3 w-8">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${
                  open ? "top-1.5 rotate-[20deg]" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px bg-current transition-all duration-500 ${
                  open ? "top-1.5 w-full -rotate-[20deg]" : "top-3 w-5 group-hover:w-full"
                }`}
              />
            </span>
            <span className="sr-only">メニューを{open ? "閉じる" : "開く"}</span>
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="サイトメニュー"
        className={`sumi-texture fixed inset-0 z-40 overflow-y-auto text-washi transition-[opacity,visibility] duration-700 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto grid min-h-full max-w-7xl gap-12 px-5 pt-32 pb-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="grid gap-x-12 gap-y-2 sm:grid-cols-2">
            {[{ href: "/", ja: "ホーム", en: "Home" }, ...nav].map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: open ? `${120 + i * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between gap-6 border-b border-washi/10 py-4 transition hover:border-gold/60"
                >
                  <span className="font-mincho text-xl tracking-[0.25em] transition group-hover:text-gold-soft sm:text-2xl">
                    {item.ja}
                  </span>
                  <span className="font-latin text-xs text-mist/50 uppercase italic">{item.en}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6 border-t border-washi/10 pt-8 text-sm text-mist/80 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <p className="font-mincho tategaki hidden h-64 text-2xl tracking-[0.5em] text-washi/80 lg:block">
              {site.tagline}
            </p>
            <div className="space-y-1">
              <p className="font-mincho text-washi">{site.officeName}</p>
              <p>
                {site.postalCode} {site.address}
              </p>
              <p>
                TEL{" "}
                <a href={`tel:${site.tel}`} className="hover:text-gold-soft">
                  {site.tel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
