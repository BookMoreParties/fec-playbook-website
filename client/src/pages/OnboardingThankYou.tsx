// Design: FEC Playbook — Post-Survey Thank You + Booking page
// Dark near-black background, minimal chrome so the calendar is the focus
// Celebratory but professional — confirms survey receipt, prompts call booking

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowLeft, Calendar, Clock, Users } from "lucide-react";

const FEC_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_687480e5.png";

export default function OnboardingThankYou() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inject the GHL booking embed script once on mount
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://link.bookmore.app/js/form_embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://link.bookmore.app/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A0A", fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
    >
      {/* ── Sticky nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
        style={{
          height: "64px",
          background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,174,239,0.15)",
        }}
      >
        <a href="/">
          <img src={FEC_LOGO} alt="FEC Playbook" style={{ height: "32px", width: "auto" }} />
        </a>
        <a href="/onboarding" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#00AEEF] transition-colors duration-200">
          <ArrowLeft size={14} />
          Back to Onboarding
        </a>
      </nav>

      {/* ── Thank you header ── */}
      <div
        className="pt-24 pb-12 px-6 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0D1B3E 0%, #0A0A0A 100%)",
          borderBottom: "1px solid rgba(0,174,239,0.1)",
        }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,174,239,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Success icon */}
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,174,239,0.12)",
                border: "2px solid rgba(0,174,239,0.4)",
              }}
            >
              <CheckCircle size={32} style={{ color: "#00AEEF" }} />
            </div>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00AEEF]/60 mb-3">
            Survey Received
          </p>
          <h1
            className="font-black uppercase leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            You're On Your Way.
          </h1>
          <p className="text-white/55 text-sm max-w-lg mx-auto leading-relaxed mb-8">
            Your intake survey has been received. The next step is to schedule your
            <strong className="text-white"> Tech Interface &amp; Training Call 1</strong> — a
            ~2-hour session where we connect your platforms, begin activating your system, and
            get you using FEC Playbook from day one.
          </p>

          {/* What to expect pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
              style={{
                background: "rgba(0,174,239,0.08)",
                border: "1px solid rgba(0,174,239,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              <Clock size={12} style={{ color: "#00AEEF" }} />
              ~2 hours
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
              style={{
                background: "rgba(0,174,239,0.08)",
                border: "1px solid rgba(0,174,239,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              <Users size={12} style={{ color: "#00AEEF" }} />
              FEC Playbook + Client + Website Manager
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
              style={{
                background: "rgba(0,174,239,0.08)",
                border: "1px solid rgba(0,174,239,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              <Calendar size={12} style={{ color: "#00AEEF" }} />
              Phase 02 — Tech Interface &amp; Training
            </div>
          </div>
        </div>
      </div>

      {/* ── Booking calendar ── */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-6">
          <h2
            className="font-black uppercase leading-tight mb-2"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", letterSpacing: "-0.01em" }}
          >
            Book Your Training Call
          </h2>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
            Select a date and time that works for your team
          </p>
        </div>

        {/* Calendar embed */}
        <div
          className="rounded-2xl"
          style={{
            border: "1px solid rgba(0,174,239,0.15)",
            background: "#ffffff",
          }}
        >
          <iframe
            src="https://link.bookmore.app/widget/booking/A1WTNLAmGkG7ry5K3xBi"
            style={{ width: "100%", border: "none", display: "block", minHeight: "900px" }}
            scrolling="no"
            id="A1WTNLAmGkG7ry5K3xBi_1782173220759"
            title="Book Your FEC Playbook Training Call"
          />
        </div>

        {/* Reminder note */}
        <div
          className="mt-6 flex gap-3 items-start rounded-xl px-5 py-4"
          style={{
            background: "#0D1B3E",
            border: "1px solid rgba(0,174,239,0.15)",
          }}
        >
          <Calendar size={15} className="text-[#00AEEF] shrink-0 mt-0.5" />
          <p className="text-xs text-white/50 leading-relaxed">
            <strong className="text-white/70">Reminder:</strong> Your website manager must attend this call. A2P compliance requires website changes that must be made live during the session. Admin access to all social media accounts is required before the call.
          </p>
        </div>

        {/* Back link */}
        <div className="text-center mt-8">
          <a href="/onboarding" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 hover:text-[#00AEEF] transition-colors duration-200">
            <ArrowLeft size={13} />
            Back to Onboarding Overview
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="text-center py-8 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-center gap-4 mb-3">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} FEC Playbook. All Rights Reserved.</p>
          <a href="/" className="text-white/25 hover:text-[#00AEEF] text-xs transition-colors">← Home</a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          <a href="/privacy" className="hover:text-[#00AEEF] transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#00AEEF] transition-colors">Terms of Service</a>
          <a href="/eula" className="hover:text-[#00AEEF] transition-colors">EULA</a>
          <a href="/disclaimer" className="hover:text-[#00AEEF] transition-colors">Disclaimer</a>
          <a href="#" className="termly-display-preferences hover:text-[#00AEEF] transition-colors cursor-pointer">Consent Preferences</a>
          <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">Do Not Sell or Share My Personal Information</a>
          <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">Limit the Use of My Sensitive Personal Information</a>
        </div>
      </footer>
    </div>
  );
}
