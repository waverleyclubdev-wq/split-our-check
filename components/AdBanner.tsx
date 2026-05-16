"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot: string;
  format?: "horizontal" | "rectangle" | "responsive";
}

export default function AdBanner({ slot, format = "responsive" }: AdBannerProps) {
  const adLoaded = useRef(false);

  useEffect(() => {
    if (!adLoaded.current) {
      adLoaded.current = true;
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error: any) {
        if (error.message && !error.message.includes("already have ads")) {
          console.error("AdSense error:", error);
        }
      }
    }
  }, []);

  // Added max-h-[250px] so even massive screens don't get page-breaking giant ads
  const wrapperClass = 
    format === "horizontal" ? "w-full max-w-[728px] h-[90px]" : 
    format === "rectangle" ? "w-[300px] h-[250px]" : 
    "w-full max-w-4xl min-h-[90px] md:min-h-[120px] max-h-[250px]";

  return (
    <div className={`mx-auto flex justify-center items-center text-center bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 overflow-hidden shadow-sm transition-all duration-300 ${wrapperClass}`}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: "block", 
          textAlign: "center", 
          width: "100%", 
          height: format === "responsive" ? "auto" : (format === "horizontal" ? "90px" : "250px"),
          maxHeight: "250px", // Strict limit for Google's code
          background: "transparent" 
        }}
        data-ad-client="ca-pub-8495433546971861"
        data-ad-slot={slot}
        // This is the magic line! We forbid vertical ads here.
        data-ad-format={format === "responsive" ? "horizontal, rectangle" : undefined}
        data-full-width-responsive={format === "responsive" ? "true" : "false"}
      />
    </div>
  );
}