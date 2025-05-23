import { useContext, useState } from "react";
import CartSVG from "../../svg/CartSVG";
import ChicksLogoSVG from "../../svg/ChicksLogoSVG";
import MenuBurgerSVG from "../../svg/MenuBurgerSVG";
import ProfileSVG from "../../svg/ProfileSVG";
import NavItemComponent from "../navItem/NavItemComponent";
import "./NavBarComponent.css";
import AccordionMenuComponent from "../accordionMenu/AccordionMenuComponent";
import { navSections } from "../../helpers/dummyData";
import { CartContext } from "../../helpers/CartContext";

/*============================================================
  NavBarComponent: Nav bar rendering component
==============================================================*/

export default function NavBarComponent() {
  const [isOpenMenuBurger, setIsOpenMenuBurger] = useState(false);
  const { itemsCart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpenMenuBurger(!isOpenMenuBurger);
    if (!isOpenMenuBurger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <nav className="navBar">
      <div
        className={`menu-burger${isOpenMenuBurger ? " openMenuBurger" : ""}`}
      >
        
        <AccordionMenuComponent sections={navSections} closeOnClick={toggleMenu} />
      </div>
      <button
        className="menu-burguer-button"
        onClick={toggleMenu}
        aria-label="Toggle burger menu"
        aria-expanded={isOpenMenuBurger}
      >
        <MenuBurgerSVG />
      </button>
      <div className="container-chicks-logo">
        <ChicksLogoSVG className="chicks-logo" />
      </div>
      <div className="nav-main">
        <div className="nav-preferences">
          <NavItemComponent
            classNameNavItem="nav-item-type-currency"
            title={"usd"}
          />
          <button className="button-cart">
            <CartSVG />
            <span className="button-cart-number-items">{itemsCart ? itemsCart.length : "0"}</span>
            <span className="button-cart-title">Cart ({itemsCart ? itemsCart.length : "0"})</span>
          </button>
          <button className="button-sign-in">
            sign in
            <ProfileSVG />
          </button>
        </div>
        <div className="nav-items">
          <NavItemComponent title={"currency"} />
          <NavItemComponent title={"items"} />
          <NavItemComponent title={"accounts"} />
          <NavItemComponent title={"services"} />
          <NavItemComponent title={"swap"} />
          <NavItemComponent title={"sell"} />
        </div>
      </div>
    </nav>
  );
}
