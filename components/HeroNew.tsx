"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Fredoka, Quicksand, Kalam } from 'next/font/google';
import Link from "next/link";

// --- NEW FONT CONFIGURATION ---
const titleFont = Fredoka({ 
  weight: ['600', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Quicksand({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const handwritingFont = Kalam({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Dummy images for the carousel. 
const carouselImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop" 
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <section className="w-full md:h-[900px] mt-[80px] flex flex-col md:relative md:block overflow-hidden bg-white">

      {/* --- IMAGE CAROUSEL SECTION --- */}
      <div className="relative w-full h-[250px] md:h-[930px] md:absolute md:inset-0 z-0 bg-slate-100">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={carouselImages[currentImageIndex]}
              alt={`Happy children at Little Dreamers - Slide ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-6 md:bottom-20 left-0 right-0 flex justify-center gap-2 z-20 md:justify-end md:right-20">
          {carouselImages.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? "w-8 bg-rose-500" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* OVERLAY UPDATED: Added a white gradient on desktop so the dark text remains readable without the card */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 md:bg-gradient-to-r md:from-white/80 md:via-white/40 md:to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 mt-8 flex-1 md:h-full md:flex md:items-center md:ml-[120px] max-w-9xl mx-auto md:px-2 lg:px-8 pointer-events-none">
        
        {/* TEXT CONTAINER UPDATED: Kept white card for mobile, removed background/borders for md (desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className={`
            w-full bg-white px-6 py-10 -mt-10 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pointer-events-auto
            md:mt-0 md:bg-transparent md:backdrop-blur-none md:p-10 md:max-w-[720px] md:shadow-none md:border-none
          `}
        >
          {/* Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] mb-6 text-slate-800 ${titleFont.className}`}>
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 pb-2 inline-block">
              Dhawani Dreamers
            </span>
            
          </h1>

          {/* Highlighted Tagline Box */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-yellow-300 transform -skew-x-12 rounded-lg"></div>
            <h2 className={`relative text-xl sm:text-2xl text-slate-800 px-5 py-2.5 font-bold transform -rotate-2 ${handwritingFont.className}`}>
              Where Little Dreams Begin to Shine! ✨
            </h2>
          </div>

          {/* Description */}
          <p className={`text-slate-700 text-base sm:text-lg leading-relaxed font-semibold mb-10 ${bodyFont.className}`}>
            We cherish the magical early years of childhood — a phase where curiosity sparks, imagination takes flight, and the foundation for lifelong learning is built with love, care, and laughter.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/admission">
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ y: 2, scale: 0.98 }}
                className={`w-full sm:w-auto bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_6px_0_theme(colors.violet.700)] hover:shadow-[0_4px_0_theme(colors.violet.700)] active:shadow-none active:translate-y-[6px] flex items-center justify-center gap-3 transition-all ${bodyFont.className}`}
              >
                Enroll Your Child <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>

      {/* Decorative Floating Blobs (Desktop Only) */}
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-20 right-40 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
    </section>
  );
};

export default Hero;