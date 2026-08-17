"use client";

import React, { useState, useEffect } from "react";
import {
  Menu, X, ArrowRight, Sparkles, Facebook, Instagram, Twitter, Youtube,
  Phone, AlertTriangle, Home, BookOpen, ShieldCheck, GraduationCap,
  MapPin, Mail, Gamepad2, Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import logo from "../../public/logo.png";
import logonew from "../../public/logohorizontal.png"

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll Effect & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["about", "programs", "gallery"];
        let current = "";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `/#${section}`;
            }
          }
        }
        if (current) setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Updated Navigation Links with Icons and specific Colors matching screenshot styling
  const navLinks = [
    { href: "/", label: "Home", icon: Home, colorCls: "text-purple-500 border-purple-500", hoverCls: "group-hover:text-purple-500" },
    { href: "/about", label: "About Us", icon: BookOpen, colorCls: "text-amber-500 border-amber-500", hoverCls: "group-hover:text-amber-500" },
    { href: "/#programs", label: "Programs", icon: GraduationCap, colorCls: "text-green-500 border-green-500", hoverCls: "group-hover:text-green-500" },
    { href: "/admission", label: "Admissions", icon: Users, colorCls: "text-sky-500 border-sky-500", hoverCls: "group-hover:text-sky-500" },
    { href: "/franchise", label: "Franchise", icon: BookOpen, colorCls: "text-indigo-400 border-indigo-400", hoverCls: "group-hover:text-indigo-400" },
    { href: "/Ourcenters", label: "Our Centers", icon: MapPin, colorCls: "text-purple-600 border-purple-600", hoverCls: "group-hover:text-purple-600" },
    { href: "/contact", label: "Contact", icon: Mail, colorCls: "text-orange-500 border-orange-500", hoverCls: "group-hover:text-orange-500" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/littledreamersatcambridge/", className: "text-blue-600 bg-blue-50 hover:bg-blue-100" },
    { icon: Instagram, href: "https://www.instagram.com/little_dreamers_at_cambridge/", className: "text-pink-600 bg-pink-50 hover:bg-pink-100" },
    { icon: Youtube, href: "https://www.youtube.com/@LittleDreamersAtCambridge", className: "text-red-600 bg-red-50 hover:bg-red-100" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* --- TOP BAR (Hides on Scroll) --- */}
      <div
        className={`bg-[#2c305c] w-full flex flex-col sm:flex-row justify-between items-center text-white transition-all duration-300 overflow-hidden px-4 md:px-10 lg:px-20 ${scrolled ? 'h-0 opacity-0' : 'h-auto py-2 sm:h-10 sm:py-0 opacity-100'
          }`}
      >
        <div className="font-semibold text-xs sm:text-sm flex items-center gap-2">
          Call Us : +91 901 576 4000
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm mt-1 sm:mt-0">
          <AlertTriangle className="text-amber-400 w-4 h-4" />
          <span><strong className="text-white">Public Notice:</strong> Instances of misuse</span>
        </div>
      </div>

      {/* --- MULTI-COLOR BORDER --- */}
      <div className="flex h-1 w-full">
        <div className="h-full w-1/6 bg-purple-500"></div>
        <div className="h-full w-1/6 bg-amber-500"></div>
        <div className="h-full w-1/6 bg-red-500"></div>
        <div className="h-full w-1/6 bg-green-500"></div>
        <div className="h-full w-1/6 bg-sky-500"></div>
        <div className="h-full w-1/6 bg-indigo-500"></div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav
        className={`w-full bg-white transition-all duration-300 shadow-sm md:px-10 lg:px-20 px-4 flex items-center justify-between ${scrolled ? "py-1" : "py-3 md:py-4"
          }`}
      >
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center shrink-0">
          <div className={`relative transition-all duration-300 ease-in-out hover:rotate-2 ${scrolled ? 'w-[120px] md:w-[180px]' : 'w-[180px] md:w-[200px]'}`}>
            <Image
              src={logonew}
              width={240}
              height={240}
              alt="Dhwani Cambridge Logo"
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden py-2 xl:flex items-end justify-center flex-1 ml-10">
          {navLinks.map((link, i) => {
            const isActive = hoveredLink === link.href || pathname === link.href || (pathname === "/" && activeSection === link.href);

            return (
              <div key={link.href} className="flex px-4 items-end">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="flex flex-col items-center group relative px-1"
                >
                  {/* Icon in Circle */}
                  <div className={`rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 mb-1 bg-white ${link.colorCls} ${scrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
                    <link.icon className={`transition-all duration-300 ${scrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
                  </div>

                  {/* Text Label */}
                  <span className={`transition-colors duration-300 whitespace-nowrap ${bodyFont.className} ${scrolled ? 'text-[11px]' : 'text-sm'} ${isActive ? link.colorCls.split(' ')[0] : "text-[#706d97] font-semibold"
                    } ${link.hoverCls}`}>
                    {link.label}
                  </span>
                </Link>

                {/* Vertical Separator */}
                {i < navLinks.length - 1 && (
                  <span className={`text-slate-300 ml-4 transition-all duration-300 ${scrolled ? 'text-xs mb-[2px]' : 'text-sm mb-0.5'}`}>|</span>
                )}
              </div>
            );
          })}
        </div>

        {/* --- RIGHT ACTIONS (Desktop Enroll + Mobile Toggle) --- */}
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <Link href="/admission" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md shadow-rose-200 flex items-center gap-1.5 font-bold transition-all ${bodyFont.className} ${scrolled ? 'px-8 py-3 text-xs' : 'px-10 py-4 text-sm'}`}
            >
              Enroll <ArrowRight className={scrolled ? 'w-6 h-6' : 'w-5 h-5'} />
            </motion.button>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 text-slate-600 hover:bg-rose-50 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-100 shadow-xl overflow-y-auto absolute w-full left-0 top-full"
          >
            <div className="container mx-auto px-44 py-6 flex flex-col gap-2 pb-32">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (pathname === "/" && activeSection === link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-bold transition-all ${bodyFont.className} ${isActive
                        ? "text-rose-500 bg-rose-50"
                        : "text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      <div className={`p-2 rounded-full border-2 ${link.colorCls}`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-4">
                <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-md flex justify-center items-center gap-2 ${bodyFont.className}`}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              <div className="flex justify-center gap-6 py-6 border-t border-slate-100 mt-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`p-3 rounded-full ${social.className}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;