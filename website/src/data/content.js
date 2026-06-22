// Content distilled from the swiss-design skill's markdown (SKILL.md + references).
// Kept as data so the layout components stay pure system + grid.

export const principles = [
  {
    n: '01',
    title: 'The system comes before the screen',
    body: 'Define tokens — grid, type scale, spacing scale, palette — before laying anything out. The grid and the scale are the design; the pages are just instances of it.',
    ref: 'color-and-tokens.md',
  },
  {
    n: '02',
    title: 'One grid governs everything',
    body: 'Commit to a column grid and a spacing rhythm, and don’t abandon it when it’s inconvenient. Whitespace is an active structural element — empty columns — not leftover space.',
    ref: 'grid-systems.md',
  },
  {
    n: '03',
    title: 'One neutral neo-grotesque typeface',
    body: 'Helvetica, Univers, Akzidenz-Grotesk, or web-native Inter. Hierarchy comes from scale contrast, weight, and spacing — not from color, decoration, or many fonts.',
    ref: 'typography.md',
  },
  {
    n: '04',
    title: 'Restrained, functional palette',
    body: 'Near-black ink, paper white, one or two grays, and exactly one accent — classically red. Color signals hierarchy and action; it never decorates.',
    ref: 'color-and-tokens.md',
  },
  {
    n: '05',
    title: 'Flush-left, asymmetric, objective',
    body: 'Text is flush-left / ragged-right. Layouts are asymmetric but balanced. Contrast is high — also an accessibility requirement. Imagery is documentary, not decorative.',
    ref: 'grid-systems.md',
  },
  {
    n: '06',
    title: 'Reduction, not austerity',
    body: 'Keep only what is necessary — but removing something users need is a failure, not a virtue. The energy comes from scale contrast, a decisive accent, and strong imagery on a disciplined grid.',
    ref: 'redesign-playbook.md',
  },
]

export const framework = [
  {
    useCase: 'Portfolio, landing, editorial, brand, poster-like',
    applyAs: 'Full expressive Swiss',
    ratio: '1.333 – 1.618',
    notes: 'Large type, dramatic whitespace, one bold accent, strong asymmetry.',
  },
  {
    useCase: 'Product / app / dashboard UI',
    applyAs: 'The system, gently',
    ratio: '1.2 – 1.25',
    notes: 'Functional density, components snap to 8pt, color stays semantic.',
  },
  {
    useCase: 'Content-heavy reading (docs, blog)',
    applyAs: 'Reading-first Swiss',
    ratio: '1.2',
    notes: '~60ch measure, 16–18px body, restrained hierarchy.',
  },
]

export const workflows = [
  {
    tag: 'A',
    title: 'Build new',
    body: 'Design a Swiss-style site, app, or component from scratch. Establish tokens, lay out on the grid, set type to the scale, then audit against the anti-patterns.',
  },
  {
    tag: 'B',
    title: 'Redesign existing',
    body: 'Convert an existing interface of any aesthetic into Swiss style. Audit-then-rebuild: change the system, not just the surface. Replace the skin and the structure underneath it.',
  },
]

export const references = [
  {
    file: 'foundations.md',
    desc: 'History, key figures, and the philosophy behind every rule — the “why.” Read for grounding or when a tradeoff is ambiguous.',
  },
  {
    file: 'typography.md',
    desc: 'Typefaces, type scales, measure, hierarchy, leading, and weight contrast.',
  },
  {
    file: 'grid-systems.md',
    desc: 'Müller-Brockmann’s baseline-driven grid method and its translation to responsive CSS Grid.',
  },
  {
    file: 'color-and-tokens.md',
    desc: 'Restrained palettes and the full design-token system, with per-use-case defaults.',
  },
  {
    file: 'implementation.md',
    desc: 'Turning the system into code in any stack: CSS core, plus Tailwind, React, Vue, plain HTML.',
  },
  {
    file: 'redesign-playbook.md',
    desc: 'Auditing and converting existing designs; the anti-pattern catalogue and final QA checklist.',
  },
]

// The actual tokens, surfaced as live specimens in the showcase.
export const typeScale = [
  { token: 'display', label: 'Display', cls: 'text-fluid-display' },
  { token: 'h1', label: 'Heading 1', cls: 'text-h1' },
  { token: 'h2', label: 'Heading 2', cls: 'text-h2' },
  { token: 'h3', label: 'Heading 3', cls: 'text-h3' },
  { token: 'h4', label: 'Heading 4', cls: 'text-h4' },
  { token: 'base', label: 'Body', cls: 'text-base' },
  { token: 'caption', label: 'Caption', cls: 'text-caption' },
]

export const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

export const palette = [
  { name: 'Ink', value: '#111111', role: 'Text & primary marks', swatch: 'bg-ink', fg: 'text-paper' },
  { name: 'Paper', value: '#FFFFFF', role: 'Large fields', swatch: 'bg-paper border border-gray-2', fg: 'text-ink' },
  { name: 'Gray 1', value: '#6B6B6B', role: 'Secondary text (AA)', swatch: 'bg-gray-1', fg: 'text-paper' },
  { name: 'Gray 2', value: '#D4D4D4', role: 'Rules & dividers', swatch: 'bg-gray-2', fg: 'text-ink' },
  { name: 'Accent', value: '#E2231A', role: 'The one accent', swatch: 'bg-accent', fg: 'text-paper' },
]
