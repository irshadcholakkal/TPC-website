
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 2500,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % words.length);
        }, duration);

        return () => clearInterval(id);
    }, [duration, words.length]);

    return (
        <span className="relative inline-block align-baseline">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                        "absolute left-0 top-0 bg-clip-text text-transparent",
                        className
                    )}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>

            {/* invisible placeholder to lock layout */}
            <span className="invisible">{words.reduce((a, b) => a.length > b.length ? a : b)}</span>
        </span>
    );
};
