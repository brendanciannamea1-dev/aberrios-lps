import React, { useEffect } from "react";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntroSection } from "./sections/IntroSection/IntroSection";
import { PracticeAreasSection } from "./sections/PracticeAreasSection/PracticeAreasSection";
import { CTASection } from "./sections/CTASection/CTASection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { BrandingSection } from "./sections/BrandingSection/BrandingSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { updateMetaTags } from "../../lib/metaTags";

export const FrameSpanish = (): JSX.Element => {
  useEffect(() => {
    updateMetaTags({
      title: "Abogado de Inmigración en Las Vegas - Law Offices of Ariadne Berrios",
      description: "Abogado de inmigración experto en Las Vegas. Inmigración familiar, defensa contra deportación y servicios de inmigración empresarial. Representación bilingüe.",
      image: "/kolby-milton-6efsp8LJPA8-unsplash.jpg",
      url: `${window.location.origin}/lp-lv-spanishimmigration`
    });
  }, []);

  return (
    <div className="bg-white flex flex-col w-full items-center">
      <div className="flex flex-col w-full items-center">
        <HeroSection />
        <IntroSection />
        <PracticeAreasSection />
        <CTASection />
        <WhyChooseUsSection />
        <CTASection />
        <TestimonialsSection />
        <BrandingSection />
        <FooterSection />
      </div>
    </div>
  );
};
