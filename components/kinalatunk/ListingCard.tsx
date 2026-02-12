"use client";

import Image from "next/image";
import type { KinalatunkCar } from "./types";

interface ListingCardProps {
  car: KinalatunkCar;
}

export default function ListingCard({ car }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg  border border-gray-200 overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[34%] relative h-[200px] md:h-[180px] shrink-0 flex flex-col">
          <div className="absolute inset-0 bg-gray-200">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 34vw"
            />
            <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-black/50 flex items-center justify-center gap-0.5 text-white text-[8px] font-medium">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
              </svg>
              <span>01</span>
            </div>
            {car.featured && (
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-[140%] h-[140%] bg-[#dcb377] transform rotate-45 translate-x-1/2 -translate-y-1/2 flex items-end justify-center pb-0.5"
                  style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%)" }}
                >
                  <span className="text-gray-900 text-[8px] font-bold uppercase -rotate-45 translate-y-1.5">KIEMELT</span>
                </div>
              </div>
            )}
            <button
              type="button"
              className="absolute bottom-9 left-2 w-8 h-8 rounded bg-gray-200/90 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              aria-label="Kedvenc"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 flex">
            <div className="h-full w-1/4 bg-[#1e4d3a]" />
          </div>
        </div>

        <div className="flex-1 p-3 md:p-3 flex flex-col min-w-0 overflow-hidden">
          <div className="flex justify-between items-start gap-2 mb-2">
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-lg md:text-xl text-gray-900 uppercase tracking-tight truncate" title={car.name}>{car.name}</h2>
              <p className="text-gray-600 text-[11px] mt-0.5">{car.year}</p>
            </div>
            <div
              className="bg-[#dcb377] text-gray-900 font-bold text-sm md:text-base px-4 py-2 flex items-center shrink-0"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              {car.price}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-1.5 border-y border-gray-200 py-2 text-xs">
            {car.row1.map((item, i) => (
              <div key={`r1-${i}`} className="flex items-start gap-1.5 min-w-0">
                <span className="shrink-0 w-4 h-4 flex items-center justify-center text-gray-500">
                  {item.label?.includes("ELADÁSI") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                  {item.label?.includes("ÜZEMANYAG") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4-1V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 12a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-4-1V7a2 2 0 012-2h2a2 2 0 012 2v1" /></svg>}
                  {item.label?.includes("KM.") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-3 3m-6-3l3 3m-3-3v8" /></svg>}
                  {item.label?.includes("HENGER") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                </span>
                <div className="min-w-0 overflow-hidden">
                  <span className="text-gray-500 uppercase tracking-wide block text-[10px] leading-tight">{item.label}</span>
                  <span className="font-bold text-gray-900 mt-0.5 block break-words leading-tight">{item.value}</span>
                </div>
              </div>
            ))}
            {car.row2.map((item, i) => (
              <div key={`r2-${i}`} className="flex items-start gap-1.5 min-w-0">
                <span className="shrink-0 w-4 h-4 flex items-center justify-center text-gray-500">
                  {item.label?.includes("VÁLTÓ") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  {item.label?.includes("ÁLLAPOT") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                  {item.label?.includes("TELJESÍTMÉNY") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {item.label?.includes("HELYSZÍN") && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                </span>
                <div className="min-w-0 overflow-hidden">
                  {item.label ? <span className="text-gray-500 uppercase tracking-wide block text-[10px] leading-tight">{item.label}</span> : null}
                  <span className={`font-bold mt-0.5 block break-words leading-tight ${item.red ? "text-red-600" : "text-gray-900"}`}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-nowrap items-center gap-1.5 mt-1.5 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex shrink-0 items-center gap-1 px-2.5 py-1 rounded border-2 border-[#1e4d3a] bg-white text-[#1e4d3a] text-[11px] font-medium hover:bg-[#1e4d3a] hover:text-white transition-colors cursor-pointer [&_svg]:hover:text-white"
            >
              <svg className="w-3 h-3 shrink-0 text-[#1e4d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4m0 4v4M6 12h4m4 0h4" />
              </svg>
              MEGTERVEZETT IDŐ EGYEZTETÉSE
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-700 hover:text-white hover:border-gray-700 text-[11px] font-bold cursor-pointer transition-colors"
              aria-label="Segítség"
            >
              ?
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex shrink-0 items-center gap-1 px-2.5 py-1 rounded border-2 border-[#1e4d3a] bg-white text-[#1e4d3a] text-[11px] font-medium hover:bg-[#1e4d3a] hover:text-white transition-colors cursor-pointer [&_svg]:hover:text-white"
            >
              <svg className="w-3 h-3 text-[#1e4d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              ÖSSZEHASONLÍTOM
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex shrink-0 items-center gap-1 px-2.5 py-1 rounded border-2 border-[#1e4d3a] bg-white text-[#1e4d3a] text-[11px] font-medium hover:bg-[#1e4d3a] hover:text-white transition-colors cursor-pointer [&_svg]:hover:text-white"
            >
              <svg className="w-3 h-3 text-[#1e4d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              MEGOSZTÁS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
