'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
    const words = ["Operations", "Solutions", "Platform"];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative h-screen flex flex-col justify-center overflow-hidden bg-black">
            <BackgroundRippleEffect />
            <Container className="relative z-10 w-full flex flex-col justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [10, -5, 0] }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="max-w-4xl mx-auto text-center pointer-events-auto"
                >
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-neutral-500 text-3xl md:text-5xl lg:text-7xl font-heading py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Your All-in-One,
                        <br />
                        <span className="inline-flex items-center">
                            E-commerce&nbsp;
                            <FlipWords
                                words={words}
                                className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500"
                            />
                        </span>
                    </h2>

                    <motion.p
                        className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-neutral-400 mb-8 px-2 font-medium"
                    >
                        We synchronize your inventory, logistics, and analytics across all channels.
                        From Amazon to local marketplaces. we handle the complexity so you can simply grow.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                        <a href="#contact" onClick={handleScroll} className="group relative">
                            <button className="relative inline-flex h-12 w-full sm:w-64 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-95 transition-transform will-change-transform">
                                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#a3a3a3_50%,#ffffff_100%)] opacity-40 will-change-transform" />
                                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl border border-white/15 transition-all duration-300 group-hover:bg-slate-950 relative z-10">
                                    Get Started
                                </span>
                            </button>
                        </a>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
