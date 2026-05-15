"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ReceiptText, ArrowLeft, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { theme, setTheme } = useTheme();
  
  // We need this tiny bit of state to prevent "hydration mismatch" 
  // errors when the page first loads and checks your system theme
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 w-full transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
          <div className="bg-green-500 text-white w-8 h-8 rounded-lg flex items-center justify-center">
            <ReceiptText size={18} strokeWidth={2.5} />
          </div>
          Split Our Check
        </Link>

        {/* Right Side Navigation & Dark Mode Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {isHomePage ? (
            <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <Link href="/#calculator" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Calculator</Link>
              <Link href="/#how-it-works" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">How It Works</Link>
            </nav>
          ) : (
            <Link href="/" className="flex items-center gap-1 md:gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Calculator</span>
              <span className="inline sm:hidden">Back</span>
            </Link>
          )}

          {/* THE DARK MODE TOGGLE BUTTON */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

        </div>
      </div>
    </header>
  );
}