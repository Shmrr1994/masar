"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface PremiumButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export default function PremiumButton({
  children,
  fullWidth = false,
  className = "",
  ...props
}: PremiumButtonProps) {
  return (
    <button
      {...props}
      className={`
        group
        relative
        overflow-hidden

        ${fullWidth ? "w-full" : ""}

        rounded-2xl
        bg-gradient-to-r
        from-brand-green
        to-emerald-500

        px-7
        py-4

        font-bold
        text-white

        shadow-lg
        shadow-brand-green/20

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-[0_0_40px_rgba(34,197,94,.45)]
        hover:tracking-wide

        active:scale-95

        ${className}
      `}
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <span className="relative z-10 flex items-center justify-center gap-3">

        {children}

        <ArrowLeft
          className="
            w-5
            h-5
            transition-transform
            duration-300
            group-hover:-translate-x-1
          "
        />

      </span>
    </button>
  );
}