import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import { SectionNewUsed, SectionFeatured, SectionLatest } from "@/components/CarListings";
import BrowseSection from "@/components/BrowseSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
      {/* Banner image section */}
      <div className="relative">
        <div className="relative h-[260px] md:h-[340px] lg:h-[420px]">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/CarswapbannerNEW.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
          <div className="absolute inset-0   to-transparent" />
          <div className="sticky top-0 z-10000">
            <Header />
          </div>
        </div>
      </div>

      {/* Search/filter bar UNDER the banner image */}
      <main className="grow bg-white-50">
        <HeroSearch />
        <SectionNewUsed />
        <BrowseSection />
        <ServicesSection />
        <SectionFeatured />
        <div className="flex justify-center px-20 py-0">
          <div className="w-full border-t-4 border-green-900"></div>
        </div>
        <SectionLatest />
      </main>
      <Footer />
      {/* Fixed accessibility/feedback eye icon */}
      <button
        type="button"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-12 flex items-center justify-center bg-gray-800 text-white rounded-l-lg shadow-lg hover:bg-gray-700"
        aria-label="Accessibility / Feedback"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      </button>
    </div>
  );
}
