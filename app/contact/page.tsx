import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/sections/Sections";
import { company, contactImage } from "@/lib/content";
import { reach } from "@/lib/landing";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(reach.mapQuery)}`;

export const metadata: Metadata = {
  title: "Contact Us — Flushing, Pre-Commissioning & Equipment Rental in UAE",
  description:
    "Contact Hydro Environmental & Engineering Services LLC for chilled water flushing, pipeline pre-commissioning, hydrotesting, chemical cleaning, industrial utilities and equipment rental across the UAE.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InnerPage cta={false}>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Let’s talk about your system."
        lead="Share the system type, pipe sizes or volume, location and scope — our engineers will come back with a method and equipment package."
        image={contactImage}
      />
      <section data-tone="light" className="ct ct-light" id="contact">
        <div className="wrap ct-grid">
          <div className="ct-info rv">
            <span className="label green">Reach us directly</span>
            <h2 className="serif">Send us an enquiry.</h2>
            <p className="ct-lead">Our engineers support consultants, contractors and facility teams across all seven emirates.</p>
            <ul className="ct-lines">
              <li><small>Call</small><a className="serif" href={company.phoneHref}>{company.phone}</a></li>
              <li><small>Email</small><a className="serif" href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><small>Office</small><span>{company.location.join(", ")}</span></li>
            </ul>
            <p className="ct-group">Part of {company.group}</p>
          </div>
          <div className="ct-form rv">
            <h2 className="serif">Project details</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section data-tone="light" className="ct-map" aria-label="Office location">
        <div className="wrap">
          <div className="ct-map-frame rv">
            <iframe
              title="HEES office location — Al Sajaa Industrial Area, Sharjah"
              src={`https://www.google.com/maps?q=${encodeURIComponent(reach.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="ct-map-card">
              <span className="label green">Our office</span>
              <h2 className="serif">Al Sajaa Industrial Area</h2>
              <p>{company.location.join(", ")}</p>
              <a className="btn btn-dark" href={mapsLink} target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            </div>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
