import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/pageMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale as Locale, "/services", {
    en: "Services — Marouane El Habhabi",
    fr: "Services — Marouane El Habhabi",
    ar: "الخدمات — مروان الهبهابي",
  }, {
    en: "Website development, web apps, SaaS, e-commerce, WordPress, UI/UX, SEO and deployment — one partner for the full product lifecycle.",
    fr: "Développement web, apps, SaaS, e-commerce, WordPress, UI/UX, SEO et déploiement — un seul partenaire pour tout le cycle produit.",
    ar: "تطوير المواقع والتطبيقات وSaaS والتجارة الإلكترونية وووردبريس وUI/UX وSEO والنشر — شريك واحد لدورة المنتج الكاملة.",
  });
}

const scopes: string[][] = [
  ["Business sites", "Landing pages", "CMS-ready"],
  ["Auth", "Databases", "Dashboards"],
  ["Accounts", "Subscriptions", "Conversion flows"],
  ["Catalogs", "Checkout UX", "Storefronts"],
  ["Themes", "Redesigns", "Speed"],
  ["Wireframes", "Design systems", "Prototypes"],
  ["Metadata", "Core Web Vitals", "Audits"],
  ["Domains", "SSL", "Hosting"],
];

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  return (
    <main id="main" className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
      <Reveal><p className="eyebrow">{t.servicesPage.eyebrow}</p>
        <h1 className="font-display mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">{t.servicesPage.title}</h1>
        <p className="mt-4 max-w-[60ch] text-[17px] text-ink2">{t.servicesPage.lead}</p></Reveal>
      <ol className="mt-12 grid gap-4 md:grid-cols-2">
        {t.services.list.map((s, i) => (
          <Reveal as="li" key={s.t} delay={(i % 2) * 80} className="rounded-3xl border border-line bg-surface p-8">
            <p className="font-mono text-[12px] text-accent">0{i + 1}</p>
            <h2 className="font-display mt-2 text-[26px]">{s.t}</h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink2">{s.d}</p>
            <p className="mt-4 border-t border-line pt-4 text-[13px] text-ink3">
              <span className="font-semibold text-ink2">{t.servicesPage.deliverable}:</span> {(scopes[i] ?? []).join(" · ")}
            </p>
          </Reveal>
        ))}
      </ol>
      <Reveal><div className="mt-8 flex flex-wrap items-center gap-3 rounded-3xl bg-night p-8 text-white">
        <p className="font-display flex-1 min-w-[220px] text-2xl">{t.contactCta.title}</p>
        <Link href={`/${locale}/contact`} className="rounded-full bg-white px-6 py-3 text-[14.5px] font-semibold text-ink">{t.nav.cta} →</Link>
      </div></Reveal>
    </main>
  );
}
