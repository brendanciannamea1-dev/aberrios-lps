import React from "react";

export const BrandingSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-br from-[#450B0A] to-[#6b1412] py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[45px] lg:leading-[55px] tracking-[0] mb-6">
            AYUDA MIGRATORIA SIMPLE, PERSONAL Y SEGURA
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="[font-family:'Roboto',Helvetica] font-light text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Cuando necesite una abogada de inmigración confiable en Las Vegas, confíe en las Oficinas Legales de Ariadne Berrios. Ariadne ofrece una representación honesta, accesible y 100% bilingüe en casos de inmigración familiar, defensa contra deportación, visas humanitarias, inmigración empresarial y apelaciones.
            </p>
            <p className="[font-family:'Roboto',Helvetica] font-light text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Su equipo hispano entiende las necesidades reales de la comunidad inmigrante y trabaja con dedicación para proteger sus derechos, reunir familias y ayudarle a alcanzar el sueño americano.
            </p>
            <p className="[font-family:'Roboto',Helvetica] font-light text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Ya sea que esté solicitando una visa, residencia o enfrentando un proceso de deportación, nuestra meta es que su proceso sea claro, humano y sin estrés.
            </p>
            <p className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg md:text-xl lg:text-2xl mb-8">
              Su caso es oficial, sus derechos son reales y su futuro importa.<br />
              Contáctenos hoy mismo para recibir el apoyo que usted merece.
            </p>
          </div>

          <button
            onClick={() => {
              const form = document.querySelector('form[name="las-vegas-immigration-lp-spanish"]');
              form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="inline-block bg-[#C89141] hover:bg-[#b37f35] text-white font-semibold px-10 py-5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-xl mb-4 cursor-pointer"
          >
            PÓNGASE EN CONTACTO AHORA
          </button>
        </div>
      </div>
    </section>
  );
};
