import { useEffect, useRef } from 'react'
import Grid from './primitives/Grid'
import Col from './primitives/Col'
import TypeScale from './TypeScale'
import SpacingScale from './SpacingScale'
import Palette from './Palette'
import GridDemo from './GridDemo'
import { gsap, prefersReducedMotion } from '../lib/gsap'

export default function SystemShowcase() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      // each specimen panel scrubs in as it enters — tied to the Lenis loop
      gsap.utils.toArray('[data-specimen]').forEach((panel) => {
        gsap.from(panel, {
          y: 40,
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'top 88%',
            end: 'top 55%',
            scrub: true,
          },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="system"
      ref={rootRef}
      className="w-full px-6 md:px-8 py-24 md:py-32 lg:py-40 bg-paper"
    >
      <div className="mx-auto w-full max-w-[var(--canvas-max)]">
        <Grid className="mb-12 md:mb-16">
          <div className="col-span-4 md:col-span-8 lg:col-span-12 flex items-baseline gap-4 border-t border-gray-2 pt-4">
            <span className="text-caption font-medium nums-tabular text-accent">02</span>
            <span className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1">
              The system, live
            </span>
          </div>
        </Grid>

        <Grid>
          {/* sticky heading column — the “pin”. Sticky is reduced-motion safe. */}
          <Col sm="1 / span 4" lg="1 / span 4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-h1 font-bold tracking-display leading-tight">
                You’re reading the tokens.
              </h2>
              <p className="measure mt-6 text-base text-gray-1">
                Everything on this page is generated from the same four token sets
                the skill prescribes. Below, the actual values — rendered as
                themselves.
              </p>
              <p className="measure mt-6 text-base text-gray-1">
                Type, space, color, grid. Define these first and every screen is
                just an instance of them.
              </p>
            </div>
          </Col>

          {/* specimens — each a whole-field panel on the right */}
          <Col sm="1 / span 4" md="1 / span 8" lg="6 / span 7" className="space-y-16 md:space-y-24">
            <div data-specimen>
              <TypeScale />
            </div>
            <div data-specimen>
              <SpacingScale />
            </div>
            <div data-specimen>
              <Palette />
            </div>
            <div data-specimen>
              <GridDemo />
            </div>
          </Col>
        </Grid>
      </div>
    </section>
  )
}
