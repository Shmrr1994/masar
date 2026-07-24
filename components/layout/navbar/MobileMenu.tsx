"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall } from "lucide-react";

import CTAButton from "./CTAButton";
import { MobileMenuProps } from "./types";

export default function MobileMenu({
  open,
  setOpen,
  items,
  onOpenBooking,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (
        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: .65 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
            }}
            className="
            fixed
            top-0
            right-0
            bottom-0
            w-80
            max-w-[90vw]
            glass
            border-l
            border-white/10
            shadow-2xl
            z-50
            p-6
            flex
            flex-col
            "
          >

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-black text-xl">
                  MASAR
                </h3>

                <p className="text-xs text-slate-400">
                  كل مشوار له مسار
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                p-2
                rounded-xl
                hover:bg-white/5
                transition
                "
              >
                <X className="w-5 h-5"/>
              </button>

            </div>

            {/* Links */}

            <nav className="mt-10 flex flex-col gap-2">

              {items.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  rounded-xl
                  px-4
                  py-3
                  font-semibold
                  transition
                  hover:bg-white/5
                  hover:text-brand-green
                  "
                >
                  {item.label}
                </a>

              ))}

            </nav>

            {/* Footer */}

            <div className="mt-auto pt-8">

              <a
                href="tel:+966564094328"
                className="
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                py-3
                mb-5
                hover:bg-white/10
                transition
                "
              >
                <PhoneCall className="w-4 h-4 text-brand-green"/>

                <span>
                  +966 56 409 4328
                </span>

              </a>

              <CTAButton
                mobile
                onClick={() => {

                  setOpen(false);

                  onOpenBooking();

                }}
              />

            </div>

          </motion.aside>

        </>
      )}

    </AnimatePresence>
  );
}