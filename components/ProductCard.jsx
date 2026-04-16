"use client"
import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {

    const { currency, router } = useAppContext();

    // HANDLER
    const handleClick = () => {
        if (!product || !product._id) return;

        router.push(`/product/${product._id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    
    if (!product) return null;

    return (
        <motion.div
            onClick={handleClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.04 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 max-w-[220px] w-full cursor-pointer group"
        >

            
            <div className="relative rounded-2xl overflow-hidden 
            bg-gradient-to-br from-white/10 via-white/5 to-transparent 
            backdrop-blur-xl border border-white/10 
            shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
            group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] 
            transition-all duration-300">

                
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-30" />
                </div>

                
                <button 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2 right-2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full hover:scale-110 transition"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>

                
                <motion.div 
                    className="w-full h-52 flex items-center justify-center"
                    whileHover={{ scale: 1.1, y: -6 }}
                    transition={{ duration: 0.3 }}
                ><img
                src={product.image?.[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
                </motion.div>

            </div>

            
            <div className="space-y-1 px-1">

                <p className="text-sm font-medium text-white truncate">
                    {product.name}
                </p>

                <p className="text-xs text-white/60 truncate">
                    {product.description}
                </p>

                
                <div className="flex items-center gap-2">
                    <p className="text-xs text-white/60">4.5</p>

                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className="h-3 w-3"
                                src={
                                    index < 4
                                        ? assets.star_icon
                                        : assets.star_dull_icon
                                }
                                alt="star_icon"
                            />
                        ))}
                    </div>
                </div>

                
                <div className="flex items-center justify-between mt-1">

                    <p className="text-sm font-semibold text-white">
                        {currency}{product.offerPrice}
                    </p>

                    <motion.button
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-1 text-xs rounded-full 
                        bg-primary text-black font-medium 
                        shadow-md hover:opacity-90 transition"
                    >
                        Buy
                    </motion.button>

                </div>
            </div>

        </motion.div>
    )
}

export default ProductCard