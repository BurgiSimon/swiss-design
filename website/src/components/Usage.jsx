import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'

const triggers = [
  '“Make this Swiss style / International Typographic Style”',
  '“Build a grid-based / grid-driven layout”',
  '“Redesign / clean up / make this more Swiss”',
  '“A minimalist, Müller-Brockmann site”',
]

export default function Usage() {
  const ref = useReveal()
  return (
    <Section id="usage" index="07" kicker="How to use it" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 6">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          Just ask. The skill loads itself.
        </h2>
        <p data-reveal className="measure mt-6 text-base text-gray-1">
          It’s a Claude skill — drop it in your skills directory and Claude
          reaches for it whenever a request matches. No setup, no config.
        </p>

        <div data-reveal className="mt-8 bg-ink text-paper p-6">
          <span className="text-caption uppercase tracking-[0.18em] text-gray-2">
            Triggers on prompts like
          </span>
          <ul className="mt-4 space-y-3">
            {triggers.map((t) => (
              <li key={t} className="flex gap-3 text-base leading-snug">
                <span className="text-accent" aria-hidden="true">▌</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Col>

      <Col sm="1 / span 4" md="4 / span 5" lg="8 / span 5" className="self-end">
        <ol data-reveal className="space-y-6">
          {[
            ['Frame the problem', 'Pick the decision-framework row — it sets your ratios and density.'],
            ['Establish tokens', 'Spacing, type scale, palette, one typeface — before any layout.'],
            ['Lay out on the grid', 'Asymmetric, flush-left, deliberate empty columns.'],
            ['Set type to the scale', '~60ch measure, two weights, tight leading on display.'],
            ['Audit', 'Run the anti-pattern + WCAG AA checklist before shipping.'],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-4 border-b border-gray-2 pb-5">
              <span className="text-h4 font-bold nums-tabular text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-h4 font-medium leading-snug">{t}</h3>
                <p className="measure mt-1 text-base text-gray-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Col>
    </Section>
  )
}
