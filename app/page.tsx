import Calculator from "@/components/Calculator";
import SeoContent from "@/components/SeoContent";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <>
      <section id="calculator" className="w-full bg-slate-50 dark:bg-slate-950 pt-8 pb-16 px-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        
        {/* HEADER TEXT */}
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Split any check <span className="text-green-500">in seconds</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Free restaurant & group check splitter. No sign-up needed.</p>
        </div>
        
        {/* CALCULATOR CONTAINER */}
        <div className="w-full max-w-5xl mx-auto flex justify-center">
          <div className="w-full">
            <Calculator />
          </div>
        </div>

        {/* RESPONSIVE INLINE AD (Fills the space beautifully) */}
        <div className="w-full max-w-4xl mx-auto mt-12">
          {/* Note: You will need to replace "YOUR_INLINE_SLOT_ID" with the actual 10-digit code Google gives you once approved */}
          <AdBanner slot="YOUR_INLINE_SLOT_ID" format="responsive" />
        </div>

      </section>

      {/* Below the Fold SEO Content */}
      <section id="how-it-works">
        <SeoContent />
      </section>
    </>
  );
}

// import Calculator from "@/components/Calculator";
// import SeoContent from "@/components/SeoContent";

// export default function Home() {
//   return (
//     <>
//       {/* Added dark:bg-slate-950 and dark:border-slate-800 */}
//       <section id="calculator" className="w-full bg-slate-50 dark:bg-slate-950 pt-8 pb-16 px-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
//         <div className="max-w-5xl mx-auto text-center mb-8">
//           {/* Added dark:text-white */}
//           <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
//             Split any check <span className="text-green-500">in seconds</span>
//           </h1>
//           {/* Added dark:text-slate-400 */}
//           <p className="text-slate-500 dark:text-slate-400 text-lg">Free restaurant & group check splitter. No sign-up needed.</p>
//         </div>
        
//         <Calculator />
//       </section>

//       {/* Below the Fold SEO Content */}
//       <section id="how-it-works">
//         <SeoContent />
//       </section>
//     </>
//   );
// }