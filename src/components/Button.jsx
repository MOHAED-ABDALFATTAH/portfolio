export function Button({ children, onClick, className, size = "md" }) {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} rounded-md font-medium transition-colors ${className || ""}`}
    >
      {children}
    </button>
  );
}
