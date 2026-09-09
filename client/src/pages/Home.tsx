/*
 * FEC Playbook™ — Conversion-Led Home Page
 * Design philosophy: Bold FEC sports/action campaign. True black and white ground, FEC Blue (#00AEEF)
 * as an intentional action accent, diagonal momentum, oversized stage numbers, and real product proof.
 */

import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const ASSETS = {
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hero-bg-mLV3usVoJARhVMWa8qsJ8f.webp",
  birthdayParty: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/birthday-party-text-6MVbVzyByRLkTSrZZi8YVS.webp",
  textClub: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/text-club-offer-deXrAuqSunkxwnsEiwQZqh.webp",
  fecOperator: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/fec-operator-FPdt5GDKLRrSr7YzshYVGw.webp",
  screenshotDashboard: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/mockup-dashboard-Xvv4CsYBmbuFktddYJRVAY.webp",
  screenshotConversations: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/mockup-conversations-JtN2wUBGRkhaeNP9KaWfvi.webp",
  screenshotPipeline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/mockup-pipeline-5H8g837XP3Whcjpofgqvyf.webp",
};

const revenueStages = [
  {
    number: "01",
    short: "INQUIRY",
    label: "Party or group lead",
    title: "Turn inquiries into booked parties.",
    copy: "Capture party, group, and corporate inquiries in one place. FEC Playbook™ assigns the next step, follows up on time, and shows your team which opportunities still need attention.",
    proof: "Pipeline + assigned follow-up",
    icon: UserCheck,
  },
  {
    number: "02",
    short: "BOOKING",
    label: "The next step is clear",
    title: "Make every booking feel prepared.",
    copy: "Send the right confirmations, reminders, waivers, and guest details at the right time. Your staff starts with context, and families arrive ready for a better visit.",
    proof: "Confirmations + reminders",
    icon: CalendarCheck,
  },
  {
    number: "03",
    short: "VISIT",
    label: "The guest experience is owned",
    title: "Protect the moment after the visit.",
    copy: "Request feedback while the experience is fresh. Route concerns to your team, recognize great guest moments, and give satisfied families a simple way to leave a review.",
    proof: "Feedback + review requests",
    icon: ShieldCheck,
  },
  {
    number: "04",
    short: "REPUTATION",
    label: "Guest feedback becomes action",
    title: "Give families a reason to return.",
    copy: "Use the visit, purchase, birthday, membership, or interest data you already have to deliver relevant follow-up instead of one-size-fits-all promotions.",
    proof: "Segmented email + SMS",
    icon: MessageSquare,
  },
  {
    number: "05",
    short: "REPEAT VISIT",
    label: "The next visit is already moving",
    title: "Make revenue work visible to the team.",
    copy: "Managers see what needs action, who owns it, and which opportunities have gone quiet. Your team spends less time checking tools and more time moving guests forward.",
    proof: "Alerts + manager digests",
    icon: ClipboardCheck,
  },
];

const playbooks = [
  { number: "01", title: "Birthday & Celebration Sales", copy: "Guide every party inquiry from first contact through the next celebration." },
  { number: "02", title: "Group & Corporate Events", copy: "Keep weekday group opportunities visible, qualified, and moving." },
  { number: "03", title: "Guest Visit Communication", copy: "Prepare guests with the right message before they arrive." },
  { number: "04", title: "Reputation Protection", copy: "Turn guest feedback into a practical next action for your team." },
  { number: "05", title: "Membership Lifecycle", copy: "Support each member from welcome through renewal and return." },
  { number: "06", title: "Text Club & Repeat Visits", copy: "Create relevant reasons for families to come back." },
  { number: "07", title: "Sales Accountability", copy: "Give managers a simple view of every next revenue action." },
  { number: "08", title: "Fundraising & Referrals", copy: "Make community relationships easier to manage and grow." },
];

const proofPillars = [
  { title: "PRE-BUILT FOR FECS", copy: "Eight Revenue Playbooks and 100+ automations start ready—not as a blank canvas." },
  { title: "MADE YOURS", copy: "Your voice, offers, handoffs, and team structure shape the rollout." },
  { title: "SUPPORTED THROUGH ACTIVATION", copy: "FEC-specific guidance helps your team put the right playbooks into motion." },
];

