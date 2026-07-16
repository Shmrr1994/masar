import React from "react";
import { Search, FileCheck, MapPin } from "lucide-react";
import { HOW_IT_WORKS } from "../../lib/data";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Icon switcher for each step
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-8 h-8 text-white" />;
      case 1:
        return <FileCheck className="w-8 h-8 text-white" />;
      case 2:
        return <MapPin className="w-8 h-8 text-white" />;
      default:
        return <Search className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#090D16] relative overflow-hidden border-t border-white/5">
      {/* Decorative vertical lines or dots */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block z-0 max-w-5xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
            آلية العمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            كيف تطلب خدمة عبر مسار؟
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            صممنا المنصة لتجعل عمليات النقل واللوجستيات مريحة وسريعة في 3 خطوات بسيطة للغاية.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          id="how-it-works-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10"
        >
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={index}
              id={`step-card-${index}`}
              variants={stepVariants}
              className="sleek-card rounded-2xl p-8 flex flex-col items-center text-center relative group transition-all duration-300"
            >
              {/* Step counter badge */}
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 group-hover:text-emerald-400 transition-colors">
                {step.step}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center mb-6 shadow-md shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-300 relative">
                {getStepIcon(index)}
                {/* Micro particle/dot representing step connection */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-4 border-[#090D16]" />
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-400 leading-relaxed font-normal">
                {step.description}
              </p>

              {/* Graphical connector (desktop only, hides on last item) */}
              {index < 2 && (
                <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 hidden lg:block text-slate-600 z-20 group-hover:text-brand-green transition-colors font-mono font-bold text-lg pointer-events-none">
                  ←
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
