"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Fredoka, Quicksand, Kalam } from 'next/font/google';

import girlwithbook from "../public/girlwithbook.png";
import bothcharaters from "../public/bothcharacter.png";
import gitlsandboysitting from "../public/gitlsandboysitting.png";
import singlecheerfullbaby from "../public/singlecheerfullbaby.png";
import mainimage from "../public/mainimage.png";

import Image from 'next/image';

// --- TYPES & INTERFACES ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber' | 'emerald' | 'indigo' | 'orange';

interface InfoSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  paragraphs: string[];
  theme: ThemeColor;
  image: any;
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
const infoSections: InfoSection[] = [
  {
    id: 1,
    title: "Our Vision & Way",
    subtitle: "The Montessori Philosophy",
    description: "At Dhawni Cambridge Montessori Pre School, we nurture confident, independent, and compassionate learners through the internationally acclaimed Montessori philosophy of Dr Maria Montessori.",
    paragraphs: [
      "Our child-centred curriculum combines global Montessori practices with hands-on learning, creativity, exploration, and meaningful experiences. We create a joyful and caring environment that encourages curiosity, critical thinking, confidence, and a lifelong love for learning.",
      "In collaboration with experienced Montessori experts, trained educators, teachers, and parents, we focus on the holistic development of every child—nurturing the mind, body, and spirit while preparing them for a confident transition to formal schooling. At DCMPS, we don't just prepare children for school; we prepare them for life.",
      "Dhawni Cambridge Montessori Pre School offers a thoughtfully designed Montessori curriculum inspired by global research and the philosophy of Dr Maria Montessori. Our approach focuses on the holistic development of every child, nurturing curiosity, independence, creativity, confidence, and a lifelong love for learning. We recognise that every child is unique.",
      "Our child-centred learning environment allows children to explore their individual interests, learning styles, and creative potential through meaningful, hands-on experiences. With the guidance of Montessori experts, trained educators, teachers, and engaged families, we create a supportive environment where children can grow socially, emotionally, intellectually, and creatively.",
      "Learning extends beyond the classroom through experiences with nature, the community, and the world around us. We believe these experiences help children become more aware, responsible, and connected individuals. At DCMPS, we see education as more than preparing children for school. We strive to prepare them for life—helping them become confident, capable, compassionate, and responsible members of the world."
    ],
    theme: "rose",
    image: bothcharaters,
  },
  {
    id: 2,
    title: "Foundations & Focus",
    subtitle: "Inspiring Curiosity",
    description: "Dhawni Cambridge Montessori Pre School places special emphasis on the formative years from 12 months to 6 years, when children develop the foundations that influence their future learning and growth.",
    paragraphs: [
      "Our dedicated educators combine professional expertise with current insights from child development and educational neuroscience to create an enriching early learning experience. Through a thoughtfully designed and academically engaging curriculum, we respect each child’s individuality while providing the flexibility, encouragement, and support they need to reach their full potential.",
      "Our Montessori approach is designed to transform children from passive learners into active explorers. Through hands-on Montessori materials and thoughtfully prepared learning environments, children develop essential foundations in reading, language, mathematics, communication, creativity, and problem-solving while strengthening their sensory and motor skills.",
      "Every child is encouraged to explore at their own pace and make meaningful choices within clear and supportive boundaries. This freedom fosters curiosity, concentration, self-discipline, confidence, and independence. At Dhawni Cambridge Montessori Pre School, we create opportunities for children to discover not only the world around them, but also their own unique abilities and potential."
    ],
    theme: "sky",
    image: girlwithbook,
  },
  {
    id: 3,
    title: "Discovery & Environment",
    subtitle: "Where Children Learn",
    description: "Our Montessori environment is designed around one fundamental belief: every child is unique.",
    paragraphs: [
      "At Dhawni Cambridge Montessori Pre School, children are given the time, space, and freedom to learn at their own pace. Teachers work individually and in small groups, carefully observing each child and guiding their learning according to their interests, abilities, and developmental needs.",
      "Instead of traditional classroom instruction, our educators create opportunities for hands-on exploration. Children engage with carefully selected Montessori materials, books, art, music, building activities, and practical experiences that encourage curiosity and creativity. Through play, exploration, and meaningful choices, children develop concentration, independence, problem-solving skills, confidence, and a genuine love for learning. We don't simply tell children what to learn—we create an environment where they can discover it for themselves.",
      "We believe a child’s learning begins with feeling safe, valued, and cared for. Our warm and child-centred environment encourages children to explore their surroundings, express themselves freely, and develop confidence at their own pace. Every learning space is thoughtfully designed to support the changing needs and developmental stages of growing children.",
      "Through creative activities such as art, craft, drama, music, and hands-on exploration, children are given opportunities to discover their interests and express their unique personalities. Our supportive teachers create positive relationships that encourage self-esteem, independence, communication, and a love for learning. We nurture the whole child by supporting their physical, cognitive, social, emotional, and creative development. A safe environment builds confidence. Confidence inspires learning. Learning opens the door to possibility."
    ],
    theme: "purple",
    image: gitlsandboysitting,
  },
  {
    id: 4,
    title: "The Montessori Method",
    subtitle: "Our Approach in Action",
    description: "The Montessori approach begins with a simple belief: children are naturally curious and capable of learning.",
    paragraphs: [
      "Inspired by Dr Maria Montessori’s concept of the absorbent mind, our method recognises that young children learn continuously from their surroundings. Every interaction, experience, movement, and observation becomes a learning opportunity. At Dhawni Cambridge Montessori Pre School, children are placed at the heart of the educational experience. We create a nurturing environment that supports not only academic foundations, but also independence, confidence, communication, social skills, emotional development, and creativity.",
      "Our teachers act as facilitators and guides. They observe each child, prepare purposeful learning spaces, introduce appropriate Montessori materials, and provide support when required—while allowing children the freedom to explore and discover for themselves.",
      "Our Approach in Action includes: \n• Child-Centred Learning: Every child is respected as a unique learner. \n• Guided Discovery: Teachers guide children while allowing them to experience learning independently. \n• Prepared Environment: Learning spaces are thoughtfully designed to encourage exploration and concentration. \n• Hands-On Learning: Children learn through meaningful interaction with Montessori materials. \n• Respect & Independence: Children are encouraged to make choices, develop self-discipline, and take responsibility for their learning. \n• Observation: Teachers observe each child to understand their interests, abilities, and developmental needs.",
      "At DCMPS, we guide rather than dictate, nurture rather than instruct, and create opportunities for every child to discover their potential."
    ],
    theme: "teal",
    image: singlecheerfullbaby,
  },
  {
    id: 5,
    title: "Inspiring Classrooms",
    subtitle: "Spaces Designed for Growth",
    description: "At Dhawni Cambridge Montessori Pre School, we believe the learning environment plays an important role in shaping a child’s experience and development.",
    paragraphs: [
      "Our classrooms are designed to be safe, welcoming, organised, and engaging, with carefully selected Montessori materials that encourage children to explore and learn through hands-on experiences. The environment supports children by: Building independence and confidence, encouraging curiosity and active participation, developing social interaction and communication, supporting positive relationships with educators, promoting collaborative learning, and creating a calm and focused atmosphere.",
      "Through individual exploration and small-group activities, children interact with teachers and peers, developing both academic foundations and essential social-emotional skills. We design our classrooms not just for learning, but for discovery, connection, and growth.",
      "Our classrooms are thoughtfully designed to be bright, welcoming, purposeful, and inspiring spaces where children feel comfortable learning, exploring, and expressing themselves. Rather than filling the classroom with unnecessary commercial displays, we create meaningful surroundings that reflect the children’s own learning and experiences. Carefully selected, open-ended materials encourage creativity, exploration, problem-solving, and independent thinking, while dedicated reading spaces nurture early literacy and a lifelong love of books.",
      "Children also experience nature through real plants and age-appropriate opportunities to care for their surroundings, helping them develop responsibility, empathy, and respect for the world around them. Our classrooms support a balanced mix of individual learning, group activities, interaction, socialisation, and physical movement, creating opportunities for every child to learn in different ways.",
      "What Our Classrooms Nurture: Curiosity and creativity, a love of learning, social and communication skills, cooperation and empathy, independence and confidence, concentration and self-discipline, responsibility and respect.",
      "We place the highest importance on maintaining a clean, safe, and hygienic environment. Classrooms, learning materials, toys, and common areas are regularly cleaned and disinfected, while food is prepared, served, and stored using appropriate clean and safe practices. Every classroom at DCMPS is designed with one purpose—to create a safe and inspiring space where children can learn, connect, and grow with confidence."
    ],
    theme: "amber",
    image: mainimage,
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

const DetailedInfo: React.FC = () => {
  return (
    <section id='detailed-info' className={`pt-28 pb-40 relative bg-[#FDFBF7] overflow-hidden ${bodyFont.className}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">More About Us</span>
              <Sparkles className="w-4 h-4 text-sky-500" />
            </div>

            <h2 className={`text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-800 max-w-4xl mx-auto ${titleFont.className}`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">Philosophy</span>
            </h2>
          </motion.div>
        </div>

        {/* --- CONTENT AREA (ZIG-ZAG) --- */}
        <div className="space-y-32 md:space-y-40">
          {infoSections.map((section, index) => {
            const isEven = index % 2 !== 0;
            const activeTheme = colors[section.theme];

            return (
              <div key={section.id} className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className={`w-full md:w-1/2 flex items-center justify-center relative ${isEven ? 'md:order-2' : ''}`}
                >
                  <div className="relative w-full max-w-[22rem] md:max-w-md mx-auto aspect-square">
                    <motion.div
                      className={`absolute inset-0 ${activeTheme.tabBg} opacity-20 shadow-xl`}
                      animate={{
                        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: isEven ? -2 : 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute inset-4 flex items-center justify-center overflow-visible"
                    >
                      <div className="relative w-[110%] h-[110%] -mt-10">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-contain drop-shadow-2xl pointer-events-none"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Text Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                  className="w-full md:w-1/2 flex flex-col justify-start text-center md:text-left"
                >
                  <div className={`inline-block px-4 py-1.5 rounded-xl ${activeTheme.bg} ${activeTheme.text} font-bold text-sm mb-4 mx-auto md:mx-0 w-max`}>
                    0{section.id} • {section.title}
                  </div>

                  <h3 className={`text-4xl md:text-5xl ${titleFont.className} text-slate-800 font-bold mb-4`}>
                    {section.subtitle}
                  </h3>

                  <div className={`w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mb-8 rounded-full mx-auto md:mx-0 ${isEven ? 'md:bg-gradient-to-l' : ''}`}></div>

                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-bold mb-6">
                    {section.description}
                  </p>

                  <div className="space-y-4 text-left">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>

      <ElegantEdge position="bottom" fillColor="#EEF2FF" />
    </section>
  );
};

export default DetailedInfo;
