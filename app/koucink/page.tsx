"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Target, CheckCircle } from "lucide-react";
import CTA from "@/components/CTA";
import Image from "next/image";

const CoachingPage = () => {
  const keyElements = [
    {
      title: "Partnerski odnos",
      description:
        " Kouč i klijent rade zajedno, pri čemu kouč nije autoritet, već vodič i podrška. ",
    },
    {
      title: "Fokus na cilj",
      description:
        "Koučing je usmeren na ostvarivanje specifičnih ciljeva i postizanje željenih rezultata, za razliku od opštih ciljeva ili razvoja. ",
    },
    {
      title: "Osnaživanje i introspekcija",
      description:
        "Klijent se podstiče na dublju introspekciju, kako bi sam pronašao autentična rešenja i strategije za napredak. ",
    },
    {
      title: "Veličanje klijentove autonomije",
      description:
        "Klijent se podstiče na dublju introspekciju, kako bi sam pronašao autentična rešenja i strategije za napredak. ",
    },
    {
      title: "Prevazilaženje blokada",
      description:
        "Procesom koučinga, klijent identifikuje i prevazilazi lične prepreke, ograničavajuća uverenja i sabotirajuće faktore. ",
    },
    {
      title: "Fokus na budućnost",
      description:
        "Procesom koučinga, klijent identifikuje i prevazilazi lične prepreke, ograničavajuća uverenja i sabotirajuće faktore. ",
    },
  ];

  const faq = [
    {
      question: "Kako funkcioniše coaching?",
      answer:
        "Na uvodnom razgovoru definišemo sadašnje i željeno stanje. Potreban broj sesija, koučing prostor, online ili uživo. Moj način rada i tehnike.",
    },
    {
      question: "Da li mi coaching može pomoći?",
      answer: "Od vas zavisi rezultat. Ako uzmete aktivno učešće sigurno može.",
    },
    {
      question: "Koliko traje jedna sesija?",
      answer: "Individualna sesija traje 45 minuta a grupna 90 minuta.",
    },
    {
      question: "Šta ako nisam zadovoljan?",
      answer:
        "Ne garantujem vam zadovoljstvo već rast i razvoj. Oni mogu biti i bolni.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero sekcija */}
      <section className=" relative h-[70dvh]">
        <Image
          src="/couching.jpg"
          alt="Koučing"
          fill
          className="w-full h-full object-cover  [object-position:50%_20%] -z-10"
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center z-10 h-full">
            <motion.h1
              className="text-4xl md:text-6xl font-bold  mb-6 mt-32 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Koučing
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partnerski odnos za postizanje ciljeva
            </motion.p>
          </div>
        </div>
      </section>

      {/* O koučingu */}
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
              <p className="mb-6 first-letter:pl-6 ">
                Koučing je partnerski odnos između kouča (pomoćnika) i klijenta
                (osobe koja se razvija) u kojem kouč podržava klijenta u
                postizanju ličnih ili profesionalnih ciljeva kroz postavljanje
                pitanja, aktivno slušanje i vođenje ka pronalasku sopstvenih
                rešenja.
              </p>

              <p className="mb-6 first-letter:pl-6 ">
                Cilj koučinga je da klijent osnaži svoj potencijal, razvije
                veštine i prevaziđe prepreke, ne dajući gotove savete već
                podstičući klijenta da sam dođe do najadekvatnijih akcija i
                rezultata.
              </p>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto mt-10">
            <motion.h2
              className="text-3xl font-bold text-center text-primary mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ključni elementi koučinga
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {keyElements.map((element, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-400 to-gray-100"
                >
                  <CardContent className="p-6 ">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                      <p className=" font-medium">{element.title}</p>
                    </div>
                    <p className="text-lg text-black">{element.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTA phoneNumber="+381644557080" email="lekovitikoucing@gmail.com" />

      {/* FAQ */}
      <section className="py-10 bg-white ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Najčešća pitanja
            </motion.h2>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-400 to-gray-100">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-black">
                        {item.question}
                      </h3>
                      <p className="text-black text-lg text-center">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Cene
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <Users className="w-10 h-10 text-primary mx-auto mb-4" />

                    <p className="text-slate-600 ">Grupni koučing: 25€ </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="  text-slate-600">
                      Individualni koučing: 50-100 €
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-slate-600 mb-6">
                Sesije dostupne uživo po dogovoru ili online
              </p>
              <Button asChild size="lg">
                <Link href="/kontakt">Zakazite sesiju</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingPage;
