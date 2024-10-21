import { assetsPath } from "../../utils/utils";
import "./Button.css";

/**
 * General button for the page, it can be modified through its parameters. It has predefined colors as
 * well as its default onclick event.
 *
 * @param {object} props object
 * @param {string} props.title button title
 * @param {string} props.path url from icon assets.
 * @param {number} props.bgcolor {1: transparent, 2: secondary, 3: third} change button background color.
 * @param {number} props.font {1: small } changes the font size and capitalizes it.
 * @param {boolean} props.isLeftImage position the image to the left.
 * @param {boolean} props.isNotification Enable the red dot for items added to the cart.
 * @param {boolean} props.isNotHover property that eliminates the hover effect.
 * @param {Function} props.onClick default button function.
 * @returns {JSX.Element} returns the rendered button component.
 */

export default function Button(props) {
  const bgColors = { 1: "bg-transparent", 2: "bg-secondary", 3: "bg-third" };
  const fonts = { 1: "font-small" };

  return (
    <div
      className={`button${props.bgcolor ? " " + bgColors[props.bgcolor] : ""}${
        props.isLeftImage ? " left-img" : ""
      }${props.isNotHover ? " no-hover" : ""}`}
      onClick={props.onClick}
    >
      <span
        className={`button-title${props.font ? " " + fonts[props.font] : ""}${
          props.isNotification ? " button-title-notification" : ""
        }`}
      >
        {props.title}
      </span>

      <div
        className={`${assetsPath(`./${props.path}`) ? "bg-img" : " hidden"}`}
      >
        <img
          className="button-image"
          src={assetsPath(`./${props.path}`)}
          alt={props.path}
        />
        <div className={`${props.isNotification ? "notification" : "hidden"}`}>
          5
        </div>
      </div>
    </div>
  );
}
