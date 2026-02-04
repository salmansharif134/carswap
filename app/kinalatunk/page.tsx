"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

/* ================= DATA ================= */
const filterSections = [
  { key: "eladas", label: "Eladási mód" },
  { key: "marka", label: "Márka" },
  { key: "modell", label: "Modell" },
  { key: "gyartmany", label: "Gyártmány típusa" },
  { key: "hajtas", label: "Hajtás" },
  { key: "allapot", label: "Állapot" },
  { key: "belso", label: "Belső szín" },
  { key: "kulso", label: "Külső szín" },
  { key: "ulesek", label: "Ülések száma" },
  { key: "valto", label: "Váltó" },
  { key: "felszereltseg", label: "Felszereltség" },
];

/* Card spec row: label + value, optional red (e.g. ÁLLAPOT: HIBÁS) */
type SpecItem = { label: string; value: string; red?: boolean };

const cars: Array<{
  id: number;
  name: string;
  year: string;
  price: string;
  image: string;
  featured?: boolean;
  row1: SpecItem[];
  row2: SpecItem[];
}> = [
  {
    id: 1,
    name: "AIXAM CROSSLINE",
    year: "1952",
    price: "4 444Ft",
    image: "/1.jpg",
    featured: true,
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ / CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN / GÁZ (LPG)" },
      { label: "KM. ÓRA ÁLLÁS", value: "7777 km" },
      { label: "HENGERŰRTARTALOM", value: "77777 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (9 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "HIBÁS", red: true },
      { label: "TELJESÍTMÉNY", value: "7777 kW" },
      { label: "", value: "" },
    ],
  },
  {
    id: 2,
    name: "LAMBORGHINI AVENTADOR",
    year: "2023",
    price: "82 000 000Ft",
    image: "/2.jpg",
    featured: true,
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN" },
      { label: "KM. ÓRA ÁLLÁS", value: "12 000 km" },
      { label: "HENGERŰRTARTALOM", value: "6498 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "400 kW" },
      { label: "HELYSZÍN", value: "Budapest, Magyarország" },
    ],
  },
  {
    id: 3,
    name: "ACURA RL",
    year: "2008",
    price: "68 987Ft",
    image: "/3.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN" },
      { label: "KM. ÓRA ÁLLÁS", value: "66 666 km" },
      { label: "HENGERŰRTARTALOM", value: "3500 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (8 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "HIBÁS", red: true },
      { label: "TELJESÍTMÉNY", value: "222 kW" },
      { label: "HELYSZÍN", value: "Debrecen, Magyarország" },
    ],
  },
  {
    id: 4,
    name: "ACURA RL",
    year: "2015",
    price: "4 444Ft",
    image: "/4.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN / GÁZ (LPG)" },
      { label: "KM. ÓRA ÁLLÁS", value: "111 111 km" },
      { label: "HENGERŰRTARTALOM", value: "2400 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (8 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "111 kW" },
      { label: "HELYSZÍN", value: "New York, Egyesült Államok" },
    ],
  },
  {
    id: 5,
    name: "AIWAYS U6",
    year: "2022",
    price: "4 444Ft",
    image: "/5.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ / CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN / GÁZ (LPG)" },
      { label: "KM. ÓRA ÁLLÁS", value: "11 111 km" },
      { label: "HENGERŰRTARTALOM", value: "1500 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "111 kW" },
      { label: "HELYSZÍN", value: "Delhi, India" },
    ],
  },
  {
    id: 6,
    name: "AIXAM CROSSOVER",
    year: "2020",
    price: "33 333Ft",
    image: "/1.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ / CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN" },
      { label: "KM. ÓRA ÁLLÁS", value: "11 111 km" },
      { label: "HENGERŰRTARTALOM", value: "1000 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (8 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "111 kW" },
      { label: "HELYSZÍN", value: "Florida, Egyesült Államok" },
    ],
  },
  {
    id: 7,
    name: "AIXAM CROSSLINE",
    year: "2019",
    price: "4 444Ft",
    image: "/2.jpg",
    featured: true,
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ / CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN / GÁZ (LPG)" },
      { label: "KM. ÓRA ÁLLÁS", value: "333 km" },
      { label: "HENGERŰRTARTALOM", value: "1200 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA" },
      { label: "ÁLLAPOT", value: "HIBÁS", red: true },
      { label: "TELJESÍTMÉNY", value: "88 kW" },
      { label: "HELYSZÍN", value: "Európa" },
    ],
  },
  {
    id: 8,
    name: "ALFA ROMEO 159",
    year: "2010",
    price: "55 555Ft",
    image: "/3.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ / CSERÉLHETŐ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "DÍZEL" },
      { label: "KM. ÓRA ÁLLÁS", value: "180 000 km" },
      { label: "HENGERŰRTARTALOM", value: "2000 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (8 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "125 kW" },
      { label: "HELYSZÍN", value: "Budapest, Magyarország" },
    ],
  },
  {
    id: 9,
    name: "AIXAM CITY",
    year: "2018",
    price: "3 333Ft",
    image: "/4.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "BENZIN / GÁZ (LPG)" },
      { label: "KM. ÓRA ÁLLÁS", value: "33 333 km" },
      { label: "HENGERŰRTARTALOM", value: "333 cm3" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "333 kW" },
      { label: "HELYSZÍN", value: "Szeged, Magyarország" },
    ],
  },
  {
    id: 10,
    name: "AIWAYS 5",
    year: "2021",
    price: "77 676Ft",
    image: "/5.jpg",
    row1: [
      { label: "ELADÁSI MÓD", value: "ELADÓ" },
      { label: "ÜZEMANYAG TÍPUSA", value: "ELEKTROMOS" },
      { label: "KM. ÓRA ÁLLÁS", value: "25 000 km" },
      { label: "HENGERŰRTARTALOM", value: "—" },
    ],
    row2: [
      { label: "VÁLTÓ TÍPUSA", value: "AUTOMATA (8 FOKOZATÚ)" },
      { label: "ÁLLAPOT", value: "ÚJSZERŰ" },
      { label: "TELJESÍTMÉNY", value: "150 kW" },
      { label: "HELYSZÍN", value: "Budapest, Magyarország" },
    ],
  },
];

