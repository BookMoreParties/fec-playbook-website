/* 
 * FEC Playbook — Pricing Page
 * Full pricing detail page matching fecpricing-exhqebvr.manus.space content
 */

import { useState } from "react";
import { CheckCircle, Phone, ArrowRight, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Monthly Plan",
    price: "$397",
    period: "/month",
    setup: "$1,500 one-time setup fee",
    featured: false,
    badge: null,
    description: "Perfect for FECs that want to start without a long-term commitment.",
    features: [
      "No contract — cancel anytime",
      "Month-to-month billing",
      "Unlimited contacts",
      "Unlimited users",
      "All 8 automation workflows",
      "24/7 live chat support",
      "Unlimited Zoom support calls",
      "Full platform access",
      "Onboarding & training included",
    ],
  },
  {
    name: "Annual Plan",
    price: "$3,970",
    period: "/year",
    setup: "$1,500 one-time setup fee",
    featured: true,
    badge: "BEST VALUE — SAVE $794",
    description: "Our most popular option. Save two months versus monthly billing.",
    features: [
      "Annual commitment",
      "Save $794 vs. monthly",
      "Unlimited contacts",
      "Unlimited users",
      "All 8 automation workflows",
      "24/7 live chat support",
      "Unlimited Zoom support calls",
      "Full platform access",
      "Priority onboarding & training",
    ],
  },
];

const workflows = [
  { num: "01", icon: "🎂", name: "Birthday & Celebration Sales System", cost: "~$0.32/booking", desc: "From first inquiry to 5-star review to next year's rebooking." },
  { num: "02", icon: "🏢", name: "Group & Corporate Event Engine", cost: "~$0.30/booking", desc: "Turn cold inquiries into confirmed bookings." },
  { num: "03", icon: "🎟️", name: "Ticketing & Visit Automation", cost: "~$0.09/booking", desc: "Guests arrive informed, prepared, and excited." },
  { num: "04", icon: "⭐", name: "Reputation Protection System", cost: "~$0.11/booking", desc: "Protect your stars. Resolve issues before they go public." },
  { num: "05", icon: "🎫", name: "Season Pass & Membership Lifecycle", cost: "~$0.10/booking", desc: "Keep members engaged and renewals on autopilot." },
  { num: "06", icon: "📱", name: "Text Club & Repeat Visit Engine", cost: "~$0.07–$0.09/booking", desc: "Drive traffic on demand with targeted SMS campaigns." },
  { num: "07", icon: "📊", name: "Internal Sales Accountability", cost: "~$0.02–$0.05/booking", desc: "No lead left behind. No deal left stalled." },
  { num: "08", icon: "🤝", name: "Fundraising & Referral Systems", cost: "Low/booking", desc: "Turn your community into a lead-generation engine." },
];

const usageCosts = [
  { label: "Email Sending", cost: "$0.0014", unit: "per email" },
  { label: "SMS (outbound)", cost: "$0.0228", unit: "per segment" },
  { label: "SMS (inbound)", cost: "$0.0104", unit: "per segment" },
  { label: "Email Verification", cost: "$0.005", unit: "per verification" },
  { label: "Phone Verification", cost: "$0.005", unit: "per verification" },
  { label: "AI Content Generation", cost: "$0.027", unit: "per 1,000 words" },
  { label: "Workflow Execution", cost: "$0.01", unit: "per 1,000 executions" },
  { label: "Premium Triggers", cost: "$0.01", unit: "per 1,000 triggers" },
];

const onboardingSteps = [
  { step: "Week 1", title: "Kickoff & Setup", desc: "Initial call, access setup, A2P registration submitted, Readiness Checklist shared." },
  { step: "Week 2", title: "A2P Compliance", desc: "Carrier approval in progress (up to 2 weeks). Platform configuration begins." },
  { step: "Week 3–4", title: "Workflow Configuration", desc: "All 8 workflows customized to your brand. Integration connections established." },
  { step: "Week 5–6", title: "Launch & Training", desc: "Final launch call, team training, go-live. Ongoing support begins." },
];

