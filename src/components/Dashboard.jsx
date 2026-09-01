import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [artisanName, setArtisanName] = useState("");

useEffect(() => {
  const savedName = localStorage.getItem("artisanName");
  if (savedName) {
    setArtisanName(savedName);
  }
}, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* =========================
          SIDE MENU
      ========================= */}

      {menuOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="sidebar-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <aside className="sidebar">

            {/* Close button */}
            <button
              className="close-sidebar"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            

            <h2>Kala Mandali</h2>

            <p className="sidebar-tagline">
              ❖ Our Art.. Our Pride ❖
            </p>

            {/* Profile */}
            <div className="sidebar-profile">

    
              <div className="profile-info">
  <h3>{artisanName}</h3>
  <p>Artisan</p>
</div>


                <span className="verified">
                  ✓ &nbsp; Verified Artisan
                </span>
              </div>

          

            <div className="sidebar-divider"></div>

            {/* Verification */}
            <div className="sidebar-item">

              <span className="sidebar-icon">
                🛡️
              </span>

              <div className="sidebar-item-text">
                <h4>Verification Status</h4>

                <p>
                  Check your verification
                  <br />
                  and badge status
                </p>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

            {/* Growth */}
            <div className="sidebar-item">

              <span className="sidebar-icon">
                📈
              </span>

              <div className="sidebar-item-text">
                <h4>Growth Centre</h4>

                <p>
                  See your growth, statistics
                  <br />
                  and AI suggestions
                </p>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

            {/* Voice */}
            <div className="sidebar-item">

              <span className="sidebar-icon">
                🎙️
              </span>

              <div className="sidebar-item-text">
                <h4>Voice Assistance</h4>

                <p>
                  Get help using voice
                  <br />
                  in your language
                </p>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

            {/* Language */}
            <div className="sidebar-item">

              <span className="sidebar-icon">
                🌐
              </span>

              <div className="sidebar-item-text">
                <h4>Language</h4>

                <p>
                  Change app language
                </p>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

            <div className="sidebar-divider"></div>

            {/* Logout */}
            <div className="sidebar-item logout">

              <span className="sidebar-icon">
                ↪
              </span>

              <div className="sidebar-item-text">
                <h4>Logout</h4>

                <p>
                  Sign out from your account
                </p>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

          

          </aside>
        </>
      )}

      {/* =========================
          HEADER
      ========================= */}

      <header className="dashboard-header">

        <div className="header-left">

          {/* Menu */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Brand */}
          <div className="brand">

           

            <div>
              <h1>Kala Mandali</h1>

              <p>
                Our Art.. Our Pride
              </p>
            </div>

          </div>

        </div>

        {/* Header buttons */}
        <div className="header-actions">

          <button className="language-btn">
            English⌄
          </button>

          <button className="sound-btn">
            🔊
          </button>

        </div>

      </header>


      {/* =========================
          WELCOME SECTION
      ========================= */}

      <section className="welcome">

        <h2>
        Welcome, {artisanName} 👋
        </h2>

        <p>
          Let's grow your art and bring it to the world.
        </p>


      </section>


      {/* =========================
          DASHBOARD CARDS
      ========================= */}

      <main className="dashboard-content">

        {/* ADD PRODUCT */}

        <div className="dashboard-card add-product">

          <div className="card-text">

            <h3>
              Add Product
            </h3>

            <p>
              Add your beautiful creations
              <br />
              with AI help
            </p>

           <button
  className="green-btn"
  onClick={() => navigate("/add-product")}
>
  Add Now
  <span>→</span>
</button>

          </div>

          <div className="card-image">
            🏺
          </div>

        </div>


        {/* KALA BALANCE */}

        <div className="dashboard-card balance">

          <div className="card-text">

            <h3>
              Kala Balance
            </h3>

            <p>
              Available Balance
            </p>

            <div className="balance-amount">
              ₹8,250.00
            </div>

            <button className="gold-btn">
              View Balance
              <span>→</span>
            </button>

          </div>

          <div className="card-image">
            👛
          </div>

        </div>


        {/* ACTIVE ORDERS */}

        <div className="dashboard-card orders">

          <div className="card-text">

            <h3>
              Active Orders
            </h3>

            <p>
              Track and manage your
              <br />
              current orders
            </p>

            <button className="purple-btn">
              View Orders
              <span>→</span>
            </button>

          </div>

          <div className="card-image">
            📦
          </div>

        </div>


        {/* UPCOMING EXHIBITIONS */}

        <div className="dashboard-card exhibitions">

          <div className="card-text">

            <h3>
              Upcoming Exhibitions
            </h3>

            <p>
              Find and register for
              <br />
              government exhibitions
              <br />
              and fairs
            </p>

            <button className="red-btn">
              View Exhibitions
              <span>→</span>
            </button>

          </div>

          <div className="card-image">
            🏛️
          </div>

        </div>

      </main>


      {/* =========================
          BOTTOM NAVIGATION
      ========================= */}

      <nav className="bottom-nav">

        <button className="nav-item active">

          <span>
            🏠
          </span>

          <small>
            Dashboard
          </small>

        </button>


        <button className="nav-item">

          <span>
            ⊕
          </span>

          <small>
            Add Product
          </small>

        </button>


        <button className="nav-item">

          <span>
            📦
          </span>

          <small>
            Orders
          </small>

        </button>


        <button className="nav-item">

          <span>
            ♙
          </span>

          <small>
            Profile
          </small>

        </button>

      </nav>

    </div>
  );
};

export default Dashboard;