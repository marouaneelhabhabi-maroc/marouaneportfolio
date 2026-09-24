import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Fraunces, IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales, isLocale, SITE_URL, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "700"], variable: "--font-arabic", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  const titles: Record<Locale, string> = {
    en: "Marouane El Habhabi — Web Developer & Digital Product Builder",
    fr: "Marouane El Habhabi — Développeur Web & Créateur de Produits Digitaux",
    ar: "مروان الهبهابي — مطوّر ويب وباني منتجات رقمية",
  };
  const descs: Record<Locale, string> = {
    en: "I design and build professional websites, web apps, SaaS and e-commerce experiences. Explore live products and let's work together.",
    fr: "Je conçois et développe sites professionnels, apps web, SaaS et e-commerce. Découvrez mes produits en ligne et travaillons ensemble.",
    ar: "أصمّم وأطوّر مواقع احترافية وتطبيقات ويب ومنتجات SaaS وتجارة إلكترونية. اكتشف منتجاتي الحيّة ولنعمل معًا.",
  };
  const path = `/${locale}`;
  return {
    title: titles[locale],
    description: descs[locale],
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en`, fr: `${SITE_URL}/fr`, ar: `${SITE_URL}/ar`, "x-default": `${SITE_URL}/en` },
    },
    openGraph: {
      title: titles[locale], description: descs[locale], url: `${SITE_URL}${path}`,
      siteName: "Marouane El Habhabi", locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_FR" : "en_US", type: "website",
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: titles[locale] }],
    },
    twitter: { card: "summary_large_image", title: titles[locale], description: descs[locale], images: [`${SITE_URL}/opengraph-image`] },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marouane El Habhabi",
    jobTitle: "Web Developer & Digital Product Builder",
    address: { "@type": "PostalAddress", addressLocality: "Fez", addressCountry: "MA" },
    url: `${SITE_URL}/${locale}`,
    sameAs: ["https://www.instagram.com/mar.1_officiel", "https://l9a5dma.ma/", "https://pdf2wordly.com/"],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marouane El Habhabi — Web Developer & Digital Product Builder",
    url: `${SITE_URL}/${locale}`,
    inLanguage: [locale],
  };
  return (
    <html lang={locale} dir={t.dir} className={`${inter.variable} ${display.variable} ${arabic.variable}`}>
      <body className="flex min-h-screen flex-col">
        <noscript><style>{".reveal{opacity:1 !important;transform:none !important;}.rise{animation:none !important;}"}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Header locale={locale} t={t} />
        <div className="flex-1 pt-[68px]">{children}</div>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
