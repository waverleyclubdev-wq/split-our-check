import type { Metadata } from "next";
import Link from "next/link";
import { ReceiptText } from "lucide-react";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"; // <-- 1. Analytics imported here
import "./globals.css";

export const metadata: Metadata = {
  title: "Split Our Check",
  description: "Free restaurant & group check splitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        
        {/* Global AdSense Script injected into the body with your ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8495433546971861"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ThemeProvider>
          
          <Header />

          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>

          <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 text-center w-full mt-auto transition-colors duration-200">
            <div className="flex items-center justify-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-6">
              <div className="bg-green-500 text-white w-6 h-6 rounded-md flex items-center justify-center">
                <ReceiptText size={14} strokeWidth={2.5} />
              </div>
              Split Our Check
            </div>
            <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
              <Link href="/privacy" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Contact</Link>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-sm">&copy; {new Date().getFullYear()} Split Our Check. All rights reserved.</p>
          </footer>

        </ThemeProvider>

        {/* 2. Analytics component sitting invisibly at the bottom of the body */}
        <Analytics />

      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import Link from "next/link";
// import { ReceiptText } from "lucide-react";
// import Header from "@/components/Header";
// import { ThemeProvider } from "@/components/ThemeProvider"; // <-- ADDED THIS
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Split Our Check",
//   description: "Free restaurant & group check splitter",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     // suppressHydrationWarning is REQUIRED for next-themes to work
//     <html lang="en" className="scroll-smooth" suppressHydrationWarning>
//       {/* Added dark:bg-slate-950 and dark:text-slate-100 */}
//       <body className="flex flex-col min-h-screen text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        
//         {/* WRAP THE ENTIRE APP IN THE THEME PROVIDER */}
//         <ThemeProvider>
          
//           {/* GLOBAL SMART HEADER */}
//           <Header />

//           {/* INDIVIDUAL PAGE CONTENT */}
//           <main className="flex-1 flex flex-col w-full">
//             {children}
//           </main>

//           {/* GLOBAL FOOTER (Added dark classes here too!) */}
//           <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 text-center w-full mt-auto transition-colors duration-200">
//             <div className="flex items-center justify-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-6">
//               <div className="bg-green-500 text-white w-6 h-6 rounded-md flex items-center justify-center">
//                 <ReceiptText size={14} strokeWidth={2.5} />
//               </div>
//               Split Our Check
//             </div>
//             <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
//               <Link href="/privacy" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Privacy Policy</Link>
//               <Link href="/terms" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Terms of Service</Link>
//               <Link href="/contact" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Contact</Link>
//             </div>
//             <p className="text-slate-400 dark:text-slate-500 text-sm">&copy; {new Date().getFullYear()} Split Our Check. All rights reserved.</p>
//           </footer>

//         </ThemeProvider>

//       </body>
//     </html>
//   );
// }