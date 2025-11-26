import { Heart, MessageCircle, Award } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Heart,
      title: "Experiencia Reconocida",
      description:
        "Miembro de la American Immigration Lawyers Association (AILA) y ganadora del premio Avvo Client's Choice 2024, Ariadne ha sido reconocida por su compromiso y resultados.",
    },
    {
      icon: MessageCircle,
      title: "Cercanía y Confianza",
      description:
        "Nos caracteriza un trato humano y profesional. Aquí no hay distancia entre abogado y cliente — hay comunicación, empatía y resultados.",
    },
    {
      icon: Award,
      title: "Licencia Federal y Alcance Nacional",
      description:
        "Ariadne está autorizada para ejercer en Puerto Rico y Washington D.C., lo que le permite representar casos migratorios en cualquier estado de EE.UU.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[39.6px] mb-6">
            Por Qué Elegirnos
          </h2>
          <p className="[font-family:'Roboto',Helvetica] font-light text-[#666666] text-base md:text-lg tracking-[0] leading-[24px] md:leading-[28px]">
            Porque entendemos lo que está viviendo.
            <br />
            En las Oficinas Legales de Ariadne Berrios, cada caso importa. Sabemos que detrás de cada proceso hay una familia, una historia y un sueño.
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
            En las Oficinas Legales de Ariadne Berrios, usted no es un número. Es parte de nuestra comunidad, y su futuro nos importa.
            <br />
            Contáctenos hoy mismo para programar su consulta y dar el siguiente paso hacia el cumplimiento de sus metas migratorias.
          </p>
          <a
            href="tel:+19393603000"
            className="inline-block bg-[#C89141] hover:bg-[#b37f35] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg"
          >
            Llame Hoy - (939) 360-3000
          </a>
        </div>
      </div>
    </section>
  );
};
