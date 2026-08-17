"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Send,
  Heart,
  ArrowRight,
  Youtube,
  Globe,
  Star
} from "lucide-react";
import { Fredoka, Quicksand, Kalam } from 'next/font/google';

import logo from "../public/logo.png";

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

const SocialIcon = ({ href, icon, bg }: { href: string, icon: React.ReactNode, bg: string }) => (
  <Link target="_blank" href={href}>
    <motion.button
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`w-12 h-12 rounded-2xl ${bg} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-white/50`}
    >
      {icon}
    </motion.button>
  </Link>
);

// --- REUSABLE EDGE COMPONENT ---
const ElegantEdge = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-20 pointer-events-none ${position === "top" ? "top-0 -mt-[1px]" : "bottom-0 rotate-180"}`}>
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

const Footer = () => {

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    },
  };

  return (
    <footer className="relative bg-[#FDF8F5] pt-40 pb-10 overflow-hidden text-slate-800">

      {/* Decorative Top Edge */}
      <ElegantEdge position="top" />

      {/* Decorative Background Animations */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Stars */}
      <motion.div animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 text-yellow-400/60 pointer-events-none">
        <Star className="w-16 h-16 fill-current" />
      </motion.div>
      <motion.div animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 right-20 text-rose-400/50 pointer-events-none">
        <Star className="w-24 h-24 fill-current" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl"
      >
        {/* --- MAIN FOOTER COLUMNS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* 1. BRAND / ABOUT */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <div className="relative w-auto h-auto flex items-center justify-center bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src={logo}
                  alt="Dhwani Cambridge Logo"
                  className="w-[180px] h-auto object-contain"
                />
              </div>
            </Link>

            <p className={`${bodyFont.className} text-slate-600 text-base leading-relaxed font-bold max-w-sm`}>
              Creating a foundation for lifelong learning through play, creativity, and exploration in a safe, loving environment at Dhwani Cambridge Montessori Preschool and Day Care.
            </p>

            <div className="flex gap-4">
              <SocialIcon href="https://www.facebook.com/" icon={<Facebook className="w-5 h-5" />} bg="bg-[#1877F2]" />
              <SocialIcon href="https://www.instagram.com/" icon={<Instagram className="w-5 h-5" />} bg="bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f]" />
              <SocialIcon href="https://www.youtube.com/" icon={<Youtube className="w-5 h-5" />} bg="bg-[#FF0000]" />
            </div>
          </motion.div>

          {/* 2. QUICK LINKS */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className={`text-sky-500 text-2xl mb-6 ${titleFont.className} tracking-wide`}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Programs', href: '/#programs' },
                { name: 'Admissions', href: '/admission' },
                { name: 'Franchise', href: '/franchise' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center gap-3 text-slate-600 hover:text-sky-500 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-sky-400 group-hover:scale-150 transition-all"></span>
                    <span className={`${bodyFont.className} font-bold group-hover:translate-x-2 transition-transform duration-300`}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. CONTACT INFO */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className={`text-rose-500 text-2xl mb-6 ${titleFont.className} tracking-wide`}>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <a href="https://www.littledreamersatcambridge.com" target="_blank" rel="noopener noreferrer" className={`mt-1 font-bold text-slate-600 group-hover:text-sky-500 transition-colors max-w-[200px] leading-tight ${bodyFont.className}`}>
                  www.DhwaniCambridge.com
                </a>
              </li>

              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@littledreamersatcambridge.com" className={`font-bold text-slate-600 group-hover:text-rose-500 transition-colors truncate w-[200px] ${bodyFont.className}`}>
                  dhwanipreschool.com
                </a>
              </li>

              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+919999996266" className={`font-bold text-slate-600 group-hover:text-amber-500 transition-colors ${bodyFont.className}`}>
                  +91-999 999 6266
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4. NEWSLETTER */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className={`text-indigo-500 text-2xl mb-6 ${titleFont.className} tracking-wide`}>
              Newsletter
            </h3>
            <p className={`${bodyFont.className} text-sm text-slate-600 mb-5 font-bold leading-relaxed`}>
              Subscribe for updates, parenting tips, and special event invites!
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address..."
                className={`${bodyFont.className} w-full bg-white border-2 border-slate-200 rounded-2xl pl-5 pr-14 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition-colors font-bold shadow-sm`}
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white hover:bg-indigo-400 active:scale-95 transition-all shadow-md">
                <Send className="w-5 h-5 ml-1" />
              </button>
            </div>

            <p className={`${bodyFont.className} mt-4 text-xs font-bold text-slate-500 flex items-center gap-2`}>
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_theme(colors.emerald.400)]"></span>
              We respect your privacy. No spam.
            </p>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className={`${bodyFont.className} text-sm text-slate-500 font-bold flex flex-wrap justify-center items-center gap-1`}>
            © 2026 Dhwani Cambridge Montessori. Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-bounce mx-1" /> by
            <a href="https://saasscale.in/" target="_blank" rel="noreferrer" className={`ml-1 text-indigo-500 hover:text-indigo-600 transition-colors ${handwritingFont.className} text-xl tracking-wide`}>
              Scale saas
            </a>
          </p>
          <div className={`${bodyFont.className} flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest`}>
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>

    </footer>
  );
};

export default Footer;