import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663283664117/kdnjoUoQqKflqKtj.png";

const navLinks = [
  { label: "Platform", href: "/", desc: "The connected revenue operating system" },
  { label: "Outcomes", href: "/features", desc: "What gets easier and moves faster" },
  { label: "How It Works", href: "/how-it-works", desc: "How the ready-built system is activated" },
  { label: "Playbooks", href: "/playbook", desc: "The workflows behind daily FEC revenue work" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(drawerRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [mobileOpen]);

  const isCurrent = (href: string) => (href === "/" ? location === "/" : location === href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
          scrolled ? "border-[#0D1B3E]/12 bg-[#fcfcfa]/95 shadow-[0_8px_32px_rgba(13,27,62,0.06)] backdrop-blur-xl" : "border-transparent bg-[#fcfcfa]/80 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <Link href="/" aria-label="FEC Playbook home" className="shrink-0">
            <img src={LOGO_URL} alt="FEC Playbook" className="h-7 w-auto sm:h-8" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${isCurrent(link.href) ? "text-[#0D1B3E]" : "text-[#526070] hover:text-[#0D1B3E]"}`}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="https://app.bookmore.app" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#526070] transition-colors hover:text-[#0D1B3E]">
              Login
            </a>
            <a
              href="/book-a-demo"
              onClick={() => trackEvent("cta_book_revenue_review_clicked", { placement: "navigation_desktop" })}
              className="fec-btn-primary px-5 py-2.5 text-sm normal-case tracking-normal"
            >
              <Phone size={15} aria-hidden="true" />
              Book a Revenue Review
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0D1B3E]/12 text-[#0D1B3E] transition-colors hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu size={21} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#0D1B3E]/35 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,24rem)] flex-col bg-[#fcfcfa] shadow-[-20px_0_55px_rgba(13,27,62,0.16)] transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-modal="true"
        role="dialog"
        aria-labelledby="mobile-navigation-title"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-[#0D1B3E]/10 px-5 py-5">
          <h2 id="mobile-navigation-title" className="sr-only">Site navigation</h2>
          <img src={LOGO_URL} alt="FEC Playbook" className="h-7 w-auto" />
          <button
            type="button"
            ref={closeButtonRef}
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0D1B3E]/12 text-[#0D1B3E] transition-colors hover:border-[#00AEEF] hover:bg-[#00AEEF]/10"
            aria-label="Close menu"
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 px-5 py-6">
          <p className="fec-eyebrow">Explore</p>
          <nav className="mt-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-4 transition-colors ${isCurrent(link.href) ? "bg-[#00AEEF]/12 text-[#0D1B3E]" : "text-[#0D1B3E] hover:bg-[#0D1B3E]/5"}`}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                <span className="block text-base font-bold">{link.label}</span>
                <span className="mt-1 block text-sm leading-snug text-[#526070]">{link.desc}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t border-[#0D1B3E]/10 pt-6">
            <a href="https://app.bookmore.app" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-[#526070] hover:text-[#0D1B3E]">
              Client login
            </a>
          </div>
        </div>

        <div className="border-t border-[#0D1B3E]/10 p-5">
          <a
            href="/book-a-demo"
            onClick={() => {
              trackEvent("cta_book_revenue_review_clicked", { placement: "navigation_mobile" });
              setMobileOpen(false);
            }}
            className="fec-btn-primary w-full justify-center px-5 py-3.5 text-sm normal-case tracking-normal"
          >
            <Phone size={16} aria-hidden="true" />
            Book a Revenue Review
          </a>
          <p className="mt-3 text-center text-xs leading-relaxed text-[#526070]">Find the revenue work that is getting stuck.</p>
        </div>
      </div>
    </>
  );
}
