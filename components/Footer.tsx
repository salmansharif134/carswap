'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { name, email, agreed });
  };

  return (
    <footer className="relative w-full bg-black pt-12 pb-8">
      {/* Newsletter Subscription Section - black bg, logo, gold heading, white form card */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.webp"
            alt="CARSWAP"
            width={480}
            height={144}
            className="w-auto h-28 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[#dcb377] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Csatlakozz a<br />levelezőlistánkhoz!
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-2 leading-relaxed max-w-xl">
              Szeretnél elsőként értesülni újdonságainkról, titkok akcióról vagy épp inspiráló
              tartalmakról? Iratkozz fel a hírlevelünkre, és garantáltan csak hasznos,
              érdekes tartalmakkal keresünk meg, csoportjainkon keresztül semmi más.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Hetente néhány levél, semmi felesleges, csak a lényeg.
            </p>
          </div>
          <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg space-y-4">
              <div>
                <label htmlFor="footer-name" className="block text-sm text-gray-600 mb-1">Név</label>
                <input
                  type="text"
                  id="footer-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Név"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#dcb377] text-sm"
                />
              </div>
              <div>
                <label htmlFor="footer-email" className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  id="footer-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#dcb377] text-sm"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="footer-agreement"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#dcb377] focus:ring-[#dcb377] cursor-pointer"
                />
                <label htmlFor="footer-agreement" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                  Elolvastam és elfogadom az adatkezelési tájékoztatót!
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#dcb377] hover:bg-[#c9a667] text-white font-bold uppercase py-3 px-6 rounded transition-colors text-sm tracking-wide"
              >
                FELIRATKOZÁS
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-white/20 mb-8" />
      </div>

      {/* Footer Links - three columns */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Kapcsolat
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Gyakori kérdések
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Hasznos Tanácsok
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Kínálatunk
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Partnereink
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Ügyintézők
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Előfizetések
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Általános Szerződési Feltételek
            </a>
            <a href="#" className="text-white/90 hover:text-[#dcb377] transition-colors text-sm no-underline">
              Adatkezelési Tájékoztató
            </a>
          </div>
        </div>

        {/* Separator line above copyright */}
        <hr className="border-t border-white/20 mb-6" />

        {/* Copyright */}
        <div className="text-left text-white/70 text-sm pb-4">
          2024-2025 CARSWAP | Minden jog fenntartva
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-6 w-12 h-12 rounded-full bg-[#dcb377] flex items-center justify-center hover:bg-[#c9a667] transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
