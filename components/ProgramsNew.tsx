"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';
import { Fredoka, Quicksand, Kalam } from 'next/font/google';
import boywithcup from "../public/boywithcup.png";
import girlwithbook from "../public/girlwithbook 1.svg"
import boywithelephant from "../public/boywithelephent.png"
import girlonswing from "../public/girlonwing.png"
import Image from 'next/image';

// --- TYPES & INTERFACES ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber' | 'emerald' | 'indigo' | 'orange';

interface Program {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  theme: ThemeColor;
  image: any;
  ids: string;
}

interface ThemeStyles {
  text: string;
  bg: string;
  tabBg: string;
  tabActive: string;
  border: string;
}

// --- FONT CONFIGURATION ---
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
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// --- DATA ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Explorers",
    subtitle: "Play Group (2–3 Years)",
    description: "At Little Dreamers, our Little Explorers begin their joyful learning journey through play and imagination.",
    fullDescription: "Activities are thoughtfully designed to build sensory awareness, strengthen motor skills, and encourage social interaction. Children model their peers, recite rhymes and stories in a fun way, and gradually settle into the group.",
    theme: "rose",
    image: boywithcup,
    ids: "#explorers"
  },
  {
    id: 2,
    title: "Curious Learners",
    subtitle: "Nursery (3–4 Years)",
    description: "Our Curious Learners explore the world of colors, numbers, and letters through fun, interactive activities.",
    fullDescription: "This stage builds imagination, communication, and growing independence. Children learn to observe and question. The thoughtfully planned school environment provides opportunities for developing basic motor skills, sensory and perceptual growth, and language acquisition.",
    theme: "sky",
    image: girlwithbook,
    ids: "learners"
  },
  {
    id: 3,
    title: "Creative Thinkers",
    subtitle: "LKG (4–5 Years)",
    description: "Children strengthen early academic skills while exploring creativity, imagination, and expression.",
    fullDescription: "Through phonics, storytelling, art, and group play, they build confidence to think creatively. Our trained and caring teachers help children adjust, supporting them as they experience their first interactions with other children and learn to participate in a cooperative group.",
    theme: "purple",
    image: boywithelephant,
    ids: "thinkers"
  },
  {
    id: 4,
    title: "Future Leaders",
    subtitle: "UKG (5–6 Years)",
    description: "Prepares children for formal schooling by building a strong foundation in academics and life skills.",
    fullDescription: "With structured learning in language, math, and environmental studies, children develop clarity. The focus is on meeting every child's needs through developmentally appropriate learning practices.",
    theme: "teal",
    image: girlonswing,
    ids: "leaders"
  },
  {
    id: 5,
    title: "Daycare",
    subtitle: "A Home Away From Home",
    description: "A safe, nurturing, and engaging environment for children to spend their day while parents are at work.",
    fullDescription: "Our daycare program provides comprehensive care that balances rest, play, and learning. Children are engaged in constructive activities under the supervision of caring professionals, ensuring they feel secure and loved.",
    theme: "emerald",
    image: girlonswing,
    ids: "daycare"
  },
  {
    id: 6,
    title: "Mind Lab",
    subtitle: "Cognitive Skill Development",
    description: "An innovative program focusing on developing critical thinking, problem-solving, and cognitive abilities.",
    fullDescription: "Mind Lab utilizes engaging games and structured challenges to enhance memory, logical reasoning, and strategic thinking. It provides children with the mental tools they need to excel.",
    theme: "indigo",
    image: boywithcup,
    ids: "mindlab"
  },
  {
    id: 7,
    title: "Teacher Training",
    subtitle: "Empowering Educators",
    description: "Comprehensive training programs designed to equip educators with modern pedagogical skills.",
    fullDescription: "Our Teacher Training program focuses on advanced teaching methodologies, child psychology, and classroom management. We empower educators to create dynamic and effective learning environments.",
    theme: "orange",
    image: girlwithbook,
    ids: "teachertraining"
  }
];

