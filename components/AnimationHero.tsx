"use client";

import { useEffect } from "react";

export default function AnimationHero() {
  useEffect(() => {
    if (window.UnicornStudio?.isInitialized) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
    script.onload = () => {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="absolute inset-0 opacity-75"
      data-us-project="egFLoSFCFWS3DZNKHKKC"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
