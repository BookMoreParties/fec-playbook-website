import { useState } from "react";
import { ArrowRight, CalendarCheck, Check, ChevronDown, ChevronUp, CircleDot, MessageSquare, Star, UsersRound } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const ASSETS = {
  pipeline: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663283664117/jzOfDimigbKrwlMX.png",
  inbox: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663283664117/CjPKBzNWRmmnOPtW.png",
  feedback: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663283664117/JWFcYpXKJogiUQzt.png",
};

const revenueMoments = [
  {
    icon: UsersRound,
    title: "Party lead",
    outcome: "Every inquiry gets an owner and next step.",
    copy: "Capture the inquiry, route it to the right person, and keep follow-up visible before interest cools.",
  },
  {
    icon: CalendarCheck,
    title: "Booked event",
    outcome: "Every family gets the right information at the right time.",
    copy: "Confirmations, reminders, guest details, and team handoffs keep moving when the schedule gets busy.",
  },
  {
    icon: Star,
    title: "Guest feedback",
    outcome: "Every great experience has a route to public proof.",
    copy: "Create a consistent way to ask for feedback, invite reviews, and put guest concerns in front of the team.",
  },
  {
    icon: MessageSquare,
    title: "Return visit",
    outcome: "Every guest has a relevant reason to come back.",
    copy: "Use the moments that already matter to deliver follow-up that feels timely instead of generic.",
  },
];

const faqs = [
  {
    question: "What is FEC Playbook™?",
    answer: "FEC Playbook™ is a revenue operating system built for Family Entertainment Centers. It brings party-lead follow-up, guest communication, reviews, and return-visit work into one connected process around the systems your venue already uses.",
  },
  {
    question: "Do we have to build the workflows ourselves?",
    answer: "No. The workflow sequence, follow-up timing, ownership, and repeatable next steps start ready. Your venue shapes the offers, policies, team roles, and guest voice that make the system fit.",
  },
  {
    question: "Does FEC Playbook™ replace our POS or booking system?",
    answer: "No. Your POS and booking tools can continue to run the transaction. FEC Playbook™ helps your team run the lead ownership, communication, review, and return-visit work around it.",
  },
];

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.fecplaybook.com/#organization",
    name: "FEC Playbook™",
    url: "https://www.fecplaybook.com/",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png",
    description: "A revenue operating system for Family Entertainment Centers that helps teams move party leads, guest communication, reviews, and return visits forward.",
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

