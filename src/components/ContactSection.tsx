import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { PHONE_DISPLAY, PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export function ContactRows({ t, dark = false }: { t: Dict["contactCta"]; dark?: boolean }) {
  const row = dark
    ? "border-white/12 bg-white/5 text-white"
    : "border-line bg-surface text-ink";
  return (
    <ul className="mt-8 space-y-3">
      <li className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${row}`}>
        <span className={`text-[14px] font-medium ${dark ? "text-white/60" : "text-ink2"}`}>{t.phone}</span>
        <a href={PHONE_HREF} dir="ltr" className="text-[15px] font-semibold hover:text-accent">{PHONE_DISPLAY}</a>
      </li>
      <li className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${row}`}>
        <span className={`text-[14px] font-medium ${dark ? "text-white/60" : "text-ink2"}`}>{t.instagram}</span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" dir="ltr" className="text-[15px] font-semibold hover:text-accent">{INSTAGRAM_HANDLE}</a>
      </li>
      <li>
        <Link href="/Contact.pdf" download className="flex items-center justify-between rounded-2xl bg-night px-5 py-4 text-white transition-transform duration-300 hover:-translate-y-0.5">
          <span className="text-[14px] text-white/70">{t.cv}</span>
          <span className="text-[15px] font-semibold">↓ PDF</span>
        </Link>
      </li>
    </ul>
  );
}

export default function ContactSection({ locale, t }: { locale: Locale; t: Dict }) {
  void locale;
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{t.contactCta.eyebrow}</p>
          <h2 id="cta-title" className="font-display mt-3 text-[clamp(2.2rem,4.5vw,3.2rem)]">{t.contactCta.title}</h2>
          <p className="mt-3 max-w-[46ch] text-[16.5px] text-ink2">{t.contactCta.lead}</p>
          <ContactRows t={t.contactCta} />
        </Reveal>
        <Reveal delay={120}><ContactForm t={t.contactCta} /></Reveal>
      </div>
    </section>
  );
}
