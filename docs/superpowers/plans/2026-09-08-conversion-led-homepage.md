# Conversion-Led Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the FEC Playbook™ homepage around the FEC Revenue Operations position, standardize the route to `/book-a-demo`, and add accurate on-page technical SEO signals.

**Architecture:** Keep the site as a React 19 / TypeScript / Tailwind static application. Recompose `Home.tsx` with focused data structures for the revenue-cycle stages and use a small analytics helper so every primary booking action records the same consent-safe event. Add a reusable JSON-LD component that only describes visible, verified site content and render it on the public marketing routes.

**Tech Stack:** React 19, TypeScript, Wouter, Tailwind CSS 4, `react-helmet-async`, existing Google Analytics and consent setup.

**Spec:** `/home/ubuntu/fec-playbook-website/homepage-hero-optimized-copy.md`, `/home/ubuntu/fec-playbook-website/homepage-features-benefits-optimized-copy.md`, and `/home/ubuntu/fec-playbook-website/fec-playbook-growth-strategy.md`.

## Global Constraints

- Preserve the FEC Playbook™ black, white, and FEC Blue (`#00AEEF`) design system and Montserrat typography.
- Append ™ to every visible use of FEC Playbook.
- Do not name or reference competitors in user-facing copy.
- Do not invent testimonials, customer counts, ratings, savings, conversion rates, integrations, or case-study results.
- All booking calls to action must route internally to `/book-a-demo`.
- Keep the project static; do not modify the `server/` directory.
- Retain existing consent-gated tracking scripts and do not fire a completed-booking event without a confirmed calendar redirect signal.
- No local media assets may be added to the project directory.

---

### Task 1: Establish reusable conversion and SEO primitives

**Files:**
- Create: `client/src/components/StructuredData.tsx`
- Create: `client/src/lib/analytics.ts`
- Modify: `client/src/components/SEOMeta.tsx`
- Test: `pnpm exec tsc --noEmit`

**Interfaces:**
- `trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void` sends a GA4-compatible custom event only when `window.gtag` is available.
- `<StructuredData type="organization" | "website" | "faq" />` renders JSON-LD that reflects visible public-page content.
- `SEOMeta` continues to control per-page title, description, canonical, Open Graph, and Twitter metadata.

- [ ] **Step 1: Add analytics helper**

```ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) {
  window.gtag?.("event", eventName, params);
}
```

- [ ] **Step 2: Add visible-content JSON-LD component**

```tsx
const siteUrl = "https://www.fecplaybook.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FEC Playbook",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
};
```

Include only the organization, website, and real on-page FAQ content. Do not include Review, AggregateRating, customer count, or SoftwareApplication markup because verified data required for those types is not in the project source.

- [ ] **Step 3: Render and validate**

Run: `pnpm exec tsc --noEmit`

Expected: command exits successfully with no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/StructuredData.tsx client/src/lib/analytics.ts client/src/components/SEOMeta.tsx
git commit -m "feat: add conversion analytics and structured data primitives"
```

### Task 2: Rebuild the homepage hero and FEC Revenue Cycle section

**Files:**
- Modify: `client/src/pages/Home.tsx`
- Test: `pnpm exec tsc --noEmit`
- Test: homepage screenshot at 1280px and 375px widths

**Interfaces:**
- Hero uses `trackEvent("cta_book_revenue_review_clicked", { placement: "hero" })` before linking to `/book-a-demo`.
- Hero secondary CTA targets `#revenue-playbooks` and records `revenue_playbooks_clicked`.
- Revenue-cycle cards use a `RevenueStage` structure: `id`, `eyebrow`, `headline`, `description`, `proof`.

- [ ] **Step 1: Replace the existing hero block**

Use the approved H1: `RUN EVERY REVENUE MOMENT IN YOUR FEC FROM ONE PLAYBOOK.` Retain the existing logo and product visual asset. Add the supporting paragraph, primary revenue-review CTA, helper text, secondary playbooks CTA, and FEC-specific proof line from the hero specification.

- [ ] **Step 2: Add the FEC Revenue Cycle**

Insert the post-hero section immediately after the hero. Use five semantic H3 benefit blocks: inquiry to booking, guest experience, post-visit reputation, repeat visit, and team accountability. Use a left-led story and a right-side numbered revenue-cycle visual. On mobile, render as an ordered vertical path with readable non-hover text.

- [ ] **Step 3: Retire duplicated first-screen content**

Remove the existing generic stat row, star-rating device, unverified customer-count device, and any section that repeats the hero promise without providing product proof. Preserve only actual, visible platform screenshots and verified integration statements.

- [ ] **Step 4: Verify accessibility and responsive presentation**

Run: `pnpm exec tsc --noEmit`

Capture: `/` at `1280x720` and `375x812`.

Expected: all CTA elements remain visible and keyboard-accessible; no horizontal overflow; hero primary CTA is visible in the first mobile screen.

- [ ] **Step 5: Commit**

```bash
git add client/src/pages/Home.tsx
git commit -m "feat: rebuild homepage around FEC revenue operations"
```

### Task 3: Standardize the public conversion journey

**Files:**
- Modify: `client/src/components/Navigation.tsx`
- Modify: `client/src/components/Footer.tsx`
- Modify: `client/src/pages/Home.tsx`
- Modify: `client/src/pages/Features.tsx`
- Modify: `client/src/pages/HowItWorks.tsx`
- Modify: `client/src/pages/Playbook.tsx`
- Modify: `client/src/pages/BookDemo.tsx`
- Test: `pnpm exec tsc --noEmit`

