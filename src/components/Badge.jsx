export function Badge({ children, className, variant = "default" }) {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className || ""}`}
    >
      {children}
    </span>
  );
}
