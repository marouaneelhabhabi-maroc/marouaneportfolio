import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/i18n/config";
import { getProjectSlugs } from "@/i18n/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/services", "/projects", "/experience", "/contact"];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const r of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${r}`,
        lastModified: now,
        changeFrequency: r === "" ? "weekly" : "monthly",
        priority: r === "" ? 1 : r === "/projects" ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${r}`,
            fr: `${SITE_URL}/fr${r}`,
            ar: `${SITE_URL}/ar${r}`,
          },
        },
      });
    }
    for (const slug of getProjectSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}/projects/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return entries;
}
