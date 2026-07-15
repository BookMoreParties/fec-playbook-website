// Design: FEC Playbook™ — tight wide banner using real logos
// Short height, dark background, cyan border, both logos with arrow between
// Banner is linked to the FEC Playbook™ home page

import { Link } from "wouter";

const BOOKMORE_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/bookmore-logo_bfa843cd.png";

const FEC_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_687480e5.png";

export default function AnnouncementBanner() {
  return (
    <Link href="/">
      <a
        className="block w-full group"
        style={{
          background: "#0A0A0A",
          borderTop: "2px solid #00AEEF",
          borderBottom: "2px solid #00AEEF",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#0D1B3E")}
        onMouseLeave={e => (e.currentTarget.style.background = "#0A0A0A")}
      >
        <div
          className="max-w-4xl mx-auto flex items-center justify-center gap-6 px-8"
          style={{ height: "96px" }}
        >
          {/* Label */}
          <span
            className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[#00AEEF]/60 whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Platform<br />Update
          </span>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* Book More logo */}
          <div className="flex items-center" style={{ opacity: 0.55 }}>
            <img
              src={BOOKMORE_LOGO}
              alt="Book More"
              style={{ height: "52px", width: "auto", filter: "grayscale(40%)" }}
            />
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1 shrink-0">
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "linear-gradient(90deg, #ffffff30, #00AEEF)",
              }}
            />
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L9 7L1 13" stroke="#00AEEF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* FEC Playbook™ logo */}
          <div className="flex items-center">
            <img
              src={FEC_LOGO}
              alt="FEC Playbook"
              style={{ height: "44px", width: "auto" }}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
