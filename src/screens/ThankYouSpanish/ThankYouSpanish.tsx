import React, { useEffect } from "react";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ThankYouSpanish = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
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
                SIRVIENDO CON ORGULLO A LAS VEGAS Y PUERTO RICO
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </div>

          <h1 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#333333] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[55px] mb-6">
            Gracias por Su Solicitud
          </h1>

          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-lg md:text-xl lg:text-2xl tracking-[0] leading-[26px] md:leading-[30px] lg:leading-[34px] mb-8 max-w-3xl mx-auto">
            Hemos recibido su solicitud de consulta y nos comunicaremos con usted dentro de 24 horas para hablar sobre su caso de inmigración.
          </p>

          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-12 max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-xl md:text-2xl mb-6">
                ¿Qué Sigue Ahora?
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C89141] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-base md:text-lg">
                    Nuestro equipo revisará los detalles de su caso de inmigración dentro de 2 horas
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C89141] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-base md:text-lg">
                    Lo llamaremos dentro de 24 horas para programar su consulta gratuita
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C89141] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-base md:text-lg">
                    Durante la consulta, hablaremos sobre sus opciones migratorias y estrategia legal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-[#450B0A] rounded-xl p-6 md:p-8 mb-12">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl md:text-2xl mb-4">
              ¿Necesita Asistencia Inmediata?
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-base md:text-lg mb-6">
              Si su asunto migratorio es urgente, no espere - llámenos ahora. Estamos aquí para ayudarle a navegar su camino migratorio.
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#C89141] hover:bg-[#a67d47] h-auto px-8 py-4 flex items-center gap-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <>
                  <Phone className="w-5 h-5 text-white" />
                  <a href="tel:+17023444133" className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg tracking-[0.5px] hover:text-gray-200 transition-colors">
                    (702) 344-4133
                  </a>
                </>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-[#450B0A] py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/AriadneBerrios-Full-Color-Logo.svg"
              alt="Law Offices of Ariadne Berrios"
              className="h-12 w-auto"
            />
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm mb-2">
            Sirviendo con Orgullo a Las Vegas y Puerto Rico
          </p>
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-400 text-sm">
            © 2025 Law Offices of Ariadne Berrios, LLC. Todos los Derechos Reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
