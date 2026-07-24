"use client";

import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButtonProps } from "./types";

export default function CTAButton({
  onClick,
  mobile = false,
}: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={`
        sleek-btn
        flex
        items-center
        justify-center
        gap-2
        font-bold
        rounded-2xl
        transition-all
        duration-300
        shadow-xl
        shadow-emerald-800/20
        hover:shadow-emerald-700/40
        ${
          mobile
            ? "w-full py-4 text-base"
            : "px-6 py-3 text-sm"
        }
      `}
    >
      <Sparkles className="w-4 h-4" />
      <span>احجز الآن</span>
      <ArrowLeft className="w-4 h-4 rotate-180" />
    </motion.button>
  );
}