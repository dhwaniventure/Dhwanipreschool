"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import {
  Home,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  School,
  Globe,
  Sparkles,
  Timer,
  Loader2,
  Building2
} from "lucide-react";
import { Fredoka, Quicksand } from 'next/font/google';
import Link from "next/link";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

// --- DATA STRUCTURES ---
type Center = {
  id: string;
  name: string;
  address: string;
  hours: string;
  mapEmbed: string;
  slug: string;
  phone?: string;
  country: string;
  state: string;
  city: string;
  status: 'open' | 'shortly';
};

type LocationData = {
  [country: string]: {
    [state: string]: {
      [city: string]: Center[];
    };
  };
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

const carouselImages = [
  '/gallery1.jpeg',
  '/gallery2.jpeg',
  '/gallery3.jpeg',
  '/gallery4.jpeg',
  '/gallery5.jpeg'
];

// --- HEADER COMPONENT ---
const CentersHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative mt-12 w-full h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-32 md:py-0 ${bodyFont.className}`}>

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
        <div className="absolute inset-0 bg-slate-900/60 z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent z-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-4 w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 mb-6 shadow-xl flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="Dhwani Montessori Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-black/40 px-5 py-2 rounded-full mb-6 shadow-sm"
          >
            <Home className="w-4 h-4 text-sky-200" />
            <span className="text-white font-bold text-sm hover:text-sky-200 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white font-bold text-sm">Our Centers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight font-bold ${titleFont.className}`}
          >
            Find Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">Nearest Center</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mt-4"
          >
            Explore our vibrant campuses across India.
          </motion.p>
        </motion.div>
      </div>

      <ElegantEdge position="bottom" fillColor="#eef2ff" />
    </header>
  );
};

