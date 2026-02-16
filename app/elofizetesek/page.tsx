"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Subscriptions() {
  return (
    <>
      <Header alwaysShowGradient />
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-20 md:mt-40 p-4 md:p-10 font-bold text-center text-[#232628] mb-16 md:mb-32">
            ELŐFIZETÉSI CSOMAGOK
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
            <div className="border p-8 shadow-md ">
              <h2 className="text-2xl text-center text-[#232628] font-bold font-montserrat">INGYENES</h2>
              <p className="text-[#bdaab2] text-center">csomag</p>
              <div className="flex items-end justify-center mt-4">
                <h1 className="text-[#232628] text-5xl text-center font-bold">0 Ft</h1>
                <p className="text-[#777789] pl-5">/ honap</p>
              </div>
              <button className="text-sm block mx-auto justify-center bg-[#dbb27e] text-white font-bold rounded px-4 py-3 mt-4 hover:bg-[#5d8174] transition-colors duration-300">
                FRISSITES ERRE INGYENES
              </button>
              <ul className="text-black space-y-2 mb-16 mt-6 divide-y divide-[#f0f0f0] ">
                <li className="text-sm py-2">✓ 2 aktív hirdetés</li>
                <li className="text-sm py-2">✓ 2 hely a garázsban</li>
                <li className="text-sm py-2">✓ Csere ajánlat funkció</li>
                <li className="text-sm border-b border-[#f0f0f0] py-2">✓ Ingyenes képfeltöltés</li>
              </ul>
            </div>
            <div className="border p-8 shadow-md ">
              <h2 className="text-2xl text-center text-[#232628] font-bold font-montserrat">KERESKEDŐI CSOMAG</h2>
              <p className="text-[#bdaab2] text-center">csomag</p>
              <div className="flex items-end justify-center mt-4">
                <h1 className="text-[#232628] text-5xl text-center font-bold">40000 Ft</h1>
                <p className="text-[#777789] pl-5">/ honap</p>
              </div>
              <button className="text-sm block mx-auto justify-center bg-[#dbb27e] text-white font-bold rounded px-4 py-3 mt-4 hover:bg-[#5d8174] transition-colors duration-300">
                FRISSITES ERRE KERESKEDŐI CSOMAG
              </button>
              <ul className="text-black space-y-2 mb-16 mt-6 divide-y divide-[#f0f0f0] ">
                <li className="text-sm py-2">✓ Kereskedő rövid bemutatkozása</li>
                <li className="text-sm py-2">✓ Bónusz: Kiemelés – havonta 5 hirdetéshez használható</li>
                <li className="text-sm py-2">✓ Bónusz: HD képek, 12 a 6 helyett</li>
                <li className="text-sm py-2">✓ Korlátlan garázshely</li>
                <li className="text-sm border-b border-[#f0f0f0] py-2">✓ Korlátlan aktív hirdetési hely</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 mt-6 mb-8">
            <div className="border p-8 shadow-md ">
              <h2 className="text-2xl text-center text-[#232628] font-bold font-montserrat">PARTNER CSOMAG</h2>
              <p className="text-[#bdaab2] text-center">csomag</p>
              <div className="flex items-end justify-center mt-4">
                <h1 className="text-[#232628] text-5xl text-center font-bold">3000 Ft</h1>
                <p className="text-[#777789] pl-5">/ honap</p>
              </div>
              <button className="text-sm block mx-auto justify-center bg-[#dbb27e] text-white font-bold rounded px-4 py-3 mt-4 hover:bg-[#5d8174] transition-colors duration-300">
                FRISSITES ERRE PARTNER CSOMAG
              </button>
              <ul className="text-black space-y-2 mb-16 mt-6 divide-y divide-[#f0f0f0] ">
                <li className="text-sm py-2">✓ Rövid bemutatkozás</li>
                <li className="text-sm py-2">✓ Árlista / szolgáltatások</li>
                <li className="text-sm py-2">✓ 5 kép</li>
                <li className="text-sm py-2">✓ Nyitvatartás</li>
                <li className="text-sm py-2">✓ Elérhetőségek</li>
                <li className="text-sm border-b border-[#f0f0f0] py-2">✓ Árlista és szolgáltatások listája</li>
              </ul>
            </div>
            <div className="border p-8 shadow-md ">
              <h2 className="text-2xl text-center text-[#232628] font-bold font-montserrat">TÖBB AUTÓM VAN</h2>
              <p className="text-[#bdaab2] text-center">csomag</p>
              <div className="flex items-end justify-center mt-4">
                <h1 className="text-[#232628] text-5xl text-center font-bold">22000 Ft</h1>
                <p className="text-[#777789] pl-5">/ honap</p>
              </div>
              <button className="text-sm block mx-auto justify-center bg-[#dbb27e] text-white font-bold rounded px-4 py-3 mt-4 hover:bg-[#5d8174] transition-colors duration-300">
                FRISSITES ERRE TÖBB AUTÓM VAN
              </button>
              <ul className="text-black space-y-2 mb-16 mt-6 divide-y divide-[#f0f0f0] ">
                <li className="text-sm py-2">✓ 5 aktív hirdetés</li>
                <li className="text-sm py-2">✓ 10 garázshely</li>
                <li className="text-sm py-2">✓ Bővíthető aktív hirdetés slotok</li>
                <li className="text-sm py-2">✓ HD képek, 12 a 6 helyett — havi 2 hirdetésre használható</li>
                <li className="text-sm border-b border-[#f0f0f0] py-2">✓ Kiemelés — havi 2 hirdetésre használható</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
