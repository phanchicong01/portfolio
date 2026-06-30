"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scroll-reveal wrapper. Fades + lifts content once as it enters
 * the viewport. Respects reduced-motion via Framer Motion defaults plus the
 * global CSS guard in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
