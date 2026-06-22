import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'
import { references } from '../data/content'

export default function ReferenceMap() {
  const ref = useReveal({ stagger: 0.05 })
  return (
    <Section id="references" index="06" kicker="Reference map" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 8" className="mb-12">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          Six reference files. Pull each in when its step arrives.
        </h2>
        <p data-reveal className="measure mt-6 text-base text-gray-1">
          The skill doesn’t preload everything — you read the reference whose job
          matches the step you’re on.
        </p>
      </Col>

      {references.map((r, i) => (
        <Col
          key={r.file}
          sm="1 / span 4"
          md="span 4"
          lg="span 6"
          className="group flex items-baseline gap-5 border-t border-gray-2 py-6"
          data-reveal
        >
          <span className="text-caption nums-tabular text-gray-1">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-h4 font-mono font-medium text-ink group-hover:text-accent transition-colors">
              {r.file}
            </h3>
            <p className="measure mt-2 text-base text-gray-1">{r.desc}</p>
          </div>
        </Col>
      ))}
    </Section>
  )
}
