import { Heart, Shield, Building2, FileText, Globe, Scale } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PracticeAreasSection = (): JSX.Element => {
  const services = [
    {
      name: "Family Immigration Legal Assistance",
      icon: Heart,
      description: "We help families reunite and build a future together in the United States. From family petitions and adjustment of status to consular processing and fiancé visas, our firm ensures every step of your case is handled with precision and care so your loved ones can stay together."
    },
    {
      name: "Humanitarian Visas Legal Help",
      icon: Shield,
      description: "We stand with individuals seeking protection under U.S. immigration law. Whether applying for asylum, VAWA (Violence Against Women Act), Temporary Protected Status (TPS), or a U-Visa, our team provides compassionate representation focused on safety, dignity, and justice."
    },
    {
      name: "Deportation Defense",
      icon: Scale,
      description: "Facing removal proceedings can be one of the most difficult experiences in a person's life. At the Law Offices of Ariadne Berrios, we fight fearlessly in Immigration Court to defend your rights and protect your family. We also assist with waivers for criminal or unlawful presence issues, giving you the strongest possible defense."
    },
    {
      name: "Adjustment of Status & Waivers Legal Assistance",
      icon: FileText,
      description: "We assist clients in transitioning from temporary visas or undocumented status to permanent residency. Our experience with complex waivers — including those for criminal history or unlawful presence — allows us to find solutions where others see roadblocks."
    },
    {
      name: "Business Immigration Law Firm",
      icon: Building2,
      description: "Our firm supports investors, professionals, and employers in navigating complex business immigration processes. We handle both non-immigrant visas—such as E2 Investor, TN, L, and H1B—and immigrant visas, including EB5, EB1, EB2, and EB3 categories."
    },
    {
      name: "Appeals Lawyer",
      icon: Globe,
      description: "Was your case denied? We help clients appeal decisions before the Board of Immigration Appeals (BIA) and Federal Circuit Courts, identifying legal errors and giving your case a second chance."
    },
  ];

  return (
    <section className="relative w-full bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[#450B0A]/90"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[45px] lg:leading-[55px] tracking-[0] mb-6">
            Our Practice Areas
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-black/60 border border-[#C89141]/30 backdrop-blur-sm hover:bg-black/70 hover:border-[#C89141]/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#C89141] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl md:text-2xl tracking-[0] leading-[24px] md:leading-[28px] mb-4">
                  {service.name}
                </h3>

                <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base tracking-[0] leading-[20px] md:leading-[24px]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative z-10 text-center mt-12 md:mt-16">
          <div className="flex justify-center">
            <a
              href="tel:+17023444133"
              className="bg-gradient-to-r from-[#C89141] to-[#d4a574] hover:from-[#b37f35] hover:to-[#C89141] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg"
            >
              CALL US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};