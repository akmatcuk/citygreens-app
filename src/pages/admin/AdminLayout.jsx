import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

export default function AdminLayout() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
