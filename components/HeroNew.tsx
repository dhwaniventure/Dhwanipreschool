"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, PlayCircle, Star, Sparkles, Cloud } from "lucide-react";
import { Fredoka, Quicksand, Kalam, Luckiest_Guy } from 'next/font/google';
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// --- NEW FONT CONFIGURATION ---
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

const handwritingFont = Kalam({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const bubbleFont = Luckiest_Guy({ 
  subsets: ['latin'], 
  weight: ['400'] 
});

// Dummy images for the carousel. 
const carouselImages = [
  "https://t4.ftcdn.net/jpg/06/46/78/41/360_F_646784196_u1F6LtwEULzPKO7rXY1nUUS1RZqu5oLG.jpg",
  "https://media.istockphoto.com/id/2224235754/photo/drawing-education-and-teacher-with-children-in-classroom-for-learning-students-and-creative.jpg?s=612x612&w=0&k=20&c=pnsJb3Eb2WJ4SWYyorVf2sDp47WEkYci6uUbTNnrE5Q=",
  "https://thumbs.dreamstime.com/b/child-girl-schoolgirl-elementary-school-student-123686003.jpg"
];

// Component to render the multi-colored bubble text with "eyes"
const BubbleHeading = ({ text }: { text: string }) => {
  const colors = ['text-blue-500', 'text-red-500', 'text-yellow-400', 'text-green-500', 'text-orange-500', 'text-purple-500'];
  
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-1">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
          className={`
            relative inline-block text-4xl md:text-6xl lg:text-7xl
            ${bubbleFont.className} 
            ${colors[i % colors.length]}
            [text-shadow:_4px_4px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]
            hover:scale-110 transition-transform cursor-default
          `}
        >
          {char === " " ? "\u00A0" : char}
          {/* Adding "Eyes" to specific letters like the image */}
          {['o', 'e', 'p', 'd', 'a', 'g'].includes(char.toLowerCase()) && (
            <span className="absolute top-[40%] left-1/2 -translate-x-1/2 flex gap-1 lg:gap-2 pointer-events-none">
              <span className="w-1 h-1 lg:w-2 lg:h-2 bg-black rounded-full" />
              <span className="w-1 h-1 lg:w-2 lg:h-2 bg-black rounded-full" />
            </span>
          )}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3D Interactive Setup
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { damping: 30, stiffness: 100 });
  const mouseY = useSpring(y, { damping: 30, stiffness: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mt-12 w-full min-h-[100vh] lg:min-h-[900px] bg-[#FDF8F5] flex items-center pt-32 pb-16 overflow-hidden"
    >

      {/* PARTICLES LAYER */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-10 pointer-events-none"
        options={{
          fullScreen: false,
          particles: {
            color: { value: ["#FF6B6B", "#4D96FF", "#6BCB77", "#FFD93D"] },
            move: { enable: true, speed: 1.5, direction: "none", random: true },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 4, max: 10 } },
          },
        }}
      />

      {/* Playful scattered background elements */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-40 left-10 text-yellow-300 opacity-60 pointer-events-none z-10">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L58 35 L95 25 L65 50 L95 75 L58 65 L50 100 L42 65 L5 75 L35 50 L5 25 L42 35 Z" />
        </svg>
      </motion.div>

      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-1/4 text-sky-200 opacity-70 pointer-events-none z-10">
        <Cloud className="w-20 h-20 fill-current" />
      </motion.div>

      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-32 right-1/4 text-rose-300 opacity-50 pointer-events-none z-10">
        <Sparkles className="w-16 h-16 fill-current" />
      </motion.div>

      <div className="container mx-auto relative z-20 max-w-9xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* --- LEFT TEXT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left z-20"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm border-2 border-rose-100 mb-8">
              <span className="text-xl">🎈</span>
              <span className={`text-sm font-extrabold text-rose-500 tracking-wider uppercase ${bodyFont.className}`}>Admissions Open 2026</span>
            </div>

            {/* Giant Bold Title */}
            <h1 className={`${titleFont.className} text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] text-slate-800 mb-6 relative`}>
              <span className="relative z-10">Dhwani Cambridge</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 relative z-10">Montessori</span>
            </h1>

            <h2 className={`${titleFont.className} text-2xl sm:text-3xl lg:text-4xl text-slate-600 mb-6`}>
              Trusted Montessori Preschool in India
            </h2>

            {/* Handwriting Tagline */}
            <div className="mb-8">
              <h3 className={`${handwritingFont.className} text-2xl sm:text-3xl text-rose-400 transform -rotate-3`}>
                An enriching early-learning experience! ✨
              </h3>
            </div>

            <p className={`${bodyFont.className} text-slate-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-bold`}>
              At Dhwani Cambridge Montessori, we are dedicated to creating an enriching early-learning experience that supports every child’s intellectual, emotional, social, and creative development. Our Montessori-based approach encourages independent learning while building essential foundations.
            </p>

            {/* Colorful Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center lg:justify-start">
              <Link href="/admission" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${titleFont.className} w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white px-8 py-5 rounded-3xl text-xl shadow-[0_8px_0_theme(colors.rose.700)] hover:shadow-[0_4px_0_theme(colors.rose.700)] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-3 border-2 border-transparent hover:border-black`}
                >
                  Enroll Now <ArrowRight className="w-6 h-6 stroke-[3px]" />
                </motion.button>
              </Link>
            </div>

          </motion.div>

          {/* --- RIGHT: DYNAMIC BLOB CAROUSEL --- */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-full lg:w-[40%] relative mt-10 lg:mt-0 flex justify-center items-center z-20"
          >
            {/* Background Blob Shadow/Decoration */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-rose-300 w-full aspect-square max-w-[500px] xl:max-w-[600px] m-auto opacity-70 blur-xl pointer-events-none"
            />

            {/* The Carousel Container masked as an animated blob */}
            <motion.div
              animate={{
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square max-w-[500px] xl:max-w-[600px] bg-slate-200 overflow-hidden shadow-2xl border-[12px] border-white z-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentImageIndex]}
                    alt={`Happy children at Dhwani Cambridge - Slide ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Carousel Dots */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3 z-30">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "w-10 bg-rose-500" : "w-3 bg-slate-300 hover:bg-slate-400"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;