const builtSystemBlocks = [
  {
    number: "01",
    title: "Start with a Real Playbook.",
    copy: "Party inquiries, booking confirmations, review requests, repeat-visit follow-up, team accountability, and more begin with systems already designed for FEC operations.",
  },
  {
    number: "02",
    title: "Adapt It to Your Venue.",
    copy: "We align the message, offer, timing, owners, and handoffs with your brand and the systems your team already uses.",
  },
  {
    number: "03",
    title: "Put It Into Motion With Support.",
    copy: "Your team gets FEC-specific implementation guidance so the playbooks become part of daily operations—not another login that goes unused.",
  },
];

const integrations = [
  { name: "CenterEdge Software", description: "Official integration partner", kind: "Official Partner", primary: true },
  { name: "ROLLER Software", description: "Venue-management data import", kind: "Data Import", primary: false },
  { name: "PartyWirks", description: "Party-booking data import", kind: "Data Import", primary: false },
  { name: "Party Center Software", description: "FEC booking data import", kind: "Data Import", primary: false },
  { name: "Ferret Personality", description: "Hiring data import", kind: "Data Import", primary: false },
];

const testimonials = [
  {
    quote: "It's Not Just a Tool — It's a Growth Engine for our Business. Book More is transforming our booking flow — clients book parties faster because of the automations, and now with Roller integration we close deals smoother. The intuitive interface and smart automation save us hours every week.",
    author: "Matthew",
    role: "FEC Owner",
  },
  {
    quote: "Five-Star reviews have skyrocketed. Since implementing the review automation, our number of five-star reviews have skyrocketed. People were always thanking us but never leaving a review. Now they have an easy way to give us a shout out and they're doing so daily.",
    author: "Theresa",
    role: "FEC Operator",
  },
  {
    quote: "Our Party Confirmation Process is SO Much More Efficient. It has absolutely cut down on the time our team spends on the hiring process. The chat widget functions make communicating with our customers so much easier and quicker. The team is always quick to answer questions.",
    author: "Rilee",
    role: "Events Manager, FEC",
  },
];

const faqs = [
  {
    question: "Does FEC Playbook™ replace my POS or booking software?",
    answer: "No. FEC Playbook™ works alongside your existing POS and booking systems. Your existing system records the transaction; FEC Playbook™ helps your team manage the follow-up, marketing, lead ownership, and guest communication around it.",
  },
  {
    question: "What happens during the 30-minute FEC Revenue Review?",
    answer: "We identify the revenue moments that need the most attention, map the FEC Playbooks™ that fit your facility, and explain a practical implementation path for your current operation.",
  },
  {
    question: "How long does onboarding take?",
    answer: "Onboarding timing depends on the integrations, messaging compliance requirements, and readiness of your team. The review call gives you a clear view of the steps that apply to your facility.",
  },
  {
    question: "Can our team manage the system without another complicated tool?",
    answer: "That is the goal. FEC Playbook™ puts lead ownership, communication, automated follow-up, and manager visibility into one operating system built around common FEC revenue moments.",
  },
];

