"use client";

import { useState } from "react";
import { filterSections } from "./data";

export default function FilterSidebar() {
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({});

  const toggleFilter = (key: string) => {
    setExpandedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="bg-[#1e4d3a] rounded-lg shadow-lg p-6 text-white h-fit sticky top-4">
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/20">
        <h2 className="font-bold text-xl uppercase tracking-wide">SZŰRÉS</h2>
        <svg className="w-6 h-6 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17h14v-3H5v3zm0-4h14V9l-2.5-4H7.5L5 9v4zm2.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      </div>

      <div className="space-y-1">
        {filterSections.map((f) => (
          <div key={f.key} className="border-b border-white/10">
            <button
              onClick={() => toggleFilter(f.key)}
              className="w-full flex justify-between items-center py-3 text-sm font-medium hover:bg-white/5 px-2 rounded transition-colors"
            >
              <span>{f.label}</span>
              <svg
                className={`w-4 h-4 transition-transform ${expandedFilters[f.key] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedFilters[f.key] && (
              <div className="pb-3 px-2">
                <select className="w-full bg-[#2a5f4f] border border-white/20 rounded px-3 py-2 text-sm">
                  <option>Válasszon...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/20">
        <p className="text-xs text-white/70 mb-2">Keresés kulcsszavak alapján</p>
        <input
          type="text"
          placeholder="Keresés..."
          className="w-full bg-white text-gray-800 rounded px-3 py-2 text-sm placeholder-gray-500 mb-3"
        />
        <button type="button" className="w-full bg-[#1e4d3a] text-white py-2.5 rounded font-bold text-sm hover:bg-[#163d2e] transition-colors">
          Keresés...
        </button>
      </div>

      <button className="mt-5 w-full bg-[#dcb377] text-[#1e4d3a] py-3 rounded font-bold text-sm hover:bg-[#c9a667] transition-colors flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Szűrők törlése
      </button>

      <div className="mt-6 pt-4 border-t border-white/20">
        <p className="text-sm font-medium mb-3">ÁR</p>
        <div className="flex gap-2 text-xs mb-2">
          <input type="text" placeholder="3333" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
          <input type="text" placeholder="82000000" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
        </div>
        <input type="range" className="w-full accent-[#dcb377]" min="0" max="100" />
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium mb-3">ÉVJÁRAT</p>
        <div className="flex gap-2 text-xs mb-2">
          <input type="text" placeholder="1994" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
          <input type="text" placeholder="2023" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
        </div>
        <input type="range" className="w-full accent-[#dcb377]" min="1990" max="2025" />
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium mb-3">HENGERŰRTARTALOM</p>
        <div className="flex gap-2 text-xs mb-2">
          <input type="text" placeholder="20cm³" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
          <input type="text" placeholder="5200cm³" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
        </div>
        <input type="range" className="w-full accent-[#dcb377]" min="0" max="8000" />
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium mb-3">TELJESÍTMÉNY (KW)</p>
        <div className="flex gap-2 text-xs mb-2">
          <input type="text" placeholder="10KW" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
          <input type="text" placeholder="500KW" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
        </div>
        <input type="range" className="w-full accent-[#dcb377]" min="0" max="500" />
      </div>
    </aside>
  );
}
