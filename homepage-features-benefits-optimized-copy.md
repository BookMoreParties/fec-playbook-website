# FEC Playbook™ Homepage: Post-Hero Features and Benefits Section

## Section Role

This section follows the homepage hero and makes the promise operational. It should show the buyer where revenue work currently breaks down, then show the connected FEC Playbook™ response. Do not introduce a long feature catalogue here. The buyer needs to understand the revenue system before they evaluate individual tools.

> **Section concept:** The FEC Revenue Cycle
>
> **Purpose:** Show how FEC Playbook™ connects the work from the first inquiry through the family’s next visit.

## Final Copy

| Element | Approved copy |
|---|---|
| Eyebrow | **THE FEC REVENUE CYCLE** |
| H2 | **ONE PLAYBOOK FOR EVERY REVENUE MOMENT.** |
| Intro | **An FEC does not lose revenue because of one missed email. Revenue leaks when the handoff from inquiry to booking, booking to visit, and visit to follow-up has no owner. FEC Playbook™ gives your team a system for each moment.** |
| Section proof line | **Your POS records the transaction. FEC Playbook™ runs the revenue work around it.** |
| CTA | **SEE THE REVENUE PLAYBOOKS** |

## Recommended Layout

Use a **left-led narrative with a right-side visual operating cycle**. The desktop layout should place the written explanation and the first two benefits on the left; the visual sequence and last three benefits should sit on the right. Avoid a centered stack of six equal cards.

```text
┌──────────────────────────────────────────────────────────────────────────┐
│  ── THE FEC REVENUE CYCLE                                                 │
│                                                                          │
│  ONE PLAYBOOK FOR EVERY                   ┌───────────────────────────┐ │
│  REVENUE MOMENT.                           │  01  INQUIRY              │ │
│                                            │  Lead captured.            │ │
│  [Intro paragraph]                         │  Owner assigned.           │ │
│                                            │                            │ │
│  ┌────────────────────────────┐            │  02  BOOKING               │ │
│  │ 01  INQUIRY TO BOOKING      │            │  Next step sent.           │ │
│  │ [copy + outcome]            │            │                            │ │
│  └────────────────────────────┘            │  03  VISIT                 │ │
│                                            │  Guests arrive prepared.   │ │
│  ┌────────────────────────────┐            │                            │ │
│  │ 02  GUEST EXPERIENCE        │            │  04  REPUTATION            │ │
│  │ [copy + outcome]            │            │  Feedback captured.        │ │
│  └────────────────────────────┘            │                            │ │
│                                            │  05  REPEAT VISIT           │ │
│  [ SEE THE REVENUE PLAYBOOKS ]              │  Relevant follow-up runs.  │ │
│                                            └───────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────┘
```

On desktop, anchor the right column with a real platform screenshot or a simple 5-stage route map. Each stage should have a numbered blue marker and one short operational sentence. Use a diagonal blue slash or a cropped product frame to create forward momentum. The card border can be white at low opacity; do not use ambient neon or a stack of glowing panels.

On mobile, stack the H2 and intro first, show the cycle as a vertical numbered route, then present the five benefit blocks as full-width rows. Keep the CTA directly after the cycle. Do not ask the user to scroll through feature-card grids before they see what the platform does.

## Benefit Blocks

Each block uses the same concise pattern: **revenue moment, operating action, business consequence.** Avoid nouns such as “automation” or “CRM” in the headline. Put those capabilities in the explanation only when they clarify the action.

