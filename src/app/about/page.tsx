'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const values = [
    {
        title: 'Systems-Driven',
        description: 'We build repeatable processes that scale. Every operation is documented, optimized, and continuously improved.',
    },
    {
        title: 'Operationally Strong',
        description: 'Execution excellence is our foundation. We deliver consistent results through disciplined operations management.',
    },
    {
        title: 'Accountable',
        description: 'Clear metrics, transparent reporting, and ownership of outcomes. We measure what matters and take responsibility.',
    },
    {
        title: 'Long-Term Partnerships',
        description: 'We invest in understanding your business deeply. Success is measured in years, not quarters.',
    },
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            <Container>
                <SectionHeading
                    title="Built for Serious Operators"
                    subtitle="E-commerce management as a strategic function, not a commodity service"
                    className="mb-20"
                />

                <motion.div
                    className="max-w-4xl mx-auto mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <GlassCard hover={false} padding="lg">
                        <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
                            We manage e-commerce operations for jewellery and retail brands that demand excellence.
                            Our approach is systematic, data-driven, and focused on sustainable growth.
                        </p>
                        <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
                            No marketing fluff. No startup hype. Just disciplined execution across Amazon, Keeta,
                            Talabat, Smile, WhatsApp Commerce, and custom platforms.
                        </p>
                        <p className="text-lg text-[#a1a1aa] leading-relaxed">
                            We handle the complexity of multi-platform operations so you can focus on product,
                            brand, and strategic growth.
                        </p>
                    </GlassCard>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {values.map((value, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <GlassCard hover padding="lg">
                                <h3 className="text-2xl font-bold mb-4 text-[#f5f5f7]">
                                    {value.title}
                                </h3>
                                <p className="text-[#a1a1aa] leading-relaxed">
                                    {value.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </div>
    );
}
