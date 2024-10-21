import { useState } from "react";
import "./Search.css";
import { assetsPath } from "../../utils/utils";

/**
 * Stylized component to be used as a search engine.
 *
 * @param {object} props object
 * @param {Function} props.id identificación de entrada
 * @param {Function} props.onChange internal function of the input, used to extract its content from the component.
 * @returns {JSX.Element} returns the rendered search component.
 */

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);

  return (
    <div className="search">
      <img
        className="search-image"
        width={24}
        src={assetsPath(`./icons/search.svg`)}
        alt="search"
      />
      <input
        id={`search${props.id}`}
        type="text"
        className="search-input"
        value={search}
        required
        autoComplete="off"
        onChange={(e) => {
          setSearch(e.target.value);
          props.onChange(e.target.value);
          e.target.value ? setCancel(true) : setCancel(false);
        }}
      />
      <label htmlFor="search" className="search-title">
        Search
      </label>
      <div
        className={`search-close${cancel ? " search-close-visible" : ""}`}
        onClick={() => {
          props.onChange("");
          setSearch("");
          setCancel(false);
        }}
      >
        <img
          className="search-image"
          width={16}
          src={assetsPath(`./icons/close.svg`)}
          alt="search"
        />
      </div>
    </div>
  );
}
