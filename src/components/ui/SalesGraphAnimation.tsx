'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generateDataPoints = (points: number) => {
    return Array.from({ length: points }, (_, i) => ({
        x: i,
        y: 20 + Math.random() * 30 + (i * 5) // Upward trend
    }));
};

export default function SalesGraphAnimation() {
    const [data, setData] = useState(generateDataPoints(15));

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => {
                const newPoints = [...prev.slice(1), {
                    x: prev[prev.length - 1].x + 1,
                    y: Math.min(90, Math.max(10, prev[prev.length - 1].y + (Math.random() - 0.3) * 15))
                }];
                return newPoints;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Create path string for the line
    const createPath = (points: typeof data) => {
        const width = 100;
        const height = 100;
        const xStep = width / (points.length - 1);

        let path = `M 0 ${height - points[0].y}`;

        points.forEach((p, i) => {
            if (i === 0) return;
            const x = i * xStep;
            const y = height - p.y;
            // Bezier curve for smooth line
            const prevX = (i - 1) * xStep;
            const prevY = height - points[i - 1].y;
            const cp1x = prevX + xStep / 2;
            const cp1y = prevY;
            const cp2x = x - xStep / 2;
            const cp2y = y;

            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
        });

        return path;
    };

    // Create area path (close the loop at the bottom)
    const createAreaPath = (points: typeof data) => {
        const linePath = createPath(points);
        return `${linePath} L 100 100 L 0 100 Z`;
    };

    return (
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
            {/* Glow Behind */}
            <div className="absolute inset-0 bg-brand-purple/20 blur-[80px] rounded-full animate-pulse-slow font-heading" />

            {/* Glass Card Container */}
            <motion.div
                className="relative w-full h-full glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <div className="text-gray-400 text-sm mb-1">Total Revenue</div>
                        <div className="text-3xl font-bold text-white flex items-center gap-2">
                            $124,500
                            <span className="text-sm font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center">
                                <span className="mr-1">▲</span> 24%
                            </span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30">
                        <span className="text-brand-purple font-bold text-lg">%</span>
                    </div>
                </div>

                {/* Graph Container */}
                <div className="flex-1 relative w-full h-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                        {/* Area Gradient */}
                        <defs>
                            <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7762F5" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#7762F5" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Animated Area */}
                        <motion.path
                            d={createAreaPath(data)}
                            fill="url(#graphGradient)"
                            animate={{ d: createAreaPath(data) }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {/* Animated Line */}
                        <motion.path
                            d={createPath(data)}
                            fill="none"
                            stroke="#7762F5"
                            strokeWidth="1"
                            animate={{ d: createPath(data) }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(119, 98, 245, 0.5))' }}
                        />

                        {/* Active Dot */}
                        <motion.circle
                            cx="100"
                            cy={100 - data[data.length - 1].y}
                            r="3"
                            fill="#FFFFFF"
                            stroke="#7762F5"
                            strokeWidth="2"
                            animate={{ cy: 100 - data[data.length - 1].y }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        <motion.circle
                            cx="100"
                            cy={100 - data[data.length - 1].y}
                            r="8"
                            fill="none"
                            stroke="#7762F5"
                            opacity="0.5"
                            strokeWidth="1"
                            animate={{
                                cy: 100 - data[data.length - 1].y,
                                r: [4, 12],
                                opacity: [0.8, 0]
                            }}
                            transition={{
                                cy: { duration: 1, ease: "easeInOut" },
                                default: { duration: 1.5, repeat: Infinity, ease: "easeOut" }
                            }}
                        />
                    </svg>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-4 left-6 flex gap-4">
                    <div className="bg-black/40 backdrop-blur-md rounded-lg px-3 py-2 border border-white/5">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">Orders</div>
                        <div className="text-white font-bold">1,284</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md rounded-lg px-3 py-2 border border-white/5">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">Conversion</div>
                        <div className="text-white font-bold">4.2%</div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
