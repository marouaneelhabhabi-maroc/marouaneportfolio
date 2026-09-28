import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeShort, locales } from "@/i18n/config";
import Reveal from "./Reveal";

/* ---------- Button ---------- */

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  external?: boolean;
  download?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants: Record<string, string> = {
  primary: "bg-ink text-white hover:bg-black",
  secondary: "border border-line bg-surface text-ink hover:border-ink/30",
  ghost: "text-ink2 underline-offset-4 hover:text-ink hover:underline",
  light: "bg-white text-ink hover:bg-white/90",
};

export function Button({ children, href, variant = "primary", external, download, arrow, className = "", onClick, type = "button" }: ButtonProps) {
  const cls = `${arrow ? "btn-arrow " : ""}inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14.5px] font-semibold transition-colors ${variants[variant]} ${className}`;
  const inner = (<>{children}{arrow && <span aria-hidden>→</span>}</>);
  if (href) {
    if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls} download={download}>{inner}</a>;
    return <Link href={href} className={cls} download={download}>{inner}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}

/* ---------- SectionHeading ---------- */

export function SectionHeading({
  eyebrow, title, lead, id, align = "start",
}: {
  eyebrow: string; title: string; lead?: string; id?: string; align?: "start" | "center";
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "max-w-[64ch]";
  return (
    <Reveal className={`flex flex-col ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="font-display mt-3 text-[clamp(1.9rem,3.8vw,2.8rem)] leading-tight">{title}</h2>
      {lead && <p className="mt-3 text-[16px] leading-relaxed text-ink2">{lead}</p>}
    </Reveal>
  );
}

/* ---------- LanguageSwitcher ---------- */

export function LanguageSwitcher({ locale, path, label, dark = false }: { locale: Locale; path: string; label: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center rounded-full border p-1 ${dark ? "border-white/15 bg-white/5" : "border-line bg-surface"}`}
      role="group"
      aria-label={label}
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${path}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-wide transition-colors ${
            l === locale
              ? dark ? "bg-white text-ink" : "bg-ink text-white"
              : dark ? "text-white/60 hover:text-white" : "text-ink2 hover:text-ink"
          }`}
        >
          {localeShort[l]}
        </Link>
      ))}
    </div>
  );
}
