import { useState } from "react";
import { assetsPath } from "../../../utils/utils";
import "./AccordionItemFooter.css";

/**
 * Internal accordion menu component to display dropdown lists.
 *
 * @param {object} props object
 * @param {boolean} props.title item title
 * @param {Array} props.subList arrangement of links to information
 * @returns {JSX.Element} returns the rendered accordion item component.
 */

export default function AccordionItemFooter(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordium-menu-item-footer">
      <div
        className="accordium-menu-footer-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{props.title}</span>
        <img
          className={`arrow-img ${isOpen ? "arrow-img-rotate" : ""}`}
          width={12}
          src={assetsPath("./icons/arrow-down.svg")}
          alt="arrow-down"
        />
      </div>
      <div
        className={`accordium-menu-footer-sublist${
          isOpen ? " accordium-menu-footer-sublist-visible" : ""
        }`}
      >
        {props.subList.map((item) => {
          return (
            <a key={item.id} href={`#${item.name}`} className="item">
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
