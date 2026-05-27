// Design: FEC Playbook — Dark Navy (#0A0A0A / #0D1B3E), Cyan (#00AEEF), White
// Typography: Montserrat (display/headings), system sans (body)
// Layout: Full-width sections, left-sidebar step cards, timeline strip
// Style: Sales-call onboarding overview — detailed, structured, professional

import { useState } from "react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/PrimaryHorizontal-B--wqkJKrHtKvMBuHmqCvFf8.webp";

const timelineSteps = [
  { day: "DAY 0", label: "SIGNUP + INTAKE SURVEY + MESSAGE GENERATION" },
  { day: "DAYS 2–5", label: "CONNECT SYSTEMS + ORIENT TEAM" },
  { day: "DAYS 7–14", label: "TRAIN PIPELINES + INSTALL FORMS" },
  { day: "DAYS 14–21", label: "ACTIVATE MARKETING + ADVANCED TOOLS" },
  { day: "30 DAYS", label: "OPTIMIZE AFTER LAUNCH" },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-300">
      <svg className="w-4 h-4 mt-0.5 text-[#00AEEF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-5" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function SectionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-bold tracking-[0.15em] text-[#00AEEF] uppercase mb-3">{title}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {items.map((item) => <CheckItem key={item} text={item} />)}
      </ul>
    </div>
  );
}

