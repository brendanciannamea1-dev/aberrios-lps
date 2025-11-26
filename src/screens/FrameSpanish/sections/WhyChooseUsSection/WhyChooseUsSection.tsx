import React from "react";
import { Heart, MessageCircle, Award } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSection = (): JSX.Element => {
  const reasons = [
    {
      icon: Heart,
      title: "Compromiso Real con Cada Cliente",
      description: "En nuestro despacho, usted no es solo un expediente. Nos preocupamos por su historia, su tranquilidad y su futuro. Nos distinguimos por mantener una comunicación clara y constante, sin sorpresas ni falsas promesas."
    },
    {
      icon: MessageCircle,
      title: "Representación Bilingüe y Culturalmente Cercana",
      description: "Como abogada bilingüe, Ariadne entiende las barreras culturales y de comunicación que enfrentan los inmigrantes y sabe cómo simplificar el proceso para que se sienta acompañado en todo momento."
    },
    {
      icon: Award,
      title: "Reconocida por Su Excelencia",
      description: "Miembro de la American Immigration Lawyers Association (AILA) y ganadora del premio Avvo Client's Choice 2024, Ariadne ha construido su reputación sobre resultados, ética y empatía."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#333333] text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[45px] lg:leading-[55px] tracking-[0] mb-4">
            Por Qué Elegirnos
          </h2>
          <p className="[font-family:'Roboto',Helvetica] font-light text-black text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
            Cuando se trata de inmigración, cada caso representa una historia, una familia y un sueño. Por eso, en las Oficinas Legales de Ariadne Berrios, nos comprometemos a tratar su caso con respeto, transparencia y compromiso real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-2 border-[#C89141]/20 hover:border-[#C89141] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#C89141] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <reason.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-xl md:text-2xl mb-4">
                  {reason.title}
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="[font-family:'Roboto',Helvetica] font-medium text-black text-lg md:text-xl mb-6">
            En las Oficinas Legales de Ariadne Berrios, su caso es personal, su confianza es sagrada y su futuro es nuestra prioridad. Contáctenos hoy mismo para programar su consulta y dar el siguiente paso hacia el cumplimiento de sus metas migratorias.
          </p>
          <button
            onClick={() => {
              const form = document.querySelector('form[name="las-vegas-immigration-lp-spanish"]');
              form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="inline-block bg-gradient-to-r from-[#C89141] to-[#d4a574] hover:from-[#b37f35] hover:to-[#C89141] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg cursor-pointer"
          >
            Obtener Consulta Gratis
          </button>
        </div>
      </div>
    </section>
  );
};
