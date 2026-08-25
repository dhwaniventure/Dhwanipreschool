"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fredoka, Quicksand } from 'next/font/google';
import LegalHeader from "@/components/LegalHeader";
import { FileText, CheckCircle, AlertCircle, BookOpen, Clock, HeartHandshake } from "lucide-react";

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

// --- DATA ---
const termsSections = [
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
    title: "1. Acceptance of Terms",
    content: "By enrolling your child at Dhwani Cambridge Montessori Pre School, accessing our website, or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
    title: "2. Admissions and Enrollment",
    content: "Admission to our programs is subject to availability and the fulfillment of our enrollment criteria. We reserve the right to accept or decline any application at our discretion. All provided information during enrollment must be accurate and up to date."
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-500" />,
    title: "3. Timings and Attendance",
    content: "Parents are expected to adhere strictly to drop-off and pick-up timings. Regular attendance is crucial for a child's consistent development. Please notify the administration in advance in case of planned absences or sickness."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-orange-500" />,
    title: "4. Health and Safety Policy",
    content: "The safety of our students is our highest priority. Children suffering from contagious illnesses must be kept at home until fully recovered. The school must be informed immediately of any allergies or medical conditions."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
    title: "5. Fee Structure and Payments",
    content: "All tuition and associated fees must be paid in advance according to the fee schedule provided at the time of admission. Fees are non-refundable except in circumstances explicitly stated in our withdrawal policy."
  }
];

const TermsAndConditionsPage = () => {
  return (
    <div className={`w-full flex flex-col bg-slate-50 min-h-screen ${bodyFont.className}`}>
      
      <LegalHeader 
         title="Terms & Conditions" 
         subtitle="Please read these terms carefully before enrolling or using our services." 
         icon="terms"
      />

      <section className="py-20 md:py-24 px-6 relative z-10">
         <div className="max-w-4xl mx-auto">
            
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
               <div className="mb-12 border-b border-slate-100 pb-8 text-center">
                  <h2 className={`text-3xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>General Terms of Service</h2>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                     These Terms and Conditions govern your relationship with Dhwani Cambridge Montessori Pre School. They ensure a safe, organized, and mutually respectful environment for our students, parents, and staff.
                  </p>
               </div>

               <div className="space-y-12">
                  {termsSections.map((section, index) => (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6"
                     >
                        <div className="shrink-0 mt-1">
                           <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                              {section.icon}
                           </div>
                        </div>
                        <div>
                           <h3 className={`text-xl font-bold text-slate-800 mb-3 ${titleFont.className}`}>
                              {section.title}
                           </h3>
                           <p className="text-slate-600 leading-relaxed">
                              {section.content}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               <div className="mt-16 pt-8 border-t border-slate-100 bg-slate-50 rounded-2xl p-6 text-center">
                  <p className="text-slate-600 text-sm">
                     Dhwani Cambridge Montessori Pre School reserves the right to modify these Terms and Conditions at any time. Changes will be communicated to parents via official channels.
                  </p>
               </div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default TermsAndConditionsPage;
