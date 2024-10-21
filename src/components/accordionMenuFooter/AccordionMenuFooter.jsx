import "./AccordionMenuFooter.css";
import AccordionItemFooter from "./accordionItemFooter/AccordionItemFooter";

/**
 * Component created to present the footer menu from mobile devices or devices with a smaller screen.
 *
 * @returns {JSX.Element} returns the accordion menu component of the footer.
 */

export default function AccordionMenuFooter() {
  const navItems = [
    {
      id: 1,
      name: "Chicks Gold",
      subList: [
        { id: 1, name: "Games" },
        { id: 2, name: "About Us" },
        { id: 3, name: "Blog" },
        { id: 4, name: "Sitemap" },
      ],
    },
    {
      id: 2,
      name: "Support",
      subList: [
        { id: 1, name: "Contact Us" },
        { id: 2, name: "FAQ" },
      ],
    },
    {
      id: 3,
      name: "Legal",
      subList: [
        { id: 1, name: "Privacy Policy" },
        { id: 2, name: "Terms of Services" },
        { id: 3, name: "Copy Right Policy" },
      ],
    },
  ];
  return (
    <div className="accordium-menu-footer">
      <div className="accordium-menu-footer-list">
        {navItems.map((navItem) => {
          return (
            <AccordionItemFooter
              key={navItem.id}
              title={navItem.name}
              subList={navItem.subList}
            />
          );
        })}
      </div>
    </div>
  );
}
