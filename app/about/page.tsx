"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutHeader from "@/components/AboutHeader";
import { Fredoka, Quicksand } from 'next/font/google';

// Images
import boysitting from "../../public/tobby_with_book.png";
import girlwithbook from "../../public/tobby_And_mia_on_table_painting.png";
import boywithelephant from "../../public/tobby_with_his_teddy.png";
import girlonswing from "../../public/leo_with_magnyfying_glass.png";
import boywithcup from "../../public/tobyy_skiping_rope.png";
import girlfaceonly from "../../public/girlfaceonly.png";
import boywithbrush from "../../public/boywithbrush.png";

// --- FONTS ---
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

// --- DATA ---
const aboutSections = [
  {
    title: "Our Vision",
    content: (
      <div className="space-y-4">
        <p>At Dhawni Cambridge Montessori Pre School, we nurture confident, independent, and compassionate learners through the internationally acclaimed Montessori philosophy of Dr Maria Montessori.</p>
        <p>Our child-centred curriculum combines global Montessori practices with hands-on learning, creativity, exploration, and meaningful experiences. We create a joyful and caring environment that encourages curiosity, critical thinking, confidence, and a lifelong love for learning.</p>
        <p>In collaboration with experienced Montessori experts, trained educators, teachers, and parents, we focus on the holistic development of every child—nurturing the mind, body, and spirit while preparing them for a confident transition to formal schooling.</p>
        <p className="font-bold text-indigo-500 text-xl">At DCMPS, we don't just prepare children for school; we prepare them for life.</p>
      </div>
    ),
    image: boysitting,
    bgColor: "bg-white",
    blobColor: "from-sky-300 to-indigo-300",
  },
  {
    title: "The Montessori Way of Learning",
    content: (
      <div className="space-y-4">
        <p>At Dhawni Cambridge Montessori Pre School offers a thoughtfully designed Montessori curriculum inspired by global research and the philosophy of Dr Maria Montessori. Our approach focuses on the holistic development of every child, nurturing curiosity, independence, creativity, confidence, and a lifelong love for learning.</p>
        <p>We recognise that every child is unique. Our child-centred learning environment allows children to explore their individual interests, learning styles, and creative potential through meaningful, hands-on experiences.</p>
        <p>With the guidance of Montessori experts, trained educators, teachers, and engaged families, we create a supportive environment where children can grow socially, emotionally, intellectually, and creatively.</p>
        <p>Learning extends beyond the classroom through experiences with nature, the community, and the world around us. We believe these experiences help children become more aware, responsible, and connected individuals.</p>
        <p>At DCMPS, we see education as more than preparing children for school. We strive to prepare them for life—helping them become confident, capable, compassionate, and responsible members of the world.</p>
      </div>
    ),
    image: girlwithbook,
    bgColor: "bg-slate-50",
    blobColor: "from-rose-300 to-orange-300",
  },
  {
    title: "Building Strong Foundations (Approach)",
    content: (
      <div className="space-y-4">
        <p>At Dhawni Cambridge Montessori Pre School place special emphasis on the formative years from 12 months to 6 years, when children develop the foundations that influence their future learning and growth.</p>
        <p>Our dedicated educators combine professional expertise with current insights from child development and educational neuroscience to create an enriching early learning experience.</p>
        <p>Through a thoughtfully designed and academically engaging curriculum, we respect each child’s individuality while providing the flexibility, encouragement, and support they need to reach their full potential.</p>
      </div>
    ),
    image: boywithelephant,
    bgColor: "bg-white",
    blobColor: "from-teal-300 to-emerald-300",
  },
  {
    title: "Inspiring Curiosity & Independence (Focus)",
    content: (
      <div className="space-y-4">
        <p>Our Montessori approach is designed to transform children from passive learners into active explorers.</p>
        <p>Through hands-on Montessori materials and thoughtfully prepared learning environments, children develop essential foundations in reading, language, mathematics, communication, creativity, and problem-solving while strengthening their sensory and motor skills.</p>
        <p>Every child is encouraged to explore at their own pace and make meaningful choices within clear and supportive boundaries. This freedom fosters curiosity, concentration, self-discipline, confidence, and independence.</p>
        <p>At Dhawni Cambridge Montessori Pre School, we create opportunities for children to discover not only the world around them, but also their own unique potential.</p>
      </div>
    ),
    image: girlonswing,
    bgColor: "bg-slate-50",
    blobColor: "from-purple-300 to-pink-300",
  },
  {
    title: "Where Children Learn Through Discovery",
    content: (
      <div className="space-y-4">
        <p>Our Montessori environment is designed around one fundamental belief: every child is unique.</p>
        <p>At Dhawni Cambridge Montessori Pre School, children are given the time, space, and freedom to learn at their own pace. Teachers work individually and in small groups, carefully observing each child and guiding their learning according to their interests, abilities, and developmental needs.</p>
        <p>Instead of traditional classroom instruction, our educators create opportunities for hands-on exploration. Children engage with carefully selected Montessori materials, books, art, music, building activities, and practical experiences that encourage curiosity and creativity.</p>
        <p>Through play, exploration, and meaningful choices, children develop concentration, independence, problem-solving skills, confidence, and a genuine love for learning.</p>
        <p className="font-bold text-amber-500 text-lg">We don't simply tell children what to learn—we create an environment where they can discover it for themselves.</p>
      </div>
    ),
    image: boywithcup,
    bgColor: "bg-white",
    blobColor: "from-amber-300 to-yellow-300",
  },
  {
    title: "The Montessori Method (Concept Method)",
    content: (
      <div className="space-y-4">
        <p>The Montessori approach begins with a simple belief: children are naturally curious and capable of learning.</p>
        <p>Inspired by Dr Maria Montessori’s concept of the absorbent mind, our method recognises that young children learn continuously from their surroundings. Every interaction, experience, movement, and observation becomes a learning opportunity.</p>
        <p>At Dhawni Cambridge Montessori Pre School, children are placed at the heart of the educational experience. We create a nurturing environment that supports not only academic foundations, but also independence, confidence, communication, social skills, emotional development, and creativity.</p>
        <p>Our teachers act as facilitators and guides. They observe each child, prepare purposeful learning spaces, introduce appropriate Montessori materials, and provide support when required—while allowing children the freedom to explore and discover for themselves.</p>
      </div>
    ),
    image: girlfaceonly,
    bgColor: "bg-slate-50",
    blobColor: "from-cyan-300 to-blue-300",
  },
  {
    title: "Our Approach in Action",
    content: (
      <div className="space-y-4">
        <ul className="space-y-4">
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Child-Centred Learning:</strong> Every child is respected as a unique learner.</span></li>
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Guided Discovery:</strong> Teachers guide children while allowing them to experience learning independently.</span></li>
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Prepared Environment:</strong> Learning spaces are thoughtfully designed to encourage exploration and concentration.</span></li>
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Hands-On Learning:</strong> Children learn through meaningful interaction with Montessori materials.</span></li>
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Respect & Independence:</strong> Children are encouraged to make choices, develop self-discipline, and take responsibility for their learning.</span></li>
          <li className="flex gap-2"><span className="text-rose-500 mt-1">✦</span> <span><strong>Observation:</strong> Teachers observe each child to understand their interests, abilities, and developmental needs.</span></li>
        </ul>
        <p className="font-bold text-rose-500 text-lg mt-4">At DCMPS, we guide rather than dictate, nurture rather than instruct, and create opportunities for every child to discover their potential.</p>
      </div>
    ),
    image: boywithbrush,
    bgColor: "bg-white",
    blobColor: "from-fuchsia-300 to-rose-300",
  },
  {
    title: "Where Children Feel Safe to Grow",
    content: (
      <div className="space-y-4">
        <p>At Dhawni Cambridge Montessori Pre School, we believe a child’s learning begins with feeling safe, valued, and cared for.</p>
        <p>Our warm and child-centred environment encourages children to explore their surroundings, express themselves freely, and develop confidence at their own pace. Every learning space is thoughtfully designed to support the changing needs and developmental stages of growing children.</p>
        <p>Through creative activities such as art, craft, drama, music, and hands-on exploration, children are given opportunities to discover their interests and express their unique personalities.</p>
        <p>Our supportive teachers create positive relationships that encourage self-esteem, independence, communication, and a love for learning.</p>
        <p>We nurture the whole child by supporting their physical, cognitive, social, emotional, and creative development.</p>
        <p className="font-bold text-indigo-500 text-xl">A safe environment builds confidence. Confidence inspires learning. Learning opens the door to possibility.</p>
      </div>
    ),
    image: boysitting,
    bgColor: "bg-slate-50",
    blobColor: "from-sky-300 to-indigo-300",
  },
  {
    title: "Inspiring Learning Spaces & Classrooms",
    content: (
      <div className="space-y-4">
        <p>At Dhawni Cambridge Montessori Pre School, we believe the learning environment plays an important role in shaping a child’s experience and development. Our classrooms are designed to be safe, welcoming, organised, and engaging, with carefully selected Montessori materials that encourage children to explore and learn through hands-on experiences.</p>
        <p className="font-bold">The environment supports children by:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Building independence and confidence</li>
          <li>Encouraging curiosity and active participation</li>
          <li>Developing social interaction and communication</li>
          <li>Supporting positive relationships with educators</li>
          <li>Promoting collaborative learning</li>
          <li>Creating a calm and focused atmosphere</li>
        </ul>
        <p>Rather than filling the classroom with unnecessary commercial displays, we create meaningful surroundings that reflect the children’s own learning and experiences. Carefully selected, open-ended materials encourage creativity, exploration, problem-solving, and independent thinking, while dedicated reading spaces nurture early literacy and a lifelong love of books.</p>
        <p>We place the highest importance on maintaining a clean, safe, and hygienic environment. Every classroom at DCMPS is designed with one purpose—to create a safe and inspiring space where children can learn, connect, and grow with confidence.</p>
      </div>
    ),
    image: girlwithbook,
    bgColor: "bg-white",
    blobColor: "from-teal-300 to-emerald-300",
  }
];

