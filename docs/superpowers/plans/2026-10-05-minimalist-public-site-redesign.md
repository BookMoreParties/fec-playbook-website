# FEC Playbook™ Minimalist Public-Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the public FEC Playbook™ conversion experience as a light-first, minimalist, proof-led site that makes the economic outcomes—more booked parties, less repetitive work, more reviews, and more return visits—immediately clear.

**Architecture:** Keep the current React/Vite/Wouter application and all public/internal route contracts. Rebuild the shared public shell and five core public pages with small, data-driven page components, a shared light editorial visual system, existing CDN product images, current analytics helpers, `SEOMeta`, and visible-content schema. Preserve internal/client, calendar, onboarding, support, legal, Termly, tracking, and iframe flows.

**Tech Stack:** React 19, TypeScript 5.6, Vite 7, Tailwind CSS 4, Wouter 3, Lucide React, react-helmet-async.

**Spec:** `docs/superpowers/specs/2026-10-05-minimalist-public-site-redesign.md`

## Global Constraints

- Use **FEC Playbook™** in visible brand copy.
- Do not publish pricing, billing language, or price comparisons.
- Do not use the term **“partner”** in public marketing or shared footer copy.
- Do not show unapproved numerical results, social-proof totals, or offer-inventory counts.
- Do not mention white-label platform infrastructure in public copy.
- State that FEC Playbook™ runs the revenue work around a venue’s existing POS/booking tools; do not claim it replaces the POS.
- Keep every public sales CTA directed to `/book-a-demo` and retain `cta_book_revenue_review_clicked` tracking where it already exists.
- Keep Termly resource blocking, Google Consent Mode v2, GA4, Meta Pixel, and GHL tracking code untouched.
- Do not modify `server/`, add assets under `client/public` or `client/src/assets`, or change robots exclusions for client/internal routes.
- Keep existing public routes: `/`, `/features`, `/how-it-works`, `/playbook`, `/book-a-demo`.
- Keep a full compliance footer on all normal content pages.
- Support keyboard access, visible focus rings, mobile responsiveness, and `prefers-reduced-motion`.

---

### Task 1: Establish the light-first public visual foundation

**Files:**
- Modify: `client/src/index.css`
- Modify: `client/src/App.tsx`
- Test: `pnpm check`

**Interfaces:**
- Consumes: Existing Tailwind semantic variables and `.fec-btn-primary` / `.fec-btn-outline` classes.
- Produces: Light default semantic variables and public-shell utility classes used by the rebuilt shared components and pages.

- [ ] **Step 1: Replace the marketing design-system comment and semantic defaults in `client/src/index.css`**

Use this design-system intent at the top of the file:

```css
/* FEC Playbook™ public visual system
 * Light-first operator-grade editorial software design.
 * Warm white, near-black, navy rules, and process cyan for action and proof.
 * Montserrat is the approved all-web type system for this release.
 */
```

Set light semantic variables to warm white backgrounds, near-black foreground, navy primary, cyan accent, 12px radius, and quiet neutral borders. Keep the existing `.dark` variables available for internal routes that still depend on them.

- [ ] **Step 2: Add reusable public-shell classes beneath the base layer**

Add the exact classes below so all rebuilt public pages share the same language instead of repeating long style strings:

```css
.fec-page { background: #fcfcfa; color: #111827; }
.fec-eyebrow { color: #0c719a; font-size: .72rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.fec-display { color: #0c1424; font-weight: 800; letter-spacing: -.055em; line-height: .95; }
.fec-copy { color: #526070; line-height: 1.7; }
.fec-rule { border-color: rgba(13, 27, 62, .14); }
.fec-surface { background: #fff; border: 1px solid rgba(13, 27, 62, .12); border-radius: .875rem; }
.fec-frame { background: #081326; border: 1px solid rgba(13, 27, 62, .2); border-radius: 1rem; box-shadow: 0 24px 70px rgba(13, 27, 62, .16); }
```

