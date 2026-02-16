'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';

export function SectionNewUsed() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sampleCars = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
      price: '77 777 Ft',
      year: 1951,
      makeModel: 'AIWAYS U5',
      status: 'CSERÉLHETŐ',
      fuel: 'BENZIN / GÁZ (LPG)',
      mileage: '3 333 km',
      capacity: '44 444 cm³',
      transmission: 'AUTOMATA (9 FOKOZATÚ)',
      condition: 'HIÁNYOS',
      power: '333 333 kW',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=300&fit=crop',
      price: '1 800 000 Ft',
      year: 2016,
      makeModel: 'TOYOTA AYGO',
      status: 'ELADÓ',
      fuel: 'BENZIN',
      mileage: '87 000 km',
      capacity: '370 cm³',
      transmission: 'AUTOMATA',
      condition: 'NORMÁL',
      power: '50 kW',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      price: '4 444 Ft',
      year: 1952,
      makeModel: 'ACURA RL',
      status: 'CSERÉLHETŐ',
      fuel: 'BENZIN / GÁZ (LPG)',
      mileage: '11 111 km',
      capacity: '1 111 cm³',
      transmission: 'AUTOMATA (5 FOKOZATÚ)',
      condition: 'ÚJSZERŰ',
      power: '1 111 kW',
    },
  ];

  


 

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
      {/* Centered underlined title */}
      <h2 className="text-center text-[24px] md:text-[30px] font-bold text-[#1a3d7c] underline underline-offset-4 decoration-[#1a3d7c] mb-8">
        Új és használt autók
      </h2>

      {/* 3-card scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 justify-center
          scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]"
      >
        {sampleCars.map((car, i) => (
          <div
            key={`newused-${car.makeModel}-${i}`}
            className="shrink-0 snap-start w-[330px]"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Image Section */}
              <div className="relative h-[180px] bg-gray-100 overflow-hidden">
                <img 
                  src={car.imageSrc} 
                  alt={car.makeModel}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#0b4f3a] text-white px-3 py-1.5 rounded font-bold text-sm">
                  {car.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Title */}
                <div className="mb-3 border-b border-gray-200 pb-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
                    {car.year} EGYÉB
                  </p>
                  <h3 className="text-base font-bold text-gray-900 truncate">
                    {car.makeModel}
                  </h3>
                </div>

                {/* Specs Grid */}
                <div className="space-y-2.5">
                  {/* Row 1 */}
                  <div className="flex items-start gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.2 5.2l-4.2-4.2m0-6l-4.2-4.2" />
                      </svg>
                      <span className="text-gray-700 font-medium truncate">{car.status}</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                      </svg>
                      <span className="text-gray-600 truncate">{car.fuel}</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-start gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      <span className="text-gray-600 truncate">{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                      <span className="text-gray-600 truncate">{car.capacity}</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-start gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M6 12H2m20 0h-4m-2.3-7.3l-2.8 2.8m0 9l2.8 2.8M7.1 7.1L4.3 4.3m12.4 15.4l2.8-2.8" />
                      </svg>
                      <span className="text-gray-600 truncate">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      <span className="text-gray-600 truncate">{car.condition}</span>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span className="text-gray-600">{car.power}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom centered arrows */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          type="button"
          aria-label="Előző"
          disabled={!canScrollLeft}
         
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:bg-[#1a3d7c] hover:text-white hover:border-[#1a3d7c]
            disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 disabled:hover:border-gray-300
            transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Következő"
          disabled={!canScrollRight}
          
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:bg-[#1a3d7c] hover:text-white hover:border-[#1a3d7c]
            disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 disabled:hover:border-gray-300
            transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export function SectionFeatured() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
      <h2 className="text-center text-[24px] md:text-[30px] font-bold text-[#1a3d7c] underline underline-offset-4 decoration-[#1a3d7c] mb-8">
        Kiemelt autók
      </h2>
      {/* Placeholder content */}
      <p className="text-center text-gray-500">Kiemelt autók tartalom hamarosan...</p>
    </section>
  );
}

export function SectionLatest() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
      <h2 className="text-center text-[24px] md:text-[30px] font-bold text-[#1a3d7c] underline underline-offset-4 decoration-[#1a3d7c] mb-8">
        Legújabb autók
      </h2>
      {/* Placeholder content */}
      <p className="text-center text-gray-500">Legújabb autók tartalom hamarosan...</p>
    </section>
  );
}