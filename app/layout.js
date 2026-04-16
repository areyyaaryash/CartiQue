import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import MouseGlow from "@/components/MouseGlow";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "CartiQue",
  description: "Premium E-Commerce UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-100`}>

        
        <div
          id="mouse-glow"
          className="pointer-events-none fixed inset-0 z-[0] mix-blend-screen"
        />

        <MouseGlow />

        <Toaster />

        <AppContextProvider>

          
          <Navbar />

          
          <div className="pt-[80px] relative z-10">
            <PageTransition>
              {children}
            </PageTransition>
          </div>

        </AppContextProvider>

      </body>
    </html>
  );
}