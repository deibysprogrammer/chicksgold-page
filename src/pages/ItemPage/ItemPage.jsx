import { useContext, useState } from "react";
import { assetsPath } from "../../helpers/utils";
import ArrowFilledSVG from "../../svg/ArrowFilledSVG";
import ControllerSVG from "../../svg/ControllerSVG";
import FeatherSVG from "../../svg/FeatherSVG";
import ItemBagSVG from "../../svg/ItemBagSVG";
import CardComponent from "../../components/card/CardComponent";
import SearchComponent from "../../components/search/SearchComponent";
import "./ItemPage.css";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { CartContext } from "../../helpers/CartContext";

/*============================================================
    ItemPage: A page dedicated to showcasing products for 
    sale, designed with intuitive navigation to enhance the 
    user experience.
==============================================================*/

export default function ItemPage() {
  const [search, setSearch] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const { setItemsCart } = useContext(CartContext);

  const isProductInCart = (productId) => {
    return productsInCart.some((item) => item.id === productId);
  };

  const addProduct = (product) => {
    if (!isProductInCart(product.id)) {
      const updatedCart = [...productsInCart, product];

      setProductsInCart(updatedCart);
      setItemsCart(updatedCart);
    }
  };

  return (
    <>
      <img
        className="background-img"
        src={assetsPath("./background-items.jpg")}
        alt="background"
      />
      <div className="container-main">
        <main>
          <h1>Buy Game Items</h1>
          <div className="container-filters">
            <div className="select-game">
              <ControllerSVG />
              <p className="select-game-title">Select a Game</p>
              <ArrowFilledSVG className="select-game-arrow" />
            </div>
            <SearchComponent
              id={"itemPage"}
              onChange={(search) => {
                setSearch(search);
              }}
            />
            <div className="filters">
              <div className="filter-price">
                <ItemBagSVG></ItemBagSVG>
                <div className="filter-info">
                  <p className="filter-title">Price</p>
                  <p className="filter-input">All</p>
                </div>
                <ArrowFilledSVG className="filter-arrow" />
              </div>
              <div className="filter-type">
                <FeatherSVG></FeatherSVG>
                <div className="filter-info">
                  <p className="filter-title">Item Type</p>
                  <p className="filter-type-info-input">All</p>
                </div>
                <ArrowFilledSVG className="filter-arrow" />
              </div>
            </div>
          </div>
          <div className="container-cards">
            <div className="cards-info">
              <p className="items">
                Showing {currentItems.length} - from {totalItems}
              </p>
              <div className="filter-sort">
                <FeatherSVG></FeatherSVG>
                <div className="filter-info">
                  <p className="filter-title">Sort By</p>
                  <p className="filter-type-info-input">Featured</p>
                </div>
                <ArrowFilledSVG className="filter-arrow" fill="#FFFFFF" />
              </div>
            </div>
            <div className="cards">
              {currentItems.map((product) => (
                <CardComponent
                  addOnClick={() => {
                    addProduct(product);
                  }}
                  product={product}
                  key={product.id}
                ></CardComponent>
              ))}
            </div>
            <PaginationComponent
              sendCurrentItems={(currentItems) => {
                setCurrentItems(currentItems);
              }}
              sendTotalItems={(totalItems) => {
                setTotalItems(totalItems);
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
