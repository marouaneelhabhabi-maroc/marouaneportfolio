import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/pageMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale as Locale, "/experience", {
    en: "Experience — Marouane El Habhabi",
    fr: "Expérience — Marouane El Habhabi",
    ar: "الخبرة — مروان الهبهابي",
  }, {
    en: "Freelance web developer and designer on Upwork and Fiverr since 2024. Business websites, web apps, e-commerce, WordPress and deployment.",
    fr: "Développeur et designer web freelance sur Upwork et Fiverr depuis 2024. Sites vitrines, apps, e-commerce, WordPress et déploiement.",
    ar: "مطوّر ومصمم ويب مستقل على Upwork وFiverr منذ 2024. مواقع شركات وتطبيقات وتجارة إلكترونية وووردبريس ونشر.",
  });
}

export default async function Experience({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale).expPage;
  return (
    <main id="main" className="mx-auto max-w-[1000px] px-6 py-14 sm:py-20">
      <Reveal><p className="eyebrow">{t.eyebrow}</p>
        <h1 className="font-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">{t.title}</h1></Reveal>
      <Reveal as="section" className="mt-12">
        <h2 className="font-display text-3xl">{t.expTitle}</h2>
        <ol className="mt-6 space-y-4">
          {t.roles.map((r) => (
            <li key={r.org} className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div><p className="font-mono text-[12px] uppercase tracking-wider text-accent">{r.org}</p>
                  <h3 className="mt-1.5 text-[19px] font-semibold">{r.role}</h3></div>
                <p className="rounded-full bg-surface2 px-4 py-1.5 text-[13px] font-medium text-ink2">{r.date}</p>
              </div>
              <p className="mt-1 text-[13.5px] text-ink3">{r.loc}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink2">{r.d}</p>
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal as="section" className="mt-12">
        <h2 className="font-display text-3xl">{t.eduTitle}</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.schools.map((s) => (
            <li key={s.s} className="rounded-3xl border border-line bg-surface p-7">
              <h3 className="text-[16px] font-semibold leading-snug">{s.s}</h3>
              <p className="mt-2 text-[14px] text-ink2">{s.d}</p>
              <p className="mt-1.5 font-mono text-[12.5px] text-ink3">{s.date}</p>
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal as="section" className="mt-12">
        <h2 className="font-display text-3xl">{t.focusTitle}</h2>
        <div className="mt-5 flex flex-wrap gap-2">{t.focus.map((f) => <span key={f} className="rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-ink2">{f}</span>)}</div>
      </Reveal>
    </main>
  );
}
