"use client";
import { useEffect } from "react";

interface AdBannerProps {
  slot: string; 
}

export default function AdBanner({ slot }: AdBannerProps) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 overflow-hidden flex justify-center items-center min-h-[90px] bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-8495433546971861"
        data-ad-slot={slot}                     
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}