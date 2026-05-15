import Calculator from "@/components/Calculator";
import SeoContent from "@/components/SeoContent";

export default function Home() {
  return (
    <>
      {/* Added dark:bg-slate-950 and dark:border-slate-800 */}
      <section id="calculator" className="w-full bg-slate-50 dark:bg-slate-950 pt-8 pb-16 px-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-5xl mx-auto text-center mb-8">
          {/* Added dark:text-white */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Split any check <span className="text-green-500">in seconds</span>
          </h1>
          {/* Added dark:text-slate-400 */}
          <p className="text-slate-500 dark:text-slate-400 text-lg">Free restaurant & group check splitter. No sign-up needed.</p>
        </div>
        
        <Calculator />
      </section>

      {/* Below the Fold SEO Content */}
      <section id="how-it-works">
        <SeoContent />
      </section>
    </>
  );
}