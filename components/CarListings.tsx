'use client';

import React, { useMemo, useRef } from 'react';
import CarCard from './CarCard';

const newCars = [
  { title: 'ALPINA BS...', subtitle: '1988 Sedan', price: '4 444 Ft', imageSrc: '/1.jpg', tags: ['Eladó/Cserélhető', 'Benzin/Gáz', 'Automata'] },
  { title: 'AIWAYS U...', subtitle: 'Budapest, Magyarország', price: '77 777 Ft', imageSrc: '/2.jpg', tags: ['Eladó', 'Benzin'] },
  { title: 'TOYOTA AYGO...', subtitle: '2020', price: '1 800 000 Ft', imageSrc: '/3.jpg', tags: ['Eladó/Cserélhető', 'Benzin', 'Manuális'] },
  { title: 'AUDI A3...', subtitle: '2022', price: '15 200 Ft', imageSrc: '/4.jpg', tags: ['Eladó', 'Benzin'] },
  { title: 'BMW 320...', subtitle: '2020', price: '18 400 Ft', imageSrc: '/5.jpg', tags: ['Eladó', 'Dízel'] },
];

const featuredCars = [
  { title: 'AIXAM CROSSLINE', subtitle: '2021', price: '12 500 Ft', priceBg: 'green' as const },
  { title: 'LAMBORGHINI AVENTADOR', subtitle: '2019', price: '89 000 Ft', priceBg: 'brown' as const },
  { title: 'ACURA RL', subtitle: '2008', price: '2 300 Ft', priceBg: 'green' as const },
  { title: 'ALFA ROMEO 156', subtitle: '2001', price: '1 100 Ft', priceBg: 'green' as const },
];

const latestCars = [
  { title: 'AUDI A3', subtitle: '2022', price: '15 200 Ft' },
  { title: 'BMW 320', subtitle: '2020', price: '18 400 Ft' },
  { title: 'MERCEDES C200', subtitle: '2021', price: '22 100 Ft' },
  { title: 'VOLKSWAGEN GOLF', subtitle: '2019', price: '9 800 Ft' },
  { title: 'SKODA OCTAVIA', subtitle: '2020', price: '11 500 Ft' },
  { title: 'SEAT LEON', subtitle: '2018', price: '8 200 Ft' },
  { title: 'FORD FOCUS', subtitle: '2017', price: '6 900 Ft' },
  { title: 'OPEL ASTRA', subtitle: '2019', price: '7 400 Ft' },
];

export const SectionNewUsed: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 pt-6 pb-12">
    <div className="text-center mb-6">
      <h2 className="text-[32px] md:text-[40px] font-bold text-black">
        Új és használt autók
      </h2>
      <div className="mx-auto mt-3 h-[4px] w-[96px] rounded-full bg-[#dcb377]" />
    </div>

    <NewUsedSlider />
  </section>
);

const NewUsedSlider: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = useMemo(() => 320 + 16, []); // card width + gap

  const scrollLeft = () => {
    scrollerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      {/* Show exactly 3 cards in view on desktop */}
      <div className="mx-auto w-full max-w-[992px]">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {newCars.map((car, i) => (
            <div key={i} className="shrink-0 w-[320px] snap-start">
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-2 text-[#1e4d3a]">
        <button type="button" onClick={scrollLeft} aria-label="Previous" className="p-2 hover:opacity-70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button type="button" onClick={scrollRight} aria-label="Next" className="p-2 hover:opacity-70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export const SectionFeatured: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Kiemelt hirdetések</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {featuredCars.map((car, i) => (
        <CarCard key={i} {...car} />
      ))}
    </div>
  </section>
);

export const SectionLatest: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Legfrissebb hirdetések</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {latestCars.map((car, i) => (
        <CarCard key={i} {...car} />
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <button type="button" className="px-8 py-3 rounded bg-[#D4A574] text-white font-bold uppercase text-sm hover:bg-[#c49564]">
        MUTASD MIND
      </button>
    </div>
  </section>
);

const CarListings: React.FC = () => (
  <>
    <SectionNewUsed />
    <SectionFeatured />
    <SectionLatest />
  </>
);

export default CarListings;