const proofScreens = [
  { tab: "Pipeline", src: ASSETS.screenshotPipeline, alt: "FEC Playbook™ party lead pipeline" },
  { tab: "Inbox", src: ASSETS.screenshotConversations, alt: "FEC Playbook™ conversations inbox" },
  { tab: "Dashboard", src: ASSETS.screenshotDashboard, alt: "FEC Playbook™ operations dashboard" },
];

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.fecplaybook.com/#organization",
    name: "FEC Playbook™",
    url: "https://www.fecplaybook.com/",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png",
    description: "FEC Revenue Operations software for Family Entertainment Centers.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.fecplaybook.com/#website",
    name: "FEC Playbook™",
    url: "https://www.fecplaybook.com/",
    publisher: { "@id": "https://www.fecplaybook.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

function PrimaryCta({ placement, className = "" }: { placement: string; className?: string }) {
  return (
    <a
      href="/book-a-demo"
      onClick={() => trackEvent("cta_book_revenue_review_clicked", { placement })}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 bg-[#00AEEF] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.08em] text-[#0A0A0A] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5ad0ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF] sm:px-7 ${className}`}
    >
      <CalendarCheck size={18} aria-hidden="true" />
      Book a 30-Minute FEC Revenue Review
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProof, setActiveProof] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="FEC Revenue Operations Software for Family Entertainment Centers | FEC Playbook™"
        description="FEC Playbook™ gives Family Entertainment Centers one operating system for party leads, guest follow-up, reputation, repeat visits, and team accountability—without replacing your POS."
        path="/"
      />
      <StructuredData data={homeStructuredData} />
      <Navigation />

      <main>
        {/* Design reminder: asymmetric action campaign hero with a real product-proof visual and one primary action. */}
        <section
          className="relative isolate overflow-hidden bg-[#0A0A0A] pb-14 pt-28 sm:pb-20 sm:pt-32"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.98) 0%, rgba(10,10,10,.94) 48%, rgba(10,10,10,.72) 100%), url(${ASSETS.heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[7px] bg-[#00AEEF]" />
          <div className="pointer-events-none absolute right-[-9rem] top-16 h-72 w-72 -skew-x-12 border border-[#00AEEF]/25" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-[#0A0A0A] [clip-path:polygon(0_65%,100%_0,100%_100%,0_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Built by FEC Operators</span>
                </div>
                <h1 className="max-w-4xl text-[2.7rem] font-black uppercase leading-[0.91] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                  Run Every Revenue Moment in Your FEC From <span className="text-[#00AEEF]">One Playbook.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/75 sm:text-lg">
                  FEC Playbook™ gives your team a pre-built system for party and group inquiries, guest follow-up, reputation, repeat visits, and accountability. The automations and sequences are already built from FEC operating experience—then adapted to your brand, team, and existing software.
                </p>
                <div className="mt-8 flex flex-col items-stretch gap-4 sm:items-start">
                  <PrimaryCta placement="hero" className="w-full sm:w-auto" />
                  <p className="max-w-xl text-sm leading-relaxed text-white/60">
                    See the ready-built playbooks that fit your facility—and the revenue work they take off your team’s plate.
                  </p>
                  <a
                    href="#revenue-playbooks"
                    onClick={() => trackEvent("revenue_playbooks_clicked", { placement: "hero" })}
                    className="inline-flex w-fit items-center gap-2 border-b border-white/30 pb-1 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF]"
                  >
                    See the Revenue Playbooks <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-white/55">Built for Family Entertainment Centers. No rip-and-replace required.</p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative border border-white/15 bg-[#081326] p-1 shadow-[18px_18px_0_rgba(0,174,239,0.18)]">
                  <div className="absolute -left-3 top-8 hidden h-28 w-3 bg-[#00AEEF] lg:block" />
                  <div className="relative overflow-hidden border border-white/10 bg-[#0D1B3E] p-5 sm:p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">FEC Revenue Cycle</p>
                        <p className="mt-1 text-sm font-semibold text-white/70">A clear next action at every stage.</p>
                      </div>
                      <Target size={25} className="text-[#00AEEF]" aria-hidden="true" />
                    </div>
                    <ol className="mt-5 space-y-3">
                      {revenueStages.slice(0, 4).map((stage, index) => (
                        <li key={stage.number} className="flex gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#00AEEF] text-xs font-black text-[#0A0A0A]">{stage.number}</span>
                          <div className="min-w-0 border-l border-white/15 pl-3">
                            <p className="text-xs font-black uppercase tracking-[0.12em] text-white">{stage.short}</p>
                            <p className="mt-0.5 text-xs text-white/55">{index === 0 ? "Lead captured. Owner assigned." : index === 1 ? "Next step sent. Family prepared." : index === 2 ? "Feedback captured. Team informed." : "Relevant follow-up starts."}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-5 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                      From first inquiry to repeat visit
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid border-y border-white/10 sm:grid-cols-3">
              {proofPillars.map((pillar, index) => (
                <div key={pillar.title} className={`px-0 py-5 sm:px-7 ${index !== 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
                  <p className="text-sm font-black uppercase tracking-[0.11em] text-white">{pillar.title}</p>
                  <p className="mt-1 text-sm text-white/55">{pillar.copy}</p>
                </div>
              ))}
            </div>
            <div className="grid border-b border-white/10 sm:grid-cols-3">
              {[
                ["08", "REVENUE PLAYBOOKS"],
                ["13", "CORE MODULES"],
                ["100+", "PREBUILT AUTOMATIONS"],
              ].map(([value, label], index) => (
                <div key={label} className={`flex items-baseline gap-3 px-0 py-4 sm:px-7 ${index !== 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
                  <span className="text-3xl font-black tracking-[-0.06em] text-[#00AEEF]">{value}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.13em] text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design reminder: diagonal transition and a clear revenue-cycle story, not a generic feature grid. */}
        <section id="revenue-cycle" className="relative bg-white py-20 text-[#0A0A0A] sm:py-28">
          <div className="absolute left-0 top-0 h-12 w-full bg-[#0A0A0A] [clip-path:polygon(0_0,100%_0,100%_35%,0_100%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#1565C0]">The FEC Revenue Cycle</span>
                </div>
                <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  One Playbook for Every <span className="text-[#1565C0]">Revenue Moment.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#1E3A5F]/80 sm:text-lg">
                  An FEC does not lose revenue because of one missed email. Revenue leaks when the handoff from inquiry to booking, booking to visit, and visit to follow-up has no owner. FEC Playbook™ gives your team a system for each moment.
                </p>
                <p className="mt-7 border-l-4 border-[#00AEEF] pl-4 text-base font-black leading-relaxed text-[#0D1B3E]">
                  Your POS records the transaction. FEC Playbook™ runs the revenue work around it.
                </p>
                <a
                  href="#revenue-playbooks"
                  onClick={() => trackEvent("revenue_playbooks_clicked", { placement: "revenue_cycle" })}
                  className="mt-8 inline-flex items-center gap-2 bg-[#0A0A0A] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1565C0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1565C0]"
                >
                  See the Revenue Playbooks <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className="lg:col-span-7">
                <ol className="relative space-y-0 border-l-2 border-[#00AEEF]">
                  {revenueStages.map((stage) => {
                    const Icon = stage.icon;
                    return (
                      <li key={stage.number} className="relative grid gap-5 border-b border-[#0D1B3E]/10 px-5 py-7 sm:grid-cols-[5.4rem_1fr_auto] sm:px-8 sm:py-8">
                        <span className="absolute -left-[11px] top-9 h-5 w-5 bg-[#00AEEF] ring-4 ring-white" />
                        <div className="flex items-start gap-3 sm:block">
                          <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#0D1B3E]/15 sm:text-7xl">{stage.number}</span>
                          <Icon className="mt-1 h-5 w-5 text-[#1565C0] sm:mt-3 sm:h-6 sm:w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1565C0]">{stage.short} <span className="text-[#0D1B3E]/45">/ {stage.label}</span></p>
                          <h3 className="mt-2 text-xl font-black uppercase leading-tight text-[#0A0A0A] sm:text-2xl">{stage.title}</h3>
                          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#1E3A5F]/75">{stage.copy}</p>
                        </div>
                        <span className="h-fit w-fit bg-[#00AEEF] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-[#0A0A0A] sm:mt-1">{stage.proof}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Design reminder: pre-built system proof uses large stage numbers, angular fields, and play-button geometry—not soft SaaS cards. */}
        <section id="built-system" className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28">
          <div className="pointer-events-none absolute -left-16 top-0 h-full w-48 bg-[#1565C0]/30 [clip-path:polygon(0_0,100%_0,45%_100%,0_100%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Pre-Built by FEC Experience</span>
                </div>
                <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl lg:text-6xl">The Revenue System Is Built. <span className="text-[#00AEEF]">Your Brand Makes It Yours.</span></h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/65 lg:col-span-5 lg:justify-self-end">Most software gives your team a set of tools and a blank screen. FEC Playbook™ starts with the revenue workflows, automations, and handoffs already mapped for Family Entertainment Centers. We then tailor the system to the way your facility communicates, sells, and serves families.</p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {builtSystemBlocks.map((block, index) => (
                <article key={block.number} className="relative min-h-80 overflow-hidden border border-white/15 bg-[#0D1B3E] p-6 sm:p-8">
                  <div className="absolute right-0 top-0 h-24 w-28 bg-[#00AEEF] [clip-path:polygon(56%_0,100%_0,100%_100%,0_100%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-7xl font-black leading-none tracking-[-0.08em] text-white/15">{block.number}</span>
                      <span className="mt-1 flex h-9 w-9 items-center justify-center bg-[#0A0A0A] text-[#00AEEF]" aria-hidden="true">▶</span>
                    </div>
                    <h3 className="mt-12 max-w-xs text-2xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">{block.title}</h3>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{block.copy}</p>
                    <p className="mt-auto pt-6 text-[10px] font-black uppercase tracking-[0.16em] text-[#00AEEF]">{index === 0 ? "8 Ready-Built Playbooks" : index === 1 ? "You Bring the Brand" : "FEC-Specific Guidance"}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-lg font-black uppercase leading-tight text-white">You bring the brand. We provide the playbook—and the FEC experience to help your team run it.</p>
              <PrimaryCta placement="built_system" className="shrink-0" />
            </div>
          </div>
        </section>

        {/* Design reminder: product proof is a full-size visual focal point; controls remain functional without hover. */}
        <section id="platform" className="bg-[#0A0A0A] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Platform Proof</span>
                </div>
                <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">
                  See the Work Your Team Needs <span className="text-[#00AEEF]">in One Place.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-white/60 lg:col-span-5 lg:justify-self-end">
                FEC Playbook™ keeps conversations, opportunity ownership, automated next steps, and manager visibility connected instead of scattered across separate tools.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-0">
              <div className="border border-white/15 bg-[#0D1B3E] p-2 shadow-[18px_18px_0_rgba(0,174,239,0.18)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#081326] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="ml-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">FEC Playbook™ / {proofScreens[activeProof].tab}</span>
                </div>
                <img src={proofScreens[activeProof].src} alt={proofScreens[activeProof].alt} className="w-full" />
              </div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {proofScreens.map((screen, index) => (
                  <button
                    key={screen.tab}
                    type="button"
                    onClick={() => setActiveProof(index)}
                    className={`flex min-h-20 items-center justify-between border px-5 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF] ${activeProof === index ? "border-[#00AEEF] bg-[#00AEEF] text-[#0A0A0A]" : "border-white/15 bg-white/[0.03] text-white hover:border-[#00AEEF]/60"}`}
                  >
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-[0.16em] opacity-65">Product view</span>
                      <span className="mt-1 block text-sm font-black uppercase tracking-[0.08em]">{screen.tab}</span>
                    </span>
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="revenue-playbooks" className="relative overflow-hidden bg-[#0D1B3E] py-20 sm:py-28">
          <div className="pointer-events-none absolute -right-24 top-14 text-[18rem] font-black leading-none text-white/[0.035]">08</div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-10 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Revenue Playbooks</span>
                </div>
                <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Eight Ready-Built Playbooks. One Connected Revenue System.</h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-white/60">These are not starter templates for your team to build from scratch. Each playbook includes the workflow, automation, ownership, and follow-up structure for a specific revenue moment—then we tailor the details to your venue.</p>
            </div>

            <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {playbooks.map((playbook) => (
                <article key={playbook.number} className="group min-h-64 bg-[#0D1B3E] p-6 transition-colors hover:bg-[#102a57] sm:p-7">
                  <p className="text-5xl font-black tracking-[-0.07em] text-[#00AEEF]/45">{playbook.number}</p>
                  <h3 className="mt-10 text-lg font-black uppercase leading-tight text-white">{playbook.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{playbook.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-base font-medium leading-relaxed text-white/75">You bring the brand. We provide the playbook—and the support to put it to work.</p>
              <PrimaryCta placement="revenue_playbooks" className="shrink-0" />
            </div>
          </div>
        </section>

        <section id="integrations" className="bg-white py-20 text-[#0A0A0A] sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-11 bg-[#00AEEF]" />
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#1565C0]">Works With Your Stack</span>
                </div>
                <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Keep the Systems You Trust. Add the Revenue System You Need.</h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#1E3A5F]/75">FEC Playbook™ extends existing POS and booking platforms with connected lead ownership, communication, marketing, and follow-up. No rip-and-replace. No disruption.</p>
              </div>
              <div className="grid gap-4 lg:col-span-7">
                {integrations.filter((integration) => integration.primary).map((integration) => (
                  <div key={integration.name} className="relative overflow-hidden border border-[#1565C0] bg-[#0D1B3E] px-6 py-7 text-white">
                    <div className="absolute right-0 top-0 h-full w-24 bg-[#00AEEF] [clip-path:polygon(72%_0,100%_0,100%_100%,0_100%)]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#00AEEF]">{integration.kind}</p>
                    <p className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">{integration.name}</p>
                    <p className="mt-2 max-w-lg text-sm text-white/65">FEC Playbook™ works with CenterEdge as an official integration partner.</p>
                  </div>
                ))}
                <ul className="grid gap-px border border-[#0D1B3E]/15 bg-[#0D1B3E]/15 sm:grid-cols-2">
                  {integrations.filter((integration) => !integration.primary).map((integration) => (
                    <li key={integration.name} className="bg-white px-5 py-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#1565C0]">{integration.kind}</p>
                      <p className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-[#0A0A0A]">{integration.name}</p>
                      <p className="mt-1 text-sm text-[#1E3A5F]/65">{integration.description}</p>
                    </li>
                  ))}
                  <li className="flex items-center bg-[#00AEEF] px-5 py-6 text-sm font-black uppercase tracking-[0.08em] text-[#0A0A0A]">Compatibility reviewed in your Revenue Review <ArrowRight className="ml-3" size={18} aria-hidden="true" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative order-2 border border-white/10 bg-[#0D1B3E] p-2 lg:order-1">
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b-4 border-l-4 border-[#00AEEF]" />
              <img src={ASSETS.fecOperator} alt="Family Entertainment Center operator reviewing operational data" className="relative w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-11 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Built by Operators</span>
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Not Generic Software Forced to Fit.</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">FEC Playbook™ was built around the operational moments FEC teams face every day: party inquiries that need an owner, guests who need a next step, campaigns that need relevance, and managers who need a clear view of revenue work.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["FEC-oriented playbooks", "Lead ownership and follow-up", "Guest communication around the visit", "Manager visibility without extra dashboards"].map((item) => (
                  <div key={item} className="flex gap-3 border-l-2 border-[#00AEEF] bg-white/[0.03] px-4 py-4 text-sm font-bold text-white/80">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#00AEEF]" aria-hidden="true" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0D1B3E] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-11 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Operator Perspective</span>
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Built Around Work That Has to Get Done.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author} className="flex min-h-72 flex-col border border-white/15 bg-[#0A0A0A] p-6 sm:p-7">
                  <blockquote className="text-sm leading-relaxed text-white/75">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-sm font-black uppercase tracking-[0.08em] text-white">{testimonial.author}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#00AEEF]">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#00AEEF] py-20 text-[#0A0A0A] sm:py-24">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 bg-[#1565C0] [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)] lg:block" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 border border-[#0A0A0A]/25 px-3 py-2 text-xs font-black uppercase tracking-[0.16em]"><Sparkles size={14} aria-hidden="true" /> Your 30-Minute FEC Revenue Review</div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">Leave With a Clearer Revenue Plan.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#0A0A0A]/75 sm:text-lg">In 30 minutes, we will identify the revenue leaks we would address first, map the FEC Playbooks™ that fit your facility, and explain the implementation path.</p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {["The revenue moments to address first", "The playbooks that match your operation", "A practical implementation path"].map((takeaway, index) => (
                <div key={takeaway} className="border border-[#0A0A0A]/20 bg-white/20 p-5 text-left">
                  <p className="text-xs font-black tracking-[0.16em] text-[#0A0A0A]/55">0{index + 1}</p>
                  <p className="mt-6 text-base font-black uppercase leading-tight">{takeaway}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex justify-center"><PrimaryCta placement="revenue_review" className="bg-[#0A0A0A] text-white hover:bg-[#0D1B3E]" /></div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Frequently Asked Questions</p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">Common Questions. Straight Answers.</h2>
            </div>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF]"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-sm font-black leading-snug text-white sm:text-base">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="shrink-0 text-[#00AEEF]" aria-hidden="true" /> : <ChevronDown className="shrink-0 text-[#00AEEF]" aria-hidden="true" />}
                  </button>
                  {openFaq === index && <p className="max-w-2xl pb-6 text-sm leading-relaxed text-white/65">{faq.answer}</p>}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center"><PrimaryCta placement="faq" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
