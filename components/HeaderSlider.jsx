"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 3,
    title: "Power Meets Elegance",
    subtitle: "MacBook Pro for You",
    offer: "Exclusive 40% Off",
    img: assets.header_macbook_image,
    button: "Order Now",
  },
  {
    id: 1,
    title: "Experience Pure Sound",
    subtitle: "Your Perfect Headphones Awaits",
    offer: "Limited Time Offer 30% Off",
    img: assets.header_headphone_image,
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Next-Level Gaming",
    subtitle: "PlayStation 5 is Here",
    offer: "Only Few Left!",
    img: assets.header_playstation_image,
    button: "Explore",
  },
];

const HeaderSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-2xl mt-6">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 
          bg-gradient-to-br from-white/10 via-white/5 to-transparent 
          backdrop-blur-xl 
          border border-white/10 
          rounded-2xl 
          shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        >

          {/* ✨ Glass reflection */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-40" />
          </div>

          {/* ✨ Top light reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-20 pointer-events-none" />

          {/* 🔥 TEXT SECTION */}
          <div className="relative z-10 max-w-xl">

            {/* Soft backdrop for readability */}
            <div className="absolute -inset-6 bg-gradient-to-r from-black/50 via-black/20 to-transparent blur-2xl rounded-xl" />

            <div className="space-y-4 text-center md:text-left relative z-10">

              <p className="text-sm text-primary">
                {slides[index].offer}
              </p>

              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                {slides[index].title}
                <br />
                <span className="text-white/70">
                  {slides[index].subtitle}
                </span>
              </h1>

              <div className="flex gap-4 justify-center md:justify-start mt-4">

                <button className="px-8 py-2.5 bg-primary text-black rounded-full font-medium shadow-lg hover:opacity-90 transition">
                  {slides[index].button}
                </button>

                <button className="text-white/70 hover:text-white transition">
                  Learn More →
                </button>

              </div>
            </div>
          </div>

          {/* 🔥 IMAGE */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center relative z-10"
          >
            <Image
              src={slides[index].img}
              alt="product"
              className="w-48 md:w-72 object-contain opacity-90"
            />
          </motion.div>

        </motion.div>
      </AnimatePresence>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === index ? "bg-primary" : "bg-white/30"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeaderSlider;