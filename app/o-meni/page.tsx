"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, Users, Target } from "lucide-react";

const AboutPage = () => {
  const personalInfo = {
    name: "Zorica Odavić",
    birthDate: "20.8.1972. godine u Lazarevcu",
    emails: ["odavic.zorica@gmail.com", "lekovitikoucing@gmail.com"],
    description: "Oduvek sam se interesovala kako emocije funkcionišu. Sertifikovani sam NLP kouč i logoterapeut. Sa ispravnim informacijama i ispravnim izborima čovek može da se oporavi od svakog velikog gubitka. Put oporavka nije lak. Ono što je najviše inspiriše je da učestvuje u transformaciji ljudskih života, pomažući im da osveste kako žive svoj život i kako da se vrate sebi."
  };

  const qualifications = [
    "NLP Practitioner",
    "NLP Master", 
    "NLP Koučing akademija",
    "Logoterapeut (Studije logoterapije)",
    "Medijator (licenca Ministarstva pravde)",
    "Član Asocijacije pravnika „AEPA",
    "Izrazita komunikativnost i orjentisanost klijentu"
  ];

  const services = [
    "Oporavak od tuge",
    "Da pronađete smisao u životu", 
    "Individualno terapijsko savetovanje",
    "Partnersko savetovanje"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero sekcija */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              O meni
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personalInfo.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Osnovni podaci */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Osnovni podaci
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-primary" />
                      Lični podaci
                    </h3>
                    <div className="space-y-3">
                      <p><strong>Ime i prezime:</strong> {personalInfo.name}</p>
                      <p><strong>Datum i mesto rođenja:</strong> {personalInfo.birthDate}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Mail className="w-6 h-6 mr-2 text-primary" />
                      Kontakt
                    </h3>
                    <div className="space-y-2">
                      {personalInfo.emails.map((email, index) => (
                        <p key={index} className="text-slate-600">{email}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Kvalifikacije */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Znanja i veštine
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {qualifications.map((qualification, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="p-4 text-center text-sm"
                >
                  <Award className="w-4 h-4 mr-2" />
                  {qualification}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usluge */}

    </div>
  );
};

export default AboutPage;
