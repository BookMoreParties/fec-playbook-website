// Design: FEC Playbook — Onboarding Survey page
// Dark near-black background, minimal chrome so the survey is the focus
// Sticky nav with logo + back to onboarding link

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const FEC_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_687480e5.png";

export default function OnboardingSurvey() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inject the GHL form embed script once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.bookmore.app/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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

      {/* ── Header ── */}
      <div
        className="pt-24 pb-10 px-6 text-center"
        style={{
          borderBottom: "1px solid rgba(0,174,239,0.1)",
          background: "linear-gradient(180deg, #0D1B3E 0%, #0A0A0A 100%)",
        }}
      >
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00AEEF]/60 mb-3">
          Phase 01 — Pre-Call Discovery
        </p>
        <h1
          className="font-black uppercase leading-tight mb-3"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          Client Intake Survey
        </h1>
        <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
          Complete this survey before your first call. Your answers help us build a system
          around your venue — not a generic template.
        </p>

        {/* Critical callout */}
        <div
          className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg text-xs"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            color: "rgba(252,165,165,0.85)",
          }}
        >
          <span className="font-black">⚠ Critical:</span>
          <span>Incomplete surveys result in a rescheduled call.</span>
        </div>
      </div>

      {/* ── Survey embed ── */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div
          className="rounded-2xl"
          style={{
            border: "1px solid rgba(0,174,239,0.15)",
            background: "#ffffff",
          }}
        >
          <iframe
            src="https://link.bookmore.app/widget/survey/r8vwtJQA7lWq58jqJWwW"
            style={{ border: "none", width: "100%", minHeight: "1200px", display: "block" }}
            scrolling="no"
            id="r8vwtJQA7lWq58jqJWwW"
            title="FEC Playbook Client Intake Survey"
          />
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
