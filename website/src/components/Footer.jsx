import Grid from './primitives/Grid'

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-8 pt-20 pb-12 bg-ink text-paper">
      <div className="mx-auto w-full max-w-[var(--canvas-max)]">
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="text-fluid-display font-bold tracking-display leading-none">
              Form follows
              <br />
              <span className="text-accent">function</span>.
            </p>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10 self-end mt-10 lg:mt-0">
            <p className="measure text-base text-gray-2">
              A showcase for the <span className="font-mono">swiss-design</span>{' '}
              Claude skill — this site is built by applying it to itself.
            </p>
            <ul className="mt-6 space-y-1 text-caption uppercase tracking-[0.16em] text-gray-2 nums-tabular">
              <li>Inter Variable · 2 weights</li>
              <li>12-col grid · 8pt rhythm</li>
              <li>One accent · #E2231A</li>
              <li>Smooth scroll · Lenis + GSAP</li>
            </ul>
          </div>
        </Grid>
        <div className="mt-16 border-t border-gray-1 pt-6 flex flex-wrap justify-between gap-4 text-caption text-gray-2">
          <span>International Typographic Style · Zürich / Basel</span>
          <span className="nums-tabular">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
