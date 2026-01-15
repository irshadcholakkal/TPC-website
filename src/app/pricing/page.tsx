'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import Link from 'next/link';

export default function Pricing() {
    const plans = [
        {
            name: 'Fixed Monthly',
            price: 'AED 4,000',
            period: '/ month',
            description: 'Predictable costs for established businesses.',
            features: [
                'Complete catalog management',
                'Order processing & fulfillment',
                'Weekly performance reports',
                'Email & WhatsApp support',
                'Unlimited SKUs',
                'No sales percentage taken'
            ],
            cta: 'Book a Call',
            variant: 'secondary' as const,
        },
        {
            name: 'Fixed + Performance',
            price: 'AED 2,000',
            period: '/ month + 2%',
            description: 'Best for brands scaling steadily.',
            highlight: 'Recommended',
            features: [
                'Everything in Fixed Monthly',
                '2% of monthly sales',
                'AED 2,000 waived if sales > AED 100k',
                'Performance-based optimization',
                'Priority support',
                'Dedicated account manager'
            ],
            cta: 'Book a Call',
            variant: 'primary' as const,
        },
        {
            name: 'Performance-Based',
            price: '6%',
            period: 'of monthly sales',
            description: 'No fixed monthly fee. Risk-free.',
            highlight: 'Limited / Partners Only',
            features: [
                'Zero fixed costs',
                'Full-service management',
                'Revenue share model',
                'Full performance accountability',
                'Strict qualification criteria',
                'Trial period required'
            ],
            cta: 'Book a Call',
            variant: 'secondary' as const,
        },
    ];

    return (
        <main className="relative min-h-screen flex flex-col pt-50 pb-24 overflow-hidden bg-black">
            <BackgroundRippleEffect />
            
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-6xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight mb-6">
                        Simple Pricing. Clear Responsibility.
                    </h1>
                    <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-neutral-500 dark:text-neutral-400">
                        Choose the model that aligns with your business stage and goals.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10 max-w-7xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {plans.map((plan, index) => (
                        <motion.div key={index} variants={fadeInUp} className="flex pt-6">
                            <GlassCard
                                className={`flex flex-col w-full relative group transition-all duration-500 ${
                                    'border-brand-blue/40 shadow-[0_0_50px_rgba(192,192,192,0.15)] scale-105' 
                                }`}
                                padding="lg"
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <span className="bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(192,192,192,0.3)]">
                                            {plan.highlight}
                                        </span>
                                    </div>
                                )}

                                  {/* Highlight Badge - Fixed positioning */}
                         

                                {/* Subtle silver shade on hover */}
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] rounded-2xl transition-all duration-500 pointer-events-none" />

                                <div className="text-center mb-10 pt-6 relative z-10">
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-00 to-white mb-3 tracking-tight">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-1 mb-3">
                                        <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <span className="text-sm text-neutral-400 block mb-4 font-medium">{plan.period}</span>
                                    <p className="text-sm text-neutral-500 leading-relaxed px-2">{plan.description}</p>
                                </div>

                                <div className="flex-grow mb-10 space-y-5 relative z-10">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                                            <div className="rounded-full bg-neutral-800/50 p-1 shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10">
                                    
                                        <Link href="/contact">
                                            <button
                                                className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-0"
                                            >
                                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                                    {plan.cta}
                                                </span>
                                            </button>
                                        </Link>
                                    
                                
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-20 text-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        All plans include secure data handling, regular backups, and compliance with platform policies.
                        Custom enterprise solutions available for larger operations.
                    </p>
                </motion.div>
            </Container>
        </main>
    );
}
