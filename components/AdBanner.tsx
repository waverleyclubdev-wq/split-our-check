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
    <div className="w-[300px] h-[250px] mx-auto flex justify-center items-center bg-transparent overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "300px", height: "250px" }}
        data-ad-client="ca-pub-8495433546971861"
        data-ad-slot={slot}
      />
    </div>
  );
}