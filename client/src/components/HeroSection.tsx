/*
  HERO: Full-screen cinematic opening
  BG: Generated arena image with dark overlay
  STYLE: Large editorial typography, gold accents, parallax scroll
*/

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/hero-bg-PvA96ErTPpqqKgMsu8C8D3.webp";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen overflow-hidden grain-overlay"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={HERO_BG}
          alt="Arena de judô sob holofotes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="editorial-line" />
            <span className="text-gold text-xs lg:text-sm font-medium tracking-[0.3em] uppercase">
              Campeã Olímpica de Judô
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
          >
            <span className="text-foreground">Sarah</span>
            <br />
            <span className="text-gold">Menezes</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-base lg:text-lg max-w-xl font-light leading-relaxed mb-8"
          >
            A primeira mulher brasileira a conquistar o ouro olímpico no judô.
            De Teresina para o mundo — uma história de coragem, disciplina e superação.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-8 lg:gap-12"
          >
            {[
              { value: "2012", label: "Ouro Olímpico" },
              { value: "30+", label: "Medalhas Mundiais" },
              { value: "6º", label: "Dan de Judô" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-gold/60" size={28} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side Year Marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40" />
        <span className="text-gold/60 text-xs tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
          LONDRES 2012
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}