Refactor `.fec-btn-primary` to a solid `#00AEEF` background, `#07111f` foreground, 12px radius, 48px minimum height, 700–800 font weight, and no gradient. Refactor `.fec-btn-outline` to an ink text button with a quiet navy border. Preserve an obvious hover and focus state without a glowing effect.

- [ ] **Step 3: Remove public-only heavy effects from global helpers**

Delete or stop using gradient text, angular divider, glow, pulse, and shadow helpers that make the marketing experience look like a neon dashboard. Do not remove generic focus, touch, mobile, or reduced-motion safeguards.

- [ ] **Step 4: Set the application’s non-switchable default theme to light in `client/src/App.tsx`**

Change:

```tsx
<ThemeProvider defaultTheme="dark">
```

to:

```tsx
<ThemeProvider defaultTheme="light">
```

The rebuilt public pages must use explicit light classes. Existing internal pages may retain their own dark backgrounds and remain functional.

- [ ] **Step 5: Run TypeScript validation**

Run:

```bash
pnpm check
```

Expected: exit code 0 with no TypeScript errors.

- [ ] **Step 6: Commit the foundation checkpoint**

Run:

```bash
git add client/src/index.css client/src/App.tsx
git commit -m "feat: establish light-first public design system"
```

### Task 2: Rebuild the shared public navigation, footer, and mobile CTA

**Files:**
- Modify: `client/src/components/Navigation.tsx`
- Modify: `client/src/components/Footer.tsx`
- Modify: `client/src/components/MobileCTABar.tsx`
- Test: `pnpm check`

**Interfaces:**
- Consumes: `trackEvent`, `wouter` links, existing logo CDN URL, and `.fec-btn-primary` / `.fec-btn-outline`.
- Produces: The shared shell for `/`, `/features`, `/how-it-works`, `/playbook`, and `/book-a-demo`.

- [ ] **Step 1: Replace `navLinks` with the approved simplified public information architecture**

Use the following navigation array:

```ts
const navLinks = [
  { label: "Platform", href: "/", desc: "The connected revenue operating system" },
  { label: "Outcomes", href: "/features", desc: "What gets easier and moves faster" },
  { label: "How It Works", href: "/how-it-works", desc: "How the ready-built system is activated" },
  { label: "Playbooks", href: "/playbook", desc: "The workflows behind daily FEC revenue work" },
];
```

Use Wouter `Link` for normal navigation. Retain the accessible mobile dialog, escape close, focus trap, scroll lock, and focus restoration behavior.

- [ ] **Step 2: Change the navigation visual hierarchy**

Build a white, sticky, translucent header with a quiet bottom border. Keep the logo at 32–36px high. Use sentence-case navigation labels, no uppercase letter-spaced commands, and one primary CTA labeled **Book a Revenue Review**. Keep Login as a quiet external text link. The mobile drawer must use white background, ink copy, and cyan focus/action accents.

- [ ] **Step 3: Simplify the shared footer copy and routes**

Use this brand statement:

> FEC Playbook™ is the revenue operating system built for Family Entertainment Centers—helping teams move party leads, guest communication, reviews, and return visits forward from one place.

Use the following public link groups:

- **Explore:** Platform, Outcomes, How It Works, Playbooks
- **Get started:** Book a Revenue Review, Support, Client Login

Keep all current compliance links, result disclaimer, trademark/data-import disclaimer, `Back Home`, and Termly actions. Rename any “Integration Partner Disclaimer” heading to **Integration and trademark disclaimer**. State CenterEdge only as a supported connection, not as a partner.

- [ ] **Step 4: Rebuild `MobileCTABar` in the light shared system**

Keep the visibility threshold and dismiss behavior. Use a white surface, navy border, cyan button, dark copy, no pulse animation, and only show it on `/`, `/features`, `/how-it-works`, and `/playbook`.

- [ ] **Step 5: Run TypeScript validation**

Run:

```bash
pnpm check
```

Expected: exit code 0 with no TypeScript errors.

- [ ] **Step 6: Commit the shared-shell checkpoint**

Run:

