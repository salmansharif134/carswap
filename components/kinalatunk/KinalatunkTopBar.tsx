"use client";

export default function KinalatunkTopBar() {
  return (
    <div className="bg-white rounded-lg shadow-sm px-6 py-5 flex flex-wrap justify-between items-center gap-4 mb-5">
      <h1 className="font-bold text-3xl text-gray-900">Autó hirdetések</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium uppercase">Rendezés</span>
          <select className="border border-gray-300 px-4 py-2 rounded text-sm bg-white font-medium">
            <option>Dátum, legújabb elől</option>
            <option>Ár növekvő</option>
            <option>Ár csökkenő</option>
          </select>
        </div>
        <div className="flex gap-1 border border-gray-300 rounded overflow-hidden">
          <button className="p-2.5 bg-gray-100" aria-label="Rács nézet">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
          <button className="p-2.5 hover:bg-gray-50" aria-label="Lista nézet">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
