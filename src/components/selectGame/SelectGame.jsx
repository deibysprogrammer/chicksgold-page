import "./SelectGame.css";
import { assetsPath } from "../../utils/utils";
import { useState } from "react";

/**
 * Stylized component to be used as a drop-down list with search function.
 *
 * @returns {JSX.Element} returns the rendered select game component.
 */

export default function SelectGame() {
  const [search, setSearch] = useState("");
  return (
    <label className="select-game" htmlFor="game-title">
      <img
        className="select-game-img-default"
        width={24}
        src={assetsPath("./icons/game-default.svg")}
        alt="arrow-white-up"
      />
      <input
        id="game-title"
        className="select-game-input"
        required
        autoComplete="off"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <label htmlFor="game-title" className="select-game-label">
        Select a game
      </label>
      <img
        className="select-game-arrow"
        width={12}
        src={assetsPath("./icons/arrow-white.svg")}
        alt="arrow-white-up"
      />
      <img
        className="select-game-cancel"
        width={16}
        src={assetsPath(`./icons/close.svg`)}
        alt="cancel"
        onClick={() => {
          setSearch("");
        }}
      />
    </label>
  );
}
