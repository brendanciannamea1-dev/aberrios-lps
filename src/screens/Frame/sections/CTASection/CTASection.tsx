import React from "react";
import { Button } from "../../../../components/ui/button";

export const CTASection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-r from-[#450B0A] to-[#6b1110] py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[50px] mb-4">
            IMMIGRATION HELP MADE SIMPLE, PERSONAL & SECURE
          </h2>
          <p className="text-gray-300 text-lg md:text-xl text-center [font-family:'Roboto',Helvetica] font-light mb-8 px-4 max-w-4xl">
            When you need a trusted immigration attorney in Las Vegas or Puerto Rico, turn to the Law Offices of Ariadne Berrios. With years of experience, attorney Ariadne Berrios provides compassionate and results-focused legal guidance in family immigration, deportation defense, humanitarian visas, business immigration, and appeals.
            <br /><br />
            Her firm stands out for its accessibility — real communication, real compassion, and real results. Whether you're in Nevada, Puerto Rico, or anywhere in the U.S., we'll treat your case with the respect and urgency it deserves.
            <br /><br />
            Your case is official, your rights are real, and your future matters. Contact us today to get the support you deserve.
          </p>

          <Button className="bg-gradient-to-r from-[#C89141] to-[#d4a574] hover:from-[#b37f35] hover:to-[#C89141] h-auto px-6 md:px-12 py-4 md:py-6 flex items-center gap-3 md:gap-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-base md:text-lg">📞</span>
            </div>
            <a href="tel:+17023444133" className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg md:text-xl lg:text-2xl tracking-[0.5px] md:tracking-[1.00px] leading-[24px] md:leading-[34px] hover:text-gray-200 transition-colors">
              GET IN TOUCH NOW
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
