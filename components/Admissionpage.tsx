"use client";
import React from "react";
import { motion } from "framer-motion";
import Admissionheader from "@/components/AdmissioHeader";
import boysitting from "../public/boysitting.png";
import girlwithbook from "../public/girlwithbook 1.svg";
import boywithelephant from "../public/boywithelephent.png";
import girlonswing from "../public/girlonwing.png";
import boywithcup from "../public/boywithcup.png";
import { EmailFormschemaType } from "@/lib/schema";
import Image from "next/image";
import { IEmaildetail } from "@/lib/types";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Building2,  // Infrastructure
  ChevronRight,
  Loader2,    // Added for loading state
  Star
} from "lucide-react";
import { Fredoka, Quicksand, Kalam } from 'next/font/google';

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

const handwritingFont = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
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


// --- MAIN PAGE COMPONENT ---
export default function AdmissionPage({
  onHandleSubmit,
  defaultEmail,
  isLoading,
}: {
  defaultEmail?: IEmaildetail;
  onHandleSubmit: (data: EmailFormschemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
      email: defaultEmail?.email || "",
      name: defaultEmail?.name,
      phone: defaultEmail?.phone,
      country: defaultEmail?.country,
      city: defaultEmail?.city,
      state: defaultEmail?.state,
      message: defaultEmail?.message,
      admission_seeking: "Little Minds (1-2 Years)" // Set a valid default
    },
  });

  const { register, formState: { errors } } = form;

  const onSubmit = (data: EmailFormschemaType) => {
    // Pass the fully gathered data to the parent handler
    onHandleSubmit(data);
  };

  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>

      <Admissionheader />

      {/* =========================================
          SECTION 1: ENQUIRY FORM 
      ========================================= */}
      <section className="relative w-full bg-indigo-50 pt-16 pb-32 overflow-hidden">


        {/* Background Blobs */}
        {/* <div className="absolute top-30 right-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div> */}
        <div className="absolute bottom-60 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Enquiry Form
            </h2>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Ready to take the first step? Fill out the form below and our admissions team will contact you shortly .
            </p>
          </div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white relative"
          >
            <div className="absolute -top-12 mb-6 -right-6 w-[120px] h-[120px] flex items-center justify-center animate-bounce-slow">
              <Image src={boysitting} alt="Boy Sitting" />
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="John Doe"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Country <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("country", { required: true })}
                    type="text"
                    placeholder="Country"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.country ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="+1 234 567 890"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Email Address <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    type="email"
                    placeholder="example@mail.com"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* City */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">City <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.city ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              {/* State */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">State <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder="State"
                    disabled={isLoading}
                    className={`w-full bg-slate-50/50 border-2 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all ${errors.state ? 'border-red-400' : 'border-slate-200'}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Seeking Admission For</label>
                <div className="relative group">
                  <select
                    {...register("admission_seeking")}
                    disabled={isLoading}
                    className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 px-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="Little Minds (1-2 Years)">Little Minds (1-2 Years)</option>
                    <option value="Little Steps with Mommy (Mom & Me)">Little Steps with Mommy (Mom & Me)</option>
                    <option value="Curious Minds - Playgroup (2-3 Years)">Curious Minds - Playgroup (2-3 Years)</option>
                    <option value="Emerging Learners - Nursery (3-4 Years)">Emerging Learners - Nursery (3-4 Years)</option>
                    <option value="Ready for Tomorrow - LKG (4-5 Years)">Ready for Tomorrow - LKG (4-5 Years)</option>
                    <option value="Future Achievers - UKG (5-6 Years)">Future Achievers - UKG (5-6 Years)</option>
                    <option value="Mind Lab">Mind Lab</option>
                    <option value="Teacher Training">Teacher Training</option>
                    <option value="Daycare">Daycare</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-indigo-500" />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-slate-700 text-sm tracking-wide">Message (Optional)</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Any specific questions?"
                    disabled={isLoading}
                    className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg ${isLoading ? 'opacity-70 cursor-not-allowed hover:translate-y-0 hover:shadow-lg' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
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
          NEW SECTION: WHY DHWANI MONTESSORI
      ========================================= */}
      <section className="relative w-full bg-white py-24 overflow-hidden">
        <ElegantEdge position="top" fillColor="#eef2ff" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Dhawni Cambridge Montessori</span> Preschool & Daycare?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-200 to-transparent mx-auto rounded-full mb-12"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side text */}
            <div className="w-full lg:w-3/5 space-y-6">
              {[
                { title: "A Child-Centred Approach", desc: "Every child learns differently. Our child-centred approach allows children to explore concepts at their own pace while educators provide personalised guidance through individual and small-group learning experiences." },
                { title: "Montessori-Based Learning", desc: "Inspired by the philosophy of Dr Maria Montessori, our learning environment encourages independence, curiosity, concentration, exploration, and hands-on discovery." },
                { title: "Holistic Development", desc: "We nurture every aspect of a child’s development—academic, cognitive, physical, social, emotional, and creative—helping children grow into confident and compassionate learners." },
                { title: "Expert & Passionate Educators", desc: "Our educators bring a strong understanding of early childhood development and participate in continuous professional learning to enhance their teaching practices and support children effectively." },
                { title: "Flexible & Meaningful Curriculum", desc: "Our curriculum combines structure and flexibility, allowing educators to respond to each child’s developmental needs while providing stimulating, age-appropriate learning experiences." },
                { title: "Safety & Security", desc: "Child safety is integral to our environment. CCTV surveillance and available live-monitoring facilities provide parents with added reassurance about their child’s safety and well-being." },
                { title: "Mind Lab @ DCMPS", desc: "A space designed to inspire creative thinking, problem-solving, curiosity, and exploration, Mind Lab provides children with engaging experiences supported by trained educators and appropriate learning resources." },
                { title: "Fun, Movement & Play", desc: "Children learn through movement and play. Our Fun Zone provides opportunities for children to develop coordination, confidence, social skills, creativity, and physical well-being in a safe and engaging environment." },
                { title: "International-Standard Daycare", desc: "Our daycare programme offers a nurturing environment supported by trained staff, safety and hygiene practices, age-appropriate activities, and facilities designed around children’s comfort and well-being." },
                { title: "Professional Teacher Development", desc: "Our teacher-training programmes help educators strengthen their understanding of Montessori principles, child development, and effective early-years teaching practices." },
                { title: "Tracking Every Child’s Progress", desc: "We observe children continuously across multiple areas of development and share meaningful progress updates with parents. This helps us understand each child’s unique strengths and provide appropriate support when needed." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 5) * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-indigo-500" fill="currentColor" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold text-slate-800 mb-1 ${bodyFont.className}`}>{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100"
              >
                <p className="text-indigo-800 font-medium italic">
                  Dhawni Cambridge Montessori Preschool & Daycare is where purposeful learning meets care, curiosity, independence, and joyful discovery.
                </p>
              </motion.div>
            </div>

            {/* Right side floating oval background */}
            <div className="w-full lg:w-2/5 flex items-center justify-center mt-10 lg:mt-0 relative h-[400px] lg:sticky lg:top-32 self-start">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-sky-300 to-indigo-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full p-8"
              >
                <Image
                  src={girlwithbook}
                  alt="Girl learning"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION: GROUND RULES & HYGIENE
      ========================================= */}
      <section className="relative w-full bg-indigo-50 pt-24 pb-32 overflow-hidden">
        <ElegantEdge position="top" fillColor="#ffffff" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Guidelines & Policies */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-20">
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
                Our <span className="text-indigo-500">Guidelines & Policies</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dhawni Cambridge Montessori Preschool follows a child-centred approach that allows every child to learn, explore, and progress at their own pace. Through individual and small-group activities, our educators provide personalised attention based on each child’s developmental needs.
                </p>
                <p>
                  To maintain a safe, healthy, and nurturing environment, we follow essential guidelines covering school hours, attendance, health, safety, and emergency procedures.
                </p>
                <p>
                  Our health and sick-child guidelines are designed to safeguard children, staff, and families by reducing the spread of illness.
                </p>
                <p>
                  We believe in working closely with parents and welcome their participation in appropriate school activities, educational excursions, and community initiatives.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex items-center justify-center relative h-[350px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-rose-300 to-orange-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full p-6"
              >
                <Image
                  src={boywithelephant}
                  alt="Boy playing"
                  fill
                  className="object-contain drop-shadow-2xl scale-110"
                />
              </motion.div>
            </div>
          </div>

          {/* Cleanliness and Hygiene */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
                Cleanliness & <span className="text-teal-500">Hygiene</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The health and well-being of every child are our priorities. Our facilities are thoroughly cleaned and maintained each day, while toys, play equipment, and learning materials are regularly sanitized to maintain a hygienic environment.
                </p>
                <p>
                  We follow consistent hygiene practices to help minimise the spread of germs and create a clean, safe, and comfortable space for children to learn and explore.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex items-center justify-center relative h-[300px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-teal-300 to-emerald-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full p-4"
              >
                <Image
                  src={girlonswing}
                  alt="Girl on swing"
                  fill
                  className="object-contain drop-shadow-2xl scale-125 translate-y-4"
                />
              </motion.div>
            </div>
          </div>

          {/* Communication */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${titleFont.className}`}>
                <span className="text-blue-500">Communication</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We believe that strong communication builds strong partnerships. Our teachers and staff maintain open communication with parents through convenient channels and regular updates.
                </p>
                <p>
                  Parents are kept informed about classroom activities, learning plans, menus, events, and important school announcements, ensuring they remain connected to their child’s learning journey.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex items-center justify-center relative h-[300px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-cyan-300 shadow-2xl opacity-60 m-auto"
                animate={{
                  borderRadius: ["50% 50% 30% 70% / 50% 30% 70% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50% 50% 30% 70% / 50% 30% 70% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '90%', height: '90%' }}
              />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full p-4"
              >
                <Image
                  src={boywithcup}
                  alt="Boy with cup"
                  fill
                  className="object-contain drop-shadow-2xl scale-110"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}