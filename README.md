# Swiss Design Skill

A AI skill for designing and building web UI in the **Swiss Style /
International Typographic Style** — the grid-driven, neo-grotesque,
restrained-palette modernist tradition of Müller-Brockmann, Gerstner, Hofmann,
and Vignelli.

## What it does

It treats Swiss design as a **system**, not a look: a small set of rules
(grid, type scale, spacing scale, restrained palette, one neutral typeface)
that generate every layout and styling decision. The skill helps you establish
that system first and then build on it — for a brand-new site/app/component, or
by converting an existing interface into the style. It's technology-agnostic:
plain HTML/CSS, Tailwind, React, Vue, Svelte, or any design-token setup.

## Install

Run this in a terminal — it detects which supported agents you have installed
(**Claude Code**, **Codex**, **OpenCode**), lets you pick which ones to target,
and installs the skill into each one's skills directory:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/BurgiSimon/swiss-design-mirror/main/install.sh)
```

It installs into the standard per-tool locations:

| Tool | Skill directory |
|---|---|
| Claude Code | `~/.claude/skills/swiss-design/` |
| Codex | `~/.codex/skills/swiss-design/` |
| OpenCode | `~/.config/opencode/skills/swiss-design/` |

An existing install is backed up (`swiss-design.bak-<timestamp>`) rather than
overwritten. After installing, start a new session so the agent discovers it.

## How to use it

Just ask your AI agent for the kind of work it covers, and it loads
automatically. Triggers include:

- "Make this **Swiss style** / International Typographic Style"
- "Build a **grid-based / grid-driven** layout"
- "Redesign / clean up / make this **more Swiss**"
- "A minimalist, Müller-Brockmann / Bauhaus-influenced site"
- Or descriptions of the hallmarks: strict grids, Helvetica/Inter type,
  black-white-with-one-red-accent palettes, asymmetric flush-left layouts,
  dramatic whitespace.

Two workflows are supported:

- **Build new** — design from scratch following the build sequence.
- **Redesign existing** — audit, then rebuild the system rather than repaint
  the surface.

## What's inside

- `SKILL.md` — entry point: core principles, the decision framework, and the
  build sequence.
- `references/foundations.md` — history, key figures, and the philosophy behind the rules.
- `references/typography.md` — typefaces, type scales, measure, hierarchy, leading.
- `references/grid-systems.md` — grid theory and its translation to responsive CSS Grid.
- `references/color-and-tokens.md` — restrained palettes and the design-token system.
- `references/implementation.md` — turning the system into code in any stack.
- `references/redesign-playbook.md` — auditing/converting existing designs, anti-patterns,
  and the final QA checklist.
