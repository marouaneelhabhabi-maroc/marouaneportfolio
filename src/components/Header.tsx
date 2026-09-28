"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./primitives";

export default function Header({ locale, t }: { locale: Locale; t: Dict }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const subPath = pathname.replace(`/${locale}`, "") || "/";
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const firstOpen = useRef(true);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    // Move focus into the menu on open, back to the toggle on close.
    if (open) {
      firstOpen.current = false;
      menuRef.current?.querySelector("a")?.focus();
    } else if (!firstOpen.current) {
      toggleRef.current?.focus();
    }
    return () => window.removeEventListener("keydown", esc);
  }, [open ]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled && !open ? "bg-paper/85 backdrop-blur-xl border-b border-line" : "bg-transparent border-b border-transparent"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        {t.nav.skip}
      </a>
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-3 px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Marouane El Habhabi — home">
          <span className="grid size-9 place-items-center rounded-[10px] bg-ink font-mono text-[13px] font-bold text-white">MH</span>
          <span className="hidden sm:block leading-tight">
            <span className="block text-[13.5px] font-semibold tracking-tight">Marouane El Habhabi</span>
            <span className="block text-[11.5px] text-ink3">Developer · Product Builder</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {(Object.keys(t.nav) as Array<keyof Dict["nav"]>).slice(0, 6).map((k) => {
            const defs: Record<string, string> = { home: `/${locale}`, about: `/${locale}/about`, services: `/${locale}/services`, projects: `/${locale}/projects`, experience: `/${locale}/experience`, contact: `/${locale}/contact` };
            const href = defs[k];
            const active = k === "home" ? subPath === "/" : subPath.startsWith(`/${k}`);
            return (
              <Link key={k} href={href} aria-current={active ? "page" : undefined}
                className={`u-link text-[14px] font-medium ${active ? "text-ink" : "text-ink2 hover:text-ink"}`}>
                {t.nav[k]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} path={subPath === "/" ? "" : subPath} label={t.nav.lang} />
          <Link href="/Contact.pdf" className="rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] font-semibold hover:border-ink/30" download>
            ↓ {t.nav.cv}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-arrow rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-black">
            {t.nav.cta} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} path={subPath === "/" ? "" : subPath} label={t.nav.lang} />
          <button type="button" ref={toggleRef} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.nav.close : t.nav.menu}
            className="grid size-11 place-items-center rounded-full border border-line bg-surface">
            <span aria-hidden className="relative block h-3.5 w-5">
              <span className={`absolute inset-x-0 top-0 h-[2px] bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-[6px] h-[2px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 bottom-0 h-[2px] bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav aria-label="Mobile" id="mobile-menu" ref={menuRef} className="border-t border-line bg-paper/95 backdrop-blur-xl px-6 py-6">
          <ul className="space-y-1">
            {[
              { href: `/${locale}`, label: t.nav.home },
              { href: `/${locale}/about`, label: t.nav.about },
              { href: `/${locale}/services`, label: t.nav.services },
              { href: `/${locale}/projects`, label: t.nav.projects },
              { href: `/${locale}/experience`, label: t.nav.experience },
              { href: `/${locale}/contact`, label: t.nav.contact },
            ].map((l, i) => (
              <li key={l.href} className="rise" style={{ "--rise-delay": `${i * 60}ms` } as React.CSSProperties}>
                <Link href={l.href} className="font-display block rounded-xl px-2 py-3 text-3xl hover:bg-surface2">{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="flex-1 rounded-full bg-ink px-5 py-3.5 text-center text-[15px] font-semibold text-white">{t.nav.cta}</Link>
            <Link href="/Contact.pdf" download className="rounded-full border border-line bg-surface px-5 py-3.5 text-[15px] font-semibold">↓ {t.nav.cv}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
