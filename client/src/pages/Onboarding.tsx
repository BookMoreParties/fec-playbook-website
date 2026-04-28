// Design: FEC Playbook Onboarding Journey
// Dark near-black background (#0A0A0A), dark navy cards (#0D1B3E), cyan accent (#00AEEF)
// Montserrat font, uppercase headings, FEC Playbook branding throughout
// Structure mirrors the original Book More onboarding page, fully rebranded

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Users, CheckCircle, AlertTriangle, Info, ChevronRight } from "lucide-react";

const FEC_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_687480e5.png";

// ─── Phase data ──────────────────────────────────────────────────────────────

const phases = [
  {
    number: "01",
    tag: "PRE-CALL DISCOVERY",
    title: "Client Intake Survey",
    duration: "20 minutes — Complete at sign-up",
    attendees: "Client",
    body: "Your system is built around your venue — not a generic template. The Intake Survey captures everything your implementation specialist needs to understand your brand. Your offerings. Your tech stack. Your team. All the things.",
    deliverables: [
      "Completed Intake Survey",
      "Overview of current POS, waiver, and booking systems",
      "Identification of active revenue programs (parties, passes, memberships)",
      "Identify team structure and key contacts",
    ],
    critical:
      "This survey must be completed before your first call. Incomplete surveys result in a rescheduled call.",
  },
  {
    number: "02",
    tag: "TECH INTERFACE & TRAINING 1",
    title: "Tech Interface & Training Call 1",
    duration: "~2 hours — Scheduled upon receipt of Intake Survey",
    attendees: "FEC Playbook + Client + Website Manager",
    body: "During this session, we connect your social media platforms, implement the required A2P compliance elements on your website, and begin activating your platform so it's ready to use right away. You'll also learn how to use the Conversation Box, manage your social media presence from within the platform, and leverage the reputation management tools. Your website manager should attend this call, as some website updates will need to be completed during the session. By the end of the call, your system will already be in motion — you'll be using it, not waiting for it.",
    deliverables: [
      "Social media platforms connected (Google My Business, Facebook, Instagram) and learn how to manage",
      "A2P compliance elements added to website (Forms, Opt-in language, Privacy Policy, Terms of Service) necessary to get A2P Texting approval",
      "Define steps to integrate POS and Events Data",
      "Learn how to manage guest conversations in the Conversation Box",
      "Learn how to post and manage social media from the platform",
      "Understand the Reputation Management system",
    ],
    critical:
      "Your website manager must attend this call. A2P compliance requires website changes that must be made live during the session. Admin access to all social media accounts is required. Note: A2P compliance approval may take up to 2 weeks after submission.",
  },
  {
    number: "03",
    tag: "PLAYBOOK IDENTIFICATION",
    title: "Playbook Identification Call",
    duration: "~60 minutes — Scheduled upon completion of Training Call 1",
    attendees: "FEC Playbook + Client",
    body: "This is where your system gets customized — and where you start to understand it. Your implementation specialist walks you through the full playbook library, explaining what each automation does and the revenue it drives. As you learn, you identify and prioritize your playbooks — marking each one Active, On Hold, or Not Applicable for your venue.",
    deliverables: [
      "Full playbook library reviewed and understood",
      "Applicable playbooks identified and prioritized",
      "Playbook Activation Plan confirmed",
      "Internal routing rules defined (GM, coordinator, owner assignments)",
      "Personalized Readiness Checklist delivered post call",
    ],
    critical:
      "Come prepared to make decisions. The more context you bring about your venue, programs, and team, the more precisely we can build your system.",
  },
  {
    number: "04",
    tag: "READINESS CHECKLIST",
    title: "Your Personalized Readiness Checklist",
    duration: "Client-led — Complete within the 2-week A2P compliance period",
    attendees: "Client",
    body: "Based on your Playbook Activation Plan, we deliver a single personalized checklist covering all your automations. Complete the Sales Pipeline messaging first — that's what unlocks Training Call 2. Completion of Marketing messaging unlocks Training Call 3. Here is where you will generate the exact assets, offers, and configurations we need to push play on your automations.",
    deliverables: [
      "Personalized Readiness Checklist received and reviewed",
      "Sales Pipeline messaging completed (unlocks Training Call 2)",
      "Examples of sales pipeline wording",
      "Examples of repeat revenue driving offers",
      "Examples of marketing emails",
    ],
    critical:
      "Sales Pipeline messaging must be complete AND A2P compliance must be approved before Training Call 2 can be scheduled. Complete your Sales messaging first to keep the process moving.",
  },
  {
    number: "05",
    tag: "TRAINING CALL 2",
    title: "Training Call 2 — Sales System",
    duration: "~90 minutes — Scheduled upon receipt of Sales messaging + A2P approval",
    attendees: "FEC Playbook + Client + Website Manager",
    body: "Sales Pipeline messaging is complete. A2P is approved. Now we activate your highest-revenue playbooks. Your website manager joins to add the Sales forms directly to your website during the call. Your FEC Playbook specialist walks your team through how they work, and confirms everything is running correctly. The system starts to work for you.",
    deliverables: [
      "Sales Pipeline automations activated and live",
      "Speed-to-lead and missed call text-back running",
      "Party booking and inquiry follow-up sequences active",
      "Sales forms added to website (completed live on call)",
      "Team trained on Sales Pipeline management",
    ],
    critical:
      "Your website manager must attend this call. Sales forms will be added to your website live during the session. A2P approval and Event Data Integration is required to be completed before this call can be scheduled.",
  },
  {
    number: "06",
    tag: "TRAINING CALL 3",
    title: "Training Call 3 — Marketing System",
    duration: "~90 minutes — Scheduled upon completion of Training Call 2",
    attendees: "FEC Playbook + Client",
    body: "You've completed your Marketing messaging. Time to activate your customer retention and revenue-driving campaigns. Your FEC Playbook specialist turns on your chosen Marketing automations. Your team learns how each campaign works and what to expect. By the end of this call, your marketing is running.",
    deliverables: [
      "Marketing automations activated and live",
      "Birthday and celebration campaigns start",
      "Chosen automation messaging is plugged in",
      "Lapsed visitor winback sequence live",
      "Reputation management and review request playbooks active",
      "Team trained on Marketing campaign management",
    ],
    critical:
      "Marketing messaging from your Readiness Checklist must be fully complete before this call can be scheduled.",
  },
  {
    number: "07",
    tag: "FINAL TRAINING",
    title: "Final Training & Platform Review",
    duration: "~90 minutes — Scheduled upon completion of Training Call 3",
    attendees: "FEC Playbook + Client",
    body: "By this point, your system is built and your team is already using FEC Playbook. This final session brings everything together. We'll walk through the entire platform with your team — reviewing your active playbooks, dashboards, and reports to ensure everything is functioning exactly as it should. Along the way, we'll address any remaining questions, activate any final playbooks, and make sure your team feels confident navigating the system. When this session ends, onboarding is complete. Your automations are running. Your team knows how to use the platform. And your systems are working behind the scenes to help grow your business.",
    deliverables: [
      "Full platform walkthrough completed",
      "All remaining playbooks reviewed and activated",
      "Reporting and performance dashboards explained",
      "Any gaps identified and resolved",
      "Team questions answered — full confidence before sign-off",
      "30-Day Check-In scheduled",
    ],
    critical:
      "Bring your full team to this session. The more people who understand the system, the more consistently your daily plays get run.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Onboarding() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A0A", fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
    >
      {/* ── Sticky nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
        style={{
          height: "64px",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,174,239,0.15)" : "1px solid transparent",
        }}
      >
        <a href="/">
          <img src={FEC_LOGO} alt="FEC Playbook" style={{ height: "32px", width: "auto" }} />
        </a>
        <div className="flex items-center gap-6">
          <button
            onClick={scrollToOverview}
            className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-[#00AEEF] transition-colors duration-200"
          >
            Overview
          </button>
          <button
            onClick={() =>
              document.getElementById("phases")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-[#00AEEF] transition-colors duration-200"
          >
            Phases
          </button>
          <a
            href="https://app.bookmore.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-colors duration-200"
            style={{
              background: "#00AEEF",
              color: "#0A0A0A",
            }}
          >
            Log In
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "64px" }}
      >
        {/* Circuit board background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0,174,239,0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(13,27,62,0.8) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(0,174,239,0.06) 0%, transparent 40%)
            `,
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,174,239,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {/* Eyebrow */}
          <p
            className="text-xs font-black uppercase tracking-[0.25em] text-[#00AEEF]/70 mb-6"
          >
            FEC Playbook Client Onboarding
          </p>

          {/* Main headline */}
          <h1
            className="font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            <span className="text-white">Your Playbook.</span>
            <br />
            <span style={{ color: "#00AEEF" }}>Activated Now.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/60 leading-relaxed mb-10 mx-auto"
            style={{ fontSize: "1.05rem", maxWidth: "560px" }}
          >
            Running a Family Entertainment Center means juggling a thousand things at once. FEC Playbook automates what should happen every day — so nothing falls through the cracks. Here's what to expect during your onboarding journey.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToOverview}
            className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-200 hover:gap-3"
            style={{ background: "#00AEEF", color: "#0A0A0A" }}
          >
            Let's Get Started
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
          <div
            className="w-px bg-gradient-to-b from-white/60 to-transparent"
            style={{ height: "40px" }}
          />
        </div>
      </section>

      {/* ── Overview section ── */}
      <section ref={overviewRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00AEEF]/60 mb-4">
            Grow Your Center
          </p>
          <h2
            className="font-black uppercase leading-tight mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Set It Up Once.
          </h2>
          <h2
            className="font-black uppercase leading-tight mb-10"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "rgba(0,174,239,0.45)",
            }}
          >
            Run Your Playbook. Grow More.
          </h2>

          {/* Timeline info box */}
          <div
            className="flex gap-4 items-start rounded-xl p-5 mb-16"
            style={{
              background: "#0D1B3E",
              border: "1px solid rgba(0,174,239,0.2)",
            }}
          >
            <Info size={18} className="text-[#00AEEF] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-white">Total onboarding period: 4–6 weeks.</strong> Timeline depends on A2P compliance approval (up to 2 weeks) and how quickly client deliverables are completed. The faster your team completes the Readiness Checklist, the faster we activate your system.
              </p>
            </div>
          </div>

          {/* Phase overview pills */}
          <div id="phases" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {phases.map((p) => (
              <button
                key={p.number}
                onClick={() =>
                  document
                    .getElementById(`phase-${p.number}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="flex flex-col items-start gap-1 rounded-lg px-4 py-3 text-left transition-all duration-200 hover:border-[#00AEEF]/50"
                style={{
                  background: "#0D1B3E",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="text-[10px] font-black uppercase tracking-widest"
                  style={{ color: "#00AEEF" }}
                >
                  Phase {p.number}
                </span>
                <span className="text-xs font-bold text-white/70 leading-snug">{p.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phases ── */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {phases.map((phase) => (
            <PhaseCard key={phase.number} phase={phase} />
          ))}
        </div>
      </section>

      {/* ── Support footer CTA ── */}
      <section className="py-20 px-6">
        <div
          className="max-w-3xl mx-auto rounded-2xl px-8 py-12 text-center"
          style={{
            background: "linear-gradient(135deg, #0D1B3E 0%, #0A0A0A 100%)",
            border: "1px solid rgba(0,174,239,0.25)",
          }}
        >
          <h2
            className="font-black uppercase leading-tight mb-5"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.02em" }}
          >
            Support Doesn't Stop
            <br />
            <span style={{ color: "#00AEEF" }}>After Onboarding.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Your onboarding specialist will guide you through the platform to ensure you fully understand how your system works and how to use it effectively. After launch, we stay connected with 30, 60, and 90-day success check-ins to review progress, answer questions, and help you continue optimizing your playbooks. And whenever you need assistance, 24/7 live support is available directly from within the platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/onboarding/survey"
              className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-200 hover:bg-[#00c4ff]"
              style={{ background: "#00AEEF", color: "#0A0A0A" }}
            >
              <ChevronRight size={16} />
              Complete Your Intake Survey
            </a>
            <a
              href="https://app.bookmore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-200"
              style={{ border: "1px solid rgba(0,174,239,0.35)", color: "#00AEEF", background: "transparent" }}
            >
              Log In to FEC Playbook
            </a>
          </div>
          <p className="text-white/30 text-xs mt-5">
            Questions? Contact your FEC Playbook implementation specialist directly.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="text-center py-8 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-white/20 text-xs">
          FEC Playbook — The Operating System for Family Entertainment Centers |{" "}
          <a
            href="https://www.fecplaybook.com"
            className="hover:text-[#00AEEF] transition-colors"
          >
            fecplaybook.com
          </a>
        </p>
      </footer>
    </div>
  );
}

// ─── Phase card ───────────────────────────────────────────────────────────────

function PhaseCard({ phase }: { phase: (typeof phases)[0] }) {
  return (
    <div
      id={`phase-${phase.number}`}
      className="rounded-2xl overflow-hidden scroll-mt-20"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar */}
        <div
          className="md:w-64 shrink-0 p-6 flex flex-col gap-4"
          style={{
            background: "linear-gradient(160deg, #0D1B3E 0%, #0a1628 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Phase badge */}
          <div>
            <span
              className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{
                background: "rgba(0,174,239,0.12)",
                border: "1px solid rgba(0,174,239,0.3)",
                color: "#00AEEF",
              }}
            >
              Phase {phase.number}
            </span>
            <p
              className="text-[10px] font-black uppercase tracking-widest text-[#00AEEF]/60 mb-1"
            >
              {phase.tag}
            </p>
            <h3
              className="font-black uppercase leading-tight text-white"
              style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
            >
              {phase.title}
            </h3>
          </div>

          <div className="space-y-2 mt-auto">
            <div className="flex items-start gap-2 text-white/40">
              <Clock size={13} className="shrink-0 mt-0.5" />
              <span className="text-xs leading-snug">{phase.duration}</span>
            </div>
            <div className="flex items-start gap-2 text-white/40">
              <Users size={13} className="shrink-0 mt-0.5" />
              <span className="text-xs leading-snug">{phase.attendees}</span>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 p-6 md:p-8" style={{ background: "#0A0A0A" }}>
          <p className="text-white/65 text-sm leading-relaxed mb-6">{phase.body}</p>

          {/* Deliverables */}
          <div className="mb-5">
            <p
              className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00AEEF]/50 mb-3"
            >
              Deliverables
            </p>
            <ul className="space-y-2">
              {phase.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={14}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#00AEEF" }}
                  />
                  <span className="text-sm text-white/70 leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Critical callout */}
          <div
            className="flex gap-3 items-start rounded-lg px-4 py-3"
            style={{
              background: "rgba(239, 68, 68, 0.06)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
            <p className="text-xs text-red-300/80 leading-relaxed">
              <strong className="text-red-300">Critical:</strong> {phase.critical}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
