import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Main pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Produce from "./pages/shop/Produce";
import Merch from "./pages/shop/Merch";
import Cart from "./pages/shop/Cart";

// Learn pages
import Learn from "./pages/learn/Learn";
import { learnModules } from "./data/learnData";
import GardeningBasics from "./pages/learn/modules/GardeningBasics";
import Composting from "./pages/learn/modules/Composting";
import Hydroponics from "./pages/learn/modules/Hydroponics";
import UrbanFarming from "./pages/learn/modules/UrbanFarming";
import WasteReduction from "./pages/learn/modules/WasteReduction";
import ResourceConservation from "./pages/learn/modules/ResourceConservation";

// Seedlings main page
import Seedlings from "./pages/shop/Seedlings";

// ⭐ Use VarietyPage directly for all seedling variety routes
import VarietyPage from "./pages/shop/seedlings/VarietyPage";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import Inventory from "./pages/admin/Inventory";
import Deals from "./pages/admin/Deals";
import PickupDates from "./pages/admin/PickupDates";
import Orders from "./pages/admin/Orders";
import LearnEditor from "./pages/admin/LearnEditor";
import Settings from "./pages/admin/Settings";
import AdminLogin from "./pages/admin/AdminLogin";

import "./App.css";

export default function App() {
  // Hidden admin shortcut: Shift + A
  useEffect(() => {
    const handler = (e) => {
      if (e.shiftKey && e.key === "A") {
        window.location.href = "/admin-login";
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<Cart />} />

        {/* Learn */}
        <Route path="/learn" element={<Learn learnModules={learnModules} />} />
        <Route path="/learn/gardening-basics" element={<GardeningBasics />} />
        <Route path="/learn/composting" element={<Composting />} />
        <Route path="/learn/hydroponics" element={<Hydroponics />} />
        <Route path="/learn/urban-farming" element={<UrbanFarming />} />
        <Route path="/learn/waste-reduction" element={<WasteReduction />} />
        <Route path="/learn/resource-conservation" element={<ResourceConservation />} />

        {/* Seedlings main */}
        <Route path="/shop/seedlings" element={<Seedlings />} />

        {/* LEAFY GREENS */}
        <Route
          path="/shop/seedlings/lettuce"
          element={<VarietyPage cropId="lettuce" title="Lettuce Varieties" />}
        />
        <Route
          path="/shop/seedlings/kale"
          element={<VarietyPage cropId="kale" title="Kale Varieties" />}
        />
        <Route
          path="/shop/seedlings/swiss-chard"
          element={<VarietyPage cropId="swiss-chard" title="Swiss Chard Varieties" />}
        />
        <Route
          path="/shop/seedlings/arugula"
          element={<VarietyPage cropId="arugula" title="Arugula Varieties" />}
        />

        {/* BRASSICAS */}
        <Route
          path="/shop/seedlings/broccoli"
          element={<VarietyPage cropId="broccoli" title="Broccoli Varieties" />}
        />
        <Route
          path="/shop/seedlings/cauliflower"
          element={<VarietyPage cropId="cauliflower" title="Cauliflower Varieties" />}
        />
        <Route
          path="/shop/seedlings/cabbage"
          element={<VarietyPage cropId="cabbage" title="Cabbage Varieties" />}
        />

        {/* ROOT VEGETABLES */}
        <Route
          path="/shop/seedlings/beets"
          element={<VarietyPage cropId="beets" title="Beet Varieties" />}
        />
        <Route
          path="/shop/seedlings/carrots"
          element={<VarietyPage cropId="carrots" title="Carrot Varieties" />}
        />
        <Route
          path="/shop/seedlings/turnips"
          element={<VarietyPage cropId="turnips" title="Turnip Varieties" />}
        />

        {/* FRUITING VEGETABLES */}
        <Route
          path="/shop/seedlings/eggplant"
          element={<VarietyPage cropId="eggplant" title="Eggplant Varieties" />}
        />
        <Route
          path="/shop/seedlings/peppers"
          element={<VarietyPage cropId="peppers" title="Pepper Varieties" />}
        />
        <Route
          path="/shop/seedlings/okra"
          element={<VarietyPage cropId="okra" title="Okra Varieties" />}
        />

        {/* VINING CROPS */}
        <Route
          path="/shop/seedlings/tomatoes"
          element={<VarietyPage cropId="tomatoes" title="Tomato Varieties" />}
        />
        <Route
          path="/shop/seedlings/cucumbers"
          element={<VarietyPage cropId="cucumbers" title="Cucumber Varieties" />}
        />
        <Route
          path="/shop/seedlings/beans"
          element={<VarietyPage cropId="beans" title="Bean Varieties" />}
        />
        <Route
          path="/shop/seedlings/peas"
          element={<VarietyPage cropId="peas" title="Pea Varieties" />}
        />
        <Route
          path="/shop/seedlings/squash"
          element={<VarietyPage cropId="squash" title="Squash Varieties" />}
        />
        <Route
          path="/shop/seedlings/zucchini"
          element={<VarietyPage cropId="zucchini" title="Zucchini Varieties" />}
        />
        <Route
          path="/shop/seedlings/watermelon"
          element={<VarietyPage cropId="watermelon" title="Watermelon Varieties" />}
        />

        {/* HERBS */}
        <Route
          path="/shop/seedlings/basil"
          element={<VarietyPage cropId="basil" title="Basil Varieties" />}
        />
        <Route
          path="/shop/seedlings/cilantro"
          element={<VarietyPage cropId="cilantro" title="Cilantro Varieties" />}
        />
        <Route
          path="/shop/seedlings/dill"
          element={<VarietyPage cropId="dill" title="Dill Varieties" />}
        />
        <Route
          path="/shop/seedlings/parsley"
          element={<VarietyPage cropId="parsley" title="Parsley Varieties" />}
        />
        <Route
          path="/shop/seedlings/chives"
          element={<VarietyPage cropId="chives" title="Chive Varieties" />}
        />

        {/* FLOWERS */}
        <Route
          path="/shop/seedlings/marigolds"
          element={<VarietyPage cropId="marigolds" title="Marigold Varieties" />}
        />
        <Route
          path="/shop/seedlings/zinnias"
          element={<VarietyPage cropId="zinnias" title="Zinnia Varieties" />}
        />

        {/* FRUIT CROPS */}
        <Route
          path="/shop/seedlings/strawberries"
          element={<VarietyPage cropId="strawberries" title="Strawberry Varieties" />}
        />

        {/* FIELD CROPS */}
        <Route
          path="/shop/seedlings/corn"
          element={<VarietyPage cropId="corn" title="Corn Varieties" />}
        />

        {/* Produce + Merch */}
        <Route path="/shop/produce" element={<Produce />} />
        <Route path="/shop/merch" element={<Merch />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="deals" element={<Deals />} />
          <Route path="pickup-dates" element={<PickupDates />} />
          <Route path="orders" element={<Orders />} />
          <Route path="learn-editor" element={<LearnEditor />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
