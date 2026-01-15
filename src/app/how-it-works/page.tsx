'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
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
        <div className="pt-32 pb-24">
            <Container>
                <SectionHeading
                    title="How It Works"
                    subtitle="A systematic approach to e-commerce excellence"
                    className="mb-20"
                />

                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent hidden md:block" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <GlassCard hover padding="lg">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-5xl font-bold text-[#E5E7EB] opacity-50">
                                                {step.number}
                                            </span>
                                            <div className={index % 2 === 0 ? 'md:ml-auto' : ''}>
                                                <h3 className="text-2xl font-bold text-[#f5f5f7]">
                                                    {step.title}
                                                </h3>
                                                <span className="text-sm text-[#71717a]">{step.duration}</span>
                                            </div>
                                        </div>
                                        <p className="text-[#a1a1aa] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </GlassCard>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex w-4 h-4 rounded-full bg-[#E5E7EB] ring-4 ring-[#0b0b0f] z-10 flex-shrink-0" />

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
