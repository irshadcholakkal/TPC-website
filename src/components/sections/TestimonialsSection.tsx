"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Container from "@/components/ui/Container";

export default function TestimonialsSection() {
    return (
        <section className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <Container className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-heading mb-16">
                    Loved by Operators
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </Container>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "Since switching to The Percentage Company, our cross-border logistics have become completely hands-off. We've expanded to 3 new countries in 6 months.",
        name: "Sarah Chen",
        title: "Operations Director, Lumina Brands",
    },
    {
        quote:
            "The unified dashboard is a game changer. Viewing P&L across Amazon, Noon, and our Shopify store in one place saved us 20 hours a week.",
        name: "Marcus Rodriguez",
        title: "CEO, Urban Gear",
    },
    {
        quote: "Their local fulfillment network in Riyadh is incredibly fast. Our customer satisfaction scores in Saudi Arabia jumped by 40%.",
        name: "Aisha Al-Sayed",
        title: "Founder, Desert Bloom",
    },
    {
        quote:
            "We were skeptical about the 'all-in-one' promise, but they delivered. From marketing automation to inventory sync, it just works.",
        name: "James Wilson",
        title: "COO, TechCore",
    },
    {
        quote:
            "The best decision we made for our Q4 strategy. We handled 3x our usual volume without a single operational hiccup.",
        name: "Elena Rossi",
        title: "VP of Sales, Mode Fashion",
    },
];
