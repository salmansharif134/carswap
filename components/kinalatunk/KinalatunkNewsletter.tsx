"use client";

import Image from "next/image";

export default function KinalatunkNewsletter() {
  return (
    <section className="bg-[#1e4d3a] py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/logo.webp"
            alt="CARSWAP"
            width={200}
            height={60}
            className="mb-6"
          />
          <h2 className="text-white text-3xl font-bold mb-4">
            Csatlakozz a<br />levelezőlistánkhoz!
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Szeretnél elsőként értesülni újdonságainkról, titkok akcióról vagy épp inspiráló
            tartalmakról? Iratkozz fel a hírlevelünkre, és garantáltan csak hasznos,
            érdekés tartalmakkal keresünk meg, csoportjainkon keresztül semmi más.
          </p>
          <p className="text-white/60 text-xs">
            Hetente néhány levél, semmi felesleges, csak a lényeg.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md ml-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Név</label>
                <input
                  type="text"
                  placeholder="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-xs text-gray-600">
                  Elolvastam és elfogadom az adatkezelési tájékoztatót
                </p>
              </div>
              <button
                type="button"
                className="w-full bg-[#dcb377] text-white py-3 rounded font-bold hover:bg-[#c9a667] transition-colors"
              >
                FELIRATKOZÁS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
