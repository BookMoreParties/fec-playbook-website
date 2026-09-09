/**
 * FEC Playbook™ — Revenue Playbooks
 * Design: Bold sports/action system with black/white contrast, cyan impact accents,
 * oversized index numbers, and angular operating-system visual language.
 */

import { ArrowRight, CheckCircle2, ClipboardCheck, Compass, Layers3, Phone, Play, ShieldCheck, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import StructuredData from "@/components/StructuredData";

const revenuePlaybooks = [
  {
    number: "01",
    title: "Birthday & Celebration Sales",
    moment: "A family is planning a birthday, celebration, or special occasion.",
    ready: ["Inquiry capture and ownership", "Timely follow-up and reminders", "Event-prep communication", "Post-event review and return-visit follow-through"],
    tailor: "Your packages, policies, offers, brand voice, and team handoffs.",
    next: "The right person sees the next guest action without rebuilding the process.",
    accent: "#00AEEF",
  },
  {
    number: "02",
    title: "Group & Corporate Events",
    moment: "A school, company, team, or community group asks about an event.",
    ready: ["Dedicated inquiry routing", "Ownership and follow-up logic", "Proposal and reminder sequences", "Long-lead nurture checkpoints"],
    tailor: "Your group packages, sales ownership, timing, and follow-up standards.",
    next: "The opportunity follows a defined route from first question to confirmed event.",
    accent: "#1565C0",
  },
  {
    number: "03",
    title: "Guest Visit Communication",
    moment: "A guest visits, purchases, asks a question, or changes an existing booking.",
    ready: ["Visit-triggered communication", "Guest history awareness", "Reschedule and cancellation handling", "Team notifications and follow-through"],
    tailor: "Your guest messaging, escalation rules, service standards, and offers.",
    next: "Guest communication keeps moving without relying on a staff member to remember every step.",
    accent: "#00AEEF",
  },
  {
    number: "04",
    title: "Reputation Protection",
    moment: "A visit, party, or event creates a chance to earn feedback and strengthen trust.",
    ready: ["Review-request timing", "Guest feedback routing", "Response-ready workflows", "Visibility into recurring themes"],
    tailor: "Your response voice, review rules, guest experience standards, and escalation owners.",
    next: "Your team has a consistent process for turning experiences into useful feedback and public proof.",
    accent: "#1565C0",
  },
  {
    number: "05",
    title: "Membership Lifecycle",
    moment: "A guest joins, uses, pauses, or approaches renewal for a membership or pass.",
    ready: ["Onboarding messages", "Usage nudges", "Renewal follow-through", "Re-engagement checkpoints"],
    tailor: "Your membership benefits, cadence, renewal offers, policies, and tone.",
    next: "Members receive the right next message based on where they are in the lifecycle.",
    accent: "#00AEEF",
  },
  {
    number: "06",
    title: "Text Club & Repeat Visits",
    moment: "A guest is ready for a reason to come back, engage with an offer, or hear about what is next.",
    ready: ["Permission-based subscriber growth", "Audience grouping", "Offer and bounce-back sequences", "Seasonal campaign workflows"],
    tailor: "Your promotions, calendar, audience rules, offers, and message style.",
    next: "Repeat-visit communication runs from a planned system instead of a last-minute send.",
    accent: "#1565C0",
  },
  {
    number: "07",
    title: "Sales Accountability",
    moment: "A lead, booking, group event, or task needs a clear owner and visible next step.",
    ready: ["Pipeline stages", "Ownership routing", "Task and reminder logic", "Progress visibility"],
    tailor: "Your team roles, stage definitions, response expectations, and management rhythm.",
    next: "Leads and opportunities are easier to see, assign, and move forward.",
    accent: "#00AEEF",
  },
  {
    number: "08",
    title: "Fundraising & Referrals",
    moment: "A school, nonprofit, partner, or community contact opens a potential group or fundraising conversation.",
    ready: ["Request intake and qualification", "Follow-up sequences", "Fundraiser proposal routing", "Community relationship reminders"],
    tailor: "Your eligibility rules, fundraising offers, partnership language, and team ownership.",
    next: "Community interest follows an intentional path instead of disappearing into an inbox.",
    accent: "#1565C0",
  },
];

const faqs = [
  {
    question: "What is an FEC Revenue Playbook?",
    answer: "An FEC Revenue Playbook is a ready-built operating system for a specific revenue moment, such as a birthday inquiry, a group event, a return visit, or a membership renewal. It combines workflow, automation, ownership, timing, and follow-up so the team does not start from a blank screen.",
  },
  {
    question: "Do we have to build the automations ourselves?",
    answer: "No. FEC Playbook™ starts with 100+ pre-built automations and ready-built playbook logic. Your venue provides the brand, offers, policies, team ownership, and available data sources; the system is then adapted to fit how your operation runs.",
  },
  {
    question: "How does FEC Playbook™ work with our existing systems?",
    answer: "CenterEdge is the official partner. Other supported systems may be connected through the appropriate data-import path, confirmed during your 30-Minute FEC Revenue Review. FEC Playbook™ is designed to run alongside your current operational systems rather than require a rip-and-replace decision.",
  },
];

const faqSchema = {
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fecplaybook.com/" },
    { "@type": "ListItem", position: 2, name: "Revenue Playbooks", item: "https://www.fecplaybook.com/playbook" },
  ],
};

