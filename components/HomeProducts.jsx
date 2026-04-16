"use client"
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const HomeProducts = () => {

  const { products, router } = useAppContext();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // ✅ Safety check
  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-white/60">
        Loading products...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-16 px-4 md:px-10">

      <p className="text-2xl font-semibold text-textMain w-full">
        Popular products
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 pb-14 w-full"
      >
        {products.map((product, index) => (
          <ProductCard key={product._id || index} product={product} />
        ))}
      </motion.div>

      <motion.button
        onClick={() => router.push('/all-products')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-2.5 border border-primary/30 rounded-full text-primary hover:bg-primary/10 transition"
      >
        See more
      </motion.button>

    </div>
  );
};

export default HomeProducts;