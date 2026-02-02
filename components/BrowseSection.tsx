'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Default (no click): show only the first row like the screenshot
const brands = ['Abarth', 'Acura', 'Aiways', 'Aixam'];
const types = ['Cabrio', 'Coupe', 'Egyéb', 'Ferdehátú'];

// Used when user clicks "Összes ..."
const allBrands = [
  'Abarth',
  'Acura',
  'Aiways',
  'Aixam',
  'Alfa Romeo',
  'Alpina',
  'Alpine',
  'Aston Martin',
  'Audi',
  'Infiniti',
  'Koenigsegg',
  'Lamborghini',
  'Maserati',
  'Maybach',
  'Volkswagen',
];

const allTypes = [
  'Cabrio',
  'Coupe',
  'Egyéb',
  'Ferdehátú',
  'Kisbusz',
  'Városi terepjáró',
  'Egyterű',
  'Kombi',
  'Sedan',
];

const brandLogos: Record<string, string> = {
  Abarth: '/abarth.png',
  Acura: '/acura.png',
  Aiways: '/aiway.png',
  Aixam: '/aixam.jpg',
};

const typeIcons: Record<string, string> = {
  Cabrio: '/cabiro.webp',
  Coupe: '/coupe.webp',
  'Egyéb': '/egype.webp',
  'Ferdehátú': '/fed.webp',
};

const actionLinkClass =
  'text-gray-500 text-sm font-medium underline decoration-dotted underline-offset-4 hover:text-black';
const labelLinkClass =
  'text-[11px] tracking-widest uppercase text-gray-600 underline decoration-dotted underline-offset-4 group-hover:text-black';
const listLinkClass =
  'text-[12px] tracking-widest uppercase text-gray-600 underline decoration-dotted underline-offset-4 hover:text-black';

function BrandTile({ name }: { name: string }) {
  const src = brandLogos[name];

  return (
    <a href="#" className="group flex flex-col items-center text-gray-900 no-underline">
      <div className="w-20 h-20 flex items-center justify-center mb-3 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={name}
            width={72}
            height={72}
            className="h-[72px] w-[72px] object-contain"
          />
        ) : (
          <span className="text-sm font-bold text-gray-600">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={labelLinkClass}>{name}</span>
    </a>
  );
}

function TypeTile({ name }: { name: string }) {
  const src = typeIcons[name];
  return (
    <a href="#" className="group flex flex-col items-center text-gray-900 no-underline">
      <div className="h-20 w-20 flex items-center justify-center mb-3 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={name}
            width={72}
            height={72}
            className="h-[72px] w-[72px] object-contain"
          />
        ) : (
          <svg className="w-10 h-10 text-[#1e4d3a]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          </svg>
        )}
      </div>
      <span className={labelLinkClass}>{name}</span>
    </a>
  );
}

function TextListGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 pt-6">
      {items.map((item) => (
        <a key={item} href="#" className={listLinkClass}>
          {item}
        </a>
      ))}
    </div>
  );
}

const BrowseSection: React.FC = () => {
  const carswapLogoRef = useRef<HTMLDivElement | null>(null);
  const [carswapLogoVisible, setCarswapLogoVisible] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllTypes, setShowAllTypes] = useState(false);

  useEffect(() => {
    const el = carswapLogoRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        setCarswapLogoVisible(Boolean(first?.isIntersecting));
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Browse by Brand */}
        <div className="min-h-[220px]">
          <div className="flex items-end justify-between gap-6 mb-4">
            <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight">
              Nézz körül <span className="text-[#dcb377]">Márka</span> szerint
            </h2>
            <button
              type="button"
              onClick={() => setShowAllBrands((v) => !v)}
              className={actionLinkClass}
              aria-expanded={showAllBrands}
            >
              {showAllBrands ? 'Vissza' : 'Összes márka'}
            </button>
          </div>
          {showAllBrands ? (
            <TextListGrid items={allBrands} />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-3">
              {brands.map((b) => (
                <BrandTile key={b} name={b} />
              ))}
            </div>
          )}
        </div>

        {/* Browse by Type */}
        <div className="min-h-[220px]">
          <div className="flex items-end justify-between gap-6 mb-4">
            <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight">
              ...vagy <span className="text-[#dcb377]">Kivitel</span> szerint
            </h2>
            <button
              type="button"
              onClick={() => setShowAllTypes((v) => !v)}
              className={actionLinkClass}
              aria-expanded={showAllTypes}
            >
              {showAllTypes ? 'Vissza' : 'Összes kivitel'}
            </button>
          </div>
          {showAllTypes ? (
            <TextListGrid items={allTypes} />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-3">
              {types.map((t) => (
                <TypeTile key={t} name={t} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CARSWAP explanation with two-tone logo: car split green/gold, text gold */}
      <div className="relative mt-16 p-8 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="relative z-10 order-2 md:order-1 max-w-[680px] text-[14px] md:text-[15px] leading-6 text-gray-800 space-y-6">
          <p>
            A CARSWAP® az autórajongók megbízható partnere, akik használt autókat szeretnének
            cserélni vagy értékesíteni. Platformunkon egyszerűen töltheti fel járművét,
            cserélhet más autóra, vagy találhat vevőt.
          </p>
          <p>
            Csatlakozzon a CARSWAP® közösséghez, és tegye zökkenőmentessé autós ügyleteit!
          </p>
        </div>
        <div
          ref={carswapLogoRef}
          className={[
            'order-1 md:order-2 shrink-0 md:ml-auto md:mr-10',
            carswapLogoVisible ? 'carswap-slide-in' : 'opacity-0 translate-x-12',
          ].join(' ')}
        >
          <Image
            src="/carswapimg.png"
            alt="CARSWAP"
            width={1000}
            height={380}
            className="h-[210px] w-auto object-contain md:h-[300px]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default BrowseSection;
