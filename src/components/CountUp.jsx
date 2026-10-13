// Static number (the count-up animation was removed; kept as a component so call sites stay simple).
export default function CountUp({ value, className = "", style }) {
  return <div className={className} style={style}>{value}</div>;
}
