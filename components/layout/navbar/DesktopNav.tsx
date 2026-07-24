"use client";

import { DesktopNavProps } from "./types";

export default function DesktopNav({
  items,
  isScrolled,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8">

      {items.map((item) => (

        <a
          key={item.label}
          href={item.href}
          className={`
            relative
            font-semibold
            transition-all
            duration-300
            py-1

            ${
              isScrolled
                ? "text-gray-700 hover:text-brand-green"
                : "text-white hover:text-brand-green"
            }

            after:absolute
            after:left-0
            after:right-0
            after:-bottom-1
            after:h-[2px]
            after:bg-brand-green
            after:scale-x-0
            after:origin-right
            after:transition-transform
            after:duration-300

            hover:after:scale-x-100
          `}
        >
          {item.label}
        </a>

      ))}

    </nav>
  );
}