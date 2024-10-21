import "./Nav.css";
import Button from "../button/Button";
import NavItem from "../navItem/NavItem";
import AccordionMenu from "../accordionMenu/AccordionMenu";
import { useState } from "react";
import { assetsPath } from "../../utils/utils";

/**
 * Navigation bar component, created to be a component shared by the web application.
 *
 * @returns {JSX.Element} returns the rendered navigation bar component.
 */

export default function Nav() {
  const [isVisibleAccordionMenu, setIsVisibleAccordionMenu] = useState(false);

  const handleVisibilityChange = () => {
    setIsVisibleAccordionMenu(!isVisibleAccordionMenu);
  };

  const navItems = [
    { id: 1, name: "Currency" },
    { id: 2, name: "Items" },
    { id: 3, name: "Accounts" },
    { id: 4, name: "Services" },
    { id: 5, name: "More" },
    { id: 6, name: "Sell" },
  ];

  return (
    <nav className="nav">
      <div className="nav-menu-logo">
        <div
          className="menu-burger-button-container"
          onClick={() => {
            setIsVisibleAccordionMenu(true);
          }}
        >
          <img
            className="menu-burger"
            width={24}
            src={assetsPath("./icons/menu_burger.svg")}
            alt="chicks-logo-large"
          />
        </div>
        <div className="nav-logo-container">
          <img
            className="nav-logo"
            src={assetsPath("./chicks-logo-large.svg")}
            alt="chicks-logo-large"
          />
        </div>
      </div>
      <div className="nav-main-content">
        <div className="nav-items">
          {navItems.map((navItem) => {
            return <NavItem key={navItem.id} title={navItem.name}></NavItem>;
          })}
        </div>
        <div className="nav-preferences">
          <NavItem title="USD" isNoHoverItem></NavItem>
          <Button
            title="cart (5)"
            bgcolor={1}
            path={"icons/cart.svg"}
            isLeftImage
            isNotification
            isNotHover
          />
          <Button title="Sign In" path={"icons/profile.webp"} />
        </div>
      </div>
      <AccordionMenu
        isVisible={isVisibleAccordionMenu}
        onVisibilityChange={handleVisibilityChange}
      />
    </nav>
  );
}
