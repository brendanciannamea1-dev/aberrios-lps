import React, { useEffect } from "react";
import { BrandingSection } from "./sections/BrandingSection/BrandingSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { IntroSection } from "./sections/IntroSection/IntroSection";
import { PracticeAreasSection } from "./sections/PracticeAreasSection/PracticeAreasSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { CTASection } from "./sections/CTASection/CTASection";
import { updateMetaTags } from "../../lib/metaTags";

export const Frame = (): JSX.Element => {
  useEffect(() => {
    updateMetaTags({
      title: "Las Vegas Immigration Attorney - Law Offices of Ariadne Berrios",
      description: "Expert immigration attorney in Las Vegas. Family immigration, deportation defense, and business immigration services. Bilingual representation.",
      image: "/kolby-milton-6efsp8LJPA8-unsplash.jpg",
      url: `${window.location.origin}/lp-lv-englishimmigration`
    });
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative bg-white">
        <BrandingSection />
        <IntroSection />
        <PracticeAreasSection />
        <WhyChooseUsSection />
        <CTASection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
  );
};
