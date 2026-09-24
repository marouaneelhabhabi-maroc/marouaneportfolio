import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Portrait } from "@/components/ui";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/pageMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale as Locale, "/about", {
    en: "About — Marouane El Habhabi",
    fr: "À propos — Marouane El Habhabi",
    ar: "من أنا — مروان الهبهابي",
  }, {
    en: "Web developer and digital product builder. Websites, web apps, SaaS, e-commerce and WordPress — from interface to deployment and optimization.",
    fr: "Développeur web et créateur de produits digitaux. Sites, apps, SaaS, e-commerce et WordPress — de l'interface au déploiement et à l'optimisation.",
    ar: "مطوّر ويب وباني منتجات رقمية. مواقع وتطبيقات وSaaS وتجارة إلكترونية وووردبريس — من الواجهة حتى النشر والتحسين.",
  });
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale).aboutPage;
  const cta = getDict(locale);
  return (
    <main id="main" className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
      <Reveal><p className="eyebrow">{t.eyebrow}</p>
        <h1 className="font-display mt-3 max-w-[18ch] text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05]">{t.title}</h1>
        <p className="mt-4 max-w-[62ch] text-[17px] text-ink2">{t.lead}</p></Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal><div className="lg:sticky lg:top-24"><Portrait caption={cta.hero.caption} /></div></Reveal>
        <div>
          <Reveal><h2 className="font-display text-3xl">{t.storyTitle}</h2>
            {t.story.map((p) => <p key={p.slice(0, 24)} className="mt-4 text-[16px] leading-relaxed text-ink2">{p}</p>)}</Reveal>
          <Reveal><h2 className="font-display mt-10 text-3xl">{t.capabilitiesTitle}</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {t.capabilities.map((c) => <li key={c} className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-3 text-[14px] font-medium"><span aria-hidden className="text-accent">▸</span>{c}</li>)}
            </ul></Reveal>
          <Reveal><h2 className="font-display mt-10 text-3xl">{t.focusTitle}</h2>
            <ul className="mt-5 space-y-3">
              {t.focus.map((f, i) => <li key={f} className="flex gap-4 rounded-2xl border border-line bg-surface p-5"><span className="font-mono text-[13px] text-accent">0{i + 1}</span><span className="text-[15px] font-medium">{f}</span></li>)}
            </ul></Reveal>
          <Reveal><div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/projects`} className="rounded-full bg-ink px-6 py-3 text-[14.5px] font-semibold text-white">{cta.hero.secondary}</Link>
            <Link href="/Contact.pdf" download className="rounded-full border border-line bg-surface px-6 py-3 text-[14.5px] font-semibold">↓ {cta.hero.cv}</Link>
          </div></Reveal>
        </div>
      </div>
    </main>
  );
}
