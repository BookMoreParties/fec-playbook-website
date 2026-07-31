/**
 * Welcome page — /welcome
 * Replicates the FEC Playbook™ Onboarding Portal landing page.
 * "Complete Intake Survey" CTA links to /onboarding/survey.
 * No site nav/footer chrome. Unlisted: blocked in robots.txt, excluded from sitemap.
 * Supports ?name= URL param for personalized greeting.
 */

import { useEffect, useState } from "react";
import { CheckCircle, Lock, Mail, Clock, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png";

export default function Welcome() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("name") || "";
    setName(n);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        fontFamily: "'Montserrat', sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* ── Top bar ── */}
      <header
        style={{
          background: "rgba(10,10,10,0.95)",
          borderBottom: "1px solid rgba(0,174,239,0.15)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={LOGO_URL} alt="FEC Playbook" style={{ height: "32px", width: "auto" }} />
        <a
          href="mailto:support@fecplaybook.com"
          style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", textDecoration: "none" }}
        >
          support@fecplaybook.com
        </a>
      </header>

      {/* ── Hero ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #0D1B3E 0%, #0A0A0A 100%)",
          padding: "48px 24px 40px",
          textAlign: "center",
          borderBottom: "1px solid rgba(0,174,239,0.1)",
        }}
      >
        {/* Registration confirmed badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(0,174,239,0.1)",
            border: "1px solid rgba(0,174,239,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#00AEEF",
            marginBottom: "24px",
          }}
        >
          <CheckCircle size={13} />
          Registration Confirmed
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          WELCOME TO{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00AEEF, #1565C0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FEC PLAYBOOK™
          </span>
          {name && (
            <span style={{ display: "block", color: "#ffffff", marginTop: "4px" }}>
              {name}!
            </span>
          )}
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "15px",
            maxWidth: "520px",
            margin: "0 auto 8px",
            lineHeight: 1.6,
          }}
        >
          We're excited to officially have you on board. Our team is excited to help streamline
          your operations, elevate your guest experience, and drive more revenue for your facility.
        </p>

        {/* Sub-label */}
        <p
          style={{
            color: "#00AEEF",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          FEC Onboarding
        </p>
      </div>

      {/* ── Next Steps ── */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "20px",
          }}
        >
          Next Steps
        </h2>

        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "24px" }}>
          Complete your onboarding survey to help us learn more about your facility
        </p>

        {/* Step 1 */}
        <div
          style={{
            background: "rgba(13,27,62,0.6)",
            border: "1px solid rgba(0,174,239,0.25)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00AEEF, #1565C0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: 0 }}>Complete Intake Survey</h3>
                <span
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#fca5a5",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Action Required
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>
                This comprehensive onboarding survey will help us better understand your facility,
                existing technology, and operations. This must be completed prior to scheduling
                your training call.
              </p>
              <a
                href="/onboarding/survey"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #00AEEF, #1565C0)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Complete Intake Survey
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Step 2 — Locked */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "40px",
            opacity: 0.6,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 800, margin: 0 }}>Schedule First Training Call</h3>
                <span
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Lock size={10} />
                  Locked
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.6 }}>
                Unlock calendar access after completing the survey to book your 1-on-1 launch training.
              </p>
            </div>
          </div>
        </div>

        {/* ── What comes next ── */}
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "20px",
          }}
        >
          What comes Next
        </h2>

        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "20px" }}>
          You will receive two critical emails to your inbox. Please complete these steps to unlock
          full platform features.
        </p>

        <div style={{ display: "grid", gap: "14px", gridTemplateColumns: "1fr 1fr" }}>
          {/* Email 1 */}
          <div
            style={{
              background: "rgba(13,27,62,0.5)",
              border: "1px solid rgba(0,174,239,0.15)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <Mail size={16} color="#00AEEF" />
              <span
                style={{
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  color: "#fca5a5",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: "999px",
                }}
              >
                Action Required
              </span>
            </div>
            <h4 style={{ fontSize: "13px", fontWeight: 800, marginBottom: "6px" }}>
              Customer Onboarding Survey
            </h4>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: 1.5, marginBottom: "12px" }}>
              This email will contain a secure, unique link to your onboarding survey. This must be
              filled out prior to scheduling your first training call. You can complete the survey
              now by using the link on this page.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>
              <Clock size={11} />
              Arrives in 1–3 minutes
            </div>
          </div>

          {/* Email 2 */}
          <div
            style={{
              background: "rgba(13,27,62,0.5)",
              border: "1px solid rgba(0,174,239,0.15)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <Mail size={16} color="#00AEEF" />
              <span
                style={{
                  background: "rgba(0,174,239,0.1)",
                  border: "1px solid rgba(0,174,239,0.25)",
                  color: "#00AEEF",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: "999px",
                }}
              >
                Login Information
              </span>
            </div>
            <h4 style={{ fontSize: "13px", fontWeight: 800, marginBottom: "6px" }}>
              FEC Playbook™ Credentials
            </h4>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: 1.5, marginBottom: "12px" }}>
              This email will contain your secure temporary login password and link to access your
              account.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>
              <Clock size={11} />
              Arrives in 3–5 minutes
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
