'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function TrustSection() {
    const platforms = [
        { name: 'Custom Store' },
        { name: 'Shopify' },
        { name: 'Medusa' },
        { name: 'Amazon' },
        { name: 'Noon' },
        { name: 'Keeta' },
        { name: 'Talabat' },
        { name: 'Smile' },
        { name: 'WhatsApp' },

    ];

    const items = platforms.map(p => ({
        name: p.name,

        content: (
            <div className="flex items-center justify-center gap-4">
                {/* <div className="w-8 h-8 text-white">
                </div> */}
                <span className="text-xl font-bold text-gray-300">{p.name}</span>
            </div>
        )
    }


    ));

    return (
        <section className="py-0 relative bg-black overflow-hidden">


            <Container className="relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={fadeInUp}

                    className="text-center mb-12"
                >
                    <h2 className="text-xl md:text-3xl font-medium text-gray-400">
                        We operate your business across leading platforms                    </h2>
                </motion.div>

                <InfiniteMovingCards
                    items={items}
                    direction="right"
                    speed="normal"
                />
            </Container>
        </section>
    );
}
