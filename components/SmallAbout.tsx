"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Star, Cloud } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

// --- IMAGE IMPORTS ---
import foldedboy from "../public/foldedhandsboy.png";
import girlsasking from "../public/whoweare.png";
import bothcharaters from "../public/bothcharacter.png";

// --- FONTS ---
const titleFont = Titan_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

// --- DATA ---
const features = [
  {
    id: 1,
    title: "Who We Are",
    subtitle: "Your Child's Second Home",
    description: "We are more than just a preschool. We are a loving community dedicated to creating a safe, nurturing, and joyful environment where your little ones can truly thrive and discover their unique potential.",
    image: girlsasking,
    ids: "#whowe",
    theme: {
      light: "bg-sky-100",
      main: "bg-sky-400",
      text: "text-sky-600",
    }
  },
  {
    id: 2,
    title: "Our Vision",
    subtitle: "Empowering Future Innovators",
    description: "Building a sound foundation for life through love, care, and innovative learning. We envision a world where every child is empowered to think creatively, act compassionately, and embrace lifelong learning.",
    image: bothcharaters,
    ids: "#vision",
    theme: {
      light: "bg-rose-100",
      main: "bg-rose-400",
      text: "text-rose-600",
    }
  },
  {
    id: 3,
    title: "Our Mission",
    subtitle: "Holistic Growth & Happiness",
    description: "Transforming education by focusing on holistic growth and creative expression. Our mission is to ignite curiosity, foster independence, and celebrate the small wins that make a big difference in a child's life.",
    image: foldedboy,
    ids: "#mission",
    theme: {
      light: "bg-amber-100",
      main: "bg-amber-400",
      text: "text-amber-600",
    }
  }
];

// --- REUSABLE EDGE COMPONENT ---
const ElegantEdge = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-20 pointer-events-none ${position === "top" ? "top-0" : "bottom-0 rotate-180"}`}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px] lg:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white"
        ></path>
      </svg>
    </div>
  );
};

const SpreadingLoveSection = () => {
  return (
    <section className={`relative w-full bg-[#FDFBF7] pt-28 pb-40 overflow-hidden ${bodyFont.className}`}>

      {/* Decorative Top Edge */}
      <ElegantEdge position="top" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-10 w-80 h-80 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />

        {/* Floating Icons */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-40 left-16 text-rose-300 opacity-50">
          <Star className="w-8 h-8 fill-current" />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-40 right-20 text-sky-300 opacity-50">
          <Cloud className="w-12 h-12 fill-current" />
        </motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-10 text-amber-300 opacity-50">
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl mt-10">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">Our Core Values</span>
            <Sparkles className="w-4 h-4 text-rose-500" />
          </div>

          <h2 className={`${titleFont.className} text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-800 max-w-4xl mx-auto`}>
            Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Little Dreamers</span>
            <br />
            <span className="relative inline-block mt-4">
              At Cambridge
              <svg className="absolute w-[110%] h-6 -bottom-2 -left-[5%] text-amber-400 -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* --- ZIG-ZAG SECTIONS --- */}
        <div className="space-y-32 md:space-y-40">
          {features.map((feature, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div key={feature.id} className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* IMAGE SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className={`w-full md:w-1/2 relative ${isEven ? 'md:order-2' : ''}`}
                >
                  <div className="relative w-full max-w-[22rem] md:max-w-md mx-auto aspect-square">
                    {/* Animated background blob for image */}
                    <motion.div
                      animate={{
                        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 ${feature.theme.main} opacity-20`}
                    />

                    {/* Actual Image container */}
                    <div className={`absolute inset-4  flex items-center justify-center overflow-visible`}>
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: isEven ? -3 : 3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-[120%] h-[120%] -mt-16"
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-contain drop-shadow-2xl pointer-events-none"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* TEXT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                  className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className={`inline-block px-4 py-1.5 rounded-xl ${feature.theme.light} ${feature.theme.text} font-bold text-sm mb-4`}>
                    0{feature.id} • {feature.title}
                  </div>

                  <h3 className={`${titleFont.className} text-4xl lg:text-5xl text-slate-800 mb-6 leading-tight`}>
                    {feature.subtitle}
                  </h3>

                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                    {feature.description}
                  </p>

                  <Link href={`about/${feature.ids}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative flex items-center gap-4 px-8 py-4 rounded-full ${feature.theme.main} text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                    >
                      <div className="absolute inset-0 w-full h-full bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                      <span className="relative z-10">Discover More</span>
                      <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-800 transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Decorative Bottom Edge */}
      <ElegantEdge position="bottom" />

    </section>
  );
};

export default SpreadingLoveSection;
