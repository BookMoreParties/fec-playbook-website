/*
 * FEC Playbook — Training Call 1: Tech Integration & Orientation
 * Route: /TC1
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

export default function TC1() {
  useEffect(() => {
    const SCRIPT_ID = "tc1-form-embed";
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://link.bookmore.app/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300AEEF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#00AEEF]" />
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Training Call 1 of 4</span>
            <div className="h-px w-12 bg-[#00AEEF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
            Tech Integration<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              & Orientation
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Get your systems connected and your team oriented. Pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-2xl overflow-hidden shadow-2xl shadow-[#00AEEF]/5">
            <div className="px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="FEC Playbook" className="h-7 w-auto" />
                <div className="h-4 w-px bg-white/20" />
                <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">TC1 — Tech Integration & Orientation</p>
              </div>
            </div>
            <div className="p-2">
              <iframe
                src="https://link.bookmore.app/widget/booking/A1WTNLAmGkG7ry5K3xBi"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px" }}
                scrolling="no"
                id="A1WTNLAmGkG7ry5K3xBi_1782776809867"
                title="Training Call 1 — Tech Integration & Orientation"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
