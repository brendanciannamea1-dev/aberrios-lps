import React from "react";
import { BrandingSection } from "./sections/BrandingSection";
import { IntroSection } from "./sections/IntroSection";
import { PracticeAreasSection } from "./sections/PracticeAreasSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { CTASection } from "./sections/CTASection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { updateMetaTags } from "../../lib/metaTags";

export const FramePuertoRico = (): JSX.Element => {
  React.useEffect(() => {
    updateMetaTags({
      title: "Puerto Rico Immigration Attorney - Law Offices of Ariadne Berrios",
      description: "Experienced immigration attorney in Puerto Rico. Compassionate representation in family immigration, deportation defense, asylum, and business immigration cases. English and Spanish services.",
      image: "/ana-toledo-R7VNq6RMNM4-unsplash.jpg",
      url: `${window.location.origin}/lp-pr-englishimmigration`
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
