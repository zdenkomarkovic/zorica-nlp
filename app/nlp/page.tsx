"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Target, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const NLPPage = () => {
  const applications = [
    "Poslovanje",
    "Preduzetništvo", 
    "Pravosuđe",
    "Obrazovanje",
    "Organizacija državne uprave",
    "Očuvanje zdravlja i lečenje",
    "Psihoterapija",
    "Vojska",
    "Policija",
    "Sport",
    "Partnerski odnosi",
    "Roditeljstvo",
    "Bilo koji međuljudski odnosi"
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero sekcija */}
      <section className=" relative h-[70dvh]">
      <Image src="/nlp.jpg" alt="nlp" fill className="w-full h-full object-cover  -z-10" />
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center z-10 h-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-primary mb-6 mt-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              NLP
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skup znanja o ljudima i međuljudskim odnosima
            </motion.p>
          </div>
        </div>
      </section>

      {/* O NLP-u */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none text-slate-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 first-letter:pl-6">
                <span className="font-bold">NLP</span> je skup znanja o ljudima i međuljudskim odnosima, pretočen u skup tehnika, 
                koje mogu pomoći čoveku da živi život sa više uvida, više izbora i manje slučajnosti.
              </p>

              <p className="mb-6 first-letter:pl-6">
                <span className="font-bold">NLP</span> je skup alata koji nam obezbeđuju da životni događaji budu manje stvar slučajnosti i
                sudbine, a više naše svesne namere.
              </p>

              <p className="mb-6 first-letter:pl-6 ">
                <span className="font-bold">NLP</span> je skup proverenih modela za postizanje ciljeva i rešavanje problema.
              </p>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto mt-16">
            <motion.h2
              className="text-3xl font-bold text-center text-primary mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zašto NLP?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-gray-400 to-gray-100">
                  <CardContent className="p-8">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-black">Dostupno svima</h3>
                    <p className="text-black">
                      NLP može biti koristan svima, bez obzira na prethodno obrazovanje i iskustvo.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-gray-400 to-gray-100">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-black">Univerzalno primenljiv</h3>
                    <p className="text-black">
                      Koristan i primenljiv kako u poslu, tako i u privatnom životu.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-gray-400 to-gray-100">
                  <CardContent className="p-8">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-black">Široko korišćen</h3>
                    <p className="text-black">
                      Više od milion ljudi širom sveta danas koristi NLP u različitim područjima.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Prednosti */}
           {/* CTA */}
           <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold  mb-6">
                Spremni da naučite NLP?
              </h2>
              <p className="text-lg text-white mb-8">
                Kontaktirajte me za NLP koučing sesije
              </p>
              <Button asChild size="lg">
                <Link href="/kontakt">Kontaktirajte me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primene */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Područja primene
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {applications.map((application, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-br from-gray-400 to-gray-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-black">{application}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default NLPPage;
