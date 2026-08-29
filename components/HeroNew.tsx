"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, PlayCircle, Cloud } from "lucide-react";
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
  const colors = ['text-[#FF6B6B]', 'text-[#4D96FF]', 'text-[#6BCB77]', 'text-[#FFD93D]'];

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 lg:gap-x-4 gap-y-1 lg:gap-y-2">
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="flex gap-x-1">
          {word.split("").map((char, i) => {
            const globalIndex = wordIndex * 10 + i;
            return (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: globalIndex * 0.05, type: 'spring', stiffness: 200 }}
                className={`
                  relative inline-block text-4xl md:text-5xl lg:text-6xl
                  ${bubbleFont.className} 
                  ${colors[globalIndex % colors.length]}
                  [text-shadow:_3px_3px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]
                  hover:scale-110 transition-transform cursor-default
                `}
              >
                {char}
                {/* Adding "Eyes" to specific letters like the image */}
                {['o', 'e', 'p', 'd', 'a', 'g'].includes(char.toLowerCase()) && (
                  <span className="absolute top-[40%] left-1/2 -translate-x-1/2 flex gap-1 lg:gap-2 pointer-events-none">
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-black rounded-full" />
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-black rounded-full" />
                  </span>
                )}
              </motion.span>
            );
          })}
        </div>
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
      className="relative mt-20 w-full min-h-[100vh] lg:min-h-[900px] bg-[#FDF8F5] flex items-center pt-32 pb-16 overflow-hidden"
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
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6BCB77]/20 border-2 border-[#6BCB77] shadow-sm mb-6 transform -rotate-2 cursor-default"
            >
              <span className="text-lg animate-bounce">🎈</span>
              <span className={`text-xs sm:text-sm font-extrabold text-emerald-700 tracking-wider uppercase ${bodyFont.className}`}>Admissions Open 2026</span>
            </motion.div>

            {/* Giant Bold Title */}
            <h1 className="mb-4 relative z-10 flex flex-col gap-1 md:gap-2">
              <BubbleHeading text="Dhwani Cambridge" />
              <BubbleHeading text="Montessori" />
            </h1>

            <h2 className={`${titleFont.className} text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4D96FF] to-indigo-500 mb-5 font-bold`}>
              Trusted Montessori Preschool in India
            </h2>

            {/* Handwriting Tagline */}
            <div className="mb-6 relative inline-block">
              <span className="absolute -inset-1 bg-[#FFD93D]/40 rounded-xl transform rotate-2"></span>
              <h3 className={`${handwritingFont.className} text-2xl sm:text-3xl text-rose-600 transform -rotate-2 relative z-10 font-bold px-2 py-1`}>
                An enriching early-learning experience!
              </h3>
            </div>

            {/* Playful Text Card */}
            <div className="relative mb-8 max-w-xl">
              <div className="absolute inset-0 bg-[#4D96FF]/20 rounded-3xl transform rotate-2"></div>
              <p className={`${bodyFont.className} relative text-slate-700 text-base sm:text-lg leading-relaxed font-semibold bg-white p-5 rounded-3xl border-2 border-[#4D96FF]/40 shadow-sm transform -rotate-1`}>
                At Dhwani Cambridge Montessori, we are dedicated to creating an enriching early-learning experience that supports every child’s intellectual, emotional, social, and creative development. Our Montessori-based approach encourages independent learning while building essential foundations.
              </p>
            </div>

            {/* Colorful Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link href="/admission" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${titleFont.className} w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white px-6 py-4 rounded-3xl text-lg shadow-[0_8px_0_theme(colors.rose.700)] hover:shadow-[0_4px_0_theme(colors.rose.700)] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-3 border-2 border-transparent hover:border-black`}
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