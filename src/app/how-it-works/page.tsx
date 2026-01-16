'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import SectionHeading from '@/components/ui/SectionHeading';
import { FloatingProfitBackground } from '@/components/ui/FloatingProfitBackground';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
    {
        number: '01',
        title: 'Audit & Onboarding',
        description: 'Comprehensive review of your current operations, platforms, and goals. We identify opportunities and establish clear KPIs.',
        duration: '1-2 weeks',
    },
    {
        number: '02',
        title: 'Platform Setup',
        description: 'Integration with your existing systems, catalog migration, and optimization. Complete setup across all relevant marketplaces.',
        duration: '2-3 weeks',
    },
    {
        number: '03',
        title: 'Weekly Operational Cycles',
        description: 'Ongoing management of orders, inventory, pricing, and content. Regular optimization based on performance data.',
        duration: 'Continuous',
    },
    {
        number: '04',
        title: 'Monitoring & Reporting',
        description: 'Real-time performance tracking with weekly updates and monthly strategic reviews. Data-driven recommendations for growth.',
        duration: 'Continuous',
    },
];

export default function HowItWorksPage() {
    return (
        <main className="relative min-h-screen pt-32 pb-24 bg-black overflow-hidden">
            <FloatingProfitBackground />

            <Container className="relative z-10">
                <SectionHeading
                    title="How It Works"
                    subtitle="A systematic approach to e-commerce excellence"
                    className="mb-24"
                    titleClassName="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                />

                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Vertical line with premium glow */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content Block */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <CardSpotlight
                                        className="h-full w-full min-h-[220px] p-8 border-white/5"
                                    >
                                        <div className="relative z-20">
                                            <div className={`flex items-center gap-6 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                                <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                                    {step.number}
                                                </span>
                                                <div className={index % 2 === 0 ? 'md:text-right' : 'text-left'}>
                                                    <h3 className="text-3xl font-bold text-white mb-2">
                                                        {step.title}
                                                    </h3>
                                                    <span className="text-sm font-semibold text-white tracking-wide uppercase px-3 py-1 bg-white/10 rounded-full">
                                                        {step.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-neutral-400 leading-relaxed text-lg font-medium">
                                                {step.description}
                                            </p>
                                        </div>
                                    </CardSpotlight>
                                </div>

                                {/* Center dot with pulse effect */}
                                <div className="hidden md:flex relative items-center justify-center w-6 h-6 z-10">
                                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-slate-950 z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </main>
    );
}
