import Reveal from "./Reveal";

export function CaseStudySection({
  index, eyebrow, title, children, wide = false,
}: {
  index: string; eyebrow: string; title: string; children: React.ReactNode; wide?: boolean;
}) {
  void wide;
  return (
    <Reveal
      as="section"
      aria-label={title}
      className="rounded-3xl border border-line bg-surface p-7 sm:p-10"
    >
      <p className="eyebrow">{index} — {eyebrow}</p>
      <h2 className="font-display mt-2 text-[24px] sm:text-[26px]">{title}</h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`mt-3 grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((f) => (
        <li key={f} className="flex gap-2.5 rounded-xl border border-line bg-paper px-4 py-3 text-[14px] leading-relaxed">
          <span aria-hidden className="mt-0.5 text-[#147A52]">✓</span>{f}
        </li>
      ))}
    </ul>
  );
}

export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((x) => (
        <li key={x} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink2">
          <span aria-hidden className="text-accent">▸</span>{x}
        </li>
      ))}
    </ul>
  );
}

export function TagRow({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full bg-surface2 px-3 py-1 font-mono text-[11.5px] text-ink2">{s}</span>
      ))}
    </div>
  );
}
