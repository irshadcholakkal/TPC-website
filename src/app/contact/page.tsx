'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid - in production, this would submit to an API
            console.log('Form submitted:', formData);
            alert('Thank you for your message. We will respond within 24 hours.');
            setFormData({ name: '', email: '', company: '', message: '' });
        }
    };

    return (
        <div className="pt-32 pb-24">
            <Container size="md">
                <SectionHeading
                    title="Let's Talk"
                    subtitle="We respond within 24 hours"
                    className="mb-16"
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <GlassCard hover={false} padding="lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#f5f5f7] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f7] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-[#f5f5f7] mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
                                    placeholder="Your company"
                                />
                                {errors.company && (
                                    <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f7] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#f5f5f7] placeholder-[#71717a] focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300 resize-none"
                                    placeholder="Tell us about your e-commerce operations..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            <Button type="submit" variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </GlassCard>
                </motion.div>
            </Container>
        </div>
    );
}