// --- MAIN PAGE COMPONENT ---
const CentersPage: React.FC = () => {
  const [admissionOpenDB, setAdmissionOpenDB] = useState<LocationData>({});
  const [openingShortlyDB, setOpeningShortlyDB] = useState<LocationData>({});
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<'open' | 'shortly'>('shortly');

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [centerList, setCenterList] = useState<Center[]>([]);
  const [activeCenter, setActiveCenter] = useState<Center | null>(null);

  const activeDB = activeTab === 'open' ? admissionOpenDB : openingShortlyDB;

  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('centers').select('*');

      if (error) {
        console.error("Error fetching centers:", error);
        setLoading(false);
        return;
      }

      const openDB: LocationData = {};
      const shortlyDB: LocationData = {};

      data.forEach((center: Center) => {
        const targetDB = center.status === 'open' ? openDB : shortlyDB;

        if (!targetDB[center.country]) targetDB[center.country] = {};
        if (!targetDB[center.country]![center.state]) targetDB[center.country]![center.state] = {};
        if (!targetDB[center.country]![center.state]![center.city]) targetDB[center.country]![center.state]![center.city] = [];

        const cityArray = targetDB[center.country]![center.state]![center.city];
        if (cityArray) {
          cityArray.push(center);
        }
      });

      setAdmissionOpenDB(openDB);
      setOpeningShortlyDB(shortlyDB);
      setLoading(false);
    };

    fetchCenters();
  }, []);

  useEffect(() => {
    if (loading) return;

    const countries = Object.keys(activeDB);
    if (countries.length > 0) {
      setSelectedCountry(countries[0]!);
    } else {
      setSelectedCountry("");
      setSelectedState("");
      setSelectedCity("");
      setCenterList([]);
      setActiveCenter(null);
    }
  }, [activeTab, activeDB, loading]);

  useEffect(() => {
    if (!selectedCountry) return;

    const states = Object.keys(activeDB[selectedCountry] || {});
    if (states.length > 0) {
      const firstState = states[0];
      setSelectedState(firstState!);

      const cities = Object.keys(activeDB[selectedCountry]?.[firstState!] || {});
      if (cities.length > 0) {
        setSelectedCity(cities[0] ?? "");
      } else {
        setSelectedCity("");
      }
    } else {
      setSelectedState("");
      setSelectedCity("");
    }
  }, [selectedCountry, activeDB]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const cities = Object.keys(activeDB[selectedCountry]?.[selectedState] || {});
      if (cities.length > 0) {
        setSelectedCity(cities[0] ?? "");
      } else {
        setSelectedCity("");
      }
    }
  }, [selectedState, selectedCountry, activeDB]);

  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
      const centers = activeDB[selectedCountry]?.[selectedState]?.[selectedCity] || [];
      setCenterList(centers);
      if (centers.length > 0) {
        setActiveCenter(centers[0]!);
      } else {
        setActiveCenter(null);
      }
    } else {
      setCenterList([]);
      setActiveCenter(null);
    }
  }, [selectedCity, selectedState, selectedCountry, activeDB]);


  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>

      <CentersHeader />

      <section className="relative w-full bg-indigo-50 pt-16 pb-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute bottom-60 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-4 ${titleFont.className}`}>
              Our Centers
            </h2>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Find the perfect environment for your child&apos;s growth and development at a center near you.
            </p>
          </div>

          <div className="flex justify-center mb-10 relative z-20">
            <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full shadow-lg border border-white inline-flex gap-2">
              <button
                onClick={() => setActiveTab('open')}
                className={`
                   px-6 py-3 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2
                   ${activeTab === 'open'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                    : 'bg-transparent text-slate-500 hover:bg-slate-100'
                  }
                 `}
              >
                <Sparkles className="w-5 h-5" />
                Admission Open
              </button>

              <button
                onClick={() => setActiveTab('shortly')}
                className={`
                   px-6 py-3 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2
                   ${activeTab === 'shortly'
                    ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-md'
                    : 'bg-transparent text-slate-500 hover:bg-slate-100'
                  }
                 `}
              >
                <Timer className="w-5 h-5" />
                Opening Shortly
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
              <h3 className="text-xl font-bold text-slate-600">Loading centers...</h3>
            </div>
          ) : (
            <>
              {Object.keys(activeDB).length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-5xl mx-auto mb-16 relative z-20 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="relative group">
                      <label className="block text-slate-700 font-bold mb-2 ml-2 text-sm tracking-wide">Country</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all appearance-none cursor-pointer font-bold"
                        >
                          {Object.keys(activeDB).map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-indigo-500" />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-slate-700 font-bold mb-2 ml-2 text-sm tracking-wide">State</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <select
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          disabled={!selectedCountry}
                          className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all appearance-none cursor-pointer font-bold disabled:opacity-50"
                        >
                          {selectedCountry && Object.keys(activeDB[selectedCountry] || {}).map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-indigo-500" />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-slate-700 font-bold mb-2 ml-2 text-sm tracking-wide">City</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          disabled={!selectedState}
                          className="w-full bg-slate-50/50 border-2 border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all appearance-none cursor-pointer font-bold disabled:opacity-50"
                        >
                          {selectedCountry && selectedState && Object.keys(activeDB[selectedCountry]?.[selectedState] || {}).map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 rotate-90 pointer-events-none group-focus-within:text-indigo-500" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              ) : null}


              {centerList.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[500px] max-w-6xl mx-auto">
                  <div className="flex flex-col gap-6 h-full lg:overflow-y-auto pr-0 lg:pr-4 scrollbar-hide pb-2">
                    <AnimatePresence mode="wait">
                      {centerList.map((center, index) => (
                        <motion.div
                          key={center.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setActiveCenter(center)}
                          className={`
                                   relative rounded-[2rem] p-8 cursor-pointer transition-all duration-300 border-2 shadow-lg backdrop-blur-xl
                                   ${activeCenter?.id === center.id
                              ? 'bg-white border-indigo-400 shadow-indigo-500/20 scale-[1.02]'
                              : 'bg-white/80 border-white hover:bg-white hover:border-indigo-200 hover:-translate-y-1'
                            }
                                 `}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                              <School className="w-6 h-6 text-indigo-600" />
                            </div>
                            {activeCenter?.id === center.id && (
                              <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                Selected
                              </span>
                            )}
                          </div>

                          <h3 className={`text-2xl font-bold text-slate-800 mb-2 ${titleFont.className}`}>
                            {center.name}
                          </h3>

                          <div className="space-y-3 text-slate-600 font-medium">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{center.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-indigo-500 shrink-0" />
                              <span>{center.hours}</span>
                            </div>
                            {center.phone && (
                              <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>{center.phone}</span>
                              </div>
                            )}
                          </div>

                          <div className="mt-6 pt-6 border-t-2 border-slate-100 flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-400">Tap to see map 👉</span>

                            <Link href={`/centers/${center.slug}`}>
                              <button className="bg-slate-800 hover:bg-black text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors">
                                Visit Page <ArrowRight className="w-4 h-4" />
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {activeCenter && (
                    <motion.div
                      className="w-full h-[400px] lg:h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sticky top-10 bg-white"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={activeCenter.id}
                    >
                      <iframe
                        src={activeCenter.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                      ></iframe>

                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-indigo-50">
                        <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-indigo-500 fill-indigo-100" />
                          {activeCenter.name}
                        </h4>
                        <p className="text-slate-500 text-sm pl-7 truncate">{activeCenter.address}</p>
                      </div>
                    </motion.div>
                  )}

                </div>
              ) : (
                <div className="text-center py-20 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white max-w-3xl mx-auto">
                  <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <School className="w-10 h-10 text-indigo-500" />
                  </div>

                  {activeTab === 'open' ? (
                    <>
                      <h3 className={`text-3xl font-bold text-slate-700 mb-2 ${titleFont.className}`}>No Centers Available</h3>
                      <p className="text-slate-500 text-lg max-w-md mx-auto">
                        Currently, there are no centers accepting admissions in this area. Please check back later or view our upcoming centers.
                      </p>
                      <button
                        onClick={() => setActiveTab('shortly')}
                        className="mt-6 bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all shadow-lg"
                      >
                        View Upcoming Centers
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className={`text-3xl font-bold text-slate-700 mb-2 ${titleFont.className}`}>No upcoming centers found</h3>
                      <p className="text-slate-500 text-lg max-w-md mx-auto">We don&apos;t have any centers opening shortly in this area yet.</p>
                    </>
                  )}
                </div>
              )}
            </>
          )}

        </div>
      </section>

    </div>
  );
};

export default CentersPage;