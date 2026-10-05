import { ArrowRight, CalendarCheck, Check, CircleDot, MessageSquare, Star, UsersRound } from "lucide-react";
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

const workflows = [
  { icon: UsersRound, number: "01", title: "Party leads", outcome: "Every inquiry gets a next step.", copy: "Capture the inquiry, establish ownership, and keep follow-up visible before interest cools.", ready: ["Inquiry routing", "Clear ownership", "Follow-up timing", "Event-sale context"] },
  { icon: CalendarCheck, number: "02", title: "Booked events", outcome: "Every family gets the right information at the right time.", copy: "Use confirmations, reminders, guest details, and team handoffs to keep the experience prepared from booking through arrival.", ready: ["Confirmation route", "Guest preparation", "Team context", "Changed-booking follow-through"] },
  { icon: Star, number: "03", title: "Guest feedback and reviews", outcome: "Every great experience has a route to public proof.", copy: "Keep guest feedback, review requests, and response actions in a process your team can actually see and use.", ready: ["Feedback request", "Review invitation", "Response ownership", "Experience follow-through"] },
  { icon: MessageSquare, number: "04", title: "Return visits", outcome: "Every guest has a relevant reason to come back.", copy: "Create follow-up around the moments guests already care about instead of relying on a generic message or last-minute campaign.", ready: ["Guest context", "Relevant timing", "Offer follow-through", "Return-visit visibility"] },
];

const faqs = [
  { question: "What is a revenue playbook?", answer: "It is a ready-built workflow for a familiar FEC revenue moment: a party inquiry, booked event, guest feedback, review request, or return visit. It gives the team a clear next action without starting from scratch." },
  { question: "Which playbook should we begin with?", answer: "Start with the work costing the most leads or team time today. For many FECs that is party-lead follow-up, confirmations, guest feedback, or sales ownership." },
  { question: "What do we need to provide?", answer: "Your offers, guest voice, team roles, policies, and operating context. FEC Playbook™ starts with the workflow and helps fit it to your venue." },
];

const schema = [
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" }, { "@type": "ListItem", position: 2, name: "Playbooks", item: "https://www.fecplaybook.com/playbook" }] },
];

function ReviewCta({ placement, className = "" }: { placement: string; className?: string }) {
  return <a href="/book-a-demo" onClick={() => trackEvent("cta_book_revenue_review_clicked", { placement })} className={`fec-btn-primary justify-center px-6 py-3.5 text-sm normal-case tracking-normal ${className}`}><CalendarCheck size={17} aria-hidden="true" />Book a 30-Minute FEC Revenue Review</a>;
}

