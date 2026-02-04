"use client";

interface KinalatunkPaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function KinalatunkPagination({
  currentPage = 2,
  totalPages = 5,
  onPageChange,
}: KinalatunkPaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 py-10">
      <button
        type="button"
        onClick={() => onPageChange?.(currentPage - 1)}
        className="w-10 h-10 rounded bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange?.(p)}
          className={`w-10 h-10 rounded font-medium ${
            p === currentPage
              ? "bg-[#1e4d3a] text-white"
              : "bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange?.(currentPage + 1)}
        className="w-10 h-10 rounded bg-[#1e4d3a] text-white flex items-center justify-center hover:bg-[#163d2e]"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
