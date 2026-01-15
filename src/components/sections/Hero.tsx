'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FlipWords } from "../ui/flip-words";


export default function Hero() {
    const words = ["Operations", "Solutions", "Platform"];
    return (
        <div className="relative h-screen flex flex-col justify-center overflow-hidden bg-black">
            <BackgroundRippleEffect />
            <Container className="relative z-10 w-full flex flex-col justify-center pointer-events-none">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: [10, -5, 0],
                    }}
                    transition={{
                        duration: 0.2,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="max-w-4xl mx-auto text-center pointer-events-auto"
                >



                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Your All-in-One,
                        <br />
                        <span className="inline-flex items-center">
                            E-commerce&nbsp;
                            <FlipWords
                                words={words}
                                className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white"


                            />
                        </span>
                    </h2>












                    <motion.p
                        className="
    mx-auto 
    max-w-2xl
    text-base sm:text-lg md:text-xl
    leading-relaxed
    text-neutral-500 dark:text-neutral-400
  "
                    >
                        We synchronize your inventory, logistics, and analytics across all channels.
                        From Amazon to local marketplaces, we handle the complexity so you can simply grow.
                    </motion.p>

                    <div className="h-6 sm:h-8 md:h-10 lg:h-12" />

                    <div
                        className="
    flex flex-col sm:flex-row flex-wrap
    gap-4 sm:gap-5 md:gap-6
    justify-center items-center
  "
                    >




                        <Link href="/contact">
                            <button
                                className="
      relative inline-flex 
      h-12 w-90 
      overflow-hidden rounded-full p-[1px]
      focus:outline-none
      focus:ring-0
    "
                            >
                                {/* glowing ring (not hover-based anymore) */}
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                                {/* real button body */}
                                <span
                                    className="
        inline-flex h-full w-full items-center justify-center 
        rounded-full bg-slate-950 
        px-6 py-1 text-sm font-medium text-white 
        backdrop-blur-3xl
      "
                                >
                                    Get Started
                                </span>
                            </button>
                        </Link>











                    </div>




                </motion.div>
            </Container>
        </div >
    );
}
