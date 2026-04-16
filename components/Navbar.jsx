"use client"
import React, { useState } from "react"; // ✅ added useState
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/assets/assets";

const Navbar = () => {

  const { isSeller, router } = useAppContext();
  const pathname = usePathname();

  const [open, setOpen] = useState(false); // ✅ mobile menu state

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/all-products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-32 backdrop-blur-xl bg-black/40 border-b border-white/10">

      {/* LOGO */}
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer text-xl font-semibold text-white tracking-tight"
      >
        CartiQue
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-2 relative bg-white/5 p-1 rounded-full border border-white/10">

        {links.map((link) => {

          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-1.5 text-sm"
            >

              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {link.name}
              </span>

            </Link>
          );
        })}

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="ml-2 px-4 py-1.5 text-xs rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            Seller
          </button>
        )}

      </div>

      {/* DESKTOP RIGHT */}
      <div className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4 opacity-70" src={assets.search_icon} alt="search" />
        <button className="flex items-center gap-2 text-white/70 hover:text-white transition">
          <Image src={assets.user_icon} alt="user" />
          Account
        </button>
      </div>

      {/* MOBILE RIGHT */}
      <div className="flex md:hidden items-center gap-3">
        <Image src={assets.user_icon} alt="user" />

        {/* ✅ HAMBURGER BUTTON */}
        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* ✅ MOBILE MENU DROPDOWN */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center gap-5 py-6 md:hidden">

          {links.map((link) => {

            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)} // ✅ close on click
                className={`text-lg ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {isSeller && (
            <button
              onClick={() => {
                router.push("/seller");
                setOpen(false);
              }}
              className="px-4 py-2 text-sm rounded-full border border-primary/30 text-primary"
            >
              Seller
            </button>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;