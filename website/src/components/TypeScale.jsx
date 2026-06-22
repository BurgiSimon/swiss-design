import { typeScale } from '../data/content'

// Live specimen of the type scale token set — reading about it = seeing it.
export default function TypeScale() {
  return (
    <div>
      <h3 className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1 border-b border-gray-2 pb-3">
        Type scale · base 16px × 1.333
      </h3>
      <ul className="mt-6 space-y-4">
        {typeScale.map(({ token, label, cls }) => (
          <li key={token} className="flex items-baseline gap-5 border-b border-gray-2/60 pb-3">
            <span className="w-20 shrink-0 text-caption text-gray-1 nums-tabular">
              {token}
            </span>
            <span
              className={
                cls +
                ' font-medium leading-none truncate ' +
                (token === 'display' ? 'tracking-display' : '')
              }
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
