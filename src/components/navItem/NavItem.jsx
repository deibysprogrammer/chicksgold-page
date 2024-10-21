import "./NavItem.css";
import ArrowDown from "../svg/ArrowDown";

/**
 * Internal component of the navigation bar component that presents a section.
 *
 * @param {object} props object
 * @param {string} props.title section title
 * @param {boolean} props.isNoHoverItem property that changes the hover effect partially, only for the presentation of the current currency.
 * @returns {JSX.Element} returns the rendered navigation item component.
 */

export default function NavItem(props) {
  return (
    <div className={`nav-item${props.isNoHoverItem ? " no-hover-item" : ""}`}>
      <span className="nav-item-title">{props.title}</span>
      <ArrowDown className="nav-item-arrow"></ArrowDown>
    </div>
  );
}
