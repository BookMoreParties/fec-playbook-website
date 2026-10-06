import { ArrowRight, CalendarCheck, Check, Clock3, MessageSquare, Star, UsersRound, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const ASSETS = {
  party: "/manus-storage/party-lead-workflow-nav-no-memberships_b6da7bc5.png",
  conversations: "/manus-storage/guest-conversations-workflow-nav-no-memberships_1974c66b.png",
  feedback: "/manus-storage/guest-feedback-workflow-nav-no-memberships_210a686f.png",
};

const outcomes = [
  {
    icon: UsersRound,
    title: "More sales leads moved forward",
    summary: "Capture party and group inquiries, automate follow-up, and keep every opportunity visible from first contact to booking.",
    points: ["Party and group pipelines", "Automated follow-up", "Dedicated donation and fundraiser requests"],
  },
  {
    icon: MessageSquare,
    title: "Every conversation in one place",
    summary: "Email, text, web chat, social messages, and Google Business Profile (Google My Business) inquiries can live in one shared conversation space.",
    points: ["One communication inbox", "Reply and comment automation", "Clear team context"],
  },
  {
    icon: Clock3,
    title: "Marketing that is easier to run",
    summary: "Plan, schedule, and automate email, SMS, social content, and campaigns without managing a separate tool for every channel.",
    points: ["Targeted email and text", "Social post scheduling", "Campaign and engagement visibility"],
  },
  {
    icon: Star,
    title: "Reviews that build trust",
    summary: "Give a great visit a consistent path to feedback, review requests, response management, and the right next action when attention is needed.",
    points: ["Review request timing", "AI-assisted reply options", "Google Business Profile visibility"],
  },
  {
    icon: Zap,
    title: "Retention that brings guests back",
    summary: "Use guest context to run relevant email and text campaigns that keep your facility top of mind after the visit.",
    points: ["Guest segmentation", "Text Club growth", "Return-visit campaigns"],
  },
];

const faqs = [
  {
    question: "How does FEC Playbook™ help with party lead follow-up?",
    answer: "Party inquiries are captured in a clear workflow with an owner, a visible next step, and ready-built follow-through. Your team can see what needs attention instead of relying on a separate inbox or memory.",
  },
  {
    question: "Do we have to replace our POS or booking system?",
    answer: "No. FEC Playbook™ is designed to run the lead ownership, guest communication, review, and return-visit work around the systems your venue already uses.",
  },
  {
    question: "Does our staff have to build the workflows?",
    answer: "No. The sequence, timing, handoffs, and next actions start ready. Your venue shapes the offers, policies, team roles, and guest voice that make the system fit.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" },
      { "@type": "ListItem", position: 2, name: "Outcomes", item: "https://www.fecplaybook.com/features" },
    ],
  },
];

function DemoCta({ placement, className = "" }: { placement: string; className?: string }) {
  return <a href="/book-a-demo" onClick={() => trackEvent("cta_book_demo_clicked", { placement })} className={`fec-btn-primary justify-center px-6 py-3.5 text-sm normal-case tracking-normal ${className}`}><CalendarCheck size={17} aria-hidden="true" />Book a Demo</a>;
}

