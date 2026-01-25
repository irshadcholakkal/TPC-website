"use client";
import React, { useMemo, useRef, useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
    cellSize = 55,
}: {
    cellSize?: number;
}) => {
    const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (typeof window === "undefined") return;
            // Calculate exact fit + overscan for edges
            const cols = Math.ceil(window.innerWidth / cellSize) + 4;
            const rows = Math.ceil(window.innerHeight / cellSize) + 4;
            setDimensions({ rows, cols });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [cellSize]);

    if (dimensions.rows === 0) return <div className="absolute inset-0 bg-black" />;

    return (
        <div
            ref={ref}
            className={cn(
                "absolute inset-0 h-full w-full bg-black overflow-hidden",
                "[--cell-border-color:rgba(255,255,255,0.06)]",
            )}
        >
            <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden flex items-center justify-center">
                <ReactorGrid
                    rows={dimensions.rows}
                    cols={dimensions.cols}
                    cellSize={cellSize}
                    borderColor="var(--cell-border-color)"
                />
                <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
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
    cellSize,
    borderColor,
}: ReactorGridProps) => {
    const [activeCells, setActiveCells] = useState<Set<number>>(new Set());

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const runPulse = () => {
            const count = Math.floor(Math.random() * 12) + 6;
            const newCells = new Set<number>();
            const totalCells = rows * cols;

            for (let i = 0; i < count; i++) {
                newCells.add(Math.floor(Math.random() * totalCells));
            }

            setActiveCells(newCells);

            const dwellTime = Math.random() * 1000 + 800;
            timeoutId = setTimeout(() => {
                setActiveCells(new Set());
                timeoutId = setTimeout(runPulse, Math.random() * 1000 + 500);
            }, dwellTime);
        };

        runPulse();
        return () => clearTimeout(timeoutId);
    }, [rows, cols]);

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: `${cols * cellSize}px`,
        height: `${rows * cellSize}px`,
    };

    return (
        <div className="relative z-[3]" style={gridStyle}>
            {Array.from({ length: rows * cols }).map((_, idx) => (
                <GridCell
                    key={idx}
                    isHighlighted={activeCells.has(idx)}
                    borderColor={borderColor}
                />
            ))}
        </div>
    );
};

const GridCell = memo(({
    isHighlighted,
    borderColor
}: {
    isHighlighted: boolean;
    borderColor: string;
}) => {
    return (
        <motion.div
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
});

GridCell.displayName = "GridCell";


