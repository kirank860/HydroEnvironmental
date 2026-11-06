import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import PageMotion from "@/components/PageMotion";
import Magnetic from "@/components/Magnetic";
import { CallToAction, ContactStrip } from "@/components/sections/Sections";

// Shared frame for inner pages: header, page content, enquiry CTA, contact strip, footer.
export default function InnerPage({ children, cta = true }: { children: React.ReactNode; cta?: boolean }) {
  return (
    <>
      <Header />
      <main>
        {children}
        {cta && <CallToAction />}
        <ContactStrip />
      </main>
      <Footer />
      <Motion />
      <PageMotion />
      <Magnetic />
    </>
  );
}
