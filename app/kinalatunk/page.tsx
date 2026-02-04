"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { cars } from "@/components/kinalatunk/data";
import FilterSidebar from "@/components/kinalatunk/FilterSidebar";
import ListingCard from "@/components/kinalatunk/ListingCard";
import KinalatunkTopBar from "@/components/kinalatunk/KinalatunkTopBar";
import KinalatunkFilterChips from "@/components/kinalatunk/KinalatunkFilterChips";
import KinalatunkFeaturedHeader from "@/components/kinalatunk/KinalatunkFeaturedHeader";
import KinalatunkPagination from "@/components/kinalatunk/KinalatunkPagination";
import KinalatunkNewsletter from "@/components/kinalatunk/KinalatunkNewsletter";

export default function KinalatunkPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Eladó"]);

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <FilterSidebar />

          <main>
            <KinalatunkTopBar />

            <KinalatunkFilterChips
              activeFilters={activeFilters}
              onClearAll={handleClearAllFilters}
              onRemoveFilter={handleRemoveFilter}
            />

            <KinalatunkFeaturedHeader />

            <div className="space-y-6">
              {cars.map((car) => (
                <ListingCard key={car.id} car={car} />
              ))}
            </div>

            <KinalatunkPagination currentPage={2} totalPages={5} />
          </main>
        </div>

        <KinalatunkNewsletter />
      </div>

      <Footer />
    </>
  );
}
