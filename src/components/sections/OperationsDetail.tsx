'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function OperationsDetail() {
    const steps = [
        {
            id: '01',
            title: 'Inventory Reception',
            description: 'We receive your stock at our global operational hubs. Every item is scanned, verified, and logged instantly into our unified dashboard.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            id: '02',
            title: 'Quality Control',
            description: 'Rigorous checks ensure only perfect products reach your customers. Damaged items are flagged and processed according to your specific protocols.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: '03',
            title: 'Smart Storage',
            description: 'AI-driven shelving optimizes picking paths. High-velocity items are positioned for speed, reducing fulfillment time by up to 40%.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            id: '04',
            title: 'Precision Packing',
            description: 'Custom packaging solutions that protect your brand. We use eco-friendly materials and can include inserts, stickers, or gift notes.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            id: '05',
            title: 'Global Dispatch',
            description: 'Algorithmically selected carriers for the best balance of speed and cost. Real-time tracking links sent automatically to your customers.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background flourish */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
            </div>

            <Container>
                <SectionHeading
                    title="The Workflow"
                    subtitle="Precision at every step of the fulfillment journey."
                    className="mb-20"
                />

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12 md:space-y-24"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={fadeInUp}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`
                                        group relative p-6 rounded-3xl transition-all duration-300
                                        hover:bg-white/5 border border-transparent hover:border-white/5
                                        flex flex-col gap-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}
                                    `}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-brand-purple mb-2 group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all duration-300">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Marker (Desktop) */}
                                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12">
                                    <div className="w-4 h-4 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(119,98,245,0.5)] border-2 border-black" />
                                    <span className="absolute -right-8 text-sm font-mono text-white/30 font-bold tracking-wider">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
