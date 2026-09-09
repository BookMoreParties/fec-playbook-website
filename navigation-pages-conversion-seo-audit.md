# Navigation Page Conversion, SEO, and AI-Discovery Audit

**Website:** FEC Playbook™  
**Scope:** The public paths linked from the primary navigation: the homepage Platform section, `/features`, `/how-it-works`, `/playbook`, and `/book-a-demo`. The external Login destination is outside this audit.  
**Reviewed:** September 9, 2026  
**Method:** Source review, desktop and 375px mobile visual review, crawl-control review, and public metadata review.

## Executive conclusion

The navigation path now has a compelling homepage and a clearer **pre-built operating-system** promise. The secondary pages, however, still read as individual legacy SaaS pages rather than one connected FEC Playbook™ conversion story. The central opportunity is not adding more claims. It is reconciling the offer architecture, then making each route answer one buyer question before passing the visitor to the next logical page or to the 30-Minute FEC Revenue Review.

The most material issue is an **inventory conflict**. The site correctly states that FEC Playbook™ contains **8 Revenue Playbooks, 13 Core Modules, and 100+ pre-built automations**, but `/playbook` displays 10 numbered systems while the `/features` page treats the pre-built-system promise as its thirteenth module. This weakens buyer clarity and makes the most differentiated idea—*the systems are already built*—harder for search engines and AI systems to describe consistently.

> **Recommended narrative:** FEC Playbook™ is a pre-built FEC revenue operating system. Its 8 Revenue Playbooks are the operating systems for specific revenue moments; 13 Core Modules are the software capabilities that power them; 100+ pre-built automations are the ready-to-activate workflows inside them. The venue supplies the brand, offers, team structure, and existing data sources. FEC Playbook™ supplies the playbook and activation support.

## What is working now

| Area | Current strength | Keep it |
|---|---|---|
| **Homepage Platform section** | The updated home page uses an action-led black/white/cyan system, product proof, a clear revenue cycle, and one standardized Revenue Review CTA. | Keep it as the high-level platform landing experience; do not create a thin duplicate `/platform` page yet. |
| **Primary conversion offer** | Every audited route now leads to a **30-Minute FEC Revenue Review** rather than a generic demo. | Preserve this exact offer and explain the tangible output on every route. |
| **Core differentiation** | The updated homepage establishes that the playbooks and automations are already built, then tailored to the facility. | Repeat the principle consistently, but explain it differently on each route rather than copying the same block. |
| **Technical foundation** | Indexable marketing routes have distinct titles, descriptions, canonical tags, social tags, a sitemap, and public crawl access. | Maintain these fundamentals as content evolves. |
| **Responsive foundation** | The reviewed pages remain usable at 375px, including the demo page’s booking flow. | Preserve content width, tap-target sizing, and the one-column fallback in future redesigns. |

## Priority findings

| Priority | Issue | Business impact | Recommended resolution |
|---|---|---|---|
| **P0** | The 8 / 13 / 100+ hierarchy conflicts with the 10 numbered entries on `/playbook` and the feature-page grouping. | Buyers cannot tell what they are buying; AI systems may reproduce inconsistent product descriptions. | Rebuild the information architecture around one canonical taxonomy, described below. |
| **P0** | Several integration and setup claims are broader than the confirmed integration model. | “Connects directly,” “live POS data,” and “no manual entry” require source-specific proof when only CenterEdge is the official partner and others are data imports. | Use neutral, accurate language unless a specific official integration is named; label data-import options clearly. |
| **P1** | `/features`, `/how-it-works`, and `/playbook` still use older rounded-card, centered-SaaS patterns. | The page transition feels less like the action-led FEC Playbook™ homepage and reduces perceived category leadership. | Apply the homepage’s left-led hierarchy, sharp geometry, oversized numerals, black/white contrast, and cyan-as-impact system. |
| **P1** | The feature page is long, module-led, and repetitive before it explains the buyer outcome. | Visitors must work through 13 tool cards before understanding why the system removes implementation work. | Lead with “what arrives ready” and group modules by operating outcome; retain detailed module content below. |
| **P1** | The demo page lacks a direct “who should join” answer and a clear calendar jump for direct-link visitors. | Mixed buying teams may not know who belongs on the review; mobile users may need to scroll through the offer before reaching the calendar. | Add a compact attendee panel and a visible “Skip to scheduling” anchor; track completed bookings via the confirmation route. |
| **P1** | The sitemap still uses June 23, 2026 update dates despite major page changes. | It sends stale freshness signals and misses an easy crawl-management improvement. | Refresh `<lastmod>` on materially revised public pages after the next release. |
| **P2** | Only the homepage currently carries broad Organization, WebSite, and FAQ structured data. | Secondary pages are less explicit for search systems and answer engines. | Add page-specific visible FAQs and matching FAQPage/BreadcrumbList markup only where the questions are rendered on-page. |

