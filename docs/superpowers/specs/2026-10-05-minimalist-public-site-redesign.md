# FEC Playbook™ Minimalist Public-Site Redesign

**Status:** Design direction proposed — awaiting approval before a visual v0 or public-page code changes.

## Brief

Rebuild the public marketing experience around the measurable work FEC Playbook™ takes off an FEC team’s plate:

- consolidate overlapping communication, lead-management, review, and marketing tools;
- protect party inquiries and follow-up;
- automate confirmations, reminders, repetitive guest communication, and handoffs;
- give staff more time for guests and higher-value work;
- create more opportunities for booked parties, Google reviews, and repeat visits.

The website must remain clear that FEC Playbook™ works alongside the venue’s POS or booking system; it does not position itself as a POS replacement. It must not include pricing, describe external systems as real-time integrations unless verified, use the term "partner" in public marketing, or mention white-label infrastructure.

## Source Findings

### Brand guide

- Approved identity assets include horizontal and vertical lockups in black and white.
- The visual language centers on navy, process cyan, black, and white.
- The brand guide calls for **Acumin Variable Concept** in headings and **Montserrat** for subheads and body copy.
- Current web implementation uses Montserrat, #00AEEF cyan, #0D1B3E navy, and a dark sports/action campaign system.

### Prospect kit

- The product is best framed as a connected **FEC revenue operating system**, not a collection of feature tiles.
- Strongest, repeatable jobs-to-be-done: party lead ownership, booking confirmations, guest communication, reputation/reviews, repeat visits, team accountability, and reduction of repetitive work.
- FEC-specific implementation is a confidence builder: discovery, website review, data/technology connection, sales activation, marketing activation, and post-launch optimization.
- The kit documents operator results, including lead conversion, qualified-lead, review, reputation, organic-traffic, offer-redemption, and email-open-rate claims. These need a public-use decision and visible results disclaimer before being promoted on the main site.
- Source inventory is inconsistent with the existing site’s approved message inventory. The prospect kit uses **71 pre-built campaigns, 595 automations, 8 sales pipelines, and 12 playbooks**, while the current site uses **8 Revenue Playbooks, 13 Core Modules, and 100+ pre-built automations**. No numerical inventory will be used until the approved public source of truth is selected.
- Pricing material was intentionally excluded from this concept.

### Reference-site takeaways

- Fun Center Pro uses a quiet, light editorial page with a short promise, one clear CTA, product proof, and a connected guest-journey story. Its strongest transferable idea is explaining what gets unified in plain language rather than listing software capabilities.
- Patch Retention uses a simple outcome-led hero and clear solution taxonomy. Its transferable value is a focused content architecture around conversion, repeat visits, reviews, and customer communication.
- The supplied Luro template supports a restrained composition: spacious centered or split heroes, a subtle fixed glass navigation bar, contained product frames, minimal borders, and one primary visual focal point. Its purple glow, bento-card density, and generic AI language are not appropriate for FEC Playbook™.

## Design Decisions

### Design Read

```yaml
artifact: Public marketing website redesign
audience: FEC owners, operators, GMs, sales/events managers, and multi-location leaders
visual-language: Quiet operator-grade editorial software site — bright, precise, and proof-forward
mode: Redesign · Overhaul
visual-variance: 6/10
motion-intensity: 2/10
information-density: 4/10
asset-dependence: 7/10
brand-fidelity: 10/10
```

### Narrative role and visual treatment

| Page moment | Narrative role | Visual temperature | Treatment |
|---|---|---|---|
| Hero | Make the category and result immediate | Confident, calm | Large two-line promise, one CTA, real interface frame |
| Fragmented stack | Make current-state cost visible | Honest, controlled | A short before/after comparison with text, not logo clutter |
| Revenue moments | Explain what changes daily | Useful, practical | Four linked workflow moments with concise outcome language |
| Time and team relief | Make labor value tangible | Human, reassuring | Short editorial section with a product or operator context image |
| Results | Reduce perceived risk | Evidence-led | Optional approved proof metrics plus exact operator testimonials |
| Activation | Reduce switching anxiety | Clear, guided | Three visible stages; no implied done-for-you promise |
| Final CTA | Convert intent | Direct | A singular Revenue Review invite with a concise agenda |

