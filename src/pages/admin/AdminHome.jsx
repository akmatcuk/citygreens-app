import "./admin.css";

export default function AdminHome() {
  return (
    <div className="admin-home">
      <h1 className="admin-home-title">Welcome, Admin</h1>
      <p className="admin-home-subtitle">Here’s a quick overview of your system.</p>

      <div className="admin-home-cards">
        <div className="admin-card">
          <h2>Inventory Items</h2>
          <p>View and manage all products.</p>
        </div>

        <div className="admin-card">
          <h2>Orders</h2>
          <p>Track customer orders and pickups.</p>
        </div>

        <div className="admin-card">
          <h2>Learn Modules</h2>
          <p>Edit and update educational content.</p>
        </div>
      </div>
    </div>
  );
}
