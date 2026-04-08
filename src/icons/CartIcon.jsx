export function CartIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.333 6h14.534a.8.8 0 01.792.876l-.75 6a.8.8 0 01-.792.724H7.999"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M2 4h2.234a1 1 0 01.965.74l3.102 11.52a1 1 0 00.965.74H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="20"
        r="1"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle
        cx="17.5"
        cy="20"
        r="1"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
