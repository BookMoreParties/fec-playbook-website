/**
 * Welcome page — /welcome
 * FEC Playbook branded greeting widget.
 * Matches /widget page exactly: 1240px height, same html/body/section structure,
 * same content-wrapper / text-content / image-container layout.
 * No site chrome. Unlisted: blocked in robots.txt and excluded from sitemap.
 * Supports ?name= URL param for personalized greeting.
 */

import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    // Inject styles to match /widget exactly
    const style = document.createElement("style");
    style.id = "welcome-styles";
    style.textContent = `
      html, body {
        margin: 0;
        padding: 0;
        height: 1240px;
        overflow: hidden;
      }
      body {
        min-height: 1240px;
        display: flex;
        flex-direction: column;
      }
      .welcome-section {
        flex: 0 0 1240px;
        width: 100%;
        background:
          linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(13,31,60,0.88) 50%, rgba(10,10,10,0.92) 100%),
          url('https://storage.googleapis.com/msgsndr/NR4s8IMRYH47Mdbw4url/media/67daecf25336578825e85d6e.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-blend-mode: multiply;
        border-radius: 10px;
        color: white;
        font-family: 'Montserrat', Arial, sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 45px;
      }
      .welcome-content-wrapper {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 100%;
      }
      .welcome-text-content {
        flex: 3;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 32px;
      }
      .welcome-image-container {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border-radius: 0 10px 10px 0;
        overflow: hidden;
      }
      .welcome-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .welcome-logo {
        height: 56px;
        object-fit: contain;
        display: block;
      }
      .welcome-greeting {
        font-size: 36px;
        font-weight: 900;
        color: #FFFFFF;
        line-height: 1.2;
        letter-spacing: -0.5px;
        text-transform: uppercase;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .welcome-tagline {
        font-size: 28px;
        font-weight: 600;
        color: #00AEEF;
        letter-spacing: 0.3px;
      }
      .welcome-divider {
        width: 80px;
        height: 4px;
        background: #00AEEF;
        border-radius: 2px;
      }
    `;
    document.head.appendChild(style);

    // Set greeting
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";
    const hour = new Date().getHours();
    const greetingEl = document.getElementById("welcome-greeting");
    if (!greetingEl) return;

    let text = "";
    let emoji = "";
    if (hour >= 5 && hour < 12) {
      text = name ? `Good Morning, ${name}!` : "Good Morning!";
      emoji = "🌞";
    } else if (hour >= 12 && hour < 17) {
      text = name ? `Good Afternoon, ${name}!` : "Good Afternoon!";
      emoji = "☀️";
    } else {
      text = name ? `Good Evening, ${name}!` : "Good Evening!";
      emoji = "🌙";
    }
    greetingEl.textContent = `${text} ${emoji}`;

    return () => {
      document.getElementById("welcome-styles")?.remove();
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <section className="welcome-section">
        <div className="welcome-content-wrapper">
          <div className="welcome-text-content">
            <img
              className="welcome-logo"
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/logo-horizontal-blue_eeb2d5d6.png"
              alt="FEC Playbook"
            />
            <div className="welcome-divider" />
            <div className="welcome-greeting" id="welcome-greeting">
              Good Morning! 🌞
            </div>
            <div className="welcome-tagline">
              You bring the brand. We bring the playbook.
            </div>
          </div>
          <div className="welcome-image-container">
            <img
              src="https://storage.googleapis.com/msgsndr/NR4s8IMRYH47Mdbw4url/media/67daf38726b5016a4ea536f6.png"
              alt="FEC Playbook"
            />
          </div>
        </div>
      </section>
    </>
  );
}