## Canonical offer architecture to apply everywhere

This hierarchy is the key decision. It keeps every page, demo conversation, sales asset, and AI-generated explanation aligned.

| Layer | Official role | Buyer-friendly definition | Where it should appear |
|---|---|---|---|
| **8 Revenue Playbooks** | Outcome systems | Ready-built systems for specific FEC revenue moments, such as birthday sales, group events, guest follow-up, reputation, repeat visits, team accountability, and community growth. | Homepage Revenue Cycle, `/playbook`, demo review. |
| **13 Core Modules** | Capability layer | The connected tools that make the playbooks run: inbox, forms, pipelines, automations, email, SMS, reporting, and related functions. | `/features`, selected homepage product proof. |
| **100+ Pre-Built Automations** | Activation layer | Ready-to-activate sequences, triggers, handoffs, reminders, and follow-up logic inside the playbooks. | Homepage, `/features`, `/how-it-works`, demo review. |
| **Activation support** | Service layer | FEC-specific guidance that adapts the ready-built system to the facility’s brand, offers, team, data sources, and operating rhythm. | Homepage Built System section, `/how-it-works`, `/book-a-demo`. |

## Page-by-page recommendation

### 1. Homepage Platform section — preserve as the category overview

The current homepage does the important work: it explains the revenue cycle, shows the product, differentiates the ready-built system, and gives visitors one clear primary action. The Platform navigation item should continue to land here because it is already the strongest high-level explanation.

The only recommended change is a future **contextual page handoff** below the platform proof: a three-choice rail that answers “What do you need next?” The choices should be **See the 13 Core Modules**, **See the 8 Revenue Playbooks**, and **See How Activation Works**. This is better than adding a separate platform page because it sends visitors to a focused answer rather than duplicating indexable content.

### 2. `/features` — change from a feature catalogue to a 13-module operating-system guide

The Features page contains useful depth but begins with “Everything Your FEC Needs,” then presents a long run of equally weighted cards. It is accurate to have detail, but the page does not yet explain the relationship between pre-built systems and technical modules clearly enough.

#### Recommended page structure

| Section | Recommended headline / job | Conversion and SEO role |
|---|---|---|
| **Hero** | **13 Core Modules. One FEC Revenue System.** Subhead: “The software capabilities behind the ready-built playbooks your team activates—not a blank platform you have to design.” | Aligns the page to the official taxonomy and answers “what features does FEC software include?” directly. |
| **Definition block** | “FEC Playbook™ combines 13 connected modules with 100+ pre-built automations. Modules provide the capability; the playbooks provide the proven operating sequence.” | A 40–60 word, self-contained answer block makes the distinction extractable. |
| **Module map** | Group the existing 13 modules into 3 action lanes: **Capture & Convert**, **Communicate & Return**, and **Manage & Improve**. | Reduces cognitive load; gives the page a sports/action system instead of 13 unrelated cards. |
| **Detail cards** | Keep the current detailed module content below the map, but add a slim “What arrives ready” rail to each card: **Workflow**, **Automation**, **Owner**, **Next action**. | Makes the benefit visible before bullet lists and reinforces that users do not build sequences from scratch. |
| **Data & integration clarity** | A small visible panel: “CenterEdge is our official partner. Other supported systems may be connected through the appropriate data-import path.” | Prevents ambiguity and makes the FEC Playbook™ implementation model credible. |
| **CTA** | “See Which Modules Power Your Revenue Review” leading to `/book-a-demo`. | Keeps the offer concrete and consistent. |

