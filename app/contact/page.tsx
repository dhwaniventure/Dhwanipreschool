"use client";

import React from "react";
import { motion } from "framer-motion";
import {
   MapPin,
   MessageCircle,
   Send,
   User,
   MessageSquare,
   Globe,
   Smartphone,
   Mail,
   ChevronRight
} from "lucide-react";
import { Fredoka, Quicksand } from 'next/font/google';
import ContactHeader from "@/components/ContactHeader";

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


const ContactPage: React.FC = () => {
   return (
      <div className={`w-full flex flex-col ${bodyFont.className}`}>
         <ContactHeader />

         {/* =========================================
             SECTION 1: MAP & WHATSAPP
         ========================================= */}
         <section className="w-full bg-white py-20 lg:py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
               <div className="flex flex-col lg:flex-row gap-16 items-center">

                  {/* LEFT: Google Map */}
                  <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
                     <motion.div
                        animate={{
                           borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-tr from-sky-300 to-indigo-300 opacity-40 m-auto"
                        style={{ width: '90%', height: '90%' }}
                     />
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
                     >
                        <iframe
                           src="https://maps.google.com/maps?width=600&height=400&hl=en&q=pitampura%20delhi&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen={true}
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           className="grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                        ></iframe>
                        {/* Floating Location Pin Overlay */}
                        <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
                           <MapPin className="w-8 h-8 text-rose-500" />
                        </div>
                     </motion.div>
                  </div>

                  {/* RIGHT: WhatsApp CTA */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                     <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                     >
                        <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm bg-emerald-50 px-4 py-2 rounded-full mb-4 inline-block">
                           Quick Chat
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight ${titleFont.className}`}>
                           Questions? <br />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Chat with us!</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
                           Prefer instant messaging? Connect with our admissions team directly on WhatsApp for quick answers regarding fees, availability, and campus tours.
                        </p>

                        <button
                           onClick={() => window.open('https://wa.me/919999996266', '_blank')}
                           className="group flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-200 transition-all hover:-translate-y-1"
                        >
                           <MessageCircle className="w-6 h-6 fill-white" />
                           Chat on WhatsApp
                        </button>

                        <p className="mt-4 text-sm text-slate-400 font-semibold">
                           *Available Mon-Sat, 9am - 6pm
                        </p>
                     </motion.div>
                  </div>

               </div>
            </div>
         </section>

         {/* =========================================
             SECTION 2: CONTACT CARDS
         ========================================= */}
         <section className="relative w-full bg-slate-50 py-24 overflow-hidden">
            <ElegantEdge position="top" fillColor="#ffffff" />

            <div className="container mx-auto px-6 relative z-10 pt-10">
               <div className="text-center mb-16">
                  <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
                     Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Contact Info</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: Address */}
                  <motion.div
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center group transition-all hover:shadow-xl"
                  >
                     <div className="w-16 h-16 bg-rose-50 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-rose-100 transition-all">
                        <MapPin className="w-8 h-8 text-rose-500" />
                     </div>
                     <h3 className={`text-xl font-bold text-slate-800 mb-2 ${titleFont.className}`}>Visit Us</h3>
                     <p className="text-slate-600 font-medium">
                        Corporate Office: Pitampura, Delhi<br />
                     </p>
                  </motion.div>

                  {/* Card 2: Phone */}
                  <motion.div
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center group transition-all hover:shadow-xl"
                  >
                     <div className="w-16 h-16 bg-amber-50 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                        <Smartphone className="w-8 h-8 text-amber-500" />
                     </div>
                     <h3 className={`text-xl font-bold text-slate-800 mb-2 ${titleFont.className}`}>Call Us</h3>
                     <p className="text-slate-600 font-medium">
                        +91 9999996266<br />
                     </p>
                  </motion.div>

                  {/* Card 3: Email */}
                  <motion.div
                     whileHover={{ y: -10 }}
                     className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center group transition-all hover:shadow-xl"
                  >
                     <div className="w-16 h-16 bg-sky-50 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                        <Mail className="w-8 h-8 text-sky-500" />
                     </div>
                     <h3 className={`text-xl font-bold text-slate-800 mb-2 ${titleFont.className}`}>Email Us</h3>
                     <p className="text-slate-600 font-medium break-words">
                        info@littledreamersatcambridge.com
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>


         {/* =========================================
             SECTION 3: MESSAGE FORM
         ========================================= */}
         <section className="relative w-full bg-indigo-50 py-24 pb-32 overflow-hidden">
            <ElegantEdge position="top" fillColor="#f8fafc" /> {/* matches slate-50 */}

            <div className="container mx-auto px-6 relative z-10 pt-10">
               <div className="text-center mb-12">
                  <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
                     Send a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Message</span>
                  </h2>
                  <p className="text-slate-600 text-lg">
                     Drop us a line and we'll get back to you within 24 hours.
                  </p>
               </div>

               {/* FORM CARD */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative"
               >
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                     <Send className="w-8 h-8 text-white pr-1 pb-1" />
                  </div>

                  <form className="flex flex-col gap-6">

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                           <label className="font-bold text-slate-700 ml-2">Your Name</label>
                           <div className="relative group">
                              <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-rose-400 transition-colors" />
                              <input type="text" placeholder="John Doe" className="w-full bg-white border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-all" />
                           </div>
                        </div>

                        <div className="flex flex-col gap-2">
                           <label className="font-bold text-slate-700 ml-2">Email Address</label>
                           <div className="relative group">
                              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-rose-400 transition-colors" />
                              <input type="email" placeholder="john@example.com" className="w-full bg-white border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-all" />
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-2">
                        <label className="font-bold text-slate-700 ml-2">Subject</label>
                        <div className="relative group">
                           <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-rose-400 transition-colors" />
                           <input type="text" placeholder="e.g. Admission Inquiry" className="w-full bg-white border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-all" />
                        </div>
                     </div>

                     <div className="flex flex-col gap-2">
                        <label className="font-bold text-slate-700 ml-2">Your Message</label>
                        <div className="relative group">
                           <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-rose-400 transition-colors" />
                           <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-all resize-none" />
                        </div>
                     </div>

                     <div className="mt-4">
                        <button type="button" className="w-full bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                           Send Message
                           <ChevronRight className="w-5 h-5" />
                        </button>
                     </div>

                  </form>
               </motion.div>

            </div>
         </section>
      </div>
   );
};

export default ContactPage;