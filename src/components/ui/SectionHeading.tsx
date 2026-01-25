'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
    titleClassName?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    align = 'center',
    className = '',
    titleClassName = '',
}: SectionHeadingProps) {
    const alignClass = align === 'center' ? 'text-center' : 'text-left';

    return (
        <motion.div
            className={`${alignClass} ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
        >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight ${titleClassName || 'text-white'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
