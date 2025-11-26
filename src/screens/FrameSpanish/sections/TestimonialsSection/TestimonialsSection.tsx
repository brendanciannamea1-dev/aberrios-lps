import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Yolanda Carapia",
      text: "Ariadne was professional, knowledgeable, and made the immigration process smooth and stress-free. Highly recommend to all my personal clients in need of an experienced and bilingual immigration lawyer.",
      rating: 5
    },
    {
      name: "Luis Rayo",
      title: "Agradecimiento",
      text: "I recommend Mrs. Ariadne because they are 100% professionals fighting for your case and they make you feel safe, they make you feel like family and personally I thank them from the bottom of my heart for everything they did for my immigration case.",
      rating: 5
    },
    {
      name: "Sandra A",
      title: "My immigration attorney of choice.",
      text: "Since the first day we met, Ariadne has given me security and trust. She is incredibly professional and fought for my case in court until it was granted. I have known Ariadne for almost 10 years. She took over my I-485 application from my prior lawyer. Five years later, I got in touch with her to ask her to represent me on my citizenship case, my application was approved in less than six months. It doesn't matter what legal firm she works for; all that matters to me is that she represent me, and I sincerely appreciate all the effort she put into it. I strongly recommend her.",
      rating: 5
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-[#333333] text-3xl md:text-4xl lg:text-5xl leading-[35px] md:leading-[45px] lg:leading-[55px] tracking-[0] mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#C89141] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C89141] text-[#C89141]" />
                  ))}
                </div>

                {testimonial.title && (
                  <h4 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-lg mb-2">
                    {testimonial.title}
                  </h4>
                )}

                <p className="[font-family:'Roboto',Helvetica] font-light text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {testimonial.text}
                </p>

                <p className="[font-family:'Roboto',Helvetica] font-semibold text-[#333333] text-base">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
