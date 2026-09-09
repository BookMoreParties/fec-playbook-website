/*
 * FEC Playbook™ — Book a Demo Page
 * Design: Bold FEC action campaign with true black and white contrast, cyan power accents,
 * a tangible Revenue Review artefact, angular geometry, and no calm centered SaaS composition.
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

      {/* Design reminder: left-led action hero, with a proprietary-feeling visual proof object rather than a centered SaaS headline. */}
      <section className="relative isolate overflow-hidden bg-[#0A0A0A] pb-16 pt-32 sm:pb-20">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[7px] bg-[#00AEEF]" />
        <div className="pointer-events-none absolute right-[-9rem] top-16 h-72 w-72 -skew-x-12 border border-[#00AEEF]/25" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-[#0D1B3E] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-11 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">30-Minute FEC Revenue Review</span>
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Leave With a Clearer <span className="text-[#00AEEF]">Revenue Plan.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/75 sm:text-lg">
                In 30 minutes, we will identify the revenue work that needs attention, map the ready-built FEC Playbooks™ that fit your facility, and outline a practical path to activate them with your team.
              </p>
              <p className="mt-7 max-w-xl border-l-4 border-[#00AEEF] pl-4 text-sm font-black uppercase leading-relaxed tracking-[0.08em] text-white">
                You are not buying a blank system to build inside. You are reviewing the playbook already built for FEC work.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-white/15 bg-[#0D1B3E] p-1 shadow-[18px_18px_0_rgba(0,174,239,0.18)]">
                <div className="absolute -left-3 top-8 hidden h-28 w-3 bg-[#00AEEF] lg:block" />
                <div className="relative border border-white/10 bg-[#081326] p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Revenue Review Worksheet</p>
                      <p className="mt-1 text-sm font-semibold text-white/65">What you leave with in 30 minutes.</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center bg-[#00AEEF] text-sm text-[#0A0A0A]" aria-hidden="true">▶</span>
                  </div>
                  <ol className="mt-5 space-y-4">
                    {[
                      ["01", "REVENUE LEAKS", "Find the handoffs that need attention first."],
                      ["02", "READY-BUILT PLAYBOOKS", "Match the systems that fit your operation."],
                      ["03", "ACTIVATION PATH", "See the team, timing, and support path ahead."],
                    ].map(([number, title, copy]) => (
                      <li key={number} className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#00AEEF] text-xs font-black text-[#0A0A0A]">{number}</span>
                        <div className="border-l border-white/15 pl-3">
                          <p className="text-xs font-black uppercase tracking-[0.12em] text-white">{title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/55">{copy}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
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
                    {
                      icon: CheckCircle,
                      title: "Support Through Activation",
                      desc: "See the guidance available to help your team turn ready-built playbooks into daily execution.",
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
              <div className="border border-white/10 bg-[#0D1B3E] p-6">
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-4">
                  We'll Cover
                </h3>
                <ul className="space-y-3">
                  {[
                    "Your current booking, follow-up, and lead-ownership process",
                    "The revenue playbooks that match your operation",
                    "How FEC Playbook™ works alongside your POS and booking system",
                    "The support path that gets your playbooks live",
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
              <div className="border border-[#00AEEF]/20 bg-[#0D1B3E] shadow-[14px_14px_0_rgba(0,174,239,0.1)]">
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

      {/* Design reminder: make the activation promise specific and physical, using black/white/cyan contrast and angular play-button geometry. */}
      <section className="relative overflow-hidden bg-white py-20 text-[#0A0A0A] sm:py-24">
        <div className="absolute right-0 top-0 hidden h-full w-[32%] bg-[#1565C0] [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)] lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-11 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#1565C0]">From Review to Activation</span>
              </div>
              <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl">You Will Not Be Handed a Login and Left to Build.</h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#1E3A5F]/80 sm:text-lg">Your Revenue Review identifies the ready-built systems that matter first. From there, we tailor the playbooks to your facility and guide your team through activation.</p>
            </div>
            <div className="border-l-4 border-[#00AEEF] bg-[#0A0A0A] p-6 text-white lg:col-span-5 lg:mr-10">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00AEEF]">The Support Path</p>
              <p className="mt-4 text-xl font-black uppercase leading-tight">Ready-Built Systems. FEC-Specific Guidance. Daily Execution.</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">Understand the implementation steps, team participation, and support available for your facility before you decide what comes next.</p>
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
