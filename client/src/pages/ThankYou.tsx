/**
 * FEC Playbook — Thank You Page
 * Design: Bold Sports/Action Brand — dark navy/black bg, FEC Cyan (#00AEEF) + Cobalt Blue (#1565C0) accents
 * Montserrat Black headings, confirmation state, next-steps guide, social proof reinforcement
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CheckCircle, Calendar, Clock, Phone, Mail, ArrowRight, Play, Star, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const nextSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Check Your Email",
    description: "A calendar invite and confirmation email are on their way to your inbox. Add it to your calendar so you don't miss it.",
    color: "#00AEEF",
  },
  {
    step: "02",
    icon: Play,
    title: "Watch the 3-Min Overview",
    description: "Get a head start before your call. Our short overview walks you through exactly how FEC Playbook is structured so your demo time is spent on your specific questions.",
    color: "#1565C0",
  },
  {
    step: "03",
    icon: Zap,
    title: "Think About Your Biggest Pain Point",
    description: "What's costing you the most time or revenue right now? Birthday party follow-ups? Hiring? Reputation management? We'll build your demo around it.",
    color: "#00AEEF",
  },
];

const stats = [
  { value: "30+", label: "FECs Already Running on the Playbook" },
  { value: "13+", label: "Core Feature Modules" },
  { value: "100+", label: "Pre-Built Automations" },
  { value: "30 min", label: "All You Need to See It All" },
];

const testimonialSnippets = [
  {
    quote: "Within 60 days we had our birthday follow-up system running on autopilot. The playbook paid for itself in the first month.",
    name: "M.T.",
    venue: "Indoor Play Center, Texas",
    initials: "MT",
    color: "#00AEEF",
  },
  {
    quote: "I was skeptical about another CRM. This is different — it's built for how FECs actually operate, not generic businesses.",
    name: "R.K.",
    venue: "Family Fun Center, Ohio",
    initials: "RK",
    color: "#1565C0",
  },
];

export default function ThankYou() {
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setConfettiActive(true);
    const t = setTimeout(() => setConfettiActive(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />

      {/* Hero Confirmation */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D1B2A] to-[#0A0A0A]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 40%, #00AEEF 0%, transparent 55%)`,
          }}
        />
        {/* Circuit grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,174,239,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,174,239,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated check */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: "#00AEEF" }}
              />
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,174,239,0.5)]"
                style={{ backgroundColor: "rgba(0,174,239,0.15)", border: "2px solid rgba(0,174,239,0.4)" }}
              >
                <CheckCircle className="w-12 h-12" style={{ color: "#00AEEF" }} />
              </div>
            </div>
          </div>

          {/* Label */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6"
            style={{ color: "#00AEEF", borderColor: "rgba(0,174,239,0.3)", backgroundColor: "rgba(0,174,239,0.08)" }}>
            <CheckCircle className="w-3.5 h-3.5" />
            Booking Confirmed
          </div>

          <h1
            className="text-4xl sm:text-6xl font-black uppercase text-white leading-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            You're On the{" "}
            <span style={{ color: "#00AEEF" }}>Playbook.</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Your demo call is booked. Our team is looking forward to walking you through the operating system built specifically for Family Entertainment Centers.
          </p>

          {/* Confirmation detail cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
              <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: "#00AEEF" }} />
              <span className="text-white/70 text-sm font-medium">Check your email for the calendar invite</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
              <Clock className="w-5 h-5 flex-shrink-0" style={{ color: "#00AEEF" }} />
              <span className="text-white/70 text-sm font-medium">30-minute strategy call · No commitment</span>
            </div>
          </div>

          {/* Quick contact */}
          <p className="text-white/30 text-sm">
            Questions before your call?{" "}
            <a
              href="mailto:support@fecplaybook.com"
              className="font-bold transition-colors hover:text-white"
              style={{ color: "#00AEEF" }}
            >
              support@fecplaybook.com
            </a>
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y border-white/8 bg-[#0D1B2A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{ color: "#00AEEF", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00AEEF" }}>
              Before Your Call
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              3 Things to Do <span style={{ color: "#00AEEF" }}>Right Now</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 overflow-hidden"
                >
                  {/* Step watermark */}
                  <div
                    className="absolute top-4 right-5 text-7xl font-black opacity-8 leading-none select-none"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3
                    className="text-lg font-black uppercase text-white mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-white/40 text-sm uppercase tracking-widest font-bold">
              What FEC Operators Are Saying
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialSnippets.map((t) => (
              <div
                key={t.initials}
                className="rounded-2xl border border-white/10 bg-white/3 p-7"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed italic mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-white mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore While You Wait
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Get familiar with the platform before your call. The more you know, the more we can cover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/features",
                label: "See All Features",
                desc: "13+ core modules explained",
                icon: Zap,
                color: "#00AEEF",
              },
              {
                href: "/playbook",
                label: "View the Playbook",
                desc: "8 systems, 100+ automations",
                icon: Users,
                color: "#1565C0",
              },
              {
                href: "/how-it-works",
                label: "How It Works",
                desc: "The 3-step onboarding process",
                icon: Play,
                color: "#00AEEF",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-white/20 p-5 transition-all duration-200"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm uppercase tracking-wide">{card.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{card.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final reassurance */}
      <section className="py-12 bg-gradient-to-r from-[#00AEEF]/10 to-[#1565C0]/10 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Phone className="w-4 h-4" style={{ color: "#00AEEF" }} />
            <p className="text-white/50 text-sm">
              Need to reschedule?{" "}
              <a
                href="mailto:support@fecplaybook.com"
                className="font-bold transition-colors hover:text-white"
                style={{ color: "#00AEEF" }}
              >
                Email us
              </a>{" "}
              and we'll get you a new time within 24 hours.
            </p>
          </div>
          <p className="text-white/25 text-xs uppercase tracking-widest">
            FEC Playbook · The Operating System for Family Entertainment Centers
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
