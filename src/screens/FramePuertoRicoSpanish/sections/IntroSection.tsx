import React from "react";
import { Button } from "../../../components/ui/button";

export const IntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 w-full lg:w-[415px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/Ariadne-Berrios-Attorney.webp"
              alt="Ariadne Berrios - Abogada de Inmigración"
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 max-w-[653px] text-center lg:text-left">
            <h2 className="font-extrabold text-[#333333] text-2xl md:text-3xl lg:text-4xl leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Poppins',Helvetica] tracking-[0] mb-4 md:mb-6">
              Ariadne Berrios Law: Su Abogada de Inmigración de Confianza en <span className="text-[#C02424]">Puerto Rico</span>
            </h2>

            <p className="[font-family:'Roboto',Helvetica] font-light text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[22px] md:leading-[25px] lg:leading-[27px] mb-6">
              Sabemos que los procesos migratorios pueden ser confusos y estresantes — pero usted no tiene que enfrentarlos solo. En las Oficinas Legales de Ariadne Berrios, nos tomamos el tiempo para escuchar su historia y acompañarlo paso a paso.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Con amplia experiencia en derecho migratorio, la licenciada Berrios ofrece representación personalizada en casos de inmigración familiar, defensa contra deportación, visas humanitarias, exenciones, ajustes de estatus e inmigración empresarial.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Desde Puerto Rico, atendemos con orgullo a nuestros compatriotas y a la comunidad latina en todo Estados Unidos. Gracias a su licencia federal, Ariadne puede representar casos migratorios en los 50 estados.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Ya sea que busque reunirse con su familia, defender sus derechos ante inmigración o regularizar su estatus, nuestro compromiso es ofrecerle orientación clara, soluciones reales y acompañamiento humano.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#C89141] hover:bg-[#b37f35] text-white px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <a href="tel:+19393603000" className="[font-family:'Roboto',Helvetica] font-semibold">
                  Llame Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
