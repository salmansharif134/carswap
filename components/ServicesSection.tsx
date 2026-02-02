'use client';

import React from 'react';

const services = [
  {
    title: 'Autócsere könnyedén',
    desc: 'A CARSWAP teljes körű támogatást nyújt az autócsere lebonyolításában. Legyen szó bármilyen típusú gépjárműről, segítünk megtalálni az ideális cserepartnert.',
  },
  {
    title: 'Autószerviz és kiegészítők',
    desc: 'Autószervizeket és kiegészítők forgalmazóit is megtalálhatja a CARSWAP® ajánlásával.',
  },
  {
    title: 'HD képek és virtuális túra',
    desc: 'Mutassa meg gépjárművét a legjobb oldaláról! HD minőségű képekkel és hamarosan virtuális túrával is segítünk az autók bemutatásában.',
  },
  {
    title: 'Céges autók értékesítése',
    desc: 'Cégek számára is lehetőséget kínálunk flottagépjárművek cseréjére vagy értékesítésére.',
  },
  {
    title: 'Autóértékesítés és hirdetés',
    desc: 'Adja el használt autóját gyorsan és egyszerűen a CARSWAP® felületén. Hozza létre hirdetését, és érje el leendő vásárlóját még ma!',
  },
  {
    title: 'Dokumentációkezelés',
    desc: 'Segítünk a szükséges dokumentumok elkészítésében és kezelésében az autóvásárlás vagy -eladás során.',
  },
  {
    title: 'Szerviz ajánlás és szakértői segítség',
    desc: 'Ismerjük a legjobb szervizeket és szakembereket. Az általunk ajánlott partnerek kipróbált, megbízható támogatást nyújtanak gépjárművével kapcsolatban.',
  },
  {
    title: 'Egyéb Szolgáltatások',
    desc: 'További egyedi szolgáltatásokat kínálunk, hogy minden igényét kielégítsük.',
  },
];

const Icon = () => (
  <svg
    className="w-8 h-8 text-black"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const ServicesSection = () => {
  const left = services.slice(0, 4);
  const right = services.slice(4);

  return (
    <>
      {/* SERVICES */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8">
          {[left, right].map((column, i) => (
            <div key={i} className="space-y-8">
              {column.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-black leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-gray-600 leading-6 max-w-[520px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM GREEN LINE */}
      <div className="w-full">
        <div className="h-[3px] bg-[#0b5d2a]" />
      </div>
    </>
  );
};

export default ServicesSection;