```bash
git add client/src/components/Navigation.tsx client/src/components/Footer.tsx client/src/components/MobileCTABar.tsx
git commit -m "feat: rebuild public navigation and footer"
```

### Task 3: Build and review the homepage visual v0

**Files:**
- Modify: `client/src/pages/Home.tsx`
- Test: `pnpm check`, `pnpm build`, desktop/mobile screenshots

**Interfaces:**
- Consumes: `Navigation`, `Footer`, `SEOMeta`, `StructuredData`, `trackEvent`, and existing CDN product screenshots.
- Produces: A rendered v0 at `/` for user visual approval before detailed page rebuild work proceeds.

- [ ] **Step 1: Replace the existing hero with the approved minimal composition**

Implement a two-column hero with this exact visible content:

```text
Eyebrow: Built for Family Entertainment Centers
H1: More booked parties. Less busywork.
Body: FEC Playbook™ brings your party leads, guest communication, reviews, and repeat-visit work into one FEC revenue operating system—so your team spends less time switching tools and more time moving guests forward.
Primary CTA: Book a 30-Minute FEC Revenue Review
Secondary link: See how it works
Proof label: Every inquiry has an owner and next step.
```

Use the existing lead-pipeline screenshot from the `ASSETS` object in a large dark product frame. Keep the page background warm white, headline ink, and cyan action button.

- [ ] **Step 2: Build the structural v0 sections beneath the hero**

Create these visually complete, concise preview sections using actual text only where specified:

1. **Fragmented stack:** “Your team should not have to run revenue from five different tools.”
2. **Consolidation comparison:** a three-row Before / With FEC Playbook™ table using the exact rows from the spec.
3. **Revenue moments:** four slim panels titled Party Lead, Booked Event, Guest Feedback, and Return Visit.
4. **Ready-built promise:** “You bring the brand. FEC Playbook™ brings the playbook.”
5. **Final CTA:** “See what FEC Playbook™ can take off your team’s plate.”

Do not include counts, numerical results, pricing, “partner,” or detailed feature inventories in the v0.

- [ ] **Step 3: Preserve and align source-aware metadata and schema**

Set:

```tsx
title="FEC Revenue Operating System for More Booked Parties | FEC Playbook™"
description="FEC Playbook™ helps Family Entertainment Centers consolidate revenue work, move party leads faster, automate routine communication, earn more reviews, and create more return visits."
```

Keep Organization, WebSite, and FAQ schema. Rewrite the visible FAQ questions and answers to match the new story; FAQ schema must exactly match visible questions.

- [ ] **Step 4: Validate the v0 locally**

Run:

```bash
pnpm check && pnpm build
```

Expected: both commands exit 0.

Capture `/` with the WebDev screenshot tool at:

```text
Desktop: 1440x900
Mobile: 390x844
```

Inspect hero legibility, one-screen CTA visibility, product-frame crop, CTA hit area, and no horizontal overflow.

- [ ] **Step 5: Save the v0 checkpoint without publishing**

Use the WebDev checkpoint tool with this message:

```text
Built a light-first minimalist homepage v0 with a proof-led hero, tool-consolidation story, four revenue moments, and a single Revenue Review action. Awaiting visual direction approval before detailed core-page rebuild.
```

- [ ] **Step 6: Ask for visual approval before Tasks 4–8**

Provide the current preview URL and state these explicit v0 assumptions:

- Bright editorial system replaces the dark action campaign.
- Real interface screenshots remain the primary visual proof.
- No numerical results or offer-inventory counts are shown.
- The primary action remains the 30-Minute FEC Revenue Review.

Do not begin Tasks 4–8 until the v0 has been approved or adjusted.

### Task 4: Rebuild `/features` as the outcomes page

**Files:**
- Modify: `client/src/pages/Features.tsx`
- Test: `pnpm check`, `pnpm build`, desktop/mobile screenshot

**Interfaces:**
- Consumes: shared public shell and `SEOMeta` / `StructuredData`.
- Produces: The **Outcomes** page retained at `/features`.

