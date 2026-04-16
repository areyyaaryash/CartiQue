'use client'
import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";

const Home = () => {
  return (
    <>
  
  <video
    autoPlay
    muted
    loop
    playsInline
    className="fixed top-0 left-0 w-full h-full object-cover opacity-60 z-10"
  >
    <source src="/videos/hehehe.mp4" type="video/mp4" />
  </video>

  
  <div className="fixed inset-0 bg-black/70 z-0" />

  
  <div className="relative z-10">
    

    <main className="pt-20">
      <div className="px-6 md:px-16 lg:px-32">

        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />

      </div>
    </main>

    <Footer />
  </div>
</>
  );
};

export default Home;
