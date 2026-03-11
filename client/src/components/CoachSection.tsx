/*
  COACH: Section about Sarah's coaching career
  LAYOUT: Reverse split — text left, image right
  BG: Brazil flag abstract as subtle background
  STYLE: Editorial, green accent for coaching era
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Users } from "lucide-react";

const COACH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/coach-portrait_1e6a7713.jpg";
const BRAZIL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/brazil-flag-abstract-8596jLWQg5SWTFEnjYR46G.webp";
const COACH_ACTION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/coach-action_2e02a312.jpg";

export default function CoachSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="treinadora" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={BRAZIL_BG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="editorial-line" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
                A Treinadora
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Do tatame para
              <br />
              <span className="text-gold">a beira do tatame</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Após uma carreira brilhante como atleta, Sarah Menezes encontrou uma nova forma de 
                contribuir para o judô brasileiro. Em 2021, assumiu o cargo de treinadora da seleção 
                brasileira feminina, trazendo toda sua experiência de campeã olímpica para a formação 
                de novas gerações.
              </p>
              <p>
                Nos Jogos Olímpicos de Paris 2024, em sua primeira participação como treinadora, 
                Sarah conduziu a equipe brasileira a resultados históricos: a medalha de ouro de 
                <span className="text-gold font-medium"> Beatriz Souza</span> e o bronze de 
                <span className="text-gold font-medium"> Larissa Pimenta</span>.
              </p>
              <p>
                Com isso, tornou-se a <span className="text-gold font-medium">primeira judoca brasileira 
                campeã olímpica tanto como atleta quanto como técnica</span> — um feito único na história 
                do judô nacional.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="mt-10 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4 p-4 border border-gold/30 bg-gold/5"
              >
                <Trophy className="text-gold mt-0.5 shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium text-foreground">Ouro — Beatriz Souza</div>
                  <div className="text-xs text-muted-foreground mt-1">Paris 2024 — Categoria +78 kg</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4 p-4 border border-border/50 bg-card/30"
              >
                <Medal className="text-gold/70 mt-0.5 shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium text-foreground">Bronze — Larissa Pimenta</div>
                  <div className="text-xs text-muted-foreground mt-1">Paris 2024 — Categoria -52 kg</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start gap-4 p-4 border border-border/50 bg-card/30"
              >
                <Users className="text-gold/70 mt-0.5 shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium text-foreground">Recorde Histórico</div>
                  <div className="text-xs text-muted-foreground mt-1">Primeira judoca brasileira campeã olímpica como atleta e técnica</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={COACH_IMG}
                  alt="Sarah Menezes como treinadora da seleção brasileira"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 lg:w-48 lg:h-48 border-4 border-background overflow-hidden shadow-2xl hidden sm:block">
                <img
                  src={COACH_ACTION}
                  alt="Sarah Menezes orientando atletas"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border border-gold/30 hidden lg:block" />
            </div>

            {/* Year marker */}
            <div className="absolute top-6 right-6">
              <span className="font-serif text-6xl font-bold text-gold/15">
                2024
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