- [ ] **Step 1: Replace detailed feature inventory with five outcome sections**

Use these content groups in order:

1. **More party leads moved forward** — centralize inquiry ownership and follow-up.
2. **Less repetitive guest communication** — confirmations, reminders, and answers keep moving.
3. **More time for the work guests notice** — reduce manual switching and administrative repetition.
4. **More review opportunities** — create a consistent feedback and review-request process.
5. **More reasons to return** — relevant follow-up after a visit or party.

Each section uses a one-sentence direct answer, 2–3 short bullets, one operational workflow cue, and an inline `/book-a-demo` CTA.

- [ ] **Step 2: Add a light product-proof section**

Use the existing Inbox and Dashboard CDN screenshots in two alternating, light editorial frames. Every image must have a useful FEC Playbook™ alt description.

- [ ] **Step 3: Replace the FAQ and metadata**

Title:

```text
FEC Revenue Outcomes: More Bookings, Reviews & Return Visits
```

Description:

```text
See how FEC Playbook™ helps Family Entertainment Centers move party leads faster, automate routine communication, earn more reviews, and give guests a reason to return.
```

Use three visible FAQs: party lead follow-up, existing POS/booking tools, and whether staff must build workflows. Avoid inventory counts and prohibited language.

- [ ] **Step 4: Run validation and commit**

Run:

```bash
pnpm check && pnpm build
git add client/src/pages/Features.tsx
git commit -m "feat: reframe features around FEC outcomes"
```

### Task 5: Rebuild `/how-it-works` as a low-friction activation path

**Files:**
- Modify: `client/src/pages/HowItWorks.tsx`
- Test: `pnpm check`, `pnpm build`, desktop/mobile screenshot

**Interfaces:**
- Consumes: shared public shell, existing CDN product screenshots, and `SEOMeta` / `StructuredData`.
- Produces: The **How It Works** public page.

- [ ] **Step 1: Create a concise hero**

Visible content:

```text
Eyebrow: A ready-built system, fitted to your FEC
H1: No blank platform. No new operating manual.
Body: FEC Playbook™ starts with proven FEC workflows, then fits the details to your brand, offers, team, and the systems already running your venue.
CTA: Book a 30-Minute FEC Revenue Review
```

- [ ] **Step 2: Build the three-step activation sequence**

1. **Find the revenue leak** — identify the inquiry, communication, review, or return-visit work that needs attention.
2. **Fit the playbook** — align the existing workflow with team roles, offers, and data available from current systems.
3. **Put it to work** — activate the workflow and check the result with the team.

Use a connected three-step line on desktop and stacked numbered cards on mobile. Do not claim fixed implementation timing.

- [ ] **Step 3: Add a “what stays / what changes” section**

| Keep | Improve |
|---|---|
| Existing POS and booking systems | Lead ownership and follow-up |
| The venue’s brand, offers, and policies | Confirmations and routine communication |
| The team’s judgment and guest care | Repetitive administrative work |

End with a source-aware integration sentence: “Connection options are reviewed during your Revenue Review.”

- [ ] **Step 4: Update metadata, FAQs, validate, and commit**

Title:

```text
How FEC Playbook™ Is Activated for Your Venue
```

Description:

```text
FEC Playbook™ starts with ready-built FEC workflows, then fits them to your team, offers, brand, and current systems—without a rip-and-replace decision.
```

Run:

```bash
pnpm check && pnpm build
git add client/src/pages/HowItWorks.tsx
git commit -m "feat: simplify FEC Playbook activation story"
```

### Task 6: Rebuild `/playbook` around daily revenue moments

**Files:**
- Modify: `client/src/pages/Playbook.tsx`
- Test: `pnpm check`, `pnpm build`, desktop/mobile screenshot

**Interfaces:**
- Consumes: shared public shell and `SEOMeta` / `StructuredData`.
- Produces: The public Playbooks page without inventory-count claims.

- [ ] **Step 1: Create an outcome-led hero**

Visible content:

