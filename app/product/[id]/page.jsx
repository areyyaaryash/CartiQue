"use client"
import { assets } from "@/assets/assets";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {

    const { id } = useParams();

    const { products, router, addToCart } = useAppContext()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (
        <div className="relative min-h-screen text-white">

            
            <video
                autoPlay
                muted
                loop
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover opacity-50 -z-10"
            >
                <source src="/videos/hehehe.mp4" type="video/mp4" />
            </video>

            
            <div className="fixed inset-0 bg-black/40 -z-10" />

            <Navbar />

            <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    
                    <div className="px-5 lg:px-16 xl:px-20">

                        <div className="rounded-lg overflow-hidden 
                        bg-white/10 backdrop-blur-md border border-white/10 shadow-lg mb-4">
                            <Image
                                src={mainImage || productData.image[0]}
                                alt="alt"
                                className="w-full h-auto object-cover mix-blend-multiply"
                                width={1280}
                                height={720}
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {productData.image.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className="cursor-pointer rounded-lg overflow-hidden 
                                    bg-white/10 backdrop-blur-md border border-white/10 
                                    hover:bg-white/20 transition"
                                >
                                    <Image
                                        src={image}
                                        alt="alt"
                                        className="w-full h-auto object-cover mix-blend-multiply"
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="flex flex-col 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

                        <h1 className="text-3xl font-medium text-white mb-4">
                            {productData.name}
                        </h1>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_dull_icon} alt="star_dull_icon" />
                            </div>
                            <p>(4.5)</p>
                        </div>

                        <p className="text-white/70 mt-3">
                            {productData.description}
                        </p>

                        <p className="text-3xl font-medium mt-6">
                            ${productData.offerPrice}
                            <span className="text-base font-normal text-white/60 line-through ml-2">
                                ${productData.price}
                            </span>
                        </p>

                        <hr className="bg-white/20 my-6" />

                        <div className="overflow-x-auto">
                            <table className="table-auto border-collapse w-full max-w-72">
                                <tbody>
                                    <tr>
                                        <td className="text-white/70 font-medium">Brand</td>
                                        <td className="text-white/50">Generic</td>
                                    </tr>
                                    <tr>
                                        <td className="text-white/70 font-medium">Color</td>
                                        <td className="text-white/50">Multi</td>
                                    </tr>
                                    <tr>
                                        <td className="text-white/70 font-medium">Category</td>
                                        <td className="text-white/50">
                                            {productData.category}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center mt-10 gap-4">
                            <button
                                onClick={() => addToCart(productData._id)}
                                className="w-full py-3.5 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition rounded"
                            >
                                Add to Cart
                            </button>

                            <button
                                onClick={() => { addToCart(productData._id); router.push('/cart') }}
                                className="w-full py-3.5 bg-primary shadow-lg shadow-primary/30 text-black hover:opacity-90 transition rounded"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                {/* FEATURED PRODUCTS */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4 mt-16">
                        <p className="text-3xl font-medium">
                            Featured <span className="text-primary">Products</span>
                        </p>
                        <div className="w-28 h-0.5 bg-primary mt-2"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                        {products.slice(0, 5).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>

                    <button className="px-8 py-2 mb-16 border border-white/20 rounded text-white/70 hover:bg-white/10 transition">
                        See more
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    ) : <Loading />
};

export default Product;