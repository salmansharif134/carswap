"use client";

export default function KinalatunkFeaturedHeader() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className="bg-[#1e4d3a] text-white font-bold text-base uppercase tracking-wide px-8 py-3"
        style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
      >
        KIEMELT AJÁNLATOK
      </div>

      <a href="#" className="text-gray-600 text-sm font-medium hover:underline">
        Összes
      </a>

      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
