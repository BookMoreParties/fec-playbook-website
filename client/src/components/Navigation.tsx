/* 
 * FEC Playbook Navigation
 * Design: Dark sticky nav, transparent on hero, solid on scroll
 * Mobile: Full-screen slide-out drawer with backdrop overlay and staggered animations
 * Brand: Montserrat Bold, FEC Cyan accent
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, X, ChevronRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";
const LOGO_VERTICAL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

const navLinks = [
  { label: "Platform", href: "#platform", desc: "See how FEC Playbook works" },
  { label: "How It Works", href: "/how-it-works", isPage: true, desc: "The system explained simply" },
  { label: "Playbook", href: "/playbook", isPage: true, desc: "10 systems, 100+ automations" },
  { label: "Integrations", href: "#integrations", desc: "ROLLER, CenterEdge & more" },
  { label: "Pricing", href: "#pricing", desc: "Transparent, flat-rate plans" },
  { label: "Usage Costs", href: "/usage-costs", isPage: true, desc: "Interactive cost calculator" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (location !== "/") {
        window.location.href = "/" + href;
      } else {
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img
                src={LOGO_URL}
                alt="FEC Playbook"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/70 hover:text-white font-semibold text-sm tracking-wide transition-colors duration-200 uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://calendly.com/fecplaybook/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="fec-btn-primary text-sm py-2.5 px-5"
              >
                <Phone size={14} />
                Book a Call
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white rounded-full transition-all"></span>
              <span className="block w-5 h-0.5 bg-[#00AEEF] rounded-full transition-all"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-[#0A0A0A] border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out md:hidden shadow-2xl shadow-black/50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <img src={LOGO_VERTICAL_URL} alt="FEC Playbook" className="h-8 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest px-2 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Navigation
          </p>
          <nav className="space-y-1">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-all duration-200 group hover:bg-white/5 ${
                  mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  transitionDelay: mobileOpen ? `${i * 40 + 80}ms` : "0ms",
                }}
              >
                <div>
                  <p className="text-white font-bold text-base uppercase tracking-wide group-hover:text-[#00AEEF] transition-colors">
                    {link.label}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5 font-normal normal-case tracking-normal">
                    {link.desc}
                  </p>
                </div>
                <ChevronRight size={16} className="text-white/20 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-white/8 my-4 mx-2"></div>

          {/* Quick Links */}
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest px-2 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Quick Access
          </p>
          <div className="space-y-1 px-2">
            <a
              href="https://bookmore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 text-white/50 hover:text-white/80 transition-colors text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              <span>Client Login</span>
              <ChevronRight size={14} className="text-white/20" />
            </a>
            <a
              href="mailto:support@fecplaybook.com"
              className="flex items-center justify-between py-2.5 text-white/50 hover:text-white/80 transition-colors text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              <span>support@fecplaybook.com</span>
              <ChevronRight size={14} className="text-white/20" />
            </a>
          </div>
        </div>

        {/* Drawer CTA Footer */}
        <div className="px-4 pb-8 pt-4 border-t border-white/8 space-y-3">
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="fec-btn-primary w-full justify-center text-sm py-4"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            Book a Free Demo Call
          </a>
          <p className="text-white/30 text-xs text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Free 30-min strategy call · No commitment
          </p>
        </div>
      </div>
    </>
  );
}
