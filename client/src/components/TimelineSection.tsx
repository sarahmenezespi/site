/*
  TIMELINE: Vertical timeline of career milestones
  STYLE: Editorial, gold markers, alternating layout on desktop, single column on mobile
  BG: Dark with subtle tatami pattern
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award, Users, Heart } from "lucide-react";

const SILHOUETTE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/judo-silhouette-QvnsQyTwTKm6zxhndCkBmD.webp";

const timelineEvents = [
  {
    year: "1999",
    title: "O Início",
    description: "Aos 9 anos, Sarah descobre o judô em Teresina, Piauí. As primeiras aulas foram escondidas dos pais, que não aprovavam a prática.",
    icon: Heart,
    highlight: false,
  },
  {
    year: "2008",
    title: "Primeira Olimpíada",
    description: "Aos 18 anos, estreia nos Jogos Olímpicos de Pequim. No mesmo ano, conquista o título de campeã mundial júnior, repetindo o feito em 2009.",
    icon: Star,
    highlight: false,
  },
  {
    year: "2010",
    title: "Bronze Mundial",
    description: "Conquista a medalha de bronze no Campeonato Mundial de Judô em Tóquio, consolidando-se entre as melhores do mundo na categoria até 48 kg.",
    icon: Medal,
    highlight: false,
  },
  {
    year: "2011",
    title: "Ano de Conquistas",
    description: "Bronze no Campeonato Mundial de Paris e bronze nos Jogos Pan-Americanos de Guadalajara. Sarah se firma como favorita para Londres 2012.",
    icon: Medal,
    highlight: false,
  },
  {
    year: "2012",
    title: "Ouro Olímpico em Londres",
    description: "Em 28 de julho, faz história ao se tornar a primeira mulher brasileira campeã olímpica no judô, derrotando Alina Dumitru na final. Quebra jejum de 20 anos sem ouro no judô brasileiro.",
    icon: Trophy,
    highlight: true,
  },
  {
    year: "2013",
    title: "Bronze no Mundial do Rio",
    description: "Conquista mais uma medalha de bronze em Campeonato Mundial, desta vez em casa, no Rio de Janeiro. Tricampeã do Grand Slam de Moscou.",
    icon: Medal,
    highlight: false,
  },
  {
    year: "2015",
    title: "Ouro nos Jogos Mundiais Militares",
    description: "Em Mungyeong, Coreia do Sul, conquista ouro na categoria -52 kg e bronze na -48 kg nos Jogos Mundiais Militares.",
    icon: Award,
    highlight: false,
  },
  {
    year: "2016",
    title: "Olimpíada do Rio",
    description: "Compete nos Jogos Olímpicos do Rio de Janeiro. Sofre uma lesão no cotovelo durante a repescagem, encerrando sua participação.",
    icon: Star,
    highlight: false,
  },
  {
    year: "2021",
    title: "Nova Fase: Treinadora",
    description: "Após se aposentar como atleta, assume o cargo de treinadora da seleção brasileira feminina de judô. Nasce sua filha Nina.",
    icon: Users,
    highlight: false,
  },
  {
    year: "2024",
    title: "Ouro como Treinadora em Paris",
    description: "Comanda a equipe brasileira nos Jogos de Paris 2024, conquistando o ouro com Beatriz Souza e o bronze com Larissa Pimenta. Torna-se a primeira judoca brasileira campeã olímpica como atleta e como técnica.",
    icon: Trophy,
    highlight: true,
  },
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;
  const Icon = event.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden flex gap-4">
        {/* Line & Marker */}
        <div className="flex flex-col items-center shrink-0">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            event.highlight
              ? "border-gold bg-gold/20 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              : "border-border bg-card"
          }`}>
            <Icon size={16} className={event.highlight ? "text-gold" : "text-muted-foreground"} />
          </div>
          <div className="font-serif text-sm font-bold text-gold mt-1">{event.year}</div>
          {index < timelineEvents.length - 1 && (
            <div className="w-px flex-1 bg-gradient-to-b from-border to-border/20 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className={`${event.highlight ? "border-gold/50 bg-gold/5" : "border-border/50 bg-card/30"} p-4 border flex-1 mb-6 transition-all duration-300`}>
          <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase block mb-2">{event.title}</span>
          <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
        </div>
      </div>

      {/* Desktop Layout - Alternating */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8">
        {/* Left Content */}
        <div className={isLeft ? "text-right pr-8" : ""}>
          {isLeft && (
            <div className={`${event.highlight ? "border-gold/50 bg-gold/5" : "border-border/50 bg-card/30"} p-6 border transition-all duration-300 hover:border-gold/30`}>
              <div className="flex items-center gap-2 justify-end mb-3">
                <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">{event.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          )}
        </div>

        {/* Center Line & Marker */}
        <div className="flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            event.highlight
              ? "border-gold bg-gold/20 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              : "border-border bg-card"
          }`}>
            <Icon size={18} className={event.highlight ? "text-gold" : "text-muted-foreground"} />
          </div>
          <div className="font-serif text-lg font-bold text-gold mt-2">{event.year}</div>
          {index < timelineEvents.length - 1 && (
            <div className="w-px flex-1 bg-gradient-to-b from-border to-border/20 mt-3" />
          )}
        </div>

        {/* Right Content */}
        <div className={!isLeft ? "pl-8" : ""}>
          {!isLeft && (
            <div className={`${event.highlight ? "border-gold/50 bg-gold/5" : "border-border/50 bg-card/30"} p-6 border transition-all duration-300 hover:border-gold/30`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">{event.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trajetoria" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background silhouette */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 opacity-[0.03] hidden lg:block">
        <img src={SILHOUETTE} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="editorial-line-wide" style={{ transform: "scaleX(-1)" }} />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Trajetória
            </span>
            <div className="editorial-line-wide" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Uma jornada de
            <br />
            <span className="text-gold">superação e glória</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
