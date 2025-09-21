"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

interface CTAProps {
  phoneNumber?: string;
  email?: string;
}

const CTA = ({ phoneNumber, email }: CTAProps) => {
  return (
    <section className={`py-10 bg-gradient-to-br from-gray-900 to-gray-600 `}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              Spremni da napravite prvi korak?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-20 justify-center items-center">
              <div className="prose prose-lg max-w-none text-white space-y-2 text-left">
                <p className="">
                  Ako čekate da bolji život dođe do vas to se neće desiti bez
                  vas.
                </p>
                <p className="">Kreirajte svoj život po svojoj meri.</p>
                <p className="">
                  Ojačajte sebe, prevaziđite prošlost, krenite uspešnim putem.
                </p>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Pozovite odmah
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <a href={`mailto:${email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Pošaljite email
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
