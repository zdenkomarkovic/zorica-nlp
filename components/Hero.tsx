"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Quote } from "lucide-react";
import Image from "next/image";
interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  quote: {
    text: string;
    author: string;
    text2: string;
  };
}

const Hero = ({ title, subtitle, description, quote }: HeroProps) => {
  return (
    <section className="relative h-[100dvh] flex items-end md:items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover "
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 pb-6 md:pb-20 md:pt-20 relative z-0 text-white">
        <div className="text-center max-w-4xl mx-auto flex flex-col justify-end">
          <p className="mb-3 md:mb-20 text-left">{description}</p>
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-3 md:mb-6 text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-2 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-2 md:mb-4">{subtitle}</p>
          </motion.div>

          <motion.blockquote
            className="text-lg md:text-xl italic mb-4 md:mb-8 pl-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Quote className="inline w-4 h-4 mr-2 text-primary mb-2 md:mb-3" />
            {quote.text}{" "}
            <Quote className="inline w-4 h-4 mr-2 text-primary mb-2 md:mb-3" />{" "}
            - {quote.author} <br />
            {quote.text2}
          </motion.blockquote>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-5 md:py-6 ">
              <a href="tel:+381644557080">
                <Phone className="w-5 h-5 mr-2" />
                Pozovite odmah
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-5 md:py-6 text-gray-700"
            >
              <a href="mailto:lekovitikoucing@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Pošaljite email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
