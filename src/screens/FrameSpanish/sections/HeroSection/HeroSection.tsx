import { CheckIcon } from "lucide-react";
import React from "react";
import { ContactFormSpanish } from "./ContactFormSpanish";

const services = [
  "Inmigración Familiar",
  "Defensa Contra Deportación",
  "Inmigración Empresarial",
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px]">
      <header className="w-full h-auto md:h-[83px]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 bg-white py-4 md:py-0 md:h-[83px] flex items-center">
            <div className="ml-4 md:ml-24">
              <img
                src="/AriadneBerrios-Full-Color-Logo.svg"
                alt="Law Offices of Ariadne Berrios"
                className="h-12 md:h-14 w-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-[521px] h-auto md:h-[83px] bg-[#450B0A] flex justify-center md:justify-end">
            <div className="w-full md:w-[521px] h-auto md:h-[83px] bg-[#450B0A] flex flex-col justify-center items-center py-4 md:py-0">
              <a href="tel:+17023444133" className="[font-family:'Poppins',Helvetica] font-extrabold text-white text-lg md:text-[21px] text-center tracking-[1.00px] md:tracking-[2.00px] leading-[20px] md:leading-[23.1px] hover:text-gray-200 transition-colors">
                (702) 344-4133
              </a>
              <div className="[font-family:'Roboto',Helvetica] font-medium text-white text-[10px] md:text-[11px] text-center tracking-[2.00px] md:tracking-[4.00px] leading-[16px] md:leading-[19.8px] whitespace-nowrap">
                ORGULLOSAMENTE ATENDIENDO LAS VEGAS
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        className="relative w-full flex flex-col lg:flex-row py-8 md:py-20 min-h-[600px] px-4 md:px-8"
        style={{
          backgroundImage: "url('/las vegas immigration bgd-min.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="flex-1 md:ml-16 md:mr-8 flex flex-col justify-center mb-8 lg:mb-0">
          <div className="relative z-10 [text-shadow:0px_0px_6.9px_#00000066] [font-family:'Roboto',Helvetica] font-light text-white text-lg md:text-[23px] tracking-[-0.5px] md:tracking-[-1.00px] leading-[20px] md:leading-[25.3px] text-center lg:text-left mb-4 md:mb-[25px]">
            ABOGADA DE INMIGRACIÓN EN LAS VEGAS | REPRESENTACIÓN BILINGÜE, ACCESIBLE Y CONFIABLE
          </div>

          <h1 className="relative z-10 [text-shadow:0px_0px_16.5px_#00000066] [font-family:'Poppins',Helvetica] font-extrabold text-2xl md:text-4xl lg:text-[48px] tracking-[-0.5px] md:tracking-[-1.00px] leading-[28px] md:leading-[40px] lg:leading-[52px] mb-4 md:mb-[24px] max-w-[800px] text-center lg:text-left">
            <span className="text-white tracking-[-0.3px] md:tracking-[-0.55px]">
              GUIÁNDOTE EN CADA PASO
              <br />
            </span>
            <span className="text-[#C89141] tracking-[-0.3px] md:tracking-[-0.55px]">
              DE TU CAMINO MIGRATORIO
            </span>
          </h1>

          <p className="relative z-10 [text-shadow:0px_0px_6.9px_#00000066] [font-family:'Roboto',Helvetica] font-light text-[#cbd5e0] text-base md:text-lg lg:text-[20px] tracking-[0] leading-[24px] md:leading-[28px] mb-6 md:mb-[40px] max-w-[700px] text-center lg:text-left">
            En las Oficinas Legales de Ariadne Berrios, LLC, la abogada Ariadne Berrios combina su amplia experiencia federal con una atención cercana y personalizada. Con oficinas en Área Metropolitana de Las Vegas y en San Juan, Puerto Rico, representa a clientes en todo Estados Unidos, con un enfoque especial en la comunidad hispana del sur de Nevada.
            <br /><br />
            Fluida en inglés y español, Ariadne entiende las dificultades reales que enfrentan las familias inmigrantes y ofrece soluciones legales con empatía, claridad y resultados. Su despacho se distingue por su trato humano, comunicación directa con la abogada, consultas claras y sin letra pequeña, y un historial comprobado de éxito.
          </p>

          <div className="relative z-10 flex flex-col gap-2 md:gap-[9px] items-center lg:items-start">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-[15px] h-auto md:h-[39px] py-2"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#C89141] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckIcon className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </div>
                <span className="[font-family:'Roboto',Helvetica] font-light text-white text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-[420px] lg:mr-16 flex items-center justify-center">
          <ContactFormSpanish />
        </div>
      </main>
    </section>
  );
};
