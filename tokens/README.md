# Omni2 Tokens

This folder contains the source token structure for the Omni2 Design System.

## Token layers

1. **Base tokens** — `base/`
Raw design values: color ramps (neutral, `primary`/teal, `accent`/orange, `cyan`, `overlay` alphas), spacing, radius, and typography (Rubik / Hanken Grotesk / IBM Plex Mono).

2. **Semantic tokens** — `semantic/`
Purpose-based usage: background, text, border, and button roles. Dark-first, referencing base tokens with `{color.*}` aliases.

3. **Theme tokens** — `themes/`
Project-specific mappings for **Omni2** (dark-first + warm-paper light mode), **AMC**, and **ArchRecon**.

## Rules

- Use semantic tokens first; use theme tokens for project-specific branding.
- Avoid raw hex values in product code unless creating a new token.
- Reserve **orange (`#FF6A2C`)** for the single primary action; lead all other accents with **teal (`#1FD1C4`)**.
