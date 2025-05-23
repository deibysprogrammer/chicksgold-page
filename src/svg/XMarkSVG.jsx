export default function XMarkSVG({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="#FFFFFF"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
