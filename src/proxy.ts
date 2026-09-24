import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/" || pathname === "") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }
  const seg = pathname.split("/")[1];
  // Never prefix locale onto static assets, SEO files, or generated routes.
  const passthrough = ["/opengraph-image", "/sitemap.xml", "/robots.txt", "/icon.svg", "/favicon.ico", "/Contact.pdf"];
  if (passthrough.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }
  if (!locales.includes(seg as (typeof locales)[number]) && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  // Expose the original pathname to server components (used by not-found).
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
