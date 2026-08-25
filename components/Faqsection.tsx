"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Baby,
  BookOpen,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageCircle,
  Search,
  School,
  Smile,
  Calendar,
  HelpCircle,
  Phone
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

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

// --- TYPES & DATA ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber';

const themeColors: ThemeColor[] = ['rose', 'sky', 'purple', 'teal', 'amber'];

const faqData = [
  {
    question: "What is our Vision?",
    answer: "At Dhawni Cambridge Montessori Pre School, we nurture confident, independent, and compassionate learners through the internationally acclaimed Montessori philosophy of Dr Maria Montessori. We create a joyful and caring environment that encourages curiosity, critical thinking, confidence, and a lifelong love for learning. At DCMPS, we don't just prepare children for school; we prepare them for life.",
    icon: Sparkles
  },
  {
    question: "What is the Montessori Way of Learning?",
    answer: "Our thoughtfully designed curriculum focuses on the holistic development of every child, nurturing curiosity, independence, creativity, and confidence. We recognise that every child is unique, allowing them to explore individual interests through meaningful, hands-on experiences. Learning extends beyond the classroom through experiences with nature and the community.",
    icon: BookOpen
  },
  {
    question: "How do we build Strong Foundations?",
    answer: "We place special emphasis on the formative years from 12 months to 6 years. Our dedicated educators combine professional expertise with insights from child development and educational neuroscience to create an enriching early learning experience that respects each child's individuality while providing flexibility, encouragement, and support.",
    icon: Baby
  },
  {
    question: "How do we inspire Curiosity & Independence?",
    answer: "Our approach transforms children from passive learners into active explorers. Through hands-on Montessori materials, children develop essential foundations in reading, mathematics, communication, and problem-solving. Every child is encouraged to explore at their own pace, fostering self-discipline, confidence, and independence.",
    icon: Search
  },
  {
    question: "Where do children learn through discovery?",
    answer: "Children are given the time, space, and freedom to learn at their own pace. Teachers work individually and in small groups, guiding learning according to interests and abilities. Children engage with Montessori materials, art, music, and practical experiences that encourage curiosity and a genuine love for learning.",
    icon: Smile
  },
  {
    question: "What is the Montessori Method?",
    answer: "Inspired by Dr Maria Montessori's concept of the absorbent mind, our method recognises that young children learn continuously from their surroundings. We create a nurturing environment that supports academic foundations, independence, confidence, and social skills. Our teachers act as facilitators and guides, allowing children the freedom to explore and discover.",
    icon: School
  },
  {
    question: "How do we create an environment where children feel safe to grow?",
    answer: "We believe a child's learning begins with feeling safe, valued, and cared for. Our warm and child-centred environment encourages children to express themselves freely and develop confidence. Supportive teachers create positive relationships that encourage self-esteem, communication, and a love for learning.",
    icon: ShieldCheck
  },
  {
    question: "What makes our learning spaces inspiring?",
    answer: "Our classrooms are designed to be safe, welcoming, organised, and engaging. The environment supports children by building independence, encouraging active participation, developing social interaction, promoting collaborative learning, and creating a calm, focused atmosphere for discovery, connection, and growth.",
    icon: Clock
  },
  {
    question: "How are our classrooms designed to nurture children?",
    answer: "Our classrooms are bright, welcoming, purposeful, and inspiring spaces. Carefully selected open-ended materials encourage creativity, exploration, and problem-solving. We maintain a clean, safe, and hygienic environment where dedicated reading spaces nurture early literacy, and children experience nature through real plants, developing responsibility and empathy.",
    icon: MessageCircle
  }
];

// --- STYLES HELPER ---
const getThemeStyles = (color: ThemeColor) => {
  const styles = {
    rose: { border: 'border-rose-200', activeBorder: 'border-rose-400', bg: 'bg-rose-50', text: 'text-rose-700', icon: 'text-rose-500' },
    sky: { border: 'border-sky-200', activeBorder: 'border-sky-400', bg: 'bg-sky-50', text: 'text-sky-700', icon: 'text-sky-500' },
    purple: { border: 'border-purple-200', activeBorder: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-700', icon: 'text-purple-500' },
    teal: { border: 'border-teal-200', activeBorder: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-700', icon: 'text-teal-500' },
    amber: { border: 'border-amber-200', activeBorder: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-700', icon: 'text-amber-500' },
  };
  return styles[color];
};

// --- FAQ ITEM COMPONENT ---
const FAQItem = ({ item, index, isOpen, onClick }: { item: any, index: number, isOpen: boolean, onClick: () => void }) => {

  // FIX: Added "|| 'rose'" to ensure undefined is never passed to getThemeStyles
  const themeKey: ThemeColor = themeColors[index % themeColors.length] || 'rose';

  const theme = getThemeStyles(themeKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`
        w-full mb-4 rounded-[30px] border-2 bg-white overflow-hidden transition-all duration-300
        ${isOpen ? `${theme.activeBorder} shadow-lg` : `${theme.border} shadow-sm hover:shadow-md`}
      `}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none ${isOpen ? theme.bg : 'bg-white'}`}
      >
        <div className="flex items-center gap-4">
          <div className={`
             hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 
             ${isOpen ? 'bg-white' : theme.bg}
          `}>
            <item.icon className={`w-5 h-5 ${theme.icon}`} />
          </div>
          <span className={`text-lg md:text-xl font-bold ${isOpen ? theme.text : 'text-slate-700'}`}>
            {item.question}
          </span>
        </div>

        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
          ${isOpen ? 'bg-white rotate-180' : `${theme.bg} rotate-0`}
        `}>
          {isOpen ? (
            <Minus className={`w-5 h-5 ${theme.icon}`} />
          ) : (
            <Plus className={`w-5 h-5 ${theme.icon}`} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`p-6 pt-0 ${theme.bg}`}>
              <p className="text-slate-600 font-semibold leading-relaxed ml-0 md:ml-14 border-t border-slate-200/50 pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MAIN SECTION COMPONENT ---
const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full py-20 bg-indigo-50 relative overflow-hidden ${bodyFont.className}`}>

      {/* Background Doodles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 -left-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-6xl uppercase leading-tight ${titleFont.className} text-slate-800`}>
              Discover <span className="text-rose-500">More</span>
            </h2>
            <p className="text-slate-500 text-lg mt-3 font-bold">
              Learn more about our vision, approach, and environment
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;