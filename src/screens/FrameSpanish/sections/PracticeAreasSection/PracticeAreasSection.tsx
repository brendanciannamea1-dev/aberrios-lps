import { Heart, Shield, Building2, FileText, Globe, Scale } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PracticeAreasSection = (): JSX.Element => {
  const services = [
    {
      name: "Asistencia Legal en Inmigración Familiar",
      icon: Heart,
      description: "Ayudamos a las familias a reunirse y construir un futuro juntas en los Estados Unidos. Desde peticiones familiares y ajustes de estatus, hasta procesos consulares y visas de prometido(a), trabajamos con cuidado, precisión y empatía para que su familia permanezca unida."
    },
    {
      name: "Ayuda Legal en Visas Humanitarias",
      icon: Shield,
      description: "Apoyamos a las personas que buscan protección bajo las leyes de inmigración de los Estados Unidos. Ya sea que esté solicitando asilo, una visa bajo VAWA (Ley de Violencia Contra la Mujer), Estatus de Protección Temporal (TPS) o una Visa U, nuestro equipo brinda una representación compasiva y enfocada en la seguridad, la dignidad y la justicia."
    },
    {
      name: "Defensa Contra la Deportación",
      icon: Scale,
      description: "Enfrentar un proceso de deportación puede ser aterrador. En nuestro despacho, luchamos con determinación en la Corte de Inmigración para defender su caso y evitar la separación familiar. También ayudamos con perdones (waivers) por antecedentes penales o presencia ilegal."
    },
    {
      name: "Asistencia Legal en Ajuste de Estatus y Exenciones",
      icon: FileText,
      description: "Ayudamos a los clientes a pasar de una visa temporal o estatus indocumentado a la residencia permanente. Nuestra experiencia con perdones por delitos, presencia ilegal y otras causales de inadmisibilidad nos permite diseñar estrategias legales efectivas para lograr resultados positivos."
    },
    {
      name: "Firma de Abogados en Inmigración Empresarial",
      icon: Building2,
      description: "Apoyamos a inversionistas, profesionales y empleadores a navegar los procesos complejos de inmigración empresarial. Manejamos tanto visas no inmigrantes—como E2 de Inversionista, TN, L y H1B—como visas inmigrantes, incluyendo EB5, EB1, EB2 y EB3."
    },
    {
      name: "Abogada de Apelaciones Migratorias",
      icon: Globe,
      description: "Si su caso de inmigración fue negado, podemos ayudarle a presentar una apelación ante la Junta de Apelaciones de Inmigración (BIA) o ante los Tribunales Federales de Circuito. Analizamos su caso a fondo, identificamos errores legales y luchamos por una segunda oportunidad."
    },
  ];

  return (
    <section className="relative w-full bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[#450B0A]/90"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[45px] lg:leading-[55px] tracking-[0] mb-6">
            Nuestras Áreas de Práctica
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-black/60 border border-[#C89141]/30 backdrop-blur-sm hover:bg-black/70 hover:border-[#C89141]/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#C89141] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl md:text-2xl tracking-[0] leading-[24px] md:leading-[28px] mb-4">
                  {service.name}
                </h3>

                <p className="[font-family:'Roboto',Helvetica] font-light text-gray-300 text-sm md:text-base tracking-[0] leading-[20px] md:leading-[24px]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative z-10 text-center mt-12 md:mt-16">
          <div className="flex justify-center">
            <a
              href="tel:+17023444133"
              className="bg-gradient-to-r from-[#C89141] to-[#d4a574] hover:from-[#b37f35] hover:to-[#C89141] text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 [font-family:'Roboto',Helvetica] text-lg"
            >
              LLÁMENOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
