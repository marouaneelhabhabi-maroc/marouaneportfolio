import Link from "next/link";
import { headers } from "next/headers";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-dynamic";

const copy: Record<Locale, { eyebrow: string; title: string; body: string; home: string; projects: string; contact: string; dir: "ltr" | "rtl" }> = {
  en: { eyebrow: "404 — Not found", title: "This page doesn't exist.", body: "The link may be broken, or the page may have moved. Start from home or explore the work.", home: "Home", projects: "Projects", contact: "Contact", dir: "ltr" },
  fr: { eyebrow: "404 — Introuvable", title: "Cette page n'existe pas.", body: "Le lien est peut-être rompu, ou la page a été déplacée. Revenez à l'accueil ou explorez les projets.", home: "Accueil", projects: "Projets", contact: "Contact", dir: "ltr" },
  ar: { eyebrow: "404 — غير موجودة", title: "هذه الصفحة غير موجودة.", body: "قد يكون الرابط معطلًا أو نُقلت الصفحة. ابدأ من الرئيسية أو استكشف الأعمال.", home: "الرئيسية", projects: "المشاريع", contact: "تواصل", dir: "rtl" },
};

export default async function NotFound() {
  // Locale comes from the proxy via x-pathname (usePathname is unreliable here).
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const seg = pathname.split("/")[1];
  const locale: Locale = seg === "fr" || seg === "ar" ? seg : "en";
  const t = copy[locale];
  return (
    <main id="main" lang={locale} dir={t.dir} className="mx-auto flex min-h-[70vh] w-full max-w-[720px] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="eyebrow">{t.eyebrow}</p>
      <p aria-hidden className="font-display mt-4 text-[6rem] font-semibold leading-none text-ink/10">404</p>
      <h1 className="font-display -mt-6 text-[clamp(2rem,5vw,3rem)]">{t.title}</h1>
      <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-ink2">{t.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={`/${locale}`} className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-black">{t.home}</Link>
        <Link href={`/${locale}/projects`} className="rounded-full border border-line bg-surface px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-ink/30">{t.projects}</Link>
        <Link href={`/${locale}/contact`} className="rounded-full px-5 py-3.5 text-[15px] font-semibold text-ink2 underline-offset-4 hover:text-ink hover:underline">{t.contact}</Link>
      </div>
      <div className="mt-8 flex items-center gap-2 text-[13px] text-ink3" role="group" aria-label="Language">
        {(["en", "fr", "ar"] as Locale[]).map((l) => (
          <Link key={l} href={`/${l}`} hrefLang={l} className="rounded-full border border-line px-3 py-1.5 hover:text-ink">{l.toUpperCase()}</Link>
        ))}
      </div>
    </main>
  );
}
