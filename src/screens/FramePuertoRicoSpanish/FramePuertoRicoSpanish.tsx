import React from "react";
import { BrandingSection } from "./sections/BrandingSection";
import { IntroSection } from "./sections/IntroSection";
import { PracticeAreasSection } from "./sections/PracticeAreasSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { CTASection } from "./sections/CTASection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { updateMetaTags } from "../../lib/metaTags";

export const FramePuertoRicoSpanish = (): JSX.Element => {
  React.useEffect(() => {
    updateMetaTags({
      title: "Abogada de Inmigración en Puerto Rico - Law Offices of Ariadne Berrios",
      description: "Abogada de inmigración experimentada en Puerto Rico. Representación compasiva en inmigración familiar, defensa contra deportación, asilo y casos de inmigración empresarial. Servicios en inglés y español.",
      image: "/ana-toledo-R7VNq6RMNM4-unsplash.jpg",
      url: `${window.location.origin}/lp-pr-spanishimmigration`
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
