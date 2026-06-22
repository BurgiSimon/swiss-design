import { useEffect, useRef } from 'react'
import Grid from './primitives/Grid'
import Col from './primitives/Col'
import { gsap, prefersReducedMotion } from '../lib/gsap'

export default function Hero() {
  const rootRef = useRef(null)
  const blockRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      // intro: the display headline settles in flush-left
      gsap.from('[data-hero-line]', {
        yPercent: 110,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
      })
      // a single red block drifts on scroll — the one decisive accent move
      gsap.to(blockRef.current, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={rootRef}
      className="relative w-full px-6 md:px-8 pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[var(--canvas-max)]">
        <Grid>
          {/* meta row */}
          <Col sm="1 / span 4" lg="1 / span 12">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t-2 border-ink pt-4">
              <span className="text-caption font-medium uppercase tracking-[0.18em]">
                Claude Skill
              </span>
              <span className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1 nums-tabular">
                Est. 1950s · Zürich / Basel
              </span>
            </div>
          </Col>

          {/* headline — flush-left, columns 1–10, the rest left empty on purpose */}
          <Col sm="1 / span 4" lg="1 / span 11" className="mt-16 md:mt-24">
            <h1 className="text-fluid-display font-bold tracking-display">
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  Swiss Design
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  for the <span className="text-accent">Web</span>.
                </span>
              </span>
            </h1>
          </Col>

          {/* lede — offset right, capped measure */}
          <Col
            sm="1 / span 4"
            md="4 / span 5"
            lg="7 / span 5"
            className="mt-12 md:mt-16"
          >
            <p className="measure text-h4 leading-snug font-medium">
              A skill that designs and builds web UI in the International
              Typographic Style — and a site built by applying it to itself.
            </p>
            <p className="measure mt-6 text-base text-gray-1">
              Not a look you decorate with. A system: a small set of rules —
              grid, type scale, spacing, one accent — that generate every screen.
            </p>
          </Col>
        </Grid>
      </div>

      {/* the one accent block, parallaxed */}
      <div
        ref={blockRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-[6vw] top-[18%] h-[34vw] max-h-[420px] w-[14vw] max-w-[150px] bg-accent"
      />
    </header>
  )
}