export default function Playbook() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta
        title="8 Revenue Playbooks for Family Entertainment Centers"
        description="Explore FEC Playbook™'s eight ready-built Revenue Playbooks: FEC-specific systems that turn birthday sales, group events, guest communication, retention, and referrals into consistent action."
        path="/playbook"
      />
      <StructuredData data={[faqSchema, breadcrumbSchema]} />
      <Navigation />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#0A0A0A] pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "linear-gradient(112deg, transparent 0 48%, #00AEEF 48.1% 48.25%, transparent 48.4% 100%), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 54px 54px",
            }}
          />
          <div className="absolute right-[-12rem] top-14 h-80 w-80 -rotate-12 border-[38px] border-[#00AEEF]/10" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3 text-[#00AEEF]">
                <span className="h-px w-10 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.22em]">The operating-system layer</span>
              </div>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                8 Revenue Playbooks.
                <span className="block text-[#00AEEF]">Already Built.</span>
                Ready for FEC Operations.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
                An FEC Revenue Playbook is a ready-built system of workflow, automation, ownership, timing, and follow-up around a specific revenue moment. FEC Playbook™ supplies the system; your venue brings the brand, offers, team, and operating context that make it yours.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="/book-a-demo" className="fec-btn-primary px-7 py-4 text-sm">
                  <Phone size={18} />
                  Map Your First Playbooks
                </a>
                <a href="#playbooks" className="inline-flex items-center gap-2 px-2 text-sm font-black uppercase tracking-wide text-white/70 transition-colors hover:text-[#00AEEF]">
                  See all 8 systems <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative border border-[#00AEEF]/40 bg-[#071629] p-6 shadow-[18px_18px_0_rgba(0,174,239,.18)] sm:p-8">
              <span className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]" aria-hidden="true">
                <Play className="ml-0.5" size={17} fill="currentColor" />
              </span>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">The offer architecture</p>
              <div className="mt-8 space-y-6">
                {[
                  ["08", "Revenue Playbooks", "The operating systems for revenue moments."],
                  ["13", "Core Modules", "The connected capabilities that make the systems run."],
                  ["100+", "Pre-Built Automations", "Ready-to-activate triggers, handoffs, and follow-up."],
                ].map(([number, label, detail]) => (
                  <div key={label} className="grid grid-cols-[4.4rem_1fr] gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <span className="text-3xl font-black leading-none text-white">{number}</span>
                    <div>
                      <p className="font-black uppercase tracking-wide text-white">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="playbooks" className="relative bg-white py-16 text-[#0A0A0A] sm:py-24">
          <div className="absolute left-0 top-0 h-3 w-[30%] bg-[#00AEEF]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 border-b border-black/15 pb-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <div>
                <span className="mb-4 flex h-10 w-10 items-center justify-center bg-[#00AEEF] text-[#0A0A0A]" aria-hidden="true">
                  <Play className="ml-0.5" size={18} fill="currentColor" />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1565C0]">The revenue map</p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl">A proven route for the moments that move your FEC forward.</h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
                These are not ten generic feature bundles. Each Revenue Playbook is a ready-built system for one high-value operating moment, adapted to your venue during activation.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {revenuePlaybooks.map((playbook, index) => (
                <article key={playbook.title} className={`group relative overflow-hidden border border-black/15 bg-[#F3F6F8] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${index === 0 || index === 5 ? "md:col-span-2" : ""}`}>
                  <div className="absolute right-5 top-3 text-7xl font-black leading-none text-black/[0.06]" aria-hidden="true">{playbook.number}</div>
                  <div className="relative flex items-start gap-5">
                    <span className="flex h-11 w-11 flex-none items-center justify-center border-2 text-sm font-black" style={{ borderColor: playbook.accent, color: playbook.accent }}>
                      {playbook.number}
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: playbook.accent }}>Revenue Playbook</p>
                      <h3 className="mt-2 text-2xl font-black uppercase leading-[0.95] tracking-[-0.035em] sm:text-3xl">{playbook.title}</h3>
                    </div>
                  </div>
                  <div className="relative mt-7 grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.17em] text-black/45">The revenue moment</p>
                      <p className="mt-2 leading-relaxed text-black/75">{playbook.moment}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.17em] text-black/45">What arrives ready</p>
                      <ul className="mt-3 space-y-2">
                        {playbook.ready.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-snug text-black/75">
                            <CheckCircle2 size={15} className="mt-0.5 flex-none" style={{ color: playbook.accent }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.17em] text-black/45">What you tailor</p>
                        <p className="mt-2 text-sm leading-relaxed text-black/75">{playbook.tailor}</p>
                      </div>
                      <div className="border-l-2 pl-3" style={{ borderColor: playbook.accent }}>
                        <p className="text-[11px] font-black uppercase tracking-[0.17em] text-black/45">What the team sees next</p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-black/80">{playbook.next}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full" style={{ background: playbook.accent }} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-28">
          <div className="absolute left-0 top-0 h-full w-2 bg-[#00AEEF]" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
            <div>
              <div className="flex items-center gap-3 text-[#00AEEF]">
                <span className="h-px w-10 bg-[#00AEEF]" />
                <span className="text-xs font-black uppercase tracking-[0.22em]">Activation support</span>
              </div>
              <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                The playbook arrives built. <span className="text-[#00AEEF]">Your brand makes it yours.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                FEC Playbook™ does not hand your team a blank platform and a pile of configuration work. We start with proven FEC operating logic, then activate it around your offers, policies, team ownership, brand voice, and confirmed data sources.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["01", "Bring your brand", "Offers, policies, team roles, guest experience, and voice."],
                ["02", "Activate the systems", "Ready-built playbooks, automations, ownership, and timing."],
                ["03", "Run with support", "FEC-specific guidance through activation and daily operations."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4 border border-white/10 bg-white/[0.035] p-5">
                  <span className="text-2xl font-black text-[#00AEEF]">{number}</span>
                  <div>
                    <p className="font-black uppercase text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D1B3E] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00AEEF]">The capability layer</p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl">The 13 Core Modules make every playbook run.</h2>
              </div>
              <div className="border-l-2 border-[#00AEEF] pl-5 sm:pl-7">
                <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                  Playbooks are the operating systems. Core Modules are the connected capabilities behind them: inboxes, forms, pipelines, automations, email, text, reporting, and more. Together they turn one operating strategy into daily execution.
                </p>
                <a href="/features" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#00AEEF] transition-all hover:gap-3">
                  See the 13 Core Modules <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00AEEF]">Straight answers</p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl">Before you book a Revenue Review.</h2>
                <p className="mt-5 max-w-md leading-relaxed text-white/60">Bring the people closest to party, group, guest follow-up, or operating decisions. We will map the relevant systems around your current operation.</p>
                <a href="/book-a-demo" className="fec-btn-primary mt-8 px-7 py-4 text-sm">
                  <Phone size={17} />
                  Book a 30-Minute FEC Revenue Review
                </a>
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {faqs.map((faq, index) => (
                  <article key={faq.question} className="py-7 first:pt-0 last:pb-0">
                    <div className="flex gap-4">
                      <span className="text-xl font-black text-[#00AEEF]">0{index + 1}</span>
                      <div>
                        <h3 className="text-xl font-black uppercase leading-tight text-white">{faq.question}</h3>
                        <p className="mt-3 max-w-3xl leading-relaxed text-white/65">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#00AEEF] py-16 text-[#0A0A0A] sm:py-20">
          <div className="absolute right-[8%] top-[-5rem] text-[16rem] font-black leading-none text-white/20" aria-hidden="true">08</div>
          <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A]/70">Your next move</p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-6xl">Map your first playbooks in a 30-minute Revenue Review.</h2>
            </div>
            <a href="/book-a-demo" className="inline-flex w-fit items-center gap-2 bg-[#0A0A0A] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1">
              <Compass size={18} />
              Book a Revenue Review
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
