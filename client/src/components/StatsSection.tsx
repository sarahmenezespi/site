/*
  STATS: Full-width section with animated counters
  BG: Gold texture image with dark overlay
  STYLE: Large numbers, editorial labels, cinematic feel
*/

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const GOLD_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/gold-texture-UWyAYqgR59jvedZZV8fQs9.webp";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(eased * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gold">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { value: 1, suffix: "", label: "Ouro Olímpico", sublabel: "Londres 2012" },
  { value: 3, suffix: "", label: "Medalhas Mundiais", sublabel: "2010, 2011, 2013" },
  { value: 30, suffix: "+", label: "Medalhas Internacionais", sublabel: "Copas do Mundo" },
  { value: 3, suffix: "", label: "Olimpíadas", sublabel: "2008, 2012, 2016" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={GOLD_TEXTURE}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
            Números de uma lenda
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center relative"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-sm lg:text-base text-foreground font-medium mt-3 tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.sublabel}
              </div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
