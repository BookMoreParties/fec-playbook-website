/*
 * FEC Playbook — Training Call 3: Marketing Activation
 * Route: /TC3
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

export default function TC3() {
  useEffect(() => {
    const SCRIPT_ID = "tc3-form-embed";
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
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Training Call 3 of 4</span>
            <div className="h-px w-12 bg-[#00AEEF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
            Marketing<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Activation
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Launch your marketing automations and campaigns. Pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-2xl shadow-2xl shadow-[#00AEEF]/5">
            <div className="px-4 sm:px-6 py-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <img src={LOGO_URL} alt="FEC Playbook" className="h-6 sm:h-7 w-auto flex-shrink-0" />
                <div className="h-4 w-px bg-white/20" />
                <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Marketing Activation</p>
              </div>
            </div>
            <div className="p-2">
              <iframe
                src="https://link.bookmore.app/widget/booking/daAZWf9lM7UsvUL7XDXo"
                style={{ width: "100%", border: "none", display: "block", minHeight: "900px" }}
                scrolling="no"
                id="daAZWf9lM7UsvUL7XDXo_1782776867585_tc3"
                title="Training Call 3 — Marketing Activation"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