The existing statements “0 Extra Tools Needed” and “No third-party tools needed” should be replaced. FEC Playbook™ works **alongside** a facility’s POS, booking platform, and data sources; it should not imply that all external systems disappear.

### 3. `/how-it-works` — make activation the main story

This page currently does a good job making automation understandable through real FEC scenarios. Its main weakness is that it starts with data and automation mechanics before explaining the most differentiated buyer answer: **the core system is already built and FEC Playbook™ helps activate it.**

#### Recommended page structure

1. **Hero:** “From Your Data to Daily Revenue Execution—Without Building It From Scratch.” The direct answer should explain that FEC Playbook™ starts with ready-built playbooks and then adapts messaging, offers, owners, and handoffs to the venue.
2. **Three-stage activation:** **Bring Your Brand & Data → Activate Ready-Built Playbooks → Run With FEC-Specific Support.** This should replace the current generic flow strip as the main process visual.
3. **Source-aware data explanation:** Reserve “official partner” language for CenterEdge. For other systems, say “available data flows and import methods are confirmed during your Revenue Review.”
4. **Scenario section:** Keep the four scenarios, but identify the underlying ready-built playbook beside each one. For example: “Birthday Party Booked → Birthday & Celebration Sales Playbook.”
5. **Conversion block:** Add “Who should join the Revenue Review?” with Owner/Operator, General Manager, and the person responsible for party, group, or marketing follow-up. This supports the mixed buying group you described.

The current title description says “Setup in days, not months.” Unless this is a documented, consistently deliverable commitment, remove it. The page should promise a **practical activation path**, not an unverified implementation time.

### 4. `/playbook` — rebuild around the actual 8 Revenue Playbooks

This is the highest-priority secondary-page rebuild. Its metadata promises “8 Revenue Playbooks,” but the body presents 10 numbered entries. Several of those entries are capability or deployment layers—such as “POS-Adjacent by Design,” “Built-In FEC Workflows,” and “Brand-Ready, Day One”—rather than individual revenue playbooks. They are valuable; they simply belong elsewhere in the hierarchy.

#### Recommended page structure

| Section | Content direction |
|---|---|
| **Hero** | **8 Revenue Playbooks. Already Built for FEC Operations.** Define a Revenue Playbook in one direct paragraph: a ready-built system of workflow, automation, ownership, timing, and follow-up around a specific revenue moment. |
| **Eight playbook map** | Use the official eight: Birthday & Celebration Sales; Group & Corporate Events; Guest Visit Communication; Reputation Protection; Membership Lifecycle; Text Club & Repeat Visits; Sales Accountability; Fundraising & Referrals. |
| **Each playbook card** | Show `The revenue moment`, `What arrives ready`, `What you tailor`, and `What the team sees next`. This converts the page from feature inventory to operating-system proof. |
| **Activation panel** | Move the current “Built-In FEC Workflows” and “Brand-Ready, Day One” content here under **The Playbook Arrives Built. Your Brand Makes It Yours.** |
| **Core modules handoff** | A short section: “The 13 Core Modules make the playbooks run.” Link to `/features`. |
| **Final CTA** | “Map Your First Playbooks in a 30-Minute FEC Revenue Review.” |

Remove the current final disclaimer about “average user information” unless it supports a visible, approved outcome claim. No quantified outcome is presented on this page, so the disclaimer creates doubt without serving a reader.

### 5. `/book-a-demo` — increase appointment confidence and reduce scheduling friction

The refreshed review worksheet makes the Revenue Review more tangible and visually matches the updated homepage much better. The page now needs a few small decision aids to turn interest into a scheduled appointment.

