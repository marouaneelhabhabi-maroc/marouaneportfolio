import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/primitives";
import { ProjectCard } from "@/components/ProjectCard";
import { isLocale, SITE_URL, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { getProjects } from "@/i18n/projects";
import { notFound } from "next/navigation";

const meta: Record<Locale, { title: string; desc: string }> = {
  en: { title: "Projects — Marouane El Habhabi", desc: "Live products by Marouane El Habhabi: a Moroccan services marketplace and a PDF-to-Word SaaS platform. Open them, then read the case studies." },
  fr: { title: "Projets — Marouane El Habhabi", desc: "Produits en ligne de Marouane El Habhabi : une marketplace de services marocaine et une plateforme SaaS PDF vers Word. Visitez-les, puis lisez les études de cas." },
  ar: { title: "المشاريع — مروان الهبهابي", desc: "منتجات حيّة لمروان الهبهابي: سوق خدمات مغربي ومنصة SaaS لتحويل PDF إلى Word. افتحها ثم اقرأ دراسات الحالة." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = meta[locale];
  const path = `/${locale}/projects`;
  return {
    title: m.title,
    description: m.desc,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/projects`, fr: `${SITE_URL}/fr/projects`, ar: `${SITE_URL}/ar/projects` },
    },
    openGraph: { title: m.title, description: m.desc, url: `${SITE_URL}${path}`, type: "website" },
  };
}

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  const projects = getProjects(locale);
  return (
    <main id="main" className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
      <SectionHeading eyebrow={t.projectsPage.eyebrow} title={t.projectsPage.title} lead={t.projectsPage.lead} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} locale={locale} t={t.work} />
        ))}
      </div>
      <Reveal><p className="mt-10 rounded-2xl border border-line bg-surface px-6 py-5 text-[14px] leading-relaxed text-ink2">{t.work.lead}</p></Reveal>
    </main>
  );
}
