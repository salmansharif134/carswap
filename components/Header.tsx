"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  bgColor?: "transparent" | "dark-green" | "custom";
  customBgClass?: string;
  alwaysShowGradient?: boolean;
}

export default function Header({
  bgColor = "transparent",
  customBgClass,
  alwaysShowGradient = false,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBgClass = () => {
    if (customBgClass) return customBgClass;
    if (bgColor === "dark-green") return "bg-[#063c2a]";
    if (bgColor === "transparent" && isScrolled)
      return "bg-[#1e4d3a] shadow-lg backdrop-blur";
    return "bg-transparent";
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center transition-all duration-200"
      style={
        isScrolled || alwaysShowGradient
          ? {
            backgroundImage: `linear-gradient(135deg, rgba(24, 102, 72, 0.69) 0%, rgba(12, 75, 50, 0.7) 100%)
, url('/header-bg-1.webp')`,
          }
          : {}
      }
    >
      <div
        className={[
          "mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 transition-all duration-200",
          isScrolled
            ? "min-h-[76px] pt-[28px] pb-2"
            : "min-h-[96px] pt-[28px] pb-4",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="CARSWAP"
            width={420}
            height={140}
            priority
            className="w-auto object-contain transition-all duration-200 h-[72px] md:h-[88px] lg:h-[96px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white font-sans">
          <Link
            href="/kinalatunk"
            className="hover:opacity-90 font-[Montserrat]"
          >
            Kínálatunk
          </Link>
          <Link href="/partnereink" className="hover:opacity-90 font-[Montserrat]">
            Partnereink
          </Link>
          <Link
            href="/adminisztrator"
            className="hover:opacity-90 font-[Montserrat]"
          >
            Adminisztrátor
          </Link>
          <Link
            href="/elofizetesek"
            className="hover:opacity-90 font-[Montserrat]"
          >
            Előfizetések
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 text-white hover:opacity-90"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </button>

          {/* Compare */}
          <button className="flex flex-col items-center text-white hover:opacity-90">
            <span className="flex h-13 w-13 items-center justify-center rounded-full">
              <span className="relative w-16 h-16">
                <Image
                  src="/nobg.png"
                  alt="Compare"
                  width={82}
                  height={82}
                  className="w-16 h-16 object-contain"
                />
                {/* Badge now sits even more inside the icon */}
                <span className="absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#dcb377] text-[9px] font-bold text-white">
                  0
                </span>
              </span>
            </span>

            <span className="text-[12px] font-medium mt-[-4px]">
              Összehasonlítás
            </span>
          </button>

          {/* Login */}
          <Link
            href="/auth"
            className="flex flex-col items-center gap-0 text-white hover:opacity-90"
          >
            <span className="relative flex h-13 w-13 items-center justify-center rounded-full ">
              <Image
                src="/bg-removebg-preview.png"
                alt="Login"
                width={82}
                height={82}
                className="w-16 h-16 object-contain"
              />
            </span>
            <span className="text-[12px] font-medium mt-[-4px]">
              Bejelentkezés
            </span>
          </Link>

          {/* CTA */}
          <Link
            href="#"
            className="flex sm:hidden items-center justify-center w-12 h-12 bg-[#DBB27E] text-white font-[Montserrat] text-xs rounded-full relative"
          >
            <span className="text-center">+</span>
          </Link>
          <Link
            href="#"
            className="hidden sm:flex items-center w-[226.95px] h-[38px] bg-[#DBB27E] text-white font-[Montserrat] text-[12px] pt-[12px] pr-[22px] pb-[10px] pl-[40px] flex items-center relative"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src="/12.png"
                alt="CTA Icon"
                width={68}
                height={68}
                className="w-16 h-16 object-contain bg-transparent"
                style={{ boxShadow: "none", background: "transparent" }}
              />
            </span>
            <span className="pl-[40px] whitespace-nowrap text-left">
              HIRDETÉS FELTÖLTÉSE
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1e4d3a] shadow-lg z-50">
            <nav className="flex flex-col py-4">
              <Link
                href="/kinalatunk"
                className="px-6 py-3 text-white hover:bg-[#2a5d4a] font-[Montserrat] text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kínálatunk
              </Link>
              <Link
                href="/partnereink"
                className="px-6 py-3 text-white hover:bg-[#2a5d4a] font-[Montserrat] text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partnereink
              </Link>
              <Link
                href="/adminisztrator"
                className="px-6 py-3 text-white hover:bg-[#2a5d4a] font-[Montserrat] text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Adminisztrátor
              </Link>
              <Link
                href="/elofizetesek"
                className="px-6 py-3 text-white hover:bg-[#2a5d4a] font-[Montserrat] text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Előfizetések
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