```text
Eyebrow: The work that keeps revenue moving
H1: Start with the moment that is costing you the most.
Body: FEC Playbook™ turns familiar FEC revenue moments into clear, repeatable workflows—so a party lead, booked event, guest review, or return visit does not depend on someone remembering the next step.
CTA: Map the right playbook
```

- [ ] **Step 2: Convert the eight card grid into four concise priority workflows**

Use these customer-first workflow titles and direct outcomes:

- **Party leads** — every inquiry gets a next step.
- **Booked events** — every family gets the right information at the right time.
- **Guest feedback and reviews** — every great experience has a route to public proof.
- **Repeat visits** — every guest has a relevant reason to return.

Under a “More ways the system helps” disclosure, present the remaining work areas as short text rows: group events, membership lifecycle, sales accountability, and community relationships. Do not use a card for every module or claim a hard inventory number.

- [ ] **Step 3: Add the “ready-built / venue-specific” comparison**

| FEC Playbook™ starts ready with | Your venue makes it specific with |
|---|---|
| Workflow sequence, follow-up timing, ownership, and repeatable next steps | Offers, policies, team roles, guest voice, and existing operating context |

- [ ] **Step 4: Update metadata, FAQs, validate, and commit**

Title:

```text
FEC Revenue Playbooks for Party Leads, Reviews & Return Visits
```

Description:

```text
FEC Playbook™ turns party leads, booked events, guest feedback, and return visits into ready-built workflows fitted to the way your Family Entertainment Center operates.
```

Run:

```bash
pnpm check && pnpm build
git add client/src/pages/Playbook.tsx
git commit -m "feat: simplify public revenue playbooks"
```

### Task 7: Rebuild `/book-a-demo` as a minimal conversion page

**Files:**
- Modify: `client/src/pages/BookDemo.tsx`
- Test: `pnpm check`, `pnpm build`, iframe interaction check

**Interfaces:**
- Consumes: shared public shell, existing calendar iframe, `trackEvent`, `SEOMeta`, and `StructuredData`.
- Produces: The light-first **Book a 30-Minute FEC Revenue Review** page.

- [ ] **Step 1: Simplify the booking hero and pre-scheduler copy**

Use:

```text
Eyebrow: 30-Minute FEC Revenue Review
H1: Find the work that is costing you leads and time.
Body: We’ll look at your party-lead follow-up, guest communication, reviews, and return-visit work—then show you where a ready-built FEC Playbook™ fits.
```

Use a three-item agenda alongside the calendar:

1. What is getting stuck
2. What can move automatically
3. What a practical next step looks like

- [ ] **Step 2: Preserve the existing scheduler behavior**

Keep `form_embed.js`, iframe ID, iframe source, no-overflow wrapper, 900px minimum height, calendar title, and `demo_page_viewed` tracking. Do not alter external calendar configuration.

- [ ] **Step 3: Add an honest friction-reduction section**

Use these statements exactly:

- Bring the people who know how party, guest, or sales follow-up works today.
- No preparation is required; your current tools are helpful if you want a more specific conversation.
- The review is a working session, not a generic product tour.

- [ ] **Step 4: Update metadata, FAQ schema, validate, and commit**

Title:

```text
Book a 30-Minute FEC Revenue Review | FEC Playbook™
```

Description:

```text
Find where party leads, guest communication, reviews, or return-visit work are getting stuck, then see the ready-built FEC Playbook™ workflows that fit your venue.
```

Run:

```bash
pnpm check && pnpm build
git add client/src/pages/BookDemo.tsx
git commit -m "feat: simplify Revenue Review conversion page"
```

### Task 8: Align SEO, indexability, tracking, and public copy

**Files:**
- Modify: `client/index.html`
- Modify: `client/src/components/SEOMeta.tsx` only if new metadata property support is required
- Modify: `client/public/sitemap.xml` last-mod dates for rebuilt public pages
- Test: repository-wide string audit, `pnpm check`, `pnpm build`

**Interfaces:**
- Consumes: the rebuilt visible page content and existing tracking/consent setup.
- Produces: Metadata and public indexing entries that match the visible pages.

