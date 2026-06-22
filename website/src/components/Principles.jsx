import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'
import { principles } from '../data/content'

export default function Principles() {
  const ref = useReveal({ stagger: 0.06 })
  return (
    <Section id="principles" index="03" kicker="The non-negotiables" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 8" className="mb-8">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          Six rules that hold regardless of stack or content.
        </h2>
      </Col>

      {principles.map((p) => (
        <Col
          key={p.n}
          sm="1 / span 4"
          md="span 4"
          lg="span 4"
          className="border-t border-ink pt-5"
          data-reveal
        >
          <div className="flex items-baseline gap-3">
            <span className="text-h3 font-bold nums-tabular text-accent">{p.n}</span>
            <h3 className="text-h4 font-medium leading-snug">{p.title}</h3>
          </div>
          <p className="measure mt-4 text-base text-gray-1">{p.body}</p>
          <span className="mt-4 inline-block text-caption font-mono text-gray-1">
            → {p.ref}
          </span>
        </Col>
      ))}
    </Section>
  )
}
