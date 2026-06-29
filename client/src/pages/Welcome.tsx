/**
 * Welcome page — /welcome
 * FEC Playbook branded greeting widget. No site chrome.
 * Unlisted: blocked in robots.txt and excluded from sitemap.
 * Supports ?name= URL param for personalized greeting.
 */

import { useEffect, useState } from "react";

export default function Welcome() {
  const [greeting, setGreeting] = useState("Welcome!");
  const [emoji, setEmoji] = useState("👋");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";
    const hour = new Date().getHours();

    let greetingText = "";
    let greetingEmoji = "";

    if (hour >= 5 && hour < 12) {
      greetingText = name ? `Good Morning, ${name}!` : "Good Morning!";
      greetingEmoji = "🌞";
    } else if (hour >= 12 && hour < 17) {
      greetingText = name ? `Good Afternoon, ${name}!` : "Good Afternoon!";
      greetingEmoji = "☀️";
    } else {
      greetingText = name ? `Good Evening, ${name}!` : "Good Evening!";
      greetingEmoji = "🌙";
    }

    setGreeting(greetingText);
    setEmoji(greetingEmoji);
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: "100%",
      height: "1240px",
      overflow: "hidden",
      fontFamily: "'Montserrat', Arial, sans-serif",
      background: "#0A0A0A",
    }}>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section style={{
        width: "100%",
        height: "1240px",
        background: "linear-gradient(135deg, #0A0A0A 0%, #0d1f3c 50%, #0A0A0A 100%)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Circuit board background pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://storage.googleapis.com/msgsndr/NR4s8IMRYH47Mdbw4url/media/67daecf25336578825e85d6e.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }} />

        {/* Cyan glow orb */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}>

          {/* Logo */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png"
            alt="FEC Playbook"
            style={{
              height: "72px",
              marginBottom: "64px",
              objectFit: "contain",
            }}
          />

          {/* Greeting */}
          <div style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "24px",
            textTransform: "uppercase",
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}>
            {greeting}
          </div>

          {/* Emoji */}
          <div style={{
            fontSize: "80px",
            lineHeight: 1,
            marginBottom: "48px",
          }}>
            {emoji}
          </div>

          {/* Tagline */}
          <div style={{
            fontSize: "26px",
            fontWeight: 600,
            color: "#00AEEF",
            letterSpacing: "0.5px",
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}>
            You bring the brand. We bring the playbook.
          </div>

          {/* Divider */}
          <div style={{
            width: "80px",
            height: "3px",
            background: "#00AEEF",
            margin: "40px auto 0",
            borderRadius: "2px",
          }} />
        </div>
      </section>
    </div>
  );
}
