import { MapPin, Phone } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#450B0A] to-[#6b1110] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/AriadneBerrios-Full-Color-Logo.svg"
                alt="Law Offices of Ariadne Berrios"
                className="h-12 md:h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base leading-[20px] md:leading-[24px]">
              Con oficinas en Área Metropolitana de Las Vegas y San Juan, Puerto Rico, el despacho atiende con orgullo a clientes en todo el país con integridad, dedicación y una defensa enfocada en resultados.
            </p>
          </div>

          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-lg md:text-xl mb-4 md:mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#C89141] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <div>
                  <p className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm md:text-base mb-2">
                    Las Vegas
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base leading-[18px] md:leading-[24px] mb-4">
                    170 S. Green Valley Pkwy, Suite 300<br />
                    Henderson, NV 89012
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm md:text-base mb-2">
                    Puerto Rico
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base leading-[18px] md:leading-[24px]">
                    239 Arterial Hostos Ave, Suite 900<br />
                    San Juan, Puerto Rico
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#C89141] rounded-full flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <div>
                  <p className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm md:text-base mb-1">
                    Número de Teléfono de la Oficina de Puerto Rico
                  </p>
                  <a href="tel:+19393603000" className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base md:text-lg hover:text-[#C89141] transition-colors block mb-1">
                    (939) 360-3000
                  </a>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-xs md:text-sm">
                    Horario de Oficina: 9am - 6pm AST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-lg md:text-xl mb-4 md:mb-6">
              Nuestros Servicios
            </h3>
            <div className="space-y-3">
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base">
                Inmigración Familiar
              </p>
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base">
                Visas Humanitarias
              </p>
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base">
                Defensa Contra Deportación
              </p>
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base">
                Inmigración Empresarial
              </p>
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base">
                Apelaciones
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-xs md:text-sm text-center md:text-left">
                © 2025 Law Offices of Ariadne Berrios. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="https://aberrioslaw.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-xs md:text-sm hover:text-[#C89141] transition-colors">
                Política de Privacidad
              </a>
              <a href="https://aberrioslaw.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-xs md:text-sm hover:text-[#C89141] transition-colors">
                Términos de Servicio
              </a>
              <a href="https://aberrioslaw.com/disclaimer/" target="_blank" rel="noopener noreferrer" className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-xs md:text-sm hover:text-[#C89141] transition-colors">
                Descargo de Responsabilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
