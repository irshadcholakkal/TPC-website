'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function GlassPercentage() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth rotation based on scroll
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [15, 45]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [-15, 15]), { stiffness: 100, damping: 30 });

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
            <motion.div
                ref={ref}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d'
                }}
                className="relative w-64 h-64 md:w-80 md:h-80"
                initial={{ opacity: 0, scale: 0.8, rotateX: 15, rotateY: -15 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: [-15, -5, -15], // Subtle floating rotation
                    y: [-10, 10, -10] // Floating bob
                }}
                transition={{
                    opacity: { duration: 1 },
                    scale: { duration: 1 },
                    rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                {/* The Percentage Symbol Construction */}

                {/* Back Glass Layer for Depth */}
                <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-brand-purple/10 to-transparent border border-white/5 backdrop-blur-sm"
                    style={{ transform: 'translateZ(-40px)' }} />

                {/* Main Glass Shape */}
                <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-brand-purple/20 to-transparent border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(119,98,245,0.1)] flex items-center justify-center"
                    style={{ transform: 'translateZ(0px)' }}>

                    {/* The Symbol Content */}
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Top Circle */}
                        <div className="absolute top-12 left-12 w-16 h-16 rounded-full border-4 border-brand-purple/40 bg-brand-purple/10 shadow-[0_0_30px_rgba(119,98,245,0.2)] animate-pulse"
                            style={{ transform: 'translateZ(20px)' }} />

                        {/* Slash */}
                        <div className="absolute w-4 h-48 bg-gradient-to-b from-brand-cyan/60 to-brand-purple/60 rounded-full transform -rotate-45 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                            style={{ transform: 'translateZ(30px)' }} />

                        {/* Bottom Circle */}
                        <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full border-4 border-brand-cyan/40 bg-brand-cyan/10 shadow-[0_0_30px_rgba(0,240,255,0.2)] animate-pulse"
                            style={{ transform: 'translateZ(20px)', animationDelay: '1s' }} />

                    </div>
                </div>

                {/* Front Highlight Layer */}
                <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"
                    style={{ transform: 'translateZ(40px)' }} />

            </motion.div>
        </div>
    );
}
