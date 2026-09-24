import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { isLocale, PHONE_DISPLAY, PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_HANDLE, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/pageMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale as Locale, "/contact", {
    en: "Contact — Let's Work Together | Marouane El Habhabi",
    fr: "Contact — Travaillons ensemble | Marouane El Habhabi",
    ar: "تواصل — لنعمل معًا | مروان الهبهابي",
  }, {
    en: "Start your website, web app, SaaS or e-commerce project. Phone, Instagram and project inquiry form — replies within 24–48 hours.",
    fr: "Lancez votre projet web, app, SaaS ou e-commerce. Téléphone, Instagram et formulaire — réponse sous 24 à 48 h.",
    ar: "ابدأ مشروع موقعك أو تطبيقك أو SaaS أو متجرك. هاتف وإنستغرام ونموذج استفسار — رد خلال 24–48 ساعة.",
  });
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  return (
    <main id="main" className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
      <Reveal><p className="eyebrow">{t.contactPage.eyebrow}</p>
        <h1 className="font-display mt-3 text-[clamp(2.4rem,5vw,3.8rem)]">{t.contactPage.title}</h1>
        <p className="mt-4 max-w-[60ch] text-[17px] text-ink2">{t.contactPage.lead}</p></Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-[15px] font-semibold">{t.contactPage.direct}</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-5">
              <span className="text-[14px] text-ink2">{t.contactCta.phone}</span>
              <a href={PHONE_HREF} dir="ltr" className="text-lg font-semibold hover:text-accent">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-5">
              <span className="text-[14px] text-ink2">{t.contactCta.instagram}</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" dir="ltr" className="text-lg font-semibold hover:text-accent">{INSTAGRAM_HANDLE}</a>
            </li>
            <li>
              <a href="/Contact.pdf" download className="flex items-center justify-between rounded-2xl bg-night px-5 py-5 text-white">
                <span className="text-[14px] text-white/70">{t.contactCta.cv}</span><span className="font-semibold">↓ PDF</span>
              </a>
            </li>
          </ul>
          <p className="mt-5 rounded-2xl bg-surface2/70 border border-line px-5 py-4 text-[13.5px] leading-relaxed text-ink2">
            Fez, Morocco · Remote worldwide — {t.footer.location}
          </p>
        </Reveal>
        <Reveal delay={120}><ContactForm t={t.contactCta} /></Reveal>
      </div>
    </main>
  );
}
