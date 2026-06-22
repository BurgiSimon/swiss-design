import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'
import { workflows } from '../data/content'

export default function Workflows() {
  const ref = useReveal()
  return (
    <Section id="workflows" index="05" kicker="Two workflows" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 6" className="mb-12">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          Build new, or convert what’s already there.
        </h2>
      </Col>

      {workflows.map((w) => (
        <Col
          key={w.tag}
          sm="1 / span 4"
          md="span 4"
          lg="span 6"
          className="border-t-2 border-ink pt-6"
          data-reveal
        >
          <div className="flex items-start gap-6">
            <span className="text-display font-bold leading-none text-accent">{w.tag}</span>
            <div>
              <h3 className="text-h2 font-bold tracking-display leading-tight">{w.title}</h3>
              <p className="measure mt-4 text-base text-gray-1">{w.body}</p>
            </div>
          </div>
        </Col>
      ))}

      <Col sm="1 / span 4" lg="1 / span 10" className="mt-12">
        <p data-reveal className="text-h4 font-medium leading-snug max-w-[40ch]">
          Both share one foundation: establish the system, lay out on the grid,
          set type, then audit. Never start by styling individual elements.
        </p>
      </Col>
    </Section>
  )
}
