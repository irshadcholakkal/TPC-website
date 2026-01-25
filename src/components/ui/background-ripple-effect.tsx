"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
    cellSize = 56,
}: {
    cellSize?: number;
}) => {
    const [dimensions, setDimensions] = useState({ rows: 10, cols: 15 });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateDimensions = () => {
            const isMobile = window.innerWidth < 768;
            setDimensions({
                rows: isMobile ? 8 : 16,
                cols: isMobile ? 12 : 27
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "absolute inset-0 h-full w-full bg-black overflow-hidden",
                "[--cell-border-color:rgba(255,255,255,0.06)]",
            )}
        >
            <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
                <ReactorGrid
                    rows={dimensions.rows}
                    cols={dimensions.cols}
                    cellSize={cellSize}
                    borderColor="var(--cell-border-color)"
                />
            </div>
        </div>
    );
};

type ReactorGridProps = {
    rows: number;
    cols: number;
    cellSize: number;
    borderColor: string;
};

const ReactorGrid = ({
    rows,
    cols,
    cellSize = 56,
    borderColor = "rgba(255,255,255,0.05)",
}: ReactorGridProps) => {
    const [activeCells, setActiveCells] = useState<Set<number>>(new Set());

    useEffect(() => {
        const runPulse = () => {
            // Select a random number of cells across the grid (4-12 cells)
            const count = Math.floor(Math.random() * 8) + 4;
            const newCells = new Set<number>();
            const totalCells = rows * cols;

            for (let i = 0; i < count; i++) {
                newCells.add(Math.floor(Math.random() * totalCells));
            }

            setActiveCells(newCells);

            // Pulse "On" time
            const dwellTime = Math.random() * 1000 + 800; // 0.8 - 1.8s
            setTimeout(() => {
                setActiveCells(new Set());
            }, dwellTime);

            // Interval between pulses (0.5 - 2s)
            setTimeout(runPulse, Math.random() * 1500 + 500);
        };

        const timer = setTimeout(runPulse, 1000);
        return () => clearTimeout(timer);
    }, [rows, cols]);

    const cells = useMemo(
        () => Array.from({ length: rows * cols }, (_, idx) => idx),
        [rows, cols],
    );

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: "fit-content",
        height: "fit-content",
    };

    return (
        <div className="relative z-[3]" style={gridStyle}>
            {cells.map((idx) => {
                const isHighlighted = activeCells.has(idx);

                return (
                    <motion.div
                        key={idx}
                        className={cn(
                            "cell relative border-[0.5px] transition-colors",
                            "hover:bg-white/[0.05] hover:border-white/20 hover:duration-100",
                        )}
                        initial={false}
                        animate={{
                            backgroundColor: isHighlighted ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)",
                            borderColor: isHighlighted ? "rgba(255,255,255,0.2)" : borderColor,
                            boxShadow: isHighlighted ? "inset 0 0 20px rgba(255,255,255,0.02)" : "none",
                        }}
                        transition={{
                            duration: isHighlighted ? 0.3 : 1.5,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </div>
    );
};

