'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowPathIcon,
  BoltIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';

interface CarCardProps {
  imageSrc: string;
  price: string;
  year: number;
  type?: string; // Made optional as it wasn't prominent in the new text
  makeModel: string;
  status: string;
  fuel: string;
  mileage: string;
  capacity: string;
  transmission: string;
  condition: string;
  power: string;
  location?: string;
  badge?: string; // For "Kiemelt 1", "ÚJ", etc.
  priceBg?: 'green' | 'brown';
}

const CarCard: React.FC<CarCardProps> = ({
  imageSrc,
  price,
  year,
  type,
  makeModel,
  status,
  fuel,
  mileage,
  capacity,
  transmission,
  condition,
  power,
  location,
  badge,
  priceBg = 'green',
}) => {
  return (
    <div className="bg-white rounded-none md:rounded-lg overflow-hidden border border-gray-100  transition-all duration-300 group h-full flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={makeModel}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Badge (Top Left) */}
        {badge && (
          <div className="absolute top-0 left-0 z-20 bg-[#dcb377] text-white text-[10px] md:text-xs font-bold px-2 py-1 uppercase">
            {badge}
          </div>
        )}

        {/* Price Tag - Angled/Skewed style */}
        <div className={`absolute bottom-0 right-0 z-10 pl-8 pr-4 py-2 text-white font-bold text-lg md:text-xl
          ${priceBg === 'green' ? 'bg-[#0b4f3a]' : 'bg-[#a37f4b]'}
        `}
          style={{ clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0% 100%)' }}>
          {price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        {/* Header: Make + Model (moved up based on visual hierarchy in prompt usually implies title first) */}
        <h3 className="text-base md:text-lg font-extrabold text-[#0b4f3a] uppercase truncate mb-1" title={makeModel}>
          {makeModel}
        </h3>

        {/* Year + Type (Subtitle) */}
        <div className="text-[#dcb377] text-[12px] md:text-sm font-bold uppercase tracking-wider mb-2">
          {year}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-3"></div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[10px] md:text-[11px] text-gray-600 font-medium">

          {/* Status */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <ArrowPathIcon className="w-3.5 h-3.5 text-gray-400" />
            <span className="uppercase truncate">{status}</span>
          </div>

          {/* Fuel */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2H5a1 1 0 0 0-1 1v9h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h6v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1V6a1 1 0 0 0-1-1zm-4 9H9V7h6v7z" /></svg>
            <span className="uppercase truncate">{fuel}</span>
          </div>

          {/* Mileage */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <span className="font-bold text-gray-400 text-xs w-3.5 text-center">A</span>
            <span>{mileage}</span>
          </div>

          {/* Capacity */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <WrenchScrewdriverIcon className="w-3.5 h-3.5 text-gray-400" />
            <span>{capacity}</span>
          </div>

          {/* Power */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <BoltIcon className="w-3.5 h-3.5 text-gray-400" />
            <span>{power}</span>
          </div>

          {/* Transmission - spans if needed or concise */}
          <div className="flex items-center gap-1.5 col-span-2">
            <div className="w-3.5 h-3.5 rounded-full border border-gray-400 flex items-center justify-center text-[7px] font-bold text-gray-500">A</div>
            <span className="uppercase truncate">{transmission}</span>
          </div>

          {/* Condition */}
          <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <StarIcon className="w-3.5 h-3.5 text-gray-400" />
            <span className="uppercase truncate">{condition}</span>
          </div>

          {/* Location (New) */}
          {location && (
            <div className="flex items-center gap-1.5 col-span-2 mt-1">
              <MapPinIcon className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate">{location}</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CarCard;
