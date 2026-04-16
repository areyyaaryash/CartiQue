"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] my-16 rounded-2xl overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/footer.mp4" type="video/mp4" />
      </video>

      {/* 🎨 Royal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-black/50 to-secondary/40"></div>

      {/* 💎 Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">

        <Image
          className="max-w-40 md:max-w-56 opacity-90"
          src={assets.jbl_soundbox_image}
          alt="soundbox"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-box flex flex-col items-center text-center space-y-3 px-8 py-10 rounded-2xl"
        >
          <p className="text-sm text-primary">
            Limited Time Offer
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-white max-w-[420px]">
            Level Up Your Gaming Experience
          </h2>

          <p className="max-w-[400px] text-white/70">
            From immersive sound to precise controls — everything you need to win.
          </p>

          <button className="group flex items-center gap-2 px-8 py-2.5 bg-primary hover:bg-primaryDark transition rounded-lg text-white shadow-md">
            Shop Now
            <Image
              className="group-hover:translate-x-1 transition"
              src={assets.arrow_icon_white}
              alt="arrow"
            />
          </button>
        </motion.div>

        <Image
          className="hidden md:block max-w-72 opacity-90"
          src={assets.md_controller_image}
          alt="controller"
        />

        <Image
          className="md:hidden max-w-40 opacity-90"
          src={assets.sm_controller_image}
          alt="controller"
        />
      </div>
    </div>
  );
};

export default Banner;