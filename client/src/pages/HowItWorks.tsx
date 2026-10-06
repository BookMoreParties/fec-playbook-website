import { ArrowRight, CalendarCheck, Check, CircleDot, Layers3, Map, Settings2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const ASSETS = {
  party: "/manus-storage/party-lead-workflow-nav-no-memberships_b6da7bc5.png",
  conversations: "/manus-storage/guest-conversations-workflow-nav-no-memberships_1974c66b.png",
};

const steps = [
  { icon: Map, number: "01", title: "Find the process gap", copy: "Look at the inquiry, sale, confirmation, review, or retention work that is costing your team the most attention today.", points: ["Identify what is getting stuck", "Clarify the current handoff", "Choose the highest-value first move"] },
  { icon: Layers3, number: "02", title: "Fit the playbook", copy: "Start with the ready-built workflow, then align it to your offers, team roles, guest voice, and the systems already running your venue.", points: ["Use the sequence that starts ready", "Make the ownership fit your team", "Shape the message around your brand"] },
  { icon: Settings2, number: "03", title: "Put it to work", copy: "Activate the workflow and make the next action visible. Your team stays in control while the repeatable work keeps moving.", points: ["Keep context with the next step", "Make follow-through more consistent", "Review what improves with the team"] },
];

const faqs = [
  { question: "Where does FEC Playbook™ start?", answer: "Start with a 30-Minute FEC Demo. We identify the party lead, guest communication, review, return-visit, or handoff problem that needs attention first." },
  { question: "Do we have to build the workflows ourselves?", answer: "No. The sequence, timing, handoffs, and next actions start ready. Your team shapes the details that make the workflow fit the way your venue operates." },
  { question: "What happens to the systems we already use?", answer: "Your POS and booking tools can keep running the transaction. FEC Playbook™ adds a connected process around the lead ownership, communication, feedback, and return-visit work." },
];

const schema = [
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" }, { "@type": "ListItem", position: 2, name: "How It Works", item: "https://www.fecplaybook.com/how-it-works" }] },
];

function DemoCta({ placement, className = "" }: { placement: string; className?: string }) {
  return <a href="/book-a-demo" onClick={() => trackEvent("cta_book_demo_clicked", { placement })} className={`fec-btn-primary justify-center px-6 py-3.5 text-sm normal-case tracking-normal ${className}`}><CalendarCheck size={17} aria-hidden="true" />Book a Demo</a>;
}

export default function HowItWorks() {
  return (
    <div className="fec-page overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta title="How FEC Playbook™ Is Activated for Your Venue" description="FEC Playbook™ starts with ready-built FEC workflows, then fits them to your team, offers, brand, and current systems—without a rip-and-replace decision." path="/how-it-works" />
      <StructuredData data={schema} />
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-[#0D1B3E]/10 bg-[#fcfcfa] pb-18 pt-32 sm:pb-24 sm:pt-40">
          <div className="pointer-events-none absolute left-[45%] top-0 hidden h-full w-px bg-[#0D1B3E]/8 lg:block" />
          <div className="pointer-events-none absolute right-0 top-8 h-72 w-72 rounded-full bg-[#00AEEF]/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div className="max-w-2xl"><p className="fec-eyebrow">A ready-built system, fitted to your FEC</p><h1 className="fec-display mt-4 text-5xl sm:text-6xl">No blank platform. No new operating manual.</h1><p className="fec-copy mt-6 text-base sm:text-lg">FEC Playbook™ starts with proven FEC workflows, then fits the details to your brand, offers, team, and the systems already running your venue.</p><DemoCta placement="how_it_works_hero" className="mt-8 w-full sm:w-auto" /></div>
            <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.14)] sm:p-3"><div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Party lead workflow</div><img src={ASSETS.party} alt="FEC Playbook™ party lead workflow showing a ready-built process" className="mt-2 w-full rounded-lg" /></div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24" id="activation">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="fec-eyebrow">The activation path</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Start with the work that needs to move.</h2><p className="fec-copy mt-5 text-base sm:text-lg">The system is already built. The work is to make it fit your venue, your team, and the guest experience you want to deliver.</p></div>
            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-[#0D1B3E]/15 lg:block" />
              {steps.map((step) => { const Icon = step.icon; return <article key={step.number} className="relative fec-surface bg-[#fcfcfa] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00AEEF]/12 text-[#0c719a]"><Icon size={20} aria-hidden="true" /></span><span className="text-xs font-extrabold tracking-[0.14em] text-[#0c719a]">{step.number}</span></div><h3 className="mt-7 text-2xl font-bold tracking-[-0.035em] text-[#0D1B3E]">{step.title}</h3><p className="fec-copy mt-4 text-sm sm:text-base">{step.copy}</p><ul className="mt-6 space-y-3 border-t border-[#0D1B3E]/12 pt-5">{step.points.map((point) => <li key={point} className="flex gap-2 text-sm text-[#526070]"><Check size={15} className="mt-1 shrink-0 text-[#0c719a]" aria-hidden="true" />{point}</li>)}</ul></article>; })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#f2f5f6] py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8"><div><p className="fec-eyebrow">A clearer change than a rip-and-replace</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Keep what runs the venue. Improve the work around it.</h2></div><div className="overflow-hidden rounded-2xl border border-[#0D1B3E]/12 bg-white"><div className="grid grid-cols-2 border-b border-[#0D1B3E]/12 bg-[#0D1B3E] text-xs font-bold uppercase tracking-[0.12em] text-white"><div className="px-5 py-4 text-white/65 sm:px-7">Keep</div><div className="border-l border-white/15 px-5 py-4 sm:px-7">Improve</div></div>{[["Existing POS and booking systems", "Lead ownership and follow-up"], ["Your brand, offers, and policies", "Confirmations and routine communication"], ["The team’s judgment and guest care", "Repetitive administrative work"]].map(([keep, improve]) => <div key={keep} className="grid grid-cols-2 border-b border-[#0D1B3E]/12 last:border-b-0"><p className="px-5 py-5 text-sm leading-relaxed text-[#526070] sm:px-7 sm:text-base">{keep}</p><p className="border-l border-[#0D1B3E]/12 px-5 py-5 text-sm font-semibold leading-relaxed text-[#0D1B3E] sm:px-7 sm:text-base">{improve}</p></div>)}</div></div>
        </section>

        <section className="bg-[#0D1B3E] py-18 text-white sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#59c9ee]">What daily execution looks like</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">The team sees the next action. The system handles the repeatable work.</h2><div className="mt-7 space-y-4">{["A party inquiry is assigned and followed up.", "A booked family receives the information that helps them arrive prepared.", "A guest experience has a route to feedback, reviews, and a relevant next visit."].map((item) => <p key={item} className="flex gap-3 text-sm leading-relaxed text-white/75"><CircleDot size={16} className="mt-1 shrink-0 text-[#59c9ee]" aria-hidden="true" />{item}</p>)}</div></div><div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-3"><div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070]"><span className="h-2 w-2 rounded-full bg-[#00AEEF]" />FEC Playbook™ / Conversations</div><img src={ASSETS.conversations} alt="FEC Playbook™ Conversations area with assigned guest messages and next steps" className="mt-2 w-full rounded-lg" /></div></div></section>

        <section className="bg-[#fcfcfa] py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="fec-eyebrow">Straight answers</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Understand the path before you book.</h2><p className="fec-copy mt-5 max-w-md text-base">The demo is a working session, not a generic product tour.</p><DemoCta placement="how_it_works_faq" className="mt-7 w-full sm:w-auto" /></div><div className="divide-y divide-[#0D1B3E]/12 border-y border-[#0D1B3E]/12">{faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-lg font-bold tracking-[-0.025em] text-[#0D1B3E]">{faq.question}</h3><p className="fec-copy mt-3 text-sm sm:text-base">{faq.answer}</p></article>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
