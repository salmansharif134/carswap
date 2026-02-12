'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { name, email, agreed });
  };

  return (
<footer className="relative w-full bg-black pt-10 pb-16">
      {/* Top center vector/triangle */}
      <div className="absolute left-1/2 -top-1 -translate-x-1/2 z-10">
        <svg width="90" height="32" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="40,48 0,0 80,0" fill="white" />
        </svg>
      </div>

                    {/* className="px-4 py-2 border-2 border-[#000000] rounded text-black placeholder-black" */}
      <div className="w-full flex justify-center mb-10">
        <Image
          src="/logo.webp"
          alt="CARSWAP"
          width={480}
          height={144}
          className="w-auto h-40 object-contain"
        />
      </div>

       {/* className="px-4 py-2 border-2 border-[#000000] rounded text-black placeholder-black" */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2
              style={{
                fontSize: '39px',
                fontWeight: 600,
                lineHeight: '36px',
                letterSpacing: '0.3px',
                color: '#DBB27E',
              }}
              className="mb-6"
            >
              Csatlakozz a <br /> levelezőlistánkhoz!
            </h2>

            <p className="text-white/90 text-base mb-3 leading-relaxed max-w-xl">
              <span className="font-bold">
                Szeretnél elsőként értesülni újdonságainkról, titkos akciókról vagy inspiráló tartalmakról?
              </span>{' '}
              Iratkozz fel a hírlevelünkre és csak a lényeges dolgokat küldjük.
            </p>

            <p className="text-white/70 text-sm">
              Hetente néhány levél, semmi felesleges.
            </p>
          </div>

          <div>
            <form className="bg-white rounded-lg p-6 shadow-lg space-y-4 " onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-600 mb-1">Név</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Név"
                    className="px-4 py-2 border-2 border-[#000000] rounded  text-black placeholder-black"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border-2 border-[#000000] rounded  text-black placeholder-black"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                <span className="text-gray-600">
                  Elolvastam és elfogadom az adatkezelési tájékoztatót
                </span>
              </div>

              <button className="w-full bg-[#DBB27E] hover:bg-[#c9a667] text-white font-bold  py-2 rounded">
                FELIRATKOZÁS
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-white/20 mb-12" />
      </div>

      {/* Bottom Links — EXACTLY like image */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 text-center text-white font-bold text-sm mb-12">

          <div className="space-y-3">
            <p>Kapcsolat</p>
            <p>Gyakori Kérdések</p>
            <p>Hasznos Tanácsok</p>
          </div>

          <div className="space-y-3">
            <p>Kínálatunk</p>
            <p>Partnereink</p>
            <p>Ügyintézők</p>
            <p>Előfizetések</p>
          </div>

          <div className="space-y-3">
            <p>Általános Szerződési Feltételek</p>
            <p>Adatkezelési Tájékoztató</p>
          </div>

        </div>

        <hr className="border-white/20 mb-6" />

        <div className=" text-white/60 text-sm">
          2024–2025 CARSWAP | Minden jog fenntartva
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 w-12 h-12 bg-[#dcb377] hover:bg-[#c9a667] text-white rounded-full flex items-center justify-center"
        >
          ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;
