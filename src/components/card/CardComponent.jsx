import { useState } from "react";
import { assetsPath, formatNumber } from "../../helpers/utils";
import ArrowFilledSVG from "../../svg/ArrowFilledSVG";
import CartSVG from "../../svg/CartSVG";
import "./CardComponent.css";

/*============================================================
  CardComponent: Card rendering component
==============================================================*/

export default function Card({ product, addOnClick }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <div className="card-head">
        <div className="product-status">
          {product.inStock ? (
            <div className="container-in-stock">
              <p className="in-stock">In stock</p>
            </div>
          ) : (
            ""
          )}
          {product.onSale ? (
            <div className="container-on-sale">
              <p className="on-sale">on sale</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <label htmlFor={`quantity-${product.id}`} className="product-quantity">
          <button
            className="product-quantity-button"
            onClick={() =>
              setQuantity(quantity > 1 ? parseInt(quantity) - 1 : quantity)
            }
          >
            -
          </button>
          <input
            id={`quantity-${product.id}`}
            className="product-quantity-input"
            autoComplete="off"
            value={quantity}
            onChange={(e) => {
              if (/^\d+$/.test(e.target.value)) {
                setQuantity(e.target.value);
              }
            }}
          />
          <button
            className="product-quantity-button"
            onClick={() => setQuantity(parseInt(quantity) + 1)}
          >
            +
          </button>
          <div className="arrows">
            <button
              className="arrow-filled arrow-filled-up-button"
              onClick={() => setQuantity(parseInt(quantity) + 1)}
            >
              <ArrowFilledSVG className="arrow-filled-up" />
            </button>
            <button
              className="arrow-filled arrow-filled-up-button"
              onClick={() =>
                setQuantity(quantity > 1 ? parseInt(quantity) - 1 : quantity)
              }
            >
              <ArrowFilledSVG />
            </button>
          </div>
        </label>
      </div>
      <div className="card-image">
        <img
          className="product-image"
          src={assetsPath(`./products/${product.imageUrl}`)}
          alt=""
        />
      </div>
      <div className="card-info">
        <div className="product">
          <p className="product-name">{product.productName}</p>
          <div className="container-product-game-image">
            <img
              className="product-game-image"
              src={assetsPath(`./products/${product.urlGame}`)}
              alt={"s"}
            />
          </div>
        </div>
        <div className="product-prices">
          <p className="product-price">${formatNumber(product.price)}</p>
          {product.oldPrice ? (
            <div className="container-product-old-price">
              <span className="deletion" />
              <p className="product-old-price">${formatNumber(product.oldPrice)}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="card-buttons">
        <button className="card-button button-details">Details</button>
        <button
          className="card-button button-add"
          onClick={() => addOnClick()}
        >
          Add
          <div className="container-cart-image">
            <CartSVG />
          </div>
        </button>
      </div>
    </div>
  );
}
