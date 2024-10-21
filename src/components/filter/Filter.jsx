import { assetsPath } from "../../utils/utils";
import "./Filter.css";

/**
 * Card created to show the items sold by the company.
 *
 * @param {object} props object
 * @param {number} props.idInput to set a unique id to the input, using the unique id of the item
 * @param {string} props.name product name.
 * @param {number} props.price product price.
 * @returns {JSX.Element} returns the rendered card component.
 */

export default function Filter(props) {
  return (
    <div className="filter">
      <img
        className="filter-img"
        width={18}
        src={assetsPath(`./${props.path}`)}
        alt="arrow-white-up"
      />
      <div className="filter-info">
        <span className="filter-name">{props.name}</span>
        <span className="filter-data">{props.data}</span>
      </div>
      <img
        className="filter-arrow"
        width={12}
        src={assetsPath(`./icons/arrow-white.svg`)}
        alt="arrow-white-up"
      />
    </div>
  );
}
