"use client";

import { AnimatedCursor } from "@/components/animated-cursor";
import { IntroExperience } from "@/components/intro-experience";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/sections/about";
import { AutomotiveShowcase } from "@/sections/automotive";
import { ContactSection } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { PortfolioSection } from "@/sections/portfolio";
import { ServicesSection } from "@/sections/services";
import { TestimonialsSection } from "@/sections/testimonials";

export function MagadhExperience() {
  return (
    <LenisProvider>
      <AnimatedCursor />
      <IntroExperience />
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
    </LenisProvider>
  );
}
