/**
 * Composite SVG to manage its properties.
 *
 * @param {object} props object
 * @param {string} props.className Property to modify the svg styles
 * @returns {JSX.Element} returns the rendered full arrow composite svg.
 */

export default function FullArrow({ className, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51.19 27.5"
      fill="#FFFFFF"
    >
      <polygon points="0 0 51.19 0 25.59 27.5 0 0" />
    </svg>
  );
}
