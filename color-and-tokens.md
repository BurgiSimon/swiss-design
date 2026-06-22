# Color & Design Tokens

This is where the "system before screen" principle becomes concrete. Define these tokens first; every screen is just an instance of them. Read this during build-sequence step 2. The values here are stack-agnostic — see `implementation.md` for how to express them in CSS variables, Tailwind, JS theme objects, etc.

## Color: restrained and functional

The Swiss palette is famously austere because **color is information, not decoration**. The discipline is what gives the one accent its power.

The canonical palette:
- **Ink** — near-black for text and primary marks. Use `#111`–`#1a1a1a` rather than pure `#000`; pure black on white screens vibrates and feels heavy. Near-black reads as crisp without glare.
- **Paper** — `#fff` or a barely-warm off-white (`#fafafa`/`#f7f7f5`) for large fields.
- **Gray ×2** — one mid gray for secondary text/meta (`#6b6b6b`, must still pass contrast on paper), one light gray for hairline rules and dividers (`#d4d4d4`/`#e5e5e5`).
- **Accent ×1** — exactly one. Classically a strong **red** (`#e2231a`-ish — think Swiss poster / International red). Used *only* for focal points, links, the primary action, or a single decisive graphic block. Other defensible accents: a strong blue, orange, or yellow — but commit to one.

Rules of use:
- **One accent, used sparingly.** If the accent is everywhere, it stops signaling anything. A single red element on a black-and-white page is the entire Swiss color move.
- **Color signals hierarchy or action**, never "brightens things up." Links, the primary CTA, an active state, a key data point — yes. Decorative section backgrounds in five tints — no.
- **Need more depth? Use tints/shades of the same hue**, not new hues. A scale of one accent + grays is plenty.
- **Contrast is mandatory.** Every text/background pair must meet WCAG AA (4.5:1 for body, 3:1 for large text). This is both a Swiss value (legibility is sacred) and a legal/usability requirement. Check the mid-gray-on-paper and accent-on-paper pairs specifically — they're where it usually fails.

For product UI you'll also need **semantic status colors** (success/warning/error/info). Keep them muted and functional, treat them as a separate semantic set from the brand accent, and don't let them turn the UI into a fruit salad.

## The full token set

Define all of these up front. Values below are sensible defaults; swap per the decision-framework row.

### Spacing (8pt system on a 4px base)
A single scale used for *all* margin/padding/gap. Restricting yourself to these rungs is most of what makes spacing look systematic.

```
4, 8, 12, 16, 24, 32, 48, 64, 96, 128   (px)
```
Use 8 as the workhorse step, 4 only for tight small-scale spacing, and the big steps (48/64/96/128) for the structural whitespace between sections. Generous section spacing is not optional in Swiss design — it's how the grid breathes.

### Type scale
Base 16px × ratio (see `typography.md`). Store as named steps: `caption, base, h4, h3, h2, h1, display`.

### Line-heights
```
tight: 1.1     (display / big headings)
snug:  1.25    (headings)
body:  1.5     (running text, up to 1.6)
```

### Palette
```
ink:     #111111
paper:   #ffffff   (or #fafafa)
gray-1:  #6b6b6b   (secondary text — verify AA)
gray-2:  #d4d4d4   (rules / dividers)
accent:  #e2231a   (the one accent)
```

### Grid
```
columns: 12 (8 tablet / 4 mobile)
gutter:  24px (1.5rem) desktop, 16px mobile
margin:  page padding, e.g. 32–64px desktop
measure-max: ~72ch for the canvas; 60ch for reading columns
```

## Per-use-case default presets

Pick the preset matching the decision-framework row, then tune.

**Landing / editorial / portfolio (expressive):**
- Type ratio **1.333–1.5**; large `display` step; fluid `clamp()` on hero.
- Spacing: lean on the big steps (64/96/128) for dramatic section whitespace.
- Color: black/white + one bold accent; accent used decisively (one block or key word).
- Two weights with strong contrast (e.g., 400 + 700).

**Product / app / dashboard (functional):**
- Type ratio **1.2–1.25**; modest `display`; mostly `base`/`h4`/`h3`.
- Spacing: 8/16/24 dominate; components snap tightly to the 8pt rhythm; tabular figures on.
- Color: ink/paper/grays + accent reserved for primary action; add a muted semantic status set.
- Weights 400 + 500/600; subtle hierarchy.

**Docs / blog (reading-first):**
- Type ratio **1.2**; body 16–18px; measure 60ch; line-height 1.6.
- Spacing: comfortable vertical rhythm; restrained heading sizes.
- Color: near-black on warm-white; accent only on links.

## Quick self-check

- Tokens defined before any screen styling? ✓
- Palette = ink + paper + two grays + exactly one accent? ✓
- All spacing on the 8/4 scale, with generous section whitespace? ✓
- Every text/background pair passes WCAG AA (esp. gray and accent on paper)? ✓
- Type scale ratio and weights matched to the use case? ✓