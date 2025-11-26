import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#C89141] text-xl md:text-2xl mb-6">
              Oficina de Las Vegas
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#C89141] flex-shrink-0 mt-1" />
                <div>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-base">
                    170 S. Green Valley Pkwy, Suite 300
                    <br />
                    Henderson, NV 89012
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#C89141] text-xl md:text-2xl mb-6">
              Oficina de Puerto Rico
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#C89141] flex-shrink-0 mt-1" />
                <div>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-base">
                    239 Arterial Hostos Ave, Suite 900
                    <br />
                    San Juan, Puerto Rico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[#C89141] flex-shrink-0 mt-1" />
              <div>
                <p className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm md:text-base mb-1">
                  Número de Teléfono de la Oficina de Las Vegas
                </p>
                <a
                  href="tel:+17023444133"
                  className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl hover:text-[#C89141] transition-colors block mb-1"
                >
                  (702) 344-4133
                </a>
                <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-xs md:text-sm">
                  Horario de Oficina: 8am - 4:30pm PST
                </p>
              </div>
            </div>

            <div>
              <img
                src="/AriadneBerrios-Full-Color-Logo.svg"
                alt="Law Offices of Ariadne Berrios"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-sm">
            © {new Date().getFullYear()} Law Offices of Ariadne Berrios, LLC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
