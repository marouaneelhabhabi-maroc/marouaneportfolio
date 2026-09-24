import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/i18n/config";

export function pageMetadata(
  locale: Locale,
  page: string,
  titles: Record<Locale, string>,
  descs: Record<Locale, string>,
): Metadata {
  const path = `/${locale}${page}`;
  return {
    title: titles[locale],
    description: descs[locale],
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}/en${page}`,
        fr: `${SITE_URL}/fr${page}`,
        ar: `${SITE_URL}/ar${page}`,
        "x-default": `${SITE_URL}/en${page}`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descs[locale],
      url: `${SITE_URL}${path}`,
      type: "website",
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: titles[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descs[locale],
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
