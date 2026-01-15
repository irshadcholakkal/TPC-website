// "use client";

// import { cn } from "@/lib/utils";
// import { motion, MotionValue, useScroll, useTransform, useMotionValueEvent } from "motion/react";
// import React from "react";

// const transition = { duration: 0, ease: "linear" };

// export const GoogleGeminiEffect = ({
//     pathLengths,
//     title,
//     description,
//     className,
//     children,
// }: {
//     pathLengths: MotionValue[];
//     title?: string;
//     description?: string;
//     className?: string;
//     children?: React.ReactNode;
// }) => {
//     return (
//         <div className={cn("sticky top-32 w-full", className)}>
//             {/* Text layer */}
//             <div className="relative z-20">
//                 <p className="text-3xl md:text-6xl font-semibold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
//                     {title || "Your Operations Layer"}
//                 </p>

//                 <p className="text-sm md:text-lg text-center text-neutral-400 mt-4 max-w-xl mx-auto">
//                     {description || "A unified system running your inventory, logistics, sales, and data."}
//                 </p>

//                 {children && (
//                     <div className="mt-16 flex justify-center">
//                         {children}
//                     </div>
//                 )}
//             </div>

//             {/* SVG system */}
//             <svg
//                 width="1440"
//                 height="890"
//                 viewBox="0 0 1440 890"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute -top-48 w-full opacity-80"
//             >
//                 {/* Animated paths */}
//                 {[0, 1, 2, 3, 4].map((i) => (
//                     <motion.path
//                         key={i}
//                         d={[
//                             "M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5",
//                             "M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942",
//                             "M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197",
//                             "M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5",
//                             "M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5"
//                         ][i]}
//                         stroke={["#FFB7C5", "#FFDDB7", "#B1C5FF", "#4FABFF", "#076EFF"][i]}
//                         strokeWidth="2"
//                         fill="none"
//                         initial={{ pathLength: 0 }}
//                         style={{ pathLength: pathLengths[i] }}
//                     // transition={transition}
//                     />
//                 ))}
//             </svg>
//         </div>
//     );
// };
// import FeaturesBento from "@/components/sections/FeaturesSection";

// export default function GoogleGeminiEffectDemo() {
//     const ref = React.useRef<HTMLDivElement>(null);
//     const [step, setStep] = React.useState(0);

//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start start", "end start"],
//     });

//     useMotionValueEvent(scrollYProgress, "change", (v) => {
//         if (v < 0.2) setStep(0);
//         else if (v < 0.35) setStep(1);
//         else if (v < 0.5) setStep(2);
//         else if (v < 0.65) setStep(3);
//         else if (v < 0.8) setStep(4);
//         else setStep(5);
//     });

//     const paths = [
//         useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
//         useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
//         useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
//         useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
//         useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
//     ];

//     return (
//         <section ref={ref} className="relative h-[350vh] bg-black w-full pt-40 overflow-clip">
//             <GoogleGeminiEffect
//                 title="Your Operations Layer"
//                 description="We don’t add tools. We operate systems."
//                 pathLengths={paths}
//             >
//                 <FeaturesBento activeIndex={step - 1} />
//             </GoogleGeminiEffect>
//         </section>
//     );
// }
