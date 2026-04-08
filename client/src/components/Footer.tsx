/* 
 * FEC Playbook Footer
 * Dark background, FEC brand colors
 */

import { Phone, Mail, ExternalLink } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // Navigate to home page first if not already there
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="FEC Playbook" className="h-10 w-auto mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The operating system for Family Entertainment Centers. Built by FEC operators who know the business — not outsiders selling generic software.
            </p>
            <p className="text-[#00AEEF] font-bold text-sm mt-4 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              You bring the brand. We bring the playbook.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://calendly.com/fecplaybook/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="fec-btn-primary text-xs py-2 px-4"
              >
                <Phone size={12} />
                Book a Call
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Platform
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Platform Overview", href: "#platform" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "What's in the Playbook", href: "/playbook" },
                { label: "Integrations", href: "#integrations" },
                { label: "Pricing", href: "#pricing" },
                { label: "Usage Costs", href: "/usage-costs" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-[#00AEEF] text-sm transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Get Started
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendly.com/fecplaybook/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-[#00AEEF] text-sm transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Phone size={14} />
                  Book a Demo Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@fecplaybook.com"
                  className="flex items-center gap-2 text-white/50 hover:text-[#00AEEF] text-sm transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Mail size={14} />
                  support@fecplaybook.com
                </a>
              </li>
              <li>
                <a
                  href="https://bookmore.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-[#00AEEF] text-sm transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <ExternalLink size={14} />
                  Client Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 mt-12 pt-8 space-y-4">
          <p className="text-white/30 text-xs leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <strong className="text-white/50">Integration Partner Disclaimer:</strong> The brands represented (ROLLER Software, CenterEdge Software, PartyWirks, TripleSeat, Party Center Software) do not endorse FEC Playbook. All logos and trademarks are owned by their respective organizations and are not the property of, nor directly affiliated with, FEC Playbook. Logos are used solely to indicate integration compatibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-white/30 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              © {new Date().getFullYear()} FEC Playbook. All rights reserved. Formerly known as Book More.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
