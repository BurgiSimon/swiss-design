import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

/*
  One loop drives everything (per the Lenis README): GSAP's ticker calls
  lenis.raf, and every Lenis scroll event updates ScrollTrigger. This is what
  lets the scrubbed reveals/pins ride the smooth-scroll loop instead of fighting it.

  Motion is gated: when the user prefers reduced motion we don't mount Lenis at
  all, so the page scrolls natively and statically — content stays fully usable.
*/
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    const lenis = lenisRef.current?.lenis
    lenis?.on('scroll', ScrollTrigger.update)

    return () => {
      gsap.ticker.remove(update)
      lenis?.off('scroll', ScrollTrigger.update)
    }
  }, [reduced])

  if (reduced) return children

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  )
}