const faqs = [
  { q: "What's included in the $1,500 setup fee?", a: "The one-time setup fee covers complete onboarding and full system configuration — including two 1-hour launch calls, tech integration setup, platform training, and all workflow customization to your brand. This is a one-time fee paid at the start." },
  { q: "Are there usage costs beyond the subscription?", a: "Yes, but they're minimal and transparent. Communication costs (SMS, email, phone) are passed through from carriers with minimal markup. The average cost per completed booking ranges from $0.02 to $0.32 depending on the workflow. You'll see real-time tracking in your dashboard." },
  { q: "Is there a contract or cancellation fee?", a: "Monthly plans are month-to-month with no contracts or cancellation fees. Annual plans offer the best value with a 12-month commitment. There are no hidden cancellation fees." },
  { q: "How long does onboarding take?", a: "Total onboarding is 4–6 weeks. The primary variable is A2P compliance approval from carriers (up to 2 weeks). The faster your team completes the Readiness Checklist, the faster you see results." },
  { q: "Can I add more users or contacts?", a: "Yes — both plans include unlimited contacts and unlimited users. There are no per-seat or per-contact charges beyond your subscription." },
  { q: "What integrations are included?", a: "FEC Playbook integrates with ROLLER Software (Official Integrated Partner), CenterEdge Software, PartyWirks, TripleSeat, and Party Center Software. Additional integrations are available via Zapier." },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#00AEEF]"></div>
            <span className="section-label">Pricing</span>
            <div className="h-px w-12 bg-[#00AEEF]"></div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black uppercase leading-tight mb-6">
            Simple, Transparent<br />
            <span className="fec-gradient-text">Pricing.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            One flat subscription. All 8 workflows. Unlimited contacts and users. No surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`pricing-card relative ${plan.featured ? "featured" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00AEEF] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-white font-black text-xl uppercase mb-2 mt-2">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-white/50 text-base">{plan.period}</span>
                </div>
                <p className="text-white/40 text-sm mb-8">+ {plan.setup}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-[#00AEEF] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/fecplaybook/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 px-6 rounded font-black text-sm uppercase tracking-wide transition-all ${
                    plan.featured
                      ? "fec-gradient-bg text-white hover:opacity-90"
                      : "border-2 border-white/20 text-white hover:border-[#00AEEF] hover:text-[#00AEEF]"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone size={14} />
                    Book a Call to Get Started
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-lg p-6 text-center">
            <p className="text-[#00AEEF] font-bold text-sm uppercase tracking-wide mb-2">All Plans Include</p>
            <p className="text-white/60 text-sm">Unlimited contacts · Unlimited users · All 8 workflows · 24/7 live chat · Unlimited Zoom calls · Full platform access</p>
          </div>
        </div>
      </section>

      {/* What's Included — Workflows */}
      <section className="py-20 bg-[#0D1B3E]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              All 8 Workflows <span className="fec-gradient-text">Included</span>
            </h2>
            <p className="text-white/60 text-base">Every automation workflow is included in your subscription — no add-ons, no upsells.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflows.map((wf) => (
              <div key={wf.num} className="workflow-card flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{wf.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-bold text-sm">{wf.name}</h3>
                    <span className="text-[#00AEEF] text-xs font-bold whitespace-nowrap flex-shrink-0">{wf.cost}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Costs */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Info size={16} className="text-[#00AEEF]" />
              <h2 className="text-3xl sm:text-4xl font-black uppercase">
                Usage-Based <span className="fec-gradient-text">Costs</span>
              </h2>
            </div>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Beyond your subscription, communication costs are passed through at cost with minimal markup. You only pay for what you use — and you can track it all in real time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {usageCosts.map(({ label, cost, unit }) => (
              <div key={label} className="bg-white/3 border border-white/8 rounded-lg p-4 text-center">
                <p className="text-[#00AEEF] font-black text-xl mb-1">{cost}</p>
                <p className="text-white/40 text-xs">{unit}</p>
                <p className="text-white/60 text-xs font-semibold mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/3 border border-white/8 rounded-lg p-6">
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Average Cost Per Completed Booking</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { workflow: "Birthday Party", cost: "~$0.32" },
                { workflow: "Group Event", cost: "~$0.30" },
                { workflow: "Ticketing Visit", cost: "~$0.09" },
                { workflow: "Membership", cost: "~$0.10" },
              ].map(({ workflow, cost }) => (
                <div key={workflow} className="text-center">
                  <p className="text-white font-black text-2xl">{cost}</p>
                  <p className="text-white/40 text-xs mt-1">{workflow}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section className="py-20 bg-[#0D1B3E]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              Onboarding <span className="fec-gradient-text">Timeline</span>
            </h2>
            <p className="text-white/60 text-base">From signup to fully live in 4–6 weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {onboardingSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < onboardingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#00AEEF]/20 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full fec-gradient-bg flex items-center justify-center text-white font-black text-sm mb-4">
                    {i + 1}
                  </div>
                  <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-wide mb-1">{step.step}</p>
                  <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              Pricing <span className="fec-gradient-text">FAQ</span>
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/8 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-colors"
                >
                  <span className="text-white font-bold text-sm pr-4">{faq.q}</span>
                  <span className="text-[#00AEEF] text-xl flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 fec-gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a 30-minute call with our team. We'll walk you through pricing, onboarding, and exactly what to expect.
          </p>
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#1565C0] font-black text-base uppercase tracking-wide py-4 px-10 rounded hover:bg-white/90 transition-all"
          >
            <Phone size={18} />
            Book a Call to Learn More
          </a>
          <p className="text-white/60 text-sm mt-4">Free 30-minute strategy call. No commitment required.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
