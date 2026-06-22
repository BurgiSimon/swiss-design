/*
  The one grid. 4 columns mobile -> 8 tablet -> 12 desktop (the skill's
  "collapse the column count, keep the system" ladder). Every section places
  content on these tracks; deliberate empty columns are the whitespace.
*/
export default function Grid({ as: As = 'div', className = '', children, ...rest }) {
  return (
    <As
      className={
        'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-6 gap-y-8 ' +
        className
      }
      {...rest}
    >
      {children}
    </As>
  )
}
