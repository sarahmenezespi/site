/*
  GALLERY: Masonry-style image grid
  STYLE: Editorial, hover reveals captions, gold border accents
  IMAGES: Mix of generated and search images
*/

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/victory-celebration_f5d53ecf.jpg",
    alt: "Sarah Menezes celebrando a vitória olímpica",
    caption: "O momento da glória — Londres 2012",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/fight-action_1f67a69a.jpg",
    alt: "Sarah Menezes em combate no tatame",
    caption: "Técnica e determinação no tatame",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/gold-medal-closeup_21d0f4dc.jpg",
    alt: "Sarah Menezes com medalha de ouro",
    caption: "A medalha que mudou a história",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/judo-action_ca12c580.jpg",
    alt: "Sarah Menezes em ação no judô",
    caption: "Força e técnica — a arte do judô",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/tatami-pattern-i2dFQWuXEcscpfBQ7NEEJe.webp",
    alt: "Tatame de judô visto de cima",
    caption: "O tatame — onde tudo acontece",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/medal-podium_c60f1e08.jpg",
    alt: "Sarah Menezes no pódio olímpico",
    caption: "No topo do mundo — pódio olímpico",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/brazil-flag-abstract-8596jLWQg5SWTFEnjYR46G.webp",
    alt: "Cores do Brasil — verde e amarelo",
    caption: "Orgulho brasileiro no esporte mundial",
    className: "col-span-2 row-span-1",
  },
];

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`${item.className} relative overflow-hidden group cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full min-h-[200px] lg:min-h-[250px]">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          hovered ? "bg-background/60" : "bg-gradient-to-t from-background/30 via-transparent to-transparent"
        }`} />

        {/* Caption */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 lg:p-6 transition-all duration-500 ${
          hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="editorial-line mb-3" />
          <p className="text-sm text-foreground font-medium">{item.caption}</p>
        </div>

        {/* Gold corner accent */}
        <div className={`absolute top-0 right-0 w-8 h-8 transition-all duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}>
          <div className="absolute top-0 right-0 w-full h-px bg-gold" />
          <div className="absolute top-0 right-0 w-px h-full bg-gold" />
        </div>

        {/* Bottom left corner accent */}
        <div className={`absolute bottom-0 left-0 w-8 h-8 transition-all duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gold" />
          <div className="absolute bottom-0 left-0 w-px h-full bg-gold" />
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="editorial-line-wide" style={{ transform: "scaleX(-1)" }} />
            <span className="text-gold text-xs font-medium tracking-[0.3em] uppercase">
              Galeria
            </span>
            <div className="editorial-line-wide" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Momentos que
            <br />
            <span className="text-gold">marcaram a história</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
