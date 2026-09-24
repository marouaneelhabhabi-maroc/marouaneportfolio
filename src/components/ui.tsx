import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeShort, locales } from "@/i18n/config";

export function Portrait({ caption, large = false }: { caption: string; large?: boolean }) {
  return (
    <figure className="relative">
      <div className="grain relative overflow-hidden rounded-[28px] border border-line bg-surface2" style={{ aspectRatio: "4 / 5" }}>
        {/* Geometric backdrop */}
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(160deg,#EFE9DF 0%,#F7F3EC 45%,#E7EDFF 100%)" }} />
        <div aria-hidden className="absolute -top-10 -end-10 size-48 rounded-full" style={{ background: "radial-gradient(circle,#2B5CFF22,transparent 70%)" }} />
        {/* Real photo */}
        <Image
          src="/images/me-portrait.jpg"
          alt="Marouane El Habhabi"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div aria-hidden className="absolute bottom-8 start-8 end-8 rounded-2xl border border-line bg-white/70 backdrop-blur px-5 py-4">
          <p className="eyebrow">MEH — 001</p>
          <p className="font-display text-2xl leading-tight mt-1">Marouane<br />El Habhabi</p>
        </div>
      </div>
      <figcaption className="mt-3 text-[13px] text-ink3">{caption}</figcaption>
    </figure>
  );
}

export function LiveDot() {
  return (
    <span className="relative flex size-2 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1A9E6A] opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-[#1A9E6A]" />
    </span>
  );
}

export function LangLinks({ locale, path }: { locale: Locale; path: string }) {
  return (
    <div className="flex items-center rounded-full border border-line bg-surface p-1" role="group" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${path}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 text-[12px] font-semibold tracking-wide ${l === locale ? "bg-ink text-white" : "text-ink2 hover:text-ink"}`}
        >
          {localeShort[l]}
        </Link>
      ))}
    </div>
  );
}