export default function Playbook() {
  return (
    <div className="fec-page overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta title="FEC Revenue Playbooks for Party Leads, Reviews & Return Visits" description="FEC Playbook™ turns party leads, booked events, guest feedback, and return visits into ready-built workflows fitted to the way your Family Entertainment Center operates." path="/playbook" />
      <StructuredData data={schema} />
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-[#0D1B3E]/10 bg-[#fcfcfa] pb-18 pt-32 sm:pb-24 sm:pt-40"><div className="pointer-events-none absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-[#00AEEF]/10 blur-3xl" /><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8"><div className="max-w-2xl"><p className="fec-eyebrow">The work that keeps revenue moving</p><h1 className="fec-display mt-4 text-5xl sm:text-6xl">Start with the moment that is costing you the most.</h1><p className="fec-copy mt-6 text-base sm:text-lg">FEC Playbook™ turns familiar FEC revenue moments into clear, repeatable workflows—so a party lead, booked event, guest review, or return visit does not depend on someone remembering the next step.</p><ReviewCta placement="playbook_hero" className="mt-8 w-full sm:w-auto" /></div><div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.14)] sm:p-3"><div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Party leads</div><img src={ASSETS.party} alt="FEC Playbook™ Party Leads workflow with visible next steps" className="mt-2 w-full rounded-lg" /></div></div></section>

        <section className="bg-white py-18 sm:py-24" id="workflows"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-8 border-b border-[#0D1B3E]/12 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="fec-eyebrow">The priority workflows</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Four moments. A clearer route forward.</h2></div><p className="fec-copy max-w-xl text-base sm:justify-self-end sm:text-lg">Begin where leads are waiting, communication is repetitive, feedback is missed, or return-visit work is not happening consistently.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{workflows.map((workflow) => { const Icon = workflow.icon; return <article key={workflow.title} className="fec-surface flex flex-col p-6 sm:p-8"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00AEEF]/12 text-[#0c719a]"><Icon size={20} aria-hidden="true" /></span><span className="text-xs font-extrabold tracking-[0.14em] text-[#0c719a]">{workflow.number}</span></div><p className="fec-eyebrow mt-7">{workflow.title}</p><h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-[#0D1B3E]">{workflow.outcome}</h3><p className="fec-copy mt-4 text-sm sm:text-base">{workflow.copy}</p><ul className="mt-6 grid gap-2 border-t border-[#0D1B3E]/12 pt-5 sm:grid-cols-2">{workflow.ready.map((item) => <li key={item} className="flex gap-2 text-sm text-[#526070]"><Check size={15} className="mt-1 shrink-0 text-[#0c719a]" aria-hidden="true" />{item}</li>)}</ul></article>; })}</div></div></section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#f2f5f6] py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8"><div className="fec-surface order-2 overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.12)] sm:p-3 lg:order-1"><div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Conversations</div><img src={ASSETS.conversations} alt="FEC Playbook™ Conversations area with guest messages and next steps" className="mt-2 w-full rounded-lg" /></div><div className="order-1 max-w-xl lg:order-2"><p className="fec-eyebrow">Ready-built / venue-specific</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">The workflow starts ready. Your venue makes it specific.</h2><div className="mt-7 overflow-hidden rounded-2xl border border-[#0D1B3E]/12 bg-white"><div className="grid grid-cols-2 border-b border-[#0D1B3E]/12 bg-[#0D1B3E] text-xs font-bold uppercase tracking-[0.1em] text-white"><div className="px-4 py-3 text-white/65">Starts ready with</div><div className="border-l border-white/15 px-4 py-3">Your venue shapes</div></div>{[["Workflow sequence and timing", "Offers and guest voice"], ["Ownership and repeatable next actions", "Team roles and policies"], ["Communication and follow-through routes", "Existing operating context"]].map(([ready, venue]) => <div key={ready} className="grid grid-cols-2 border-b border-[#0D1B3E]/12 last:border-b-0"><p className="px-4 py-4 text-sm leading-relaxed text-[#526070]">{ready}</p><p className="border-l border-[#0D1B3E]/12 px-4 py-4 text-sm font-semibold leading-relaxed text-[#0D1B3E]">{venue}</p></div>)}</div></div></div></section>

        <section className="bg-[#0D1B3E] py-18 text-white sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#59c9ee]">More ways the system helps</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">The same operating discipline can support more than one moment.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">Once the work is visible and repeatable, the same system can support a broader revenue and operations rhythm.</p></div><div className="space-y-3">{[["Group events", "Keep longer planning cycles, outreach, and team ownership visible."], ["Sales accountability", "Give managers a clearer view of who owns the next action."], ["Community requests", "Give school, fundraising, and group-event interest an intentional route." ]].map(([title, copy]) => <div key={title} className="flex gap-4 border border-white/10 bg-white/[0.04] p-5"><CircleDot size={18} className="mt-1 shrink-0 text-[#59c9ee]" aria-hidden="true" /><div><p className="font-bold text-white">{title}</p><p className="mt-1 text-sm leading-relaxed text-white/65">{copy}</p></div></div>)}</div></div></section>

        <section className="bg-white py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="fec-eyebrow">Straight answers</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Choose the right first workflow.</h2><p className="fec-copy mt-5 max-w-md text-base">The Revenue Review maps the highest-value place to begin for your venue.</p><ReviewCta placement="playbook_faq" className="mt-7 w-full sm:w-auto" /></div><div className="divide-y divide-[#0D1B3E]/12 border-y border-[#0D1B3E]/12">{faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-lg font-bold tracking-[-0.025em] text-[#0D1B3E]">{faq.question}</h3><p className="fec-copy mt-3 text-sm sm:text-base">{faq.answer}</p></article>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
