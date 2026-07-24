"use client";

import { motion } from "framer-motion";
import { LogoProps } from "./types";

export default function Logo({
  isScrolled,
}: LogoProps) {
  return (
    <a
      href="#hero"
      className="flex items-center gap-3 group select-none"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
        relative
        w-12
        h-12
        rounded-2xl
        bg-gradient-to-br
        from-brand-green
        to-emerald-600
        flex
        items-center
        justify-center
        shadow-xl
        shadow-emerald-700/20
        overflow-hidden
        "
      >
        <div
          className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          group-hover:opacity-100
          transition
          "
        />

        <span className="text-white text-2xl font-black">
          M
        </span>
      </motion.div>

      <div className="flex flex-col">

        <span
          className={`
          text-xl
          font-black
          transition-colors
          duration-300
          ${
            isScrolled
              ? "text-gray-900"
              : "text-white"
          }
          `}
        >
          MASAR
          <span className="text-brand-green">
            {" | "}
          </span>
          مسار
        </span>

        <span
          className="
          text-[11px]
          text-slate-400
          font-medium
          "
        >
          كل مشوار له مسار
        </span>

      </div>
    </a>
  );
}