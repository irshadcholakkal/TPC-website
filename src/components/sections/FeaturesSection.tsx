import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Container from "@/components/ui/Container";

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <Container>
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-heading">
                        Comprehensive Operations
                    </h2>
                    <p className="mt-4 text-neutral-400 text-lg">
                        Everything you need to run your e-commerce empire from a single dashboard.
                    </p>
                </div>

                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </Container>
        </section>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse border border-white/10" />
);
const items = [
    {
        title: "Global Inventory Sync",
        description: "Real-time synchronization across Amazon, Noon, and local platforms.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-brand-blue" />,
    },
    {
        title: "Automated Logistics",
        description: "Smart routing for deliveries to minimize customized costs.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-brand-blue" />,
    },
    {
        title: "Financial Analytics",
        description: "Profit & Loss consolidated view for all your channels.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-brand-blue" />,
    },
    {
        title: "Multi-Channel Setup",
        description:
            "Launch on new marketplaces in a single click. We handle the registration and compliance.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-brand-blue" />,
    },
    {
        title: "Marketing Automation",
        description: "Unified ad campaigns that auto-optimize based on ROI.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-brand-blue" />,
    },
];
