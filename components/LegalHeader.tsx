"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronRight, ShieldCheck, FileText } from "lucide-react";
import Image from "next/image";
import { Fredoka, Quicksand } from 'next/font/google';

const titleFont = Fredoka({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const carouselImages = [
  '/gallery1.jpeg',
  '/gallery2.jpeg',
  '/gallery3.jpeg',
];

interface LegalHeaderProps {
  title: string;
  subtitle: string;
  icon: "privacy" | "terms";
}

const LegalHeader: React.FC<LegalHeaderProps> = ({ title, subtitle, icon }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative mt-12 w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20 pb-32 md:py-0 ${bodyFont.className}`}>

      {/* --- BACKGROUND CAROUSEL --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentImageIndex] || '/gallery1.jpeg'}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/70 z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent z-0"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-4 w-full"
        >
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-black/40 px-5 py-2 rounded-full mb-6 shadow-sm"
          >
            <Home className="w-4 h-4 text-sky-300" />
            <span className="text-white font-bold text-sm hover:text-sky-300 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white font-bold text-sm">{title}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight font-bold flex items-center gap-4 justify-center ${titleFont.className}`}
          >
             {icon === 'privacy' ? <ShieldCheck className="w-12 h-12 text-sky-400" /> : <FileText className="w-12 h-12 text-indigo-400" />}
             {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mt-4"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* --- ELEGANT EDGE DIVIDER (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-20 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#f8fafc" }} /* matches slate-50 */
          ></path>
        </svg>
      </div>

    </header>
  );
};

export default LegalHeader;
