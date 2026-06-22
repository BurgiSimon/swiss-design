# Typography

In Swiss design, typography *is* the design — there is rarely much else. Get the typeface, the scale, the measure, and the hierarchy right and the work is most of the way there. Read this during build-sequence steps 2 and 4.

## Choosing the typeface

Use **one** neo-grotesque sans-serif. The neo-grotesques are prized for neutrality — they don't editorialize, so the content carries the message. Pick from:

**The hallmark faces (authentic, mostly licensed):**
- **Helvetica / Neue Haas Grotesk** — the icon. Neue Haas Grotesk (Christian Schwartz, 2010) is the faithful restoration of Miedinger's 1957 original and the best choice when you want the real thing. Plain Helvetica's narrow apertures hurt legibility below ~14px on screen.
- **Helvetica Now** (Monotype, 2019) — modern Helvetica with optical sizes (Micro / Text / Display) that fix the small-size problem. Use Micro for captions/labels, Display for big headings.
- **Univers** (Adrian Frutiger, 1957) — the first family conceived as a coordinated system, with the famous two-digit numbering grid (55 = roman regular at the center; first digit = weight, second = width+posture). Excellent when you want systematic weight/width relationships.
- **Akzidenz-Grotesk** (1896) — the original objective sans the Swiss masters actually preferred; slightly more characterful than Helvetica.

**Web-native choices (free / screen-optimized) — usually the right call for the web:**
- **Inter** (Rasmus Andersson) — the default free choice. Neo-grotesque in the Helvetica/SF lineage with a tall x-height and open apertures, so it stays legible at ≤11px; ships with 9 weights, a variable font, and OpenType features (including tabular figures and a single-storey `a` alternate that reads very "Swiss"). If you want the Swiss look for free with great screen rendering, this is it.
- **System stack** (zero network cost, fast Core Web Vitals): `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. On Apple devices this renders as San Francisco — itself a Helvetica-lineage face built for screen legibility.
- **Other strong options:** Neue Haas Unica, Suisse Int'l, Akkurat, Söhne, Aktiv Grotesk (paid); Nimbus Sans (metric-compatible Helvetica clone), TeX Gyre Heros, Archivo, IBM Plex Sans, Work Sans, Roboto (free).

**Rule of thumb:** authentic spirit + budget → Neue Haas Grotesk or Helvetica Now. Free + best screen rendering → Inter. Absolute performance / no webfont → system stack. Never mix two sans families to "create hierarchy"; create it with size, weight, and space instead.

## The type scale

Build a **modular scale**: a base size multiplied by a fixed ratio, step by step. This is the typographic expression of the grid — proportional, systematic, predictable. Base is **16px** (the browser default; respects user settings).

Pick the ratio from the decision-framework row:
- **1.2 (Minor Third)** — content-dense UI, docs, blogs. Subtle, calm hierarchy.
- **1.25 (Major Third)** — general/mixed UI. The safe default.
- **1.333 (Perfect Fourth)** — landing/marketing. Confident contrast.
- **1.5 / 1.618 (Golden)** — editorial/poster drama. Big jumps between levels.

Example scale at base 16px, ratio 1.25:

| Token | Size | Typical use |
|---|---|---|
| caption | 12.8px | captions, labels, meta |
| base | 16px | body |
| h4 | 20px | small headings |
| h3 | 25px | subsection headings |
| h2 | 31.25px | section headings |
| h1 | 39px | page headings |
| display | 48.8px+ | hero |

You don't need every step — pick the levels the content actually has. Fewer, more decisive jumps read as more confident than many tiny ones.

**Fluid type** for big headings: use `clamp(min, preferred-with-vw, max)` so display sizes scale with the viewport, e.g. `font-size: clamp(2rem, 1.43rem + 2.857vw, 4rem)` (32px → 64px). Keep `line-height` unitless. Caveat: don't build the *whole* scale on `vw` — pure-vw type breaks the modular relationships and complicates browser zoom. Bound it and keep the core scale rem-based.

## Hierarchy: size, weight, space — not color, not decoration

Swiss hierarchy is built from three levers only:
- **Size** — distance on the modular scale.
- **Weight** — use **two weights maximum** (e.g., Regular 400 + Medium 500 or Bold 700). More weights dilute the system.
- **Space** — proximity groups related items; generous space separates unrelated ones. Whitespace does as much hierarchy work as size.

Do *not* reach for color, italics, underlines, boxes, or a second font to signal hierarchy. If two things look too similar, increase the size jump, change the weight, or add space — in that order.

## Setting the body text

- **Body size:** 16–18px.
- **Line-height (leading):** 1.5–1.6 for body; tight (1.1–1.25) for large headings. Tighter as type gets bigger.
- **Measure (line length):** ~45–75 characters, **~60 ideal** (`max-width: 60ch`). This is Müller-Brockmann's "~7 words per line" rule restated for the web. Too long and the eye loses the line return; too short and rhythm breaks.
- **Alignment:** flush-left, ragged-right. Avoid justified text (web justification creates ugly uneven word spacing) and avoid centering anything longer than a short heading or label.
- **Letter-spacing:** leave body at default; apply slight negative tracking to large display headings (`letter-spacing: -0.01em` to `-0.02em`) — neo-grotesques tighten up nicely at large sizes. Optionally add small positive tracking to all-caps labels.
- **Numbers:** for tables and data UI, enable tabular figures (`font-variant-numeric: tabular-nums`) so columns align — a very Swiss, very functional touch.

## Quick self-check

- One sans family? ✓
- Hierarchy from size/weight/space only (≤2 weights)? ✓
- Body 16–18px, line-height ~1.5, measure ~60ch, flush-left? ✓
- Modular scale with a ratio matched to the use case? ✓
- Display headings legible and, if fluid, bounded with `clamp()`? ✓