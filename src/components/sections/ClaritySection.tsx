'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPercentage from '@/components/ui/GlassPercentage';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ClaritySection() {
    const items = [
        {
            title: 'Own Online Store',
            description: 'Design, development, and full operational management of your direct-to-consumer channel.',
        },
        {
            title: 'Marketplace Setup',
            description: 'Setup and management for Amazon, Keeta, Talabat, Smile, and other regional platforms.',
        },
        {
            title: 'Product Onboarding',
            description: 'Professional catalog optimization, photography coordination, and specification uploads.',
        },
        {
            title: 'Order Flow',
            description: 'End-to-end order processing, platform coordination, and fulfillment management.',
        },
        {
            title: 'Pricing & Updates',
            description: 'Dynamic pricing strategies, stock synchronization, and continuous content updates.',
        },
        {
            title: 'Performance Tracking',
            description: 'Clear numbers on sales, margins, and growth. We hold ourselves accountable.',
        },
    ];

    return (
        <section className="py-24 relative border-b border-white/5 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                    {/* Left Column: Title & Visual */}
                    <div className="lg:col-span-5 relative mb-16 lg:mb-0">
                        <div className="lg:sticky lg:top-32">
                            <SectionHeading
                                title="We take over ecommerce operations."
                                subtitle="End to end. You focus on the business. We run the ecommerce engine."
                                align="left"
                                className="mb-12"
                            />

                            <div className="relative">
                                {/* Visual Container */}
                                <GlassPercentage />

                                <motion.div
                                    className="absolute -bottom-8 left-0 right-0 text-center lg:text-left"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-sm font-mono text-brand-purple tracking-widest uppercase">
                                        100% Operational Clarity
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Grid Items */}
                    <div className="lg:col-span-7">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={staggerContainer}
                        >
                            {items.map((item, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <GlassCard hover padding="lg" className="h-full border-white/5 bg-white/[0.02]">
                                        <h3 className="text-xl font-semibold mb-3 text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