| Improvement | Recommended execution | Why it matters |
|---|---|---|
| **Add a calendar jump** | Place a secondary text link under the hero: “Ready to choose a time? Skip to scheduling ↓” pointing to the calendar section. | Supports direct-link and mobile visitors without removing the offer explanation. |
| **Clarify attendees** | Add: “Bring the people who own party, group, guest follow-up, or operating decisions. Owner/operators, general managers, and sales or marketing leaders commonly join.” | Reduces uncertainty for mixed decision teams. |
| **Set the expectation** | Add a small label next to the calendar: “No preparation required. Bring your current tools if you want a more specific conversation.” | Lowers booking friction while keeping the review credible. |
| **Track the real conversion** | Use the existing confirmation redirect (`/cal-thankyou`) to record a `revenue_review_scheduled` event only after a booking completes. Track calendar exposure and CTA clicks as earlier funnel steps. | Prevents a calendar-page view from being mistaken for a booked appointment. |
| **Keep consent observable** | Test the scheduling script after Accept, Decline, and Preferences interactions in the published experience. | The scheduling flow is the conversion-critical action and must stay usable regardless of analytics consent. |

## AI-discovery and traditional SEO improvements

FEC Playbook™ already has the correct foundational direction: public routes can be crawled, pages use unique metadata and canonical URLs, the site has a sitemap, and the homepage includes visible-content structured data. The next opportunity is **better content clarity and first-hand authority**, not AI-specific copy tricks. Google recommends useful, original, people-first content with clear structure; it does not require special AI files or artificial “chunking” for inclusion in its generative search features. [1]

| Page | Add visible, indexable answer content | Schema / technical follow-up |
|---|---|---|
| `/features` | A short “What does FEC software include?” answer, plus questions on pre-built automations, POS relationship, and module scope. | Add FAQPage only after those FAQs are visibly rendered; add BreadcrumbList. |
| `/how-it-works` | A direct “How does FEC Playbook™ work with an existing POS or booking system?” answer, with source-aware integration wording. | Add FAQPage for visible questions; refresh title and description after removing unsupported timeline language. |
| `/playbook` | A direct definition of an FEC Revenue Playbook, a table separating playbooks, modules, and automations, and a visible activation explanation. | Add FAQPage and BreadcrumbList after the content rebuild. |
| `/book-a-demo` | “What happens in a 30-Minute FEC Revenue Review?” with the three specific outputs already described on the page. | Add a concise visible FAQ; do not use review/rating markup without qualifying evidence. |

The current React implementation can use JavaScript-set titles, canonical URLs, and rendered structured data, but the content must remain visible after rendering and should be checked in Search Console’s URL Inspection and Rich Results tools after release. [2] Refresh the sitemap `lastmod` dates when revised public content is published.

The planned About Us page is also strategically valuable. Once Keith Smith and Laura Zorn’s approved headshots and bios are available, it should document specific FEC operating experience, authorship, and the origin of the playbooks. That creates a credible first-hand source signal for the claims on the secondary pages rather than relying only on platform language.

## Recommended build sequence

| Sprint | Work | Expected outcome |
|---|---|---|
| **1 — Content accuracy** | Reconcile the 8 / 13 / 100+ taxonomy; correct integration claims; remove unsupported setup timing and unnecessary outcome disclaimer; refresh sitemap dates. | One trustworthy product story across the navigation path. |
| **2 — Playbook rebuild** | Rebuild `/playbook` around the actual eight Revenue Playbooks, the activation panel, a modules handoff, and visible FAQs. | Strongest category-positioning and AI-citation page. |
| **3 — How It Works rebuild** | Shift the page from generic automation mechanics to the three-stage activation model; keep scenarios as proof. | Makes “already built, made yours, supported through activation” concrete. |
| **4 — Feature-page restructure** | Add the 13 Core Modules map and outcome-based grouping; retain details beneath it. | Better feature comprehension, less scrolling fatigue, stronger conversion path. |
| **5 — Demo friction and measurement** | Add calendar jump, attendee guidance, post-booking event, and consent-state QA. | A more reliable appointment funnel. |

## Decision needed before implementation

Approve the canonical **8 Revenue Playbooks** list shown in this audit as the public source of truth. If any item name differs from your sales or onboarding language, update the list before the `/playbook` rebuild. The 13 Core Modules can remain detailed on `/features`, while the 100+ automations should be described as workflows inside the playbooks—not as a competing third product category.

## References

[1] [Google Search Central, *Optimizing your website for generative AI features on Google Search*](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

[2] [Google Search Central, *Understand the JavaScript SEO basics*](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
