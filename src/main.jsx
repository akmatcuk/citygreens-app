import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./app.css";

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
