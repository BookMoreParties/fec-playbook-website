/**
 * FEC Playbook — What's In The Playbook Page
 * Design: Bold Sports/Action Brand
 * Dark backgrounds, FEC Cyan (#00AEEF) + Cobalt (#1565C0) accents
 * Montserrat Black headlines, high contrast throughout
 */

import { Phone, ArrowRight, CheckCircle, BookOpen, Zap, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import SEOMeta from "@/components/SEOMeta";

const playbookItems = [
  {
    num: "01",
    icon: "🎯",
    title: "Lead Capture & Inquiry Management",
    subtitle: "Every inquiry is captured, routed, and followed up automatically.",
    included: [
      "Website form capture",
      "Party, group & event inquiries",
      "Missed-call text-back",
      "Centralized lead inbox",
      "Automated lead routing & ownership",
    ],
    solves: "Lost leads. Slow responses. Manual follow-up.",
    color: "#00AEEF",
  },
  {
    num: "02",
    icon: "🔄",
    title: "Inquiry-to-Follow-Through Systems",
    subtitle: "Anything that starts with an inquiry gets followed through — automatically.",
    included: [
      "Party, group, and event inquiries",
      "Hiring applications",
      "Donation and sponsorship requests",
      "Influencer and partnership outreach",
      "Defined paths with right messages and reminders",
    ],
    solves: "Dropped balls, stalled requests, and important follow-ups living in people's heads.",
    color: "#1565C0",
  },
  {
    num: "03",
    icon: "📣",
    title: "Automated Marketing Engine",
    subtitle: "Your promotions run on a plan — not whoever has time that day.",
    included: [
      "Automated email and text outreach tied to real guest behavior",
      "Event and promotion follow-through that's planned ahead",
      "Seasonal and evergreen campaigns that run year after year",
      "Guest grouping based on visits, purchases, and interests",
      "Social media planning and visibility for Facebook and Instagram",
      "AI-assisted content support for emails, texts, social posts, and event descriptions",
    ],
    solves: "Marketing that only happens when someone remembers. Last-minute promotions. Inconsistent messaging.",
    color: "#00AEEF",
  },
  {
    num: "04",
    icon: "🖥️",
    title: "One Login. One System. Total Control.",
    subtitle: "Stop jumping between platforms. Run everything from one place.",
    included: [
      "Email and text communication in one system",
      "Social activity visible alongside campaigns and promotions",
      "Google Business Profile integration",
      "Review and reputation management",
      "One shared inbox for all guest conversations",
    ],
    solves: "Too many logins. Missed messages. Team confusion about what was sent — and where.",
    color: "#1565C0",
  },
  {
    num: "05",
    icon: "⭐",
    title: "Reputation & Market Visibility",
    subtitle: "Turn guest experiences into proof — and understand how you stack up.",
    included: [
      "Automated review requests after visits and events",
      "Google review optimization",
      "Guest feedback collection and routing",
      "Review monitoring and alerts",
      "Review summaries that highlight trends and recurring themes",
      "Local competitor reputation visibility and comparison",
    ],
    solves: "Inconsistent review volume. Slow response to negative feedback. Not knowing why ratings are changing.",
    color: "#00AEEF",
  },
  {
    num: "06",
    icon: "💎",
    title: "Guest Journey & Retention Systems",
    subtitle: "The relationship doesn't end when guests walk out the door.",
    included: [
      "Birthday and celebration follow-through",
      "Return-visit reminders and offers",
      "Season pass and membership engagement",
      "Passholder onboarding, usage nudges, and renewal follow-through",
      "Win-back messaging for guests who haven't returned",
      "Loyalty and re-engagement outreach based on visit patterns",
    ],
    solves: "One-and-done visits. Underused season passes. Missed renewal opportunities.",
    color: "#1565C0",
  },
  {
    num: "07",
    icon: "📊",
    title: "Visibility, Reporting & Owner Control",
    subtitle: "Know what's working — without digging or guessing.",
    included: [
      "Visibility into leads, bookings, and follow-through",
      "Clear progress from inquiry through arrival and post-visit",
      "Insight into which campaigns and messages are driving action",
      "Conversion visibility without manual tracking",
    ],
    solves: "Guesswork. Conflicting numbers. Not knowing where things break — or where they work.",
    color: "#00AEEF",
  },
  {
    num: "08",
    icon: "🔗",
    title: "POS-Adjacent by Design",
    subtitle: "Your POS runs transactions. FEC Playbook runs everything around them.",
    included: [
      "Works alongside your existing POS",
      "Live POS activity drives follow-up and communication",
      "Guest and event activity flows into marketing and retention systems",
      "No rip-and-replace required",
    ],
    solves: "Disconnected systems. Manual workarounds. Staff re-entering the same information twice.",
    color: "#1565C0",
  },
  {
    num: "09",
    icon: "⚙️",
    title: "Built-In FEC Workflows",
    subtitle: "Not generic. Not DIY. Already mapped out.",
    included: [
      "Party and event follow-through logic",
      "High-volume inquiry handling without staff overload",
      "FEC-specific communication timing and messaging",
      "Multi-location readiness and consistency",
    ],
    solves: "Building systems from scratch. Generic templates that don't fit FEC operations.",
    color: "#00AEEF",
  },
  {
    num: "10",
    icon: "🎨",
    title: "Brand-Ready, Day One",
    subtitle: "You bring the brand. We bring the playbook.",
    included: [
      "Messaging written in your brand voice",
      "Automations aligned to your specific offerings",
      "Your tone, pricing, and policies reflected throughout",
      "Proven systems adapted to your operation",
    ],
    solves: "Generic templates. Rebuilding workflows. Systems that don't sound like you.",
    color: "#1565C0",
  },
];

const replaces = [
  "Mailchimp or Constant Contact",
  "Separate CRM",
  "Facebook & Instagram tools",
  "Google Business Profile manager",
  "Texting platforms",
  "Separate reputation tools",
  "Spreadsheets & shared inboxes",
];

export default function Playbook() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="What's in the Playbook — 10 Pre-Built FEC Operating Systems"
        description="Discover the 10 pre-built operating systems inside FEC Playbook: birthday sales, text clubs, reputation management, loyalty, and more — all built for Family Entertainment Centers."
        path="/playbook"
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(0,174,239,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-2 mb-8">
            <BookOpen size={14} className="text-[#00AEEF]" />
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">What's In The Playbook</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 tracking-tight">
            The Operating Strategy<br />
            <span className="fec-gradient-text">Behind Successful FECs</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            FEC Playbook isn't a collection of tools. It's a ready-to-run operating system built specifically for how Family Entertainment Centers actually work.
          </p>
          <p className="text-[#00AEEF] font-bold text-lg mb-10">
            You bring the brand. We bring the playbook.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: "10", label: "Core Playbook Systems" },
              { value: "100+", label: "Pre-Built Automations" },
              { value: "1", label: "Login. One Platform." },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-xl px-6 py-4 text-center">
                <div className="text-3xl font-black text-[#00AEEF]">{value}</div>
                <div className="text-white/50 text-xs font-bold uppercase tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="fec-btn-primary text-base py-4 px-8"
            >
              <Phone size={18} />
              Book a Call to Learn More
            </a>
            <Link href="/how-it-works">
              <button className="fec-btn-outline text-base py-4 px-8">
                See How It Works
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PLAYBOOK ITEMS ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {playbookItems.map((item) => (
              <div
                key={item.num}
                className="bg-[#111] border border-white/8 rounded-2xl overflow-hidden hover:border-[#00AEEF]/30 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left: Number + Title */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-white/8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl font-black leading-none"
                        style={{ color: item.color, fontFamily: "'Montserrat', sans-serif", textShadow: `0 0 20px ${item.color}60` }}>
                        {item.num}
                      </div>
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-black uppercase leading-tight mb-3 text-white group-hover:text-[#00AEEF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Middle: Included */}
                  <div className="lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r border-white/8">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: item.color }}>
                      Included:
                    </p>
                    <div className="space-y-2.5">
                      {item.included.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                          <p className="text-white/70 text-sm leading-relaxed">{inc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: What This Solves */}
                  <div className="lg:col-span-3 p-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                      What This Solves:
                    </p>
                    <div className="bg-[#0D1B3E] rounded-xl p-4 border border-white/5">
                      <p className="text-white/80 text-sm leading-relaxed italic">
                        "{item.solves}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IT REPLACES ===== */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">Consolidation</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              What FEC Playbook<br />
              <span className="fec-gradient-text">Replaces</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Instead of logging into multiple disconnected platforms, FEC Playbook brings it all under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Before FEC Playbook</p>
              <div className="space-y-3">
                {replaces.map((tool) => (
                  <div key={tool} className="flex items-center gap-3 text-white/50">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">×</span>
                    </div>
                    <span className="text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#1565C0]/10 border border-[#00AEEF]/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-[#00AEEF] font-black text-2xl uppercase mb-2">FEC Playbook</p>
              <p className="text-white font-bold text-lg mb-4">One system. One strategy. One source of truth.</p>
              <div className="space-y-2">
                {["One login", "One workflow", "One inbox", "One source of truth"].map((item) => (
                  <div key={item} className="flex items-center gap-2 justify-center">
                    <CheckCircle size={14} className="text-[#00AEEF]" />
                    <span className="text-white/80 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TAKEAWAY + CTA ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#1565C0]/10 border border-[#00AEEF]/30 rounded-2xl p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-2 mb-8">
              <Target size={14} className="text-[#00AEEF]" />
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">The Takeaway</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
              FEC Playbook Isn't Another Tool.<br />
              <span className="fec-gradient-text">It's the Operating Strategy Your Center Runs On.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-bold text-white/60">
              {["First inquiry", "Booked party", "Five-star review", "Repeat guest"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="text-[#00AEEF]">{step}</span>
                  {i < arr.length - 1 && <ArrowRight size={14} className="text-white/20" />}
                </div>
              ))}
            </div>
            <p className="text-white/60 text-lg mb-10">All automated. All built. All ready to run.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="fec-btn-primary text-base py-4 px-8"
              >
                <Phone size={18} />
                Book a 15-Minute Overview
              </a>
              <Link href="/how-it-works">
                <button className="fec-btn-outline text-base py-4 px-8">
                  See How It Works
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
            <p className="text-white/30 text-xs mt-6">
              Results are not guaranteed. Noted results are based on real average user information. Results vary depending on operator's venue and internal processes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
