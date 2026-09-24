import Link from "next/link";
import type { Dict } from "@/i18n/dictionaries";
import type { Project } from "@/i18n/projects";
import Reveal from "./Reveal";
import { LiveDot } from "./ui";

/* ---------- BrowserCover ----------
   Honest product showcase: real browser chrome (traffic lights + live
   domain in the address bar) framing an abstract cover. No fake UI,
   no fabricated screenshots — the live site is one click away. */

export function BrowserCover({ p, index }: { p: Project; index: number }) {
  const dark = p.slug === "pdf2wordly";
  const domain = p.liveUrl.replace("https://", "").replace(/\/$/, "");
  return (
    <div className={`relative overflow-hidden ${dark ? "bg-[#14161b]" : "bg-surface2"}`}>
      {/* window chrome */}
      <div className={`flex items-center gap-3 border-b px-5 py-3.5 ${dark ? "border-white/10" : "border-line"}`}>
        <span aria-hidden className="flex gap-1.5">
          <i className="size-2.5 rounded-full bg-[#FF5F57]" />
          <i className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <i className="size-2.5 rounded-full bg-[#28C840]" />
        </span>
        <span
          dir="ltr"
          className={`mx-auto flex w-full max-w-[280px] items-center justify-center gap-1.5 truncate rounded-full px-4 py-1 font-mono text-[11.5px] ${
            dark ? "bg-white/10 text-white/80" : "bg-white text-ink2"
          }`}
        >
          <svg aria-hidden width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="2" y="5" width="8" height="6" rx="1.5" stroke="currentColor" /><path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" /></svg>
          {domain}
        </span>
        <span className="w-10" aria-hidden />
      </div>
      {/* abstract cover */}
      <div aria-hidden className="absolute inset-0 top-[49px]" style={{
        background: dark
          ? "radial-gradient(120% 90% at 80% 0%, #2B5CFF55 0%, transparent 55%), linear-gradient(150deg,#14161b 0%,#23262d 70%)"
          : "radial-gradient(120% 90% at 15% 0%, #2B5CFF22 0%, transparent 55%), linear-gradient(150deg,#EDF1FF 0%,#F7F3EC 60%,#EFE9DF 100%)",
      }} />
      <div className="relative px-8 pb-9 pt-8 sm:px-10">
        <p className={`eyebrow ${dark ? "text-white/55!" : ""}`}>Project 0{index + 1} — {p.category}</p>
        <p className={`font-display mt-2 text-6xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:text-7xl ${dark ? "text-white" : "text-ink"}`}>
          {p.initials}
        </p>
        <p className={`font-display mt-2 text-[15px] italic ${dark ? "text-white/60" : "text-ink2/80"}`}>{p.title}</p>
        <div className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12.5px] font-semibold ${dark ? "bg-white/10 text-white" : "bg-white text-ink"}`}>
          <LiveDot /> {domain}
        </div>
      </div>
    </div>
  );
}

/* ---------- ProjectCard ---------- */

export function ProjectCard({
  p, index, locale, t,
}: {
  p: Project; index: number; locale: string; t: Dict["work"];
}) {
  return (
    <Reveal
      as="article"
      className="lift group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
    >
      <BrowserCover p={p} index={index} />
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="font-display text-[26px] leading-tight">{p.title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink2">{p.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label={p.category}>
          {p.scope.slice(0, 5).map((s) => (
            <span key={s} className="rounded-full bg-surface2 px-3 py-1 font-mono text-[11.5px] text-ink2">{s}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-arrow rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-black"
          >
            {t.visit} <span aria-hidden>↗</span>
          </a>
          <Link
            href={`/${locale}/projects/${p.slug}`}
            className="btn-arrow rounded-full border border-line bg-white px-5 py-2.5 text-[13.5px] font-semibold transition-colors hover:border-ink/30"
          >
            {t.caseStudy} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- ProjectGallery (case-study visual) ---------- */

export function ProjectGallery({ p, index }: { p: Project; index: number }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-line bg-surface" role="img" aria-label={`${p.title} — ${p.category}`}>
      <BrowserCover p={p} index={index} />
    </div>
  );
}