export default function Features() {
  return (
    <div className="fec-page overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta title="FEC Sales, Marketing & Guest Journey Outcomes" description="See how FEC Playbook™ helps Family Entertainment Centers move party leads faster, automate routine communication, earn more reviews, and give guests a reason to return." path="/features" />
      <StructuredData data={schema} />
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-[#0D1B3E]/10 bg-[#fcfcfa] pb-18 pt-32 sm:pb-24 sm:pt-40">
          <div className="pointer-events-none absolute right-[-8rem] top-0 h-72 w-72 rounded-full bg-[#00AEEF]/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <div className="max-w-2xl">
              <p className="fec-eyebrow">Outcomes your team can feel</p>
              <h1 className="fec-display mt-4 text-5xl sm:text-6xl">Make sales and marketing easier to manage.</h1>
              <p className="fec-copy mt-6 text-base sm:text-lg">FEC Playbook™ connects the work around party leads, guest communication, feedback, and return visits—so the next step is clear for your team and guests do not get left waiting.</p>
              <DemoCta placement="outcomes_hero" className="mt-8 w-full sm:w-auto" />
            </div>
            <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.14)] sm:p-3">
              <div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Conversations</div>
              <img src={ASSETS.conversations} alt="FEC Playbook™ Conversations area showing guest messages, assignment, and next steps" className="mt-2 w-full rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 border-b border-[#0D1B3E]/12 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div><p className="fec-eyebrow">What changes day to day</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">The work that should not rely on memory.</h2></div>
              <p className="fec-copy max-w-xl text-base sm:justify-self-end sm:text-lg">FEC Playbook™ brings recurring sales, marketing, communications, reviews, and retention work into one connected system without turning your venue into a new software project.</p>
            </div>
            <div className="mt-10 grid gap-x-10 md:grid-cols-2">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return <article key={outcome.title} className={`border-b border-[#0D1B3E]/12 py-8 ${index === 0 || index === 1 ? "md:pt-0" : ""} ${index % 2 === 1 ? "md:border-l md:border-[#0D1B3E]/12 md:pl-8" : "md:pr-8"}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00AEEF]/12 text-[#0c719a]"><Icon size={19} aria-hidden="true" /></div>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-[#0D1B3E]">{outcome.title}</h3>
                  <p className="fec-copy mt-3 text-sm sm:text-base">{outcome.summary}</p>
                  <ul className="mt-5 space-y-2">{outcome.points.map((point) => <li key={point} className="flex gap-2 text-sm text-[#526070]"><Check size={15} className="mt-1 shrink-0 text-[#0c719a]" aria-hidden="true" />{point}</li>)}</ul>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#f2f5f6] py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
            <div className="fec-surface order-2 overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.12)] sm:p-3 lg:order-1">
              <div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Party leads</div>
              <img src={ASSETS.party} alt="FEC Playbook™ party lead workflow showing inquiry stages and follow-up" className="mt-2 w-full rounded-lg" />
            </div>
            <div className="order-1 max-w-xl lg:order-2 lg:justify-self-end"><p className="fec-eyebrow">Work from one connected view</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Your team can see what needs to happen next.</h2><p className="fec-copy mt-6 text-base sm:text-lg">A party lead does not need to disappear into an inbox. A booking does not need a separate checklist. The system keeps context and next actions together, so people can move faster without guessing.</p><a href="/how-it-works" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0D1B3E] transition-colors hover:text-[#0c719a]">See how FEC Playbook™ activates <ArrowRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="bg-[#0D1B3E] py-18 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#59c9ee]">Feedback and reviews</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Make it easier for a great visit to become public proof.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">Create a predictable way to invite feedback, request reviews, and put guest concerns in front of the right person before they become a bigger problem.</p><DemoCta placement="outcomes_feedback" className="mt-8 w-full sm:w-auto" /></div>
            <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-3"><div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Guest feedback</div><img src={ASSETS.feedback} alt="FEC Playbook™ guest feedback workflow for review requests and follow-up" className="mt-2 w-full rounded-lg" /></div>
          </div>
        </section>

        <section className="bg-[#fcfcfa] py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="fec-eyebrow">Straight answers</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Before you book a Demo.</h2><p className="fec-copy mt-5 max-w-md text-base">We will start with the sales, marketing, or customer journey work that matters most to your venue—not a generic feature tour.</p><DemoCta placement="outcomes_faq" className="mt-7 w-full sm:w-auto" /></div><div className="divide-y divide-[#0D1B3E]/12 border-y border-[#0D1B3E]/12">{faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-lg font-bold tracking-[-0.025em] text-[#0D1B3E]">{faq.question}</h3><p className="fec-copy mt-3 text-sm sm:text-base">{faq.answer}</p></article>)}</div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
