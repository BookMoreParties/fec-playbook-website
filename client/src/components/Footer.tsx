import { ExternalLink, Mail, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const LOGO_URL = "/manus-storage/fec-playbook-light-background-logo_55e28466.png";

const exploreLinks = [
  { label: "Platform", href: "/" },
  { label: "Outcomes", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Playbooks", href: "/playbook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0D1B3E]/12 bg-[#f5f7f8] text-[#0D1B3E]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={LOGO_URL} alt="FEC Playbook™" className="h-8 w-auto" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#526070]">
              FEC Playbook™ is one connected sales, marketing, communications, reputation, and retention system built for Family Entertainment Centers.
            </p>
            <a
              href="/book-a-demo"
              onClick={() => trackEvent("cta_book_demo_clicked", { placement: "footer_brand" })}
              className="fec-btn-primary mt-6 px-5 py-3 text-sm normal-case tracking-normal"
            >
              <Phone size={15} aria-hidden="true" />
              Book a Demo
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            <div>
              <h2 className="fec-eyebrow">Explore</h2>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm font-semibold text-[#526070] transition-colors hover:text-[#0D1B3E]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="fec-eyebrow">Get started</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/book-a-demo" onClick={() => trackEvent("cta_book_demo_clicked", { placement: "footer_link" })} className="inline-flex items-center gap-2 text-sm font-semibold text-[#526070] transition-colors hover:text-[#0D1B3E]"><Phone size={14} aria-hidden="true" />Book a Demo</a>
                </li>
                <li>
                  <a href="mailto:support@fecplaybook.com" className="inline-flex items-center gap-2 text-sm font-semibold text-[#526070] transition-colors hover:text-[#0D1B3E]"><Mail size={14} aria-hidden="true" />Support</a>
                </li>
                <li>
                  <a href="https://bookmore.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#526070] transition-colors hover:text-[#0D1B3E]"><ExternalLink size={14} aria-hidden="true" />Client Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#0D1B3E]/12 pt-7">
          <p className="max-w-5xl text-xs leading-relaxed text-[#526070]">
            <strong className="font-semibold text-[#0D1B3E]">Integration and trademark disclaimer:</strong> CenterEdge Software is a supported FEC Playbook™ connection. Other named brands and trademarks are owned by their respective organizations and are referenced solely to describe available data-import compatibility.
          </p>
          <p className="mt-3 max-w-5xl text-xs leading-relaxed text-[#526070]">
            <strong className="font-semibold text-[#0D1B3E]">Results disclaimer:</strong> Customer stories and outcomes are based on client feedback and are not a representation or guarantee of similar results. Results vary by location, implementation, customer data, business practices, and market conditions.
          </p>

          <div className="mt-7 flex flex-col gap-5 border-t border-[#0D1B3E]/12 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#526070]">
              <span>© {new Date().getFullYear()} FEC Playbook™. All rights reserved.</span>
              <a href="/" className="font-semibold transition-colors hover:text-[#0D1B3E]">Back Home</a>
            </div>
            <div className="flex max-w-4xl flex-wrap gap-x-4 gap-y-2 text-xs text-[#526070]">
              <a href="/privacy" className="transition-colors hover:text-[#0D1B3E]">Privacy Policy</a>
              <a href="/terms" className="transition-colors hover:text-[#0D1B3E]">Terms of Service</a>
              <a href="/eula" className="transition-colors hover:text-[#0D1B3E]">EULA</a>
              <a href="/disclaimer" className="transition-colors hover:text-[#0D1B3E]">Disclaimer</a>
              <a href="#" className="termly-display-preferences transition-colors hover:text-[#0D1B3E]">Consent Preferences</a>
              <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0D1B3E]">Do Not Sell or Share My Personal Information</a>
              <a href="https://app.termly.io/notify/54d6a0ce-5f50-4d6d-8a24-5b21db524a12" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0D1B3E]">Limit the Use of My Sensitive Personal Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
