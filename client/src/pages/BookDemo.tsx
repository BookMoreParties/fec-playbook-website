/*
 * FEC Playbook™ — Book a Demo Page
 * Design: Dark bg, FEC Cyan accent, embedded booking calendar with supporting context
 * Route: /book-a-demo
 */

import { useEffect } from "react";
import { CheckCircle, ClipboardCheck, Map, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import { trackEvent } from "@/lib/analytics";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

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
    trackEvent("demo_page_viewed", { path: "/book-a-demo" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="Book a 30-Minute FEC Revenue Review | FEC Playbook™"
        description="Schedule a 30-minute FEC Revenue Review with FEC Playbook™. Identify the revenue leaks to address first, map the playbooks that fit your facility, and understand your implementation path."
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
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">30-Minute FEC Revenue Review</span>
            <div className="h-px w-12 bg-[#00AEEF]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
            Leave With a Clearer<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Revenue Plan.
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            In 30 minutes, we will identify the revenue leaks we would address first, map the FEC Playbooks™ that fit your facility, and explain the implementation path.
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
                      icon: Target,
                      title: "The Revenue Moments to Address First",
                      desc: "We will review the guest, lead, and team handoffs that deserve attention in your operation.",
                    },
                    {
                      icon: Map,
                      title: "The Playbooks That Fit Your Facility",
                      desc: "We will map the FEC Playbooks™ to the practical work your team needs to manage.",
                    },
                    {
                      icon: ClipboardCheck,
                      title: "A Practical Implementation Path",
                      desc: "Leave with a clearer view of the rollout steps that apply to your systems and team.",
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
                    "Your current booking, follow-up, and lead-ownership process",
                    "The revenue playbooks that match your operation",
                    "How FEC Playbook™ works alongside your POS and booking system",
                    "The rollout path for your team and workflows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right: Booking Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-2xl shadow-2xl shadow-[#00AEEF]/5">
                <div className="px-4 sm:px-6 py-4 border-b border-white/10">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <img src={LOGO_URL} alt="FEC Playbook" className="h-6 sm:h-7 w-auto flex-shrink-0" />
                    <div className="h-4 w-px bg-white/20 flex-shrink-0" />
                    <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">30-Minute FEC Revenue Review</p>
                  </div>
                </div>
                <div className="p-2">
                  <iframe
                    src="https://link.bookmore.app/widget/booking/Sd7Mk7F4D238JDTcGTWp"
                    style={{ width: "100%", border: "none", display: "block", minHeight: "900px" }}
                    scrolling="no"
                    id="Sd7Mk7F4D238JDTcGTWp_bookdemo"
                    title="Schedule a 30-Minute FEC Revenue Review"
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
                a: "It is a 30-minute FEC Revenue Review. We will focus on the revenue work that needs attention, the playbooks that fit your operation, and a practical implementation path.",
              },
              {
                q: "How soon can I get started after the call?",
                a: "We will outline the implementation steps for your facility during the review. Timing depends on your current systems, messaging requirements, and team readiness.",
              },
              {
                q: "What if I'm already using another CRM?",
                a: "We will review your current setup and show how FEC Playbook™ works alongside the POS and booking software your team already relies on.",
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
