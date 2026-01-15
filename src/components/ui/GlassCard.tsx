'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export default function GlassCard({
    children,
    className = '',
    hover = true,
    padding = 'md',
}: GlassCardProps) {
    const paddingStyles = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const baseClassName = `glass-card rounded-2xl ${paddingStyles[padding]} ${className}`;

    if (hover) {
        return (
            <motion.div
                className={`${baseClassName} cursor-pointer`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div
            className={baseClassName}
        >
            {children}
        </div>
    );
}
