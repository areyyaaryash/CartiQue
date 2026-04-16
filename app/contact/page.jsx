"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            return toast.error("Please fill all fields");
        }

        if (!form.email.includes("@")) {
            return toast.error("Enter a valid email");
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Message sent 🚀");

            setForm({
                name: "",
                email: "",
                message: ""
            });
        }, 1500);
    };

    return (
        <main className="relative overflow-hidden h-screen pt-[70px]">
            <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />

            {/* 🎥 BACKGROUND VIDEO */}
            <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="fixed top-0 left-0 w-full h-full object-cover opacity-50 z-10"
>
  <source src="/videos/hehehe.mp4" type="video/mp4" />
</video>

            {/* 🌑 OVERLAY */}
            

            {/* 📦 CONTENT */}
            <div className="relative z-20 max-w-[1100px] mx-auto px-6 md:px-16 py-24 space-y-24">

                {/* HEADER */}
                <section className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Let’s Talk
                        </span>
                    </h1>

                    <p className="text-textSoft max-w-xl mx-auto text-lg backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg inline-block">
                        Whether it's feedback, ideas, or collaboration — we’re always open.
                    </p>
                </section>

                {/* SUBTEXT */}
                <section className="text-center">
                    <h2 className="text-2xl md:text-4xl font-medium text-white max-w-2xl mx-auto leading-snug drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        We believe communication should be as smooth as the experience we build.
                    </h2>
                </section>

                {/* FORM */}
                <section className="flex justify-center">

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="w-full max-w-xl space-y-4"
                    >

                        {/* NAME */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full bg-transparent text-white/90 placeholder:text-white/40 outline-none"
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full bg-transparent text-white/90 placeholder:text-white/40 outline-none"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                            <textarea
                                rows="4"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full bg-transparent text-white/90 placeholder:text-white/40 outline-none resize-none"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-medium transition 
                            ${loading
                                ? "bg-white/20 text-white"
                                : "bg-primary text-black shadow-lg shadow-primary/30 hover:opacity-90"
                            }`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </motion.form>

                </section>

                {/* CONTACT INFO */}
                <section className="text-center space-y-3">
                    <p className="text-textSoft">Or reach us directly</p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center text-sm text-textSoft">
                        <p>contact@cartique.dev</p>
                        <p>+91 98765 43210</p>
                        <p>Mumbai, India</p>
                    </div>
                </section>

            </div>

        </main>
    );
};

export default Contact;