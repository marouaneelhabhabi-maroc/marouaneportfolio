"use client";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./primitives";

export default function FooterLang({ locale, label, dark = true }: { locale: Locale; label: string; dark?: boolean }) {
  const pathname = usePathname();
  const subPath = pathname.replace(`/${locale}`, "") || "";
  return <LanguageSwitcher locale={locale} path={subPath} label={label} dark={dark} />;
}
