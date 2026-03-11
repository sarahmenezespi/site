/*
  DESIGN: "Ouro Vivo" — Editorial Esportivo Cinematográfico
  SECTIONS: Hero, Sobre, Timeline, Conquistas, Treinadora, Galeria, Contato
  STYLE: Dark cinematic, gold accents, editorial typography, parallax
*/

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import StatsSection from "@/components/StatsSection";
import CoachSection from "@/components/CoachSection";
import GallerySection from "@/components/GallerySection";
import QuoteSection from "@/components/QuoteSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <VideoSection />
      <QuoteSection />
      <CoachSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
