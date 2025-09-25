export function Card({ children, className }) {
  return <div className={`card ${className || ""}`}>{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}
export function CardTitle({ children }) {
  return <h4 className="card-title">{children}</h4>;
}
export function CardContent({ children, className }) {
  return <div className={`card-content ${className || ""}`}>{children}</div>;
}