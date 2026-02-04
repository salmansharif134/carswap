'use client';

import React from 'react';
import Image from 'next/image';

interface CarCardProps {
  title: string;
  subtitle: string;
  price: string;
  imageSrc?: string;
  tags?: string[];
  priceBg?: 'green' | 'brown';
}

const CarCard: React.FC<CarCardProps> = ({
  title,
  subtitle,
  price,
  imageSrc,
  tags = [],
  priceBg = 'green',
}) => {
  return (
    <div className="bg-white overflow-hidden rounded-lg border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 85vw, 320px"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Auto
          </div>
        )}
        <div
          className={[
            'absolute bottom-3 right-3 px-3 py-1.5 rounded-md text-white text-sm font-bold shadow-lg',
            priceBg === 'green' ? 'bg-[#1e4d3a]' : 'bg-[#D4A574]',
          ].join(' ')}
        >
          {price}
        </div>
      </div>
      <div className="px-4 py-4">
        <h3 className="font-bold text-black text-sm truncate uppercase tracking-wider text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{subtitle}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 hover:bg-gray-100 transition">
              <svg className="w-3.5 h-3.5 text-[#D4A574] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span className="text-xs text-gray-700 font-medium">{tags[0]}</span>
            </span>
            {tags[1] && (
              <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 hover:bg-gray-100 transition">
                <svg className="w-3.5 h-3.5 text-[#D4A574] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4-1V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 12a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-4-1V7a2 2 0 012-2h2a2 2 0 012 2v1"/></svg>
                <span className="text-xs text-gray-700 font-medium">{tags[1]}</span>
              </span>
            )}
            {tags[2] && (
              <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 hover:bg-gray-100 transition">
                <svg className="w-3.5 h-3.5 text-[#D4A574] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span className="text-xs text-gray-700 font-medium">{tags[2]}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
