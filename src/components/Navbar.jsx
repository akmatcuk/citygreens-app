import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/citygreens-logo-transparent.png";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  // Show cart ONLY on shop pages
  const showCart = location.pathname.startsWith("/shop");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo-container">
        <Link to="/">
          <img src={logo} alt="City Greens Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/shop" className="navbar-link">Shop</Link>
        <Link to="/learn" className="navbar-link">Learn</Link>

        {/* CART ICON — ONLY ON SHOP PAGES */}
        {showCart && (
          <Link
            to="/shop/cart"
            className="navbar-cart-icon"
            style={{ fontSize: "36px", color: "#0b3d2e" }}
          >
            🛒 {cart.length}
          </Link>
        )}
      </div>
    </nav>
  );
}