const programs = [
  {
    title: "Little Minds (1–2 Years)",
    desc: "The toddler years are a remarkable period of discovery, growth, and independence. Designed for children between 1 and 2 years of age, the Little Hearts Program embraces the Montessori philosophy of fostering self-directed learning within a nurturing environment. Children are encouraged to explore, experiment, and learn through meaningful experiences."
  },
  {
    title: "Curious Minds (2–3 Years | Play Group)",
    desc: "The Tender Hearts Program is thoughtfully designed to meet the developmental needs of children aged 2 to 3 years. We provide a warm, secure, and engaging learning environment where children enhance motor development, hand-eye coordination, concentration, language skills, and self-help abilities."
  },
  {
    title: "Nursery (3–4 Years)",
    desc: "We provide a rich and engaging learning environment where children aged 3 to 4 years develop foundational skills in Language, Mathematics, and Environmental Studies through hands-on Montessori experiences. Carefully prepared classrooms encourage children to think independently."
  },
  {
    title: "LKG (4–5 Years)",
    desc: "A well-balanced Montessori curriculum where children develop academic readiness while enhancing their confidence, communication, and social skills. Concepts in Mathematics, English, Hindi, and EVS are introduced through engaging and experiential learning methods."
  },
  {
    title: "UKG (5–6 Years)",
    desc: "Serving as a bridge between preschool and primary education, this program equips children with the knowledge, skills, and confidence required for future academic success. Children learn through a combination of Montessori materials, experiential learning, and interactive classroom experiences."
  },
  {
    title: "Day Care",
    desc: "Our Day Care Centre provides a safe, nurturing, and stimulating environment where children feel at home while parents enjoy complete peace of mind. Under the supervision of trained caregivers and educators, children enjoy a balanced routine that combines learning, play, rest, and recreation."
  },
  {
    title: "Mind Lab",
    desc: "A dynamic learning program that expands children's thinking abilities. Using strategy games, hands-on activities, and guided learning experiences, Mind Lab strengthens cognitive functions such as memory, attention, reasoning, planning, and decision-making."
  },
  {
    title: "Teacher Training",
    desc: "We are committed to nurturing the next generation of early childhood educators through internationally aligned Montessori training programs. The program emphasizes child-centered learning, classroom leadership, practical application, and a deep understanding of child development."
  }
];


