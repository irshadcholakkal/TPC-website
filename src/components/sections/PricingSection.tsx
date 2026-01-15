"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PricingSection() {
    const tiers = [
        {
            name: "Starter",
            price: "Commission Only",
            description: "Perfect for brands starting their direct-to-consumer journey.",
            features: [
                "Store setup & design",
                "Basic operations management",
                "Local fulfillment",
                "Monthly reporting",
            ],
        },
        {
            name: "Growth",
            price: "Hybrid Model",
            description: "For established brands scaling across multiple regions.",
            features: [
                "Advanced custom store",
                "Multi-channel inventory sync",
                "Cross-border logistics",
                "Weekly performance calls",
                "Marketing integration",
            ],
        },
        {
            name: "Scale",
            price: "Custom",
            description: "Enterprise solutions for high-volume operations.",
            features: [
                "Dedicated success manager",
                "Custom API integrations",
                "Warehousing solutions",
                "Real-time analytics dashboard",
                "24/7 Priority support",
                "Strategy workshops",
            ],
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <Container>
                <SectionHeading
                    title="Simple, Transparent Pricing"
                    subtitle="Choose the model that fits your stage of growth. No hidden fees."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <CardSpotlight
                            key={tier.name}
                            className="h-full w-full min-h-[400px] flex flex-col justify-between"
                            color="#0066FF"
                        >
                            <div className="relative z-20">
                                <p className="text-xl font-bold text-white relative z-20 mt-2">
                                    {tier.name}
                                </p>
                                <p className="text-3xl font-bold text-brand-blue mt-4 mb-2">
                                    {tier.price}
                                </p>
                                <div className="text-neutral-200 mt-6 relative z-20">
                                    <ul className="list-none space-y-3">
                                        {tier.features.map((feature, index) => (
                                            <Step key={index} title={feature} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="text-neutral-300 mt-8 relative z-20 text-sm border-t border-white/10 pt-4">
                                {tier.description}
                            </p>
                        </CardSpotlight>
                    ))}
                </div>
            </Container>
        </section>
    );
}

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-neutral-300 text-sm">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-brand-blue mt-0.5 shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};
