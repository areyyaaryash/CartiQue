'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {

    const { products } = useAppContext();

    return (
        <div className="relative min-h-screen text-white">

            <video
                autoPlay
                muted
                loop
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover opacity-40 -z-10"
            >
                <source src="/videos/hehehe.mp4" type="video/mp4" />
            </video>

            
            <div className="fixed inset-0 bg-black/40 -z-10" />

            

            
            <div className="relative z-10 flex flex-col items-start px-6 md:px-16 lg:px-32">

                
                <div className="flex flex-col items-end pt-12">
                    <p className="text-3xl font-medium">
                        All <span className="text-primary">Products</span>
                    </p>
                    <div className="w-16 h-0.5 bg-primary rounded-full"></div>
                </div>

                
                <div className="absolute top-40 left-1/2 -translate-x-1/2 
                w-[800px] h-[400px] bg-primary/10 blur-[120px] opacity-30 pointer-events-none" />

                
                <div className="w-full mt-12 pb-14">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
};

export default AllProducts;