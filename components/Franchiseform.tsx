"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import Image from "next/image";
import boyandgirlimage from "@/public/miaandleoforthankyoupage.png"

import orangebanner from "@/public/orange_cultivating_knowledge.png";
import rosebanner from "@/public/pink_montessori.png";
import skybanner from "@/public/green_empowering_knowledge.png";
import {
  Home,
  User,
  Mail,
  Phone,
  Building2,
  ChevronRight,
  Send,
  Loader2,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  DollarSign,
  Download,
  Star,
  MapPin,
  FileText,
  Plus,
  Minus,
  BookOpen,
  Clock,
  Sparkles,
  Search,
  School,
  Smile,
  ShieldCheck,
  MessageCircle
} from "lucide-react";
import { Fredoka, Quicksand } from 'next/font/google';

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
const ElegantEdge = ({ position, fillColor = "#b2f5ea " }: { position: "top" | "bottom", fillColor?: string }) => {
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


const carouselImages = [
  orangebanner,
  rosebanner,
  skybanner
];

type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber';

const themeColors: ThemeColor[] = ['rose', 'sky', 'purple', 'teal', 'amber'];

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

const FAQItem = ({ item, index, isOpen, onClick }: { item: any, index: number, isOpen: boolean, onClick: () => void }) => {
  const themeKey: ThemeColor = themeColors[index % themeColors.length] || 'rose';
  const theme = getThemeStyles(themeKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 5) * 0.05 }}
      className={`
        w-full mb-4 rounded-[30px] border-2 bg-white overflow-hidden transition-all duration-300
        ${isOpen ? `${theme.activeBorder} shadow-lg` : `${theme.border} shadow-sm hover:shadow-md`}
      `}
    >
      <button
        onClick={onClick}
        type="button"
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

const franchiseFaqData = [
  { question: "What is the investment required to start a Dhawni Cambridge Montessori franchise?", answer: "The initial setup investment starts at approximately ₹10–12 lakhs and may vary depending on the city, location, property size, and infrastructure requirements. In certain locations, the total investment may extend up to ₹1 crore.", icon: DollarSign },
  { question: "When is the franchise fee payable?", answer: "The franchise fee is payable upfront at the time of signing the franchise agreement.", icon: FileText },
  { question: "Is it necessary to own the property?", answer: "No. The preschool can be established on either an owned or leased property. The location, property size, and premises are subject to approval by the Operations Team.", icon: Home },
  { question: "How much space is required?", answer: "A minimum area of approximately 3,500 sq.ft. is required for the Montessori setup, with requirements potentially extending up to 10,000 sq. ft., depending on the centre and location.", icon: MapPin },
  { question: "Is any specific educational qualification required?", answer: "No specific educational qualification is mandatory. The preschool is supported by an experienced academic team. However, franchise partners should have a strong commitment to quality education, good interpersonal skills, and sound business acumen.", icon: Award },
  { question: "Can an existing preschool be converted into a Dhawni Cambridge Montessori centre?", answer: "Yes, subject to an assessment of the existing infrastructure, premises, location, size, and human resources by the relevant audit team.", icon: Building2 },
  { question: "What support is provided for HR, operations, and training?", answer: "Franchisees receive detailed Academic and Operational Manuals and follow established Standard Operating Procedures (SOPs). Support includes HR and recruitment assistance, faculty training, and periodic third-party training audits.", icon: Users },
  { question: "Where is teacher training conducted?", answer: "Teacher training is generally conducted at the respective centre. Where necessary, training may be arranged at the nearest centre or designated corporate training facility.", icon: BookOpen },
  { question: "What is the tenure of the franchise agreement?", answer: "The franchise agreement is generally valid for 5 or 10 years, depending on the business model and investment structure agreed upon at the time of signing. Renewal is subject to a review of the franchise centre and mutual agreement.", icon: FileText },
  { question: "How long does it take to set up the preschool?", answer: "The typical setup period is approximately 30–45 days. The timeline may vary depending on property identification, surveys, approvals, and other location-specific requirements.", icon: Clock },
  { question: "Is assistance provided for infrastructure and design?", answer: "Yes. The Operations and Design Teams can provide infrastructure planning and design support. Assistance from external agencies, contractors, or interior teams, where required, may involve additional costs.", icon: Briefcase },
  { question: "How are preschool fees determined?", answer: "Fees are recommended based on factors such as local market conditions, competition, infrastructure, and educational offerings. The Operations Team provides inputs, and the final fee structure is determined through mutual discussion.", icon: DollarSign },
  { question: "What marketing and branding support is provided?", answer: "Dhawni Cambridge Montessori provides extensive national and international marketing support across print, video, ATL, BTL, social media, SEO, and digital advertising. Franchise partners also receive promotional materials and guidance for local marketing and brand visibility.", icon: TrendingUp },
  { question: "Is there a royalty fee?", answer: "No separate royalty fee is charged. The business model follows a kit-based pricing structure. Kit pricing is determined based on factors such as the city tier and gross fee structure, with pricing finalised during the initial agreement.", icon: DollarSign },
  { question: "Can school materials be purchased locally?", answer: "The procurement process depends on the type of material. Certain specialized educational materials are sourced through approved company vendors, while infrastructure-related items may be purchased locally based on recommendations from the Operations Team.", icon: CheckCircle }
];

const FranchiseFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <ElegantEdge position="top" fillColor="#eef2ff" />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 -left-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 mt-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-12"></div>
        </div>

        <div className="flex flex-col">
          {franchiseFaqData.map((item, index) => (
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

// --- HEADER COMPONENT ---
const FranchiseHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative mt-[140px] md:mt-[160px] w-full h-[5vh] md:h-[50vh] lg:h-[60vh] min-h-[75px] md:min-h-[400px] flex items-center justify-center overflow-hidden  md:pt-28 pb-32 md:py-0 ${bodyFont.className}`}>

      {/* --- BACKGROUND CAROUSEL --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentImageIndex] || '/gallery1.jpeg'}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="absolute z-30 bottom-0 left-0 w-full flex justify-center pb-4 md:pb-8 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="w-12 h-12 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center pointer-events-auto"
          >
            <Image
              src="/logo.png"
              alt="Dhwani Montessori Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* --- ELEGANT EDGE DIVIDER (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-20 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#ECFDF5" }}
          ></path>
        </svg>
      </div>

    </header>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {

  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property"
    },
  });

  const { register, formState: { errors } } = form;

  const onSubmit = (data: FranchiseFormSchemaType) => {
    // Pass the fully gathered data to the parent handler
    onHandleSubmit(data);
  };

  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>

      <FranchiseHeader />

      {/* =========================================
          SECTION 1: FRANCHISE FORM (Modern Glassmorphism)
      ========================================= */}
      <section className="relative  w-full bg-emerald-50 pt-16 pb-32 overflow-hidden">

        {/* Background Blobs */}
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 translate-x-1/3"></div>

        <div className="mx-auto px-6 relative z-10">
          <div className="text-center mb-12 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Start Your Journey
            </h2>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Fill out the form below to connect with our franchise team and get detailed information.
            </p>
          </div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white relative"
          >
            <div className="absolute -top-10 -right-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce-slow shadow-sm border-4 border-white">
              <Briefcase className="w-8 h-8 text-emerald-600" />
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Full Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Your name"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="Your Number"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Email Address <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="email@example.com"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* City */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">City / Location <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="e.g. Mumbai, Andheri West"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all ${errors.city ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Investment Budget</label>
                <div className="relative group">
                  <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors z-10" />
                  <select
                    {...register("budget")}
                    disabled={isLoading}
                    className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-10 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                    <option value="Montessori (6-7 lakh)">Montessori (6-7 lakh)</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-emerald-500" />
                </div>
              </div>

              {/* Property */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Do you own property?</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors z-10" />
                  <select
                    {...register("property")}
                    disabled={isLoading}
                    className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-10 text-slate-700 focus:outline-none focus:border-emerald-400 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="Yes, I own commercial property">Yes, I own commercial property</option>
                    <option value="No, I will rent/lease">No, I will rent/lease</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-emerald-500" />
                </div>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg ${isLoading ? 'opacity-70 cursor-not-allowed hover:translate-y-0 hover:shadow-lg' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Franchise Details
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: WHY CHOOSE DHAWNI
      ========================================= */}
      <section className="relative w-full bg-white py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ecfdf5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Dhawni Cambridge Montessori</span> Preschool Franchise?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-12"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                Dhawni Cambridge Montessori Preschool combines international Montessori principles with a practical and scalable preschool franchise model designed for the growing early education sector in India.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our child-focused approach creates a nurturing environment where children develop independence, confidence, creativity, critical thinking, and essential life skills. The learning ecosystem is strengthened by Montessori experts, trained educators, professional trainers, and meaningful parent engagement.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                For franchise partners, Dhawni Cambridge Montessori offers a cost-effective and structured business model with professional guidance and an established educational framework. The relatively low investment and efficient operational structure make it an attractive opportunity for aspiring entrepreneurs seeking to enter the preschool education sector.
              </p>
              <p className="text-emerald-600 font-bold italic text-lg mt-4">
                Dhawni Cambridge Montessori — nurturing young minds while creating opportunities for sustainable growth.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[400px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-emerald-300 to-teal-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                <div className="w-full max-w-sm aspect-square bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl flex items-center justify-center p-8 text-center">
                  <div>
                    <TrendingUp className="w-16 h-16 text-emerald-600 opacity-80 mx-auto mb-4" />
                    <h3 className="font-bold text-slate-800 text-xl mb-2">Preschool Franchise in India</h3>
                    <p className="text-slate-600 text-sm">Combines educational purpose with entrepreneurial opportunity. Focuses on physical, cognitive, social, and emotional development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: BENEFITS & SUPPORT ECOSYSTEM
      ========================================= */}
      <section className="relative w-full bg-slate-50 py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ffffff" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              A Complete Support Ecosystem for <span className="text-emerald-500">Franchise Success</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Dhawni Cambridge Montessori provides franchise partners with a comprehensive support system designed to make preschool operations simpler, more efficient, and growth-oriented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Operational Excellence", desc: "Comprehensive management, academic, accounting, security, and day-to-day operational support.", icon: Building2 },
              { title: "People & Training", desc: "Assistance with recruiting qualified talent and continuous teacher training to uphold educational standards.", icon: Users },
              { title: "Technology-Driven Management", desc: "Customised school management software, CCTV surveillance, live monitoring, and app-based parent-teacher communication.", icon: TrendingUp },
              { title: "Marketing & Brand Building", desc: "National-level marketing initiatives supported by local marketing opportunities for individual franchise centres.", icon: Award },
              { title: "Expert Guidance", desc: "Access to an experienced management and academic team for continuous professional assistance.", icon: CheckCircle },
              { title: "Value-Added Programs", desc: "Specialised offerings such as Mind Lab and daycare programs help create a broader early-learning experience.", icon: Star },
              { title: "End-to-End Partnership", desc: "From planning and setup to daily operations and ongoing growth, receive hands-on guidance from the Head Office.", icon: CheckCircle },
              { title: "Key Advantages", desc: "Low-investment model, international Montessori guidance, established brand, and long-term business growth potential with 40%-50% ROI.", icon: DollarSign },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`text-xl font-bold text-slate-800 mb-3 ${bodyFont.className}`}>{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: REQUIREMENTS
      ========================================= */}
      <section className="relative w-full bg-white py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#f8fafc" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
                Franchise <span className="text-teal-500">Requirements & Support</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Space Requirement", desc: "A minimum property area of 3,500 sq. ft., with the flexibility to extend up to 10,000 sq. ft., located in a well-connected residential or commercial area with a safe and low-pollution environment." },
                  { title: "Investment", desc: "The estimated initial investment starts from ₹10–12 lakhs, covering franchise fees and basic setup requirements. The overall investment may reach up to ₹1 crore in certain cities." },
                  { title: "Property", desc: "The preschool can be established on either an owned or leased property, subject to approval from the operations team." },
                  { title: "Experience", desc: "No prior preschool or business experience is mandatory. However, partners should demonstrate a genuine commitment to quality education and strong interpersonal skills." },
                  { title: "Training & Support", desc: "Franchisees and staff receive comprehensive training, supported by operational guidelines, manuals, and ongoing guidance from experienced Montessori professionals." },
                  { title: "Franchise Agreement", desc: "The standard franchise agreement is generally valid for five years, with an option for renewal for an additional term, subject to the applicable terms and conditions." }
                ].map((req, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="mt-1 shrink-0">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold text-slate-800 mb-1 ${bodyFont.className}`}>{req.title}</h3>
                      <p className="text-slate-600 text-sm md:text-base">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[550px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-teal-300 to-emerald-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <div className="relative z-10 w-full h-full p-16 flex items-center justify-center">

                <Image alt="boyandgirl" src={boyandgirlimage}></Image>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: DOWNLOAD BROCHURES
      ========================================= */}
      <section className="relative w-full bg-indigo-50 py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ffffff" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Download <span className="text-emerald-500">Brochures</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Get detailed insights into our franchise models, curriculum, and support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Brochure 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-6 shadow-lg border border-emerald-100 flex flex-col items-center text-center group"
            >
              <div className="w-32 h-40 bg-emerald-100 rounded-xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden group-hover:shadow-emerald-200/50 transition-all">
                <FileText className="w-16 h-16 text-emerald-400 opacity-50 absolute" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/10"></div>
                <div className="relative z-10 bg-white p-2 rounded-lg shadow-sm">
                  <FileText className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
              <h3 className={`text-xl font-bold text-slate-800 mb-2 ${bodyFont.className}`}>Franchise Prospectus</h3>
              <p className="text-slate-500 text-sm mb-6">Complete guide covering investment, returns, and support structure.</p>

              <a
                href="/brochures/franchise-prospectus.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg w-full justify-center"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </motion.div>

            {/* Brochure 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-6 shadow-lg border border-teal-100 flex flex-col items-center text-center group"
            >
              <div className="w-32 h-40 bg-teal-100 rounded-xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden group-hover:shadow-teal-200/50 transition-all">
                <FileText className="w-16 h-16 text-teal-400 opacity-50 absolute" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-500/10"></div>
                <div className="relative z-10 bg-white p-2 rounded-lg shadow-sm">
                  <FileText className="w-10 h-10 text-teal-600" />
                </div>
              </div>
              <h3 className={`text-xl font-bold text-slate-800 mb-2 ${bodyFont.className}`}>Curriculum Overview</h3>
              <p className="text-slate-500 text-sm mb-6">Explore our international standard Montessori curriculum details.</p>

              <a
                href="/brochures/curriculum-overview.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg w-full justify-center"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <FranchiseFAQSection />

    </div>
  );
}