'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";


const AddProduct = () => {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (

    <div className="relative w-full max-w-lg animate-[float_6s_ease-in-out_infinite]">
     


<div className="fixed inset-0 bg-black/60 -z-10" />

      <div className="absolute w-full max-w-lg h-full 
      scale-95 translate-x-6 -translate-y-6 
      backdrop-blur-xl bg-white/5 border border-white/10 
      rounded-2xl opacity-40" />
  
      
      <div className="absolute w-full max-w-lg h-full 
      scale-98 translate-x-3 -translate-y-3 
      backdrop-blur-xl bg-white/5 border border-white/10 
      rounded-2xl opacity-60" />

      
      <div className="relative w-full max-w-lg">

        
        <div className="absolute inset-0 rounded-2xl pointer-events-none 
        bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 rounded-2xl pointer-events-none 
bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-purple-500/20 
blur-xl opacity-60 animate-pulse" />

<form 
  onSubmit={handleSubmit} 
  className="relative md:p-10 p-5 space-y-6 
  backdrop-blur-2xl bg-white/5 
  border border-white/10 
  rounded-2xl 
  shadow-[0_0_80px_rgba(139,92,246,0.25)]
  transition-all duration-500
  hover:scale-[1.02] hover:shadow-[0_0_120px_rgba(139,92,246,0.35)]"
>

          
          <div>
            <p className="text-base font-medium text-white/80">Product Image</p>

            <div className="flex flex-wrap items-center gap-4 mt-3">
              {[...Array(4)].map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  
                  <input
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                    type="file"
                    id={`image${index}`}
                    hidden
                  />

                  <div className="w-24 h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center overflow-hidden hover:scale-105 transition cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                    <Image
                      src={
                        files[index]
                          ? URL.createObjectURL(files[index])
                          : assets.upload_area
                      }
                      alt=""
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                </label>
              ))}
            </div>
          </div>

          {/* 🔹 NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Product Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 transition"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          {/* 🔹 DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Product Description</label>
            <textarea
              rows={4}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 outline-none resize-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Type here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          
          <div className="flex items-center gap-4 flex-wrap">

            <div className="flex flex-col gap-2 w-32">
              <label className="text-sm text-white/70">Category</label>
              <select
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={category}
              >
                <option value="Earphone">Earphone</option>
                <option value="Headphone">Headphone</option>
                <option value="Watch">Watch</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-32">
              <label className="text-sm text-white/70">Product Price</label>
              <input
                type="number"
                placeholder="0"
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-32">
              <label className="text-sm text-white/70">Offer Price</label>
              <input
                type="number"
                placeholder="0"
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none"
                onChange={(e) => setOfferPrice(e.target.value)}
                value={offerPrice}
                required
              />
            </div>

          </div>

          
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-medium 
            bg-primary text-black 
            shadow-lg shadow-primary/30 
            hover:opacity-90 transition"
          >
            ADD PRODUCT
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;