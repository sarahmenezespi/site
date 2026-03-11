/*
  CONTACT SECTION: Form for speaking engagements, events & press inquiries
  DESIGN: "Ouro Vivo" — Editorial Esportivo Cinematográfico
  LAYOUT: Asymmetric split — info column left, form right
  STYLE: Dark card backgrounds, gold accents, editorial typography
*/

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mic, Calendar, Newspaper, CheckCircle, MapPin, Mail, Instagram, Phone } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: "palestra" | "evento" | "imprensa" | "outro";
  message: string;
};

const subjectOptions = [
  { value: "palestra", label: "Palestra / Mentoria", icon: Mic },
  { value: "evento", label: "Evento Esportivo", icon: Calendar },
  { value: "imprensa", label: "Assessoria de Imprensa", icon: Newspaper },
  { value: "outro", label: "Outro Assunto", icon: Send },
] as const;

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [activeSubject, setActiveSubject] = useState<FormData["subject"]>("palestra");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "palestra",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubjectChange = (value: FormData["subject"]) => {
    setActiveSubject(value);
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    // Simulate submission
    setSubmitted(true);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.16_0.015_280)] to-background" />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              Contato
            </span>
            <div className="editorial-line-wide" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Vamos conversar sobre
            <br />
            <span className="text-gold">o próximo projeto</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interessado em palestras motivacionais, participação em eventos esportivos
            ou cobertura de imprensa? Entre em contato com a equipe de Sarah Menezes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              <div className="p-5 border border-border/40 bg-card/30 group hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Mic size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Palestras e Mentorias</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Superação, disciplina, liderança feminina no esporte e transição de carreira.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-border/40 bg-card/30 group hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Calendar size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Eventos Esportivos</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Presença em competições, clínicas de judô, inaugurações e eventos corporativos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-border/40 bg-card/30 group hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Newspaper size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Assessoria de Imprensa</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Entrevistas, matérias, documentários e cobertura jornalística.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct contact info */}
            <div className="pt-6 border-t border-border/30 space-y-4">
              <h3 className="text-xs text-gold tracking-[0.3em] uppercase font-medium">
                Informações Diretas
              </h3>
              <a
                href="mailto:sarahmenezespi@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Mail size={14} className="text-gold/70" />
                <span>sarahmenezespi@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5586999733930"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Phone size={14} className="text-gold/70" />
                <span>+55 (86) 99973-3930</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={14} className="text-gold/70" />
                <span>Teresina, Piauí — Brasil</span>
              </div>
              <a
                href="https://www.instagram.com/menezessarah/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Instagram size={14} className="text-gold/70" />
                <span>@menezessarah</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Subject selector */}
                <div>
                  <label className="text-xs text-gold tracking-[0.2em] uppercase font-medium block mb-3">
                    Assunto
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {subjectOptions.map((option) => {
                      const Icon = option.icon;
                      const isActive = activeSubject === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSubjectChange(option.value as FormData["subject"])}
                          className={`p-3 border text-center transition-all duration-300 ${
                            isActive
                              ? "border-gold/60 bg-gold/10 text-gold"
                              : "border-border/40 bg-card/20 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                          }`}
                        >
                          <Icon size={16} className="mx-auto mb-1.5" />
                          <span className="text-[11px] leading-tight block">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                      Nome completo <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 bg-card/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                      E-mail <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-card/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 bg-card/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                    Mensagem <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva sua proposta, data do evento, local e outras informações relevantes..."
                    className="w-full px-4 py-3 bg-card/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-muted-foreground/60">
                    <span className="text-gold">*</span> Campos obrigatórios
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-3.5 bg-gold text-charcoal font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Enviar Mensagem
                      <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </form>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center py-16 lg:py-20 border border-gold/20 bg-gold/5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <CheckCircle size={56} className="text-gold mb-6" />
                </motion.div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
                  Mensagem <span className="text-gold">enviada!</span>
                </h3>
                <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
                  Obrigado pelo seu interesse. A equipe de Sarah Menezes entrará em contato
                  em até 48 horas úteis.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "palestra", message: "" });
                    setActiveSubject("palestra");
                  }}
                  className="text-sm text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4 decoration-gold/30"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
