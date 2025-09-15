"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana M.",
    role: "Klijent - Oporavak od tuge",
    content: "Zorica mi je pomogla da se oporavim od gubitka majke. RFG metoda je stvarno delotvorna. Zahvaljujem joj se za podršku i razumevanje tokom najtežeg perioda mog života.",
    rating: 5
  },
  {
    id: 2,
    name: "Marko P.",
    role: "Klijent - NLP koučing",
    content: "Kroz NLP sesije sa Zoricom sam naučio kako da bolje komuniciram i rešavam konflikte. Preporučujem svima koji žele da unaprede svoje veštine i odnose.",
    rating: 5
  },
  {
    id: 3,
    name: "Milica R.",
    role: "Klijent - Logoterapija",
    content: "Logoterapija sa Zoricom mi je pomogla da pronađem smisao u životu nakon teških životnih izazova. Zahvalna sam za njenu stručnost i empatiju.",
    rating: 5
  },
  {
    id: 4,
    name: "Stefan K.",
    role: "Klijent - Koučing",
    content: "Koučing sesije su mi pomogle da postavim jasne ciljeve i krenem ka njima. Zorica je odličan kouč koji zna kako da vas motivira i podrži.",
    rating: 5
  },
  {
    id: 5,
    name: "Jelena D.",
    role: "Klijent - Oporavak od tuge",
    content: "Nakon razvoda sam bila u depresiji. Zorica mi je pomogla da se oporavim i ponovo pronađem radost u životu. RFG metoda je čudo!",
    rating: 5
  },
  {
    id: 6,
    name: "Nikola S.",
    role: "Klijent - NLP",
    content: "NLP tehnike koje sam naučio od Zorice su mi pomogle u poslu i privatnom životu. Sada se bolje nosim sa stresom i konfliktima.",
    rating: 5
  }
];

const Testimonials = ({ testimonials = defaultTestimonials, className = "" }: TestimonialsProps) => {
  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Šta kažu naši klijenti
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Iskustva ljudi koji su kroz naše usluge pronašli put ka boljem životu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-primary mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 mb-6">
              Pridružite se stotinama zadovoljnih klijenata koji su pronašli put ka boljem životu
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials