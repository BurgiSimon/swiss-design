import { spacingScale } from '../data/content'

// The 8pt system (4px base) as bars — every margin/padding/gap on the site uses
// exactly these rungs. The discipline is the point.
export default function SpacingScale() {
  return (
    <div>
      <h3 className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1 border-b border-gray-2 pb-3">
        Spacing · 8pt system, 4px base
      </h3>
      <ul className="mt-6 space-y-3">
        {spacingScale.map((px) => (
          <li key={px} className="flex items-center gap-4">
            <span className="w-12 shrink-0 text-caption text-gray-1 nums-tabular text-right">
              {px}
            </span>
            <span
              className="h-3 bg-ink"
              style={{ width: `${px}px` }}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
