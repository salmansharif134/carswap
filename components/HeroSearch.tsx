'use client';

import React, { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid';
import RangeSlider from './RangeSlider';

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const HeroSearch: React.FC = () => {

  // ✅ CLOSED by default
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Kiemelt');

  // Slider states
  const [yearRange, setYearRange] = useState<[number, number]>([1950, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([2000, 55000000]);
  const [kmRange, setKmRange] = useState<[number, number]>([1, 454545]);
  const [engineRange, setEngineRange] = useState<[number, number]>([1, 45455]);
  const [powerRange, setPowerRange] = useState<[number, number]>([100, 65589]);

  return (
    <section className="relative z-20 w-full -mt-[49px]">
      <div className="w-full px-6 pb-10">

        {/* Top bar */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="bg-[#023429] text-white font-bold px-7 py-3 text-base rounded-t-md">
            Keresés
          </div>

          <div className="flex items-stretch gap-1 relative z-10">
            {['Kiemelt', 'Népszerű', 'Legutóbbi'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 text-sm font-bold transition-all -translate-y-[3px] ${
                  activeTab === tab
                    ? 'bg-[#cfb480] text-white'
                    : 'bg-[#cfb480]/80 text-white/70 hover:text-white hover:bg-[#bfa068]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#cfb480]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-[#023429] shadow-xl px-7 pt-7 pb-4 md:px-8 md:pt-8 -mt-1 rounded-b-md rounded-tr-md">

          {/* Always Visible Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 mb-6">
            <select className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]">
              <option>Eladási mód</option>
            </select>
            <select className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]">
              <option>Márka</option>
            </select>
            <select className="w-full px-4 py-3 rounded-sm bg-[#7fa196] text-gray-800 text-sm focus:ring-2 focus:ring-[#cfb480]">
              <option>Modell</option>
            </select>
            <select className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]">
              <option>Kivitel</option>
            </select>
            <select className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]">
              <option>Üzemanyag típusa</option>
            </select>
          </div>

          {/* Expandable Section */}
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 mb-6 transition-all duration-500">

              {/* Sliders */}
              <div className="text-white">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Évjárat</span>
                  <span>{yearRange[0]} - {yearRange[1]}</span>
                </div>
                <RangeSlider min={1950} max={2025} value={yearRange} onChange={setYearRange} />
              </div>

              <div className="text-white">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Ár</span>
                  <span>{formatNumber(priceRange[0])}Ft - {formatNumber(priceRange[1])}Ft</span>
                </div>
                <RangeSlider min={2000} max={55000000} step={1000} value={priceRange} onChange={setPriceRange} />
              </div>

              <div className="text-white">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Km. óra állás</span>
                  <span>{kmRange[0]}km - {kmRange[1]}km</span>
                </div>
                <RangeSlider min={1} max={454545} value={kmRange} onChange={setKmRange} />
              </div>

              <div className="text-white">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Hengerűrtartalom</span>
                  <span>{engineRange[0]}cm3 - {engineRange[1]}cm3</span>
                </div>
                <RangeSlider min={1} max={45455} value={engineRange} onChange={setEngineRange} />
              </div>

              <div className="text-white">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Teljesítmény</span>
                  <span>{powerRange[0]}kW - {powerRange[1]}kW</span>
                </div>
                <RangeSlider min={100} max={65589} value={powerRange} onChange={setPowerRange} />
              </div>

              {/* Extra Dropdowns */}
              {[
                'Váltó típusa',
                'Hajtás',
                'Állapot',
                'Külső szín',
                'Belső szín'
              ].map((label) => (
                <select
                  key={label}
                  className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]"
                >
                  <option>{label}</option>
                </select>
              ))}

              {/* Status + Icon */}
              <div className="col-span-1 lg:col-span-5 flex items-center gap-2">
                <div className="w-full lg:w-1/5">
                  <select className="w-full px-4 py-3 rounded-sm bg-[#e8eef3] text-gray-700 text-sm focus:ring-2 focus:ring-[#cfb480]">
                    <option>Státusz</option>
                  </select>
                </div>
                <button className="text-white/50 hover:text-white transition-colors">
                  <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
              </div>

            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-white text-sm font-bold border-b border-dotted border-white/60 hover:border-white pb-0.5"
            >
              Keresés kibővítés
              {isExpanded ? (
                <ChevronUpIcon className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              )}
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-8 py-3 rounded bg-[#cfb480] text-white font-bold text-sm uppercase transition-colors hover:bg-[#bfa068]"
            >
              <MagnifyingGlassIcon className="w-5 h-5" strokeWidth={2.5} />
              15 AUTÓ
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
