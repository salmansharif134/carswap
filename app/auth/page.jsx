'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AuthPage() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  return (
    <>
      <Header bgColor="dark-green" />
      <div className="min-h-screen flex justify-center py-12 bg-gray-50">
        <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10">

        {/* LOGIN PANEL */}
       <div className="bg-[#063c2a] pt-8 pb-4 px-8 text-white shadow-lg rounded">
  <h2 className="text-lg font-semibold mb-4">Bejelentkezés</h2>

  <div className="space-y-3">
    <div>
      <label className="text-sm font-medium">E-mail cím*</label>
      <input
        className="w-full mt-2 px-4 py-3 text-black bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
        placeholder="Adja meg az e-mail címet"
      />
    </div>

    <div>
      <label className="text-sm font-medium">Jelszó*</label>
      <div className="relative mt-2">
        <input
          type={showLoginPassword ? 'text' : 'password'}
          className="w-full px-4 py-3 text-black bg-white rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
          placeholder="Adja meg a jelszót"
        />
        <button
          type="button"
          onClick={() => setShowLoginPassword(!showLoginPassword)}
          className="absolute right-3 top-3 opacity-50 hover:opacity-75"
        >
          {showLoginPassword ? '🙈' : '👁'}
        </button>
      </div>
    </div>

    <div className="flex justify-between text-xs pt-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="w-4 h-4" /> Emlékezz rám
      </label>
      <span className="underline cursor-pointer hover:opacity-80">Elfelejtett jelszó</span>
    </div>

    <button className="mt-3 w-full bg-[#d9b26c] text-black py-3 rounded text-sm font-semibold hover:bg-[#c9a25c] transition">
      BEJELENTKEZÉS
    </button>
  </div>
</div>


        {/* REGISTER PANEL */}
        <div className="bg-white shadow-lg rounded overflow-hidden">
          <div className="border-t-4 border-[#063c2a] p-8">
            <h2 className="text-lg font-semibold mb-6 text-black">Regisztráció</h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-black">Keresztnév*</label>
                <input
                  className="mt-2 w-full bg-gray-100 px-4 py-3 rounded text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
                  placeholder="Adja meg a keresztnevét"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-black">Vezetéknév*</label>
                <input
                  className="mt-2 w-full bg-gray-100 px-4 py-3 rounded text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
                  placeholder="Adja meg a vezetéknevét"
                />
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              A név hirdetés feltöltésnél elérhető.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="text-sm font-medium text-black">Telefonszám*</label>
                <input
                  className="mt-2 w-full bg-gray-100 px-4 py-3 rounded text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
                  placeholder="+36…"
                />
                <p className="text-xs text-gray-600 mt-2">
                  A telefonszám megadására a profilod egyedi azonosítása miatt van szükség.
                </p>
                <div className="mt-3 space-y-2 text-xs text-black">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Van WhatsApp fiókom ezzel a telefonszámmal regisztrálva.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Van Viber fiókom ezzel a telefonszámmal regisztrálva.</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-black">E-mail cím*</label>
                <input
                  className="mt-2 w-full bg-gray-100 px-4 py-3 rounded text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
                  placeholder="Adja meg az e-mail címet"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-black">Jelszó*</label>
              <div className="relative mt-2">
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  className="w-full bg-gray-100 px-4 py-3 rounded text-sm text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d9b26c]"
                  placeholder="Írja be a jelszót"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-3 top-3 opacity-50 hover:opacity-75"
                >
                  {showRegPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-black">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span>Ön kereskedő?</span>
              </label>
            </div>

            <button className="mt-6 w-full bg-[#d9b26c] text-black px-6 py-3 rounded text-sm font-semibold hover:bg-[#c9a25c] transition">
              REGISZTRÁCIÓ
            </button>
          </div>
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
