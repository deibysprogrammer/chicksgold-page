import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import NavBarComponent from "./components/navBar/NavBarComponent";
import { CartProvider } from "./helpers/CartContext";
import ItemPage from "./pages/ItemPage/ItemPage";

export default function App() {
  return (
    <div className="container">
      <CartProvider>
        <NavBarComponent />
        <ItemPage />
        <FooterComponent />
      </CartProvider>
    </div>
  );
}
