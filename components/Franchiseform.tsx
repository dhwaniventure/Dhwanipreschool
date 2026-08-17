"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import Image from "next/image";
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
  FileText
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


const carouselImages = [
  '/gallery1.jpeg',
  '/gallery2.jpeg',
  '/gallery3.jpeg',
  '/gallery4.jpeg',
  '/gallery5.jpeg'
];

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
    <header className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-32 md:py-0">
      
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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-0 mix-blend-multiply"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent z-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 mb-6 shadow-xl flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Dhwani Cambridge Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>

        {/* Breadcrumb Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-black/40 px-5 py-2 rounded-full mb-6 shadow-sm"
        >
          <Home className="w-4 h-4 text-emerald-200" />
          <span className="text-white font-bold text-sm hover:text-emerald-200 transition-colors cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4 text-white/50" />
          <span className="text-white font-bold text-sm">Franchise</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ${titleFont.className}`}
        >
          Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Success</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto"
        >
          Join the Little Dreamers family with our <span className="text-emerald-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">Zero Royalty Model</span> and build a profitable future in education.
        </motion.p>
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
            style={{ fill: "#ecfdf5" }}
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
      <section className="relative w-full bg-emerald-50 pt-16 pb-32 overflow-hidden">
        <ElegantEdge position="top" fillColor="#f8fafc" />
        
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
          SECTION 2: BUSINESS OPPORTUNITY
      ========================================= */}
      <section className="relative w-full bg-white py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ecfdf5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              The Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Opportunity</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-12"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                The early childhood education sector in India is growing at an unprecedented rate. With increasing awareness among parents about the importance of foundational learning, the demand for quality preschools is higher than ever.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                By partnering with us, you are not just starting a business; you are becoming part of a recession-free industry that yields high returns on investment while making a lasting impact on society.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <TrendingUp className="w-8 h-8 text-emerald-500 mb-3" />
                  <h4 className="font-bold text-slate-800 text-xl mb-1">High ROI</h4>
                  <p className="text-sm text-slate-500">Quick breakeven and sustainable margins.</p>
                </div>
                <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                  <Users className="w-8 h-8 text-teal-500 mb-3" />
                  <h4 className="font-bold text-slate-800 text-xl mb-1">Growing Market</h4>
                  <p className="text-sm text-slate-500">Constant demand for quality early education.</p>
                </div>
              </div>
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
                 <div className="w-full max-w-sm aspect-square bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl flex items-center justify-center">
                    <TrendingUp className="w-32 h-32 text-emerald-600 opacity-80" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: BENEFITS
      ========================================= */}
      <section className="relative w-full bg-slate-50 py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ffffff" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 mt-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Why <span className="text-emerald-500">Franchise</span> With Us?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Zero Royalty Model", desc: "100% profit retention for franchise partners. No recurring royalty fees.", icon: DollarSign },
              { title: "100% Daycare Revenue", desc: "Enjoy full earnings from daycare operations, adding a consistent monthly income.", icon: Users },
              { title: "Complete Setup Support", desc: "End-to-end guidance from property selection to interiors and branding.", icon: Building2 },
              { title: "Marketing Assistance", desc: "Centralized digital marketing, lead generation, and promotional support.", icon: Award },
              { title: "Proven Curriculum", desc: "Scientifically designed curriculum blending experiential and value-based learning.", icon: CheckCircle },
              { title: "Comprehensive Training", desc: "Step-by-step support for academic planning and daily center management.", icon: Star },
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
                Franchise <span className="text-teal-500">Requirements</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Space Requirement", desc: "Minimum 1500 - 2500 sq. ft. of built-up area on the ground floor with open play area." },
                  { title: "Initial Investment", desc: "Estimated investment ranges from ₹5 Lakhs to ₹7 Lakhs depending on the model chosen." },
                  { title: "Passion for Education", desc: "A strong desire to shape young minds and commitment to maintaining quality standards." },
                  { title: "Local Presence", desc: "Good understanding of the local community and ability to dedicate time to the venture." }
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

            <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[450px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-teal-300 to-emerald-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
               <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                 <div className="w-full max-w-sm aspect-square bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl flex items-center justify-center">
                    <Building2 className="w-32 h-32 text-teal-600 opacity-80" />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: DOWNLOAD BROCHURES
      ========================================= */}
      <section className="relative w-full bg-emerald-50 py-24 overflow-hidden">
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

    </div>
  );
}