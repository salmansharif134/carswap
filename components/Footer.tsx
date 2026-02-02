'use client';

import React, { useState } from 'react';

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
      {/* Newsletter Subscription Section - black bg, logo centered, white inputs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <img src="/logo.webp" alt="CARSWAP" width={360} height={120} className="mb-6 h-32 w-auto object-contain mx-auto" style={{ height: 120, width: 'auto', marginBottom: 24 }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight whitespace-nowrap">
              Csatlakozz a levelezőlistánkhoz!
            </h2>
            <p className="text-white text-base mb-2 leading-relaxed max-w-2xl">
              Szeretnél elsőként értesülni újdonságokról, titkos akciókról vagy épp inspiráló tartalmakról? Iratkozz fel a hírlevelünkre, és garantáltan csak hasznos, érdekes vagy mosolyt csaló üzenetekkel zaklatunk - spamet mi is utáljuk.
            </p>
            <p className="text-white text-base leading-relaxed">
              Havonta néhány levél, semmi felesleges, csak a lényeg.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Név"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#D4A574] focus:ring-[#D4A574] cursor-pointer"
              />
              <label htmlFor="agreement" className="text-white text-sm leading-relaxed cursor-pointer">
                Elolvastam és elfogadom az adatkezelési tájékoztatót
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4A574] hover:bg-[#C49564] text-white font-bold uppercase py-4 px-6 rounded transition-colors text-sm tracking-wide"
            >
              FELIRATKOZÁS
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links and Copyright - two columns, copyright left, scroll top right */}
      <div className="max-w-7xl mx-auto px-6 relative pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-8">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Kapcsolat</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Gyakori Kérdések</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Hasznos Tanácsok</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Kínálatunk</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Partnereink</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Ügyintézők</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Előfizetések</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Általános Szerződési Feltételek</a>
            <a href="#" className="text-white hover:text-[#E5B885] transition-colors text-sm no-underline">Adatkezelési Tájékoztató</a>
          </div>
        </div>

        <div className="text-left text-white text-sm">
          2024-2025 CARSWAP® | Minden jog fenntartva
        </div>

        {/* Scroll to top - gold/brown circle, white upward arrow, bottom-right */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-0 right-6 w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center hover:bg-[#E5B885] transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
