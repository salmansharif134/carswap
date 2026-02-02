'use client';

import React from 'react';

const HeroSearch: React.FC = () => {
  return (
    <section className="relative z-20 w-full -mt-[49px]">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-10">
        {/* Top bar */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="bg-[#0b4f3a] text-white font-bold px-7 py-3 text-base">
            Keresés
          </div>

          <div className="flex items-stretch gap-1">
            <button
              type="button"
              className="px-6 py-3 bg-[#dcb377] text-white text-sm font-bold border-b-4 border-black"
            >
              Kiemelt
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-[#dcb377] text-white/90 text-sm font-bold border-b-4 border-transparent transition-colors hover:bg-[#c9a667]"
            >
              Népszerű
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-[#dcb377] text-white/90 text-sm font-bold border-b-4 border-transparent transition-colors hover:bg-[#c9a667]"
            >
              Legutóbbi
            </button>
          </div>
        </div>

        {/* Search box (connected to the top bar) */}
        <div className="bg-[#0b4f3a] shadow-xl px-7 pt-7 pb-2 md:px-8 md:pt-8 md:pb-3 -mt-1">

          {/* Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Eladási mód</option>
            </select>
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Márka</option>
            </select>
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Modell</option>
            </select>
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Kivitel</option>
            </select>
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Üzemanyag típusa</option>
            </select>
            <select className="w-full px-4 py-3.5 rounded bg-white text-gray-700 text-base border border-gray-200">
              <option>Évjárat</option>
            </select>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-white text-base hover:underline"
            >
              Keresés kibővítés
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </a>

            <button
              type="button"
              className="flex items-center gap-2 px-7 py-3.5 rounded bg-[#dcb377] text-white font-bold text-base uppercase transition-colors hover:bg-[#c9a667]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              15 AUTÓ
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
