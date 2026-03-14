"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Theme } from "@/components/providers/UISettingsProvider";

type ThreeDMarqueeProps = {
  images: string[];
  className?: string;
  theme?: Theme;
};

const CARD_HEIGHTS = [250, 310, 238, 286] as const;
const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Crect width='4' height='4' fill='%23040b14'/%3E%3C/svg%3E";

export function ThreeDMarquee({ images, className, theme = "dark" }: ThreeDMarqueeProps) {
  const safeImages = images.length > 0 ? images : [FALLBACK_IMAGE];
  const columns = [
    safeImages.filter((_, index) => index % 3 === 0),
    safeImages.filter((_, index) => index % 3 === 1),
    safeImages.filter((_, index) => index % 3 === 2),
  ].map((column, index) => (column.length > 0 ? column : [safeImages[index % safeImages.length]]));
  const frameClassName =
    theme === "light"
      ? "border-black/[0.04] bg-transparent shadow-[0_16px_38px_rgba(15,23,42,0.05)]"
      : "border-white/[0.08] bg-[#07080a] shadow-[0_32px_80px_rgba(0,0,0,0.46)]";
  const innerBorderClassName = theme === "light" ? "border-black/[0.04]" : "border-white/[0.06]";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative h-full w-full overflow-hidden", className)}
    >
      <div
        className="absolute inset-0 flex items-center justify-center px-2 py-3 sm:px-4 sm:py-6"
        style={{
          perspective: "2200px",
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center gap-5 sm:gap-6"
          style={{
            transform: "translateX(8%) rotateX(22deg) rotateY(-26deg) rotateZ(-14deg) scale(1.24)",
            transformStyle: "preserve-3d",
          }}
        >
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              className="flex h-[178%] w-[33.5%] min-w-[225px] flex-col gap-5 sm:min-w-[262px] sm:gap-6"
              animate={{ y: columnIndex === 1 ? ["-50%", "0%"] : ["0%", "-50%"] }}
              transition={{
                duration: 32 + columnIndex * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...column, ...column].map((image, imageIndex) => (
                <div
                  key={`${columnIndex}-${imageIndex}`}
                  className={cn(
                    "relative overflow-hidden rounded-[24px] border",
                    frameClassName,
                  )}
                  style={{
                    height: `${CARD_HEIGHTS[(imageIndex + columnIndex) % CARD_HEIGHTS.length]}px`,
                    transform: `translateZ(${28 + (imageIndex % 4) * 10}px)`,
                  }}
                >
                  <div
                    className={cn(
                      "absolute inset-[10px] z-10 rounded-[18px] border",
                      innerBorderClassName,
                    )}
                  />
                  <Image
                    src={image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 180px, 30vw"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
