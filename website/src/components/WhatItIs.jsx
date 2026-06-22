import Col from './primitives/Col'
import Section from './primitives/Section'
import { useReveal } from '../hooks/useReveal'

export default function WhatItIs() {
  const ref = useReveal()
  return (
    <Section id="what" index="01" kicker="What it is" innerRef={ref}>
      <Col sm="1 / span 4" lg="1 / span 7">
        <h2 data-reveal className="text-h1 font-bold tracking-display leading-tight">
          Design as a <span className="text-accent">programme</span>, not a pile
          of decisions.
        </h2>
      </Col>

      <Col sm="1 / span 4" md="4 / span 5" lg="8 / span 5" className="self-end">
        <p data-reveal className="measure text-base text-gray-1">
          Karl Gerstner called good design a <em>programme</em>: a rule set, not
          inspiration chased one element at a time. The swiss-design skill helps
          you build that rule set first — then build on it.
        </p>
        <p data-reveal className="measure mt-6 text-base text-gray-1">
          Tokens, a type scale, an 8pt spacing system, a component library — these
          are Gerstner’s “programmes” in Gerstner’s exact sense. Set the system up
          correctly and the individual screens almost design themselves, staying
          coherent automatically.
        </p>
      </Col>

      <Col
        sm="1 / span 4"
        lg="1 / span 12"
        className="mt-16 md:mt-20 border-t border-gray-2 pt-8"
      >
        <p
          data-reveal
          className="text-h3 md:text-h2 font-medium leading-snug max-w-[18ch] md:max-w-[24ch]"
        >
          “To describe the problem is part of the solution… Designing means: to
          pick out determining elements and combining them.”
        </p>
        <p data-reveal className="mt-4 text-caption uppercase tracking-[0.18em] text-gray-1">
          Karl Gerstner · Designing Programmes, 1964
        </p>
      </Col>
    </Section>
  )
}
