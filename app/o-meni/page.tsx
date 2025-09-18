"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import Image from "@/node_modules/next/image";
import VideoCard from "@/components/VideoCard";

const AboutPage = () => {
  const qualifications = [
    "NLP Practitioner",
    "NLP Master",
    "NLP Koučing akademija",
    "Logoterapeut (Studije logoterapije)",
    "Medijator (licenca Ministarstva pravde)",
    "Član Asocijacije pravnika „AEPA",
    "Izrazita komunikativnost i orjentisanost klijentu",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekcija */}
      <section className="">
        <div className="container mx-auto px-4 grid md:grid-cols-2 h-[70dvh]">
          <div className=" text-center px-8 flex flex-col justify-end pb-10 ">
            <motion.h1
              className="text-4xl md:text-6xl  font-bold text-primary mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Zorica Odavić
            </motion.h1>
            <motion.p
              className="text-xl "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Oduvek sam se interesovala kako emocije funkcionišu. Upravljanje
              emocijama je veština koju izučavam od kada znam za sebe. Zdravlje
              nije samo telesno. Ono je skup tela, uma i emocija. Upravljanje
              zdravljem, fizičkim, psihičkim i emocionalnim, najvažnija je
              sposobnost koju svaki čovek može da razvije.
            </motion.p>
          </div>
          <div className=" h-[70dvh] aspect-square ">
            <Image
              src={"/zorica.jpg"}
              width={500}
              height={500}
              alt="logoterapija"
              className="w-full h-full object-cover aspect-square rounded-full p-6 mt-10 "
            />
          </div>
        </div>
      </section>

      {/* Osnovni podaci */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto md:space-y-6">
            <motion.p
              className="text-xl text-slate-600"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Moja potreba da pomognem drugima na njihovom putu promene došla je
              spontano i bez ikakvog plana. Tragajući za sopstvenim odgovorima
              koji bi mom životu dali smisao shvatila sam da je moja misija da
              sva stečena znanja koje sam godinama prikupljala prenesem i
              približim ljudima. Od nezadovoljstva i razočarenja i
              prilagođavanja tuđim potrebama prešla sam dug put. Zahvaljujući
              tome danas imam priliku da učim i podstičem mnoge da zakorače na
              svoj put promene i otkriju unutar sebe sve one davno uspavane
              resurse i potencijale koji su im potrebni kako bi živeli srećniji
              i ispunjeniji život.
            </motion.p>
            <motion.p
              className="text-xl text-slate-600 "
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Sertifikovani sam NLP kouč i logoterapeut. Sa ispravnim
              informacijama i ispravnim izborima čovek može da se oporavi od
              svakog velikog gubitka. Put oporavka nije lak. Ono što je najviše
              inspiriše je da učestvuje u transformaciji ljudskih života,
              pomažući im da osveste kako žive svoj život i kako da se vrate
              sebi.
            </motion.p>
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
            <div className="grid md:grid-cols-2 gap-6 md:gap-20">
              <motion.div
                className="grid  gap-4"
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
              <VideoCard video={"/scenario-iii-rfg-metod-1_wTrnzlsc.mp4"} />
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
    </div>
  );
};

export default AboutPage;
