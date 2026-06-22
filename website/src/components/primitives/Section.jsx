import Grid from './Grid'

/*
  A full-width band with generous structural whitespace (the big spacing steps),
  a centered canvas capped at --canvas-max, and an optional kicker/index label.
  Renders its children inside the one Grid.
*/
export default function Section({
  id,
  index,
  kicker,
  className = '',
  innerRef,
  children,
}) {
  return (
    <section
      id={id}
      ref={innerRef}
      className={'w-full px-6 md:px-8 py-24 md:py-32 lg:py-40 ' + className}
    >
      <div className="mx-auto w-full max-w-[var(--canvas-max)]">
        {(kicker || index) && (
          <Grid className="mb-12 md:mb-16">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex items-baseline gap-4 border-t border-gray-2 pt-4">
              {index && (
                <span className="text-caption font-medium nums-tabular text-accent">
                  {index}
                </span>
              )}
              {kicker && (
                <span className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1">
                  {kicker}
                </span>
              )}
            </div>
          </Grid>
        )}
        <Grid>{children}</Grid>
      </div>
    </section>
  )
}
