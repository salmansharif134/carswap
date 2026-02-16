'use client';

import React from 'react';
import Image from 'next/image';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/qwerty.png',
    title: 'Autócsere könnyedén',
    description: 'A CARSWAP® teljes körű támogatást nyújt az autócsere lebonyolításában. Legyen szó bármilyen típusú gépjárműről, segítünk megtalálni az ideális cserepartnert.',
  },
  {
    icon: '/121.png',
    title: 'Autóértékesítés és hirdetés',
    description: 'Adja el használt autóját gyorsan és egyszerűen a CARSWAP® felületén. Hozza létre hirdetését, és érje el leendő vásárlóját még ma!',
  },
  {
    icon: '/1122.png',
    title: 'Autószerviz és kiegészítők',
    description: 'Autószervizeket és kiegészítők forgalmazóit is megtalálhatja a CARSWAP® ajánlásával.',
  },
  {
    icon: '/22.png',
    title: 'Dokumentációkezelés',
    description: 'Segítünk a szükséges dokumentumok előkészítésében és kezelésében az autóvásárlás vagy -eladás során.',
  },
  {
    icon: '/hd.png',
    title: 'HD képek és virtuális túra',
    description: 'Mutassuk meg gépjárművét a legjobb oldaláról! HD minőségű képekkel és hamarosan virtuális túrával is segítünk az autók bemutatásában.',
  },
  {
    icon: '/ff2.png',
    title: 'Szerviz ajánlás és szakértői segítség',
    description: 'Ismerjük a legjobb szervizeket és szakembereket. Az általunk ajánlott partnerek kipróbált, megbízható támogatást nyújtanak gépjárműével kapcsolatban.',
  },
  {
    icon: '/ceges.png',
    title: 'Céges autók értékesítése',
    description: 'Cégek számára is lehetőségeket kínálunk flottaképjárműveik cseréjére vagy értékesítésére.',
  },
  {
    icon: '/dsd.png',
    title: 'Egyéb Szolgáltatások',
    description: 'További egyedi szolgáltatásokat kínálunk, hogy minden igényét kielégítsük.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-6 items-start">
            {/* Icon - Fixed size container */}
            <div className="shrink-0 w-[100px] h-[100px] flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="w-[80px] h-[80px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-[26px] font-bold text-black mb-2.5  font-montserrat">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-gray-700 open-sans">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border line */}
      <div className="mt-16 border-t-[3px] border-black"></div>
    </section>
  );
};

export default FeaturesSection;
