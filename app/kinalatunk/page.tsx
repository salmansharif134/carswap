"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header bgColor="dark-green" />

      <div className="bg-[#f3f5f6] min-h-screen">
        <div className="max-w-[1450px] mx-auto px-4 py-6 grid grid-cols-[280px_1fr] gap-6">

          {/* LEFT FILTER BAR */}
          <aside className="bg-[#1f4f43] rounded-lg shadow-md p-4 text-white space-y-3">

            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">SZŰRÉS</span>
              <span className="text-lg">🚗</span>
            </div>

            {filters.map((f, i) => (
              <select key={i} className="w-full bg-[#2e6b5f] text-sm px-3 py-2 rounded border border-[#3b7c6f]">
                <option>{f}</option>
              </select>
            ))}

            <div className="pt-4">
              <button className="w-full bg-[#d7b06d] text-black py-2 rounded font-semibold">
                Keresés
              </button>
            </div>

          </aside>

          {/* RIGHT SIDE */}
          <main>

            {/* TOP BAR */}
            <div className="bg-white rounded shadow-md px-4 py-3 flex justify-between items-center mb-4">
              <h1 className="font-semibold text-lg">Autó hirdetések</h1>

              <div className="flex items-center gap-4">
                <select className="border px-2 py-1 text-sm rounded">
                  <option>Dátum: legújabb elöl</option>
                </select>
                <div className="flex gap-2">
                  <button className="border px-2 py-1 rounded">☰</button>
                  <button className="border px-2 py-1 rounded">▥</button>
                </div>
              </div>
            </div>

            {/* CLEAR FILTERS */}
            <div className="mb-3">
              <button className="bg-red-500 text-white text-xs px-3 py-1 rounded">
                CLEAR ALL FILTERS
              </button>
            </div>

            {/* LISTINGS */}
            <div className="space-y-4">
              {cars.map((car, i) => (
                <div key={i} className="bg-white rounded shadow-md overflow-hidden relative">

                  {/* FEATURED RIBBON */}
                  <div className="absolute left-0 top-0 bg-[#d7b06d] text-xs font-semibold px-4 py-1 z-10">
                    KIEMELT AJÁNLATOK
                  </div>

                  {/* PRICE TAG */}
                  <div className="absolute right-0 top-0 bg-[#d7b06d] px-4 py-2 font-semibold">
                    {car.price}
                  </div>

                  <div className="flex p-4 gap-4">

                    {/* IMAGE */}
                    <img
                      src={car.image}
                      className="w-[180px] h-[120px] object-cover rounded"
                    />

                    {/* INFO */}
                    <div className="flex-1">

                      <h2 className="font-semibold text-sm mb-2">
                        {car.name}
                      </h2>

                      <div className="grid grid-cols-4 gap-3 text-xs text-gray-600 mb-3">
                        <span>📍 {car.city}</span>
                        <span>📅 {car.year}</span>
                        <span>📏 {car.km} km</span>
                        <span>⚙ {car.trans}</span>
                        <span>⛽ {car.fuel}</span>
                        <span>🛠 Eladó</span>
                        <span>🚗 {car.type}</span>
                        <span>🧭 {car.drive}</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">MEGTEKINTÉS</span>
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded">ÖSSZEHASONLÍTOM</span>
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded">MENTÉS</span>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-2 py-10">
              <button className="w-9 h-9 bg-gray-200 rounded">1</button>
              <button className="w-9 h-9 bg-[#1f4f43] text-white rounded">2</button>
              <button className="w-9 h-9 bg-gray-200 rounded">3</button>
              <button className="w-9 h-9 bg-[#1f4f43] text-white rounded">→</button>
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

const filters = [
  "Eladás mód",
  "Márka",
  "Model",
  "Üzemanyag típusa",
  "Kivitel",
  "Váltó típusa",
  "Hajtás",
  "Állapot",
  "Külső szín",
  "Belső szín",
  "Okmány típusa",
  "Műszaki érvényesség",
];

const cars = [
  {
    name: "AIXAM CROSSLINE",
    price: "4 444 Ft",
    city: "Budapest",
    year: 2022,
    km: 7777,
    fuel: "Benzin",
    trans: "Automata",
    type: "Személyautó",
    drive: "Hátsó",
    image: "/aixam.jpg",
  },
  {
    name: "LAMBORGHINI AVENTADOR",
    price: "82 000 000 Ft",
    city: "Budapest",
    year: 2023,
    km: 12000,
    fuel: "Benzin",
    trans: "Automata",
    type: "Sport",
    drive: "AWD",
    image: "/5.jpg",
  },
  {
    name: "ACURA RL",
    price: "88 887 Ft",
    city: "Debrecen",
    year: 2021,
    km: 6666,
    fuel: "Benzin",
    trans: "Automata",
    type: "Sedan",
    drive: "FWD",
    image: "/acura.png",
  },
];
