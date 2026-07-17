"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
} & Record<string, unknown>;

/**
 * Magnetic hover button. Renders a motion <a> or motion <button> — kept as
 * two static branches (rather than a dynamically computed component) so
 * React never sees a new component type created during render.
 */
export default function MagneticButton({
  children,
  className,
  as = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {as === "a" ? (
        <motion.a
          data-cursor="button"
          className={cn(className)}
          whileTap={{ scale: 0.96 }}
          {...props}
        >
          {children}
        </motion.a>
      ) : (
        <motion.button
          data-cursor="button"
          className={cn(className)}
          whileTap={{ scale: 0.96 }}
          {...props}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
