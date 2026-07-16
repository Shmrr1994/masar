import React from "react";
import { STATS } from "../../lib/data";
import { motion } from "motion/react";

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="stats" className="py-16 bg-[#0D1321] text-white relative overflow-hidden border-y border-white/5">
      {/* Absolute decorative background elements */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          id="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              id={`stat-item-${index}`}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              {/* Stat Value */}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-2 text-brand-green drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                {stat.value}
              </span>
              
              {/* Stat Label */}
              <span className="text-xs sm:text-sm font-semibold text-slate-400 tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
