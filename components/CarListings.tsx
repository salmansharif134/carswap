'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import CarCard from '@/components/CarCard';

/* ─── sample data (shared across sections for demo) ─── */
const sampleCars = [
  {
    imageSrc: '/1.jpg',
    price: '4 444 Ft',
    year: 1952,
    makeModel: 'AIXAM CROSSLINE',
    fuel: 'BENZIN / GÁZ (LPG)',
    mileage: '7 777 km',
    capacity: '77 777 cm³',
    transmission: 'AUTOMATA (9 FOKOZATÚ)',
    condition: 'HIBÁS',
    power: '7 777 kW',
    badge: 'Kiemelt 1',
    priceBg: 'green' as const,
  },
  {
    imageSrc: '/2.jpg',
    price: '82 000 000 Ft',
    year: 2023,
    makeModel: 'LAMBORGHINI AVENTADOR',
    status: '',
    fuel: 'BENZIN',
    mileage: '12 000 km',
    capacity: '6 498 cm³',
    transmission: 'AUTOMATA',
    condition: 'ÚJSZERŰ',
    power: '400 kW',
    location: 'Budapest, Magyarország',
    priceBg: 'green' as const,
  },
  {
    imageSrc: '/3.jpg',
    price: '68 987 Ft',
    year: 2008,
    makeModel: 'ACURA RL',
    status: 'CSERÉLHETŐ',
    fuel: 'BENZIN',
    mileage: '66 666 km',
    capacity: '3 500 cm³',
    transmission: 'AUTOMATA (8 FOKOZATÚ)',
    condition: 'HIBÁS',
    power: '222 kW',
    location: 'Debrecen, Magyarország',
    priceBg: 'green' as const,
  },
  {
    imageSrc: '/4.jpg',
    price: '4 444 Ft',
    year: 2015,
    makeModel: 'ACURA RL',
    status: 'CSERÉLHETŐ',
    fuel: 'BENZIN / GÁZ (LPG)',
    mileage: '111 111 km',
    capacity: '2 400 cm³',
    transmission: 'AUTOMATA (8 FOKOZATÚ)',
    condition: 'ÚJSZERŰ',
    power: '111 kW',
    location: 'New York, Egyesült Államok',
    badge: 'ÚJ',
    priceBg: 'green' as const,
  },
  {
    imageSrc: '/5.jpg',
    price: '4 444 Ft',
    year: 2022,
    makeModel: 'AIWAYS U6',
    status: 'CSERÉLHETŐ',
    fuel: 'BENZIN / GÁZ (LPG)',
    mileage: '11 111 km',
    capacity: '1 500 cm³',
    transmission: 'AUTOMATA',
    condition: 'ÚJSZERŰ',
    power: '111 kW',
    location: 'Delhi, India',
    priceBg: 'green' as const,
  },
  {
    imageSrc: '/1.jpg',
    price: '33 333 Ft',
    year: 2020,
    makeModel: 'AIXAM CROSSOVER',
    status: 'CSERÉLHETŐ',
    fuel: 'BENZIN',
    mileage: '11 111 km',
    capacity: '1 000 cm³',
    transmission: 'AUTOMATA (8 FOKOZATÚ)',
    condition: 'ÚJSZERŰ',
    power: '111 kW',
    location: 'Florida, Egyesült Államok',
    priceBg: 'green' as const,
  },
];

/* ─── reusable carousel wrapper ─── */
interface CarouselSectionProps {
  title: React.ReactNode;
  cars: typeof sampleCars;
}

function CarouselSection({ title, cars }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 320;
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
      {/* Header row */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-[26px] md:text-[34px] font-bold text-black leading-tight">
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Előző"
            disabled={!canScrollLeft}
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
              text-gray-600 hover:bg-[#0b4f3a] hover:text-white hover:border-[#0b4f3a]
              disabled:opacity-30 disabled:cursor-default transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Következő"
            disabled={!canScrollRight}
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
              text-gray-600 hover:bg-[#0b4f3a] hover:text-white hover:border-[#0b4f3a]
              disabled:opacity-30 disabled:cursor-default transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable card row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
          scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]"
      >
        {cars.map((car, i) => (
          <div
            key={`${car.makeModel}-${i}`}
            className="shrink-0 snap-start w-[280px] sm:w-[300px] lg:w-[calc((100%-60px)/4)]"
          >
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── SectionNewUsed: centered title + bottom arrows layout ─── */

export function SectionNewUsed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 320;
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

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
        {sampleCars.slice(0, 3).map((car, i) => (
          <div
            key={`newused-${car.makeModel}-${i}`}
            className="shrink-0 snap-start w-[330px] h-[419px]"
          >
            <CarCard {...car} />
          </div>
        ))}
      </div>

      {/* Bottom centered arrows */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          type="button"
          aria-label="Előző"
          disabled={!canScrollLeft}
          onClick={() => scroll('left')}
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:bg-[#1a3d7c] hover:text-white hover:border-[#1a3d7c]
            disabled:opacity-30 disabled:cursor-default transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Következő"
          disabled={!canScrollRight}
          onClick={() => scroll('right')}
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:bg-[#1a3d7c] hover:text-white hover:border-[#1a3d7c]
            disabled:opacity-30 disabled:cursor-default transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ─── exported section components ─── */

export function SectionFeatured() {
  const featured = sampleCars.filter((c) => c.badge);
  const display = featured.length >= 4 ? featured : [...featured, ...sampleCars.slice(0, 4 - featured.length)];

  return (
    <CarouselSection
      title={
        <>
          <span className="text-[#dcb377]">Kiemelt</span> hirdetések
        </>
      }
      cars={display}
    />
  );
}

export function SectionLatest() {
  const latest = [...sampleCars].reverse();

  return (
    <CarouselSection
      title={
        <>
          <span className="text-[#dcb377]">Legújabb</span> hirdetések
        </>
      }
      cars={latest}
    />
  );
}
