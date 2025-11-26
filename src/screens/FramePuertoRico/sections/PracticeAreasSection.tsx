import { Heart, Shield, Building2, FileText, Globe, Scale } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const PracticeAreasSection = (): JSX.Element => {
  const services = [
    {
      name: "Family Immigration Legal Assistance",
      icon: Heart,
      description: "We help families reunite and build a secure future together in the United States. From family petitions and adjustment of status to consular processing and fiancé visas, we handle each case with care and precision to keep families together."
    },
    {
      name: "Humanitarian Visas Legal Help",
      icon: Shield,
      description: "We stand with individuals seeking protection under U.S. immigration law. Our team assists with Asylum, VAWA (Violence Against Women Act), Temporary Protected Status (TPS), and U-Visas, providing compassionate and experienced representation focused on safety, dignity, and justice."
    },
    {
      name: "Deportation Defense",
      icon: Scale,
      description: "Facing deportation can be overwhelming. At the Law Offices of Ariadne Berrios, we fight for your rights in Immigration Court and help you explore every available legal option. We also assist with waivers for unlawful presence or criminal history, helping strengthen your case and your future in the U.S."
    },
    {
      name: "Adjustment of Status & Waivers Legal Assistance",
      icon: FileText,
      description: "We guide clients through the process of obtaining lawful permanent residence and overcoming barriers such as inadmissibility or previous immigration violations. Every case is approached with a strategic, human-centered plan for success."
    },
    {
      name: "Business Immigration Law Firm",
      icon: Building2,
      description: "We help investors, professionals, and employers understand and manage their immigration needs, including E2 Investor, TN, L, and H1B visas, as well as EB5, EB1, EB2, and EB3 categories."
    },
    {
      name: "Appeals Lawyer",
      icon: Globe,
      description: "If your immigration case was denied, we can help you file an appeal with the Board of Immigration Appeals (BIA) or the Federal Circuit Courts. Our approach combines deep legal knowledge with a commitment to helping clients get a second chance at success."
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
              href="tel:+19393603000"
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
