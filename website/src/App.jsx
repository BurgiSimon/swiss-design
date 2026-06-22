import SmoothScroll from './lib/smooth-scroll'
import Hero from './components/Hero'
import WhatItIs from './components/WhatItIs'
import SystemShowcase from './components/SystemShowcase'
import Principles from './components/Principles'
import DecisionFramework from './components/DecisionFramework'
import Workflows from './components/Workflows'
import ReferenceMap from './components/ReferenceMap'
import Usage from './components/Usage'
import Footer from './components/Footer'

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#what"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Hero />
      <main>
        <WhatItIs />
        <SystemShowcase />
        <Principles />
        <DecisionFramework />
        <Workflows />
        <ReferenceMap />
        <Usage />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