export default function KinalatunkPage() {
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({});
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [yearRange, setYearRange] = useState([1990, 2025]);
  const [activeFilters, setActiveFilters] = useState(["Eladó"]);

  const toggleFilter = (key: string) => {
    setExpandedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-[1920px] px-4 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="bg-[#1e4d3a] rounded-lg shadow-lg p-5 text-white h-fit sticky top-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/20">
              <h2 className="font-bold text-lg uppercase tracking-wide">Szűrés</h2>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Filter sections */}
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

            {/* Keyword search section */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-white/70 mb-2">Keresési kulcsszavak alapján</p>
              <input
                type="text"
                placeholder="Keresés..."
                className="w-full bg-white text-gray-800 rounded px-3 py-2 text-sm placeholder-gray-500"
              />
            </div>

            {/* Clear filters button */}
            <button className="mt-4 w-full bg-[#dcb377] text-[#1e4d3a] py-2.5 rounded font-bold text-sm hover:bg-[#c9a667] transition-colors">
              Szűrők törlése
            </button>

            {/* Price Range */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-sm font-medium mb-3">Ár</p>
              <div className="flex gap-2 text-xs mb-2">
                <input type="text" placeholder="min" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
                <input type="text" placeholder="max" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
              </div>
              <input type="range" className="w-full accent-[#dcb377]" min="0" max="100" />
            </div>

            {/* Year Range */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-3">Évjárat</p>
              <div className="flex gap-2 text-xs mb-2">
                <input type="text" placeholder="min" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
                <input type="text" placeholder="max" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
              </div>
              <input type="range" className="w-full accent-[#dcb377]" min="1990" max="2025" />
            </div>

            {/* Engine Displacement */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-3">Hengerűrtartalom (cm³)</p>
              <div className="flex gap-2 text-xs mb-2">
                <input type="text" placeholder="min" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
                <input type="text" placeholder="max" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
              </div>
              <input type="range" className="w-full accent-[#dcb377]" min="0" max="8000" />
            </div>

            {/* Power */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-3">Teljesítmény (KW)</p>
              <div className="flex gap-2 text-xs mb-2">
                <input type="text" placeholder="1 kw" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
                <input type="text" placeholder="5 00kw" className="w-1/2 bg-white text-gray-800 rounded px-2 py-1.5" />
              </div>
              <input type="range" className="w-full accent-[#dcb377]" min="0" max="500" />
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <main>
            {/* Top bar */}
            <div className="bg-white rounded-lg shadow-sm px-6 py-4 flex flex-wrap justify-between items-center gap-4 mb-4">
              <h1 className="font-bold text-2xl text-gray-900">Autó hirdetések</h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Rendezés:</span>
                  <select className="border border-gray-300 px-3 py-1.5 rounded text-sm bg-white">
                    <option>legutóbb első</option>
                    <option>Ár növekvő</option>
                    <option>Ár csökkenő</option>
                  </select>
                </div>
                <div className="flex gap-1 border border-gray-300 rounded overflow-hidden">
                  <button className="p-2 bg-gray-100">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-50">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter actions */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <button className="bg-[#1e4d3a] text-white px-4 py-2 rounded text-sm font-medium uppercase hover:bg-[#163d2e] transition-colors">
                Clear all filters
              </button>

              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded text-sm"
                >
                  {filter}
                  <button className="text-gray-500 hover:text-gray-700">×</button>
                </span>
              ))}
            </div>

            {/* KIEMELT AJÁNLATOK header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="bg-[#dcb377] text-white font-bold text-sm uppercase tracking-wide px-6 py-2.5"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
              >
                Kiemelt ajánlatok
              </div>
              <a href="#" className="text-gray-600 text-sm hover:underline">Összes</a>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Listings - same card UI for all */}
            <div className="space-y-4">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Image - wider, shorter */}
                    <div className="md:w-[42%] relative h-[180px] md:h-[160px] shrink-0">
                      <div className="absolute inset-0 bg-gray-200">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-cover"
                        />
                        {car.featured && (
                          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                            <div
                              className="absolute top-0 right-0 w-[140%] h-[140%] bg-[#dcb377] transform rotate-45 translate-x-1/2 -translate-y-1/2 flex items-end justify-center pb-1"
                              style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%)" }}
                            >
                              <span className="text-white text-[10px] font-bold uppercase -rotate-45 translate-y-2">Kiemelt</span>
                            </div>
                          </div>
                        )}
                        <button
                          type="button"
                          className="absolute bottom-2 left-2 w-9 h-9 rounded bg-white/90 shadow flex items-center justify-center text-gray-600 hover:bg-white"
                          aria-label="Kedvenc"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right: Details - tighter padding */}
                    <div className="flex-1 p-3 md:p-4 flex flex-col min-w-0">
                      {/* Price banner (gold, top right) */}
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="font-bold text-lg text-gray-900 uppercase tracking-tight">{car.name}</h2>
                          <p className="text-gray-600 text-xs mt-0.5">{car.year}</p>
                        </div>
                        <div className="bg-[#dcb377] text-white font-bold text-base px-4 py-2 rounded-sm shadow-sm">
                          {car.price}
                        </div>
                      </div>

                      {/* Specs row 1 - with vertical separators */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-gray-200 py-2 text-[11px]">
                        {car.row1.map((item, i) => (
                          <div key={i} className={`flex flex-col px-2 ${i > 0 ? "border-l border-gray-200" : ""}`}>
                            <span className="text-gray-500 uppercase tracking-wide">{item.label}</span>
                            <span className="font-semibold text-gray-900 mt-0.5">{item.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-gray-200 py-2 text-[11px]">
                        {car.row2.map((item, i) => (
                          <div key={i} className={`flex flex-col px-2 ${i > 0 ? "border-l border-gray-200" : ""}`}>
                            {item.label && <span className="text-gray-500 uppercase tracking-wide">{item.label}</span>}
                            <span className={`font-semibold mt-0.5 ${item.red ? "text-red-600" : "text-gray-900"}`}>
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-[#1e4d3a] text-[#1e4d3a] text-xs font-medium hover:bg-[#1e4d3a] hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Megtekintési idő egyeztetése
                        </button>
                        <button
                          type="button"
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-xs font-bold"
                          aria-label="Segítség"
                        >
                          ?
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Összehasonlítom
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          Megosztás
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 py-10">
              <button className="w-10 h-10 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`w-10 h-10 rounded font-medium ${
                    p === 2
                      ? "bg-[#1e4d3a] text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="w-10 h-10 rounded bg-[#1e4d3a] text-white flex items-center justify-center hover:bg-[#163d2e]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </main>
        </div>

        {/* ================= NEWSLETTER SECTION ================= */}
        <section className="bg-[#1e4d3a] py-16">
          <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center gap-12">
            {/* Left side */}
            <div className="md:w-1/2">
              <Image
                src="/logo.webp"
                alt="CARSWAP"
                width={200}
                height={60}
                className="mb-6"
              />
              <h2 className="text-white text-3xl font-bold mb-4">
                Csatlakozz a<br />levelezőlistánkhoz!
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Szeretnél elsőként értesülni újdonságainkról, titkok akcióról vagy épp inspiráló
                tartalmakról? Iratkozz fel a hírlevelünkre, és garantáltan csak hasznos,
                érdekés tartalmakkal keresünk meg, csoportjainkon keresztül semmi más.
              </p>
              <p className="text-white/60 text-xs">
                Hetente néhány levél, semmi felesleges, csak a lényeg.
              </p>
            </div>

            {/* Right side - form */}
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md ml-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Név</label>
                    <input
                      type="text"
                      placeholder="email"
                      className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-xs text-gray-600">
                      Elfogadom és elfogadom az adatvédelmi tájékoztatót.
                    </p>
                  </div>
                  <button className="w-full bg-[#dcb377] text-white py-3 rounded font-bold hover:bg-[#c9a667] transition-colors">
                    FELIRATKOZÁS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
