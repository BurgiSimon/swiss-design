/*
  Asymmetric, explicit placement on the grid — the source of Swiss tension.
  Props give span (and optional start) per breakpoint:
    <Col sm="1 / span 4" md="1 / span 5" lg="1 / span 7">
  Values are raw `grid-column` shorthand. The CSS in index.css (.col) resolves
  them per breakpoint with smaller-first fallback.
*/
export default function Col({
  as: As = 'div',
  sm,
  md,
  lg,
  className = '',
  style,
  children,
  ...rest
}) {
  const vars = {
    ...(sm ? { '--col-sm': sm } : null),
    ...(md ? { '--col-md': md } : null),
    ...(lg ? { '--col-lg': lg } : null),
    ...style,
  }
  return (
    <As className={'col ' + className} style={vars} {...rest}>
      {children}
    </As>
  )
}
