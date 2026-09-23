# Apply Omni2 Design System

Use this skill when designing, auditing, or coding interfaces for Omni2 Design, ArchRecon, AMC, or related product MVPs.

## Core rules

Always use Omni2 semantic tokens first. Do not invent new colors, spacing, shadows, or type scales unless the project explicitly requires a theme extension.

## Token priority

1. Semantic tokens
2. Theme tokens
3. Base tokens
4. New tokens only when justified

## Visual style

Omni2 is a design + technology studio for the built world. Interfaces should feel:
- dark-first, premium, and confident
- product-led and high-contrast
- clean, minimal, technical — but not empty
- spatial: subtle depth, soft glows, cinematic easing (`cubic-bezier(0.16, 1, 0.3, 1)`)

## Typography

- **Display / headers:** Rubik — a geometric grotesque whose slight corner fillets echo the Omni2 mark. Use tight tracking (`-0.02em`) and tight leading (~1.06).
- **Body / UI:** Hanken Grotesk.
- **Technical labels / meta / code:** IBM Plex Mono — small, uppercase, wide tracking (`0.18em`) for eyebrows and section markers.

## Colors

Dark-first brand (default omni2 theme):
- **Teal (brand accent) — primary.500: #1FD1C4** — links, highlights, focus, secondary CTAs.
- **Cyan — #57E3D7** — lighter teal for gradients and glows.
- **Orange (call-to-action) — accent.500: #FF6A2C** — the primary CTA color and the Omni2 mark. Used sparingly for the single most important action.
- Near-black surfaces: bg #080A0C, surface #101418, raised #161B20.
- Text on dark: #EEF3F2 (primary), #9AA6AC (secondary), #5C676D (faint).

Warm-paper light mode (theme.light): bg #F4F2EC, surface #FBFAF6, text #17191B; teal shifts to #2FA196, orange to #F58628.

Avoid raw hex values in production code. Use Tailwind tokens or CSS variables.

## Button hierarchy

- **Primary CTA:** orange background, black text, pill radius (`rounded-full`) — e.g. `bg-orange text-black`. One per view.
- **Secondary:** teal-outlined ghost — `border-teal/40 text-teal`.

## Tailwind usage

Prefer:
- `bg-bg` / `bg-surface` (dark-first surfaces)
- `text-text-primary` / `text-text-secondary`
- `text-teal` (brand highlight), `bg-orange` (primary CTA)
- `border-border-default` / `border-border-strong`
- `font-display` (Rubik), `font-mono` (IBM Plex Mono) for labels

Avoid:
- random arbitrary colors
- one-off spacing
- inconsistent button styling
- using orange for anything but the primary action

## Output expectations

When generating UI:
- use semantic Tailwind classes
- keep layouts responsive (mobile-first)
- use consistent spacing from the scale
- reserve orange for the single primary action; lead accents with teal
- avoid decorative complexity unless it supports clarity
- explain any new token additions