function StepCard({
  stepNum,
  tag,
  title,
  timing,
  attendees,
  goal,
  sections,
  presenterNote,
}: {
  stepNum: string;
  tag: string;
  title: string;
  timing: string;
  attendees?: string;
  goal: string;
  sections: { title: string; items: string[] }[];
  presenterNote: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-6 bg-[#0D1B3E]/60">
      {/* Step header */}
      <div className="flex items-start justify-between gap-4 p-6 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-5">
          {/* Step badge */}
          <div className="flex-shrink-0">
            <span className="inline-block bg-[#00AEEF] text-[#0A0A0A] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-2">
              STEP {stepNum}
            </span>
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mt-2">
              <svg className="w-5 h-5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#00AEEF] uppercase mb-1">{tag}</p>
            <h3 className="text-xl font-black text-white uppercase leading-tight mb-2">{title}</h3>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {timing}
              </span>
              {attendees && (
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M15 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  {attendees}
                </span>
              )}
            </div>
          </div>
        </div>
        <button className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
          <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="px-6 pb-6">
          {/* Goal */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-5">
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-1">GOAL</p>
            <p className="text-white font-semibold text-sm">{goal}</p>
          </div>

          {/* Content sections */}
          {sections.map((s) => (
            <SectionBlock key={s.title} title={s.title} items={s.items} />
          ))}

          {/* Presenter note */}
          <div className="mt-4 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4">
            <p className="text-sm text-slate-200">
              <span className="font-bold text-[#00AEEF]">Presenter note: </span>
              {presenterNote}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function InterstitialBanner({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden relative bg-gradient-to-r from-[#0D1B3E] to-[#0a1628] border border-[#00AEEF]/20 p-8 md:p-12">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #00AEEF 0%, transparent 60%)" }} />
      <p className="text-[10px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-3">{tag}</p>
      <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-3">{title}</h3>
      <p className="text-slate-400 text-sm max-w-xl">{subtitle}</p>
    </div>
  );
}

export default function GetReady() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Montserrat',sans-serif]">

      {/* ── Minimal nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <img src={LOGO_URL} alt="FEC Playbook" className="h-8 w-auto" />
          </Link>
          <a
            href="#step-01"
            className="text-xs font-bold tracking-widest uppercase text-[#00AEEF] hover:text-white transition-colors"
          >
            View Steps ↓
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-3xl" />
        </div>
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300AEEF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#00AEEF] uppercase mb-6">FEC Playbook — Client Onboarding Overview</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            <span className="text-white">READY TO</span><br />
            <span className="text-[#00AEEF]">PUSH PLAY?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            FEC Playbook transforms your family entertainment center from disconnected systems and manual follow-up into one fully connected marketing, sales, communication, reputation, and guest experience engine.
          </p>
          <a
            href="#step-01"
            className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#0A0A0A] font-black text-sm tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-white transition-colors"
          >
            LET'S GET STARTED
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00AEEF]/5">
            <div className="bg-[#0D1B3E] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <img src={LOGO_URL} alt="FEC Playbook" className="h-5 w-auto" />
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Onboarding command center</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#00AEEF]/60" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="bg-[#0a1628] p-6 min-h-[200px] flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {[
                  { label: "Active Pipelines", value: "6", color: "#00AEEF" },
                  { label: "Automations Live", value: "100+", color: "#00AEEF" },
                  { label: "Avg. Launch Time", value: "7–21d", color: "#00AEEF" },
                  { label: "Support After Launch", value: "∞", color: "#00AEEF" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline strip ── */}
      <section className="bg-[#0D1B3E]/40 border-y border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-2 mb-8">
            <div className="w-8 h-0.5 bg-[#00AEEF] mt-2.5 flex-shrink-0" />
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase">Time Line</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                MOST CLIENTS<br />
                <span className="text-[#00AEEF]">LAUNCH IN</span><br />
                7–21 DAYS.
              </h2>
            </div>
            <div className="space-y-2">
              {timelineSteps.map((step, i) => (
                <div key={step.day} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-[10px] font-black text-[#00AEEF] tracking-wider uppercase">{step.day}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-2 h-2 rounded-full bg-[#00AEEF] flex-shrink-0" />
                    <div className="flex-1 h-px bg-white/10" />
                    <p className="text-xs text-slate-300 font-semibold text-right">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-400 max-w-3xl leading-relaxed">
            The pace of onboarding depends primarily on client responsiveness, platform access, messaging approvals, and A2P verification timing. While A2P approval can occasionally take up to two weeks, most clients are fully connected and progressing through onboarding within just a few business days.
          </p>
        </div>
      </section>

      {/* ── Steps section ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#00AEEF]" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase">The Client Onboarding Process</p>
              <div className="w-8 h-0.5 bg-[#00AEEF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
              A GUIDED PATH FROM<br />
              <span className="text-[#00AEEF]">SETUP TO GROWTH.</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              As operators we're here to ensure you get the most out of your system.
            </p>
          </div>

          {/* Step 01 */}
          <div id="step-01">
            <StepCard
              stepNum="01"
              tag="Signup + Survey"
              title="Client Signup & Intake Survey"
              timing="Day 0 · Completed at signup"
              attendees="Client + FECPB"
              goal="Gather everything needed to begin building the client's branded FEC Playbook environment."
              sections={[
                {
                  title: "Client Completes",
                  items: [
                    "Service agreement/payment",
                    "Intake Survey",
                    "Business & brand information",
                    "Voice/tone preferences",
                    "Core attractions & offerings",
                    "Sales priorities",
                    "Event types offered",
                    "Promotions currently used",
                    "Links to website & social media",
                    "Logo uploads & branding assets",
                    "Team contacts",
                    "Website manager/developer contact information",
                    "Social media manager contact information",
                    "Website/social media access details",
                  ],
                },
                {
                  title: "FECPB Team Begins and Uses This Information To",
                  items: [
                    "Platform setup",
                    "Brand review",
                    "Messaging generation",
                    "Pipeline configuration",
                    "Reputation management preparation",
                    "Website analysis preparation",
                    "Generate branded snippet messaging",
                    "Generate pipeline messaging",
                    "Generate trigger link messaging",
                    "Configure reputation management responses",
                    "Prepare onboarding recommendations",
                  ],
                },
                {
                  title: "Deliverables Prepared by FECPB",
                  items: [
                    "Pre-written snippet library",
                    "Pipeline automation messaging",
                    "Trigger links",
                    "Website automation readiness audit",
                  ],
                },
              ]}
              presenterNote="This step gives FEC Playbook the brand, team, website, sales, and operational context needed to move quickly."
            />
          </div>

          {/* Interstitial 1 */}
          <InterstitialBanner
            tag="Messaging Example"
            title="GUEST-READY COMMUNICATION TO ELIMINATE OPERATIONAL PAIN POINTS"
            subtitle="Branded text examples help your team see how follow-up, confirmations, and guest messaging will feel once the system is active."
          />

          {/* Step 02 */}
          <StepCard
            stepNum="02"
            tag="Connect Systems + Orient Team"
            title="Tech Integration & Orientation Call"
            timing="Days 2–5 · 60–90 minutes"
            attendees="Client + FEC Playbook"
            goal="Connect systems, ensure compliance, and introduce the platform."
            sections={[
              {
                title: "Required Attendees",
                items: [
                  "Website manager/developer",
                  "Social media manager",
                  "Key operations manager or key operational leaders",
                  "Event/sales manager",
                  "Primary platform users",
                ],
              },
              {
                title: "Platform Orientation",
                items: [
                  "General overview of FEC Playbook",
                  "Understanding the Hub structure",
                  "Review user permissions & access",
                  "Walk through the navigation of the system",
                ],
              },
              {
                title: "Tech Integrations",
                items: [
                  "Connect Google Business Profile",
                  "Connect Facebook/Instagram",
                  "Connect Instagram messaging",
                  "Connect messaging channels",
                  "Connect email services",
                  "Connect phone numbers",
                  "Configure phone/email systems",
                  "Configure domain/DNS settings if needed",
                  "Configure POS integrations and data routing",
                  "Review POS data fields and event data structure",
                  "Verify POS data routing",
                  "Configure mail parser forwarding if applicable",
                  "Verify reservation/order data is flowing correctly into FEC Playbook",
                  "Begin A2P compliance setup and submission",
                ],
              },
              {
                title: "Website & Compliance Review",
                items: [
                  "The website manager/developer MUST attend this call",
                  "Review required A2P compliance language",
                  "Identify form placement requirements",
                  "Review form placement strategy",
                  "Review website automation readiness",
                  "Audit lead capture and website conversion opportunities",
                  "Review missing operational information on the website",
                  "Provide recommended website improvements and best-practice recommendations",
                ],
              },
              {
                title: "Website Best Practices Analysis Examples",
                items: [
                  "Donation request forms",
                  "Contact forms",
                  "Group inquiry forms",
                  "Party lead forms",
                  "Career forms",
                  "FAQ improvements",
                  "Event detail visibility",
                  "CTA placement",
                  "Pricing clarity",
                  "Attraction descriptions",
                  "Party package visibility",
                  "Mobile responsiveness",
                  "Conversion opportunities",
                ],
              },
              {
                title: "Initial Platform Training and Immediate Activation",
                items: [
                  "Conversation Inbox",
                  "Social Media Planner and social media tools",
                  "Reputation Management",
                  "Review Responses",
                  "Internal Notes & Tagging",
                  "Team Notifications",
                  "Social posting workflow",
                  "Launch review request system",
                  "Configure competitor tracking",
                  "Configure AI-assisted review responses",
                  "Begin reputation monitoring immediately",
                ],
              },
              {
                title: "Messaging Review Access and Client Action Items",
                items: [
                  "Clients receive access to review snippets, trigger links, pipeline automations, pipeline messaging, text messaging, and text automations",
                  "The majority of messaging is pre-written and branded by the FECPB team to dramatically expedite setup and launch timelines",
                  "Client reviews and approves generated messaging",
                  "Client completes A2P verification requirements and any remaining A2P requirements",
                  "Client submits any requested revisions",
                ],
              },
            ]}
            presenterNote="A2P approval is a key dependency. Most approvals are received within a few business days, though approval can occasionally take up to two weeks."
          />

          {/* Step 03 */}
          <StepCard
            stepNum="03"
            tag="Train Pipelines + Install Lead Forms"
            title="Sales Pipeline Training & Activation"
            timing="Days 7–14 · 60–90 minutes"
            attendees="Client + FEC Playbook"
            goal="Train the team on sales pipeline usage, activate sales automations, and install website lead capture so inquiries flow into FEC Playbook."
            sections={[
              {
                title: "Prerequisites",
                items: [
                  "Approved messaging received",
                  "A2P approval complete or near completion",
                ],
              },
              {
                title: "Required Attendees",
                items: [
                  "Website manager/developer",
                  "Sales/event team",
                  "Managers using pipelines daily",
                  "Key operational users",
                ],
              },
              {
                title: "Train on Pipeline Usage",
                items: [
                  "Opportunities vs Contacts",
                  "Pipeline movement",
                  "Manual vs automated stages",
                  "Notes & tasks",
                  "Trigger links",
                  "Understanding workflow-generated messaging",
                  "Smart Lists",
                  "Follow-up expectations",
                  "Lead ownership",
                  "Pipeline filtering & organization",
                ],
              },
              {
                title: "Activate Sales Automations",
                items: [
                  "Party Sales Pipeline",
                  "Group Sales Pipeline",
                  "Fundraiser Pipeline",
                  "Donation Pipeline",
                  "Corporate Event Pipeline",
                ],
              },
              {
                title: "Live Website Form Installation",
                items: [
                  "The website manager/developer MUST attend this call so forms can be installed live during training",
                  "Install party inquiry forms",
                  "Install group inquiry forms",
                  "Install donation forms",
                  "Install contact forms",
                  "Install lead capture forms",
                  "Replace direct customer-facing email addresses where appropriate",
                  "Connect forms to automation workflows",
                  "Verify lead routing into Conversation Inbox",
                  "Test automation functionality live",
                ],
              },
              {
                title: "Automated Marketing Messaging Review and Client Action Items",
                items: [
                  "Birthday campaigns",
                  "Winback campaigns",
                  "Season pass campaigns",
                  "Holiday campaigns",
                  "Retention campaigns",
                  "Promotional campaign messaging",
                  "Client reviews and approves campaigns following the call",
                ],
              },
            ]}
            presenterNote="This step turns prepared messaging and workflows into active sales pipelines and connected website lead capture."
          />

          {/* Interstitial 2 */}
          <InterstitialBanner
            tag="Automation Example"
            title="OFFERS AND CAMPAIGNS BECOME AUTOMATED"
            subtitle="As pipelines and lead forms come online, the same system supports marketing moments like text clubs, seasonal promotions, and retention campaigns."
          />

          {/* Step 04 */}
          <StepCard
            stepNum="04"
            tag="Marketing Activation + Advanced Tools"
            title="Marketing Automation & Advanced Features Training"
            timing="Days 14–21 · 60–90 minutes"
            attendees="Client + FEC Playbook"
            goal="Activate retention marketing and advanced automation tools."
            sections={[
              {
                title: "Days 10–18: Marketing Approval & Final Setup",
                items: [
                  "Client reviews marketing messaging",
                  "Client submits final revisions",
                  "Client approves campaigns for activation",
                  "FECPB finalizes campaigns",
                  "FECPB configures advanced automations",
                  "FECPB prepares advanced feature training",
                ],
              },
              {
                title: "Train on Marketing Automations",
                items: [
                  "Campaign management",
                  "Smart Lists",
                  "Email campaigns",
                  "Text campaigns",
                  "Trigger links",
                  "Countdown timers",
                  "Campaign statistics",
                  "Campaign reporting",
                  "Social scheduling",
                  "Promotional planning",
                ],
              },
              {
                title: "Activate Marketing Automations",
                items: [
                  "Birthday drip campaigns",
                  "Lapsed guest campaigns",
                  "Holiday promotions",
                  "Season pass renewals",
                  "Bounce-back campaigns",
                  "Promotional blasts",
                ],
              },
              {
                title: "Advanced Feature Training",
                items: [
                  "AI Agents",
                  "Website Chat Bots",
                  "Automation logic",
                  "Internal notifications",
                  "Calendar integrations",
                  "AI review management",
                  "Custom workflows",
                  "Advanced routing",
                  "Reporting dashboards",
                  "Social media management tools",
                ],
              },
            ]}
            presenterNote="By this stage, sales, communication, reputation, and marketing systems are moving from setup into active daily use."
          />

          {/* Interstitial 3 */}
          <InterstitialBanner
            tag="Team Workflow"
            title="ONE PLATFORM. ONE LOGIN."
            subtitle="Training connects your team to the inbox, pipelines, review tools, social tools, reporting, and day-to-day workflow management."
          />

          {/* Step 05 */}
          <StepCard
            stepNum="05"
            tag="Go Live + Keep Improving"
            title="Optimization & Growth Support"
            timing="Go live + 30 days after launch"
            attendees="FEC Playbook + Client"
            goal="Ensure clients are maximizing the platform long-term."
            sections={[
              {
                title: "Go Live: By This Stage Clients Typically Have",
                items: [
                  "Active sales pipelines",
                  "Automated lead follow-up",
                  "Reputation management running",
                  "Website lead capture installed",
                  "Marketing campaigns active",
                  "Centralized communication inbox",
                  "Automated review requests",
                  "Social media tools active",
                  "AI-enhanced workflows operational",
                ],
              },
              {
                title: "30-Day Follow-Up and Optimization Review Includes",
                items: [
                  "Workflow optimization",
                  "Reporting review",
                  "Conversion analysis",
                  "Reputation growth review",
                  "Automation performance",
                  "Campaign results",
                  "Website conversion opportunities",
                  "Additional automation recommendations",
                  "New campaign strategy ideas",
                  "Operational efficiency improvements",
                  "Ongoing support access",
                ],
              },
            ]}
            presenterNote="Support continues after launch so reporting, workflows, reputation growth, campaigns, and conversion opportunities can improve over time."
          />
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-[#0D1B3E]/40 border-t border-white/5 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
            SUPPORT DOES NOT STOP<br />
            <span className="text-[#00AEEF]">AFTER ONBOARDING.</span>
          </h2>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            After launch, FEC Playbook reviews performance, answers questions, and helps optimize workflows so the system keeps improving with your team's day-to-day use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.bookmore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00AEEF] text-[#0A0A0A] font-black text-sm tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-white transition-colors"
            >
              LOG IN TO FEC PLAYBOOK
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors"
            >
              VIEW ONBOARDING GUIDE
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 text-xs text-slate-500 hover:text-[#00AEEF] transition-colors uppercase tracking-widest font-bold"
          >
            ↑ BACK TO TOP
          </button>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div className="border-t border-white/5 py-4 px-6 text-center">
        <p className="text-xs text-slate-600">Sales-call onboarding overview for FEC Playbook clients.</p>
      </div>
    </div>
  );
}
