import ArrowSVG from "../../svg/ArrowSVG";
import "./NavItemComponent.css";

/*============================================================
  NavItemComponent: Custom nav item rendering component
==============================================================*/

export default function NavItemComponent({ classNameNavItem, title }) {
  return (
    <div
      className={`nav-item${classNameNavItem ? " " + classNameNavItem : ""}`}
    >
      <span className="nav-item-title">{title}</span>
      <ArrowSVG className="nav-item-arrow" />
    </div>
  );
}
