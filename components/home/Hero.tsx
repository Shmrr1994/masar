"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Clock3,
  Star,
  Truck,
  MapPinned,
} from "lucide-react";

import PremiumButton from "@/components/ui/PremiumButton";
import GlassCard from "@/components/ui/GlassCard";

const stats = [
  {
    icon: Truck,
    value: "25K+",
    label: "عملية نقل",
  },
  {
    icon: MapPinned,
    value: "80+",
    label: "مدينة",
  },
  {
    icon: Star,
    value: "4.9",
    label: "تقييم العملاء",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "خدمة مستمرة",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20">

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-b

          from-[#06140d]

          via-[#0a2216]

          to-[#06140d]
          "
        />

        <div
          className="
          absolute
          inset-0

          opacity-[0.08]

          bg-[url('/images/saudi-pattern.png')]

          bg-cover

          bg-center
          "
        />

      </div>

      {/* Glow */}

      <div
        className="
        absolute

        top-[-220px]

        left-1/2

        -translate-x-1/2

        w-[850px]

        h-[850px]

        rounded-full

        bg-emerald-500/20

        blur-[170px]

        -z-10
        "
      />

      <div
        className="
        max-w-7xl

        mx-auto

        px-6

        lg:px-8

        w-full

        grid

        lg:grid-cols-2

        gap-20

        items-center
        "
      >
              {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300 backdrop-blur-xl">

            <ShieldCheck className="h-5 w-5" />

            منصة النقل الذكي داخل المملكة العربية السعودية

          </div>

          <div className="space-y-6">

            <h1
              className="
              text-5xl
              lg:text-7xl
              font-black
              leading-tight
              text-white
              "
            >
              كل مشوار
              <br />

              <span
                className="
                bg-gradient-to-r
                from-emerald-300
                via-green-400
                to-emerald-500
                bg-clip-text
                text-transparent
                "
              >
                له مسار
              </span>

            </h1>

            <p
              className="
              max-w-xl
              text-lg
              leading-9
              text-slate-300
              "
            >
              منصة احترافية لنقل السيارات والأثاث والخدمات اللوجستية داخل
              المملكة العربية السعودية بسرعة وأمان وشفافية كاملة.
            </p>

          </div>

          <div className="flex flex-wrap gap-4">

            <PremiumButton>

              احجز الآن

            </PremiumButton>

            <button
              className="
              rounded-2xl
              border
              border-white/15
              bg-white/5
              px-8
              py-4
              font-bold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-emerald-400
              hover:bg-white/10
              "
            >
              اعرف المزيد
            </button>

          </div>

          <div
            className="
            grid
            grid-cols-2
            gap-5
            pt-8
            lg:grid-cols-4
            "
          >
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.label}
                  className="p-5 text-center"
                >
                  <Icon className="mx-auto mb-3 h-7 w-7 text-emerald-400" />

                  <h3 className="text-2xl font-black text-white">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    {item.label}

                  </p>

                </GlassCard>
              );
            })}
          </div>
        </motion.div>
                {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative flex justify-center"
        >
          {/* Main Glass Card */}

          <GlassCard
            className="
            relative

            w-full

            max-w-[560px]

            p-8

            lg:p-10
            "
          >
            {/* Truck */}

            <motion.div
              animate={{
                x: [-8, 8, -8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <Truck
                className="
                h-44
                w-44
                text-emerald-400
                drop-shadow-[0_0_35px_rgba(16,185,129,.45)]
                "
              />
            </motion.div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">

                <span className="text-slate-300">

                  حالة الطلب

                </span>

                <span className="font-bold text-emerald-400">

                  جاري التنفيذ

                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">

                <span className="text-slate-300">

                  متوسط الوصول

                </span>

                <span className="font-bold text-white">

                  20 دقيقة

                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">

                <span className="text-slate-300">

                  تغطية الخدمة

                </span>

                <span className="font-bold text-white">

                  جميع مدن المملكة

                </span>

              </div>

            </div>
                        {/* Floating Cards */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
              absolute
              -left-8
              top-10
              hidden
              lg:block
              "
            >
              <GlassCard className="px-6 py-4">

                <p className="text-sm text-slate-300">

                  سرعة الاستجابة

                </p>

                <h3 className="mt-2 text-2xl font-black text-emerald-400">

                  &lt; 5 دقائق

                </h3>

              </GlassCard>

            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
              absolute
              -right-8
              bottom-10
              hidden
              lg:block
              "
            >
              <GlassCard className="px-6 py-4">

                <p className="text-sm text-slate-300">

                  العملاء السعداء

                </p>

                <h3 className="mt-2 text-2xl font-black text-emerald-400">

                  +25000

                </h3>

              </GlassCard>

            </motion.div>

          </GlassCard>

        </motion.div>

      </div>

    </section>

  );
}