/**
 * FEC Playbook™ — Core Modules
 * Design: Action-led black/white/cyan system with angular groupings and clear operating outcomes.
 */

import {
  ArrowRight,
  BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Eye,
  Gift,
  GitBranch,
  Globe,
  HeartHandshake,
  Mail,
  MessageSquare,
  Phone,
  Play,
  Send,
  Share2,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";

const coreModules = [
  {
    number: "01",
    lane: "Capture & Convert",
    icon: MessageSquare,
    title: "Unified Inbox",
    summary: "Keep guest questions, booking inquiries, and team follow-through in one visible conversation space.",
    ready: ["Conversation routing", "Ownership rules", "Internal notes and history", "Follow-up prompts"],
    capabilities: ["Two-way SMS and email", "Website chat", "Social direct messages", "Team assignments"],
  },
  {
    number: "02",
    lane: "Capture & Convert",
    icon: Globe,
    title: "Forms & Funnel Pages",
    summary: "Turn party, group, and event interest into structured information your team can act on.",
    ready: ["Inquiry capture paths", "Contact creation", "Follow-up triggers", "Ownership handoff"],
    capabilities: ["Landing-page builder", "Conditional forms", "Party inquiry flows", "Group event intake"],
  },
  {
    number: "03",
    lane: "Capture & Convert",
    icon: GitBranch,
    title: "Sales Pipeline",
    summary: "Give party, group, and event opportunities a defined route from first inquiry to the next team action.",
    ready: ["Stage definitions", "Ownership routing", "Reminder logic", "Next-step visibility"],
    capabilities: ["Visual opportunity management", "Group event pipelines", "Party sales stages", "Revenue reporting"],
  },
  {
    number: "04",
    lane: "Communicate & Return",
    icon: Mail,
    title: "Email Marketing",
    summary: "Activate ready-built email sequences for celebrations, guest follow-up, return visits, and seasonal offers.",
    ready: ["Sequence timing", "Audience rules", "Follow-up logic", "Brand-ready message structure"],
    capabilities: ["Email builder", "Post-visit follow-through", "Birthday messaging", "Engagement reporting"],
  },
  {
    number: "05",
    lane: "Communicate & Return",
    icon: Share2,
    title: "Social Media Planner",
    summary: "Plan social communication around your venue calendar rather than relying on last-minute posting.",
    ready: ["Content planning rhythm", "Campaign alignment", "Posting checkpoints", "Response workflows"],
    capabilities: ["Multi-platform scheduling", "Calendar view", "Facebook and Instagram management", "Comment-response rules"],
  },
  {
    number: "06",
    lane: "Manage & Improve",
    icon: BarChart3,
    title: "Ads Manager",
    summary: "Bring campaign activity, lead capture, and performance visibility closer to the revenue systems they support.",
    ready: ["Lead handoff paths", "Campaign tracking structure", "Audience logic", "Performance checkpoints"],
    capabilities: ["Meta campaign support", "Google campaign support", "Lead form routing", "Budget visibility"],
  },
  {
    number: "07",
    lane: "Communicate & Return",
    icon: Bot,
    title: "AI Voice & Chat",
    summary: "Give guests a clear path to basic information and your team a better handoff for questions that need a person.",
    ready: ["Knowledge-base structure", "After-hours response logic", "Escalation paths", "Team transfer rules"],
    capabilities: ["Website chat", "Inbound call support", "FAQ responses", "Live-staff transfer"],
  },
  {
    number: "08",
    lane: "Communicate & Return",
    icon: Star,
    title: "Reputation Management",
    summary: "Create a consistent process for collecting guest feedback and directing the right response to the right person.",
    ready: ["Review-request timing", "Feedback routing", "Response workflows", "Experience trend visibility"],
    capabilities: ["Guest feedback collection", "Review monitoring", "Response drafts", "Google Business Profile support"],
  },
  {
    number: "09",
    lane: "Communicate & Return",
    icon: Gift,
    title: "Loyalty & Text Club",
    summary: "Give repeat visits, membership engagement, and promotions a permission-based communication system.",
    ready: ["Subscriber pathways", "Audience grouping", "Offer timing", "Return-visit campaigns"],
    capabilities: ["Text Club growth", "Targeted offers", "Birthday specials", "Seasonal campaigns"],
  },
  {
    number: "10",
    lane: "Manage & Improve",
    icon: Eye,
    title: "Behavioral Tracking",
    summary: "Use guest interest and browsing activity to inform relevant follow-through instead of treating every contact the same.",
    ready: ["Interest signals", "Behavior triggers", "Audience logic", "Follow-up paths"],
    capabilities: ["Page-visit tracking", "Cross-sell prompts", "Contact history", "Retargeting audiences"],
  },
  {
    number: "11",
    lane: "Capture & Convert",
    icon: HeartHandshake,
    title: "Donation & Fundraiser Requests",
    summary: "Give community requests a managed route that can support both guest goodwill and group-event opportunity.",
    ready: ["Request intake", "Qualification sequence", "Ownership routing", "Follow-up checkpoints"],
    capabilities: ["Donation-request pipeline", "Fundraiser follow-up", "School and nonprofit outreach", "Proposal tracking"],
  },
  {
    number: "12",
    lane: "Manage & Improve",
    icon: ClipboardList,
    title: "Hiring & Staffing",
    summary: "Organize applicant progress, interview communication, and onboarding follow-through around your team process.",
    ready: ["Applicant pathways", "Acknowledgment messages", "Interview timing", "Onboarding sequences"],
    capabilities: ["Applicant intake", "Stage tracking", "Interview scheduling", "Role-fit support"],
  },
  {
    number: "13",
    lane: "Manage & Improve",
    icon: Zap,
    title: "Automation Engine",
    summary: "Power the handoffs, reminders, sequences, and follow-through inside every FEC Revenue Playbook.",
    ready: ["100+ FEC-specific automations", "Trigger and timing logic", "Ownership handoffs", "Next-action prompts"],
    capabilities: ["Party workflows", "Group-event follow-through", "Bounce-back sequences", "Operational reminders"],
  },
];

const moduleLanes = [
  {
    number: "01",
    title: "Capture & Convert",
    outcome: "Turn every inquiry, request, and conversation into a visible next step.",
    modules: ["Unified Inbox", "Forms & Funnel Pages", "Sales Pipeline", "Donation & Fundraiser Requests"],
  },
  {
    number: "02",
    title: "Communicate & Return",
    outcome: "Keep guests engaged before, during, and after the moments that matter.",
    modules: ["Email Marketing", "Social Media Planner", "AI Voice & Chat", "Reputation Management", "Loyalty & Text Club"],
  },
  {
    number: "03",
    title: "Manage & Improve",
    outcome: "Give your team connected visibility, automation, and operational control.",
    modules: ["Ads Manager", "Behavioral Tracking", "Hiring & Staffing", "Automation Engine"],
  },
];

const featureFaqs = [
  {
    question: "What does FEC software include?",
    answer: "FEC Playbook™ includes 13 connected Core Modules for lead capture, conversations, pipelines, email, text, guest follow-through, reputation, reporting, and more. Those capabilities power eight Revenue Playbooks and 100+ ready-to-activate automations built for Family Entertainment Center operations.",
  },
  {
    question: "Are the automations already built?",
    answer: "Yes. FEC Playbook™ starts with ready-built workflow logic, timing, ownership, triggers, and follow-up for common FEC revenue moments. Your venue then tailors the brand voice, offers, policies, team roles, and available data sources during activation.",
  },
  {
    question: "Can FEC Playbook™ work with an existing POS or booking system?",
    answer: "CenterEdge is the official partner. Other supported systems may be connected through the appropriate data-import path, confirmed during your 30-Minute FEC Revenue Review. FEC Playbook™ is designed to run alongside your operating systems rather than require a rip-and-replace decision.",
  },
];

const featureFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: featureFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const featureBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" },
    { "@type": "ListItem", position: 2, name: "Core Modules", item: "https://www.fecplaybook.com/features" },
  ],
};

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="13 Core Modules for Family Entertainment Centers"
        description="Explore the 13 Core Modules behind FEC Playbook™'s eight Revenue Playbooks and 100+ pre-built automations for Family Entertainment Center operations."
        path="/features"
      />
      <StructuredData data={[featureFaqSchema, featureBreadcrumbSchema]} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(112deg, transparent 0 48%, #00AEEF 48.1% 48.25%, transparent 48.4% 100%), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "100% 100%, 54px 54px" }} />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3 text-[#00AEEF]"><span className="flex h-8 w-8 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]"><Play className="ml-0.5" size={14} fill="currentColor" /></span><span className="h-px w-8 bg-[#00AEEF]" /><span className="text-xs font-black uppercase tracking-[0.22em]">The capability layer</span></div>
              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">13 Core Modules.<span className="block text-[#00AEEF]">One FEC Revenue</span>System.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">These are the connected capabilities behind FEC Playbook™'s ready-built Revenue Playbooks. Modules provide the tools. Playbooks provide the operating sequence. More than 100 automations provide the triggers, handoffs, and follow-through your team does not have to build from scratch.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="/book-a-demo" className="fec-btn-primary px-7 py-4 text-sm"><Phone size={18} />Book a 30-Minute FEC Revenue Review</a>
                <a href="#module-map" className="inline-flex items-center gap-2 px-2 text-sm font-black uppercase tracking-wide text-white/70 transition-colors hover:text-[#00AEEF]">See the module map <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="border border-[#00AEEF]/40 bg-[#071629] p-6 shadow-[18px_18px_0_rgba(0,174,239,.18)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">What arrives ready</p>
              <div className="mt-7 grid gap-4">
                {[
                  ["13", "Core Modules", "Connected capabilities for daily FEC execution."],
                  ["08", "Revenue Playbooks", "Ready-built operating systems for revenue moments."],
                  ["100+", "Automations", "Triggers, handoffs, timing, and follow-through."],
                ].map(([number, label, detail]) => (
                  <div key={label} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"><span className="text-2xl font-black text-white">{number}</span><div><p className="font-black uppercase text-white">{label}</p><p className="mt-1 text-sm text-white/55">{detail}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white py-10 text-[#0A0A0A]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
            <div className="border-l-4 border-[#00AEEF] pl-5"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#1565C0]">A direct answer</p><h2 className="mt-2 text-3xl font-black uppercase leading-[0.9] sm:text-4xl">Not a blank platform your team has to design.</h2></div>
            <p className="max-w-3xl text-base leading-relaxed text-black/70 sm:text-lg">FEC Playbook™ combines 13 connected Core Modules with eight Revenue Playbooks and 100+ pre-built automations. The modules provide capability. The playbooks provide a proven FEC operating sequence. During activation, the system is adapted to your brand, offers, ownership, and confirmed data sources.</p>
          </div>
        </section>

        <section id="module-map" className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-20">
          <div className="absolute left-0 top-0 h-2 w-[25%] bg-[#00AEEF]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 border-b border-white/10 pb-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">The module map</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">Every module has a job in the revenue system.</h2></div><p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">Start with the operating outcome your team needs. The detailed modules below show the connected capabilities that make that outcome repeatable.</p></div>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {moduleLanes.map((lane) => (
                <article key={lane.title} className="relative border border-white/10 bg-[#0D1B3E] p-6"><span className="absolute right-5 top-3 text-5xl font-black text-white/5">{lane.number}</span><p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">{lane.number} / Action lane</p><h3 className="mt-3 text-2xl font-black uppercase leading-none">{lane.title}</h3><p className="mt-4 text-sm leading-relaxed text-white/65">{lane.outcome}</p><ul className="mt-6 space-y-2 border-t border-white/10 pt-5">{lane.modules.map((module) => <li key={module} className="flex items-center gap-2 text-sm font-semibold text-white/80"><span className="h-1.5 w-1.5 bg-[#00AEEF]" />{module}</li>)}</ul></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F3F6F8] py-16 text-[#0A0A0A] sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 border-b border-black/15 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#1565C0]">The detailed system</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">13 connected capabilities. One operating context.</h2></div><p className="max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">Every module below has its own job. They become more valuable because they operate together inside the same ready-built FEC revenue system.</p></div>
            <div className="mt-10 space-y-4">
              {coreModules.map((module, index) => {
                const Icon = module.icon;
                const cyan = index % 2 === 0;
                return (
                  <article key={module.number} className="group relative overflow-hidden border border-black/15 bg-white p-6 sm:p-8">
                    <div className={`absolute left-0 top-0 h-full w-1.5 ${cyan ? "bg-[#00AEEF]" : "bg-[#1565C0]"}`} />
                    <div className="grid grid-cols-1 gap-7 pl-2 lg:grid-cols-[.8fr_.85fr_1.35fr] lg:items-start">
                      <div>
                        <div className="flex items-start gap-4"><span className={`text-5xl font-black leading-none sm:text-6xl ${cyan ? "text-[#00AEEF]" : "text-[#1565C0]"}`}>{module.number}</span><Icon className={cyan ? "mt-1 text-[#00AEEF]" : "mt-1 text-[#1565C0]"} size={27} /></div>
                        <p className="mt-6 text-[11px] font-black uppercase tracking-[0.18em] text-black/45">{module.lane}</p>
                        <h3 className="mt-2 text-2xl font-black uppercase leading-[0.95]">{module.title}</h3>
                        <p className="mt-4 leading-relaxed text-black/65">{module.summary}</p>
                      </div>
                      <div className="border-y border-black/10 py-5 lg:border-y-0 lg:border-r lg:py-0 lg:pr-7"><p className="text-[11px] font-black uppercase tracking-[0.18em] text-black/45">What arrives ready</p><div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-black/50">{["Workflow", "Automation", "Ownership", "Next action"].map((item) => <span key={item} className="flex items-center gap-1.5"><span className={`h-1.5 w-1.5 ${cyan ? "bg-[#00AEEF]" : "bg-[#1565C0]"}`} />{item}</span>)}</div><ul className="mt-5 space-y-2">{module.ready.map((item) => <li key={item} className="flex gap-2 text-sm leading-snug text-black/70"><CheckCircle2 size={15} className={`mt-0.5 flex-none ${cyan ? "text-[#00AEEF]" : "text-[#1565C0]"}`} />{item}</li>)}</ul></div>
                      <div><p className="text-[11px] font-black uppercase tracking-[0.18em] text-black/45">Module capabilities</p><div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">{module.capabilities.map((item) => <div key={item} className="border border-black/10 bg-[#F3F6F8] px-3 py-2 text-sm font-semibold text-black/70">{item}</div>)}</div><a href="/book-a-demo" className={`mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide transition-all hover:gap-3 ${cyan ? "text-[#00AEEF]" : "text-[#1565C0]"}`}>See this in your Revenue Review <ArrowRight size={15} /></a></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 text-[#0A0A0A] sm:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#1565C0]">Data and activation</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">Built to work alongside the systems you already run.</h2></div><div className="border-l-4 border-[#00AEEF] bg-[#F3F6F8] p-6 sm:p-8"><p className="text-lg font-black uppercase leading-tight">CenterEdge is the official partner.</p><p className="mt-3 leading-relaxed text-black/70">Other supported systems may be connected through the appropriate data-import path, confirmed during your 30-Minute FEC Revenue Review. FEC Playbook™ is designed to add operating context and follow-through around the systems your venue already uses.</p><a href="/book-a-demo" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#1565C0] transition-all hover:gap-3">See which modules power your Revenue Review <ArrowRight size={16} /></a></div></div>
        </section>

        <section className="bg-[#0A0A0A] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">Straight answers</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">Before you choose a platform.</h2><p className="mt-5 max-w-md leading-relaxed text-white/60">A Revenue Review is the fastest way to map the Core Modules, ready-built playbooks, and activation path that matter for your facility.</p><a href="/book-a-demo" className="fec-btn-primary mt-8 px-7 py-4 text-sm"><Phone size={17} />Book a 30-Minute FEC Revenue Review</a></div><div className="divide-y divide-white/10 border-y border-white/10">{featureFaqs.map((faq, index) => <article key={faq.question} className="py-7 first:pt-0 last:pb-0"><div className="flex gap-4"><span className="text-xl font-black text-[#00AEEF]">0{index + 1}</span><div><h3 className="text-xl font-black uppercase leading-tight">{faq.question}</h3><p className="mt-3 leading-relaxed text-white/65">{faq.answer}</p></div></div></article>)}</div></div>
        </section>

        <section className="relative overflow-hidden bg-[#00AEEF] py-16 text-[#0A0A0A] sm:py-20"><div className="absolute right-[8%] top-[-5rem] text-[16rem] font-black leading-none text-white/20">13</div><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A]/70">Your next move</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-6xl">See which modules power your Revenue Review.</h2></div><a href="/book-a-demo" className="inline-flex w-fit items-center gap-2 bg-[#0A0A0A] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1"><Calendar size={18} />Book a Revenue Review</a></div></section>
      </main>

      <Footer />
    </div>
  );
}
