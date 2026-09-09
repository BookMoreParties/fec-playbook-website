# Navigation-Page Conversion and AI-Discovery Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the public FEC Playbook™ navigation path communicate one accurate offer architecture, improve Revenue Review conversion confidence, and expose helpful visible content for search and AI discovery.

**Architecture:** Keep the existing React + Wouter routes, shared `SEOMeta`, `StructuredData`, `Navigation`, `Footer`, and `trackEvent` patterns. Rebuild the page content inside the existing route components rather than adding routes or dependencies. Each revised page will make a single job explicit: `/playbook` explains the eight ready-built revenue systems, `/features` explains the thirteen capability modules, `/how-it-works` explains activation, and `/book-a-demo` removes scheduling uncertainty.

**Tech Stack:** React 19, TypeScript, Wouter, Tailwind CSS 4, `react-helmet-async`, Lucide icons, Vite.

**Spec:** `navigation-pages-conversion-seo-audit.md`

## Global Constraints

- Display **FEC Playbook™** with a trademark symbol in all visible brand references.
- Use the confirmed product taxonomy exactly: **8 Revenue Playbooks**, **13 Core Modules**, and **100+ pre-built automations**.
- Do not add invented case-study metrics, reviews, star ratings, or implementation timelines.
- Describe **CenterEdge** as the official partner; other systems must be described as data-import or data-flow options confirmed during the Revenue Review.
- Keep the primary public conversion action as **Book a 30-Minute FEC Revenue Review** linking to `/book-a-demo`.
- Retain the black/white/cyan, angular, action-led visual language. Respect `prefers-reduced-motion` and keep all new content usable at 375px width.
- Add structured data only when the equivalent content is visibly rendered on the same page.

---

### Task 1: Rebuild the Playbook route around eight Revenue Playbooks

**Files:**
- Modify: `client/src/pages/Playbook.tsx`
- Modify: `client/public/sitemap.xml`

**Interfaces:**
- Consumes: `SEOMeta`, `StructuredData`, `Navigation`, `Footer`, and `/book-a-demo`.
- Produces: Eight visible Revenue Playbook cards, a visible taxonomy table, a visible FAQ set, and valid JSON-LD for FAQPage and BreadcrumbList.

- [ ] **Step 1: Replace the ten legacy mixed cards with eight revenue-system cards.**

Use this canonical set, preserving the currently confirmed language:

```ts
const revenuePlaybooks = [
  "Birthday & Celebration Sales",
  "Group & Corporate Events",
  "Guest Visit Communication",
  "Reputation Protection",
  "Membership Lifecycle",
  "Text Club & Repeat Visits",
  "Sales Accountability",
  "Fundraising & Referrals",
];
```

Each card must visibly include: `The revenue moment`, `What arrives ready`, `What you tailor`, and `What the team sees next`.

- [ ] **Step 2: Add a direct definition block and visible taxonomy table.**

Add a 40–60 word definition answering “What is an FEC Revenue Playbook?” followed by a three-row table separating Revenue Playbooks, Core Modules, and Pre-Built Automations.

- [ ] **Step 3: Add the activation panel and module handoff.**

Use the visible headline **The Playbook Arrives Built. Your Brand Makes It Yours.** Explain that FEC Playbook™ adapts the ready-built systems to the facility’s offers, tone, team ownership, and available data sources. Add a `/features` handoff labelled **See the 13 Core Modules**.

- [ ] **Step 4: Add visible FAQs and matching structured data.**

Add three visible questions: “What is an FEC Revenue Playbook?”, “Do we have to build the automations?”, and “How does FEC Playbook™ work with our existing systems?” Create a `faqPage` and `breadcrumbList` object passed to `StructuredData`.

- [ ] **Step 5: Test and update freshness.**

Run `pnpm exec tsc --noEmit` and update the `/playbook` sitemap `<lastmod>` date to the release date.

### Task 2: Restructure Features around the thirteen Core Modules

**Files:**
- Modify: `client/src/pages/Features.tsx`

**Interfaces:**
- Consumes: `SEOMeta`, `StructuredData`, `Navigation`, `Footer`, and `/book-a-demo`.
- Produces: A visible module-definition block, three outcome lanes, integration clarity, FAQs, and matching structured data.

- [ ] **Step 1: Update the hero and definition block.**

Use **13 Core Modules. One FEC Revenue System.** Explain that modules provide capability, Revenue Playbooks provide the ready-built operating sequence, and 100+ automations provide the triggers and handoffs.

- [ ] **Step 2: Add three visible outcome lanes above the detailed cards.**

Render these lanes: **Capture & Convert**, **Communicate & Return**, and **Manage & Improve**. Each lane must list the appropriate modules by name and provide a one-sentence outcome.

- [ ] **Step 3: Refine detailed feature cards.**

Replace claim language that says FEC Playbook™ eliminates all external tools. Add a slim visible `What arrives ready` label that reinforces ready-built workflow logic, automation, ownership, and next action. Keep the feature bullets below it.

- [ ] **Step 4: Add data-source clarity and visible FAQs.**

