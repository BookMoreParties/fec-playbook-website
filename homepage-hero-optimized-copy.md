# FEC Playbook™ Optimized Homepage Hero

## Hero Objective

The opening section should establish the category, the business outcome, and the next action within the first screen. It should make an FEC operator feel that the site understands the work between a guest inquiry and a repeat visit, then offer a clear reason to schedule a call.

> **Category:** FEC Revenue Operations
>
> **Core promise:** One FEC-specific operating system for the revenue work that happens before, during, and after every visit.

## Final Copy

| Element | Approved copy |
|---|---|
| Eyebrow | **BUILT BY FEC OPERATORS** |
| H1 | **RUN EVERY REVENUE MOMENT IN YOUR FEC FROM ONE PLAYBOOK.** |
| Supporting paragraph | **FEC Playbook™ helps you turn more party and group inquiries into booked events, automate guest follow-up, protect your reputation, and bring families back more often. It works alongside the POS and booking software your facility already uses.** |
| Primary CTA | **BOOK A 30-MINUTE FEC REVENUE REVIEW** |
| Primary CTA helper text | **Leave with the revenue leaks we would address first and the playbooks that fit your facility.** |
| Secondary CTA | **SEE THE REVENUE PLAYBOOKS** |
| Proof line | **Built for Family Entertainment Centers. No rip-and-replace required.** |

The proposed primary CTA gives the buyer a defined outcome from the appointment. It is stronger than “Book a Call to Learn More” because it explains both the time commitment and the value of the conversation.

## Supporting Proof Strip

Place this compact strip below the CTA group. It should use simple operating terms, not unverified numerical claims.

| Proof point | Supporting label |
|---|---|
| **PARTY & EVENT INQUIRIES** | Follow up while intent is high |
| **GUEST FOLLOW-UP** | Keep the next visit moving |
| **TEAM ACCOUNTABILITY** | Make every revenue task visible |

Use the approved integration logos in a narrow row beneath the proof strip only if each integration is active and accurate. Do not add customer counts, star ratings, or customer logos unless they are verified and approved for public use.

## Recommended Desktop Layout

The hero should use an asymmetric **7/5 split** rather than a centered SaaS layout. The left column carries the message and action. The right column makes the product model visual.

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ [FEC PLAYBOOK™ LOGO]     PLATFORM  PLAYBOOKS  HOW IT WORKS      [CTA]   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ── BUILT BY FEC OPERATORS                 ┌─────────────────────────┐  │
│                                             │  FEC REVENUE CYCLE      │  │
│  RUN EVERY REVENUE MOMENT                   │                         │  │
│  IN YOUR FEC FROM ONE                       │  01  INQUIRY            │  │
│  PLAYBOOK.                                  │      party / group lead │  │
│                                             │                         │  │
│  [Supporting paragraph]                     │  02  BOOKING            │  │
│                                             │      fast next step      │  │
│  [BOOK A 30-MINUTE FEC                      │                         │  │
│   REVENUE REVIEW]                           │  03  VISIT              │  │
│                                             │      informed guests     │  │
│  [SEE THE REVENUE PLAYBOOKS]                │                         │  │
│                                             │  04  REPEAT VISIT        │  │
│  Leave with the revenue leaks ...           │      follow-up + offers  │  │
│                                             └─────────────────────────┘  │
│  [Party & Event] [Guest Follow-Up] [Team Accountability]                │
└──────────────────────────────────────────────────────────────────────────┘
```

### Left column

The H1 should occupy no more than four lines at a 1440px desktop viewport. Use Acumin Variable Concept Wide Black when licensed and available, with Montserrat as the fallback. Keep the H1 left-aligned with close line spacing. Make only **“ONE PLAYBOOK”** FEC blue; keep the rest in white. Do not use a blue gradient on the text.

The primary CTA should be a solid FEC blue field with black or white high-contrast text, a clear phone/calendar icon, and a generous 48px minimum touch height. Place the helper text directly below it. Style the secondary CTA as a white-outline button that scrolls to the Revenue Playbooks section rather than opens another route.

### Right column

Use an actual product screenshot inside an angled, browser-style frame or a simple revenue-cycle visual based on the four stages above. The visual should show a real automation, pipeline, dashboard, or inbox, not a generic AI illustration. Add two or three small callouts only where visible in the screenshot, such as “New party lead,” “Owner assigned,” or “Follow-up queued.”

The right-column frame should have a 6–10 degree diagonal top edge or a sharply cropped blue accent bar. Reuse the FEC Playbook™ play-button mark as a low-opacity graphic element behind the card. This creates the sports/action energy described in the growth strategy without relying on ambient glow effects.

## Mobile Layout

Mobile users should receive the message and booking path before the visual proof. Keep the hero compact enough that the first CTA remains visible without a long scroll.

| Order | Mobile element | Treatment |
|---|---|---|
| 1 | Eyebrow | Small all-caps label with blue rule |
| 2 | H1 | 38–44px, four lines or fewer, left-aligned |
| 3 | Supporting paragraph | 16–18px with strong contrast; keep it under 70 words |
| 4 | Primary CTA | Full width, 52px minimum height |
| 5 | Helper and proof line | Single compact block below CTA |
| 6 | Secondary CTA | Text link with right arrow, not a second full button |
| 7 | Revenue-cycle frame | Full width, shown after the CTA group |
| 8 | Proof strip | Three stacked rows with a blue rule, not three cards |

The persistent mobile CTA bar should use the same label as the hero: **BOOK A 30-MINUTE FEC REVENUE REVIEW**. One conversion action should have one name across the homepage, navigation, mobile bar, and demo page.

## Visual Direction

The hero should feel like an FEC operations campaign, not a generic SaaS dashboard.

| Preserve | Add | Remove or reduce |
|---|---|---|
| True black ground, white display type, FEC blue CTA, product proof | Diagonal geometry, bold blue rules, action-oriented stage numbering, recurring play-button mark | Ambient cyan glow, translucent glass panels, background circuit patterns as a dominant motif, repeated rounded cards |

Use an almost-black #0A0A0A background with a subtle real product or real-FEC texture. The primary visual must remain readable at all screen sizes. Keep decorative effects behind content and use blue only where it signals action, proof, or the selected step.

## Implementation Notes

1. Replace every homepage “Book a Call” or “Book a Demo” variation with the approved primary CTA label, all pointing to `/book-a-demo`.
2. Add an analytics event named `cta_book_revenue_review_clicked` with the CTA placement as a parameter, such as `hero`, `mid_page`, `footer`, or `mobile_bar`.
3. Add a `revenue_cycle_viewed` event when at least 50% of the right-column proof frame appears in view.
4. Replace the current social-proof avatars, star rating, and customer-count statement unless the underlying information is verified and approved. Do not invent replacement testimonials or ratings.
5. Use a plain-language definition of FEC Revenue Operations immediately after the hero: **“FEC Revenue Operations is the system your team uses to manage the work between a guest’s first inquiry and their next visit.”**

## Why This Hero Converts Better

It names the revenue job in language FEC owners recognize, reduces migration risk, and gives the scheduled call a concrete outcome. It also gives organic search and AI systems a concise, visible category definition. The layout pairs the promise with product or workflow proof, so the visitor does not need to infer how the platform works.
