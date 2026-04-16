"use client"
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="relative overflow-hidden">

      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover opacity-50 z-10"
      >
        <source src="/videos/footer.mp4" type="video/mp4" />
      </video>

      
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-0" />

      
      <div className="relative z-10">

        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16">
        <section className="text-center px-6 md:px-16">

<h2 className="text-2xl md:text-4xl font-medium text-white leading-snug max-w-3xl mx-auto">
  We focus on how it feels — speed, motion, and clarity.
</h2>

</section>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Designed for the
            </span>
            <br />
            <span className="text-primary">
              Future of Shopping
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-textSoft max-w-2xl">
            CartiQue is not just a store — it's an experience crafted with motion,
            precision, and design-first thinking.
          </p>

        </section>

        {/* BIG STATEMENT */}
        <section className="py-32 px-6 md:px-32 text-center">

          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-snug">
            We don’t just build interfaces —  
            <br />
            we craft experiences.
          </h2>

        </section>

        {/* SPLIT SECTIONS */}
        <section className="space-y-32 px-6 md:px-20 lg:px-32 pb-32">

          {/* BLOCK 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white">
                Built with precision
              </h3>

              <p className="text-textSoft leading-relaxed">
                Every animation, transition, and interaction is carefully crafted
                to feel fluid and natural.
              </p>
            </motion.div>

            <div className="h-72 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
              <span className="text-white/60">Performance Focused</span>
            </div>

          </div>

          {/* BLOCK 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="h-72 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
              <span className="text-white/60">Minimal Design</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white">
                Simplicity meets power
              </h3>

              <p className="text-textSoft leading-relaxed">
                Clean layouts, balanced spacing, and intuitive navigation
                create a seamless shopping journey.
              </p>
            </motion.div>

          </div>

        </section>

        {/* VALUES GRID */}
        <section className="px-6 md:px-20 lg:px-32 pb-32">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { title: "Speed", desc: "Fast and responsive across all devices." },
              { title: "Design", desc: "Minimal yet powerful interfaces." },
              { title: "Experience", desc: "Smooth and intuitive interactions." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3"
              >
                <h4 className="text-white font-medium">
                  {item.title}
                </h4>
                <p className="text-textSoft text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Experience the difference
          </h2>

          <p className="text-textSoft mt-4">
            A new way to interact with products starts here.
          </p>

          <button className="mt-6 px-8 py-3 bg-primary text-black rounded-full font-medium hover:opacity-90 transition">
            Explore Products
          </button>

        </section>

      </div>

    </main>
  );
};

export default About;