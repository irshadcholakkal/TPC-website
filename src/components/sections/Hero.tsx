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

                </motion.div>
            </Container>
        </div>
    );
}
