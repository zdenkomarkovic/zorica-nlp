"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Heart, Target } from "lucide-react";
import Image from "next/image";
const services = [
  "Oporavak od tuge",
  "Da pronađete smisao u životu",
  "Individualno terapijsko savetovanje",
  "Partnersko savetovanje",
];

const LogotherapyPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero sekcija */}
      <section className=" relative h-[70dvh]">
        <Image
          src="/logoterapija.jpg"
          alt="Logoterapija"
          fill
          className="object-cover -z-10 [object-position:50%_35%]"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center h-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-primary mb-6 mt-32"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Logoterapija
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Terapija smislom - treća bečka psihoterapijska škola
            </motion.p>
          </div>
        </div>
      </section>

      {/* O logoterapiji */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none text-slate-600 space-y-4 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className=" first-letter:pl-6">
                Logoterapija je terapija smislom. Logoterapija je treća bečka
                psihoterapijska škola. Ona u psihoterapiju unosi nešto novo, a
                to je spoznaja da je čovek duhovno biće.
              </p>

              <p className=" first-letter:pl-6">
                Osnivač logoterapije je bečki psihijatar i doktor filozofije{" "}
                <span className="font-bold">
                  {" "}
                  Viktor E. Frankl (1905 – 1997){" "}
                </span>
                poznat kao čovek koji je preživeo strahote koncentracionog
                logora Terezijaštat, Aušvic, Dahau.
              </p>

              <p className=" first-letter:pl-6">
                Sam termin logoterapija, doslovno znači{" "}
                <span className="font-bold"> lečenje smislom </span> ili{" "}
                <span className="font-bold"> isceljivanje smislom </span>.
                Logoterapija odgovara na večno čovekovo pitanje:{" "}
                <span className="font-bold">
                  {" "}
                  u čemu je smisao mog života? U čemu je smisao trpljenja,
                  smisao stvaranja, smisao našeg postojanja?{" "}
                </span>
              </p>
            </motion.div>
            <div className="max-w-5xl mx-auto py-10">
              <motion.h2
                className="text-3xl font-bold text-center text-slate-800 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                U psihoterapijskom procesu klijenta usmeravamo ka smislu.
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-400 to-gray-100">
                    <CardContent className="p-6">
                      <BookOpen className="w-12 h-12 text-primary mb-4" />

                      <p className="text-black">
                        U životu pojedinca, smisao se konkretno otkriva u
                        idealima i vrednostima koje čovek živi i za koje živi.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-400 to-gray-100">
                    <CardContent className="p-6">
                      <Heart className="w-12 h-12 text-primary mb-4" />

                      <p className="text-black">
                        Spoznaja smisla podstiče čovekove sposobnosti u
                        rešavanju zahtevnih životnih situacija.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="prose prose-lg max-w-none text-slate-600 space-y-4 "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className=" first-letter:pl-6">
                  Za razliku od drugih psihoterapijskih pravaca, logoterapija se
                  razvila iz filozofije, iz pozitivističke egzistencijalne
                  škole.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principi */}

      {/* CTA */}
      <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Spremni da pronađete smisao?
              </h2>
              <p className="text-lg text-white mb-8">
                Kontaktirajte me za individualno savetovanje
              </p>
              <Button asChild size="lg">
                <Link href="/kontakt">Kontaktirajte me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Područja u kojima vam mogu pomoći
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-400 to-gray-100"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Target className="w-6 h-6 mr-3 text-primary" />
                      <p className=" text-black">{service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogotherapyPage;
