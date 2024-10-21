import { useState } from "react";
import { assetsPath } from "../../../utils/utils";
import "./AccordionItem.css";

/**
 * Internal accordion menu component to display dropdown lists.
 *
 * @param {object} props object
 * @param {boolean} props.title item title
 * @param {Array} props.games game fixing
 * @returns {JSX.Element} returns the rendered accordion item component.
 */

export default function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordium-menu-item">
      <div
        className="accordium-menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{props.title}</span>
        <img
          className={`arrow-img ${isOpen ? "arrow-img-rotate" : ""}`}
          width={12}
          src={assetsPath("./icons/arrow-white.svg")}
          alt="arrow-white-up"
        />
      </div>
      <div
        className={`accordium-menu-sublist${
          isOpen ? " accordium-menu-sublist-visible" : ""
        }`}
      >
        <span className="trending-section">Trending Game</span>
        {props.games.map((game) => {
          if (game.isTrending) {
            return (
              <div className="game" key={game.id}>
                <img
                  className="game-icon"
                  width={16}
                  src={assetsPath(game.path)}
                  alt={game.name}
                />
                <a href={"#" + game.path} className="game-name">
                  {game.name}
                </a>
              </div>
            );
          }
          return "";
        })}
        <span className="all-section">All</span>
        {props.games.map((game) => {
          return (
            <div className="game" key={game.id}>
              <img
                className="game-icon"
                width={16}
                src={assetsPath(game.path)}
                alt={game.name}
              />
              <a href={"#" + game.path} className="game-name">
                {game.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
