import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray-50 py-10 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-12">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#333333] text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px]">
                  Ariadne Berrios
                </h2>

                <div className="[font-family:'Roboto',Helvetica] font-light text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[22px] md:leading-[26px] lg:leading-[28.8px]">
                  Navigating the U.S. immigration system can be complex and overwhelming but you don't have to face it alone. At the Law Offices of Ariadne Berrios, we stand beside you with honest guidance, transparent pricing, and hands-on support.
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                  Ariadne personally connects with her clients — no distant paralegals or cold processes. With years of experience, she provides personalized, results-focused representation in family immigration, deportation defense, humanitarian visas, waivers, adjustment of status, and business immigration.
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                  Fluent in Spanish and English, and serving both Las Vegas and Puerto Rico, Ariadne and her team are dedicated to making every client feel heard, supported, and informed. Whether you're petitioning for a loved one, applying for a visa, or defending your rights in court, we'll guide you every step of the way — with empathy, precision, and professionalism.
                  <br className="hidden md:block" />
                  <br className="hidden md:block" />
                  At the Law Offices of Ariadne Berrios, you're more than a case file — you're family.
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="w-full max-w-[350px] md:max-w-[450px] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                  <img
                    src="/Ariadne-Berrios-Attorney.webp"
                    alt="Ariadne Berrios - Immigration Attorney"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}