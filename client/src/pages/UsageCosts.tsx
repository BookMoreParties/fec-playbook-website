/*
 * FEC Playbook™ — Usage Cost Calculator Page
 * Design: Dark bg, FEC Cyan accent, interactive sliders for real-time cost estimation
 * Mirrors the functionality of fecpricing-exhqebvr.manus.space estimator section
 */

import { useState } from "react";
import { Phone, Info, ChevronDown, ChevronUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SMS_RATE = 0.0228;
const EMAIL_RATE = 0.0014;

// ─── Rate Tables ─────────────────────────────────────────────────────────────
const usageRates = {
  email: [
    { label: "Email Sending", cost: "$0.0014", unit: "per email" },
    { label: "Email Verification (one-time)", cost: "$0.005", unit: "per verification" },
  ],
  sms: [
    { label: "SMS Outbound", cost: "$0.0228", unit: "per segment" },
    { label: "SMS Inbound", cost: "$0.0104", unit: "per segment" },
    { label: "Phone Calls (outbound)", cost: "$0.0140", unit: "per minute" },
    { label: "Phone Calls (inbound)", cost: "$0.0085", unit: "per minute" },
    { label: "Voicemail Drop", cost: "$0.0150", unit: "per drop" },
  ],
  compliance: [
    { label: "A2P 10DLC Registration", cost: "$4.00", unit: "one-time" },
    { label: "Carrier Compliance Fee", cost: "$0.003", unit: "per SMS" },
    { label: "Phone Number (local)", cost: "$1.15", unit: "per month" },
    { label: "Toll-Free Number", cost: "$2.15", unit: "per month" },
  ],
  ai: [
    { label: "AI Content Generation", cost: "$0.027", unit: "per 1,000 words" },
    { label: "Workflow Execution", cost: "$0.01", unit: "per 1,000 executions" },
    { label: "Premium Triggers", cost: "$0.01", unit: "per 1,000 triggers" },
    { label: "AI Conversation (per reply)", cost: "$0.02", unit: "per AI reply" },
  ],
};

// ─── Estimators ──────────────────────────────────────────────────────────────
function BirthdayEstimator() {
  const [leads, setLeads] = useState(100);
  const [conversion, setConversion] = useState(50);

  const bookings = Math.round(leads * (conversion / 100));
  const leadSMS = leads * 6;
  const leadEmails = leads * 3;
  const confirmSMS = bookings * 3;
  const confirmEmails = bookings * 1;
  const reviewSMS = bookings * 1;
  const reviewEmails = bookings * 1;
  const totalSMS = leadSMS + confirmSMS + reviewSMS;
  const totalEmails = leadEmails + confirmEmails + reviewEmails;
  const smsCost = totalSMS * SMS_RATE;
  const emailCost = totalEmails * EMAIL_RATE;
  const total = smsCost + emailCost;
  const perBooking = bookings > 0 ? total / bookings : 0;

  return (
    <EstimatorCard
      title="Birthday & Celebration Sales System"
      subtitle="SEE THE FULL BIRTHDAY PARTY WORKFLOW — AND WHAT IT COSTS."
      description="Adjust your monthly lead volume and conversion rate to see a real-time cost breakdown across all three stages of the Birthday & Celebration Sales System."
      icon="🎂"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-white/70 text-xs font-bold uppercase tracking-wide">Monthly Party Leads</label>
              <span className="text-[#00AEEF] font-black text-lg">{leads}</span>
            </div>
            <input type="range" min={10} max={500} value={leads} onChange={e => setLeads(Number(e.target.value))}
              className="fec-slider w-full" />
            <div className="flex justify-between text-white/30 text-xs mt-1"><span>10</span><span>500</span></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-white/70 text-xs font-bold uppercase tracking-wide">Lead-to-Booking Conversion Rate</label>
              <span className="text-[#00AEEF] font-black text-lg">{conversion}%</span>
            </div>
            <input type="range" min={10} max={90} value={conversion} onChange={e => setConversion(Number(e.target.value))}
              className="fec-slider w-full" />
            <div className="flex justify-between text-white/30 text-xs mt-1"><span>10%</span><span>90%</span></div>
          </div>
          <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4 text-center">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Estimated Monthly Bookings</p>
            <p className="text-[#00AEEF] font-black text-4xl">{bookings}</p>
          </div>
        </div>
        <div>
          <p className="text-white/50 text-xs font-bold uppercase tracking-wide mb-3">Messages Sent Per Stage</p>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/40 text-xs py-2">Stage</th>
                <th className="text-right text-white/40 text-xs py-2">SMS</th>
                <th className="text-right text-white/40 text-xs py-2">Emails</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-white/70 text-xs"><span className="text-[#00AEEF] font-bold mr-1">1</span> Lead Nurture</td>
                <td className="text-right text-white/70 text-xs">{leadSMS}</td>
                <td className="text-right text-white/70 text-xs">{leadEmails}</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-white/70 text-xs"><span className="text-[#00AEEF] font-bold mr-1">2</span> Confirmation</td>
                <td className="text-right text-white/70 text-xs">{confirmSMS}</td>
                <td className="text-right text-white/70 text-xs">{confirmEmails}</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-white/70 text-xs"><span className="text-[#00AEEF] font-bold mr-1">3</span> Review Request</td>
                <td className="text-right text-white/70 text-xs">{reviewSMS}</td>
                <td className="text-right text-white/70 text-xs">{reviewEmails}</td>
              </tr>
              <tr>
                <td className="py-2 text-white font-bold text-xs">Total</td>
                <td className="text-right text-[#00AEEF] font-bold text-xs">{totalSMS}</td>
                <td className="text-right text-[#00AEEF] font-bold text-xs">{totalEmails}</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-[#1565C0]/30 border border-[#1565C0]/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">SMS ({totalSMS} messages)</span>
              <span className="text-white font-bold">${smsCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Email ({totalEmails} emails)</span>
              <span className="text-white font-bold">${emailCost.toFixed(2)}</span>
            </div>
            <div className="border-t border-white/10 pt-2 flex justify-between">
              <span className="text-white font-bold text-sm">Total Monthly Usage</span>
              <span className="text-white font-black text-lg">${total.toFixed(2)}</span>
            </div>
            <div className="bg-[#00AEEF] rounded p-3 text-center mt-2">
              <p className="text-white/80 text-xs mb-1">Usage cost per completed booking</p>
              <p className="text-white font-black text-2xl">${perBooking.toFixed(3)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {[
          { num: "01", title: "Lead Capture & Nurturing", desc: `Website form submission triggers instant SMS + email, then a 14-day follow-up sequence.`, detail: `${leads} leads × 6 SMS + 3 emails each` },
          { num: "02", title: "Booking & Party Confirmation", desc: `Converted leads receive a booking confirmation email + 3 pre-party SMS reminders.`, detail: `${bookings} bookings × 3 SMS + 1 email each` },
          { num: "03", title: "Post-Party Review Request", desc: `After each party, an automated SMS and email request a review from the host.`, detail: `${bookings} parties × 1 SMS + 1 email each` },
        ].map(s => (
          <div key={s.num} className="bg-white/3 border border-white/8 rounded-lg p-4">
            <span className="text-[#00AEEF] font-black text-xs">{s.num}</span>
            <h4 className="text-white font-bold text-sm mt-1 mb-2">{s.title}</h4>
            <p className="text-white/50 text-xs mb-2">{s.desc}</p>
            <p className="text-[#00AEEF] text-xs font-semibold">{s.detail}</p>
          </div>
        ))}
      </div>
      <CostDisclaimer />
    </EstimatorCard>
  );
}

function GroupEventEstimator() {
  const [inquiries, setInquiries] = useState(40);
  const [conversion, setConversion] = useState(35);
  const [callDuration, setCallDuration] = useState(5);

  const bookings = Math.round(inquiries * (conversion / 100));
  const leadSMS = inquiries * 4;
  const leadEmails = inquiries * 5;
  const callMinutes = inquiries * callDuration;
  const confirmEmails = bookings * 2;
  const confirmSMS = bookings * 2;
  const totalSMS = leadSMS + confirmSMS;
  const totalEmails = leadEmails + confirmEmails;
  const smsCost = totalSMS * SMS_RATE;
  const emailCost = totalEmails * EMAIL_RATE;
  const callCost = callMinutes * 0.014;
  const total = smsCost + emailCost + callCost;
  const perBooking = bookings > 0 ? total / bookings : 0;

  return (
    <EstimatorCard
      title="Group & Corporate Event Engine"
      subtitle="GROUP & CORPORATE EVENT ENGINE — FULL WORKFLOW COST."
      description="Adjust your monthly inquiry volume, conversion rate, and follow-up call duration to see a real-time cost breakdown."
      icon="🏢"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <SliderField label="Monthly Group/Corporate Inquiries" value={inquiries} min={5} max={200} onChange={setInquiries} displayValue={String(inquiries)} />
          <SliderField label="Lead-to-Booking Conversion Rate" value={conversion} min={10} max={90} onChange={setConversion} displayValue={`${conversion}%`} minLabel="10%" maxLabel="90%" />
          <SliderField label="Avg. Follow-Up Call Duration (min)" value={callDuration} min={1} max={20} onChange={setCallDuration} displayValue={`${callDuration} min`} minLabel="1 min" maxLabel="20 min" />
          <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4 text-center mt-4">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Estimated Monthly Bookings</p>
            <p className="text-[#00AEEF] font-black text-4xl">{bookings}</p>
          </div>
        </div>
        <div>
          <CostBreakdown
            rows={[
              { label: `SMS (${totalSMS} messages)`, value: `$${smsCost.toFixed(2)}` },
              { label: `Email (${totalEmails} emails)`, value: `$${emailCost.toFixed(2)}` },
              { label: `Phone Calls (~${callMinutes} min)`, value: `$${callCost.toFixed(2)}` },
            ]}
            total={total}
            perBooking={perBooking}
          />
        </div>
      </div>
      <CostDisclaimer />
    </EstimatorCard>
  );
}

function TicketingEstimator() {
  const [tickets, setTickets] = useState(500);

  const smsCount = tickets * 2;
  const emailCount = tickets * 2;
  const smsCost = smsCount * SMS_RATE;
  const emailCost = emailCount * EMAIL_RATE;
  const total = smsCost + emailCost;
  const perBooking = tickets > 0 ? total / tickets : 0;

  return (
    <EstimatorCard
      title="Ticketing & Visit Automation"
      subtitle="TICKETING & VISIT AUTOMATION — FULL WORKFLOW COST."
      description="Adjust your monthly ticketed visit volume to see the full cost of automating guest communications."
      icon="🎟️"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <SliderField label="Monthly Ticketed Visits" value={tickets} min={50} max={5000} onChange={setTickets} displayValue={tickets.toLocaleString()} minLabel="50" maxLabel="5,000" />
          <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4 text-center mt-6">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Monthly Visits</p>
            <p className="text-[#00AEEF] font-black text-4xl">{tickets.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <CostBreakdown
            rows={[
              { label: `SMS (${smsCount.toLocaleString()} messages)`, value: `$${smsCost.toFixed(2)}` },
              { label: `Email (${emailCount.toLocaleString()} emails)`, value: `$${emailCost.toFixed(2)}` },
            ]}
            total={total}
            perBooking={perBooking}
          />
        </div>
      </div>
      <CostDisclaimer />
    </EstimatorCard>
  );
}

function TextClubEstimator() {
  const [subscribers, setSubscribers] = useState(1000);
  const [campaigns, setCampaigns] = useState(4);

  const totalSMS = subscribers * campaigns;
  const smsCost = totalSMS * SMS_RATE;
  const perSubscriber = subscribers > 0 ? smsCost / subscribers : 0;

  return (
    <EstimatorCard
      title="Text Club & Repeat Visit Engine"
      subtitle="TEXT CLUB & REPEAT VISIT ENGINE — FULL CAMPAIGN COST."
      description="Adjust your subscriber count and monthly campaign frequency to see your total SMS marketing cost."
      icon="📱"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <SliderField label="Text Club Subscribers" value={subscribers} min={100} max={10000} onChange={setSubscribers} displayValue={subscribers.toLocaleString()} minLabel="100" maxLabel="10,000" />
          <SliderField label="Campaigns Per Month" value={campaigns} min={1} max={12} onChange={setCampaigns} displayValue={`${campaigns} campaigns`} minLabel="1" maxLabel="12" />
          <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-4 text-center mt-4">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Total SMS Sent Monthly</p>
            <p className="text-[#00AEEF] font-black text-4xl">{totalSMS.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <div className="bg-[#1565C0]/30 border border-[#1565C0]/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">SMS ({totalSMS.toLocaleString()} messages)</span>
              <span className="text-white font-bold">${smsCost.toFixed(2)}</span>
            </div>
            <div className="border-t border-white/10 pt-2 flex justify-between">
              <span className="text-white font-bold text-sm">Total Monthly SMS Cost</span>
              <span className="text-white font-black text-lg">${smsCost.toFixed(2)}</span>
            </div>
            <div className="bg-[#00AEEF] rounded p-3 text-center mt-2">
              <p className="text-white/80 text-xs mb-1">Usage cost per subscriber per month</p>
              <p className="text-white font-black text-2xl">${perSubscriber.toFixed(3)}</p>
            </div>
          </div>
          <div className="mt-4 bg-white/3 border border-white/8 rounded-lg p-4">
            <p className="text-white/50 text-xs">At {subscribers.toLocaleString()} subscribers sending {campaigns} campaign{campaigns !== 1 ? 's' : ''}/month, your total SMS marketing cost is <strong className="text-white">${smsCost.toFixed(2)}/month</strong> — a fraction of what traditional marketing costs per customer reached.</p>
          </div>
        </div>
      </div>
      <CostDisclaimer />
    </EstimatorCard>
  );
}

// ─── Shared Sub-Components ────────────────────────────────────────────────────
function SliderField({ label, value, min, max, onChange, displayValue, minLabel, maxLabel }: {
  label: string; value: number; min: number; max: number;
  onChange: (v: number) => void; displayValue: string;
  minLabel?: string; maxLabel?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-white/70 text-xs font-bold uppercase tracking-wide">{label}</label>
        <span className="text-[#00AEEF] font-black text-lg">{displayValue}</span>
      </div>
      <input type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))}
        className="fec-slider w-full" />
      <div className="flex justify-between text-white/30 text-xs mt-1">
        <span>{minLabel ?? min}</span>
        <span>{maxLabel ?? max}</span>
      </div>
    </div>
  );
}

function CostBreakdown({ rows, total, perBooking }: {
  rows: { label: string; value: string }[];
  total: number;
  perBooking: number;
}) {
  return (
    <div className="bg-[#1565C0]/30 border border-[#1565C0]/50 rounded-lg p-4 space-y-2">
      {rows.map(r => (
        <div key={r.label} className="flex justify-between text-sm">
          <span className="text-white/60">{r.label}</span>
          <span className="text-white font-bold">{r.value}</span>
        </div>
      ))}
      <div className="border-t border-white/10 pt-2 flex justify-between">
        <span className="text-white font-bold text-sm">Total Monthly Usage</span>
        <span className="text-white font-black text-lg">${total.toFixed(2)}</span>
      </div>
      <div className="bg-[#00AEEF] rounded p-3 text-center mt-2">
        <p className="text-white/80 text-xs mb-1">Usage cost per completed booking</p>
        <p className="text-white font-black text-2xl">${perBooking.toFixed(3)}</p>
      </div>
    </div>
  );
}

function CostDisclaimer() {
  return (
    <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-lg p-4 mt-2">
      <p className="text-yellow-400/80 text-xs leading-relaxed">
        <strong className="text-yellow-400">Disclaimer:</strong> Estimates are based on SMS rate of $0.0228/segment and email rate of $0.0014/email. The cost per booking noted is based on averages — each center may see a higher or lower cost per booking based on messaging length, additional communications, and actual usage patterns. Results are not guaranteed. Noted results are based on real average user information. Results vary depending on the operator's venue and internal processes.
      </p>
    </div>
  );
}

function EstimatorCard({ title, subtitle, description, icon, children }: {
  title: string; subtitle: string; description: string; icon: string; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/3 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{icon}</span>
          <div>
            <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-wide mb-1">{subtitle}</p>
            <h3 className="text-white font-black text-base sm:text-lg uppercase">{title}</h3>
            <p className="text-white/50 text-sm mt-1 hidden sm:block">{description}</p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          {open ? <ChevronUp size={20} className="text-[#00AEEF]" /> : <ChevronDown size={20} className="text-[#00AEEF]" />}
        </div>
      </button>
      {open && (
        <div className="px-4 sm:px-6 pb-6 border-t border-white/8 pt-6">
          <p className="text-white/50 text-sm mb-6 sm:hidden">{description}</p>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Rate Table Tabs ──────────────────────────────────────────────────────────
function RateTable() {
  const [tab, setTab] = useState<"email" | "sms" | "compliance" | "ai">("email");
  const tabs: { key: "email" | "sms" | "compliance" | "ai"; label: string }[] = [
    { key: "email", label: "Email" },
    { key: "sms", label: "SMS & Phone" },
    { key: "compliance", label: "Compliance" },
    { key: "ai", label: "AI Features" },
  ];
  const rows = usageRates[tab];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wide transition-all ${
              tab === t.key
                ? "bg-[#00AEEF] text-white"
                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {rows.map(r => (
          <div key={r.label} className="flex items-center justify-between bg-white/3 border border-white/8 rounded-lg px-4 py-3">
            <span className="text-white/70 text-sm font-medium">{r.label}</span>
            <div className="text-right">
              <span className="text-[#00AEEF] font-black text-base">{r.cost}</span>
              <span className="text-white/40 text-xs ml-1">/ {r.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function UsageCosts() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#00AEEF]"></div>
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Usage Cost Calculator</span>
            <div className="h-px w-12 bg-[#00AEEF]"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
            You Only Pay For<br />
            <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              What You Use.
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Beyond your flat subscription, communication costs are passed through from carriers with minimal markup. Use the interactive calculators below to estimate your real monthly usage costs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "📊", label: "Real-time dashboard tracking", desc: "Monitor every dollar as it happens" },
              { icon: "🔔", label: "Advance notice of fee changes", desc: "No surprise rate increases" },
              { icon: "❌", label: "No hidden fees", desc: "What you see is what you pay" },
            ].map(f => (
              <div key={f.label} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <p className="text-white font-bold text-xs uppercase tracking-wide mb-1">{f.label}</p>
                <p className="text-white/40 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Table */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-3">
              Usage-Based <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Rate Card</span>
            </h2>
            <p className="text-white/50 text-base">All rates are passed through at cost from carriers with minimal markup.</p>
          </div>
          <RateTable />
        </div>
      </section>

      {/* Interactive Estimators */}
      <section className="py-16 bg-[#0D1B3E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#00AEEF]"></div>
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Interactive Estimators</span>
              <div className="h-px w-12 bg-[#00AEEF]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">
              See Exactly What Each<br />
              <span style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Playbook Costs to Run.
              </span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Click any playbook below to open the interactive cost estimator. Adjust sliders to match your volume and see real-time cost breakdowns.
            </p>
          </div>

          <BirthdayEstimator />
          <GroupEventEstimator />
          <TicketingEstimator />
          <TextClubEstimator />

          {/* Static cards for remaining playbooks */}
          {[
            { icon: "⭐", num: "04", title: "Reputation Protection System", cost: "~$0.11", channels: "Email, SMS", desc: "Timed review requests, private feedback capture, detractor alerts, and recovery workflow." },
            { icon: "🎫", num: "05", title: "Season Pass & Membership Lifecycle", cost: "~$0.10", channels: "Email, SMS", desc: "Welcome sequence, renewal countdown, win-back campaigns, and birthday perks." },
            { icon: "📊", num: "07", title: "Internal Sales Accountability", cost: "~$0.02–$0.05", channels: "Email, SMS", desc: "Speed-to-lead alerts, stage stuck notifications, daily manager digest, and quote follow-up tasks." },
            { icon: "🤝", num: "08", title: "Fundraising & Referral Systems", cost: "~$0.11–$0.52", channels: "Email", desc: "Fundraiser automation, toolkit delivery, weekly updates, and referral tracking." },
          ].map(p => (
            <div key={p.num} className="border border-white/10 rounded-xl p-5 sm:p-6 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <span className="text-[#00AEEF] text-xs font-bold">{p.num}</span>
                  <h3 className="text-white font-black text-sm sm:text-base uppercase mt-0.5 mb-1">{p.title}</h3>
                  <p className="text-white/50 text-xs">{p.desc}</p>
                  <p className="text-white/40 text-xs mt-1">Channels: {p.channels}</p>
                </div>
              </div>
              <div className="flex-shrink-0 text-center sm:text-right">
                <p className="text-white/40 text-xs uppercase tracking-wide">Avg. usage cost</p>
                <p className="text-[#00AEEF] font-black text-2xl">{p.cost}</p>
                <p className="text-white/40 text-xs">per booking</p>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-bold text-sm mb-2">Cost Per Booking Disclaimer</p>
                <p className="text-yellow-400/70 text-xs leading-relaxed">
                  The usage cost per booking noted above is based on averages across real FEC Playbook™ users. Each center may see a higher or lower cost per booking based on messaging length, additional communications, and actual usage patterns. Actual costs may vary based on message length and carrier fees. Results are not guaranteed. Noted results are based on real average user information. Results vary depending on the operator's venue and internal processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #00AEEF, #1565C0)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
            Ready to See Your Real Numbers?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a 30-minute call and we'll walk through exactly what FEC Playbook™ would cost for your specific volume.
          </p>
          <a
            href="https://link.bookmore.app/widget/booking/Sd7Mk7F4D238JDTcGTWp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#1565C0] font-black text-sm sm:text-base uppercase tracking-wide py-4 px-8 sm:px-10 rounded hover:bg-white/90 transition-all"
          >
            <Phone size={18} />
            Book a Call to Get Your Estimate
          </a>
          <p className="text-white/60 text-sm mt-4">Free 30-minute strategy call. No commitment required.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
