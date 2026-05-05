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

Omni2 interfaces should feel:
- product-led
- clean
- high-contrast
- modern
- confident
- minimal but not empty

## Typography

Use Inter for UI and body text.
Use Chillax only for display moments, hero headlines, or brand-forward sections.

## Colors

Primary brand color:
- primary.500: #0edbbd

Dark brand surface:
- primary.900: #041412

Avoid raw hex values in production code. Use Tailwind tokens or CSS variables.

## Tailwind usage

Prefer:
- bg-background-inverse
- text-text-inverse
- text-text-secondary
- border-border-default
- bg-primary-500

Avoid:
- random arbitrary colors
- one-off spacing
- inconsistent button styling

## Output expectations

When generating UI:
- use semantic Tailwind classes
- keep layouts responsive
- use consistent spacing
- avoid decorative complexity unless it supports clarity
- explain any new token additions
