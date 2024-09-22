// eslint-disable-next-line react/prop-types
export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-7 py-3 border font-medium text-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}
