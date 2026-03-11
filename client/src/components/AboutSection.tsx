/*
  ABOUT: Split layout — image left, text right
  STYLE: Editorial magazine spread, gold accents, Playfair headings
  IMAGE: Sarah with gold medal (hero-medal)
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MEDAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/hero-medal_35b21341.jpg";
const GOLD_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/gold-texture-UWyAYqgR59jvedZZV8fQs9.webp";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-light/30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={MEDAL_IMG}
                alt="Sarah Menezes com a medalha de ouro olímpica"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 hidden lg:block" />

            {/* Year overlay */}
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <span className="font-serif text-6xl lg:text-8xl font-bold text-gold/20">
                2012
              </span>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="editorial-line" />
              <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
                A Atleta
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              De Teresina
              <br />
              <span className="text-gold">para o mundo</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Sarah Gabrielle Cabral de Menezes nasceu em 26 de março de 1990, em Teresina, Piauí. 
                Descobriu o judô aos nove anos de idade, e suas primeiras aulas foram escondidas dos pais, 
                que não aprovavam a prática do esporte.
              </p>
              <p>
                Aquela menina determinada do Piauí transformou a resistência em combustível. Aos 18 anos, 
                já representava o Brasil nos Jogos Olímpicos de Pequim 2008. Bicampeã mundial júnior em 
                2008 e 2009, Sarah rapidamente se consolidou como uma das maiores judocas do mundo na 
                categoria até 48 kg.
              </p>
              <p>
                Em 28 de julho de 2012, nos Jogos Olímpicos de Londres, Sarah fez história ao se tornar 
                a <span className="text-gold font-medium">primeira mulher brasileira a conquistar o ouro olímpico no judô</span>, 
                derrotando na final a romena Alina Dumitru, então campeã olímpica. Quebrou um jejum de 
                20 anos sem ouro olímpico no judô brasileiro.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="p-4 border border-border/50 bg-card/50">
                <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Nascimento</div>
                <div className="text-sm text-foreground">26 de março de 1990</div>
                <div className="text-xs text-muted-foreground mt-1">Teresina, Piauí</div>
              </div>
              <div className="p-4 border border-border/50 bg-card/50">
                <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Categoria</div>
                <div className="text-sm text-foreground">Até 48 kg (Ligeiro)</div>
                <div className="text-xs text-muted-foreground mt-1">Altura: 1,52m</div>
              </div>
              <div className="p-4 border border-border/50 bg-card/50">
                <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Graduação</div>
                <div className="text-sm text-foreground">6º Dan (Rokudan)</div>
                <div className="text-xs text-muted-foreground mt-1">Faixa preta</div>
              </div>
              <div className="p-4 border border-border/50 bg-card/50">
                <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Militar</div>
                <div className="text-sm text-foreground">3º Sargento</div>
                <div className="text-xs text-muted-foreground mt-1">Marinha do Brasil</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
