"use client"
import React from "react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/assets/assets";

const Navbar = () => {

  const { isSeller, router } = useAppContext();
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/all-products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-32 backdrop-blur-xl bg-black/40 border-b border-white/10">

      
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer text-xl font-semibold text-white tracking-tight"
      >
        CartiQue
      </div>

      
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

      
      <div className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4 opacity-70" src={assets.search_icon} alt="search" />
        <button className="flex items-center gap-2 text-white/70 hover:text-white transition">
          <Image src={assets.user_icon} alt="user" />
          Account
        </button>
      </div>

      
      <div className="flex md:hidden items-center gap-3">
        <Image src={assets.user_icon} alt="user" />
      </div>

    </nav>
  );
};

export default Navbar;