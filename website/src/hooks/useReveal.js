import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

/*
  Staggered flush-left reveal for a section's direct children marked with
  [data-reveal]. On-style: a single calm, downward settle — not a circus.
  Returns a ref to attach to the section container.

  Reduced motion: no-op (elements render in their natural, visible state).
*/
export function useReveal({ y = 24, stagger = 0.08, start = 'top 80%' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger,
        scrollTrigger: { trigger: el, start },
      })
    }, el)

    return () => ctx.revert()
  }, [y, stagger, start])

  return ref
}
