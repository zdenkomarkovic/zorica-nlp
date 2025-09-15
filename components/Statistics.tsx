"use client";

import { motion } from "framer-motion";
import { Users, Heart, Award, Clock } from "lucide-react";

interface Statistic {
  id: number;
  number: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface StatisticsProps {
  statistics?: Statistic[];
  className?: string;
}

const defaultStatistics: Statistic[] = [
  {
    id: 1,
    number: "500+",
    label: "Zadovoljnih klijenata",
    icon: Users,
    description: "Preko 500 ljudi je kroz naše usluge pronašlo put ka boljem životu"
  },
  {
    id: 2,
    number: "15+",
    label: "Godina iskustva",
    icon: Award,
    description: "Dugogodišnje iskustvo u pomaganju ljudima da prevaziđu životne izazove"
  },
  {
    id: 3,
    number: "95%",
    label: "Stopa uspeha",
    icon: Heart,
    description: "Visoka stopa uspeha u oporavku od tuge i postizanju ciljeva"
  },
  {
    id: 4,
    number: "24/7",
    label: "Podrška",
    icon: Clock,
    description: "Dostupnost i podrška kada vam je najpotrebnija"
  }
];

const Statistics = ({ statistics = defaultStatistics, className = "" }: StatisticsProps) => {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primarymb-4">
              Naši rezultati govore
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Brojke koje potvrđuju kvalitet i efikasnost naših usluga
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="text-center "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 h-full bg-gradient-to-br from-gray-400 to-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-black mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {stat.label}
                  </h3>
                  
                  <p className="text-black text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default Statistics;
