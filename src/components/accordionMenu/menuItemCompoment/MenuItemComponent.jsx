import { useState } from "react";
import "./MenuItemComponent.css";
import ArrowFilledSVG from "../../../svg/ArrowFilledSVG";

/*============================================================
  MenuItemComponent: Menu item rendering component
==============================================================*/

export default function MenuItemComponent({ section, sectionClassName }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        key={section.id}
        className={`menu-burger-list-section${
          sectionClassName ? " " + sectionClassName : ""
        }`}
        onClick={toggleMenu}
      >
        <p>{section.title}</p>
        <ArrowFilledSVG
          className={`menu-burger-list-arrow${
            isOpen ? " list-arrow-rotate" : ""
          }`}
        />
      </button>
      <div
        className={`menu-burger-list-items${isOpen ? " items-visible" : ""}`}
      >
        {section.items.map(({title, url}) => (
          <a href={`${url ? url : "#"}`} key={title} className="menu-burger-list-item">
            <p className="menu-burger-list-item-title">{title}</p>
          </a>
        ))}
      </div>
    </>
  );
}
