import { Award, Star, Trophy, BarChart3, Users } from "lucide-react";
import React from "react";

export const AwardsSection = (): JSX.Element => {
  const awards = [
    {
      name: "Super Lawyers",
      year: "2023",
      icon: Trophy,
      description: "Top Rated Criminal Defense Attorney"
    },
    {
      name: "AV Preeminent",
      year: "Martindale-Hubbell",
      icon: Star,
      description: "Highest Peer Review Rating"
    },
    {
      name: "Best Lawyers",
      year: "2023",
      icon: Award,
      description: "Criminal Defense Excellence"
    },
    {
      name: "AVVO Rating",
      year: "10.0",
      icon: BarChart3,
      description: "Superb Attorney Rating"
    },
    {
      name: "Client Choice",
      year: "2023",
      icon: Users,
      description: "Top 1% of Attorneys"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-8 md:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-gray-800 text-lg md:text-xl lg:text-2xl mb-2">
            Awards & Recognition
          </h2>
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-600 text-sm md:text-base">
            Recognized excellence in federal criminal defense
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 md:p-6 text-center border border-gray-100"
            >
              <div className="mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#b89158] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <award.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-gray-800 text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                {award.name}
              </h3>
              
              <p className="[font-family:'Roboto',Helvetica] font-semibold text-[#b89158] text-xs md:text-sm mb-2">
                {award.year}
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-light text-gray-600 text-xs md:text-sm leading-tight">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <p className="[font-family:'Roboto',Helvetica] font-light text-gray-500 text-xs md:text-sm">
            Committed to excellence in federal criminal defense representation
          </p>
        </div>
      </div>
    </section>
  );
};