function ReviewCta({ placement, className = "" }: { placement: string; className?: string }) {
  return (
    <a
      href="/book-a-demo"
      onClick={() => trackEvent("cta_book_revenue_review_clicked", { placement })}
      className={`fec-btn-primary justify-center px-6 py-3.5 text-sm normal-case tracking-normal ${className}`}
    >
      <CalendarCheck size={17} aria-hidden="true" />
      Book a 30-Minute FEC Revenue Review
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="fec-page overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="FEC Revenue Operating System for More Booked Parties | FEC Playbook™"
        description="FEC Playbook™ helps Family Entertainment Centers consolidate revenue work, move party leads faster, automate routine communication, earn more reviews, and create more return visits."
        path="/"
      />
      <StructuredData data={homeStructuredData} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden border-b border-[#0D1B3E]/10 bg-[#fcfcfa] pb-20 pt-32 sm:pb-28 sm:pt-40">
          <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#00AEEF]/10 blur-3xl" />
          <div className="pointer-events-none absolute left-[56%] top-0 hidden h-full w-px bg-[#0D1B3E]/8 lg:block" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:px-8">
            <div className="max-w-2xl">
              <p className="fec-eyebrow">Built for Family Entertainment Centers</p>
              <h1 className="fec-display mt-5 text-[3.15rem] sm:text-6xl lg:text-[4.45rem]">More booked parties. Less busywork.</h1>
              <p className="fec-copy mt-7 max-w-xl text-base sm:text-lg">
                FEC Playbook™ brings your party leads, guest communication, reviews, and return-visit work into one FEC revenue operating system—so your team spends less time switching tools and more time moving guests forward.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ReviewCta placement="hero" className="w-full sm:w-auto" />
                <a href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-[#0D1B3E] transition-colors hover:text-[#0c719a] sm:justify-start">
                  See how it works <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#526070]">Keep the systems that run your venue. Put the revenue work around them in motion.</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.16)] sm:p-3">
                <div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070] sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
                  <span>FEC Playbook™ / Party lead workflow</span>
                </div>
                <img src={ASSETS.pipeline} alt="FEC Playbook™ party lead pipeline with visible follow-up stages" className="mt-2 aspect-[4/3] w-full rounded-lg object-cover object-left-top" />
                <div className="flex items-center gap-3 px-3 py-4 sm:px-4">
                  <CircleDot size={17} className="shrink-0 text-[#00AEEF]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-snug text-[#0D1B3E]">Every inquiry has an owner and next step.</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 -z-10 hidden h-36 w-36 rounded-2xl border border-[#0D1B3E]/10 bg-white lg:block" />
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:px-8">
            <div>
              <p className="fec-eyebrow">The operational problem</p>
              <h2 className="fec-display mt-4 max-w-xl text-4xl sm:text-5xl">Your team should not have to run revenue from five different tools.</h2>
            </div>
            <div className="space-y-4 border-t border-[#0D1B3E]/12 pt-4 lg:pt-0">
              {[
                "Party leads wait while staff switch between forms, inboxes, texts, and spreadsheets.",
                "Confirmations, reminders, and follow-up become more manual work on the busiest days.",
                "A great guest visit ends without a clear next step toward a review or return visit.",
              ].map((problem) => (
                <div key={problem} className="flex gap-3 border-b border-[#0D1B3E]/12 py-4 last:border-b-0">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00AEEF]" />
                  <p className="text-base leading-relaxed text-[#526070]">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#f2f5f6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="fec-eyebrow">A simpler operating picture</p>
              <h2 className="fec-display mt-4 text-4xl sm:text-5xl">One operating system for the work around the transaction.</h2>
              <p className="fec-copy mt-5 text-base sm:text-lg">FEC Playbook™ keeps the revenue work visible and moving while your existing POS and booking systems continue to run the venue.</p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#0D1B3E]/12 bg-white">
              <div className="grid grid-cols-2 border-b border-[#0D1B3E]/12 bg-[#0D1B3E] text-xs font-bold uppercase tracking-[0.12em] text-white">
                <div className="px-5 py-4 text-white/65 sm:px-7">Before</div>
                <div className="border-l border-white/15 px-5 py-4 sm:px-7">With FEC Playbook™</div>
              </div>
              {[
                ["Separate inboxes, forms, review tools, manual follow-up, and campaign tools", "Connected lead ownership, guest communication, review requests, follow-up, and visibility"],
                ["Repetitive staff work", "Ready-built workflows running in the background"],
                ["Revenue work hidden in separate systems", "Clear next actions for your team"],
              ].map(([before, after]) => (
                <div key={before} className="grid grid-cols-2 border-b border-[#0D1B3E]/12 last:border-b-0">
                  <p className="px-5 py-5 text-sm leading-relaxed text-[#526070] sm:px-7 sm:py-6 sm:text-base">{before}</p>
                  <p className="border-l border-[#0D1B3E]/12 px-5 py-5 text-sm font-semibold leading-relaxed text-[#0D1B3E] sm:px-7 sm:py-6 sm:text-base">{after}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fcfcfa] py-18 sm:py-24" id="revenue-moments">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 border-b border-[#0D1B3E]/12 pb-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <p className="fec-eyebrow">From first inquiry to the next visit</p>
                <h2 className="fec-display mt-4 text-4xl sm:text-5xl">The revenue moments that should keep moving.</h2>
              </div>
              <p className="fec-copy max-w-xl text-base sm:justify-self-end sm:text-lg">Every workflow begins with a familiar moment your team already handles. The difference is a clear owner, next action, and follow-through already in place.</p>
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
              {revenueMoments.map((moment, index) => {
                const Icon = moment.icon;
                return (
                  <article key={moment.title} className="group border-b border-[#0D1B3E]/12 py-8 first:pt-0 md:odd:pr-6 md:even:pl-6 md:even:border-l md:even:border-[#0D1B3E]/12 md:nth-[2]:pt-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00AEEF]/12 text-[#0c719a]"><Icon size={19} aria-hidden="true" /></span>
                      <p className="fec-eyebrow">0{index + 1} / {moment.title}</p>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-[#0D1B3E]">{moment.outcome}</h3>
                    <p className="fec-copy mt-3 text-sm sm:text-base">{moment.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0D1B3E]/10 bg-white py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
            <div className="order-2 lg:order-1">
              <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(13,27,62,0.14)] sm:p-3">
                <div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070] sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
                  <span>FEC Playbook™ / Guest feedback workflow</span>
                </div>
                <img src={ASSETS.feedback} alt="FEC Playbook™ guest feedback workflow with review-request follow-up and response actions" className="mt-2 w-full rounded-lg" />
              </div>
            </div>
            <div className="order-1 max-w-xl lg:order-2 lg:justify-self-end">
              <p className="fec-eyebrow">Turn a great visit into public proof</p>
              <h2 className="fec-display mt-4 text-4xl sm:text-5xl">Reviews should not depend on someone remembering to ask.</h2>
              <p className="fec-copy mt-6 text-base sm:text-lg">Give every guest experience a clear path to feedback, a review request, and the right response. The system keeps it moving while your team stays focused on the experience in front of them.</p>
              <a href="/features" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0D1B3E] transition-colors hover:text-[#0c719a]">See how review work fits the system <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="border-y border-[#0D1B3E]/10 bg-[#0D1B3E] py-18 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
            <div className="max-w-xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#59c9ee]">Make more time for the work guests notice</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Let the system handle the repeatable work.</h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">FEC Playbook™ does not replace the people who make your venue great. It removes the routine work that keeps them in inboxes, spreadsheets, and scattered logins—so they can respond faster, serve guests better, and focus on the moments only people can handle.</p>
              <a href="/features" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#59c9ee] transition-colors hover:text-white">See the outcomes <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="fec-surface overflow-hidden p-2 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-3">
              <div className="flex items-center gap-2 border-b border-[#0D1B3E]/10 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#526070] sm:px-4">
                <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
                <span>FEC Playbook™ / Conversations</span>
              </div>
              <img src={ASSETS.inbox} alt="FEC Playbook™ Conversations area showing guest messages, assignment, and the next step" className="mt-2 w-full rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8">
            <div>
              <p className="fec-eyebrow">Ready-built, not a blank platform</p>
              <h2 className="fec-display mt-4 max-w-2xl text-4xl sm:text-5xl">You bring the brand. FEC Playbook™ brings the playbook.</h2>
              <p className="fec-copy mt-6 max-w-xl text-base sm:text-lg">The workflows for party follow-up, booking confirmation, review requests, and repeat-visit communication start ready. We shape them around your offers, team, and guest journey before they go live.</p>
              <ReviewCta placement="ready_built" className="mt-8 w-full sm:w-auto" />
            </div>
            <div className="fec-surface p-6 sm:p-8">
              <p className="fec-eyebrow">What starts ready</p>
              <ul className="mt-6 space-y-5">
                {[
                  ["The sequence", "Follow-up timing and the next action at each revenue moment."],
                  ["The ownership", "Clear handoffs that keep the work from relying on memory."],
                  ["The follow-through", "Guest communication that keeps moving when your team is busy."],
                ].map(([title, copy]) => (
                  <li key={title} className="flex gap-3">
                    <Check size={18} className="mt-1 shrink-0 text-[#0c719a]" aria-hidden="true" />
                    <div><p className="font-bold text-[#0D1B3E]">{title}</p><p className="mt-1 text-sm leading-relaxed text-[#526070]">{copy}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f5f6] py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
            <div>
              <p className="fec-eyebrow">Built by FEC operators</p>
              <h2 className="fec-display mt-4 text-4xl sm:text-5xl">A better system should feel simpler for the team using it.</h2>
              <p className="fec-copy mt-5 max-w-md text-base">FEC Playbook™ is shaped around the work real FEC teams do every day—not generic software that asks them to design the process first.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="fec-surface p-6">
                <blockquote className="text-base font-medium leading-relaxed text-[#0D1B3E]">“Five-star reviews have skyrocketed. People were always thanking us but never leaving a review. Now they have an easy way to give us a shout out.”</blockquote>
                <figcaption className="mt-5 text-sm text-[#526070]"><span className="font-bold text-[#0D1B3E]">Theresa</span> · FEC Operator</figcaption>
              </figure>
              <figure className="fec-surface p-6">
                <blockquote className="text-base font-medium leading-relaxed text-[#0D1B3E]">“Our party confirmation process is so much more efficient. The chat functions make communicating with our customers easier and quicker.”</blockquote>
                <figcaption className="mt-5 text-sm text-[#526070]"><span className="font-bold text-[#0D1B3E]">Rilee</span> · Events Manager, FEC</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfcfa] py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="fec-eyebrow">Straight answers</p>
              <h2 className="fec-display mt-4 text-4xl sm:text-5xl">Before you book a Revenue Review.</h2>
              <p className="fec-copy mt-5 max-w-md text-base">Bring the people closest to party, guest, or sales follow-up. We will find the work getting stuck and map a practical next step.</p>
              <ReviewCta placement="faq" className="mt-7 w-full sm:w-auto" />
            </div>
            <div className="divide-y divide-[#0D1B3E]/12 border-y border-[#0D1B3E]/12">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <article key={faq.question}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left" aria-expanded={open}>
                      <span className="text-lg font-bold tracking-[-0.025em] text-[#0D1B3E]">{faq.question}</span>
                      {open ? <ChevronUp size={19} className="shrink-0 text-[#0c719a]" aria-hidden="true" /> : <ChevronDown size={19} className="shrink-0 text-[#0c719a]" aria-hidden="true" />}
                    </button>
                    {open && <p className="fec-copy max-w-3xl pb-6 text-sm sm:text-base">{faq.answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#00AEEF] py-18 text-[#07111f] sm:py-22">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#07111f]/70">Your next move</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">See what FEC Playbook™ can take off your team’s plate.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#07111f]/75">Find the revenue work getting stuck and the ready-built workflows that fit.</p>
            </div>
            <ReviewCta placement="final_cta" className="shrink-0 bg-[#07111f] text-white hover:bg-[#0D1B3E]" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
