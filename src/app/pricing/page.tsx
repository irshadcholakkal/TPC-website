'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { FloatingProfitBackground } from '@/components/ui/FloatingProfitBackground';
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
            price: '10-15%',
            period: 'of monthly sales',
            description: 'No fixed monthly fee. Risk-free.',
            highlight: 'Limited / Partners Only',
            features: [
                'Zero fixed costs',
                'Full-service management',
                'Revenue share model',
                'Full performance accountability',
                'Strict qualification criteria',

            ],
            cta: 'Book a Call',
            variant: 'secondary' as const,
        },
    ];

    return (
        <main className="relative min-h-screen flex flex-col pt-50 pb-24 overflow-hidden bg-black">
            <FloatingProfitBackground />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 px-4"
                >
                    <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight mb-6">
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
                        <motion.div key={index} variants={fadeInUp} className="flex h-full">
                            <CardSpotlight
                                className={`flex flex-col w-full min-h-[500px] justify-between transition-all duration-500 'border-white/50 scale-105 z-20'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                        <span className="bg-gradient-to-r from-white to-neutral-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
                                            {plan.highlight}
                                        </span>
                                    </div>
                                )}

                                <div className="relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-white">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <span className="text-sm text-neutral-400 block mb-4 font-medium">{plan.period}</span>
                                    <p className="text-sm text-neutral-500 leading-relaxed mb-8">{plan.description}</p>

                                    <div className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                                                <div className="rounded-full bg-white/10 p-1 shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 relative z-20">
                                    <Link href="#contact" className="block w-full">
                                        <button
                                            className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-white/20"
                                        >
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#a3a3a3_50%,#ffffff_100%)] opacity-30" />
                                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900 border border-white/10">
                                                {plan.cta}
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </CardSpotlight>
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
