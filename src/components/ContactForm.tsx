"use client";
import { useState } from "react";
import type { Dict } from "@/i18n/dictionaries";

export default function ContactForm({ t }: { t: Dict["contactCta"] }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${fd.get("name")} — ${fd.get("type")}`);
    const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nType: ${fd.get("type")}\n\n${fd.get("message")}`);
    // No email backend is configured (no address invented): open the visitor's
    // own mail app with the message pre-filled. Later: POST to /api/contact.
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }
  const input = "h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink placeholder:text-ink3/70 focus:border-accent focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-8" aria-label={t.formTitle}>
      <h3 className="font-display text-2xl">{t.formTitle}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <p><label htmlFor="cf-name" className="mb-1.5 block text-[13.5px] font-medium">{t.name}</label>
          <input id="cf-name" name="name" required minLength={2} maxLength={80} autoComplete="name" className={input} /></p>
        <p><label htmlFor="cf-email" className="mb-1.5 block text-[13.5px] font-medium">{t.email}</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" dir="ltr" className={input} /></p>
      </div>
      <p className="mt-4"><label htmlFor="cf-type" className="mb-1.5 block text-[13.5px] font-medium">{t.type}</label>
        <select id="cf-type" name="type" className={input}>{t.types.map((x) => <option key={x}>{x}</option>)}</select></p>
      <p className="mt-4"><label htmlFor="cf-msg" className="mb-1.5 block text-[13.5px] font-medium">{t.message}</label>
        <textarea id="cf-msg" name="message" required minLength={10} maxLength={2000} rows={5} className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] focus:border-accent focus:outline-none" /></p>
      <button type="submit" className="btn-arrow mt-5 h-12 w-full rounded-full bg-ink font-semibold text-white hover:bg-black">
        {t.send} <span aria-hidden>→</span>
      </button>
      <p className="mt-3 text-[13px] leading-relaxed text-ink3">{t.hint}</p>
      {sent && <p role="status" className="mt-2 rounded-xl bg-[#EAF7F0] px-4 py-2.5 text-[13.5px] font-medium text-[#147A52]">{t.success}</p>}
    </form>
  );
}
