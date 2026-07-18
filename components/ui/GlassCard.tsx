import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export default function GlassCard({
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div
      {...props}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-2xl

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:scale-[1.015]
        hover:border-brand-green
        hover:shadow-[0_20px_60px_rgba(34,197,94,.35)]

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/5
        before:via-transparent
        before:to-brand-green/5
        before:opacity-0
        hover:before:opacity-100
        before:transition-opacity
        before:duration-500

        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}