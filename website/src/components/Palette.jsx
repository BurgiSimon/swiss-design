import { palette } from '../data/content'

// The whole palette: ink + paper + two grays + exactly one accent.
export default function Palette() {
  return (
    <div>
      <h3 className="text-caption font-medium uppercase tracking-[0.18em] text-gray-1 border-b border-gray-2 pb-3">
        Palette · ink, paper, 2 grays, 1 accent
      </h3>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
        {palette.map(({ name, value, role, swatch, fg }) => (
          <li key={name} className="flex flex-col">
            <span
              className={swatch + ' ' + fg + ' aspect-[4/3] flex items-end p-2 nums-tabular'}
            >
              <span className="text-caption font-medium">{value}</span>
            </span>
            <span className="mt-2 text-caption font-medium">{name}</span>
            <span className="text-caption text-gray-1">{role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
