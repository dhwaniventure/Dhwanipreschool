"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";

// Reusing an image from public
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

const WelcomeSection = () => {
  return (
    <section className={`relative w-full bg-[#FDFBF7] pt-28 pb-20 overflow-hidden ${bodyFont.className}`}>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl mt-10">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full max-w-[25rem] md:max-w-lg mx-auto aspect-square">
              <motion.div
                animate={{
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-sky-400 opacity-20"
              />

              <div className="absolute inset-4 flex items-center justify-center overflow-visible">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-[110%] h-[110%] -mt-10"
                >
                  <Image
                    src={bothcharaters}
                    alt="Welcome to Dhwani Cambridge"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">Welcome to Dhwani Cambridge</span>
              <Sparkles className="w-4 h-4 text-rose-500" />
            </div>

            <h2 className={`${titleFont.className} text-4xl lg:text-5xl text-slate-800 mb-6 leading-tight`}>
              Trusted Montessori <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Preschool in India</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              At Dhwani Cambridge Montessori, we are dedicated to creating an enriching early-learning experience that supports every child's intellectual, emotional, social, and creative development. Our Montessori-based approach encourages independent learning while building essential foundations in reading, writing, composition, and mathematics.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              With a strong focus on individual learning needs, our experienced teachers provide continuous encouragement and guidance, helping children become confident, capable, and enthusiastic learners.
            </p>

            <div className="w-full">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-left">Our Montessori Learning Experience:</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
                  <span className="text-slate-600 font-medium leading-relaxed">A thoughtfully planned Montessori daycare curriculum that supports children’s academic, social, emotional, and physical development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
                  <span className="text-slate-600 font-medium leading-relaxed">Purposeful learning activities that promote cognitive growth, sensory development, motor coordination, concentration, and adaptation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
                  <span className="text-slate-600 font-medium leading-relaxed">Individualised opportunities for creative exploration that encourage children to make choices, develop independence, and take ownership.</span>
                </li>
              </ul>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
