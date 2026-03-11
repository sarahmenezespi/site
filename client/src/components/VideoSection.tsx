/*
  VIDEO SECTION: Cinematic embed of the London 2012 Olympic Final
  DESIGN: "Ouro Vivo" — Editorial Esportivo Cinematográfico
  LAYOUT: Full-width cinematic frame with editorial text context
  VIDEO: YouTube embed — Sarah Menezes vs Alina Dumitru final
*/

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Trophy } from "lucide-react";

const THUMBNAIL_FALLBACK = "https://img.youtube.com/vi/Y9UJWs1uXZE/maxresdefault.jpg";
const VIDEO_ID = "Y9UJWs1uXZE";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />

      {/* Gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="editorial-line-wide" style={{ transform: "scaleX(-1)" }} />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              O Momento Decisivo
            </span>
            <div className="editorial-line-wide" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            A final que mudou
            <br />
            <span className="text-gold">a história do judô brasileiro</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            28 de julho de 2012 — ExCeL London. Sarah Menezes enfrenta a romena Alina Dumitru,
            então campeã olímpica, na final da categoria até 48 kg. O resultado: o primeiro ouro
            olímpico feminino do judô brasileiro.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-3 border border-gold/10 hidden lg:block" />
          <div className="absolute -inset-1.5 border border-gold/5 hidden lg:block" />

          {/* Video wrapper with aspect ratio */}
          <div className="relative aspect-video bg-charcoal overflow-hidden group">
            {!isPlaying ? (
              <>
                {/* Thumbnail with play button overlay */}
                <img
                  src={THUMBNAIL_FALLBACK}
                  alt="Final olímpica de judô — Sarah Menezes vs Alina Dumitru, Londres 2012"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-background/40 transition-all duration-500 group-hover:bg-background/30" />

                {/* Gold vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />

                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
                  aria-label="Reproduzir vídeo da final olímpica"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" style={{ animationDuration: "2s" }} />
                    {/* Button */}
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_60px_rgba(255,215,0,0.4)]">
                      <Play size={32} className="text-charcoal ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                  <span className="text-sm text-foreground/80 tracking-wider uppercase font-medium">
                    Assistir à final
                  </span>
                </button>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-end justify-between z-10">
                  <div>
                    <div className="text-xs text-gold tracking-[0.2em] uppercase mb-1">
                      Jogos Olímpicos de Londres
                    </div>
                    <div className="text-sm text-foreground/80">
                      Judô Feminino -48 kg &middot; Final
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-muted-foreground">
                      28 de julho de 2012
                    </div>
                    <div className="text-xs text-gold/70 mt-0.5">
                      ExCeL London Arena
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* YouTube iframe */
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title="Sarah Menezes conquista o ouro olímpico — Londres 2012"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 hidden lg:block">
            <div className="absolute top-0 left-0 w-full h-px bg-gold/50" />
            <div className="absolute top-0 left-0 w-px h-full bg-gold/50" />
          </div>
          <div className="absolute top-0 right-0 w-6 h-6 hidden lg:block">
            <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
            <div className="absolute top-0 right-0 w-px h-full bg-gold/50" />
          </div>
          <div className="absolute bottom-0 left-0 w-6 h-6 hidden lg:block">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gold/50" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-gold/50" />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 hidden lg:block">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gold/50" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-gold/50" />
          </div>
        </motion.div>

        {/* Context cards below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mt-8 lg:mt-10"
        >
          <div className="p-5 border border-border/40 bg-card/30 flex items-start gap-3">
            <Trophy className="text-gold shrink-0 mt-0.5" size={18} />
            <div>
              <div className="text-sm font-medium text-foreground">Resultado da Final</div>
              <div className="text-xs text-muted-foreground mt-1">
                Sarah Menezes (BRA) derrotou Alina Dumitru (ROU) por waza-ari
              </div>
            </div>
          </div>
          <div className="p-5 border border-border/40 bg-card/30">
            <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Significado Histórico</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Primeira mulher brasileira campeã olímpica no judô. Quebrou jejum de 20 anos sem ouro no judô brasileiro.
            </div>
          </div>
          <div className="p-5 border border-border/40 bg-card/30">
            <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">A Adversária</div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              Alina Dumitru, da Romênia, era a campeã olímpica de Pequim 2008 e uma das favoritas ao ouro em Londres.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
