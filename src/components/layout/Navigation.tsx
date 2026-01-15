'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/how-it-works', label: 'How It Works' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold font-heading text-gradient-blue hover:opacity-80 transition-opacity duration-300">
                        The Percentage Company
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 relative ${pathname === link.href
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue shadow-[0_0_10px_rgba(0,102,255,0.5)]"
                                        layoutId="activeLink"
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    />
                                )}
                            </Link>
                        ))}

                        <Link href="/contact" className="px-5 py-2 rounded-full bg-brand-blue/1 border border-brand-blue/30 text-brand-blue text-sm font-semibold hover:bg-brand-blue/10 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden py-4 border-t border-white/5 bg-black/90 backdrop-blur-xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block py-3 px-4 text-sm font-medium transition-colors duration-300 ${pathname === link.href
                                    ? 'text-brand-blue bg-white/5'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-4 py-3">
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full px-5 py-3 rounded-full bg-brand-blue text-white text-sm font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
