/*
 * FEC Playbook — Book a Demo Page
 * Design: Dark bg, FEC Cyan accent, embedded booking calendar with supporting context
 * Route: /book-a-demo
 */

import { useEffect } from "react";
import { CheckCircle, Clock, Phone, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

// Extend window type to include fbq
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function BookDemo() {
  // Load GHL booking embed script
  useEffect(() => {
    const SCRIPT_ID = "bookdemo-form-embed";
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://link.bookmore.app/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Fire Facebook Pixel Lead event when visitor lands on this page
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="Book a Free Demo — See FEC Playbook in Action"
        description="Schedule a free strategy call with the FEC Playbook team. See how our automation platform can transform your Family Entertainment Center's marketing and operations."
        path="/book-a-demo"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300AEEF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#00AEEF]" />
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free Strategy Call</span>
            <div className="h-px w-12 bg-[#00AEEF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
            See FEC Playbook<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              In Action.
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll walk through the platform, show you the 10 pre-built playbooks, and map out exactly how it fits your FEC.
          </p>
        </div>
      </section>

      {/* Main Content: Calendar + What to Expect */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: What to Expect */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black uppercase mb-6">
                  What to <span className="text-[#00AEEF]">Expect</span>
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      icon: Clock,
                      title: "30 Minutes, No Fluff",
                      desc: "We respect your time. This is a focused walkthrough — not a high-pressure sales call.",
                    },
                    {
                      icon: Users,
                      title: "Built Around Your FEC",
                      desc: "We'll ask about your current setup, volume, and pain points so the demo is relevant to your specific operation.",
                    },
                    {
                      icon: Zap,
                      title: "Live Platform Walkthrough",
                      desc: "See the actual platform — the pipelines, automations, playbooks, and reporting — not slides.",
                    },
                    {
                      icon: Phone,
                      title: "Real Cost Estimate",
                      desc: "We'll run your numbers through the usage calculator so you leave knowing exactly what FEC Playbook would cost for your volume.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg flex items-center justify-center">
                        <item.icon size={18} className="text-[#00AEEF]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Covered */}
              <div className="bg-[#0D1B3E] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-4">
                  We'll Cover
                </h3>
                <ul className="space-y-3">
                  {[
                    "Your current booking & follow-up process",
                    "The 10 pre-built FEC Playbook systems",
                    "How the platform connects to your POS",
                    "Onboarding timeline and what's included",
                    "Transparent pricing and usage costs",
                    "What happens on day one after you sign up",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <div className="bg-white/3 border border-white/8 rounded-xl p-6">
                <p className="text-white/70 text-sm leading-relaxed italic mb-4">
                  "Within the first 30 days we had more birthday party leads than the entire previous quarter. The system just runs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00AEEF]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00AEEF] text-xs font-black">FEC</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">FEC Playbook Client</p>
                    <p className="text-white/40 text-xs">Family Entertainment Center Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-2xl overflow-hidden shadow-2xl shadow-[#00AEEF]/5">
                <div className="px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={LOGO_URL} alt="FEC Playbook" className="h-7 w-auto" />
                    <div className="h-4 w-px bg-white/20" />
                    <div>
                      <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Free 30-Min Strategy Call</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <iframe
                    src="https://link.bookmore.app/widget/booking/Sd7Mk7F4D238JDTcGTWp"
                    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px" }}
                    scrolling="no"
                    id="Sd7Mk7F4D238JDTcGTWp_bookdemo"
                    title="Book a Demo Call"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-16 bg-[#0D1B3E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black uppercase text-center mb-10">
            Common <span className="text-[#00AEEF]">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Do I need to prepare anything?",
                a: "No preparation needed. Just show up. It helps to have a rough idea of your monthly lead volume and current tools, but it's not required.",
              },
              {
                q: "Is this a sales call?",
                a: "It's a strategy call first. We'll show you the platform and give you a real cost estimate. If it's a fit, we'll talk next steps. No pressure.",
              },
              {
                q: "How soon can I get started after the call?",
                a: "Most clients are fully onboarded and running their first playbooks within 2–3 weeks of signing up.",
              },
              {
                q: "What if I'm already using another CRM?",
                a: "We'll walk through how FEC Playbook compares to what you're using and whether a migration makes sense for your operation.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-bold text-sm mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
