"use client";

import { useState } from "react";
import { company } from "@/lib/content";
import { solutionPages, productPages } from "@/lib/pages";

// No backend yet: the form composes an email to info@heesllc.ae in the visitor's mail app.
// TODO: connect to a form endpoint (e.g. Resend / Formspree) before launch.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const topics = [...solutionPages, ...productPages].map((p) => p.nav).filter((v, i, a) => a.indexOf(v) === i);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Website enquiry — ${get("topic") || "General"}`;
    const body = [
      `Name: ${get("name")}`, `Company: ${get("company")}`, `Email: ${get("email")}`, `Phone: ${get("phone")}`,
      `Project location: ${get("location")}`, "", get("message"),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="c-form" onSubmit={onSubmit}>
      <div className="f-row">
        <label><span>Full name *</span><input name="name" required autoComplete="name" /></label>
        <label><span>Company</span><input name="company" autoComplete="organization" /></label>
      </div>
      <div className="f-row">
        <label><span>Email *</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <div className="f-row">
        <label><span>Enquiry about</span>
          <select name="topic" defaultValue="">
            <option value="">General enquiry</option>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label><span>Project location</span><input name="location" placeholder="e.g. Dubai, Sharjah" /></label>
      </div>
      <label><span>Message *</span><textarea name="message" rows={5} required placeholder="Tell us about the application, scope or product code." /></label>
      <button className="btn btn-solid" type="submit" data-magnetic>Send enquiry →</button>
      {sent && <p className="f-note">Your email app should open with the enquiry ready to send. If it doesn&apos;t, email us at {company.email}.</p>}
    </form>
  );
}
