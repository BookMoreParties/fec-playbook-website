/**
 * FEC Playbook — Features Page
 * Design: Bold Sports/Action Brand — dark navy/black bg, FEC Cyan (#00AEEF) + Cobalt Blue (#1565C0) accents
 * Montserrat Black headings, clean feature cards with icons, gradient accents, high contrast
 */

import { Link } from "wouter";
import { Phone, Mail, MessageSquare, Globe, Filter, GitBranch, Send, Share2, BarChart2, Bot, Star, Gift, Zap, ArrowRight, CheckCircle, Users, Calendar, TrendingUp, Eye, HeartHandshake, ClipboardList } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";

const BOOKING_URL = "/book-a-demo";

const features = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Unified Inbox",
    subtitle: "Every Conversation. One Place.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Conversational and automated SMS, Email, webchat, and social DMs all in one unified inbox. Your team never misses a lead, booking inquiry, or customer message — regardless of where it came from.",
    bullets: [
      "Two-way SMS & MMS conversations",
      "Email inbox with full thread history",
      "Facebook & Instagram DM integration",
      "Live website chat widget",
      "Google Business Messages",
      "Team assignment & internal notes",
    ],
    tag: "Communication Hub",
  },
  {
    id: "02",
    icon: Globe,
    title: "Website Form Builder & Funnel Page Builder",
    subtitle: "Capture Leads. Convert Visitors.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "Create custom landing pages and build forms that put contacts directly into the platform. No third-party tools needed — design high-converting party inquiry pages, group event funnels, and membership sign-up flows all in one place.",
    bullets: [
      "Drag-and-drop landing page builder",
      "Custom form builder with conditional logic",
      "Contacts auto-populate into CRM",
      "Birthday party inquiry funnels",
      "Group & corporate event landing pages",
      "A/B testing for page variants",
    ],
    tag: "Lead Capture",
  },
  {
    id: "03",
    icon: GitBranch,
    title: "Sales Pipeline & Customer Journey Management",
    subtitle: "From Inquiry to Rebook.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Manage your party and event sales with visual kanban pipelines built specifically for FEC workflows. Track every birthday party, group booking, and corporate event from first inquiry through fulfillment and follow-up.",
    bullets: [
      "Pre-built birthday party pipeline",
      "Group & corporate event pipeline",
      "Drag-and-drop opportunity management",
      "Automated stage-based follow-ups",
      "Revenue forecasting by pipeline",
      "Integration with ROLLER, PartyWirks & more",
    ],
    tag: "Sales Management",
  },
  {
    id: "04",
    icon: Mail,
    title: "Automated Email Marketing",
    subtitle: "Set It. Let It Run.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "30/60/90-day bounce-back campaigns, birthday drip sequences, and post-visit nurture flows — all pre-built and ready to deploy. Import your existing email templates with ease and customize them to match your brand.",
    bullets: [
      "30/60/90-day bounce-back automation",
      "Birthday drip campaign sequences",
      "Post-visit follow-up flows",
      "Import existing email templates",
      "Drag-and-drop email builder",
      "Open/click rate reporting",
    ],
    tag: "Email Automation",
  },
  {
    id: "05",
    icon: Share2,
    title: "Social Media Planner",
    subtitle: "Plan. Post. Automate.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Pre-plan your social posts, Reels, and Stories across all platforms from one calendar. Automate your first comment with each post, manage and automate comment replies, and keep your social presence consistent without the daily grind.",
    bullets: [
      "Multi-platform post scheduling",
      "Instagram Reels & Stories support",
      "Auto first-comment on every post",
      "Automated comment reply rules",
      "Content calendar view",
      "Facebook & Instagram management",
    ],
    tag: "Social Media",
  },
  {
    id: "06",
    icon: BarChart2,
    title: "Social Media Ads Manager",
    subtitle: "Run Ads. Track Results.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "Create and manage your Meta, Google, and LinkedIn ads directly within FEC Playbook. No more switching between ad platforms — build campaigns, set budgets, and track performance all from one dashboard.",
    bullets: [
      "Meta (Facebook & Instagram) Ads",
      "Google Ads campaign management",
      "LinkedIn Ads integration",
      "Lead form ad integration",
      "Campaign performance dashboard",
      "Budget and spend tracking",
    ],
    tag: "Paid Advertising",
  },
  {
    id: "07",
    icon: Bot,
    title: "AI Voice & Chat Bots",
    subtitle: "Always On. Always Answering.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Use AI voice assistants to answer calls, provide basic information, and transfer calls to your team. Deploy AI chat on your website so customers get instant answers from your center's knowledgebase — 24/7, no staff required.",
    bullets: [
      "AI voice assistant for inbound calls",
      "Call transfer to live staff",
      "Website AI chat widget",
      "Custom knowledgebase training",
      "FAQ automation",
      "After-hours coverage",
    ],
    tag: "AI Automation",
  },
  {
    id: "08",
    icon: Star,
    title: "Reviews Manager",
    subtitle: "More Stars. Less Effort.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "Automatically request and respond to Google reviews after every visit. Smart routing encourages guests who had a great time to leave a public review, while guests with concerns are directed to send private feedback instead — protecting your reputation.",
    bullets: [
      "Automated post-visit review requests",
      "Smart routing: happy guests → Google",
      "Unhappy guests → private feedback",
      "AI-powered review response drafts",
      "Review performance dashboard",
      "Google Business Profile integration",
    ],
    tag: "Reputation Management",
  },
  {
    id: "09",
    icon: Gift,
    title: "Loyalty Programs & Text Club",
    subtitle: "Reward Visits. Drive Rebooking.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Automatically provide rewards based on frequency of visits and encourage repeat visits via Text Club. Build a permission-based SMS subscriber list and send targeted offers, birthday specials, and event announcements directly to guests' phones.",
    bullets: [
      "Visit-frequency based rewards",
      "Text Club opt-in keyword campaigns",
      "Targeted SMS offer broadcasts",
      "Birthday month special automations",
      "Seasonal promotion campaigns",
      "Subscriber list growth tools",
    ],
    tag: "Loyalty & Retention",
  },
  {
    id: "10",
    icon: Eye,
    title: "Website Pixel & Behavioral Tracking",
    subtitle: "Know What Guests Are Looking At.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "Track guest page visits and trigger smart automations based on browsing behavior. If a guest books a birthday party but also visits your groups page, automatically send them a nudge about your group offerings — turning passive browsers into active buyers.",
    bullets: [
      "Page visit tracking pixel",
      "Behavior-triggered automations",
      "Cross-sell based on browsing",
      "Contact-level page history",
      "Retargeting audience building",
      "Anonymous visitor identification",
    ],
    tag: "Smart Tracking",
  },
  {
    id: "11",
    icon: HeartHandshake,
    title: "Donation Request Management",
    subtitle: "Turn Donation Asks Into Revenue Opportunities.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Every donation request that hits your inbox is a warm lead for a fundraiser event or group booking. FEC Playbook automatically routes incoming donation requests into a managed pipeline — so your team can respond fast, qualify the opportunity, and convert it into a paid fundraiser night or group event instead of a free giveaway.",
    bullets: [
      "Dedicated donation request intake pipeline",
      "Automated acknowledgment & qualification sequence",
      "Convert requests into fundraiser event proposals",
      "Group event upsell automation for non-profits & schools",
      "Follow-up sequences for unresponsive requestors",
      "Track conversion rate from request to booked event",
    ],
    tag: "Fundraiser & Group Sales",
  },
  {
    id: "12",
    icon: ClipboardList,
    title: "Hiring Pipeline Management",
    subtitle: "Hire Smarter. Staff Better. Stop Guessing.",
    color: "#1565C0",
    gradient: "from-[#1565C0]/20 to-[#1565C0]/5",
    border: "border-[#1565C0]/30",
    description:
      "Stop wasting time interviewing the wrong people. FEC Playbook's hiring pipeline manages your entire applicant flow — from application intake through auditions and interviews — and integrates with our partner Ferret Personality to automatically filter candidates into the roles they're best suited for based on their personality profile. Only the right-fit applicants make it to your interview chair.",
    bullets: [
      "Applicant intake pipeline with automated acknowledgment",
      "Ferret Personality integration for role-fit filtering",
      "Automated audition & interview scheduling",
      "Stage-based applicant progression tracking",
      "Disqualify & archive non-fitting candidates automatically",
      "Offer letter & onboarding sequence automation",
    ],
    tag: "Hiring & Staffing",
    partnerNote: "Powered in partnership with Ferret Personality",
  },
  {
    id: "13",
    icon: Users,
    title: "100+ Prebuilt FEC-Specific Systems",
    subtitle: "Built for Your Business. Ready on Day One.",
    color: "#00AEEF",
    gradient: "from-[#00AEEF]/20 to-[#00AEEF]/5",
    border: "border-[#00AEEF]/30",
    description:
      "Every automation, workflow, email sequence, and pipeline was built by FEC operators who know exactly how your business runs. Not generic templates — these are real systems tested in real Family Entertainment Centers.",
    bullets: [
      "Birthday party inquiry to fulfillment",
      "Group & corporate event workflows",
      "Membership & season pass campaigns",
      "School & field trip outreach sequences",
      "Fundraising & community programs",
      "Text Club offer campaigns",
    ],
    tag: "Pre-Built Systems",
  },
];

