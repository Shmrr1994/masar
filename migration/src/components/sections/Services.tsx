import React from "react";
import { Car, Truck, Home, Briefcase, Boxes, ArrowLeft } from "lucide-react";
import { SERVICES, Service } from "../../lib/data";
import { motion } from "motion/react";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

// Icon helper to render the correct Lucide icon
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Car":
      return <Car className="w-6 h-6" />;
    case "TruckIcon":
      return <Truck className="w-6 h-6" />;
    case "Home":
      return <Home className="w-6 h-6" />;
    case "Container":
      return <Boxes className="w-6 h-6" />;
    case "Briefcase":
      return <Briefcase className="w-6 h-6" />;
    default:
      return <Truck className="w-6 h-6" />;
  }
};

export default function Services({ onSelectService }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0B0F17] relative overflow-hidden border-t border-white/5">
      {/* Visual background details */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
            خدماتنا اللوجستية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            حلول نقل متكاملة لكافة احتياجاتك
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            نربطك فوراً بأفضل مقدمي الخدمات المحترفين والموثقين في المملكة بأسعار مدروسة وعادلة.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          id="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service: Service) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="sleek-card rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900/40 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title and Descriptions */}
                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-brand-green/90 mb-3 font-heading">
                  {service.subtitle}
                </p>
                <p className="text-[14px] text-slate-400 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>
              </div>

              {/* Booking Trigger Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  id={`btn-service-order-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900/40 hover:bg-brand-green text-slate-200 hover:text-white border border-white/5 hover:border-brand-green font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>طلب فوري</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-[-4px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
