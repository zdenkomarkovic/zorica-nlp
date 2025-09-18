"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "@/node_modules/next/image";

const GriefSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-200 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tuga: proces koji se zanemaruje i pogrešno shvata
          </motion.h2>

          <motion.div
            className="prose prose-lg max-w-none text-slate-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-6 first-letter:pl-6">
              Tuga je normalna i prirodna reakcija na gubitak svake vrste. Prema
              tome i osećanja koja imate takođe su normalna i prirodna za vas.
              Nevolja je u tome što su sve nas tokom procesa socijalizacije
              naučili da verujemo kako su ta osećanja nenormalna i neprirodna.
            </p>

            <p className="mb-6 first-letter:pl-6">
              Iako je tuga normalna i prirodna, i očito najsnažnija od svih
              emocija, ujedno je i doživljaj koji često najviše zanemaruju i
              pogrešno shvataju i ožalošćeni i oni oko njih.
            </p>

            <p className="mb-6 first-letter:pl-6">
              Tuga predstavlja sučeljena osećanja uzrokovana krajem ili promenom
              u poznatom obrascu ponašanja.
            </p>
            <p className="py-10 text-center text-2xl font-bold text-primary">
              Šta podrazumevamo pod sučeljenim osećanjima?
            </p>

            <p className="mb-6 first-letter:pl-6">
              Kad nekog koga volite umre nakon duge patnje zbog bolesti, moguće
              je da ćete osetiti olakšanje što je patnjama vašeg voljenog došao
              kraj. To je pozitivno osećanje iako je povezano sa smrću.
              Istovremeno možete shvatiti kako više ne možete da vidite niti da
              dodirnete tu osobu. To za vas može da bude veoma bolno. Ta
              sučeljena osećanja, olakšanje i duševna bol, potpuno su normalna u
              reakciji na smrt.
            </p>

            <p className="mb-6 first-letter:pl-6">
              Šta je sa razvodom? Ima li i u njemu sučeljenih osećanja? Ima.
              Možete se osetiti istinski slobodno sad kada su bitke završene. To
              je pozitivno osećanje. Istovremeno se možete bojati da nikad
              „nećete naći nekog tako lepog ili tako dobrog hranitelja
              porodice“. Ta sučeljena osećanja, sloboda i strah, takođe su
              prirodne reakcije na gubitak.
            </p>
            <p className="py-6 md:py-10 text-center text-2xl font-bold text-primary">
              Koji još gubici mogu da uzrokuju tugu:
            </p>
            <div className="mb-6 grid md:grid-cols-2 items-center gap-6 md:gap-20 mx-auto justify-center">
              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="list-disc list-inside font-bold space-y-3 pl-20"
              >
                <li className="">Smrt kućnog ljubimca</li>
                <li className="">Preseljenje</li>
                <li className="">Polazak u školu</li>
                <li className="">Ulazak u brak</li>
                <li className="">Odlaganje diplomiranja</li>
                <li className="">Bolest</li>
                <li className="">Penzionisanje</li>
                <li className="">Finansijske promene</li>
                <li className="">Pravni problemi</li>
                <li className="">Prazno gnezdo</li>
              </motion.ul>
              <div className="">
                <Image
                  src={"/2149071897 (1).jpg"}
                  width={500}
                  height={500}
                  alt="logoterapija"
                  className="w-full object-cover rounded-2xl aspect-[5/6]"
                />
              </div>
            </div>
            <p className="mb-6 first-letter:pl-6">
              {" "}
              Često se smatra da ovi uobičajeni životni događaji nisu povod za
              žaljenje. Žalimo za gubitkom svih odnosa koje smatramo bitnim a
              oni su stoga i emotivni.
            </p>
            <p className="mb-6 first-letter:pl-6">
              Tuga je normalna i prirodana, ali nismo dobro pripremljeni da se
              nosimo sa njom. Tuga ima veze sa srcem, ne sa glavom.
            </p>
            <p className="mb-6 first-letter:pl-6">
              Religijske i duhovne vođe vekovima ukazuju na to da na gubitak
              treba da gledamo kao na priliku za lični duhovni razvoj. Pa ipak
              se u savremenom životu prolaženje kroz snažnu emotivnu patnju
              shvata toliko pogrešno da većina nas zna vrlo malo o tome kako se
              reaguje na gubitak.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/nlp">Saznajte o NLP-u</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GriefSection;
