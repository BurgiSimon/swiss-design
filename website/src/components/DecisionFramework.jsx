import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'
import { framework } from '../data/content'

export default function DecisionFramework() {
  const ref = useReveal()
  return (
    <Section id="framework" index="04" kicker="Calibrate the intensity" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 7" className="mb-12">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          The method is universal. How expressive you make it isn’t.
        </h2>
        <p data-reveal className="measure mt-6 text-base text-gray-1">
          Pick the row that matches what you’re building, then apply its
          type-scale ratio and density. This site uses the first row.
        </p>
      </Col>

      <Col sm="1 / span 4" lg="1 / span 12">
        {/* a Swiss data table: tabular figures, hairline rules, flush-left */}
        <div role="table" className="w-full">
          <div
            role="row"
            className="hidden md:grid grid-cols-12 gap-6 border-b-2 border-ink pb-3 text-caption font-medium uppercase tracking-[0.14em] text-gray-1"
          >
            <span role="columnheader" className="col-span-5">Use case</span>
            <span role="columnheader" className="col-span-3">Apply it as</span>
            <span role="columnheader" className="col-span-1 nums-tabular">Ratio</span>
            <span role="columnheader" className="col-span-3">Notes</span>
          </div>
          {framework.map((row, i) => (
            <div
              role="row"
              data-reveal
              key={row.useCase}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 border-b border-gray-2 py-5"
            >
              <span role="cell" className="md:col-span-5 text-h4 font-medium leading-snug">
                {i === 0 && <span className="text-accent">▌ </span>}
                {row.useCase}
              </span>
              <span role="cell" className="md:col-span-3 text-base">{row.applyAs}</span>
              <span role="cell" className="md:col-span-1 text-base nums-tabular">{row.ratio}</span>
              <span role="cell" className="md:col-span-3 text-base text-gray-1">{row.notes}</span>
            </div>
          ))}
        </div>
      </Col>
    </Section>
  )
}