const AboutUsSegmented: React.FC = () => {
  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>

      <AboutHeader />

      {/* RENDER ALL MAIN SECTIONS IN ZIG-ZAG LAYOUT */}
      {aboutSections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={index} className={`relative w-full ${section.bgColor} py-20 overflow-hidden`}>
            {/* ElegantEdge on top if it's an even section (bg-white) and not the first one */}
            {isEven && index !== 0 && (
              <ElegantEdge position="top" fillColor="#f8fafc" /> /* Matches slate-50 */
            )}
            {/* ElegantEdge on top if it's an odd section (bg-slate-50) */}
            {!isEven && (
              <ElegantEdge position="top" fillColor="#ffffff" />
            )}

            <div className="container mx-auto px-6 relative z-10 pt-10">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>

                {/* TEXT SIDE */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed text-[17px]">
                    {section.content}
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[400px]">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-tr ${section.blobColor} shadow-2xl opacity-40 m-auto`}
                    animate={{
                      borderRadius: isEven
                        ? ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                        : ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: '80%', height: '80%' }}
                  />
                  <motion.div
                    animate={{ y: [0, isEven ? -15 : -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-full h-full p-4"
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-contain drop-shadow-2xl scale-110"
                    />
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* =========================================
          OUR PROGRAMS SECTION (GRID LAYOUT)
      ========================================= */}
      <section className="relative w-full bg-indigo-50 py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ffffff" />

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Programs</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We offer specialized programs tailored for every crucial stage of your child's early development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-indigo-500 font-black text-xl">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className={`text-xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>{prog.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsSegmented;