import { Heart, MessageCircle, Award } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Guidance, Proven Results",
      description:
        "Our mission is to make immigration simple, transparent, and human. From free case evaluations to structured, paid consultations with Ariadne, you'll always know your options before committing.",
    },
    {
      icon: MessageCircle,
      title: "Clear & Transparent Communication",
      description:
        "We believe in open, honest, and simple communication. From your first consultation to the final outcome, our team explains every step in plain language so you know exactly where your case stands and what to expect next.",
    },
    {
      icon: Award,
      title: "Recognized for Excellence",
      description:
        "A member of the American Immigration Lawyers Association (AILA) and recipient of the Avvo Client's Choice Award (2024), Ariadne's reputation reflects years of dedication and client success stories.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px] mb-6">
            Why Choose Us
          </h2>
          <p className="[font-family:'Roboto',Helvetica] font-light text-[#666666] text-base md:text-lg tracking-[0] leading-[24px] md:leading-[28px]">
            When it comes to immigration law, every case is personal. Your future, your family, and your dreams deserve experienced legal care and unwavering commitment. That's why so many individuals and families trust The Law Offices of Ariadne Berrios for immigration guidance that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C89141] rounded-full flex items-center justify-center mb-2">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#333333] text-lg md:text-xl lg:text-[21px] tracking-[0] leading-[24px] md:leading-[30px] lg:leading-[37.8px] mb-4 md:mb-6">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Roboto',Helvetica] font-light text-[#666666] text-sm md:text-base lg:text-lg tracking-[0] leading-[20px] md:leading-[22px] lg:leading-[23.8px] max-w-md">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="[font-family:'Roboto',Helvetica] font-light text-[#666666] text-base md:text-lg mb-6">
            At the Law Offices of Ariadne Berrios, we put your story, your rights, and your future first. Contact us today to schedule your consultation and take the next step toward achieving your immigration goals.
          </p>
          <a
            href="tel:+19393603000"
            className="inline-block bg-[#C89141] hover:bg-[#b37f35] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg"
          >
            Call Today - (939) 360-3000
          </a>
        </div>
      </div>
    </section>
  );
};