**Interfaces:**
- Any booking CTA is an internal `<Link href="/book-a-demo">` or an internal anchor without `target="_blank"`.
- All primary buttons use the visible label `BOOK A 30-MINUTE FEC REVENUE REVIEW`.
- The demo page uses `trackEvent("demo_page_viewed", { path: "/book-a-demo" })` on initial mount.

- [ ] **Step 1: Standardize CTA label and destination**

Replace generic public-facing “Book a Call,” “Book a Demo,” and “Book a Free Demo Call” labels with the approved revenue-review label. Keep a concise navigation variant, `BOOK A REVENUE REVIEW`, only where space requires it. Remove `target="_blank"` from internal `/book-a-demo` actions.

- [ ] **Step 2: Make the demo offer concrete**

Update `/book-a-demo` to say: `In 30 minutes, we will identify the revenue leaks we would address first, map the FEC Playbooks™ that fit your facility, and explain the implementation path.` Replace vague expectation copy with the three promised takeaways. Do not add unsupported social proof.

- [ ] **Step 3: Correct conversion-event meaning**

Keep the existing Meta PageView tracking. Remove the automatic Meta `Lead` event that fires simply on `/book-a-demo` page load, because it does not represent a completed booking. Retain page-view analytics and add CTA click tracking. A completed booking event remains deferred until GHL supplies an unambiguous redirect or callback.

- [ ] **Step 4: Verify**

Run: `pnpm exec tsc --noEmit`

Inspect: `/`, `/features`, `/how-it-works`, `/playbook`, `/book-a-demo`.

Expected: every booking path stays on the fecplaybook.com route and uses coherent booking language.

- [ ] **Step 5: Commit**

```bash
git add client/src/components/Navigation.tsx client/src/components/Footer.tsx client/src/pages/Home.tsx client/src/pages/Features.tsx client/src/pages/HowItWorks.tsx client/src/pages/Playbook.tsx client/src/pages/BookDemo.tsx
git commit -m "feat: standardize demo conversion path"
```

### Task 4: Improve on-page AI-search readiness safely

**Files:**
- Modify: `client/src/pages/Home.tsx`
- Modify: `client/src/pages/Features.tsx`
- Modify: `client/src/pages/HowItWorks.tsx`
- Modify: `client/src/pages/Playbook.tsx`
- Modify: `client/src/pages/BookDemo.tsx`
- Modify: `client/src/index.html`
- Test: `pnpm exec tsc --noEmit`

**Interfaces:**
- Each public route imports `<StructuredData>` where its applicable visible content is rendered.
- Home renders `organization`, `website`, and visible `faq` structured data.
- All source and rendered metadata retain the canonical production host `https://www.fecplaybook.com`.

- [ ] **Step 1: Remove legacy keyword-targeting metadata**

Delete meta-keyword phrases that reference a competitor or use old keyword-stuffing patterns. Retain title, description, robots, consent, and analytics scripts.

- [ ] **Step 2: Add metadata and JSON-LD**

Render Organization and WebSite JSON-LD on the homepage and real FAQPage JSON-LD for questions that remain visibly present on the page. Render BreadcrumbList markup only on public subpages where a matching visual breadcrumb is added; do not add invisible breadcrumb data.

- [ ] **Step 3: Verify**

Run: `pnpm exec tsc --noEmit`

Expected: structured-data scripts contain valid JSON and describe only visible content.

- [ ] **Step 4: Commit**

```bash
git add client/src/pages/Home.tsx client/src/pages/Features.tsx client/src/pages/HowItWorks.tsx client/src/pages/Playbook.tsx client/src/pages/BookDemo.tsx client/src/index.html
git commit -m "feat: strengthen public SEO and structured data"
```

### Task 5: Validate, checkpoint, and document production follow-up

**Files:**
- Modify: `todo.md`
- Test: `pnpm exec tsc --noEmit`
- Test: `pnpm run build`
- Test: visual screenshots for `/` and `/book-a-demo`

**Interfaces:**
- No server changes are introduced.
- All public booking CTAs resolve to `/book-a-demo`.

- [ ] **Step 1: Run type and production build checks**

Run:

```bash
pnpm exec tsc --noEmit
pnpm run build
```

Expected: both commands finish with status 0.

- [ ] **Step 2: Test the consent-aware booking journey**

On a production-like preview, visit `/book-a-demo` once with the consent banner unaccepted and once after consent acceptance. Confirm the calendar appears, the page has no clipping, and the visible fallback/scheduling path remains usable.

- [ ] **Step 3: Perform final responsive screenshot review**

Capture `/` and `/book-a-demo` at desktop and 375px mobile widths. Fix any layout issue that obscures the hero CTA, revenue cycle, or booking interface.

- [ ] **Step 4: Update checklist and save checkpoint**

Mark completed checklist items in `todo.md`, then create a project checkpoint describing the conversion, CTA, and SEO improvements.

- [ ] **Step 5: Commit**

```bash
git add todo.md
git commit -m "chore: verify conversion-led homepage release"
```

## Plan Self-Review

**Spec coverage:** The plan covers the approved hero, the FEC Revenue Cycle section, CTA consolidation, trust-claim safety, demo-page promise, consent-aware booking verification, structured data, canonical clarity, mobile review, and checkpointing. It intentionally does not create unverified case studies, customer statistics, integrations, or booking-completion events.

**Placeholder scan:** All implementation tasks list concrete files, interface expectations, copy, commands, and validation outcomes. Deferred booking-completion tracking is explicitly dependent on a real GHL completion signal rather than left as an implied implementation task.

**Type consistency:** All new code uses `trackEvent`, `StructuredData`, `RevenueStage`, and public Wouter route paths as named in the relevant task.

## Execution Choice

The user explicitly requested implementation. Proceed with inline execution in this session, task by task, with a checkpoint only after the build and responsive validation succeed.
