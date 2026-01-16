

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
}: ButtonProps) {
    const baseStyles =
        'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-out rounded-2xl backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-white/40 overflow-hidden';

    const variantStyles = {
        primary: `
      bg-white/10 text-white
      border border-white/20
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      hover:bg-white/20
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
    `,
        secondary: `
      bg-white/5 text-white
      border border-white/15
      shadow-[0_6px_24px_rgba(0,0,0,0.3)]
      hover:bg-white/10
      hover:border-white/30
    `,
    };

    const sizeStyles = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-7 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const MotionComponent = motion.a;

    const GlassHighlight = (
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/5 to-transparent opacity-60" />
    );

    if (href) {
        return (
            <MotionComponent
                href={href}
                className={combinedClassName}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
            >
                {GlassHighlight}
                <span className="relative z-10">{children}</span>
            </MotionComponent>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
        >
            {GlassHighlight}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
