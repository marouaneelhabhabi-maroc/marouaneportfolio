import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, PHONE_DISPLAY, PHONE_HREF } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { getProjects } from "@/i18n/projects";
import FooterLang from "./FooterLang";

export default function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const projects = getProjects(locale);
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-[#EDEAE4]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-[10px] bg-white font-mono text-[13px] font-bold text-ink">MH</span>
              <span className="font-semibold">Marouane El Habhabi</span>
            </p>
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-white/65">{t.footer.tagline}</p>
            <p className="mt-4 text-[13px] text-white/60">{t.footer.location}</p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow text-white/40!">{t.footer.explore}</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {[[`/${locale}/about`, t.nav.about], [`/${locale}/services`, t.nav.services], [`/${locale}/projects`, t.nav.projects], [`/${locale}/experience`, t.nav.experience], [`/${locale}/contact`, t.nav.contact]].map(([h, l]) => (
                <li key={h as string}><Link className="text-white/75 hover:text-white" href={h as string}>{l as string}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-white/40!">{t.footer.projects}</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {projects.map((p) => (
                <li key={p.slug}><Link className="text-white/75 hover:text-white" href={`/${locale}/projects/${p.slug}`}>{p.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/40!">{t.footer.contact}</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li><a className="text-white/75 hover:text-white" dir="ltr" href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
              <li><a className="text-white/75 hover:text-white" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{INSTAGRAM_HANDLE}</a></li>
              <li><a className="text-white/75 hover:text-white" href="/Contact.pdf" download>↓ {t.nav.cv} (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Marouane El Habhabi — {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <FooterLang locale={locale} label={t.nav.lang} />
            <p>{t.footer.built}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
