/*
  QUOTE: Full-width cinematic quote section
  BG: Judo silhouette image with heavy overlay
  STYLE: Large italic Playfair Display, gold accents
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SILHOUETTE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/judo-silhouette-QvnsQyTwTKm6zxhndCkBmD.webp";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={SILHOUETTE_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-serif text-7xl lg:text-9xl text-gold/30 leading-none select-none">
            &ldquo;
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl italic text-foreground leading-relaxed mb-8"
        >
          O judô me ensinou que a força verdadeira não está no corpo, 
          mas na mente e no coração. Cada queda no tatame me preparou 
          para levantar mais forte.
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="editorial-line mx-auto" />
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Sarah Menezes
          </span>
          <span className="text-muted-foreground text-xs tracking-wider">
            Campeã Olímpica &middot; Treinadora
          </span>
        </motion.div>
      </div>
    </section>
  );
}
