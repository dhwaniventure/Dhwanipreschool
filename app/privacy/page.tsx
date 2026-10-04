"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fredoka, Quicksand } from 'next/font/google';
import LegalHeader from "@/components/LegalHeader";
import { Shield, Eye, Lock, Server, Share2, Mail } from "lucide-react";

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
const privacySections = [
   {
      icon: <Eye className="w-6 h-6 text-indigo-500" />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us when you fill out enrollment forms, contact us via our website, or interact with our staff. This may include personal details such as your name, email address, phone number, your child's name, age, and medical history necessary for their safety at our preschool."
   },
   {
      icon: <Server className="w-6 h-6 text-sky-500" />,
      title: "How We Use Your Information",
      content: "The information we collect is used primarily to provide a safe, nurturing, and effective educational environment for your child. We use your contact details to send important updates, newsletters, emergency notifications, and administrative information regarding admissions and fees."
   },
   {
      icon: <Share2 className="w-6 h-6 text-rose-500" />,
      title: "Information Sharing and Disclosure",
      content: "Dhwani Cambridge Montessori Pre School respects your privacy. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
   },
   {
      icon: <Lock className="w-6 h-6 text-emerald-500" />,
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Physical records are kept in secure locations, and digital data is protected by industry-standard encryption and access controls. Only authorized personnel have access to sensitive information."
   },
   {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: "Your Rights",
      content: "You have the right to access, update, or request deletion of your personal information at any time. If you wish to review the data we hold about you or your child, please contact our administration office."
   }
];

const PrivacyPolicyPage = () => {
   return (
      <div className={`w-full flex flex-col bg-slate-50 min-h-screen ${bodyFont.className}`}>

         <LegalHeader
            title="Privacy Policy"
            subtitle="Your trust is important to us. Learn how we collect, use, and protect your information."
            icon="privacy"
         />

         <section className="py-20 md:py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">

               <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
                  <div className="mb-12 border-b border-slate-100 pb-8 text-center">
                     <h2 className={`text-3xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>Our Commitment to Privacy</h2>
                     <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        At Dhwani Cambridge Montessori Pre School, we are committed to protecting the privacy and security of our students, parents, and website visitors. This policy outlines our practices.
                     </p>
                  </div>

                  <div className="space-y-12">
                     {privacySections.map((section, index) => (
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
                     <h3 className={`text-xl font-bold text-slate-800 mb-2 ${titleFont.className}`}>Contacting Us</h3>
                     <p className="text-slate-600 mb-4">If there are any questions regarding this privacy policy, you may contact us using the information below.</p>
                     <a href="mailto:info@dhwanicambridge.com" className="inline-flex items-center gap-2 text-indigo-500 font-bold hover:text-indigo-600 transition-colors">
                        <Mail className="w-5 h-5" />
                        info@dhwanicambridge.com
                     </a>
                  </div>

               </div>
            </div>
         </section>

      </div>
   );
};

export default PrivacyPolicyPage;