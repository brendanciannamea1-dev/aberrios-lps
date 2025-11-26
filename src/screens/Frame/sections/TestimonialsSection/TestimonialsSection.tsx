import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      quote:
        "Ariadne was professional, knowledgeable, and made the immigration process smooth and stress-free. Highly recommend to all my personal clients in need of an experienced and bilingual immigration lawyer.",
      author: "– Yolanda Carapia",
    },
    {
      quote:
        "I recommend Mrs. Ariadne because they are 100% professionals fighting for your case and they make you feel safe, they make you feel like family and personally I thank them from the bottom of my heart for everything they did for my immigration case.",
      author: "– Luis Rayo",
    },
    {
      quote:
        "Since the first day we met, Ariadne has given me security and trust. She is incredibly professional and fought for my case in court until it was granted. I have known Ariadne for almost 10 years. She took over my I-485 application from my prior lawyer. Five years later, I got in touch with her to ask her to represent me on my citizenship case, my application was approved in less than six months. It doesn't matter what legal firm she works for; all that matters to me is that she represent me, and I sincerely appreciate all the effort she put into it. I strongly recommend her.",
      author: "– Sandra A",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#333333] leading-[28px] md:leading-[50px] lg:leading-[60px] [font-family:'Poppins',Helvetica] tracking-[0] mb-4">
          Testimonials
        </h2>
        <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 [font-family:'Roboto',Helvetica] font-light mb-8 md:mb-16">
          What our clients say about our legal services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#C89141] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg md:text-2xl">💬</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C89141] text-lg md:text-xl">★</span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-700 text-sm md:text-base lg:text-lg tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[28px] mb-4 md:mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-semibold text-[#C89141] text-sm md:text-base lg:text-lg tracking-[0] leading-[20px] md:leading-[24px] lg:leading-[27px]">
                    {testimonial.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
