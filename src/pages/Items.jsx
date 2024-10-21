import { useState } from "react";
import Card from "../components/card/Card";
import Filter from "../components/filter/Filter";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Search from "../components/search/Search";
import SelectGame from "../components/selectGame/SelectGame";
import { assetsPath } from "../utils/utils";
import "./Items.css";

export default function Items() {
  const [search, setSearch] = useState("");
  const items = [
    {
      id: 1,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "osrs",
      path: "./games/osrs.webp",
      imageIcon: "osrs-icon",
      pathIcon: "./games/osrs-icon.png",
      onSale: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "osrs",
      path: "./games/osrs.webp",
      imageIcon: "osrs-icon",
      pathIcon: "./games/osrs-icon.png",
      onSale: true,
      inStock: true,
    },
    {
      id: 3,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "osrs",
      path: "./games/osrs.webp",
      imageIcon: "osrs-icon",
      pathIcon: "./games/osrs-icon.png",
      onSale: true,
      inStock: true,
    },
    {
      id: 4,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "wow",
      path: "./games/wow.png",
      imageIcon: "wow-icon",
      pathIcon: "./games/wow-icon.svg",
      onSale: true,
      inStock: true,
    },
    {
      id: 5,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "wow",
      path: "./games/wow.png",
      imageIcon: "wow-icon",
      pathIcon: "./games/wow-icon.svg",
      onSale: true,
      inStock: true,
    },
    {
      id: 6,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "wow",
      path: "./games/wow.png",
      imageIcon: "wow-icon",
      pathIcon: "./games/wow-icon.svg",
      onSale: true,
      inStock: true,
    },
    {
      id: 7,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "l-8000-ginger",
      path: "./games/l-8000-ginger.jpg",
      imageIcon: "l-8000-ginger-icon",
      pathIcon: "./games/l-8000-ginger-icon.png",
      onSale: true,
      inStock: true,
    },
    {
      id: 8,
      name: "Blue Partyhat",
      price: 450,
      lastPrice: 550,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "l-8000-ginger",
      path: "./games/l-8000-ginger.jpg",
      imageIcon: "l-8000-ginger-icon",
      pathIcon: "./games/l-8000-ginger-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 9,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "l-8000-ginger",
      path: "./games/l-8000-ginger.jpg",
      imageIcon: "l-8000-ginger-icon",
      pathIcon: "./games/l-8000-ginger-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 10,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "f14-twintania",
      path: "./games/f14-twintania.png",
      imageIcon: "f14-twintania-icon",
      pathIcon: "./games/f14-twintania-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 11,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "f14-twintania",
      path: "./games/f14-twintania.png",
      imageIcon: "f14-twintania-icon",
      pathIcon: "./games/f14-twintania-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 12,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "f14-twintania",
      path: "./games/f14-twintania.png",
      imageIcon: "f14-twintania-icon",
      pathIcon: "./games/f14-twintania-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 13,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "your-bizarre adventure",
      path: "./games/your-bizarre adventure.jpg",
      imageIcon: "your-bizarre-adventure-icon",
      pathIcon: "./games/your-bizarre-adventure-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 14,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "your-bizarre adventure",
      path: "./games/your-bizarre adventure.jpg",
      imageIcon: "your-bizarre-adventure-icon",
      pathIcon: "./games/your-bizarre-adventure-icon.png",
      onSale: false,
      inStock: true,
    },
    {
      id: 15,
      name: "Blue Partyhat",
      price: null,
      lastPrice: null,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "your-bizarre adventure",
      path: "./games/your-bizarre adventure.jpg",
      imageIcon: "your-bizarre-adventure-icon",
      pathIcon: "./games/your-bizarre-adventure-icon.png",
      onSale: false,
      inStock: true,
    },
  ];
  return (
    <div>
      <Nav />
      <img
        className="background"
        src={assetsPath(`./background-default.jpg`)}
        alt="background-default"
      />
      <main className="main">
        <div className="articles">
          <h1 className="h1">Condimentum consectetur</h1>
          <div className="articles-filters">
            <div className="container-select-game">
              <SelectGame />
            </div>
            <Search
              id="games"
              onChange={(search) => {
                setSearch(search);
              }}
            />
            <div className="filters">
              <Filter name="Price" data="All" path="icons/item-bag.svg" />
              <Filter name="Item Type" data="All" path="icons/feather.svg" />
            </div>
          </div>
          <div className="content-cards">
            <div className="info-filter">
              <span className="show-cards">Showing 20 - from 125</span>
              <div className="filter-sort-by">
                <Filter
                  name="Sort By"
                  data="Featured"
                  path="icons/filter.svg"
                />
              </div>
            </div>
            <div className="cards">
              {items.map((item) => {
                return (
                  <Card
                    key={item.id}
                    idInput={item.id}
                    name={item.name}
                    price={item.price}
                    lastPrice={item.lastPrice}
                    description={item.description}
                    image={item.image}
                    path={item.path}
                    imageIcon={item.imageIcon}
                    pathIcon={item.pathIcon}
                    isOnSale={item.onSale}
                    isInStock={item.inStock}
                  />
                );
              })}
            </div>
            <div className="pagination">
              <a href="#goback" className="arrow">
                ❮
              </a>
              <div className="number-buttons">
                <a href="#1" className="number-button number-button-active">
                  1
                </a>
                <a href="#2" className="number-button">
                  2
                </a>
                <a href="#3" className="number-button">
                  3
                </a>
                <a href="#4" className="number-button">
                  4
                </a>
                <a href="#x" className="number-button no-hover">
                  ...
                </a>
                <a href="#11" className="number-button">
                  11
                </a>
              </div>
              <a href="go ahead" className="arrow">
                ❯
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
