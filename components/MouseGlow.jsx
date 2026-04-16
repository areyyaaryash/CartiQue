"use client"
import { useEffect } from "react";

const MouseGlow = () => {

    useEffect(() => {
        const glow = document.getElementById("mouse-glow");

        const move = (e) => {
            if (!glow) return;

            glow.style.background = `radial-gradient(
        500px at ${e.clientX}px ${e.clientY}px,
        rgba(124,124,255,0.08),
        transparent 80%
    )`;
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return null;
};

export default MouseGlow;