/**
 * FEC Playbook™ — How It Works
 * Design: Action-led operating-system walkthrough with sharp stages, tangible proof, and black/white/cyan contrast.
 */

import { ArrowRight, CheckCircle2, ClipboardCheck, Database, Layers3, Phone, Play, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";

const ASSETS = {
  dashboard: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hiw-step01-pos-data-5oAqgyQBeJUTARrxqmFakZ.webp",
  automation: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/automation-visual-7FFhxMiacnZRBnZdiXWffS.webp",
  pathways: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/hiw-step03-pathways-K3VLeKt7mFbt6MXxTvoRSr.webp",
};

const activationStages = [
  {
    number: "01",
    icon: Database,
    title: "Bring Your Brand & Data",
    description: "We start with your offers, policies, team roles, brand voice, and the available data paths around the systems you already use.",
    points: ["CenterEdge is the official partner", "Other supported data-import paths are confirmed in your Revenue Review", "Your venue decides the offers, policies, and ownership"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Activate Ready-Built Playbooks",
    description: "Instead of asking your team to design automation from a blank platform, FEC Playbook™ starts from ready-built Revenue Playbooks and more than 100 pre-built automations.",
    points: ["Workflow and timing logic arrive ready", "Handoffs and follow-up routes are already mapped", "Your voice and offers make the system yours"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Run With FEC-Specific Support",
    description: "Your team gets a practical activation path and ongoing FEC-specific guidance as the systems become part of day-to-day operations.",
    points: ["Clear owner and next-action expectations", "A consistent route through common revenue moments", "Support focused on your facility’s operating rhythm"],
  },
];

const operatingSteps = [
  {
    number: "01",
    eyebrow: "Available Data & Context",
    title: "Start With What Your FEC Already Runs",
    description: "FEC Playbook™ is designed to add revenue follow-through around your operating systems. CenterEdge is the official partner. For other supported systems, available data flows and import methods are confirmed during your Revenue Review.",
    highlight: "No rip-and-replace decision before you understand the activation path.",
    points: ["Review available guest, booking, event, and inquiry information", "Define the team members who own the next action", "Confirm the appropriate data connection or import path", "Map the revenue moments that matter most for your venue"],
    image: ASSETS.dashboard,
    alt: "FEC Playbook™ dashboard interface",
  },
  {
    number: "02",
    eyebrow: "Ready-Built Logic",
    title: "The System Already Knows the Operating Sequence",
    description: "Each Revenue Playbook begins with ready-built workflow, automation, timing, ownership, and follow-up logic. Activation adapts that proven sequence to your venue rather than asking your team to invent it.",
    highlight: "Your team does not have to build the next step from scratch.",
    points: ["Ready-built triggers and handoffs", "Venue-specific offers, policies, and messages", "Consistent ownership and reminders", "Follow-through that keeps moving when the team is busy"],
    image: ASSETS.automation,
    alt: "FEC Playbook™ automation visual",
  },
  {
    number: "03",
    eyebrow: "Daily Execution",
    title: "One Playbook Can Handle More Than One Guest Path",
    description: "Guests may book a party, ask a question, visit with a group, join a membership, or change a reservation. FEC Playbook™ gives each moment a defined operating route while keeping the broader guest relationship visible.",
    highlight: "The team sees the next action. The system handles the follow-through around it.",
    points: ["Guest activity is routed to the right playbook", "Different scenarios receive different next actions", "Team members see clear ownership and context", "Communication stays aligned to what actually happened"],
    image: ASSETS.pathways,
    alt: "FEC Playbook™ guest pathway visual",
  },
];

const scenarios = [
  {
    playbook: "Birthday & Celebration Sales",
    title: "Birthday Party Booked",
    steps: ["Confirmation and event-prep communication follows a ready-built route", "The assigned team member sees the relevant next action", "Post-event follow-through can support feedback and a return visit"],
  },
  {
    playbook: "Group & Corporate Events",
    title: "Group Inquiry Arrives",
    steps: ["The inquiry enters a defined ownership path", "Follow-up and reminders follow the event-sales workflow", "Longer planning cycles remain visible instead of living in someone’s memory"],
  },
  {
    playbook: "Guest Visit Communication",
    title: "Guest Visits or Asks a Question",
    steps: ["The interaction can be routed around the right guest context", "The team can see the conversation and next owner", "Relevant follow-through is ready for activation"],
  },
  {
    playbook: "Sales Accountability",
    title: "A Booking Changes",
    steps: ["The old sequence can be reviewed and the new timing updated", "The right team member is notified of the changed context", "Guest communication follows the revised route rather than a duplicate path"],
  },
];

const howItWorksFaqs = [
  {
    question: "How does FEC Playbook™ activate for a new facility?",
    answer: "Activation begins with a 30-Minute FEC Revenue Review. The conversation maps the revenue moments, offers, brand voice, team ownership, and available data paths that matter for your venue. FEC Playbook™ then applies those details to ready-built playbooks and automation logic.",
  },
  {
    question: "Do we need to build the workflows ourselves?",
    answer: "No. The operating logic begins ready-built. FEC Playbook™ supplies the playbooks, triggers, timing, handoffs, reminders, and follow-through structure; your team helps tailor the systems to your brand, policies, offers, and day-to-day operating context.",
  },
  {
    question: "What happens with our existing POS or booking system?",
    answer: "CenterEdge is the official partner. For other supported systems, available data flows and the appropriate data-import path are confirmed during your Revenue Review. FEC Playbook™ is designed to work alongside existing operating systems, not require a rip-and-replace decision.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: howItWorksFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://www.fecplaybook.com/how-it-works" },
  ],
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="How FEC Playbook™ Activates Ready-Built Revenue Systems"
        description="See how FEC Playbook™ adapts ready-built Revenue Playbooks, 13 Core Modules, and 100+ automations to your Family Entertainment Center’s brand, team, and available data paths."
        path="/how-it-works"
      />
      <StructuredData data={[faqSchema, breadcrumbSchema]} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(112deg, transparent 0 48%, #00AEEF 48.1% 48.25%, transparent 48.4% 100%), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "100% 100%, 54px 54px" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3 text-[#00AEEF]"><span className="flex h-8 w-8 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]"><Play className="ml-0.5" size={14} fill="currentColor" /></span><span className="h-px w-8 bg-[#00AEEF]" /><span className="text-xs font-black uppercase tracking-[0.22em]">Activation, not DIY setup</span></div>
              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">From Your Data to Daily Revenue Execution—<span className="text-[#00AEEF]">Without Building It From Scratch.</span></h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">FEC Playbook™ begins with ready-built Revenue Playbooks, then adapts the brand voice, offers, ownership, and available data paths around how your facility actually operates. Your team is not handed a blank platform and asked to invent the system.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="/book-a-demo" className="fec-btn-primary px-7 py-4 text-sm"><Phone size={18} />Book a 30-Minute FEC Revenue Review</a><a href="#activation" className="inline-flex items-center gap-2 px-2 text-sm font-black uppercase tracking-wide text-white/70 transition-colors hover:text-[#00AEEF]">See the activation path <ArrowRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section id="activation" className="relative bg-white py-16 text-[#0A0A0A] sm:py-24">
          <div className="absolute left-0 top-0 h-3 w-[30%] bg-[#00AEEF]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 border-b border-black/15 pb-11 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#1565C0]">The activation path</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl">Built systems. Venue-specific execution.</h2></div><p className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">The work is not to build an automation architecture from scratch. The work is to make a proven FEC operating system fit your venue, team, offers, and operating rhythm.</p></div>
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {activationStages.map((stage, index) => {
                const Icon = stage.icon;
                return <article key={stage.number} className="relative overflow-hidden border border-black/15 bg-[#F3F6F8] p-6 sm:p-8"><span className="absolute right-5 top-3 text-7xl font-black text-black/[0.06]">{stage.number}</span><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center bg-[#0A0A0A] text-[#00AEEF]"><Icon size={19} /></span><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1565C0]">Stage {stage.number}</p></div><h3 className="mt-6 text-3xl font-black uppercase leading-[0.9]">{stage.title}</h3><p className="mt-5 text-sm leading-relaxed text-black/70">{stage.description}</p><ul className="mt-6 space-y-3 border-t border-black/10 pt-5">{stage.points.map((point) => <li key={point} className="flex gap-2 text-sm leading-snug text-black/75"><CheckCircle2 size={15} className="mt-0.5 flex-none text-[#00AEEF]" />{point}</li>)}</ul>{index < 2 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-8 w-8 rounded-full bg-[#00AEEF] p-2 text-[#0A0A0A] lg:block" />}</article>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-14 max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">How it becomes daily execution</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-6xl">A ready-built route around the work your team already does.</h2></div>
            <div className="space-y-20">
              {operatingSteps.map((step, index) => <article key={step.number} className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}><div className="lg:[direction:ltr]"><p className="text-7xl font-black leading-none text-[#00AEEF]/20">{step.number}</p><div className="mt-4 flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]"><Play className="ml-0.5" size={12} fill="currentColor" /></span><span className="h-px w-6 bg-[#00AEEF]" /><span className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">{step.eyebrow}</span></div><h3 className="mt-5 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">{step.title}</h3><p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{step.description}</p><p className="mt-5 border-l-2 border-[#00AEEF] pl-4 font-black leading-relaxed text-[#00AEEF]">{step.highlight}</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{step.points.map((point) => <li key={point} className="flex gap-2 text-sm leading-snug text-white/75"><CheckCircle2 size={15} className="mt-0.5 flex-none text-[#00AEEF]" />{point}</li>)}</ul></div><div className="lg:[direction:ltr]">{step.number === "02" ? <div className="border border-white/10 bg-[#081326] p-6 shadow-[18px_18px_0_rgba(0,174,239,.16)]"><div className="flex items-center justify-between border-b border-white/10 pb-4"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">Ready-Built Workflow Proof</p><p className="mt-1 text-sm text-white/55">A crisp activation view—not an abstract tech diagram.</p></div><span className="flex h-9 w-9 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]"><Play className="ml-0.5" size={16} fill="currentColor" /></span></div><div className="mt-5 space-y-3">{["Trigger: A revenue moment occurs", "Route: The right owner receives context", "Follow-through: Ready-built timing and messaging activate", "Visibility: The next action stays clear"].map((item, proofIndex) => <div key={item} className="grid grid-cols-[2.2rem_1fr] gap-3 border border-white/10 bg-[#0D1B3E] p-3"><span className="text-sm font-black text-[#00AEEF]">0{proofIndex + 1}</span><span className="text-sm font-bold text-white/85">{item}</span></div>)}</div></div> : <div className="border border-white/10 bg-[#0D1B3E] p-2 shadow-[18px_18px_0_rgba(0,174,239,.16)]"><div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-400" /><span className="ml-3 text-[10px] font-mono text-white/35">fec-playbook.app</span></div><img src={step.image} alt={step.alt} className="mt-2 w-full" /></div>}</div></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#0D1B3E] py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-11 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">What that looks like</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">A playbook changes with the moment.</h2></div><p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">Different guest actions need different next steps. Each scenario below connects to a ready-built Revenue Playbook rather than a generic sequence.</p></div><div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">{scenarios.map((scenario, index) => <article key={scenario.title} className="border border-white/10 bg-[#0A0A0A] p-6"><div className="flex items-center justify-between gap-4"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#00AEEF]">0{index + 1}</span><span className="text-right text-[11px] font-black uppercase tracking-[0.12em] text-white/40">{scenario.playbook}</span></div><h3 className="mt-5 text-2xl font-black uppercase leading-none">{scenario.title}</h3><ul className="mt-6 space-y-3 border-t border-white/10 pt-5">{scenario.steps.map((step) => <li key={step} className="flex gap-3 text-sm leading-relaxed text-white/70"><span className="mt-2 h-1.5 w-1.5 flex-none bg-[#00AEEF]" />{step}</li>)}</ul></article>)}</div></div></section>

        <section className="bg-white py-16 text-[#0A0A0A] sm:py-20"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#1565C0]">Bring the right room</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">Who should join the Revenue Review?</h2></div><div className="border-l-4 border-[#00AEEF] bg-[#F3F6F8] p-6 sm:p-8"><p className="text-lg leading-relaxed text-black/75">Bring the people who own party, group, guest follow-up, or operating decisions. Owner/operators, general managers, and sales or marketing leaders commonly join. The goal is a shared view of what is already built, what your venue tailors, and what should activate first.</p><a href="/book-a-demo" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#1565C0] transition-all hover:gap-3"><Users size={16} />Book a 30-Minute FEC Revenue Review <ArrowRight size={16} /></a></div></div></section>

        <section className="bg-[#0A0A0A] py-20 sm:py-24"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">Straight answers</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">Understand the activation path before you book.</h2><a href="/book-a-demo" className="fec-btn-primary mt-8 px-7 py-4 text-sm"><Phone size={17} />Book a Revenue Review</a></div><div className="divide-y divide-white/10 border-y border-white/10">{howItWorksFaqs.map((faq, index) => <article key={faq.question} className="py-7 first:pt-0 last:pb-0"><div className="flex gap-4"><span className="text-xl font-black text-[#00AEEF]">0{index + 1}</span><div><h3 className="text-xl font-black uppercase leading-tight">{faq.question}</h3><p className="mt-3 leading-relaxed text-white/65">{faq.answer}</p></div></div></article>)}</div></div></section>

        <section className="relative overflow-hidden bg-[#00AEEF] py-16 text-[#0A0A0A] sm:py-20"><div className="absolute right-[8%] top-[-5rem] text-[16rem] font-black leading-none text-white/20">03</div><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A]/70">Your next move</p><h2 className="mt-3 text-4xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-6xl">See the activation path for your FEC in a 30-minute Revenue Review.</h2></div><a href="/book-a-demo" className="inline-flex w-fit items-center gap-2 bg-[#0A0A0A] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1"><ClipboardCheck size={18} />Book a Revenue Review</a></div></section>
      </main>

      <Footer />
    </div>
  );
}
