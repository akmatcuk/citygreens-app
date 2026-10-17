import "./Home.css";
import { Link } from "react-router-dom";
import shopImg from "../assets/shopImg.jpg"; 
import learnImg from "../assets/learnImg.jpg"; 

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to City Greens Interact</h1>
          <p className="hero-subtitle">
            Explore, learn, and engage with
            sustainable farming in a whole new way.
          </p>

          <div className="hero-cta-row">
            {/* Explore Shop → /shop */}
            <Link to="/shop" className="primary-btn">
              Explore Shop
            </Link>

            {/* Start Learning → /learn (will exist soon) */}
            <Link to="/learn" className="secondary-btn">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE MODULES */}
      <section className="feature-modules">
        {/* SHOP MODULE */}
        <div className="module-card">
          <img src={shopImg} alt="Shop" className="module-img" />
          <h2 className="module-title">Shop</h2>
          <p className="module-desc">
            Support the mission with curated goods inspired by the farm.
          </p>
          <ul className="module-list">
            <li>Garden seedlings</li>
            <li>Fresh leafy produce</li>
            <li>City Greens merch</li>
            <li>Sustainable local goods</li>
          </ul>

          {/* Visit Shop → /shop */}
          <Link to="/shop" className="module-btn">
            Visit Shop
          </Link>
        </div>

        {/* LEARN MODULE */}
        <div className="module-card">
          <img src={learnImg} alt="Learn" className="module-img" />
          <h2 className="module-title">Learn</h2>
          <p className="module-desc">
            Interactive lessons and resources for students, families, and curious growers.
          </p>
          <ul className="module-list">
            <li>Hydroponics basics</li>
            <li>Plant care guides</li>
            <li>Mini quizzes & activities</li>
            <li>School-friendly modules</li>
          </ul>

          {/* Start Learning → /learn */}
          <Link to="/learn" className="module-btn">
            Start Learning
          </Link>
        </div>
      </section>

    </main>
  );
}
