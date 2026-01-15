'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { Metadata } from 'next';

const services = [
    {
        category: 'E-commerce Operations',
        items: [
            {
                title: 'Product Catalog Management',
                description: 'Complete product data setup, optimization, and maintenance across all platforms.',
            },
            {
                title: 'Content Creation & Optimization',
                description: 'SEO-optimized product titles, descriptions, and metadata for maximum visibility.',
            },
            {
                title: 'Inventory Management',
                description: 'Real-time stock tracking and synchronization across multiple channels.',
            },
        ],
    },
    {
        category: 'Marketplace Management',
        items: [
            {
                title: 'Multi-Platform Integration',
                description: 'Seamless management across Amazon, Keeta, Talabat, Smile, and custom storefronts.',
            },
            {
                title: 'Order Processing',
                description: 'End-to-end order fulfillment, tracking, and customer communication.',
            },
            {
                title: 'Pricing Strategy',
                description: 'Dynamic pricing optimization based on competition and market trends.',
            },
        ],
    },
    {
        category: 'Jewellery-Specific Handling',
        items: [
            {
                title: 'Premium Product Photography',
                description: 'Professional coordination for high-end jewellery product shoots.',
            },
            {
                title: 'Detailed Specifications',
                description: 'Accurate documentation of materials, dimensions, and certifications.',
            },
            {
                title: 'Luxury Brand Positioning',
                description: 'Maintain premium brand image across all customer touchpoints.',
            },
        ],
    },
    {
        category: 'Reporting & Optimization',
        items: [
            {
                title: 'Performance Analytics',
                description: 'Comprehensive dashboards tracking sales, traffic, and conversion metrics.',
            },
            {
                title: 'Actionable Insights',
                description: 'Data-driven recommendations for growth and optimization.',
            },
            {
                title: 'Regular Reporting',
                description: 'Weekly and monthly reports with clear KPIs and progress tracking.',
            },
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24">
            <Container>
                <SectionHeading
                    title="Our Services"
                    subtitle="Comprehensive e-commerce management tailored for premium brands"
                    className="mb-20"
                />

                <motion.div
                    className="space-y-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <h3 className="text-3xl font-bold mb-8 text-[#f5f5f7]">
                                {service.category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {service.items.map((item, itemIndex) => (
                                    <GlassCard key={itemIndex} hover padding="lg">
                                        <h4 className="text-xl font-semibold mb-3 text-[#f5f5f7]">
                                            {item.title}
                                        </h4>
                                        <p className="text-[#a1a1aa] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </GlassCard>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </div>
    );
}
