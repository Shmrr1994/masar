"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: .25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-2xl

        shadow-2xl

        transition-all

        duration-300

        ${className}
      `}
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/10
        via-transparent
        to-transparent
        pointer-events-none
        "
      />

      {children}

    </motion.div>
  );
}