| Stage | Headline | Body copy | Outcome tag |
|---|---|---|---|
| 01 | **TURN INQUIRIES INTO BOOKED PARTIES.** | **Capture every party, group, and corporate inquiry in one place. FEC Playbook™ assigns the next step, follows up on time, and shows your team which opportunities still need attention.** | **FASTER FOLLOW-UP** |
| 02 | **MAKE EVERY BOOKING FEEL PREPARED.** | **Send the right confirmations, reminders, waivers, and guest details at the right time. Your staff starts with context, and families arrive ready for a better visit.** | **SMOOTHER VISITS** |
| 03 | **PROTECT THE MOMENT AFTER THE VISIT.** | **Request feedback while the experience is fresh. Route concerns to your team, recognize great guest moments, and give satisfied families a simple way to leave a review.** | **STRONGER REPUTATION** |
| 04 | **GIVE FAMILIES A REASON TO RETURN.** | **Use the visit, purchase, birthday, membership, or interest data you already have to deliver relevant follow-up instead of one-size-fits-all promotions.** | **MORE REPEAT VISITS** |
| 05 | **MAKE REVENUE WORK VISIBLE TO THE TEAM.** | **Managers see what needs action, who owns it, and which opportunities have gone quiet. Your team spends less time checking tools and more time moving guests forward.** | **CLEAR ACCOUNTABILITY** |

## Optional Mini-Proof Labels

Place one small proof label under each benefit if the corresponding capability is available and verified. These labels make the work tangible without turning the section into a feature list.

| Benefit | Optional proof label |
|---|---|
| Inquiry to booking | **Pipeline + assigned follow-up** |
| Prepared visit | **Confirmations, reminders, and guest communication** |
| Post-visit reputation | **Feedback routing and review requests** |
| Repeat visit | **Segmented email and SMS campaigns** |
| Team accountability | **Alerts, reporting, and manager digests** |

## Visual Treatment

The section should borrow the energy of a playbook, scorecard, or game plan. Treat the blue stage numbers as graphic objects. Use a white field only for the central cycle card or proof screenshot; keep the surrounding surface true black. Make the outcome tags small, rectangular, and blue with black text.

| Element | Design direction |
|---|---|
| Section edge | Use a 6–10 degree diagonal divider from the hero into the section. Add negative margin and matching padding so there is no visual gap. |
| Stage numbers | Large 72–120px outlined numerals behind the copy or at the start of the cycle; use blue at 12–18% opacity. |
| Cycle path | A sharp blue route line that steps from 01 through 05. Do not use a rounded dotted timeline. |
| Product proof | Use a real product screenshot that shows an inbox, pipeline, campaign, or report. Add annotations only if they describe visible UI. |
| Play-button mark | Use once as a low-opacity corner shape or inside the CTA arrow. Do not repeat it in every block. |

## Interaction Notes

The cycle should not rely on hover to reveal core information. On desktop, use a modest stage highlight on hover or keyboard focus: brighten the active blue number and swap the product proof caption. On mobile, stages can expand with a tap, but show the core title and one-sentence outcome by default.

The CTA should scroll to the detailed Revenue Playbooks section on the same page or route to `/playbook`. Keep the CTA secondary to the hero’s booking request. It gives information-seeking buyers a productive next step without forcing an appointment before they understand the operating model.

## Implementation Notes

1. Use semantic section, heading, list, and button/link elements so the stage structure is easy to parse for people, crawlers, and assistive technology.
2. Add a descriptive H2 and treat each stage headline as an H3. This supports a clear document outline and makes each operational concept extractable for search.
3. Use a single `revenue_cycle_stage_viewed` analytics event with the visible stage number, rather than a broad click-only event.
4. Track `revenue_playbooks_clicked` when the secondary CTA is used. Preserve `cta_book_revenue_review_clicked` for the primary demo action.
5. Only state integration, automation, review, communication, and data capabilities that the current platform supports. Do not attach numerical savings, conversion rates, customer counts, or review ratings unless verified and approved.

## Why This Section Moves the Buyer Forward

The section turns a broad “all-in-one” claim into five familiar FEC operational moments. It lets a buyer identify a specific revenue leak before reading product details. It also positions FEC Playbook™ as the system that connects acquisition, conversion, guest experience, reputation, repeat visits, and accountability in one operating cycle.
