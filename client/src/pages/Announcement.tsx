// Design: FEC Playbook — dark navy/near-black, cyan accent (#00AEEF), Montserrat typography
// Page: In-App Announcement — Book More → FEC Playbook rebrand

import { useEffect } from "react";
import { ArrowRight, CheckCircle, AlertTriangle, Info } from "lucide-react";
import AnnouncementBanner from "../components/AnnouncementBanner";

export default function Announcement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] text-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Banner */}
      <AnnouncementBanner />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Date badge */}
        <div className="mb-6">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#00AEEF] border border-[#00AEEF]/30 rounded px-3 py-1"
          >
            Platform Announcement · April 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-4xl font-black uppercase leading-tight mb-4"
          style={{ letterSpacing: "-0.01em" }}
        >
          Book More Is Now{" "}
          <span className="text-[#00AEEF]">FEC Playbook</span>
        </h1>

        <p className="text-white/60 text-base leading-relaxed mb-10">
          We've been building toward this for a while, and we're excited to
          officially introduce the new name, new look, and new direction for
          your platform. Here's everything you need to know.
        </p>

        <hr className="border-white/10 mb-10" />

        {/* Section 1 — Rebrand */}
        <Section
          icon={<CheckCircle size={20} className="text-[#00AEEF]" />}
          title="A New Name That Reflects What We Actually Do"
        >
          <p>
            <strong className="text-white">Book More</strong> was where we
            started — focused on helping FECs drive more bookings. But over
            time, the platform grew into something much bigger: a full operating
            system for running a Family Entertainment Center.
          </p>
          <p>
            <strong className="text-[#00AEEF]">FEC Playbook</strong> is the
            name that reflects that reality. Same platform. Same team. Same
            commitment to your success — just a brand that finally matches what
            we've built.
          </p>
        </Section>

        {/* Section 2 — Navigation */}
        <Section
          icon={<CheckCircle size={20} className="text-[#00AEEF]" />}
          title="Updated Navigation — Simplified &amp; Reorganized"
        >
          <p>
            Along with the rebrand, we've updated the platform's navigation.
            You'll notice a refreshed <strong className="text-white">left-hand navigation</strong> that
            groups related tools and features together, making it faster to find
            what you need without hunting through menus.
          </p>
          <p>
            Key areas — like Guest Experience, Sales &amp; Revenue, Marketing,
            and Insights — are now bundled into logical sections so your team
            can move through the platform more efficiently.
          </p>
          <p>
            If something looks different from where you left it, check the
            grouped sections in the left sidebar — it's almost certainly there.
          </p>
        </Section>

        {/* Section 3 — Login URL */}
        <Section
          icon={<AlertTriangle size={20} className="text-amber-400" />}
          title="Login URL Change — What You Need to Know"
          accent="amber"
        >
          <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-5 mb-5">
            <p className="text-amber-300 font-semibold text-sm mb-1">
              Heads up — brief interruption possible late night Sunday, May 3rd
            </p>
            <p className="text-white/70 text-sm">
              The URL change is scheduled for <strong className="text-white">late night Sunday, May 3rd</strong>. There may be a short window where{" "}
              <code className="text-amber-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                app.bookmore.app
              </code>{" "}
              is temporarily unreachable directly. This should be brief.
            </p>
          </div>

          <p>
            Your current login URL —{" "}
            <a
              href="https://app.bookmore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AEEF] underline underline-offset-2"
            >
              app.bookmore.app
            </a>{" "}
            — will continue to work as your main login through Sunday, May 3rd.
          </p>
          <p>
            Starting Monday, May 4th, the new login URL will be:
          </p>

          <div className="my-5 flex items-center gap-3 bg-[#0D1B3E] border border-[#00AEEF]/30 rounded-lg px-5 py-4">
            <ArrowRight size={16} className="text-[#00AEEF] shrink-0" />
            <a
              href="https://app.fecplaybook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AEEF] font-bold text-lg tracking-wide hover:underline"
            >
              app.fecplaybook.com
            </a>
          </div>

          <p>
            The good news:{" "}
            <strong className="text-white">
              app.bookmore.app will automatically redirect you
            </strong>{" "}
            to the new login page once the change is live — so even if you have
            the old URL bookmarked, you'll land in the right place.
          </p>
          <p className="text-white/50 text-sm">
            We recommend updating your bookmark to{" "}
            <span className="text-white">app.fecplaybook.com</span> at your
            earliest convenience.
          </p>
        </Section>

        {/* Section 4 — Nothing changes */}
        <Section
          icon={<Info size={20} className="text-[#00AEEF]" />}
          title="Everything Else Stays the Same"
        >
          <p>
            Your data, automations, pipelines, contacts, and workflows are all
            intact. Nothing has been moved, deleted, or changed under the hood.
            This is a branding and navigation update — not a platform migration.
          </p>
          <p>
            If you have any questions or run into anything unexpected, reach out
            to us directly at{" "}
            <a
              href="mailto:support@fecplaybook.com"
              className="text-[#00AEEF] underline underline-offset-2"
            >
              support@fecplaybook.com
            </a>
            .
          </p>
        </Section>

        <hr className="border-white/10 my-10" />

        {/* Footer CTA */}
        <div className="text-center mb-10">
          <p className="text-white/40 text-sm mb-6">
            — The FEC Playbook Team
          </p>
          <a
            href="https://app.bookmore.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00AEEF] text-[#0A0A0A] font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded hover:bg-[#00c4ff] transition-colors duration-200"
          >
            Log In to FEC Playbook
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Website review CTA */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(0,174,239,0.25)", background: "#0D1B3E" }}
        >
          <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <p
                className="text-[10px] font-black uppercase tracking-widest text-[#00AEEF]/60 mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                New Website
              </p>
              <h3
                className="text-lg font-black uppercase text-white leading-tight mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We've also launched a brand new website
              </h3>
              <p
                className="text-white/55 text-sm leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore the new FEC Playbook website — learn about the platform,
                the 8 playbooks, pricing, and how it all works.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://www.fecplaybook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded transition-colors duration-200"
                style={{
                  background: "transparent",
                  border: "2px solid #00AEEF",
                  color: "#00AEEF",
                  fontFamily: "'Montserrat', sans-serif",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#00AEEF";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0A0A0A";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#00AEEF";
                }}
              >
                View New Website
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helper component ────────────────────────────────────────────────────────

function Section({
  icon,
  title,
  accent = "cyan",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent?: "cyan" | "amber";
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-3 mb-4">
        <div className="mt-0.5 shrink-0">{icon}</div>
        <h2 className="text-xl font-black uppercase tracking-tight leading-snug">
          {title}
        </h2>
      </div>
      <div
        className="pl-8 space-y-4 text-white/70 text-[15px] leading-relaxed"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}
