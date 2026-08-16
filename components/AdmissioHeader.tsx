"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
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
  '/gallery4.jpeg',
  '/gallery5.jpeg'
];

const Admissionheader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative mt-12 w-full h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-32 md:py-0 ${bodyFont.className}`}>

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
              alt={`Gallery Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-0 mix-blend-multiply"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent z-0"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-4 w-full"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 mb-6 shadow-xl flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="Dhwani Montessori Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </motion.div>

          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-black/40 px-5 py-2 rounded-full mb-6 shadow-sm"
          >
            <Home className="w-4 h-4 text-sky-200" />
            <span className="text-white font-bold text-sm hover:text-sky-200 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white font-bold text-sm">Admission</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight font-bold ${titleFont.className}`}
          >
            Dhwani <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">Montessori</span> <br className="hidden md:block" />
            Preschool & Daycare
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mt-4"
          >
            Admissions are now open for the <span className="text-sky-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">2026-2027</span> Academic Session.
          </motion.p>
        </motion.div>
      </div>

      {/* --- ELEGANT EDGE DIVIDER (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-20 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#eef2ff" }}
          ></path>
        </svg>
      </div>

    </header>
  );
};

export default Admissionheader;