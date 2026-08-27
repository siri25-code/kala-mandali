import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Header */}
      <header className="dashboard-header">
        <div className="brand">
          <div className="logo-placeholder">🌺</div>
          <div>
            <h1>Kala Mandali</h1>
            <p>Our Art... Our Pride</p>
          </div>
        </div>

        <div className="header-actions">
          <button className="language-btn">English⌄</button>
          <button className="sound-btn">🔊</button>
        </div>
      </header>

      {/* Welcome */}
      <section className="welcome">
        <h2>Welcome, Lakshmi Devi 👋</h2>
        <p>Let's grow your art and bring it to the world.</p>

        <div className="art-pattern">
          🪔 🧑‍🎨 🪔 🧑‍🎨 🪔 🧑‍🎨 🪔 🧑‍🎨 🪔 🧑‍🎨 🪔
        </div>
      </section>

      {/* Cards */}
      <main className="dashboard-content">

        {/* Add Product */}
        <div className="dashboard-card add-product">
          <div className="card-text">
            <h3>Add Product</h3>
            <p>Add your beautiful creations<br />with AI help</p>

            <button className="green-btn">
              Add Now <span>→</span>
            </button>
          </div>

          <div className="card-image">🏺</div>
        </div>

        {/* Kala Balance */}
        <div className="dashboard-card balance">
          <div className="card-text">
            <h3>Kala Balance</h3>
            <p>Available Balance</p>

            <div className="balance-amount">₹8,250.00</div>

            <button className="gold-btn">
              View Balance <span>→</span>
            </button>
          </div>

          <div className="card-image">👛</div>
        </div>

        {/* Active Orders */}
        <div className="dashboard-card orders">
          <div className="card-text">
            <h3>Active Orders</h3>
            <p>Track and manage your<br />current orders</p>

            <button className="purple-btn">
              View Orders <span>→</span>
            </button>
          </div>

          <div className="card-image">📦</div>
        </div>

        {/* Exhibitions */}
        <div className="dashboard-card exhibitions">
          <div className="card-text">
            <h3>Upcoming Exhibitions</h3>
            <p>Find and register for<br />government exhibitions<br />and fairs</p>

            <button className="red-btn">
              View Exhibitions <span>→</span>
            </button>
          </div>

          <div className="card-image">🏛️</div>
        </div>

      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">

        <button className="nav-item active">
          <span>⌂</span>
          <small>Dashboard</small>
        </button>

        <button className="nav-item">
          <span>⊕</span>
          <small>Add Product</small>
        </button>

        <button className="nav-item">
          <span>📦</span>
          <small>Orders</small>
        </button>

        <button className="nav-item">
          <span>♙</span>
          <small>Profile</small>
        </button>

      </nav>

    </div>
  );
};

export default Dashboard;