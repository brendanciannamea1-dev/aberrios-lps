import React from "react";
import { Button } from "../../../../components/ui/button";

export const IntroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 w-full lg:w-[415px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/Ariadne-Berrios-Attorney.jpg.webp"
              alt="Ariadne Berrios - Abogada de Inmigración"
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 max-w-[653px] text-center lg:text-left">
            <h2 className="font-extrabold text-[#333333] text-2xl md:text-3xl lg:text-4xl leading-[28px] md:leading-[35px] lg:leading-[39.6px] [font-family:'Poppins',Helvetica] tracking-[0] mb-4 md:mb-6">
              Ariadne Berrios Law: Su Abogada de Inmigración de Confianza en <span className="text-[#C02424]">Las Vegas</span>
            </h2>

            <p className="[font-family:'Roboto',Helvetica] font-light text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[22px] md:leading-[25px] lg:leading-[27px] mb-6">
              Navegar el sistema de inmigración de los Estados Unidos puede ser complejo y abrumador, pero no tiene que enfrentarlo solo. En las Oficinas Legales de Ariadne Berrios, estamos dedicados a ayudar a personas, familias y empresas a alcanzar sus metas migratorias con claridad y confianza.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Con amplia experiencia en derecho migratorio, Ariadne ofrece una representación personalizada y efectiva en casos de inmigración familiar, defensa contra deportación, visas humanitarias, exenciones, ajustes de estatus e inmigración empresarial.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Nuestra oficina de Las Vegas atiende a la comunidad local con un enfoque cercano, profesional y completamente bilingüe. También atendemos clientes en Puerto Rico y en cualquier estado del país, gracias a nuestra licencia federal.
              <br className="hidden lg:block" /><br className="hidden lg:block" />
              Ya sea que esté solicitando una residencia permanente (Green Card), defendiendo sus derechos en la corte de inmigración, o ayudando a un ser querido a reunirse con su familia, nuestro compromiso es brindarle claridad, apoyo y esperanza en cada paso del camino.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={() => {
                  const form = document.querySelector('form[name="las-vegas-immigration-lp-spanish"]');
                  form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-[#C89141] hover:bg-[#b37f35] text-white px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] font-semibold cursor-pointer"
              >
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
