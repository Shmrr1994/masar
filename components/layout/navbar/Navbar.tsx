"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import CTAButton from "./CTAButton";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

import { navItems } from "./navItems";
import { NavbarProps } from "./types";

export default function Navbar({
  onOpenBooking,
}: NavbarProps) {

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <>

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${isScrolled ? "py-3" : "py-5"}
        `}
      >

        <div
          className={`
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            transition-all
            duration-500

            ${
              isScrolled
                ? "glass rounded-3xl border border-white/10 shadow-2xl"
                : ""
            }
          `}
        >

          <div className="flex items-center justify-between h-20">

            <Logo isScrolled={isScrolled} />

            <DesktopNav
              items={navItems}
              isScrolled={isScrolled}
            />

            <div className="hidden lg:block">

              <CTAButton
                onClick={() => onOpenBooking()}
              />

            </div>

            <button
              onClick={() =>
                setMobileOpen(true)
              }
              className="
                lg:hidden
                p-3
                rounded-xl
                glass
                border
                border-white/10
              "
            >
              <Menu className="w-6 h-6"/>
            </button>

          </div>

        </div>

      </header>

      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
        items={navItems}
        onOpenBooking={() => onOpenBooking()}
      />

    </>
  );

}