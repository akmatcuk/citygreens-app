import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </Router>
);
