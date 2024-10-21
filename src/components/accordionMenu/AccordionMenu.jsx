import { useState } from "react";
import Button from "../button/Button";
import Search from "../search/Search";
import "./AccordionMenu.css";
import AccordionItem from "./accordionItem/AccordionItem";

/**
 * component created to present the navigation menu from mobile devices or devices with a smaller screen.
 *
 * @param {object} props object
 * @param {boolean} props.isVisible property that allows displaying the accordion menu
 * @param {Function} props.onVisibilityChange function that changes the visibility state of the component
 * @returns {JSX.Element} returns the rendered accordion menu component.
 */

export default function AccordionMenu(props) {
  const [search, setSearch] = useState("");
  const navItems = [
    { id: 1, name: "Currency" },
    { id: 2, name: "Items" },
    { id: 3, name: "Accounts" },
    { id: 4, name: "Services" },
    { id: 5, name: "More" },
    { id: 6, name: "Sell" },
    { id: 7, name: "USD" },
  ];
  const games = [
    { id: 1, name: "osrs", path: "./icons/white/osrs.png", isTrending: true },
    { id: 2, name: "rs3", path: "./icons/white/rs3.png", isTrending: true },
    {
      id: 3,
      name: "wow classic",
      path: "./icons/white/wowc.png",
      isTrending: true,
    },
    {
      id: 4,
      name: "wow retail",
      path: "./icons/white/wowr.png",
      isTrending: true,
    },
    {
      id: 5,
      name: "final fantasy xiv",
      path: "./icons/white/final-fantasy-xiv.png",
      isTrending: true,
    },
    { id: 6, name: "rbx", path: "./icons/white/rbx.png", isTrending: true },
    {
      id: 7,
      name: "4story",
      path: "./icons/white/4story.png",
      isTrending: false,
    },
    {
      id: 8,
      name: "8 ball pool",
      path: "./icons/white/8ball.png",
      isTrending: false,
    },
    {
      id: 9,
      name: "9 dragons",
      path: "./icons/white/9dragons.png",
      isTrending: false,
    },
    {
      id: 10,
      name: "aion classic",
      path: "./icons/white/aionc.png",
      isTrending: false,
    },
    {
      id: 11,
      name: "aion online",
      path: "./icons/white/aion.png",
      isTrending: false,
    },
    {
      id: 12,
      name: "albion online",
      path: "./icons/white/albion.png",
      isTrending: false,
    },
    {
      id: 13,
      name: "animal jam",
      path: "./icons/white/animaljam.png",
      isTrending: false,
    },
    {
      id: 14,
      name: "apb reloaded",
      path: "./icons/white/apbr.png",
      isTrending: false,
    },
    {
      id: 15,
      name: "arcane legends",
      path: "./icons/white/arcane.png",
      isTrending: false,
    },
  ];

  return (
    <div className={`accordium-menu ${props.isVisible ? " visible" : ""}`}>
      <div className="accordium-menu-header">
        <Button
          title="Close"
          path="icons/close.svg"
          bgcolor={1}
          font={1}
          isLeftImage
          onClick={() => props.onVisibilityChange()}
          isNotHover
        />
        <Search
          id="accordionMenu"
          onChange={(search) => {
            setSearch(search);
          }}
        />
      </div>
      <div className="accordium-menu-list">
        {navItems.map((navItem) => {
          return (
            <AccordionItem
              key={navItem.id}
              title={navItem.name}
              games={games}
            />
          );
        })}
      </div>
    </div>
  );
}
