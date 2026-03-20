/* 
 * FEC Playbook Navigation
 * Design: Dark sticky nav, transparent on hero, solid on scroll
 * Brand: Montserrat Bold, FEC Cyan accent
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Playbooks", href: "#workflows" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Usage Costs", href: "/usage-costs", isPage: true },
  { label: "About", href: "#about" },
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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate home first
      if (location !== "/") {
        window.location.href = "/" + href;
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/8"
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

          {/* CTA Button */}
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/8 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-white/80 hover:text-white font-bold text-base uppercase tracking-wide py-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://calendly.com/fecplaybook/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="fec-btn-primary w-full justify-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
