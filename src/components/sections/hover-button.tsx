"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

interface HoverButtonProps {
    name: string;
    href: string;
}

export function HoverBorderGradientDemo({
    name,
    href,
}: HoverButtonProps) {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as={Link}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{name}</span>
      </HoverBorderGradient>
    </div>
  );
}

