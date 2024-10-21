/**
 * Composite SVG to manage its properties.
 *
 * @param {object} props object
 * @param {string} props.className Property to modify the svg styles
 * @returns {JSX.Element} returns the rendered down arrow composite svg.
 */

export default function ArrowDown(props) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.29 5.71"
    >
      <path d="M4.64,5.71.22,1.28A.75.75,0,0,1,1.28.22L4.64,3.58,8,.22A.75.75,0,0,1,9.07,1.28Z" />
    </svg>
  );
}
