"use client"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}

            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}

            transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1]
            }}

            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;