const colors: Record<ThemeColor, ThemeStyles> = {
  rose: { text: 'text-rose-600', bg: 'bg-rose-50', tabBg: 'bg-rose-400', tabActive: 'bg-rose-500', border: 'border-rose-100' },
  sky: { text: 'text-sky-600', bg: 'bg-sky-50', tabBg: 'bg-sky-400', tabActive: 'bg-sky-500', border: 'border-sky-100' },
  purple: { text: 'text-purple-600', bg: 'bg-purple-50', tabBg: 'bg-purple-400', tabActive: 'bg-purple-500', border: 'border-purple-100' },
  teal: { text: 'text-teal-600', bg: 'bg-teal-50', tabBg: 'bg-teal-400', tabActive: 'bg-teal-500', border: 'border-teal-100' },
  amber: { text: 'text-amber-600', bg: 'bg-amber-50', tabBg: 'bg-amber-400', tabActive: 'bg-amber-500', border: 'border-amber-100' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', tabBg: 'bg-emerald-400', tabActive: 'bg-emerald-500', border: 'border-emerald-100' },
  indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', tabBg: 'bg-indigo-400', tabActive: 'bg-indigo-500', border: 'border-indigo-100' },
  orange: { text: 'text-orange-600', bg: 'bg-orange-50', tabBg: 'bg-orange-400', tabActive: 'bg-orange-500', border: 'border-orange-100' },
};

// --- REUSABLE EDGE COMPONENT ---
const ElegantEdge = ({ position, fillColor = "#ffffff" }: { position: "top" | "bottom", fillColor?: string }) => {
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
          style={{ fill: fillColor }}
        ></path>
      </svg>
    </div>
  );
};

// --- COMPONENTS ---

const ProgramSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<number>(programs[0]!.id);
  const activeProgram = programs.find(p => p.id === activeTabId) || programs[0]!;
  const activeTheme = colors[activeProgram.theme];

  return (
    <section id='programs' className={`pt-28 pb-40 relative bg-white overflow-hidden ${bodyFont.className}`}>
      <ElegantEdge position="top" fillColor="#FDF8F5" />

      {/* Decorative Background Blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-200/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-60 left-0 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">Our Curriculum</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            <h2 className={`text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-800 max-w-4xl mx-auto ${titleFont.className}`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Programs</span>
            </h2>
          </motion.div>
        </div>

        {/* --- TAB BAR --- */}
        <div className="flex flex-wrap justify-center items-end gap-2 sm:gap-3 mb-6 relative z-20">
          {programs.map((program) => {
            const isActive = activeTabId === program.id;
            const tabTheme = colors[program.theme];

            return (
              <button
                key={program.id}
                onClick={() => setActiveTabId(program.id)}
                className={`relative px-5 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-sm
                  ${isActive
                    ? `${tabTheme.tabActive} text-white pt-6 pb-4 -translate-y-2`
                    : `${tabTheme.tabBg} text-white/90 hover:-translate-y-1 hover:shadow-md`
                  }
                `}
              >
                {isActive && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    <GraduationCap className="w-6 h-6 text-white/80" />
                  </div>
                )}
                <span className="relative z-10">{program.title}</span>

                {/* Active Tab Triangle Pointer */}
                {isActive && (
                  <div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 ${tabTheme.tabActive}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">

                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center relative py-10">
                  <motion.div
                    className={`absolute inset-0 ${activeTheme.tabBg} opacity-30 shadow-2xl`}
                    animate={{
                      borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: '85%', height: '85%', margin: 'auto' }}
                  />
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full aspect-square max-w-sm z-10 scale-110"
                  >
                    <Image
                      src={activeProgram.image}
                      alt={activeProgram.title}
                      fill
                      className="object-contain drop-shadow-2xl pointer-events-none"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </motion.div>
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center">
                  <h3 className={`text-4xl md:text-5xl ${activeTheme.text} ${titleFont.className} font-bold mb-3`}>
                    {activeProgram.title}
                  </h3>
                  <h4 className={`text-2xl text-slate-500 ${handwritingFont.className} font-bold mb-6`}>
                    {activeProgram.subtitle}
                  </h4>

                  <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mb-8 rounded-full"></div>

                  <p className="text-slate-700 text-lg leading-relaxed font-medium mb-6">
                    {activeProgram.description}
                  </p>

                  <p className="text-slate-600 leading-relaxed text-base">
                    {activeProgram.fullDescription}
                  </p>

                  <div className="mt-10">
                    <button className={`px-8 py-3 rounded-full ${activeTheme.tabActive} text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                      Enroll Now
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;