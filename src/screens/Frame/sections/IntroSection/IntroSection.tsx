import React from "react";
import { Button } from "../../../../components/ui/button";

export const IntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 w-full lg:w-[415px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/Ariadne-Berrios-Attorney.webp"
              alt="Ariadne Berrios - Immigration Attorney"
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 max-w-[653px] text-center lg:text-left">
            <h2 className="font-extrabold text-[#333333] text-2xl md:text-3xl lg:text-4xl leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Poppins',Helvetica] tracking-[0] mb-4 md:mb-6">
              Ariadne Berrios Law: Your Trusted Immigration Lawyer in <span className="text-[#C02424]">Las Vegas</span>
            </h2>

            <p className="[font-family:'Roboto',Helvetica] font-light text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[22px] md:leading-[25px] lg:leading-[27px] mb-6">
              Navigating the U.S. immigration system can be complex and overwhelming but you don't have to face it alone. At the Law Offices of Ariadne Berrios, we are dedicated to helping individuals, families, and businesses achieve their immigration goals with clarity and confidence.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              With extensive legal experience, attorney Ariadne Berrios provides personalized, results-focused representation in family-based immigration, deportation defense, humanitarian visas, waivers, naturalization, and business immigration. Fluent in both English and Spanish, she proudly serves clients across the nation from her offices in <span className="text-[#C02424]">Las Vegas</span>, Nevada, and San Juan, Puerto Rico.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Whether you're seeking a green card, defending your rights in immigration court, or helping a loved one reunite with family, our team offers compassionate support and strong advocacy every step of the way. At the Law Offices of Ariadne Berrios, your future is our priority.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#C89141] hover:bg-[#b37f35] text-white px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <a href="tel:+17023444133" className="[font-family:'Roboto',Helvetica] font-semibold">
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