### Public visual system

- **Overall atmosphere:** warm-white canvas, near-black typography, fine navy rules, and cyan used only to signal action, progress, or key proof. The site should feel more like a well-run operator’s system than a high-energy sports campaign.
- **Typography:** Acumin Variable Concept for display type if a licensed webfont is available; Montserrat for UI and reading copy. If Acumin cannot be legally loaded, use Montserrat with a controlled text scale for v0.
- **Layout:** 12-column, generous whitespace, 72–112px desktop vertical rhythm, 24–32px mobile rhythm, maximum reading width of 680px, and asymmetric split sections only when an actual product screen or useful diagram earns the space.
- **Components:** 10–14px radii, 1px neutral rules, soft shadow only on elevated product frames, one cyan filled primary button, and quiet text links for secondary actions.
- **Product proof:** existing, real FEC Playbook™ interface screens remain the primary visual asset. No generic stock photography or borrowed template media will be shipped.
- **Motion:** only subtle fade/translate entrances and product-frame depth on hover; every effect respects `prefers-reduced-motion`. No autoplaying movement, neon glows, marquee, large gradients, or decorative dashboard animation.

## Homepage Concept

### 1. Hero — category plus economic outcome

**Eyebrow:** Built for Family Entertainment Centers

**H1:** More booked parties. Less busywork.

**Supporting copy:** FEC Playbook™ brings your party leads, guest communication, reviews, and repeat-visit work into one FEC revenue operating system—so your team spends less time switching tools and more time moving guests forward.

**Primary CTA:** Book a 30-Minute FEC Revenue Review

**Secondary CTA:** See how it works

**Proof object:** One full, clear lead-pipeline product frame with a minimal callout: “Every inquiry has an owner and next step.”

### 2. The operational problem

**Heading:** Your team should not have to run revenue from five different tools.

Three short problem statements:

1. Party leads wait while staff switch between forms, inboxes, texts, and spreadsheets.
2. Confirmations, reminders, and follow-up become more manual work on the busiest days.
3. A great guest visit ends without a clear next step toward a review or return visit.

### 3. The consolidation proposition

**Heading:** One operating system for the work around the transaction.

A calm before/after comparison:

| Before FEC Playbook™ | With FEC Playbook™ |
|---|---|
| Separate inboxes, forms, review tools, manual follow-up, and campaign tools | Connected lead ownership, guest communication, review requests, follow-up, and visibility |
| Repetitive staff work | Ready-built workflows running in the background |
| Revenue work hidden in separate systems | Clear next actions for your team |

The POS and booking system remain explicitly outside the replacement claim: “Keep the systems that run your venue. Put the revenue work around them in motion.”

### 4. Revenue moments that keep moving

**Heading:** From first inquiry to the next visit.

Four slim workflow panels:

- **Party Lead:** capture, assign, and follow up before interest cools.
- **Booked Event:** confirmations, reminders, guest details, and handoffs stay on track.
- **Guest Feedback:** invite satisfied guests to leave a review and route issues back to the team.
- **Return Visit:** use the guest moment to send a relevant reason to come back.

### 5. The labor and team outcome

**Heading:** Let the system handle the repeatable work.

**Copy:** FEC Playbook™ does not replace the people who make your venue great. It removes the routine work that keeps them in inboxes, spreadsheets, and scattered logins—so they can respond faster, serve guests better, and focus on the moments only people can handle.

### 6. Ready-built, not a blank platform

**Heading:** You bring the brand. FEC Playbook™ brings the playbook.

**Copy:** The workflows for party follow-up, booking confirmation, review requests, and repeat-visit communication start ready. We shape them around your offers, team, and guest journey before they go live.

### 7. Results and operator trust

This section will use only approved factual claims. It will combine one or two verified proof metrics with existing approved testimonials, an individual-results disclosure, and a concise “built by FEC operators” statement. It will not use unsupported customer counts, ratings, time-saved claims, or pricing.

### 8. A visible implementation path

**Heading:** Clear path. No blank page.

