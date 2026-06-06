import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import IndustryExperience from "./components/IndustryExperience";
import Partners from "./components/Partners";
import Tools from "./components/Tools";
import ComplianceCalendar from "./components/ComplianceCalendar";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CertificateVerification from "./components/CertificateVerification";

export default function App() {
  const [loading, setLoading] = useState(true);

  const isVerificationPage = window.location.pathname === "/verify";

  useEffect(() => {
    if (isVerificationPage) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }

    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading, isVerificationPage]);

  if (isVerificationPage) {
    return <CertificateVerification />;
  }

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <TrustStats />
        <About />
        <WhyChooseUs />
        <Services />
        <IndustryExperience />
        <Partners />
        <Tools />
        <ComplianceCalendar />
        <Resources />
        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
