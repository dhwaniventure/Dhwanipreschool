"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';
import { Fredoka, Quicksand, Kalam } from 'next/font/google';

import boywithbrush from "../public/boywithbrush.png";
import girlwithbook from "../public/girlwithbook.png";
import boywithelephant from "../public/boywithelephent.png";
import gitlsandboysitting from "../public/gitlsandboysitting.png";
import singlecheerfullbaby from "../public/singlecheerfullbaby.png";
import foldedhandsboy from "../public/foldedhandsboy.png";
import mainimage from "../public/mainimage.png";

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
    title: "Little Minds",
    subtitle: "1-2 Years",
    description: "An enriching toddler programme that fosters early learning through exploration, discovery, and meaningful interactions.",
    fullDescription: "Designed to promote language development, sensory integration, and motor coordination. Our Montessori-trained facilitators create a welcoming environment where toddlers develop confidence, independence, and essential life skills through structured and free-play experiences.",
    theme: "rose",
    image: singlecheerfullbaby,
    ids: "#littleminds"
  },
  {
    id: 2,
    title: "Little Steps with Mommy",
    subtitle: "Mom & Me Programme",
    description: "A special journey of learning and bonding for mothers and their toddlers.",
    fullDescription: "Through fun-filled activities, music, movement, storytelling, and sensory experiences, children explore the world while mothers actively participate. It helps parents understand developmental stages and provides guidance on supporting learning at home.",
    theme: "sky",
    image: gitlsandboysitting,
    ids: "littlesteps"
  },
  {
    id: 3,
    title: "Curious Minds",
    subtitle: "Playgroup (2–3 Years)",
    description: "An enriching Montessori experience within a thoughtfully prepared environment.",
    fullDescription: "Children explore, question, and learn at their own pace. The curriculum integrates practical life activities, language development, early numeracy, and nature-based learning to enhance motor coordination, problem-solving, and social awareness.",
    theme: "purple",
    image: girlwithbook,
    ids: "curiousminds"
  },
  {
    id: 4,
    title: "Emerging Learners",
    subtitle: "Nursery (3–4 Years)",
    description: "Providing a strong academic and developmental foundation through hands-on learning.",
    fullDescription: "Children develop early literacy, numeracy, environmental awareness, and critical thinking skills. Active participation in Montessori learning centres strengthens analytical abilities, concentration, and prepares them for a smooth transition to formal schooling.",
    theme: "teal",
    image: boywithbrush,
    ids: "emerginglearners"
  },
  {
    id: 5,
    title: "Ready for Tomorrow",
    subtitle: "LKG (4–5 Years)",
    description: "Empowering children with skills, confidence, and independence for their educational journey.",
    fullDescription: "Through purposeful activities and collaborative learning, children advance academically and develop essential life skills. They learn the value of leadership, empathy, and responsibility, becoming capable, confident, and compassionate learners.",
    theme: "amber",
    image: foldedhandsboy,
    ids: "readyfortomorrow"
  },
  {
    id: 6,
    title: "Future Achievers",
    subtitle: "UKG (5–6 Years)",
    description: "Equipping children with knowledge and skills required for lifelong success.",
    fullDescription: "A blend of Montessori materials and experiential learning helps children develop advanced literacy, reasoning, and problem-solving abilities. They graduate as self-motivated learners ready to embrace future academic challenges with confidence.",
    theme: "emerald",
    image: boywithelephant,
    ids: "futureachievers"
  },
  {
    id: 7,
    title: "Mind Lab",
    subtitle: "Learning Beyond Boundaries",
    description: "A dynamic learning environment that encourages exploring, questioning, and innovating.",
    fullDescription: "Designed to nurture higher-order thinking skills through strategy games and brain-based activities. It focuses on critical thinking, communication, collaboration, and emotional resilience, teaching children how to think effectively.",
    theme: "indigo",
    image: mainimage,
    ids: "mindlab"
  },
  {
    id: 8,
    title: "Teacher Training",
    subtitle: "Centre for Montessori Teacher Education",
    description: "A world-class professional training programme preparing educators for excellence.",
    fullDescription: "Equips aspiring teachers with knowledge in Montessori philosophy, child psychology, and curriculum implementation. Emphasises experiential learning to ensure graduates are well-prepared to nurture confident, capable, and independent learners.",
    theme: "orange",
    image: boywithbrush,
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