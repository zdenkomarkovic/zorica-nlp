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
      <section className="py-16 bg-gradient-to-br from-gray-400 to-gray-100">
        <motion.div
          className="prose prose-lg container mx-auto px-4 md:px-10 text-black space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className=" first-letter:pl-6">
            Viktor Frankl bio je po mnogo čemu neverovatan čovek. Austrijski
            neurolog i psihijatar, poznat je i kao jedan od onih koji su
            preživeli Holokaust. Najpoznatiji je kao osnivač logoterapije, tj.
            terapije smislom, ali i kao naučnik koji je, onda kada ga je život
            bacio na kolena i zadao mu najteže udarce, iz nedaća izašao
            uzdignute glave i nepobeđen.
          </p>
          <p className=" first-letter:pl-6">
            Viktor Emil Frankl, jedan od najznačajnijih neurologa i psihijatara
            posleratnog perioda. Utemeljio je logoterapiju i egzistencijalnu
            analizu. Frankla smatraju osnivačem Treće bečke psihijatrijske
            škole, posle psihoanalize Sigmunda Frojda i individualne psihologije
            Alfreda Adlera.
          </p>
          <p className=" first-letter:pl-6 font-bold">
            Njegov život priča je o neverovatnoj volji pojedinca da preživi,
            istraje i na kraju - pobedi! Užasi Holokausta
          </p>
          <p className=" first-letter:pl-6">
            Još za vreme studija medicine, koje je završio 1930. godine u Beču,
            Frankl je bio u kontaktu sa Frojdom i Adlerom i bavio se
            psihijatrijom. Smatrao je da je pitanje smisla ključno za prevenciju
            suicida i tridesetih godina lečio je hiljade žena i mladih sklonih
            samoubistvu. ⁠⁠
          </p>
          <p className=" first-letter:pl-6">
            Zbog jevrejskog porekla mu je nakon aneksije Austrije 1938. godine
            bilo zabranjeno da drži privatnu praksu. Umesto toga premešten je na
            čelo Odeljenja za neurologiju bolnice Rotšild, jedine bolnice u
            kojoj su mogli biti lečeni Jevreji u to doba. Iako je dobio vizu za
            Ameriku, kako se ona odnosila samo na njega, odlučio je da ostane da
            živi sa roditeljima, odbivši da ih napusti.
          </p>
          <p className=" first-letter:pl-6">
            Franklu je bilo dozvoljeno da leči samo Jevreje, ali mu je pozicija
            lekara donekle pružala zaštitu od deportacije. Među Jevrejima je tih
            dana stopa samoubistava bila sve veća i Frankl je sve svoje napore
            usmerio ka tome da spasi što više ljudi tako što će im vratiti nadu
            i pomoći da, i u takvom okruženju, pronađu volju za životom.{" "}
          </p>
          <p className=" first-letter:pl-6">
            Godine 1941. Frankl je oženio Tili Groser, medicinsku sestru koju je
            upoznao preko posla. Pored još jednog para, oni su bili poslednji
            Jevreji u Beču koji su dobili dozvolu da stupe u brak. Ipak, njihova
            sreća nije bila dugog daha - u to vreme, trudne Jevrejke odmah su
            deportovane u logor, pa je par teška srca odlučio da Tili abortira.
            Frankl je svoju knjigu “Nečujan vapaj za smislom” posvetio svom
            nerođenom detetu.
          </p>
          <p className=" first-letter:pl-6">
            Porodica Frankl na kraju ipak nije uspela da izbegne sudbinu stotina
            hiljada Jevreja širom okupirane Evrope. Frankl i Tili deportovani su
            u koncentracioni logor Terezin. Do kraja rata, svi članovi Franklove
            porodice, osim sestre koja je emigrirala u Australiju, ubijeni su.
            Preživeo je samo on.
          </p>
          <p className=" first-letter:pl-6">
            Proveo je tri godine u ukupno četiri koncentraciona logora,
            uključujući i Aušvic. Kasnije je pričao kako ga je u životu
            održavala misao da mora da ponovo napiše knjigu “Doktor i duša” koju
            je poneo u rukopisu u logor, ali ju je izgubio. Kada mu je bilo
            najteže, zamišljao je sebe kako u toploj, dobro osvetljenoj sali
            drži predavanje studentima o svojim iskustvima u logoru, i to
            distanciranje od svakodnevnih užasa mu je pomoglo da preživi.
          </p>
          <p className=" first-letter:pl-6">
            Oslobođen je 1945. samo da bi otkrio da niko od njegovih najmilijih
            nije preživeo. Voljena Tili nastradala je u logoru Bergen-Belsen.{" "}
          </p>
          <p className=" first-letter:pl-6 font-bold ">
            Iako izmučen strahotama i tuhom, Frankl nije poklekao. Naprotiv!
            Više nego ikad pre smatrao je da je potreban svojim pacijentima i
            neumorno je počeo da radi na razvijanju svog pristupa psihološkom
            lečenju.{" "}
          </p>
          <p className=" first-letter:pl-6">
            Svoje kapitalno delo “Zašto se niste ubili: Traženje smisla
            življenja“ napisao je za samo devet dana 1945. godine. U njemu se
            ponovo suočio sa iskustvima iz logora smrti i stavio pitanje smisla
            i egzistencijalnu filozofiju u centar svoje psihoterapije.{" "}
          </p>
          <p className=" first-letter:pl-6">
            Ova Franklova knjiga je na srpski prevedena tek 1994. ali je za tu
            priliku Frankl napisao predgovor u kome poručuje:{" "}
          </p>
          <p className=" first-letter:pl-6 font-bold">
            {" "}
            Šansu da prežive imali su uglavnom oni koji su bili psihološki
            usmereni na budućnost, na neki zadatak koji treba da ispune u
            budućnosti, na smisao čije ostvarenje ih je u neku ruku očekivalo,
            ili na neku osobu koja ih je čekala s ljubavlju...
          </p>
          <p className=" first-letter:pl-6">
            {" "}
            I pitam se ne bi li sve to moglo da se proširi izvan pojedinačnog
            ljudskog života i primeni na produženje života čovečanstva u celini.
            Možda je istina da i čovečanstvo ima svoju šansu da preživi atomsko
            doba ako se ljudi, i svi narodi, okupe na zajedničkim zadacima, ako
            svi budu zahvaćeni ne samo onim što logoterapija naziva voljom za
            smislom već i zajedničkom voljom za jednim zajedničkim smislom?{" "}
          </p>
          <p className=" first-letter:pl-6">
            Zastupao je gledište da je, pre svega, pomirenje pravi put ka izlazu
            iz katastrofa koje je doneo svetski rat i Holokaust, pritom
            odbacujući koncept kolektivne krivice, za koju smatra da ide ruku
            pod ruku sa potiskivanjem istorije.⁠
          </p>
          <p className=" first-letter:pl-6">
            Godine 1955. postao je profesor u Beču, a 1970. osnovao je prvi
            Institut za logoterapiju u tom gradu. Ponovo se oženio i dobio ćerku
            Gabrijelu koja je danas ugledni dečiji psiholog.
          </p>
          <p className=" first-letter:pl-6">
            Viktor Frankl je umro 2. septembra 1997. u 92. godini života. Iza
            njega je ostala mnogobrojna porodica, kao i 39 knjiga prevedenih na
            40 svetskih jezika i 29 počasnih doktorata širom sveta.{" "}
          </p>
          <p className=" first-letter:pl-6">
            U njegovom stanu u Beču je 2015. godine osnovan muzej „Viktor
            Frankl“. ⁠
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default LogotherapyPage;
