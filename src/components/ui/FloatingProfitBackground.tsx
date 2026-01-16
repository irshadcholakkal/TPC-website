"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingProfitBackground = ({ className }: { className?: string }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Randomized data for Rising Light Veins (Growth Streams)
    const veins = useMemo(() => {
        if (!isMounted) return []; // Only generate after mount
        return Array.from({ length: 40 }, (_, i) => ({ // Increased to 40 for richness
            id: i,
            left: Math.random() * 100,
            width: 0.5 + Math.random() * 1.5,
            height: 20 + Math.random() * 40, // Varied heights
            duration: 3 + Math.random() * 8, // Varied speeds
            delay: Math.random() * -15, // Start immediately
            opacity: 0.1 + Math.random() * 0.4,
            color: Math.random() > 0.5 ? "white" : "gray",
        }));
    }, [isMounted]);

    // Randomized data for Micro-particles
    const microParticles = useMemo(() => {
        if (!isMounted) return []; // Only generate after mount
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * -5,
        }));
    }, [isMounted]);

    if (!isMounted) {
        // Render a placeholder or nothing until mounted
        return <div className={cn("fixed inset-0 h-full w-full bg-[#000000] overflow-hidden z-0", className)} />;
    }

    return (
        <div className={cn("fixed inset-0 h-full w-full bg-[#000000] overflow-hidden z-0", className)}>
            {/* 1. Subtle Radial Glows for Depth */}
            <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] bg-white/[0.01] rounded-full blur-[160px] pointer-events-none" />

            {/* 2. Abstract Growth Veins (The main effect) */}
            <div className="absolute inset-0 z-10">
                {veins.map((vein) => (
                    <motion.div
                        key={`vein-${vein.id}`}
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{
                            y: ["110%", "-50%"], // Long graceful rise
                            opacity: [0, vein.opacity, vein.opacity, 0]
                        }}
                        transition={{
                            duration: vein.duration,
                            repeat: Infinity,
                            delay: vein.delay,
                            ease: "linear"
                        }}
                        className={cn(
                            "absolute rounded-full blur-[0.5px]",
                            vein.color === "white" ? "bg-gradient-to-t from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]" :
                                "bg-gradient-to-t from-transparent via-neutral-500/40 to-transparent shadow-[0_0_15px_rgba(163,163,163,0.2)]"
                        )}
                        style={{
                            left: `${vein.left}%`,
                            width: `${vein.width}px`,
                            height: `${vein.height}vh`,
                        }}
                    />
                ))}
            </div>

            {/* 3. Micro-particles for Atmospheric Depth */}
            <div className="absolute inset-0 z-5 opacity-40">
                {microParticles.map((p) => (
                    <motion.div
                        key={`p-${p.id}`}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: p.delay }}
                        className="absolute bg-white/20 rounded-full"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            width: "1px",
                            height: "1px",
                        }}
                    />
                ))}
            </div>

            {/* 4. Masking for clean edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        </div>
    );
};
