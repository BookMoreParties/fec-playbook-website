/**
 * FEC Playbook — Generic Calendar Thank You Page
 * Route: /cal-thankyou
 * Simple, generic post-booking confirmation. No navigation. No demo-specific language.
 * Matches reference: logo → check → headline → subtext → dashboard image → testimonial → contact → footer
 * Unlisted: blocked in robots.txt, excluded from sitemap.
 */

import { Star, CheckCircle, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { useMemo } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";
const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663337094674/5hTiQqbDpyu7utReXppjD4/fec_playbook_onboarding_dashboard-6JW3ncWwrWAoXKf5ihbY7m.webp";

export default function CalThankYou() {
  const name = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("name")?.trim();
    return raw && raw.length > 0 ? raw : null;
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* Main content */}
      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D1B2A] to-[#0A0A0A]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle at 50% 30%, #00AEEF 0%, transparent 60%)` }}
          />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <img src={LOGO_URL} alt="FEC Playbook" className="h-10 w-auto" />
            </div>

            {/* Animated check */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ backgroundColor: "#00AEEF" }}
                />
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,174,239,0.4)]"
                  style={{ backgroundColor: "rgba(0,174,239,0.12)", border: "2px solid rgba(0,174,239,0.35)" }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: "#00AEEF" }} />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-5">
              {name ? (
                <>
                  Thank You,{" "}
                  <span style={{ color: "#00AEEF" }}>{name}!</span>
                </>
              ) : (
                <>
                  Thank{" "}
                  <span style={{ color: "#00AEEF" }}>You!</span>
                </>
              )}
            </h1>

            <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-6">
              {name
                ? `We've received your booking, ${name}. We look forward to connecting with you at your scheduled time. Check your email for the calendar invite.`
                : "We've received your booking and look forward to connecting with you at your scheduled time. Check your email for the calendar invite."
              }
            </p>

            {/* Email reminder */}
            <div className="inline-flex items-center gap-2 text-sm text-white/40 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#00AEEF" }} />
              Check your inbox for your calendar confirmation
            </div>
          </div>
        </section>

        {/* Dashboard image + Testimonial */}
        <section className="py-12 bg-[#0D1B2A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Dashboard screenshot */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={DASHBOARD_IMG}
                  alt="FEC Playbook Dashboard"
                  className="w-full h-auto block"
                />
              </div>

              {/* Testimonial */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <blockquote className="text-white/75 text-base leading-relaxed italic mb-6">
                  "FEC Playbook has completely transformed the way we operate. Before implementing it, our sales follow up, guest communication, reviews, and marketing were scattered across multiple systems and inconsistent at best.
                  <br /><br />
                  Now, our team is more organized, our response times are faster, and we finally have systems in place that actually support growth.
                  <br /><br />
                  What makes FEC Playbook different is that it was clearly built by FEC operators who truly understand the industry. The workflows, automations, and pipelines are practical, relevant, and designed specifically for attractions like ours.
                  <br /><br />
                  It's become an essential part of our operation."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ backgroundColor: "#00AEEF" }}
                  >
                    A
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Adam</p>
                    <p className="text-white/40 text-xs">FEC Owner & Operator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions section */}
        <section className="py-14 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-xl font-black uppercase text-white mb-3">Got Questions?</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              If you have any questions before your appointment or need assistance, feel free to reach out directly.
            </p>
            <a
              href="mailto:support@fecplaybook.com"
              className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors hover:text-white"
              style={{ color: "#00AEEF" }}
            >
              <Mail className="w-4 h-4" />
              support@fecplaybook.com
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/8 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="text-white/25 text-xs">© 2026 FEC Playbook. All Rights Reserved.</p>
            <a href="/" className="text-white/35 hover:text-[#00AEEF] text-xs transition-colors">← Home</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/35">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="/eula" className="hover:text-white/60 transition-colors">EULA</a>
            <a href="/disclaimer" className="hover:text-white/60 transition-colors">Disclaimer</a>
            <a href="#" className="termly-display-preferences hover:text-white/60 transition-colors cursor-pointer">Consent Preferences</a>
            <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Do Not Sell or Share My Personal Information</a>
            <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Limit the Use of My Sensitive Personal Information</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
