
// // // "use client";

// // // import { useScroll, useTransform } from "motion/react";
// // // import React from "react";
// // // import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
// // // import FeaturesBento from "@/components/sections/FeaturesSection";

// // // export default function GoogleGeminiEffectDemo() {
// // //     const ref = React.useRef(null);
// // //     const { scrollYProgress } = useScroll({
// // //         target: ref,
// // //         offset: ["start start", "end start"],
// // //     });

// // //     const paths = [
// // //         useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
// // //         useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
// // //         useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
// // //         useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
// // //         useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
// // //     ];

// // //     return (
// // //         <section ref={ref} className="relative h-[350vh] bg-black w-full pt-40 overflow-clip">
// // //             <GoogleGeminiEffect
// // //                 title="Your Operations Layer"
// // //                 description="We don’t add tools. We operate systems."
// // //                 pathLengths={paths}
// // //             >
// // //                 <FeaturesBento />
// // //             </GoogleGeminiEffect>
// // //         </section>
// // //     );
// // // }





// // "use client";

// // import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
// // import React from "react";
// // import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
// // import FeaturesBento from "@/components/sections/FeaturesSection";

// // export default function GoogleGeminiEffectDemo() {
// //     const ref = React.useRef<HTMLDivElement>(null);
// //     const [step, setStep] = React.useState(0);

// //     const { scrollYProgress } = useScroll({
// //         target: ref,
// //         offset: ["start start", "end start"],
// //     });

// //     useMotionValueEvent(scrollYProgress, "change", (v) => {
// //         if (v < 0.2) setStep(0);
// //         else if (v < 0.35) setStep(1);
// //         else if (v < 0.5) setStep(2);
// //         else if (v < 0.65) setStep(3);
// //         else if (v < 0.8) setStep(4);
// //         else setStep(5);
// //     });

// //     const paths = [
// //         useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
// //         useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
// //         useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
// //         useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
// //         useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
// //     ];

// //     return (
// //         <section ref={ref} className="relative h-[350vh] bg-black w-full pt-40 overflow-clip">
// //             <GoogleGeminiEffect
// //                 title="Your Operations Layer"
// //                 description="We don’t add tools. We operate systems."
// //                 pathLengths={paths}
// //             >
// //                 <FeaturesBento activeIndex={step - 1} />
// //             </GoogleGeminiEffect>
// //         </section>
// //     );
// // }
// "use client";

// import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
// import React from "react";
// import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
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
