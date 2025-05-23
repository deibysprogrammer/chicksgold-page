import { useState } from "react";
import XMarkSVG from "../../svg/XMarkSVG";
import SearchComponent from "../search/SearchComponent";
import "./AccordionMenuComponent.css";
import MenuItemComponent from "./menuItemCompoment/MenuItemComponent";

/*============================================================
  AccordionMenuComponent: Accordion menu rendering component
==============================================================*/

export default function AccordionMenuComponent({ sections, closeOnClick }) {
  const [search, setSearch] = useState("");
  return (
    <>
    <div className="menu-burger-header">
          <button className="menu-burger-button-close" onClick={closeOnClick}>
            <XMarkSVG />
            close
          </button>
          <SearchComponent
            id={"MenuBar"}
            onChange={(search) => {
              setSearch(search);
            }}
          />
        </div>
      <div className="menu-burger-list">
        {sections.map((section) => (
          <MenuItemComponent key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
