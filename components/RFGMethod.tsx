"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Target } from "lucide-react";

const RFGMethod = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Oporavak od izuzetno mučnih osećanja
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
                    <Card className="h-full bg-gradient-to-br from-gray-400 to-gray-200">   
                <CardContent className="p-8">
                  
                  <h3 className=" text-black font-semibold mb-4 flex items-center gap-6 justify-center"> <Heart className="w-10 h-10 text-primary " />Osnovni princip</h3>
                  <p className="text-black">
                    Da pomognem što većem broju ljudi, da se za što kraće vreme oporave od tuge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-400 to-gray-200 ">
                <CardContent className="p-8">
                  <h3 className=" text-black font-semibold mb-4 flex items-center gap-6 justify-center"> <Target className="w-10 h-10 text-primary" />Naš cilj</h3>
                  <p className="text-black">
                    Sa ispravnim informacijama i ispravnim izborima čovek može da se oporavi od svakog velikog gubitka.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-600 mb-6">
              Put oporavka nije lak, ali je moguć.
            </p>
            <Button asChild size="lg">
              <Link href="/logoterapija">Saznajte o logoterapiji</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RFGMethod;
