"use client";

import { Navbar } from "@/components/navbar/navbar";
import { AboutSection } from "@/sections/about";
import { AutomotiveShowcase } from "@/sections/automotive";
import { ContactSection } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { PortfolioSection } from "@/sections/portfolio";
import { ServicesSection } from "@/sections/services";
import { TestimonialsSection } from "@/sections/testimonials";
import { useAnalyticsTracking } from "@/hooks/use-analytics-tracking";

export function MagadhExperience() {
  useAnalyticsTracking();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <AutomotiveShowcase />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
