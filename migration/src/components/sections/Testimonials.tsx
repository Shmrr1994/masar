import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/data";
import { motion } from "motion/react";

export default function Testimonials() {
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
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0B0F17] relative overflow-hidden border-t border-white/5">
      {/* Absolute decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            ماذا يقول شركاء النجاح عن مسار؟
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            نعتز بآراء وثقة آلاف العملاء الأفراد وملاك الأعمال الذين يعتمدون على منصة مسار يومياً لنقل مركباتهم وبضائعهم.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          id="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="sleek-card p-6 rounded-2xl flex flex-col justify-between relative group transition-all duration-300"
            >
              {/* Top Quote Decorator */}
              <div className="absolute top-6 left-6 text-slate-800/40 group-hover:text-emerald-900/40 transition-colors pointer-events-none">
                <Quote className="w-8 h-8 rotate-180 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-800 shadow referrer-policy='no-referrer'"
                />
                <div className="text-right">
                  <h4 className="text-xs font-bold text-white">{testimonial.name}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-0.5">
                    <span>{testimonial.role}</span>
                    <span>•</span>
                    <span className="text-brand-green font-medium">{testimonial.city}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
