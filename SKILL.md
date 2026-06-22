---
name: swiss-design
description: Design and build websites, web apps, components, or any web UI in the Swiss Style / International Typographic Style — the grid-driven, neo-grotesque, restrained-palette modernist tradition (Müller-Brockmann, Gerstner, Hofmann, Vignelli). Use this skill whenever the user asks for "Swiss design", "Swiss style", "International Typographic Style", "grid-based" / "grid-driven" design, "Müller-Brockmann", "Bauhaus-influenced" web design, a "minimalist Swiss-looking" site, or asks to redesign / convert / "make more Swiss" / "clean up" an existing interface into this aesthetic. Also use it when the request describes the hallmarks without naming them — strict grids, Helvetica/Akzidenz/Univers/Inter type, black-white-with-one-red-accent palettes, asymmetric flush-left layouts, dramatic whitespace, objective/typographic minimalism. Technology-agnostic — it applies to plain HTML/CSS, Tailwind, React, Vue, Svelte, design tokens, or any stack.
---

# Swiss Design for the Web

Swiss design (the International Typographic Style) is not a "look" you decorate with — it is a **system**: a small set of rules that generate every layout, type, color, and spacing decision. Karl Gerstner called this designing a *programme* (a rule set) rather than chasing inspiration — which is why the style maps so cleanly onto tokens, grids, and component systems. When the system is set up correctly, the individual screens almost design themselves and stay coherent automatically.

The job of this skill is to help build that system and then build *on* it — for a brand-new site/app, or by converting an existing design into it — in any technology, for any content.

## Two workflows

**A. Build new** — designing a Swiss-style site, app, or component from scratch. Go to [The build sequence](#the-build-sequence).

**B. Redesign existing** — converting an existing interface (any aesthetic) into Swiss style. Go to `references/redesign-playbook.md` first — it gives an audit-then-rebuild method so you change the system, not just repaint the surface.

Both workflows share the same foundation: establish the system (tokens) first, then lay out on a grid, then set type, then audit. Never start by styling individual elements — that produces a pile of one-off decisions instead of a system, which is the opposite of Swiss method.

## Core principles (the non-negotiables)

These hold regardless of stack, content, or use case. Everything in the reference files serves them.

1. **The system comes before the screen.** Define tokens (grid, type scale, spacing scale, palette) *before* laying anything out. The grid and the scale are the design; the pages are just instances of it. → `references/color-and-tokens.md`

2. **One grid governs everything.** Commit to a column grid (classically 12) and a baseline/spacing rhythm, and don't abandon it when it's inconvenient — fighting the grid is what makes "minimal" designs look accidental. Whitespace is an *active structural element* produced by the grid (empty columns, skipped fields), not leftover space. → `references/grid-systems.md`

3. **One neutral neo-grotesque typeface, doing hierarchy through size/weight/space.** Helvetica/Neue Haas Grotesk, Univers, Akzidenz-Grotesk, or web-native Inter / system stack. Hierarchy comes from scale contrast, weight, and spacing — *not* from color, decoration, or many fonts. → `references/typography.md`

4. **Restrained, functional palette.** Near-black ink, paper white, one or two grays, and exactly one accent (classically red). Color signals hierarchy and action; it never decorates. → `references/color-and-tokens.md`

5. **Flush-left, asymmetric, high-contrast, objective.** Text is flush-left/ragged-right (not justified, not centered except short labels). Layouts are asymmetric but balanced. Contrast is high (also an accessibility requirement). Imagery is objective/documentary, not decorative. → `references/typography.md`, `references/grid-systems.md`

6. **Reduction, not austerity.** Swiss design keeps *only what is necessary* — but removing something users need is a failure, not a virtue. Minimal ≠ empty; the energy comes from scale contrast, a decisive accent, and strong imagery on a disciplined grid. → `references/redesign-playbook.md` (anti-patterns)

## The decision framework (calibrate intensity to the use case)

Swiss method is universal, but how *expressive* vs *functional* you make it depends on what you're building. Pick the row that matches, then apply the matching token defaults (full values in `references/color-and-tokens.md`).

| Use case | Apply it as | Type-scale ratio | Notes |
|---|---|---|---|
| Portfolio, landing, editorial, museum, brand, poster-like | Full expressive Swiss | 1.333–1.5 (up to 1.618 for drama) | Large type, dramatic whitespace, one bold accent, objective photography, strong asymmetry |
| Product / app / dashboard UI | The *system*, gently | 1.2–1.25 | More functional density, components snap to 8pt rhythm, color stays semantic (status/action), subtler scale contrast |
| Content-heavy reading (docs, blog) | Reading-first Swiss | 1.2 | ~60ch measure, 16–18px body, comfortable line-height, restrained hierarchy |

**Thresholds that should change the approach.** If the brand needs warmth, playfulness, heritage, or emotional storytelling, pure Swiss neutrality will read as cold — blend in humanist type / a softer palette rather than forcing orthodoxy, and say so. If your palette can't meet WCAG AA contrast, fix the palette, never the legibility. If everything starts looking generic (everyone can reach for a grid + Helvetica), differentiate through distinctive imagery, editorial voice, and a considered accent — not through more fonts or weights.

## The build sequence

Follow this order. It mirrors how the Swiss masters worked: define the measuring system, then the grid, then place content — bottom-up from the type, not top-down from a picture in your head.

1. **Frame the problem and pick the row.** What is this, who reads it, which decision-framework row applies? This sets your ratios and density. Choose a stack only after this — the system is identical across stacks.

2. **Establish tokens.** Spacing scale (4/8px base), type scale (base × chosen ratio), palette (ink/paper/grays/one accent), one typeface, line-heights. Read `references/color-and-tokens.md` and `references/typography.md`. Encode tokens in whatever the stack uses (CSS custom properties, Tailwind `@theme`, JS theme object) — see `references/implementation.md`.

3. **Lay out on the grid.** Build the column grid and place content asymmetrically, flush-left, with images spanning whole columns and deliberate empty columns as whitespace. Read `references/grid-systems.md`.

4. **Set the type to the scale and measure.** Apply the scale, cap the measure (~60ch), two weights max, tight leading on display / 1.5 on body. Read `references/typography.md`.

5. **Audit against the anti-patterns and accessibility.** Run the checklist in `references/redesign-playbook.md` (it applies to new builds too): contrast (WCAG AA — the single highest-leverage check, since most of the web fails it), nothing-essential-removed, grid-governs-every-breakpoint, has-life-not-just-empty.

For the conceptual grounding — *why* each rule exists, the history, the key figures and their methods — read `references/foundations.md`. Reach for it when a decision is ambiguous and you need the principle behind the rule, or when the user wants to understand the tradition.

## Reference map

Read the reference whose job matches the step you're on. Don't preload them all — pull each in when its step arrives.

- `references/foundations.md` — History, key figures, and the philosophy behind every rule (the "why"). Read for grounding or when a tradeoff is ambiguous.
- `references/typography.md` — Typefaces (hallmark + web-native), type scales, measure, hierarchy, leading, weight contrast.
- `references/grid-systems.md` — Grid theory (Müller-Brockmann's baseline-driven method) and its translation to responsive CSS Grid.
- `references/color-and-tokens.md` — Restrained palettes and the full design-token system, with per-use-case default values.
- `references/implementation.md` — Turning the system into code in any stack: tech-agnostic CSS core, plus notes for Tailwind, React/CSS-in-JS, Vue, and plain HTML/CSS.
- `references/redesign-playbook.md` — Auditing and converting an existing design into Swiss style; the anti-pattern catalogue and the final QA checklist (used by both workflows).