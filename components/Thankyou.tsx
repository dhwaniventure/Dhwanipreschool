"use client"
import React from 'react';
import MegaDiagnosticsNavbar from '@/app/navbar/navbar';
import { Fredoka, Quicksand } from 'next/font/google';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

function ThankYouPage() {
  return (
    <div className={`w-full flex flex-col min-h-screen bg-indigo-50 relative overflow-hidden ${bodyFont.className}`}>
      <MegaDiagnosticsNavbar />
      
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0"></div>

      <div className="flex-grow flex items-center justify-center relative z-10 px-4 py-20 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white text-center"
        >
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
            <div className="absolute inset-0 rounded-full border-4 border-green-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
            Thank You!
          </h1>
          
          <p className="text-xl text-slate-600 mb-2 font-medium">
            Your message has been received successfully.
          </p>
          <p className="text-lg text-slate-500 mb-10">
            Our team will review it and connect with you very soon.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-10"></div>

          <div className="bg-slate-50/50 rounded-3xl p-8 border-2 border-slate-100 mb-8">
            <h3 className={`text-xl font-bold text-slate-700 mb-3 ${titleFont.className}`}>Need Urgent Support?</h3>
            <p className="text-slate-500 mb-6 text-sm">
              If you have something urgent, feel free to reach out to us directly on WhatsApp.
            </p>
            
            <a 
              href="https://wa.me/919351411126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp: +91 935 141 1126
            </a>
          </div>

          <Link href="/">
            <button className="text-indigo-500 font-bold hover:text-indigo-600 transition-colors underline-offset-4 hover:underline">
              &larr; Back to Home
            </button>
          </Link>

        </motion.div>
      </div>
    </div>
  );
}

export default ThankYouPage;