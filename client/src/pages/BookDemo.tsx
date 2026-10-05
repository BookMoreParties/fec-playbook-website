import { useEffect } from "react";
import { CalendarCheck, Check, CircleDot, Map, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const LOGO_URL = "/manus-storage/fec-playbook-light-background-logo_55e28466.png";

const reviewFaqs = [
  { question: "What happens in a 30-Minute FEC Revenue Review?", answer: "We find where party leads, confirmations, guest communication, feedback, or team handoffs are getting stuck, then map the ready-built workflows that fit your venue." },
  { question: "Who should attend?", answer: "Bring the people who know how party, guest, or sales follow-up works today. Owner/operators, general managers, and sales or marketing leaders commonly join." },
  { question: "Do I need to prepare anything?", answer: "No preparation is required. Your current tools are helpful if you want a more specific conversation, but the review is designed to give you a clear starting point either way." },
];

const schema = [
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: reviewFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" }, { "@type": "ListItem", position: 2, name: "Book a Revenue Review", item: "https://www.fecplaybook.com/book-a-demo" }] },
];

export default function BookDemo() {
  useEffect(() => {
    const scriptId = "bookdemo-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.bookmore.app/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
    trackEvent("demo_page_viewed", { path: "/book-a-demo" });
  }, []);

  return (
    <div className="fec-page overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta title="Book a 30-Minute FEC Revenue Review | FEC Playbook™" description="Find where party leads, guest communication, reviews, or return-visit work are getting stuck, then see the ready-built FEC Playbook™ workflows that fit your venue." path="/book-a-demo" />
      <StructuredData data={schema} />
      <Navigation />
      <main>
        <section className="relative overflow-hidden border-b border-[#0D1B3E]/10 bg-[#fcfcfa] pb-18 pt-32 sm:pb-24 sm:pt-40"><div className="pointer-events-none absolute right-[-8rem] top-0 h-72 w-72 rounded-full bg-[#00AEEF]/10 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:px-8"><div className="max-w-2xl"><p className="fec-eyebrow">30-Minute FEC Revenue Review</p><h1 className="fec-display mt-4 text-5xl sm:text-6xl">Find the work that is costing you leads and time.</h1><p className="fec-copy mt-6 text-base sm:text-lg">We’ll look at your party-lead follow-up, guest communication, reviews, and return-visit work—then show you where a ready-built FEC Playbook™ workflow fits.</p><a href="#scheduling" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0D1B3E] transition-colors hover:text-[#0c719a]">Choose a time <CalendarCheck size={16} aria-hidden="true" /></a></div><div className="fec-surface bg-white p-6 shadow-[0_24px_70px_rgba(13,27,62,0.12)] sm:p-8"><p className="fec-eyebrow">A working session, not a generic product tour</p><ol className="mt-7 space-y-6">{[["01", "What is getting stuck", "Find the inquiry, communication, feedback, or return-visit work where the next action is unclear."], ["02", "What can move automatically", "See where ready-built timing, ownership, and follow-through can take repetitive work off the team."], ["03", "What a practical next step looks like", "Leave with a clearer view of which workflow fits your venue first."]].map(([number, title, copy]) => <li key={number} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00AEEF]/12 text-xs font-extrabold text-[#0c719a]">{number}</span><div><p className="font-bold text-[#0D1B3E]">{title}</p><p className="mt-1 text-sm leading-relaxed text-[#526070]">{copy}</p></div></li>)}</ol></div></div></section>

        <section id="scheduling" className="scroll-mt-24 bg-white py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><aside><p className="fec-eyebrow">What we will look at</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">Bring the people closest to the work.</h2><p className="fec-copy mt-5 text-base">The review is most useful when the people who own party, guest, sales, or operating decisions can share the current process.</p><div className="mt-8 space-y-5">{[[Target, "Revenue work", "Where leads, follow-up, and ownership are getting stuck."], [Map, "Ready-built workflows", "Which route fits your facility’s first opportunity."], [Users, "A practical path", "How the system can fit your team, brand, and current tools."]].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Target; return <div key={title as string} className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00AEEF]/12 text-[#0c719a]"><ItemIcon size={17} aria-hidden="true" /></span><div><p className="font-bold text-[#0D1B3E]">{title as string}</p><p className="mt-1 text-sm leading-relaxed text-[#526070]">{copy as string}</p></div></div>; })}</div><div className="mt-9 border-l-2 border-[#00AEEF] pl-4 text-sm leading-relaxed text-[#526070]">No preparation is required; your current tools are helpful if you want a more specific conversation.</div></aside>
          <div className="fec-surface overflow-hidden bg-[#f8fafb] shadow-[0_24px_70px_rgba(13,27,62,0.12)]"><div className="border-b border-[#0D1B3E]/10 bg-white px-5 py-5 sm:px-7"><div className="flex flex-wrap items-center gap-3"><img src={LOGO_URL} alt="FEC Playbook™" className="h-7 w-auto" /><span className="h-5 w-px bg-[#0D1B3E]/12" /><p className="text-sm font-bold text-[#0D1B3E]">Choose a 30-Minute FEC Revenue Review</p></div><div className="mt-4 grid gap-3 border-t border-[#0D1B3E]/10 pt-4 sm:grid-cols-2"><p className="flex gap-2 text-xs leading-relaxed text-[#526070]"><Users size={14} className="mt-0.5 shrink-0 text-[#0c719a]" />Bring the people who own party, guest, sales, or operating decisions.</p><p className="flex gap-2 text-xs leading-relaxed text-[#526070]"><Check size={14} className="mt-0.5 shrink-0 text-[#0c719a]" />The review is a working session, not a generic product tour.</p></div></div><div className="p-2"><iframe src="https://link.bookmore.app/widget/booking/Sd7Mk7F4D238JDTcGTWp" style={{ width: "100%", border: "none", display: "block", minHeight: "900px" }} scrolling="no" id="Sd7Mk7F4D238JDTcGTWp_bookdemo" title="Schedule a 30-Minute FEC Revenue Review" /></div></div>
        </div></section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#f2f5f6] py-18 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="fec-eyebrow">From review to activation</p><h2 className="fec-display mt-4 text-4xl sm:text-5xl">The system starts ready. Your team stays supported.</h2><p className="fec-copy mt-6 text-base sm:text-lg">After you decide what needs attention first, FEC Playbook™ helps fit the workflow to your team and put it to work around the systems you already use.</p></div><div className="grid gap-3">{[["Bring your venue context", "Your offers, policies, team roles, guest voice, and operating goals."], ["Fit the ready-built workflow", "The sequence, timing, ownership, and next actions begin ready."], ["Keep the work moving", "Your team has a clearer route for daily execution and improvement."]].map(([title, copy]) => <div key={title} className="fec-surface flex gap-4 p-5"><CircleDot size={18} className="mt-1 shrink-0 text-[#0c719a]" /><div><p className="font-bold text-[#0D1B3E]">{title}</p><p className="mt-1 text-sm leading-relaxed text-[#526070]">{copy}</p></div></div>)}</div></div></section>

        <section className="bg-[#fcfcfa] py-18 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6"><p className="fec-eyebrow text-center">Straight answers</p><h2 className="fec-display mt-4 text-center text-4xl sm:text-5xl">Before you choose a time.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{reviewFaqs.map((faq) => <article key={faq.question} className="fec-surface bg-white p-6"><h3 className="text-base font-bold tracking-[-0.02em] text-[#0D1B3E]">{faq.question}</h3><p className="fec-copy mt-3 text-sm">{faq.answer}</p></article>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
