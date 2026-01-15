'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function RecentWork() {
    const projects = [
        {
            name: 'Opikam.shop',
            type: 'Full Operations',
            description: 'scaled to 50k monthly orders',
            gradient: 'from-purple-500/20 to-blue-500/20'
        },
        {
            name: 'Terminal Garments',
            type: 'Marketplace Management',
            description: 'Top 1% seller on Amazon UAE',
            gradient: 'from-emerald-500/20 to-cyan-500/20'
        }
    ];

    return (
        <section className="py-24 relative border-b border-white/5">
            <Container>
                <SectionHeading
                    title="Recent Work"
                    subtitle="Selected Projects"
                    className="mb-16"
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {projects.map((project, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group relative">
                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700`} />

                            <GlassCard className="h-full relative overflow-hidden p-8 flex flex-col justify-between min-h-[300px] border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6 group-hover:text-white transition-colors">
                                        {project.type}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8 flex items-center gap-3 text-brand-purple font-medium opacity-60 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>View Case Study</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Abstract BG Shape */}
                                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
