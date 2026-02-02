'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  bgColor?: 'transparent' | 'dark-green' | 'custom';
  customBgClass?: string;
}

export default function Header({ bgColor = 'transparent', customBgClass }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 5);
    };

    // Call once on mount
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBgClass = () => {
    if (customBgClass) return customBgClass;
    if (bgColor === 'dark-green') return 'bg-[#063c2a]';
    if (bgColor === 'transparent' && isScrolled) return 'bg-[#1e4d3a] shadow-lg backdrop-blur';
    if (bgColor === 'transparent' && !isScrolled) return 'bg-transparent';
    return 'bg-transparent';
  };

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-200',
        getBgClass(),
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 transition-all duration-200',
          isScrolled ? 'min-h-[76px] py-2' : 'min-h-[96px] py-4',
        ].join(' ')}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center">
  <Image
    src="/logo.webp"
    alt="CARSWAP"
    width={420}
    height={140}
    priority
    className={[
      'w-auto object-contain transition-all duration-200',
      isScrolled ? 'h-[56px] md:h-[64px]' : 'h-[72px] md:h-[88px] lg:h-[96px]',
    ].join(' ')}
  />
</Link>




        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-white">
          <Link href="/kinalatunk" className="hover:opacity-90">Kínálatunk</Link>
          <Link href="#" className="hover:opacity-90">Partnereink</Link>
          <Link href="#" className="hover:opacity-90">Adminisztrátor</Link>
          <Link href="#" className="hover:opacity-90">Előfizetések</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-12">

          {/* Compare */}
          <button className="flex flex-col items-center gap-2 text-white hover:opacity-90">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/30">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v3l3 4" />
              </svg>

              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#dcb377] text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="text-[12px] font-medium">Összehasonlítás</span>
          </button>

          {/* Login */}
          <Link href="/auth" className="flex flex-col items-center gap-2 text-white hover:opacity-90">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/30">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            <span className="text-[12px] font-medium">Bejelentkezés</span>
          </Link>

          {/* CTA */}
          <Link
  href="#"
  className="hidden sm:flex items-center gap-2 rounded-md bg-[#dcb377] px-4 py-2 text-[10px] font-bold uppercase text-white transition-colors hover:bg-[#c9a667]"
>
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
    <path d="M12 5v3M10.5 6.5h3" />
  </svg>
  HIRDETÉS FELTÖLTÉSE
</Link>


        </div>
      </div>
    </header>
  );
}
