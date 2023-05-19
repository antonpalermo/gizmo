export default function Spinner() {
  return (
    <svg viewBox="0 0 50 50" className="spinner animate-spin" strokeLinecap="round">
      <circle
        r="20"
        cx="25"
        cy="25"
        fill="none"
        className="path animate-loading"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
