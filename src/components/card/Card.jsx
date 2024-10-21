import "./Card.css";
import { useState } from "react";
import Button from "../button/Button";
import { assetsPath } from "../../utils/utils";
import FullArrow from "../svg/FullArrow";

/**
 * Card created to show the items sold by the company.
 *
 * @param {object} props object
 * @param {number} props.idInput to set a unique id to the input, using the unique id of the item
 * @param {string} props.name product name.
 * @param {number} props.price product price.
 * @param {number} props.lastPrice latest product price.
 * @param {string} props.description product description.
 * @param {string} props.image product image.
 * @param {string} props.path product image path.
 * @param {string} props.imageIcon product image icon..
 * @param {string} props.pathIcon product image icon path.
 * @param {boolean} props.isOnSale indicates if the product is for sale.
 * @param {boolean} props.isInStock indicates if the product is in stock.
 * @returns {JSX.Element} returns the rendered card component.
 */

export default function Card(props) {
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <div className="card">
      <div className="card-head">
        <div className="product-status">
          <div className="on-sale">
            <div
              className={`${props.isOnSale ? "on-sale-point" : "hidden"}`}
            ></div>
            <span className={`${props.isOnSale ? "on-sale-text" : "hidden"}`}>
              On Sale
            </span>
          </div>
          <div className={`${props.isInStock ? "in-stock" : "hidden"}`}>
            <span className="in-stock-text">In stock</span>
          </div>
        </div>
        <label htmlFor={`quantity${props.idInput}`} className="quantity">
          <input
            id={`quantity${props.idInput}`}
            type="text"
            className="quantity-input"
            autoComplete="off"
            value={itemQuantity}
            onChange={(e) => {
              setItemQuantity(
                e.target.value !== "" && parseInt(e.target.value)
                  ? parseInt(e.target.value)
                  : ""
              );
            }}
          />
          <div className="change-quantity">
            <FullArrow
              className="arrow-up"
              onClick={() => {
                if (itemQuantity < 10000)
                  setItemQuantity(parseInt(itemQuantity) + 1);
              }}
            />
            <FullArrow
              className="arrow-down"
              onClick={() => {
                if (itemQuantity > 1)
                  setItemQuantity(parseInt(itemQuantity) - 1);
              }}
            />
          </div>
        </label>
      </div>
      <div className="card-img">
        <img
          className="item-img"
          width={50}
          src={assetsPath(`${props.path}`)}
          alt={props.image}
        />
      </div>
      <div className="card-info">
        <div className="x">
          <span className="item-name">{props.name}</span>
          <div className="game-content-img">
            <img
              className="game-img"
              width={36}
              height={14}
              src={assetsPath(props.pathIcon)}
              alt={props.imageIcon}
            />
          </div>
        </div>
        <div className="price-content">
          <span className="price">{props.price ? "$" + props.price : ""}</span>
          <span className="last-price">
            {props.lastPrice ? "$" + props.lastPrice : ""}
          </span>
        </div>
        <span className="description">{props.description}</span>
      </div>
      <div className="card-buttons">
        <Button title="Details" bgcolor={3} />
        <Button title="Add" bgcolor={2} path="icons/cart.svg" />
      </div>
    </div>
  );
}
