'use client'
import Navbar from '@/components/seller/Navbar'
import Sidebar from '@/components/seller/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white">

      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/bg2.mp4" type="video/mp4" />
      </video>

      
      <div className="fixed inset-0 bg-black/30 z-10 pointer-events-none" />

      
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[150px] bottom-[-150px] right-[-150px] rounded-full z-10" />

      
      <div className="relative z-20">
        <Navbar />
      </div>

      
      <div className='flex w-full pt-[70px] relative z-20'>

        
        <div className="backdrop-blur-xl bg-white/5 border-r border-white/10">
          <Sidebar />
        </div>

        
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          {children}
        </div>

      </div>

    </div>
  )
}

export default Layout