1. **Find the revenue leak** — identify the inquiry, communication, review, or return-visit work that needs attention.
2. **Fit the playbook** — align your team, offers, and existing systems.
3. **Put it to work** — activate the workflows and check what improves.

### 9. Final CTA

**Heading:** See what FEC Playbook™ can take off your team’s plate.

**CTA:** Book a 30-Minute FEC Revenue Review

**Microcopy:** Find the revenue work getting stuck and the playbooks that fit.

## Public Page and Navigation Concept

The customer-facing experience will become a concise five-page structure while retaining current URLs and all legal/client routes:

| Navigation label | URL | Purpose |
|---|---|---|
| Platform | `/` | The whole operating-system story and primary conversion page |
| Outcomes | `/features` | Organize the product around booked parties, faster communication, reviews, repeat visits, and team time |
| How It Works | `/how-it-works` | Explain the ready-built system and activation path in plain language |
| Playbooks | `/playbook` | Detail the FEC revenue workflows without presenting a feature catalog |
| Resources | New `/resources` after the core redesign | Build SEO and AI-search authority with operator-focused guides and proof |
| Book a Revenue Review | `/book-a-demo` | Minimal conversion page with existing scheduler and a single clear agenda |

Legal, internal/client, calendar, widget, support, onboarding, and thank-you routes remain functional, unlisted where currently unlisted, and out of the public redesign scope.

## SEO and AI-Search Content Spine

### Content gap finding

FEC Playbook™ currently has five primary public marketing URLs and no indexable resource hub, named case study, or solution-specific guides. Comparable sites have created a much broader surface area around party bookings, abandoned inquiries, reviews, repeat business, customer communication, and software consolidation.

The high-value gap is **not** a large generic feature catalog. It is a focused, experience-led resource library that explains operator problems in the language people search for and provides usable first-party examples.

### First resource cluster after core redesign

| Priority | Proposed resource | Search and AI-answer intent | Conversion path |
|---:|---|---|---|
| 1 | `party-lead-follow-up-for-family-entertainment-centers` | How FECs can respond to and follow up with party leads | Revenue Review |
| 2 | `family-entertainment-center-software-stack` | How to simplify fragmented marketing, communication, and review tools | Platform |
| 3 | `how-to-get-more-google-reviews-for-an-fec` | FEC review request and feedback process | Outcomes |
| 4 | `fec-repeat-visit-marketing` | Turn a party or visit into a return visit | Playbooks |
| 5 | `fec-booking-confirmation-checklist` | What event guests need before their party | How It Works |

Each resource will use an answer-first intro, one clear definition, FEC-specific workflow examples, FAQs that reflect real operator questions, author/operator attribution, internal links to the core pages, and visible last-updated information. No keyword stuffing or AI-only content will be introduced.

## Psychology and Copy Rules

- Use **jobs-to-be-done** language: owners hire FEC Playbook™ to protect revenue work and free teams from repetitive administration, not to purchase modules.
- Use **loss aversion ethically** by naming the familiar cost of a missed inquiry, a delayed follow-up, or a guest experience that ends without an invitation to return.
- Use **status-quo reduction** by showing that FEC Playbook™ complements the systems already running the venue.
- Use **paradox-of-choice reduction** by offering one primary action throughout: the 30-Minute FEC Revenue Review.
- Keep paragraphs short, claims specific, and headings direct. Avoid generic software vocabulary, excessive uppercase, feature dumping, “partner,” and unsubstantiated superlatives.

## Validation Criteria

- All visible instances use **FEC Playbook™**.
- No public copy includes pricing or the prohibited term “partner.”
- No public copy mentions white-label platform names.
- Every marketing CTA points to `/book-a-demo` and triggers existing tracking where applicable.
- Every normal content page retains the shared compliance footer and existing consent-gated tracking.
- Public page titles, descriptions, canonical URLs, Open Graph metadata, and visible schema align with visible content.
- Existing robots restrictions and sitemap exclusions for internal/client flows remain intact.
- Desktop and mobile rendering, keyboard navigation, focus styles, reduced-motion behavior, TypeScript, and production build pass before checkpointing.
