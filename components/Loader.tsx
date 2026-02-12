"use client";

import React, { useEffect, useState } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Only show the loader on the first visit in this browser session.
    // If we've already shown it, skip rendering the overlay entirely.
    const already = typeof window !== "undefined" && sessionStorage.getItem("carswap_loader_shown");
    if (already) {
      setMounted(false);
      return;
    }

    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("carswap_loader_shown", "1");
      } catch (e) {
        // ignore storage errors
      }
    }, 800);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setMounted(false), 500); // allow fade-out
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <>
      {children}

      {mounted && (
        <div
          aria-hidden={true}
          className={
            "fixed inset-0 z-50 flex items-center justify-center bg-green-800 transition-opacity duration-500 " +
            (visible ? "opacity-100" : "opacity-0 pointer-events-none")
          }
        >
          <img
            src="/logo.webp"
            alt="CARSWAP"
            className="w-40 h-auto animate-pulse"
            style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.25))" }}
          />
        </div>
      )}
    </>
  );
}
