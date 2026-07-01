/*
 * FEC Playbook — Team Calendar Page
 * Design: Dark bg, FEC Cyan accent, embedded GHL booking calendar
 * Route: /teamcal
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

export default function TeamCal() {
  useEffect(() => {
    const SCRIPT_ID = "teamcal-form-embed";
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
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Schedule a Call</span>
            <div className="h-px w-12 bg-[#00AEEF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
            Book Time<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with Our Team
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Pick a time that works for you. We'll confirm your booking by email.
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
                <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Team Calendar</p>
              </div>
            </div>
            <div className="p-2">
              <iframe
                src="https://link.bookmore.app/widget/booking/FUTd18eixk9ajFgBhRn4"
                style={{ width: "100%", border: "none", display: "block", minHeight: "900px" }}
                scrolling="no"
                id="BJvCQpKaFIWSByjmLBUw_1782224065490"
                title="Book Time with Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
