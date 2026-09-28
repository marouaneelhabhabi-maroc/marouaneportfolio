export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export const SITE_URL = "https://marouaneportfolio.com";
export const PHONE_DISPLAY = "+212 774948692";
export const PHONE_HREF = "tel:+212774948692";
export const INSTAGRAM_HANDLE = "@mar.1_officiel";
export const INSTAGRAM_URL = "https://www.instagram.com/mar.1_officiel";
