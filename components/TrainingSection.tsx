"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Target, Clock, Star } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Training {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  requirements?: string;
  icon: LucideIcon;
  color: string;
  additionalInfo?: {
    description: string[];
    stressorDefinition?: string;
  };
}

interface TrainingSectionProps {
  className?: string;
}

const trainings: Training[] = [
  {
    id: 1,
    title: "NLP PRACTITIONER",
    description: "9 modula - Osnovni NLP trening",
    benefits: [
      "Jasno i moćno komuniciraš",
      "Upravljaš mislima i emocijama",
      "Postavljaš i ostvaruješ ciljeve",
      "Povećaš svoj poslovni uticaj",
      "Poboljšaš svoje zdravlje",
      "Upoznaš kvalitetne ljude",
      "Dobiješ internacionalni IANLP sertifikat",
    ],
    icon: Award,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "NLP MASTER",
    description: "Napredni NLP trening",
    benefits: [
      "Sve koji žele da napreduju u poslovnom, privatnom i zdravstvenom kontekstu",
      "Vlasnike biznisa",
      "One koji žele da se bave koučingom",
      "Sve one koji imaju javne nastupe i prezentacije",
      "Ljude koji se bave obukama u firmama i organizacijama",
      "Rukovodioce, posebno rukovodioce HR (ljudskih resursa)",
      "One koji se bave izborom kadrova",
    ],
    requirements: "Uslov za pohađanje NLP mastera je završen NLP Praktičarski.",
    icon: Star,
    color: "",
  },
  {
    id: 3,
    title: "ŽIVOTNA RAVNOTEŽA",
    description: "Posao & Porodica & Zdravlje",
    benefits: [
      "Korisna radionica za sve koji žele da unaprede posao",
      "Poboljšanje porodičnih odnosa",
      "Očuvanje i unapređenje zdravlja",
      "Jedinstven prvi modul NLP PRAKTIČARSKE edukacije",
    ],
    icon: Target,
    color: "from-green-500 to-green-600",
    additionalInfo: {
      description: [
        "Radionica ŽIVOTNA RAVNOTEŽA – Posao & Porodica & Zdravlje je posebna celina ali je istovremeno i jedinstven prvi modul NLP PRAKTIČARSKE edukacije.",
        "",
      ],
    },
  },
  {
    id: 4,
    title: "UPRAVLJANJE STRESOM",
    description: "Jednodnevna radionica",
    benefits: [
      "Zašto je stres postao vaša svakodnevica?",
      "Koja je razlika između stresora i stresa?",
      "Šta stres čini vašem telu, umu i emocijama – vašem ukupnom zdravlju?",
      "Koliko vam pomaže u poslu i međuljudskim odnosima a koliko vam odmaže?",
      "Kako da prepoznate u kom ste polju stresa i iskoristite to znanje?",
      "Kako da, kada već nastane, upravljate njime umesto da on upravlja vama?",
    ],
    icon: Clock,
    color: "from-red-500 to-red-600",
    additionalInfo: {
      description: [
        "Stres je prirodna fizička i psihička reakcija organizma na stresore, odnosno štetne faktore iz okoline koji zahtevaju prilagođavanje, a koji može biti koristan u kratkim, akutnim situacijama, ali dugotrajan i nekontrolisan stres dovodi do ozbiljnih zdravstvenih problema, oslabljenog imuniteta i narušenog psihičkog stanja. Reakcija tela na stres uključuje otpuštanje hormona koji pripremaju organizam za borbu ili beg, ali ako stresori postanu hronični, ovaj odgovor može postati štetan.",
        "Stresor je svaki događaj, situacija ili zahtev koji remeti ravnotežu osobe i zahteva prilagođavanje, a može biti veliki životni događaj (kao što je gubitak voljene osobe) ili nešto svakodnevno (kao što je saobraćajna gužva).",
      ],
    },
  },
];

const TrainingSection = () => {
  return (
    <section className={`py-16 bg-gradient-to-br from-gray-400 to-gray-100`}>
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Treninzi
            </h2>
            <p className="text-lg text-black w-2xl mx-auto">
              Stručni NLP treninzi i radionice za lični i profesionalni razvoj
            </p>
          </motion.div>

          {/* Glavni treninzi */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {trainings.slice(0, 3).map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div
                        className={`bg-gradient-to-br from-gray-400 to-gray-100  p-3 rounded-full mr-4`}
                      >
                        <training.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          {training.title}
                        </h3>
                        <p className="text-slate-600 font-medium">
                          {training.description}
                        </p>
                      </div>
                    </div>

                    {/* Dodatne informacije za UPRAVLJANJE STRESOM */}
                    {training.additionalInfo && (
                      <div className="mb-6 space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          {training.additionalInfo?.description.map(
                            (text, i) => {
                              return (
                                <p
                                  key={i}
                                  className="text-slate-700 text-sm leading-relaxed"
                                >
                                  {text}
                                </p>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        {training.id === 1 ? "Zašto NLP Praktičarski?" : ""}
                      </h4>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        {training.id === 4
                          ? "Na jednodnevnoj radionici Upravljanje stresom dobićete odgovore na mnoga pitanja:"
                          : training.id === 2
                          ? "Koristan je za:"
                          : training.id === 1
                          ? "Pomaže ti da:"
                          : "Korisna radionica za sve koji žele da unaprede posao, porodične odnose i zdravlje."}
                      </h4>
                      {training.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {training.requirements && (
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-amber-800 text-sm font-medium">
                          {training.requirements}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Glavni treninzi */}
          <div className="grid  gap-8">
            {trainings.slice(3, 6).map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div
                        className={`bg-gradient-to-br from-gray-400 to-gray-100  p-3 rounded-full mr-4`}
                      >
                        <training.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          {training.title}
                        </h3>
                        <p className="text-slate-600 font-medium">
                          {training.description}
                        </p>
                      </div>
                    </div>

                    {/* Dodatne informacije za UPRAVLJANJE STRESOM */}
                    {training.additionalInfo && (
                      <div className="mb-6 space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          {training.additionalInfo?.description.map(
                            (text, i) => {
                              return (
                                <p
                                  key={i}
                                  className="text-slate-700 text-sm leading-relaxed"
                                >
                                  {text}
                                </p>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        {training.id === 1 ? "Zašto NLP Praktičarski?" : ""}
                      </h4>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        {training.id === 4
                          ? "Na jednodnevnoj radionici Upravljanje stresom dobićete odgovore na mnoga pitanja:"
                          : training.id === 2
                          ? "Koristan je za:"
                          : training.id === 1
                          ? "Pomaže ti da:"
                          : "Korisna radionica za sve koji žele da unaprede posao, porodične odnose i zdravlje."}
                      </h4>
                      {training.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {training.requirements && (
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-amber-800 text-sm font-medium">
                          {training.requirements}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
