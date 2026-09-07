"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fredoka, Quicksand } from 'next/font/google';

import orangebanner from "@/public/orange_cultivating_knowledge.png";
import rosebanner from "@/public/pink_montessori.png";
import skybanner from "@/public/green_empowering_knowledge.png";

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
  orangebanner,
  rosebanner,
  skybanner
];

const AdmissionHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative mt-[140px] md:mt-[160px] w-full h-[5vh] md:h-[50vh] lg:h-[60vh] min-h-[75px] md:min-h-[400px] flex items-center justify-center overflow-hidden  md:pt-28 pb-32 md:py-0 ${bodyFont.className}`}>

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
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="absolute z-30 bottom-0 left-0 w-full flex justify-center pb-4 md:pb-8 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="w-12 h-12 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center pointer-events-auto"
          >
            <Image
              src="/logo.png"
              alt="Dhwani Montessori Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </motion.div>
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
            style={{ fill: "#EEF2FF" }}
          ></path>
        </svg>
      </div>

    </header>
  );
};

export default AdmissionHeader;