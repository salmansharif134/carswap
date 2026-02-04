"use client";

interface KinalatunkFilterChipsProps {
  activeFilters: string[];
  onClearAll: () => void;
  onRemoveFilter: (filter: string) => void;
}

export default function KinalatunkFilterChips({
  activeFilters,
  onClearAll,
  onRemoveFilter,
}: KinalatunkFilterChipsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <button
        type="button"
        onClick={onClearAll}
        className="bg-red-600 text-white px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
      >
        CLEAR ALL FILTERS
      </button>

      {activeFilters.map((filter) => (
        <span
          key={filter}
          className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded text-sm"
        >
          {filter}
          <button
            type="button"
            onClick={() => onRemoveFilter(filter)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
}
