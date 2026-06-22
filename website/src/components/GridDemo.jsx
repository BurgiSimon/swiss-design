// A visible 12-column grid — the skeleton every section snaps to. The shaded
// columns show deliberate empty columns used as whitespace.
export default function GridDemo() {
  const active = new Set([0, 1, 2, 3, 4, 5, 6, 9, 10, 11])
  return (
    <div>
      <h3 className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1 border-b border-gray-2 pb-3">
        Grid · 12 columns, asymmetric placement
      </h3>
      <div className="mt-6 grid grid-cols-12 gap-2 h-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={
              'flex items-end justify-center pb-1 ' +
              (active.has(i) ? 'bg-gray-2/40' : 'bg-transparent border border-dashed border-gray-2')
            }
          >
            <span className="text-caption text-gray-1 nums-tabular">{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-caption text-gray-1 measure">
        Filled = content (a 7-col headline + a 3-col aside). Dashed = empty
        columns, left blank on purpose. The gap between them is the design.
      </p>
    </div>
  )
}
