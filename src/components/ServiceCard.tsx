import Reveal from "./Reveal";

const ICONS = ["◈", "▣", "⬡", "◫", "✎", "◎", "▲", "⬢"];

export function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <Reveal
      as="li"
      delay={(index % 4) * 70}
      className="lift rounded-2xl border border-line bg-surface p-6"
    >
      <span aria-hidden className="grid size-10 place-items-center rounded-xl bg-surface2 text-[18px] text-ink">
        {ICONS[index % ICONS.length]}
      </span>
      <h3 className="mt-4 text-[15.5px] font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink2">{desc}</p>
    </Reveal>
  );
}

export function ServiceGrid({ items }: { items: Array<{ t: string; d: string }> }) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <ServiceCard key={s.t} title={s.t} desc={s.d} index={i} />
      ))}
    </ul>
  );
}
