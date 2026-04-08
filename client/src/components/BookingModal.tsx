/**
 * FEC Playbook — Booking Modal
 * Renders the real booking calendar embed in a full-screen overlay.
 * Triggered globally via the BookingContext.
 */

import { useEffect } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-[#0D1B2A] rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest mb-0.5">Free 30-Min Strategy Call</p>
            <h2 className="text-white font-black uppercase text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Book a Demo Call
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar Embed */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 72px)" }}>
          <iframe
            src="https://link.bookmore.app/widget/booking/Sd7Mk7F4D238JDTcGTWp"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px", display: "block" }}
            scrolling="no"
            title="Book a Demo Call"
          />
        </div>
      </div>
    </div>
  );
}
