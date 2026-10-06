import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Phone, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [location] = useLocation();
  const marketingRoutes = new Set(["/", "/features", "/how-it-works", "/playbook"]);

  useEffect(() => {
    setDismissed(false);
    setVisible(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420 && !dismissed);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!marketingRoutes.has(location)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[55] transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="border-t border-[#0D1B3E]/15 bg-[#fcfcfa]/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgba(13,27,62,0.12)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <a
            href="/book-a-demo"
            onClick={() => trackEvent("cta_book_demo_clicked", { placement: "mobile_sticky_bar" })}
            className="fec-btn-primary flex-1 justify-center px-4 py-3 text-sm normal-case tracking-normal"
            tabIndex={visible ? 0 : -1}
          >
            <Phone size={16} aria-hidden="true" />
            Book a Demo
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0D1B3E]/15 text-[#526070] transition-colors hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#0D1B3E]"
            aria-label="Dismiss"
            tabIndex={visible ? 0 : -1}
          >
            <X size={17} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-[#526070]">30-minute working session · No preparation required</p>
      </div>
    </div>
  );
}
