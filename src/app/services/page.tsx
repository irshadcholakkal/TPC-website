'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import SectionHeading from '@/components/ui/SectionHeading';
import { FloatingProfitBackground } from '@/components/ui/FloatingProfitBackground';
import { fadeInUp, staggerContainer } from '@/lib/animations';

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
        <main className="relative min-h-screen pt-32 pb-24 bg-black overflow-hidden">
            <FloatingProfitBackground />

            <Container className="relative z-10">
                <SectionHeading
                    title="Our Services"
                    subtitle="Comprehensive e-commerce management tailored for premium brands"
                    className="mb-24"
                    titleClassName="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                />

                <motion.div
                    className="space-y-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={fadeInUp} className="relative">
                            <h3 className="text-4xl font-bold mb-10 text-white flex items-center gap-4">
                                <span className="h-px w-12 bg-white/20" />
                                {service.category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {service.items.map((item, itemIndex) => (
                                    <CardSpotlight
                                        key={itemIndex}
                                        className="min-h-[220px] flex flex-col group border-white/5"
                                    >
                                        <div className="relative z-20">
                                            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-neutral-300 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-neutral-400 leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </CardSpotlight>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </main>
    );
}