const additionalCapabilities = [
  { icon: Calendar, label: "Appointment & Calendar Booking" },
  { icon: TrendingUp, label: "Revenue & Reporting Dashboards" },
  { icon: Phone, label: "Call Tracking & Recording" },
  { icon: Send, label: "SMS Broadcast Campaigns" },
  { icon: Zap, label: "Trigger-Based Automations" },
  { icon: Users, label: "Contact CRM & Segmentation" },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEOMeta
        title="Platform Features — Automation, CRM & SMS for Family Entertainment Centers"
        description="Explore FEC Playbook's full platform: unified inbox, birthday automation, text clubs, reputation management, pipelines, and 100+ pre-built workflows built for FECs."
        path="/features"
      />
      <Navigation />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D1B2A] to-[#0A0A0A]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, #00AEEF 0%, transparent 50%), radial-gradient(circle at 75% 50%, #1565C0 0%, transparent 50%)`,
          }}
        />
        {/* Circuit grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest">Platform Features</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none mb-6 text-white">
            EVERYTHING YOUR<br />
            <span style={{ color: "#00AEEF" }}>FEC NEEDS.</span><br />
            NOTHING IT DOESN'T.
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            FEC Playbook is a complete operating system — not a collection of disconnected tools. Every feature below is included in your subscription, pre-configured for Family Entertainment Centers, and ready to run from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0099D6] text-white font-black uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,174,239,0.4)]"
            >
              <Phone className="w-5 h-5" />
              Book a Demo Call
            </a>
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#00AEEF]/50 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200"
            >
              See the Playbooks
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature count bar */}
      <section className="bg-[#00AEEF] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: "13+", label: "Core Feature Modules" },
              { value: "100+", label: "Pre-Built Automations" },
              { value: "1", label: "Login. One Platform." },
              { value: "0", label: "Extra Tools Needed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-white/80 text-sm font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.id}
                  className={`relative rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.gradient} overflow-hidden`}
                >
                  {/* Number watermark */}
                  <div
                    className="absolute top-4 right-6 text-8xl font-black opacity-10 leading-none select-none"
                    style={{ color: feature.color }}
                  >
                    {feature.id}
                  </div>

                  <div className={`relative p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                    {/* Left: Content */}
                    <div className={`flex flex-col ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                      {/* Tag */}
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4"
                        style={{ color: feature.color, borderColor: `${feature.color}40`, backgroundColor: `${feature.color}10` }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {feature.tag}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight mb-2">
                        {feature.title}
                      </h2>
                      <p className="font-bold mb-4" style={{ color: feature.color }}>
                        {feature.subtitle}
                      </p>
                      <p className="text-white/70 text-base leading-relaxed mb-6 flex-1">
                        {feature.description}
                      </p>

                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:gap-3 mt-auto"
                        style={{ color: feature.color }}
                      >
                        See This in Action
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Right: Bullet list */}
                    <div className={`bg-black/30 rounded-xl p-6 border border-white/5 flex flex-col ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">What's Included</p>
                      <ul className="space-y-0 flex-1">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                            <CheckCircle
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: feature.color }}
                            />
                            <span className="text-white/80 text-sm leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {(feature as any).partnerNote && (
                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: feature.color }}>⚡</span>
                          <span className="text-white/50 text-xs italic">{(feature as any).partnerNote}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Plus These Additional <span style={{ color: "#00AEEF" }}>Capabilities</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every subscription includes these additional tools — no add-ons, no upsells.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#00AEEF]/40 transition-colors"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-[#00AEEF]" />
                  <p className="text-white/70 text-xs font-semibold leading-tight">{cap.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prebuilt systems callout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-[#00AEEF]/20 bg-gradient-to-br from-[#0D1B2A] to-[#0A0A0A] p-10 sm:p-14 text-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 0%, #00AEEF 0%, transparent 60%)`,
              }}
            />
            <div className="relative">
              <div className="text-6xl sm:text-8xl font-black text-[#00AEEF] mb-2">100+</div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
                Pre-Built FEC-Specific Automations
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                Every automation was built and tested by FEC operators — not generic marketing templates. These are real workflows running in real Family Entertainment Centers right now.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  "Birthday Party Workflows",
                  "Group & Corporate Events",
                  "Membership Campaigns",
                  "Text Club Offers",
                  "Review Request Flows",
                  "Bounce-Back Sequences",
                  "School & Field Trip Outreach",
                  "Fundraising Programs",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-lg px-3 py-2"
                  >
                    <p className="text-[#00AEEF] text-xs font-bold text-center">{item}</p>
                  </div>
                ))}
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0099D6] text-white font-black uppercase tracking-wider px-10 py-4 rounded-lg transition-all duration-200 shadow-[0_0_30px_rgba(0,174,239,0.4)]"
              >
                <Phone className="w-5 h-5" />
                Book a Demo — See It All Live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00AEEF] to-[#1565C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white mb-4">
            Ready to Run Your FEC on a Playbook?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a 30-minute call with our team. We'll walk you through the platform, show you the pre-built systems for your specific venue type, and answer every question you have.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#00AEEF] font-black uppercase tracking-wider px-10 py-4 rounded-lg hover:bg-white/90 transition-all duration-200 shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Book a Free Demo Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
