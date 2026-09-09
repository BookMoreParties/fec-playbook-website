# FEC Playbook™ Website Strategy Review Notes

## Initial Homepage Findings

The homepage has a strong, high-contrast black, white, and blue visual base. Its most persuasive material is the operator-led positioning, full-width product screenshots, integration compatibility, and several routes to the demo page. The live page currently uses strong sports-style headlines but leans visually toward a dark SaaS command-center aesthetic because navy panels, glow effects, circuit patterns, and card grids repeat throughout the page.

The primary conversion journey offers several versions of the same request: “Book a Call to Learn More,” “Book a Free Demo Call,” and “See the Full Playbook — Book a Call.” A revised funnel should give the buyer one unambiguous core action and one lower-commitment proof action. Several proof claims require source, scope, or customer attribution before they should be foregrounded as conversion evidence.

## Visual Review Findings

The independent visual review recommends a stronger sports/action system: black and white as the base, blue reserved for decisive proof and action, large left-driven type, diagonal movement, oversized numbers, and recurring use of the play-button mark. It advises reducing ambient neon and glass effects, replacing repetitive centered card grids with asymmetric proof compositions, and leading with actual operator and product evidence over glossy generic imagery.

## Initial SEO and AI-Citation Findings

The homepage has a unique title and meta description through `SEOMeta`, an FAQ section, a defined category statement, and clear industry language. It should gain extractability and citation readiness through sourced performance claims, author/operator credentials, first-hand implementation examples, dedicated integration pages, FAQ schema, Organization and SoftwareApplication schema, and an editorial resource hub that answers specific FEC operational questions.

## Mobile and Booking-Page Findings

The responsive homepage remains readable at a 375px viewport, but its long, card-heavy path means a mobile visitor must scroll through multiple repeated conversion blocks before reaching the footer. The `/book-a-demo` page presents a clear value explanation, yet its booking-widget area rendered as a large empty navy panel in the mobile screenshot. This requires a production-device test with consent accepted before any conversion campaign sends paid or organic traffic there. The demo page also includes an unnamed-client outcome quote that should be replaced with an approved, attributable case study or removed.

## Technical SEO Findings

The site uses client-side React routes and injects per-page canonical tags after rendering through `react-helmet-async`. Google can render JavaScript but confirms that server-side or pre-rendering improves speed and access for crawlers, while canonical information should match between original HTML and rendered content. The entry HTML contains a homepage title and description but no canonical URL, and the application currently has no JSON-LD structured data. The sitemap includes ten public URLs; the rest of the site’s internal, calendar, confirmation, and onboarding pages are intentionally blocked by robots rules.

The rendered homepage exposes its key navigation and all primary conversion links as normal interactive elements. No browser-console errors appeared during the review. The hero has a clear H1 and first CTA, but its label “Book a Call to Learn More” is less specific than the “Book a Free Demo Call” used further down the page. The homepage uses six calls to action with several different phrases, creating an unnecessary choice of words around one intended conversion action.

## Search-Landscape Findings

Public search results show that operators search across several overlapping categories: family entertainment center software, FEC CRM, venue-management software, party-booking software, marketing automation, and guest-engagement tools. FEC Playbook™ should own the narrower category of FEC revenue operations: the systems between a guest’s first inquiry, party/event conversion, visit, review, and return. IAAPA’s FEC material frames operational efficiency, consistent guest experience, reputation, innovation, and data-informed decisions as relevant operator priorities.

## Category-Positioning Findings

The competing category’s public positioning emphasizes broad venue-and-club retention, AI-led segmentation, loyalty, return visits, and scale across many venue types. FEC Playbook™ should avoid answering with generic AI or “all-in-one” language. Its defensible territory is a purpose-built operating system for the full FEC revenue lifecycle: converting party and group inquiries, operationalizing guest communication, creating repeat visits, protecting reviews, improving team follow-through, and connecting with existing FEC point-of-sale and booking systems. This positioning is stronger when demonstrated through named FEC operating moments, implementation proof, and credible operator experience rather than general claims of feature breadth.
