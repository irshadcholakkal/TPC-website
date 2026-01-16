'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    const [activeSection, setActiveSection] = useState('hero');

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links = [
        { href: '#hero', label: 'Home', isAnchor: true },
        { href: '#services', label: 'Services', isAnchor: true },
        { href: '#how-it-works', label: 'How It Works', isAnchor: true },
        { href: '#testimonials', label: 'About', isAnchor: true },
        { href: '#pricing', label: 'Pricing', isAnchor: true },
        { href: '#contact', label: 'Contact', isAnchor: true },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        links.forEach((link) => {
            if (link.href.startsWith('#')) {
                const element = document.getElementById(link.href.substring(1));
                if (element) observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setMobileMenuOpen(false);
            }
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            // animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleSmoothScroll(e, '#hero')}
                        className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                    >
                        The Percentage Company
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`text-sm font-medium transition-all duration-300 relative cursor-pointer ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}

                        {/* <Link href="/contact" className="relative h-10 px-6 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-white/20">
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#a3a3a3_50%,#ffffff_100%)] opacity-30" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-white/10 border border-white/10 relative z-10">
                                Get Started
                            </span>
                        </Link> */}

                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer">
                            Get Started
                        </a>
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
                        className="md:hidden py-6 border-t border-white/5 bg-black/95 backdrop-blur-2xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex flex-col gap-2 px-6">
                            {links.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${isActive
                                            ? 'text-white bg-white/10'
                                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="block px-4 py-3 mt-2 text-center bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </div >
        </motion.nav >
    );
}
