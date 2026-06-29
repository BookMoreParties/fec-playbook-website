/**
 * Widget page — /widget
 * Renders the raw greeting widget HTML with no additional site chrome.
 * Unlisted: blocked in robots.txt and excluded from sitemap.
 */

import { useEffect } from "react";

export default function Widget() {
  useEffect(() => {
    // Inject the widget styles
    const style = document.createElement("style");
    style.id = "widget-styles";
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
      .widget-section {
        flex: 0 0 1240px;
        width: 100%;
        background: linear-gradient(135deg, #1a73e8, #ff4081),
                    url('https://storage.googleapis.com/msgsndr/NR4s8IMRYH47Mdbw4url/media/67daecf25336578825e85d6e.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-blend-mode: multiply;
        border-radius: 10px;
        color: white;
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 45px;
      }
      .content-wrapper {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 100%;
      }
      .text-content {
        flex: 3;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .image-container {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border-radius: 0 10px 10px 0;
        overflow: hidden;
      }
      .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .greeting {
        font-size: 48px;
        margin-bottom: 20px;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .rotator {
        font-size: 28px;
        min-height: 150px;
        overflow: hidden;
        position: relative;
      }
      .rotator span {
        position: absolute;
        width: 100%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        pointer-events: none;
      }
      .rotator span.active {
        opacity: 1;
        pointer-events: auto;
      }
      .rotator a {
        color: #ADD8E6;
        text-decoration: none;
      }
      .rotator a:hover {
        text-decoration: underline;
        color: #87CEEB;
      }
    `;
    document.head.appendChild(style);

    // Greeting logic
    function setGreeting() {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("name") || "Friend";
      const hour = new Date().getHours();
      const greetingElement = document.getElementById("greeting");
      if (!greetingElement) return;
      let greetingText = "";
      let emoji = "";
      if (hour >= 5 && hour < 12) {
        greetingText = `Good Morning ${name}!`;
        emoji = "🌞";
      } else if (hour >= 12 && hour < 17) {
        greetingText = `Good Afternoon ${name}!`;
        emoji = "☀️";
      } else {
        greetingText = `Good Evening ${name}!`;
        emoji = "🌙";
      }
      greetingElement.textContent = `${greetingText} ${emoji}`;
    }

    // Text rotator logic
    function startTextRotator() {
      const rotator = document.getElementById("textRotator");
      if (!rotator) return;
      const messages = rotator.getElementsByTagName("span");
      let currentIndex = 0;

      function rotateText() {
        messages[currentIndex].classList.remove("active");
        setTimeout(() => {
          (messages[currentIndex] as HTMLElement).style.opacity = "0";
          currentIndex = (currentIndex + 1) % messages.length;
          (messages[currentIndex] as HTMLElement).style.opacity = "1";
          messages[currentIndex].classList.add("active");
        }, 1000);
      }

      messages[0].classList.add("active");
      const interval = setInterval(rotateText, 12000);
      return () => clearInterval(interval);
    }

    setGreeting();
    const cleanup = startTextRotator();

    return () => {
      // Clean up injected styles on unmount
      document.getElementById("widget-styles")?.remove();
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="widget-section">
      <div className="content-wrapper">
        <div className="text-content">
          <div className="greeting" id="greeting">Good Morning! 🌞</div>
          <div className="rotator" id="textRotator">
            <span>📢 <strong>Did you know you could automate lead follow-ups?</strong> Use <strong>Workflows</strong> to send emails, texts, and calls based on lead actions! <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>💬 <strong>Trigger SMS replies automatically?</strong> Set up <strong>Keyword Automation</strong> to send pre-set replies when a lead texts a specific keyword.<a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🔄 <strong>Sync Facebook leads instantly?</strong> Use <strong>Facebook Lead Ads Integration</strong> to bring leads directly into your CRM! <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🔔 <strong>Get instant notifications?</strong> Set up <strong>Internal Notifications</strong> in workflows to alert your team about new leads. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🏆 <strong>Score your leads?</strong> Use the <strong>Lead Scoring</strong> feature to prioritize the best prospects. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🔥 <strong>Bring Customers in on Repeat</strong> Set up <strong>Text Club</strong> to send automatic monthly specials to your customers via SMS. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🔥 <strong>Recover lost deals?</strong> Set up <strong>Pipeline Automations</strong> to follow up on cold leads automatically. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>📝 <strong>Customize your forms?</strong> Add conditional logic to <strong>Surveys &amp; Forms</strong> for personalized user experiences. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>📊 <strong>Track your business performance?</strong> Use <strong>Dashboards &amp; Reports</strong> to monitor key metrics in real time. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>🤖 <strong>Use AI to personalize emails?</strong> Enable <strong>AI-Powered Content</strong> to generate engaging email copy automatically. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
            <span>📱 <strong>Manage everything from your phone?</strong> Download the <strong>"BookMore App" Mobile App</strong> for on-the-go CRM access. <a href="https://bookmore.app/quick-start" target="videoWindow">See How</a></span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://storage.googleapis.com/msgsndr/NR4s8IMRYH47Mdbw4url/media/67daf38726b5016a4ea536f6.png"
            alt="Widget Image"
          />
        </div>
      </div>
    </section>
  );
}
