import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const logout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="admin-sidebar">
      {/* spacing preserved, title removed */}

      <NavLink 
        to="/admin" 
        end 
        className="admin-link"
        >
        Home
        </NavLink>

      <NavLink to="/admin/inventory" className="admin-link">
        Inventory
      </NavLink>

      <NavLink to="/admin/deals" className="admin-link">
        Deals
      </NavLink>

      <NavLink to="/admin/pickup-dates" className="admin-link">
        Pickup Dates
      </NavLink>

      <NavLink to="/admin/orders" className="admin-link">
        Orders
      </NavLink>

      <NavLink to="/admin/learn-editor" className="admin-link">
        Learn Editor
      </NavLink>

      <NavLink to="/admin/settings" className="admin-link">
        Settings
      </NavLink>

      <button className="admin-sidebar-logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
