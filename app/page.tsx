import Calculator from "@/components/Calculator"; // or whatever your main component is named
import SeoContent from "@/components/SeoContent";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <div className="w-full pt-12">
      
      {/* SIDE-BY-SIDE LAYOUT WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
        
        {/* Left Side: Your Actual Calculator */}
        <div className="w-full max-w-xl flex-1">
          <Calculator />
        </div>

        {/* Right Side: The Sidebar Ad (Hidden on mobile, blocks on desktop) */}
        <div className="hidden lg:block w-[300px] shrink-0 sticky top-24">
          <AdBanner slot="1234567890" />
        </div>

      </div>

      {/* SEO text stays cleanly underneath both */}
      <SeoContent />
      
    </div>
  );
}