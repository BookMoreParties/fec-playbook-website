/**
 * FEC Playbook™ — How It Works Page
 * Design: Bold Sports/Action Brand
 * Dark backgrounds, FEC Cyan (#00AEEF) + Cobalt (#1565C0) accents
 * Montserrat Black headlines, high contrast throughout
 */

import { Phone, ArrowRight, CheckCircle, Database, Zap, GitBranch, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import SEOMeta from "@/components/SEOMeta";

const ASSETS = {
  screenshotDashboard: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hiw-step01-pos-data-5oAqgyQBeJUTARrxqmFakZ.webp",
  automationVisual: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/automation-visual-7FFhxMiacnZRBnZdiXWffS.webp",
  pipelineVisual: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hiw-step03-pathways-K3VLeKt7mFbt6MXxTvoRSr.webp",
};

const steps = [
  {
    num: "01",
    badge: "The Foundation",
    icon: Database,
    title: "Everything Starts With Live POS & Booking Data",
    body: "When something happens in your center — a ticket sale, a party booking, a group inquiry, or a reschedule — that information is sent into FEC Playbook™ automatically.",
    highlight: "No exporting. No double entry. No clean-up later.",
    items: [
      "Connects directly to your existing POS and booking system",
      "Party bookings, ticket sales, group inquiries all flow in automatically",
      "Reschedules and cancellations are handled in real time",
      "No manual data entry or spreadsheet exports required",
    ],
    image: ASSETS.screenshotDashboard,
    imageAlt: "FEC Playbook™ dashboard showing live POS data",
    flip: false,
  },
  {
    num: "02",
    badge: "Intelligent Automation",
    icon: Zap,
    title: "The System Knows What to Do Next",
    body: "When data comes in, FEC Playbook™ automatically identifies who the guest is, understands what they did, recognizes the type of visit or event, routes it to the right place, and starts the right follow-up.",
    highlight: "Your team doesn't choose the next step. The system already knows.",
    items: [
      "Identifies who the guest is and their history with your center",
      "Understands the type of event — party, group, ticket, membership",
      "Routes each contact to the correct pipeline automatically",
      "Starts the right follow-up sequence without any manual trigger",
    ],
    image: ASSETS.automationVisual,
    imageAlt: "FEC Playbook™ automation pipeline running automatically",
    flip: true,
  },
  {
    num: "03",
    badge: "Multiple Pathways",
    icon: GitBranch,
    title: "Guests Don't Follow One Path — And Neither Does FEC Playbook™",
    body: "A guest might book a party online, walk in and buy tickets, text a question, be part of a school group, or reschedule an event. Each action triggers different outcomes, automatically. That's the point.",
    highlight: "Every path is handled. Every guest is followed up with.",
    items: [
      "Online party bookings trigger confirmation + event prep sequences",
      "Walk-in ticket purchases trigger return-visit and review requests",
      "Inbound texts are routed to the right team member instantly",
      "Group inquiries enter a dedicated corporate/school pipeline",
    ],
    image: ASSETS.pipelineVisual,
    imageAlt: "FEC Playbook™ pipeline showing multiple guest pathways",
    flip: false,
  },
];

const scenarios = [
  {
    icon: "🎂",
    title: "Birthday Party Booked",
    color: "#00AEEF",
    steps: [
      "Confirmation messages go out immediately",
      "Your team is notified and assigned",
      "Event reminders are scheduled automatically",
      "Post-party follow-up and review request is queued",
    ],
  },
  {
    icon: "🏢",
    title: "Group Inquiry Comes In",
    color: "#1565C0",
    steps: [
      "Follow-up starts within minutes, not days",
      "Ownership is assigned to the right team member",
      "Long-lead nurturing runs in the background",
      "No inquiry falls through the cracks",
    ],
  },
  {
    icon: "🎟️",
    title: "Guest Visits",
    color: "#00AEEF",
    steps: [
      "Thank-you message is sent automatically",
      "Review request is triggered at the right time",
      "Return-visit offer is scheduled based on visit type",
      "Guest is added to the right retention sequence",
    ],
  },
  {
    icon: "🔄",
    title: "Reschedule Happens",
    color: "#1565C0",
    steps: [
      "Old messages stop — no duplicate texts or emails",
      "New timing adjusts automatically",
      "Team is notified of the change",
      "Guest communication continues seamlessly",
    ],
  },
];

const outcomes = [
  "No missed party inquiries",
  "No forgotten group follow-ups",
  "No duplicate messaging",
  "No breakdowns when staff changes",
  "Same playbook. Same results. Every day.",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="How FEC Playbook™ Works — Setup, Integrations & Automation for FECs"
        description="See exactly how FEC Playbook™ connects to your POS, automates guest journeys, and runs your marketing on autopilot. Setup in days, not months."
        path="/how-it-works"
      />
      <Navigation />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(0,174,239,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-2 mb-8">
            <Zap size={14} className="text-[#00AEEF]" />
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">How It Works</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 tracking-tight">
            How FEC Playbook™ Works<br />
            <span className="fec-gradient-text">(Without the Tech Headache)</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            There isn't one path. There isn't one trigger. There isn't one thing your team has to remember.
          </p>
          <p className="text-white font-bold text-lg mb-10">
            FEC Playbook™ runs off what actually happens in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="fec-btn-primary text-base py-4 px-8"
            >
              <Phone size={18} />
              See It in Action
            </a>
            <Link href="/playbook">
              <button className="fec-btn-outline text-base py-4 px-8">
                What's in the Playbook
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["POS/Booking Data", "Contact Created", "Tags Applied", "Workflow Starts", "Results"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-[#0D1B3E] border border-[#00AEEF]/30 rounded-full px-4 py-2 text-sm font-bold text-[#00AEEF]">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight size={16} className="text-[#00AEEF]/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      {steps.map((step) => (
        <section key={step.num} className={`py-24 ${step.num === "02" ? "bg-[#0D1B3E]" : "bg-[#0A0A0A]"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${step.flip ? "lg:flex-row-reverse" : ""}`}
              style={{ direction: step.flip ? "rtl" : "ltr" }}>
              <div style={{ direction: "ltr" }}>
                <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-3 py-1.5 mb-6">
                  <step.icon size={12} className="text-[#00AEEF]" />
                  <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">{step.badge}</span>
                </div>
                <div className="text-[#00AEEF]/20 font-black text-8xl leading-none mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.num}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4">
                  {step.title}
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-4">
                  {step.body}
                </p>
                <p className="text-[#00AEEF] font-bold text-base mb-8">
                  {step.highlight}
                </p>
                <div className="space-y-3">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                {step.image ? (
                  <div className="screenshot-frame">
                    <div className="screenshot-frame-bar">
                      <div className="screenshot-dot bg-red-500"></div>
                      <div className="screenshot-dot bg-yellow-500"></div>
                      <div className="screenshot-dot bg-green-500"></div>
                      <span className="text-white/40 text-xs ml-3 font-mono">fec-playbook.app</span>
                    </div>
                    <img src={step.image} alt={step.imageAlt} className="w-full" />
                  </div>
                ) : (
                  /* Pathway visual */
                  <div className="bg-[#111] border border-white/10 rounded-xl p-8">
                    <h3 className="text-white font-bold text-lg mb-6 text-center">A Guest Might...</h3>
                    <div className="space-y-3">
                      {[
                        { icon: "🎂", text: "Book a party online" },
                        { icon: "🎟️", text: "Walk in and buy tickets" },
                        { icon: "💬", text: "Text a question" },
                        { icon: "🏫", text: "Be part of a school group" },
                        { icon: "🔄", text: "Reschedule an event" },
                      ].map(({ icon, text }) => (
                        <div key={text} className="flex items-center gap-4 bg-[#0D1B3E] rounded-lg p-3 border border-[#00AEEF]/10">
                          <span className="text-2xl">{icon}</span>
                          <span className="text-white/80 text-sm font-medium">{text}</span>
                          <ArrowRight size={14} className="text-[#00AEEF] ml-auto flex-shrink-0" />
                          <span className="text-[#00AEEF] text-xs font-bold whitespace-nowrap">Auto-handled</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ===== REAL LIFE SCENARIOS ===== */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">Real-World Examples</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              Here's What That Looks Like<br />
              <span className="fec-gradient-text">In Real Life</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every scenario your team handles today — automated, consistent, and running 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 hover:border-[#00AEEF]/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${scenario.color}20`, border: `1px solid ${scenario.color}40` }}>
                    {scenario.icon}
                  </div>
                  <h3 className="text-white font-black text-lg uppercase">{scenario.title}</h3>
                </div>
                <div className="space-y-3">
                  {scenario.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{ background: `${scenario.color}20`, color: scenario.color, border: `1px solid ${scenario.color}40` }}>
                        {i + 1}
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">The Result</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              This Is How Things Stop<br />
              <span className="fec-gradient-text">Falling Through the Cracks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#0D1B3E] border border-[#00AEEF]/20 rounded-lg p-4">
                <Shield size={16} className="text-[#00AEEF] flex-shrink-0" />
                <p className="text-white font-semibold text-sm">{outcome}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#1565C0]/10 border border-[#00AEEF]/30 rounded-2xl p-10 text-center">
            <p className="text-2xl font-black uppercase text-white mb-2">Same Playbook. Same Results. Less Stress.</p>
            <p className="text-white/60 text-base mb-8">The playbook runs the same way every day — even when people don't.</p>
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
              <Link href="/playbook">
                <button className="fec-btn-outline text-base py-4 px-8">
                  What's in the Playbook
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