Add this visible panel: “CenterEdge is the official partner. Other supported systems may be connected through the appropriate data-import path, confirmed during your Revenue Review.” Add visible FAQs for module scope, pre-built automations, and the relationship with an existing POS or booking system, then create matching FAQPage and BreadcrumbList data.

- [ ] **Step 5: Test.**

Run `pnpm exec tsc --noEmit` and verify the page at desktop and mobile widths.

### Task 3: Reframe How It Works around activation

**Files:**
- Modify: `client/src/pages/HowItWorks.tsx`

**Interfaces:**
- Consumes: `SEOMeta`, `StructuredData`, `Navigation`, `Footer`, and `/book-a-demo`.
- Produces: A three-stage activation path, source-aware copy, labelled scenarios, visible FAQs, and matching structured data.

- [ ] **Step 1: Replace the hero with activation-first positioning.**

Use **From Your Data to Daily Revenue Execution—Without Building It From Scratch.** Explain that FEC Playbook™ begins with ready-built systems, then adapts brand voice, offers, ownership, and available data flows to the facility.

- [ ] **Step 2: Replace the generic flow strip with three activation stages.**

Render `01 Bring Your Brand & Data → 02 Activate Ready-Built Playbooks → 03 Run With FEC-Specific Support`. Keep each stage concise, actionable, and visible before the detailed sections.

- [ ] **Step 3: Correct data and integration language.**

Reserve “official partner” for CenterEdge. Rephrase broad “connects directly” and “no manual entry” claims to “available data flows and import methods are confirmed during your Revenue Review.” Remove the unsupported “Setup in days, not months” meta-description language.

- [ ] **Step 4: Label the existing scenarios with their playbooks.**

Use labels such as `Birthday Party Booked → Birthday & Celebration Sales`, `Group Inquiry → Group & Corporate Events`, `Guest Visits → Guest Visit Communication`, and `Reschedule → Sales Accountability`.

- [ ] **Step 5: Add attendee guidance and visible FAQs.**

Add a conversion block asking who should join: owner/operator, general manager, and the person responsible for party, group, guest follow-up, or marketing work. Add visible FAQs for the activation process, existing systems, and what the team must build; create matching FAQPage and BreadcrumbList data.

### Task 4: Reduce scheduling friction and add conversion measurement

**Files:**
- Modify: `client/src/pages/BookDemo.tsx`
- Modify: `client/src/pages/CalThankYou.tsx`

**Interfaces:**
- Consumes: `trackEvent(eventName, params)` from `client/src/lib/analytics.ts`.
- Produces: A calendar anchor, attendee/preparation guidance, and `revenue_review_scheduled` tracked only on confirmation page load.

- [ ] **Step 1: Add the calendar jump and scheduling anchor.**

Place the text link **Ready to choose a time? Skip to scheduling ↓** in the hero and use `id="scheduling"` on the calendar section.

- [ ] **Step 2: Add decision aids beside the calendar.**

Render: “Bring the people who own party, group, guest follow-up, or operating decisions. Owner/operators, general managers, and sales or marketing leaders commonly join.” Also render: “No preparation required. Bring your current tools if you want a more specific conversation.”

- [ ] **Step 3: Add post-booking event tracking.**

On `/cal-thankyou`, call `trackEvent("revenue_review_scheduled", { source: "calendar_confirmation" })` inside a one-time `useEffect`. Do not fire this event on the booking page, CTA click, or calendar iframe load.

- [ ] **Step 4: Add a visible final FAQ and matching FAQPage data.**

Ensure the Book a Revenue Review page visibly answers: “What happens in a 30-Minute FEC Revenue Review?”, “Who should attend?”, and “Do I need to prepare anything?” Then add matching FAQPage and BreadcrumbList JSON-LD with `StructuredData`.

### Task 5: Release validation

**Files:**
- Modify: `client/public/sitemap.xml`
- Modify: `todo.md`

- [ ] **Step 1: Refresh public sitemap dates.**

Set `<lastmod>` to the release date for `/features`, `/how-it-works`, `/playbook`, and `/book-a-demo`.

- [ ] **Step 2: Run technical validation.**

Run:

```bash
pnpm exec tsc --noEmit
pnpm run build
```

Expected: both commands exit with code `0`.

- [ ] **Step 3: Verify rendered pages.**

Capture full-page screenshots for `/features`, `/how-it-works`, `/playbook`, and `/book-a-demo` at `1280×720` and `375×812`. Confirm no overflow, no clipped CTA, readable contrast, and a visible calendar anchor.

- [ ] **Step 4: Save checkpoint.**

Save a checkpoint describing the canonical taxonomy, cross-page conversion updates, structured data, and booking-completion event.

## Plan self-review

**Spec coverage:** The plan implements all approved audit items: canonical 8/13/100+ taxonomy, integration clarity, Playbook rebuild, How It Works activation path, Features grouping, booking friction reductions, visible FAQ support, structured data, sitemap freshness, and responsive validation.

**Placeholder scan:** No unassigned content, unscoped files, or unspecified technical actions remain.

**Interface consistency:** All new structured data uses the existing `StructuredData` component. Booking-complete measurement uses the existing `trackEvent` helper and fires only on `CalThankYou` confirmation route load.
