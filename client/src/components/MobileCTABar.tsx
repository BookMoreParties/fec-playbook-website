/*
 * FEC Playbook — Mobile Sticky CTA Bar
 * Design: Fixed bottom bar, appears after scrolling 300px past hero
 * Slides up from bottom with smooth animation
 * Hidden on md+ screens (desktop has nav CTA)
 */

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px (past the hero section)
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 400) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-[55]
        md:hidden
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
      aria-hidden={!visible}
    >
      {/* Gradient fade above bar */}
      <div className="h-8 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent pointer-events-none" />

      {/* Bar itself */}
      <div className="bg-[#0A0A0A] border-t border-white/10 px-4 pt-3 pb-5 shadow-[0_-8px_32px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3">
          {/* Main CTA */}
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] active:bg-[#007AAD] text-white font-black uppercase tracking-wide text-sm py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-[#00AEEF]/30"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {/* Pulse ring */}
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-5 w-5 rounded-full bg-white/30 animate-ping opacity-60" />
              <Phone size={16} className="relative" />
            </span>
            Book a Free Demo Call
          </a>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 text-white/50 hover:text-white/80 transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>

        {/* Sub-text */}
        <p
          className="text-center text-white/35 text-xs mt-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Free 30-min strategy call · No commitment required
        </p>
      </div>
    </div>
  );
}
