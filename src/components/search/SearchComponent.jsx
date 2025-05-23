import { useState } from "react";
import XMarkSVG from "../../svg/XMarkSVG";
import "./SearchComponent.css";
import MagnifyingGlassSVG from "../../svg/MagnifyingGlassSVG";

/*============================================================
  SearchComponent: Search bar rendering component
==============================================================*/

export default function SearchComponent({ id, onChange }) {
  const [search, setSearch] = useState("");
  return (
    <label
      htmlFor={`search-product${id ? "-" + id : ""}`}
      className="search-product"
    >
      <MagnifyingGlassSVG />
      <input
        className="search-product-input"
        autoComplete="off"
        type="text"
        id={`search-product${id ? "-" + id : ""}`}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onChange(e.target.value);
        }}
        required
      />
      <p className="search-product-title">Search</p>
      <button
        className="search-product-cancel-button"
        onClick={() => {
          setSearch("");
          onChange("e.target.value");
        }}
      >
        <XMarkSVG />
      </button>
    </label>
  );
}
