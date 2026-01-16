'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { FloatingProfitBackground } from '@/components/ui/FloatingProfitBackground';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const values = [
    {
        title: 'Systems-Driven Excellence',
        description: 'We build repeatable, scalable processes. Every operation is documented, optimized, and continuously improved for maximum efficiency.',
        icon: '01',
    },
    {
        title: 'Operational Mastery',
        description: 'Execution excellence is our foundation. We deliver consistent, measurable results through disciplined operations management.',
        icon: '02',
    },
    {
        title: 'Complete Accountability',
        description: 'Clear metrics, transparent reporting, and ownership of outcomes. We measure what matters and take full responsibility.',
        icon: '03',
    },
    {
        title: 'Long-Term Partnerships',
        description: 'We invest in understanding your business deeply. Success is measured in sustained growth, not short-term wins.',
        icon: '04',
    },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen py-24 bg-black overflow-hidden">
            <FloatingProfitBackground />

            <Container className="relative z-10">
                {/* Header Section */}
                <motion.div
                    className="max-w-5xl mx-auto mb-32 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-8">
                        About The Percentage Company
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[0.95]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                            Built for Serious
                        </span>
                        <br />
                        <span className="text-neutral-500">Operators</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        E-commerce management as a strategic function, not a commodity service
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    className="max-w-4xl mx-auto mb-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <CardSpotlight
                        className="p-12 md:p-16 border-white/5 bg-white/[0.01]"
                    >
                        <div className="relative z-20 space-y-10">
                            <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
                                We manage e-commerce operations for <span className="font-semibold">jewellery and retail brands</span> that demand excellence.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-white/60 to-transparent" />
                            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                                Our approach is systematic, data-driven, and focused on sustainable growth across Amazon, Keeta, Talabat, Smile, WhatsApp Commerce, and custom platforms.
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-base text-neutral-500 font-medium uppercase tracking-wider">
                                    No marketing fluff. No startup hype. Just disciplined execution.
                                </p>
                            </div>
                        </div>
                    </CardSpotlight>
                </motion.div>

                {/* Core Values Section */}
                <div className="mb-16">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Our Core Values
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {values.map((value, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <CardSpotlight
                                    className="h-full border-white/5 p-8 bg-white/[0.01]"
                                >
                                    <div className="relative z-20">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                                                <span className="text-sm font-mono text-neutral-400">{value.icon}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                                            {value.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed text-base">
                                            {value.description}
                                        </p>
                                    </div>
                                </CardSpotlight>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
