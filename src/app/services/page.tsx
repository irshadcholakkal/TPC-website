'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import SectionHeading from '@/components/ui/SectionHeading';
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
          
            <Container className="relative z-10 px-4">
                <SectionHeading
                    title="Our Services"
                    subtitle="Comprehensive e-commerce management tailored for premium brands"
                    className="mb-16 md:mb-24"
                    titleClassName="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                />

                <motion.div
                    className="space-y-16 md:space-y-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={fadeInUp} className="relative">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
                                <span className="h-px w-12 bg-white/20" />
                                {service.category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {service.items.map((item, itemIndex) => (
                                    <CardSpotlight
                                        key={itemIndex}
                                        className="min-h-[200px] flex flex-col group border-white/5 active:scale-[0.98] transition-transform"
                                    >
                                        <div className="relative z-20">
                                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-neutral-300 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
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
