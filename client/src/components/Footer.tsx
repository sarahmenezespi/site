/*
  FOOTER: Minimal editorial footer
  STYLE: Dark, gold accents, social links, editorial typography
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-border/30">
      {/* Gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221393110/dvuX8XEYmbfxw2o8uHhFKF/logo_sarahBranco_bc8fbe3b.png"
                alt="Sarah Menezes"
                className="h-16 w-auto object-contain"
              />
              <div className="text-xs text-muted-foreground tracking-wider mt-2">Campeã Olímpica de Judô</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Primeira mulher brasileira campeã olímpica no judô. 
              Atleta, treinadora e inspiração para o esporte brasileiro.
            </p>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xs text-gold tracking-[0.3em] uppercase font-medium mb-6">
              Navegação
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Trajetória", href: "#trajetoria" },
                { label: "Treinadora", href: "#treinadora" },
                { label: "Galeria", href: "#galeria" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xs text-gold tracking-[0.3em] uppercase font-medium mb-6">
              Redes Sociais
            </h3>
            <a
              href="https://www.instagram.com/menezessarah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-border group-hover:border-gold/50 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </div>
              <div>
                <div className="font-medium">@menezessarah</div>
                <div className="text-xs text-muted-foreground">Instagram</div>
              </div>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="mt-8 p-4 border border-border/30 bg-card/20">
              <div className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Conquistas</div>
              <div className="text-sm text-muted-foreground">
                Ouro Olímpico (Londres 2012) &middot; 3x Bronze Mundial &middot; 
                Ouro como Treinadora (Paris 2024)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sarah Menezes. Homenagem à campeã olímpica.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brazil-green" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs text-muted-foreground ml-2">Orgulho do Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
