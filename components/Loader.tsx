"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Reset loader on every page change
    setVisible(true);
    setMounted(true);

    const t = setTimeout(() => {
      setVisible(false);
    }, 3000); // Changed to 10 seconds

    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setMounted(false), 500); // allow fade-out
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .zoom-animation {
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}
      </style>
      {children}

      {mounted && (
        <div
          aria-hidden={true}
          className={
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 " +
            (visible ? "opacity-100" : "opacity-0 pointer-events-none")
          }
          style={{ backgroundColor: '#003E21' }} // Changed background color
        >
          <img
            src="/logo.webp"
            alt="CARSWAP"
            className="w-56 h-auto zoom-animation" // Increased width from w-40 to w-56
            style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.25))" }}
          />
        </div>
      )}
    </>
  );
}
