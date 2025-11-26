import React from "react";
import { Phone } from "lucide-react";

export const CTASection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#450B0A] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-4xl mb-2">
            ¿Listo para comenzar su caso de inmigración?
          </h3>
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-base md:text-lg">
            Llame hoy para una consulta gratuita
          </p>
        </div>
        <a
          href="tel:+17023444133"
          className="flex items-center gap-3 bg-[#C89141] hover:bg-[#b37f35] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg whitespace-nowrap"
        >
          <Phone className="w-6 h-6" />
          (702) 344-4133
        </a>
      </div>
    </section>
  );
};
