import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Portrait, LiveDot } from "@/components/ui";
import { SectionHeading, Button } from "@/components/primitives";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceGrid } from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import { isLocale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { getProjects } from "@/i18n/projects";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  const projects = getProjects(locale);

  return (
    <main id="main">
      {/* HERO */}
      <section aria-labelledby="hero-title" className="mx-auto max-w-[1200px] px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="rise eyebrow flex items-center gap-2"><LiveDot /> {t.hero.eyebrow}</p>
            <h1 id="hero-title" className="rise font-display mt-5 text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.02em]" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
              {t.hero.name}
            </h1>
            <p className="rise mt-3 text-[clamp(1.15rem,2.4vw,1.5rem)] font-medium text-accent" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>{t.hero.title}</p>
            <p className="rise mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink2" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>{t.hero.lead}</p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
              <Button href={`/${locale}/contact`} arrow>{t.hero.primary}</Button>
              <Button href={`/${locale}/projects`} variant="secondary">{t.hero.secondary}</Button>
              <Button href="/Contact.pdf" variant="ghost" download>↓ {t.hero.cv}</Button>
            </div>
            <div className="rise mt-8 flex flex-wrap gap-2.5" style={{ "--rise-delay": "400ms" } as React.CSSProperties} aria-label={t.hero.liveLabel}>
              {projects.map((p) => (
                <a key={p.slug} href={p.liveUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-ink2 transition-colors hover:text-ink">
                  <LiveDot /><span dir="ltr">{p.liveUrl.replace("https://", "").replace(/\/$/, "")}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="rise mx-auto w-full max-w-[420px]" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            <Portrait caption={t.hero.caption} />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-label={t.trust.label} className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5">
          <span className="eyebrow">{t.trust.label}</span>
          {t.trust.items.map((x) => (
            <span key={x} className="text-[14px] font-medium text-ink2">· {x}</span>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section aria-labelledby="work-title" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[60ch]">
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 id="work-title" className="font-display mt-3 text-[clamp(2rem,4vw,2.9rem)] leading-tight">{t.work.title}</h2>
            <p className="mt-3 text-[16.5px] leading-relaxed text-ink2">{t.work.lead}</p>
          </div>
          <Button href={`/${locale}/projects`} variant="secondary" arrow>{t.work.viewAll}</Button>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} locale={locale} t={t.work} />)}
        </div>
      </section>

      {/* LIFECYCLE */}
      <section aria-labelledby="life-title" className="border-y border-line bg-surface2/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <SectionHeading eyebrow={t.lifecycle.eyebrow} title={t.lifecycle.title} id="life-title" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.lifecycle.steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 70} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-[12px] text-accent">0{i + 1}</p>
                <h3 className="mt-2 text-[16px] font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink2">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="svc-title" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} id="svc-title" />
        <ServiceGrid items={t.services.list} />
        <Reveal><p className="mt-6 rounded-2xl bg-night px-6 py-4 text-[14px] text-white/80">✓ {t.services.note}</p></Reveal>
      </section>

      {/* ABOUT PREVIEW */}
      <section aria-labelledby="about-title" className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal><Portrait caption={t.hero.caption} /></Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{t.aboutPreview.eyebrow}</p>
            <h2 id="about-title" className="font-display mt-3 text-[clamp(1.9rem,3.6vw,2.6rem)] leading-tight">{t.aboutPreview.title}</h2>
            <p className="mt-4 max-w-[56ch] text-[16.5px] leading-relaxed text-ink2">{t.aboutPreview.body}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {t.aboutPreview.points.map((x) => (
                <li key={x} className="flex items-center gap-2.5 rounded-xl border border-line bg-paper px-4 py-3 text-[14px] font-medium">
                  <span aria-hidden className="grid size-5 shrink-0 place-items-center rounded-full bg-[#EAF7F0] text-[12px] text-[#147A52]">✓</span>{x}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/${locale}/about`} arrow>{t.aboutPreview.more}</Button>
              <Button href="/Contact.pdf" variant="secondary" download>↓ {t.hero.cv}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section aria-labelledby="skills-title" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} lead={t.skills.lead} id="skills-title" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 80} className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              <p className="font-mono text-[12px] uppercase tracking-wider text-accent">0{i + 1} — {g.name}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full bg-surface2 px-4 py-2 text-[13.5px] font-medium text-ink">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS — 7 steps */}
      <section aria-labelledby="proc-title" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} id="proc-title" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={(i % 4) * 70} className="rounded-2xl border border-line bg-paper p-7">
                <p className="font-display text-4xl text-ink/15">{s.n}</p>
                <h3 className="mt-3 text-[17px] font-semibold">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink2">{s.d}</p>
              </Reveal>
            ))}
            <Reveal delay={210} className="flex flex-col justify-between rounded-2xl bg-night p-7 text-white">
              <p className="font-display text-[22px] leading-snug">{t.process.cta}.</p>
              <Link href={`/${locale}/contact`} className="btn-arrow mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-semibold text-ink">
                {t.nav.cta} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* EXPERIENCE SNAP */}
      <section aria-labelledby="exp-title" className="border-t border-line bg-surface2/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <SectionHeading eyebrow={t.expSnap.eyebrow} title={t.expSnap.title} id="exp-title" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.expSnap.roles.map((r) => (
              <Reveal key={r.org} className="rounded-2xl border border-line bg-surface p-7">
                <p className="font-mono text-[12px] uppercase tracking-wider text-accent">{r.org}</p>
                <h3 className="mt-2 text-[17px] font-semibold">{r.role}</h3>
                <p className="mt-1.5 text-[13.5px] text-ink3">{r.date} · {r.loc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="mt-5 flex flex-wrap gap-2">{t.expSnap.tags.map((x) => <span key={x} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] text-ink2">{x}</span>)}</div></Reveal>
          <Reveal><div className="mt-7"><Button href={`/${locale}/experience`} arrow>{t.expSnap.more}</Button></div></Reveal>
        </div>
      </section>

      <ContactSection locale={locale} t={t} />
    </main>
  );
}
