# Omni2 Design System

A scalable design system powering Omni2 Design products, client platforms, and AI-assisted development workflows — the same language behind [omni2design.com](https://omni2design.com).

Omni2 is a **design + technology studio for the built world**: websites, web applications, and digital products for architecture, engineering, construction, and real estate.

## Brand at a glance

**Type**
- Display / headers — **Rubik** (tight tracking, tight leading)
- Body / UI — **Hanken Grotesk**
- Technical labels / meta — **IBM Plex Mono** (uppercase, wide tracking)

**Color** — dark-first, teal accent, orange call-to-action

| Role | Dark | Light |
| --- | --- | --- |
| Teal (brand accent) | `#1FD1C4` | `#2FA196` |
| Cyan (glow) | `#57E3D7` | `#33ACA1` |
| Orange (CTA / mark) | `#FF6A2C` | `#F58628` |
| Background | `#080A0C` | `#F4F2EC` |
| Surface | `#101418` | `#FBFAF6` |
| Text (primary) | `#EEF3F2` | `#17191B` |

Orange is reserved for the single most important action; teal leads all other accents.

## Overview

This system connects:
- Figma (design)
- Tailwind (implementation)
- Claude & Cursor (AI-assisted generation)

into a unified design language.

## Structure

### Base Tokens
Core primitives — `tokens/base/`:
- Color (neutral ramp, teal `primary`, `accent` orange, `cyan`, `overlay` alphas)
- Typography (font families, weights, size scale, line-height, letter-spacing)
- Spacing
- Radius

### Semantic Tokens
Purpose-based decisions — `tokens/semantic/`:
- Background, Text, Border, Button states (dark-first)

### Themes
Project-specific adaptations — `tokens/themes/`:
- **Omni2** — default brand (dark-first + warm-paper light mode)
- **ArchRecon** — technical AEC portal theme (blueprint blue)
- **AMC** — high-trust contractor theme (navy + red)

### Tailwind
`tailwind/tailwind.config.js` — production-ready mapping of tokens into frontend code.

### AI Skills
`skills/apply-omni2-design-system/` — guidelines for consistent, on-brand AI-generated UI.

## Philosophy

Do not create a new design system for each project. Instead:
- Build one core system
- Extend with themes
- Add product-specific components only when necessary

## What lives here (and what doesn't)

This repo is the **public design language** — tokens, the Tailwind mapping, and usage guidelines. It contains **no application code, credentials, or client data**; those stay in each product's private repository.

## Outcome

- Faster product development
- Consistent user experience across Omni2 and client work
- Seamless design-to-code workflows
- AI-assisted UI generation grounded in a real system
