# Swiss Design — skill showcase site

A small React site that **documents the `swiss-design` Claude skill while being
built by applying it**. The page you read about (design as a *programme* —
tokens → grid → type → audit) is the page you're looking at: the showcase
section renders the skill's actual tokens as live specimens.

## Stack

- **Vite + React** — fast dev/build.
- **Tailwind v4** — the skill's token set is encoded once in `src/index.css`
  `@theme` (palette, type scale at ratio 1.333, 8pt spacing, grid vars) and used
  everywhere as utilities. This is the "system before screen" rule in code.
- **Lenis + GSAP ScrollTrigger** — one animation loop drives smooth scrolling and
  the scrubbed reveals / parallax (`src/lib/smooth-scroll.jsx`). All motion is
  gated behind `prefers-reduced-motion`.
- **Inter Variable** (`@fontsource-variable/inter`) — one neo-grotesque, two
  weights.

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview the build
```

## How it maps to the skill

| Skill reference | Where it lives |
|---|---|
| `color-and-tokens.md` / `implementation.md` | `src/index.css` `@theme` tokens |
| `grid-systems.md` | `src/components/primitives/Grid.jsx`, `Col.jsx` (12→8→4 cols) |
| `typography.md` | type scale + fluid `clamp()` display, ~60ch measure |
| `redesign-playbook.md` | the QA checklist this site was audited against |

The site is deliberately restrained: one family, two weights, all spacing on the
8/4 scale, exactly one accent (`#e2231a`), deliberate empty columns as
whitespace, AA contrast on every pair, real heading order and focus states.
