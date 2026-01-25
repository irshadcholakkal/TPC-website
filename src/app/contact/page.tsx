'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp } from '@/lib/animations';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitStatus('idle');

            try {
                const response = await fetch('https://formspree.io/f/mzddzozp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', company: '', message: '' });
                } else {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                }
            } catch (error) {
                setIsSubmitting(false);
                setSubmitStatus('error');
            }
        }
    };

    return (
        <main className="relative min-h-screen pt-32 pb-24 bg-black overflow-hidden">
            <Container className="relative z-10 px-4">
                <SectionHeading
                    title="Let's Talk Business"
                    subtitle="We respond to all serious inquiries within 24 hours"
                    className="mb-16 md:mb-24"
                    titleClassName="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                />

                <div className="max-w-2xl mx-auto px-4 md:px-0">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <CardSpotlight
                            className="p-8 md:p-10 border-white/5 bg-white/[0.01]"
                            showSpotlight={false}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[10px] md:text-sm font-bold text-neutral-400 ml-1 uppercase tracking-[0.15em]">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] md:text-sm font-bold text-neutral-400 ml-1 uppercase tracking-[0.15em]">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                                            placeholder="operations@yourbrand.com"
                                        />
                                        {errors.email && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-[10px] md:text-sm font-bold text-neutral-400 ml-1 uppercase tracking-[0.15em]">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                                        placeholder="Enter your brand or company name"
                                    />
                                    {errors.company && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.company}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[10px] md:text-sm font-bold text-neutral-400 ml-1 uppercase tracking-[0.15em]">
                                        Operational Requirements
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all duration-300 resize-none text-sm"
                                        placeholder="Describe your current e-commerce setup and how we can assist..."
                                    />
                                    {errors.message && <p className="text-[10px] text-red-500 font-medium ml-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative inline-flex h-14 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] transition-all"
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#a3a3a3_50%,#ffffff_100%)] opacity-30" />
                                    <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-black px-8 py-3 text-sm md:text-lg font-bold text-white backdrop-blur-3xl transition-colors hover:bg-white/10 border border-white/10">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit Inquiry'
                                        )}
                                    </span>
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white text-center text-xs md:text-sm font-medium"
                                    >
                                        Thank you! We'll respond to your inquiry within 24 hours.
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-xs md:text-sm font-medium"
                                    >
                                        Something went wrong. Please try again or email us directly.
                                    </motion.div>
                                )}
                            </form>
                        </CardSpotlight>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