- [ ] **Step 1: Update HTML fallback metadata only**

Set the fallback title to:

```html
<title>FEC Revenue Operating System for More Booked Parties | FEC Playbook™</title>
```

Set the fallback description to:

```html
<meta name="description" content="FEC Playbook™ helps Family Entertainment Centers consolidate revenue work, move party leads faster, automate routine communication, earn more reviews, and create more return visits." />
```

Do not change consent or tracking scripts.

- [ ] **Step 2: Refresh rebuilt public sitemap dates**

Update only the `lastmod` values for `/`, `/features`, `/how-it-works`, `/playbook`, and `/book-a-demo` to the current date. Do not add a resource page during this phase and do not list client/internal URLs.

- [ ] **Step 3: Run prohibited-content and route audits**

Run:

```bash
rg -n -i "pricing|\bpartner\b|official partner|GoHighLevel|GHL" client/src/pages/Home.tsx client/src/pages/Features.tsx client/src/pages/HowItWorks.tsx client/src/pages/Playbook.tsx client/src/pages/BookDemo.tsx client/src/components/Navigation.tsx client/src/components/Footer.tsx client/src/components/MobileCTABar.tsx
```

Expected: no public-copy occurrences. Any technical GHL embed code outside the listed public marketing files is allowed.

Run:

```bash
rg -n "href=\"/book-a-demo\"|window.location.href = \"/book-a-demo\"" client/src/pages/Home.tsx client/src/pages/Features.tsx client/src/pages/HowItWorks.tsx client/src/pages/Playbook.tsx client/src/pages/BookDemo.tsx client/src/components/Navigation.tsx client/src/components/Footer.tsx client/src/components/MobileCTABar.tsx
```

Expected: all marketing conversion actions point to `/book-a-demo`.

- [ ] **Step 4: Validate and commit SEO alignment**

Run:

```bash
pnpm check && pnpm build
git add client/index.html client/public/sitemap.xml client/src/components/SEOMeta.tsx
git commit -m "chore: align minimalist public SEO metadata"
```

### Task 9: Perform visual, accessibility, build, and Git validation

**Files:**
- Modify only if remediation is required.
- Test: TypeScript, production build, browser screenshots, keyboard checks, source audits, Git status.

**Interfaces:**
- Consumes: all rebuilt core public pages and shared public shell.
- Produces: a stable WebDev checkpoint ready for review and later publication.

- [ ] **Step 1: Run complete validation**

Run:

```bash
pnpm check && pnpm build
```

Expected: both commands exit 0.

- [ ] **Step 2: Capture all rebuilt public pages at desktop and mobile**

Use WebDev screenshots for:

```text
/             1440x900 and 390x844
/features     1440x900 and 390x844
/how-it-works 1440x900 and 390x844
/playbook     1440x900 and 390x844
/book-a-demo  1440x900 and 390x844
```

Verify no horizontal overflow, CTA readability, heading wrapping, image crop, footer wrapping, and calendar space.

- [ ] **Step 3: Run keyboard and reduced-motion checks**

At minimum, verify with the browser that the desktop navigation CTA, mobile menu open/close, first page CTA, FAQ controls, and calendar anchor are reachable by keyboard with an obvious focus outline. Confirm the public-page interface does not rely on hover or motion to expose essential content.

- [ ] **Step 4: Save a WebDev checkpoint**

Use this checkpoint message:

```text
Rebuilt the core FEC Playbook™ public experience as a light-first, minimalist, proof-led website. The public story now centers on more booked parties, less repetitive work, more reviews, and more return visits, with retained compliance, consent-gated tracking, responsive layouts, and source-aligned SEO.
```

- [ ] **Step 5: Commit remaining verified changes and report**

Run:

```bash
git status --short
git add client/src client/index.html client/public/sitemap.xml
git commit -m "feat: launch minimalist FEC Playbook public experience"
git status --short
```

Expected: clean working tree. Report the checkpoint ID, validation commands, and current preview URL. Do not publish or push unless separately requested.
