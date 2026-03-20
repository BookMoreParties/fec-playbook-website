/* 
 * FEC Playbook — Home Page
 * Design: Bold Sports/Action Brand
 * Dark backgrounds, FEC Cyan (#00AEEF) + Cobalt (#1565C0) accents
 * Montserrat Black headlines, high contrast throughout
 */

import { useState, useEffect, useRef } from "react";
import { 
  Phone, ArrowRight, CheckCircle, XCircle, ChevronDown, ChevronUp,
  MessageSquare, Star, Users, TrendingUp, Calendar, Shield, 
  Zap, BarChart3, RefreshCw, Gift, Target, Award
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// CDN Asset URLs
const ASSETS = {
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hero-bg-mLV3usVoJARhVMWa8qsJ8f.webp",
  birthdayParty: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/birthday-party-text-6MVbVzyByRLkTSrZZi8YVS.webp",
  textClub: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/text-club-offer-deXrAuqSunkxwnsEiwQZqh.webp",
  fecOperator: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/fec-operator-FPdt5GDKLRrSr7YzshYVGw.webp",
  automationVisual: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/automation-visual-7FFhxMiacnZRBnZdiXWffS.webp",
  screenshotDashboard: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/screenshot-dashboard_b976f464.png",
  screenshotConversations: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/screenshot-conversations_026f807f.png",
  screenshotPipeline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/screenshot-pipeline_3d43c6a0.png",
};

// Counter animation hook
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Stats Section
function StatsSection() {
  const { ref, inView } = useInView();
  const parties = useCounter(500, 2000, inView);
  const reviews = useCounter(5, 1500, inView);
  const hours = useCounter(40, 2000, inView);
  const centers = useCounter(100, 2000, inView);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
      {[
        { value: parties, suffix: "+", label: "Parties Automated Monthly", icon: Gift },
        { value: reviews, suffix: "★", label: "Average Review Rating", icon: Star },
        { value: hours, suffix: "hrs", label: "Staff Hours Saved Weekly", icon: Zap },
        { value: centers, suffix: "+", label: "FECs Running the Playbook", icon: Award },
      ].map(({ value, suffix, label, icon: Icon }) => (
        <div key={label} className="text-center">
          <div className="stat-number">{value}{suffix}</div>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <Icon size={14} className="text-[#00AEEF]" />
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Screenshot Frame Component
function ScreenshotFrame({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="screenshot-frame">
      <div className="screenshot-frame-bar">
        <div className="screenshot-dot bg-red-500"></div>
        <div className="screenshot-dot bg-yellow-500"></div>
        <div className="screenshot-dot bg-green-500"></div>
        <span className="text-white/40 text-xs ml-3 font-mono">{title}</span>
      </div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

// Workflow Card
const workflows = [
  { icon: "🎂", num: "01", title: "Birthday & Celebration Sales System", desc: "From first inquiry to 5-star review to next year's rebooking — fully automated.", cost: "~$0.32/booking", outcomes: ["Higher conversion rates", "More per-party revenue", "Consistent 5-star experiences"] },
  { icon: "🏢", num: "02", title: "Group & Corporate Event Engine", desc: "Turn cold inquiries into confirmed bookings. Target schools, corporate events, and large parties.", cost: "~$0.30/booking", outcomes: ["More weekday revenue", "Faster closes", "Predictable group bookings"] },
  { icon: "🎟️", num: "03", title: "Ticketing & Visit Automation", desc: "Guests arrive informed, prepared, and excited. Automated confirmations, waivers, and guides.", cost: "~$0.09/booking", outcomes: ["Faster check-in", "Better guest experience", "Fewer no-shows"] },
  { icon: "⭐", num: "04", title: "Reputation Protection System", desc: "Protect your stars. Resolve issues before they go public. Turn satisfied guests into visible proof.", cost: "~$0.11/booking", outcomes: ["Higher star ratings", "Issues resolved privately", "Stronger online presence"] },
  { icon: "🎫", num: "05", title: "Season Pass & Membership Lifecycle", desc: "Keep members engaged and renewals on autopilot. Welcome, renew, and win-back automatically.", cost: "~$0.10/booking", outcomes: ["Higher retention", "More recurring revenue", "Reduced churn"] },
  { icon: "📱", num: "06", title: "Text Club & Repeat Visit Engine", desc: "Drive traffic on demand with targeted SMS campaigns. A direct line to your customers.", cost: "~$0.07–$0.09/booking", outcomes: ["Increased traffic", "Higher lifetime value", "Measurable results"] },
  { icon: "📊", num: "07", title: "Internal Sales Accountability", desc: "No lead left behind. No deal left stalled. Automated alerts for new leads and stalled deals.", cost: "~$0.02–$0.05/booking", outcomes: ["Higher close rates", "Stronger sales discipline", "Daily manager digest"] },
  { icon: "🤝", num: "08", title: "Fundraising & Referral Systems", desc: "Turn your community into a lead-generation engine. Automate fundraising and referral programs.", cost: "Low/booking", outcomes: ["Organic lead generation", "Repeat school bookings", "Community partnerships"] },
];

// Pricing data
const pricingPlans = [
  {
    name: "Monthly Plan",
    price: "$397",
    period: "/month",
    setup: "+ One-time $1,500 setup fee",
    featured: false,
    badge: null,
    features: [
      "No contract required",
      "Month-to-month billing",
      "Cancel anytime",
      "Unlimited contacts & users",
      "All 8 automation workflows",
      "24/7 live chat support",
      "Unlimited Zoom calls",
    ],
  },
  {
    name: "Annual Plan",
    price: "$3,970",
    period: "/year",
    setup: "+ One-time $1,500 setup fee",
    featured: true,
    badge: "SAVE $794",
    features: [
      "Annual commitment",
      "Best value option",
      "Unlimited contacts & users",
      "All 8 automation workflows",
      "24/7 live chat support",
      "Unlimited Zoom calls",
      "Priority onboarding",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    quote: "It's Not Just a Tool — It's a Growth Engine for our Business. Book More is transforming our booking flow — clients book parties faster because of the automations, and now with Roller integration we close deals smoother. The intuitive interface and smart automation save us hours every week.",
    author: "Matthew",
    role: "FEC Owner",
    stars: 5,
  },
  {
    quote: "Five-Star reviews have skyrocketed. Since implementing the review automation, our number of five-star reviews have skyrocketed. People were always thanking us but never leaving a review. Now they have an easy way to give us a shout out and they're doing so daily.",
    author: "Theresa",
    role: "FEC Operator",
    stars: 5,
  },
  {
    quote: "Our Party Confirmation Process is SO Much More Efficient. It has absolutely cut down on the time our team spends on the hiring process. The chat widget functions make communicating with our customers so much easier and quicker. The team is always quick to answer questions.",
    author: "Rilee",
    role: "Events Manager, FEC",
    stars: 5,
  },
];

// Integration partners
const integrations = [
  { name: "ROLLER Software", badge: "Official Integrated Partner", color: "#E63946", abbr: "ROLLER", desc: "Cloud-based venue management" },
  { name: "CenterEdge Software", badge: "Integration Partner", color: "#2196F3", abbr: "CE", desc: "FEC point-of-sale platform" },
  { name: "PartyWirks", badge: "Integration Partner", color: "#FF6B35", abbr: "PW", desc: "Party booking & management" },
  { name: "TripleSeat", badge: "Integration Partner", color: "#6C63FF", abbr: "TS", desc: "Event sales & management" },
  { name: "Party Center Software", badge: "Integration Partner", color: "#00BFA5", abbr: "PCS", desc: "FEC booking platform" },
];

// FAQ
const faqs = [
  {
    q: "Does FEC Playbook replace my POS or booking software?",
    a: "No. FEC Playbook works alongside your existing POS and booking systems — extending them with automated marketing, sales pipelines, and guest communication without replacing your core operations. No rip-and-replace required.",
  },
  {
    q: "How long does onboarding take?",
    a: "Total onboarding is 4–6 weeks. Timeline depends on A2P compliance approval (up to 2 weeks) and how quickly your team completes the Readiness Checklist. The faster your team completes setup, the faster you see results.",
  },
  {
    q: "What's included in the $1,500 setup fee?",
    a: "The one-time setup fee covers complete onboarding and full system configuration — including two 1-hour launch calls, tech integration setup, platform training, and all workflow customization to your brand.",
  },
  {
    q: "Are there usage costs beyond the subscription?",
    a: "Yes, but they're minimal and transparent. Communication costs (SMS, email, phone) are passed through from carriers with minimal markup. The average cost per completed booking ranges from $0.02 to $0.32 depending on the workflow.",
  },
  {
    q: "What if I'm currently using Patch Retention or another tool?",
    a: "FEC Playbook is built specifically for FECs by FEC operators — not a generic marketing tool patched together for our industry. We offer a complete migration path and can have your system running within weeks.",
  },
  {
    q: "Is there a contract or cancellation fee?",
    a: "Monthly plans are month-to-month with no contracts or cancellation fees. Annual plans offer the best value with a 12-month commitment.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">The Operating System for FECs</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight uppercase">
              Stop Patching.<br />
              <span className="fec-gradient-text">Start Running.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/80 font-semibold mb-4 leading-relaxed">
              FEC Playbook is the all-in-one automation platform built by FEC operators — not outsiders selling software that doesn't fit our industry.
            </p>

            <p className="text-white/60 text-base mb-10 leading-relaxed max-w-2xl">
              Automated marketing, sales pipelines, guest communication, and retention systems — all pre-built, proven, and ready to run. You bring the brand. We bring the playbook.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/fecplaybook/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="fec-btn-primary text-base py-4 px-8 animate-pulse-glow"
              >
                <Phone size={18} />
                Book a Call to Learn More
              </a>
              <button
                onClick={() => document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" })}
                className="fec-btn-outline text-base py-4 px-8"
              >
                See What's in the Playbook
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="flex -space-x-2">
                {["M", "T", "R", "K"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, #00AEEF, #1565C0)` }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-white/50 text-xs mt-0.5">Trusted by 100+ Family Entertainment Centers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/20"></div>
          <ChevronDown size={16} className="text-white/40" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#0D1B3E] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-red-500"></div>
                <span className="section-label text-red-400">The Problem</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
                Stop Patching Platforms<br />
                <span className="text-red-400">to Get a Result.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Don't rely on a patchwork of solutions that weren't built for your business. Most FECs are stitching together 5–10 disconnected tools — and paying the price in missed leads, inconsistent follow-up, and staff burnout.
              </p>

              <div className="space-y-0">
                {[
                  "Leads fall through the cracks because no one follows up fast enough",
                  "Staff misses follow-ups — parties get lost in email, DMs, and voicemail",
                  "Marketing is reactive, last-minute, and inconsistent",
                  "Too many tools, too many logins, too much confusion",
                  "No clear view of what's working or what revenue is at risk",
                  "Generic software that doesn't understand how FECs actually operate",
                ].map((problem, i) => (
                  <div key={i} className="problem-item">
                    <div className="problem-icon">
                      <XCircle size={14} className="text-red-400" />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={ASSETS.birthdayParty}
                  alt="Birthday party at FEC with text message confirmation"
                  className="w-full rounded-lg"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] to-transparent p-6">
                  <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4">
                    <p className="text-[#00AEEF] font-bold text-sm uppercase tracking-wide mb-1">What FEC Playbook Delivers</p>
                    <p className="text-white text-sm">Automated birthday party confirmations, follow-ups, and review requests — all without lifting a finger.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS FEC PLAYBOOK ===== */}
      <section id="platform" className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">What Is FEC Playbook?</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
              One System.<br />
              <span className="fec-gradient-text">Everything Runs.</span>
            </h2>
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-lg p-8">
              <p className="text-white text-lg font-semibold leading-relaxed mb-4">
                FEC Playbook is an all-in-one automation platform designed specifically for Family Entertainment Centers.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                It manages the full guest journey — from first inquiry to repeat visit — using proven systems built by FEC operators. Your POS runs transactions. FEC Playbook runs everything around them.
              </p>
            </div>
          </div>

          {/* Platform Screenshots Tabs */}
          <div className="mt-12">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["Dashboard Overview", "Conversations Inbox", "Birthday Party Pipeline"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wide transition-all ${
                    activeTab === i
                      ? "bg-[#00AEEF] text-white"
                      : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="animate-float">
              {activeTab === 0 && (
                <ScreenshotFrame
                  src={ASSETS.screenshotDashboard}
                  alt="FEC Playbook Dashboard"
                  title="FEC Playbook — Dashboard"
                />
              )}
              {activeTab === 1 && (
                <ScreenshotFrame
                  src={ASSETS.screenshotConversations}
                  alt="FEC Playbook Conversations Inbox"
                  title="FEC Playbook — Conversations"
                />
              )}
              {activeTab === 2 && (
                <ScreenshotFrame
                  src={ASSETS.screenshotPipeline}
                  alt="FEC Playbook Birthday Party Pipeline"
                  title="FEC Playbook — Birthday Party Pipeline"
                />
              )}
            </div>
          </div>

          {/* What it replaces */}
          <div className="mt-20">
            <h3 className="text-2xl font-black uppercase text-center mb-10">
              Stop Logging Into <span className="text-red-400">Six Platforms.</span> Start Running <span className="fec-gradient-text">One.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6">
                <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-4">Instead of Logging Into...</h4>
                <ul className="space-y-2">
                  {["Mailchimp / Constant Contact", "Facebook & Instagram Business Manager", "Google Business Profile", "Twilio / EZ Texting", "Separate reputation management tools", "Spreadsheets & shared inboxes", "Multiple CRM systems"].map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-white/60 text-sm">
                      <XCircle size={14} className="text-red-400 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-lg p-6">
                <h4 className="text-[#00AEEF] font-bold text-sm uppercase tracking-wide mb-4">You Log Into...</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full fec-gradient-bg flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl uppercase">FEC Playbook</p>
                    <p className="text-[#00AEEF] text-sm font-semibold">One login. One workflow. One source of truth.</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {["All guest communications in one inbox", "Email + SMS marketing from one platform", "Sales pipelines built for FEC workflows", "Reputation & review management", "Social media scheduling & posting", "Real-time dashboards & reporting"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-[#00AEEF] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER 1 ===== */}
      <section className="py-16 fec-gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
            Ready to Stop Patching and Start Running?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a 30-minute call with our team and see exactly how FEC Playbook runs your revenue automatically.
          </p>
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1565C0] font-black text-base uppercase tracking-wide py-4 px-10 rounded hover:bg-white/90 transition-all hover:shadow-xl"
          >
            <Phone size={18} />
            Book a Call to Learn More
          </a>
        </div>
      </section>

      {/* ===== WORKFLOWS SECTION ===== */}
      <section id="workflows" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">The Automation Library</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              Eight Workflows.<br />
              <span className="fec-gradient-text">One Complete Revenue System.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every workflow is included in your subscription. Pre-built, tested, and ready to deploy — not a blank canvas you have to build yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflows.map((wf) => (
              <div key={wf.num} className="workflow-card group">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{wf.icon}</span>
                  <span className="text-[#00AEEF]/40 font-black text-sm">{wf.num}</span>
                </div>
                <h3 className="text-white font-black text-sm uppercase leading-tight mb-2">{wf.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{wf.desc}</p>
                <div className="space-y-1 mb-4">
                  {wf.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-1.5">
                      <CheckCircle size={11} className="text-[#00AEEF] flex-shrink-0" />
                      <span className="text-white/60 text-xs">{o}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/8">
                  <span className="text-[#00AEEF] text-xs font-bold">{wf.cost}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/50 text-sm mb-6">Usage costs are passed through at cost — you only pay for what you use.</p>
            <a
              href="https://calendly.com/fecplaybook/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="fec-btn-primary"
            >
              <Phone size={16} />
              See the Full Playbook — Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ===== TEXT CLUB / SMS SECTION ===== */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#00AEEF]"></div>
                <span className="section-label">Text Club & SMS Marketing</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
                Drive Traffic<br />
                <span className="fec-gradient-text">On Demand.</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                The FEC Playbook Text Club sends segmented, timely offers to your customers via SMS — encouraging repeat visits and boosting sales during slower periods. A direct line to your customers that delivers measurable results.
              </p>

              <div className="space-y-4">
                {[
                  { icon: MessageSquare, title: "Birthday Party Reminders", desc: "Automated texts remind families of upcoming parties, reducing no-shows and last-minute cancellations." },
                  { icon: Gift, title: "Text Club Exclusive Offers", desc: "Send monthly coupons and exclusive deals to subscribers who opted in — driving repeat visits automatically." },
                  { icon: RefreshCw, title: "Win-Back Campaigns", desc: "Automatically re-engage guests who haven't visited in 30, 60, or 90 days with personalized incentives." },
                  { icon: Star, title: "Review Request Automation", desc: "After every visit, automatically request a review — capturing 5-star experiences before they walk out the door." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="solution-icon flex-shrink-0">
                      <Icon size={14} className="text-[#00AEEF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={ASSETS.textClub}
                alt="Text Club SMS offer on smartphone"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILT BY FEC OPERATORS ===== */}
      <section id="about" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={ASSETS.fecOperator}
                alt="FEC Operator with analytics dashboard"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#00AEEF]"></div>
                <span className="section-label">Our Story</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
                Built by Operators.<br />
                <span className="fec-gradient-text">Not Outsiders.</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                FEC Playbook was founded by FEC operators who lived the chaos firsthand. We know what it's like to chase party leads in email, miss follow-ups because the team was slammed, and watch competitors gain ground while you're stuck managing six different tools.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                We didn't build this from a boardroom. We built it from the floor of a family entertainment center — and then refined it across dozens of real FEC environments before bringing it to market.
              </p>
              <div className="bg-white/5 border-l-4 border-[#00AEEF] pl-6 py-4 mb-8">
                <p className="text-white font-bold text-lg italic">
                  "Most platforms solve one task. FEC Playbook runs the entire operation."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Industry Insiders", desc: "Built by FEC operators with real experience" },
                  { icon: Shield, label: "Proven Systems", desc: "Tested in high-volume FEC environments" },
                  { icon: Target, label: "FEC-Specific", desc: "Not generic software forced to fit" },
                  { icon: TrendingUp, label: "Results-Driven", desc: "Every workflow shows its business impact" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-white/5 rounded-lg p-4">
                    <Icon size={20} className="text-[#00AEEF] mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">{label}</h4>
                    <p className="text-white/50 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPETITOR COMPARISON SECTION ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="section-label text-yellow-400">Why FEC Playbook Wins</span>
              <div className="h-px w-12 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              Stop Settling for<br />
              <span className="text-yellow-400">Generic Tools.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Platforms like Patch Retention and Leap360 were not built for Family Entertainment Centers. They're generic marketing tools patched together and sold to our industry — without the deep operational knowledge that makes the difference.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-white/40 text-xs uppercase tracking-wide font-bold w-1/4">Capability</th>
                  <th className="py-4 px-6 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <div className="bg-[#00AEEF]/20 border border-[#00AEEF]/40 rounded px-3 py-1">
                        <span className="text-[#00AEEF] font-black text-sm uppercase tracking-wide">FEC Playbook</span>
                      </div>
                      <span className="text-white/30 text-xs">Built for FECs</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <div className="bg-white/5 border border-white/10 rounded px-3 py-1">
                        <span className="text-white/50 font-bold text-sm uppercase tracking-wide">Patch Retention</span>
                      </div>
                      <span className="text-white/30 text-xs">Generic tool</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <div className="bg-white/5 border border-white/10 rounded px-3 py-1">
                        <span className="text-white/50 font-bold text-sm uppercase tracking-wide">Leap360</span>
                      </div>
                      <span className="text-white/30 text-xs">Generic platform</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Built by FEC Operators", true, false, false],
                  ["Pre-built FEC Workflows", true, false, false],
                  ["Birthday Party Pipeline", true, false, false],
                  ["ROLLER / CenterEdge Integration", true, false, false],
                  ["Text Club & SMS Marketing", true, true, true],
                  ["Reputation Management", true, true, true],
                  ["Season Pass Lifecycle", true, false, false],
                  ["FEC-Specific Onboarding", true, false, false],
                  ["Transparent Usage Pricing", true, false, false],
                  ["Unlimited Users & Contacts", true, false, false],
                ].map(([feature, fec, patch, leap], i) => (
                  <tr key={i} className={`border-t border-white/6 ${i % 2 === 0 ? 'bg-white/1' : ''}`}>
                    <td className="py-4 px-6 text-white/70 text-sm font-medium">{feature as string}</td>
                    <td className="py-4 px-6 text-center">
                      {fec ? (
                        <CheckCircle size={18} className="text-[#00AEEF] mx-auto" />
                      ) : (
                        <XCircle size={18} className="text-white/20 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {patch ? (
                        <CheckCircle size={18} className="text-white/30 mx-auto" />
                      ) : (
                        <XCircle size={18} className="text-red-500/60 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {leap ? (
                        <CheckCircle size={18} className="text-white/30 mx-auto" />
                      ) : (
                        <XCircle size={18} className="text-red-500/60 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-yellow-400/5 border border-yellow-400/20 rounded-lg p-6">
            <p className="text-yellow-400/80 text-sm text-center leading-relaxed">
              <strong className="text-yellow-400">Don't rely on a patchwork of solutions</strong> that weren't designed for your business. FEC Playbook was built from the ground up by operators who know what a birthday party pipeline actually looks like — not consultants who've never run a FEC.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://calendly.com/fecplaybook/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="fec-btn-primary"
            >
              <Phone size={16} />
              See Why FEC Operators Choose FEC Playbook
            </a>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS SECTION ===== */}
      <section id="integrations" className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">Integration Partners</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              Works With the Systems<br />
              <span className="fec-gradient-text">You Already Use.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              FEC Playbook connects with your existing POS and booking platforms — extending them with automation, marketing, and follow-up. No rip-and-replace. No disruption.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {integrations.map((partner) => (
              <div key={partner.name} className="integration-logo-card flex-col gap-3 text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-sm mx-auto shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${partner.color}, ${partner.color}99)`, boxShadow: `0 4px 20px ${partner.color}40` }}
                >
                  {partner.abbr}
                </div>
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide leading-tight">{partner.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{partner.desc}</p>
                </div>
                <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-wide">{partner.badge}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="bg-white/3 border border-white/8 rounded-lg p-6 text-center">
            <p className="text-white/40 text-xs leading-relaxed max-w-3xl mx-auto">
              <strong className="text-white/60">Disclaimer:</strong> The brands represented (ROLLER Software, CenterEdge Software, PartyWirks, TripleSeat, Party Center Software) do not endorse FEC Playbook. All logos and trademarks are the property of their respective organizations and are not owned by or directly affiliated with FEC Playbook. Logos are used solely to indicate integration compatibility and data import capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">What FEC Operators Say</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
              Built. Tested.<br />
              <span className="fec-gradient-text">Proven in Real Centers.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex text-yellow-400 text-lg mb-4">
                  {"★".repeat(t.stars)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)" }}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.author}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">Simple, Transparent Pricing</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              One Flat Subscription.<br />
              <span className="fec-gradient-text">Everything Included.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              No hidden fees. No per-user charges. Unlimited contacts, unlimited users, all 8 workflows — one price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`pricing-card relative ${plan.featured ? "featured" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00AEEF] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-white font-black text-lg uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-white/50 text-base">{plan.period}</span>
                </div>
                <p className="text-white/40 text-sm mb-6">{plan.setup}</p>
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
                  className={`block text-center py-3 px-6 rounded font-black text-sm uppercase tracking-wide transition-all ${
                    plan.featured
                      ? "fec-gradient-bg text-white hover:opacity-90"
                      : "border border-white/20 text-white hover:border-[#00AEEF] hover:text-[#00AEEF]"
                  }`}
                >
                  Get Started — Book a Call
                </a>
              </div>
            ))}
          </div>

          {/* Usage Costs */}
          <div className="max-w-3xl mx-auto bg-white/3 border border-white/8 rounded-lg p-8">
            <h3 className="text-white font-black text-lg uppercase mb-2 text-center">Usage-Based Costs</h3>
            <p className="text-white/50 text-sm text-center mb-6">Beyond your subscription, communication costs are passed through at cost with minimal markup.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Email Sending", cost: "$0.0014/email" },
                { label: "SMS (per segment)", cost: "$0.0228/segment" },
                { label: "Email Verification", cost: "$0.005/verification" },
                { label: "Avg. per Booking", cost: "$0.09–$0.32" },
              ].map(({ label, cost }) => (
                <div key={label} className="text-center">
                  <p className="text-[#00AEEF] font-black text-lg">{cost}</p>
                  <p className="text-white/40 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs text-center mt-6">
              Real-time dashboard tracking. Advance notice of fee changes. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER 2 ===== */}
      <section className="py-20 cta-section">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="section-label block mb-4">Ready to Run the Playbook?</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
            See How the Playbook<br />
            <span className="fec-gradient-text">Runs Your Center — Automatically.</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Book a 30-minute strategy call with our team. We'll show you exactly which workflows apply to your center and what results you can expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/fecplaybook/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="fec-btn-primary text-base py-4 px-10 animate-pulse-glow"
            >
              <Phone size={18} />
              Book a Call to Learn More
            </a>
            <button
              onClick={() => document.querySelector("#workflows")?.scrollIntoView({ behavior: "smooth" })}
              className="fec-btn-outline text-base py-4 px-10"
            >
              Explore the Playbook
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-white/30 text-sm mt-6">No commitment required. 30-minute strategy call.</p>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="section-label">Frequently Asked Questions</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-4xl font-black uppercase">
              Common <span className="fec-gradient-text">Questions.</span>
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
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[#00AEEF] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-white/40 flex-shrink-0" />
                  )}
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

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 fec-gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight mb-4">
            You Bring the Brand.
          </h2>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight mb-8">
            We Bring the Playbook.
          </h2>
          <p className="text-white/80 text-xl mb-10">
            The operating strategy behind successful Family Entertainment Centers — built, tested, and ready to run.
          </p>
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#1565C0] font-black text-lg uppercase tracking-wide py-5 px-12 rounded hover:bg-white/90 transition-all hover:shadow-2xl"
          >
            <Phone size={20} />
            Book a Call to Learn More
          </a>
          <p className="text-white/60 text-sm mt-4">Free 30-minute strategy call. No commitment required.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
