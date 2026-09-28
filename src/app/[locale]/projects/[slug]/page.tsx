import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { LiveDot } from "@/components/ui";
import { Button } from "@/components/primitives";
import { ProjectGallery } from "@/components/ProjectCard";
import { CaseStudySection, CheckList, TechList, TagRow } from "@/components/CaseStudyBlock";
import { isLocale, SITE_URL, locales } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { getProject, getProjects, getProjectSlugs } from "@/i18n/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) => getProjectSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const p = getProject(locale, slug);
  if (!p) return {};
  return {
    title: `${p.title} — Marouane El Habhabi`,
    description: p.tagline,
    alternates: {
      canonical: `${SITE_URL}/${locale}/projects/${slug}`,
      languages: { en: `${SITE_URL}/en/projects/${slug}`, fr: `${SITE_URL}/fr/projects/${slug}`, ar: `${SITE_URL}/ar/projects/${slug}`, "x-default": `${SITE_URL}/en/projects/${slug}` },
    },
    openGraph: { title: `${p.title} — Marouane El Habhabi`, description: p.tagline, url: `${SITE_URL}/${locale}/projects/${slug}`, type: "article", images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: "summary_large_image", title: `${p.title} — Marouane El Habhabi`, description: p.tagline, images: [`${SITE_URL}/opengraph-image`] },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const p = getProject(locale, slug);
  if (!p) notFound();
  const t = getDict(locale).caseStudy;
  const all = getProjects(locale);
  const index = all.findIndex((x) => x.slug === slug);
  const next = all.find((x) => x.slug !== slug) ?? all[0];
  const jsonLd = {
    "@context": "https://schema.org", "@type": "CreativeWork",
    name: p.title, url: p.liveUrl, creator: { "@type": "Person", name: "Marouane El Habhabi" }, abstract: p.tagline,
  };

  return (
    <main id="main" className="mx-auto max-w-[1100px] px-6 py-14 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal>
        <Link href={`/${locale}/projects`} className="text-[14px] font-medium text-ink2 transition-colors hover:text-ink">← {t.back}</Link>
        <p className="eyebrow mt-6">{p.category}</p>
        <h1 className="font-display mt-2 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05]">{p.title}</h1>
        <p className="mt-3 max-w-[60ch] text-[17px] text-ink2">{p.tagline}</p>
        <dl className="mt-8 grid gap-3 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-4 sm:p-7">
          {[[t.roleLabel, p.role], [t.status, `● ${p.status}`], [t.stack, `${p.scope.length} areas`]].map(([k, v]) => (
            <div key={k}><dt className="eyebrow">{k}</dt><dd className="mt-1.5 text-[15px] font-semibold">{v}</dd></div>
          ))}
          <div><dt className="eyebrow">{t.links}</dt><dd className="mt-1.5"><a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-black"><LiveDot /> {t.live} ↗</a></dd></div>
        </dl>
      </Reveal>

      <Reveal delay={100} className="mt-6">
        <ProjectGallery p={p} index={Math.max(index, 0)} />
      </Reveal>

      <div className="mt-6 grid gap-5">
        <CaseStudySection index="01" eyebrow={t.overview} title={t.overview}>
          {p.overview.map((x) => <p key={x.slice(0, 20)} className="mt-3 text-[15.5px] leading-relaxed text-ink2 first:mt-0">{x}</p>)}
          <TagRow items={p.scope} />
        </CaseStudySection>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudySection index="02" eyebrow={t.problem} title={t.problem}><p className="text-[15.5px] leading-relaxed text-ink2">{p.problem}</p></CaseStudySection>
          <CaseStudySection index="03" eyebrow={t.concept} title={t.concept}><p className="text-[15.5px] leading-relaxed text-ink2">{p.concept}</p></CaseStudySection>
        </div>
        <CaseStudySection index="04" eyebrow={t.solution} title={t.solution}>
          <p className="text-[15.5px] leading-relaxed text-ink2">{p.solution}</p>
          <h3 className="mt-6 text-[15px] font-semibold">{t.features}</h3>
          <CheckList items={p.features} columns={2} />
        </CaseStudySection>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudySection index="05" eyebrow={t.tech} title={t.tech}><TechList items={p.tech} /></CaseStudySection>
          <CaseStudySection index="06" eyebrow={t.design} title={t.design}><p className="text-[15px] leading-relaxed text-ink2">{p.design}</p></CaseStudySection>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudySection index="07" eyebrow={t.deploy} title={t.deploy}><p className="text-[15px] leading-relaxed text-ink2">{p.deploy}</p></CaseStudySection>
          <CaseStudySection index="08" eyebrow={t.lessons} title={t.lessons}><p className="text-[15px] leading-relaxed text-ink2">{p.lessons}</p></CaseStudySection>
        </div>
        <Reveal className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-night p-8 text-white">
          <div><p className="eyebrow text-white/40!">{t.next}</p><p className="font-display mt-1 text-2xl">{next.title}</p></div>
          <div className="flex flex-wrap gap-3">
            <Button href={p.liveUrl} external variant="light">{t.live} ↗</Button>
            <Link href={`/${locale}/projects/${next.slug}`} className="rounded-full border border-white/25 px-5 py-2.5 text-[13.5px] font-semibold transition-colors hover:border-white/60">{next.title} →</Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
