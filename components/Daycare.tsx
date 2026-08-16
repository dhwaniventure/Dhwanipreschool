"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  HeartPulse,
  Share2,
  ShieldCheck,
  Heart,
  GraduationCap
} from "lucide-react";
import Image from "next/image";
// Using the boy image as it fits the center image layout well
import childImage from "../public/boywithbrush.png";
import { Fredoka, Quicksand, Kalam } from 'next/font/google';

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

interface USPItemProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  colorClass: string;
  textColorClass: string;
  align: 'left' | 'right';
  delay: number;
}

const USPItem: React.FC<USPItemProps> = ({ title, text, icon, colorClass, textColorClass, align, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col md:flex-row gap-5 ${align === 'right' ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'} items-center md:items-start`}
    >
      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white ${colorClass} shadow-lg relative group cursor-pointer hover:scale-110 transition-transform duration-300`}>
        {/* Inner white ring for styling */}
        <div className="absolute inset-1 border-2 border-white/30 rounded-full"></div>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className={`text-2xl font-bold mb-3 ${textColorClass} ${titleFont.className}`}>
          {title}
        </h3>

        {/* Custom Underline */}
        <div className={`w-12 h-1 bg-gradient-to-r from-slate-200 to-transparent mb-4 rounded-full ${align === 'right' ? 'md:ml-auto md:bg-gradient-to-l' : 'mx-auto md:mx-0'}`}></div>

        <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
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

const USPSection = () => {
  return (
    <section className={`py-24 relative overflow-hidden bg-[#F9F5FF] ${bodyFont.className}`}>
      <ElegantEdge position="top" fillColor="#ffffff" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-5xl md:text-6xl text-slate-800 font-bold mb-4 ${titleFont.className}`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">USP</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-amber-400"></div>
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              <div className="w-12 h-0.5 bg-amber-400"></div>
            </div>
          </motion.div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

          {/* Left Column (3 USPs) */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            <USPItem
              title="Montessori Environment"
              text="The environment at our schools provides stimulating learning experiences designed to respond to each individual's unique characteristics and learning styles, helping them reach their full potential."
              icon={<BookOpen size={28} />}
              colorClass="bg-purple-400"
              textColorClass="text-purple-500"
              align="left"
              delay={0.1}
            />
            <USPItem
              title="Health & Hygiene"
              text="We follow strict hygiene standards. Our schools maintain a high level of cleanliness, and every center adheres to standard protocols to ensure a clean environment and sanitary objects."
              icon={<HeartPulse size={28} />}
              colorClass="bg-emerald-400"
              textColorClass="text-emerald-500"
              align="left"
              delay={0.3}
            />
            <USPItem
              title="Different Approach"
              text="With our unique teaching methods, children are encouraged to learn by touching, feeling, and doing. They gain a concrete understanding of materials, which fosters a sense of ownership and leadership."
              icon={<Share2 size={28} />}
              colorClass="bg-amber-400"
              textColorClass="text-amber-500"
              align="left"
              delay={0.5}
            />
          </div>

          {/* Center Column (Image) */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Decorative morphing background behind image */}
            <motion.div
              className="absolute inset-0 bg-sky-100 rounded-full -z-10 opacity-70"
              animate={{
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: '80%', height: '80%', margin: 'auto' }}
            />

            <Image
              src={childImage}
              alt="Happy learning child"
              className="object-contain drop-shadow-2xl z-10 w-3/4 lg:w-full max-w-sm"
              priority
            />

            {/* Some floating decorative elements around image could go here */}
          </motion.div>

          {/* Right Column (3 USPs) */}
          <div className="flex flex-col gap-12 order-3 lg:order-3">
            <USPItem
              title="Safety & Security"
              text="Given the tender age of our students, child safety and security are a top priority for us. Our services include 24-hour CCTV access, live GPS tracking, RFID installation, and robust security measures."
              icon={<ShieldCheck size={28} />}
              colorClass="bg-rose-500"
              textColorClass="text-rose-500"
              align="right"
              delay={0.2}
            />
            <USPItem
              title="Nurturing & Caring Environment"
              text="Our students benefit from an engaging learning environment, intrinsically interesting materials, and age-appropriate developmental activities that enhance their creativity, thinking skills, and language abilities."
              icon={<Heart size={28} />}
              colorClass="bg-indigo-400"
              textColorClass="text-indigo-500"
              align="right"
              delay={0.4}
            />
            <USPItem
              title="Well Qualified Teachers"
              text="Our teachers are highly qualified and receive ongoing training, workshops, and assessments to ensure their proficiency. This enables them to handle challenges effectively and provide necessary expertise."
              icon={<GraduationCap size={28} />}
              colorClass="bg-sky-400"
              textColorClass="text-sky-500"
              align="right"
              delay={0.6}
            />
          </div>

        </div>
      </div>

      <ElegantEdge position="bottom" />
    </section>
  );
};

export default USPSection;