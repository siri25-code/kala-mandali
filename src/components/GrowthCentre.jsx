import React from "react";
import "./GrowthCentre.css";

const GrowthCentre = () => {
  return (
    <div className="growth-page">
      {/* Mobile App Container */}
      <div className="mobile-screen">

        {/* Header */}
        <header className="growth-header">
          <button className="back-btn">←</button>

          <h1>Growth Centre</h1>

          <div className="header-actions">
            <button className="language-btn">
              English⌄
            </button>

            <button className="sound-btn">🔊</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="growth-content">

          {/* Overview Heading */}
          <div className="section-title">
            <span className="growth-icon">📊</span>
            <h2>Your Growth Overview</h2>
          </div>

          {/* Statistics Cards */}
          <div className="stats-container">

            {/* Profile Strength */}
            <div className="stat-card green-card">
              <button className="small-sound">🔊</button>

              <div className="stat-icon">⭐</div>

              <h3>Profile Strength</h3>

              <div className="stat-number">80%</div>

              <p>Complete</p>

              <button className="complete-btn">
                Complete
                <br />
                Verification
              </button>
            </div>

            {/* Products */}
            <div className="stat-card yellow-card">
              <button className="small-sound">🔊</button>

              <div className="stat-icon">📦</div>

              <h3>Products Added</h3>

              <div className="stat-number">12</div>

              <p>Products</p>
            </div>

            {/* Orders */}
            <div className="stat-card purple-card">
              <button className="small-sound">🔊</button>

              <div className="stat-icon">🛍️</div>

              <h3>Orders Received</h3>

              <div className="stat-number">25</div>

              <p>Orders</p>
            </div>

          </div>

          {/* Suggestions */}
          <section className="suggestions-card">

            <div className="suggestions-header">
              <div className="suggestions-title">
                <span>💡</span>
                <h2>Suggestions For You</h2>
              </div>

              <button className="sound-circle">🔊</button>
            </div>

            <div className="suggestion-item">
              <span className="bullet">•</span>
              <p>
                Add 2 more product photos to
                <br />
                get more orders.
              </p>
              <button className="item-sound">🔊</button>
            </div>

            <div className="suggestion-item">
              <span className="bullet">•</span>
              <p>
                Update product descriptions to
                <br />
                attract more buyers.
              </p>
              <button className="item-sound">🔊</button>
            </div>

            <div className="suggestion-item">
              <span className="bullet">•</span>
              <p>
                Add new products to increase
                <br />
                your visibility.
              </p>
              <button className="item-sound">🔊</button>
            </div>

            <div className="suggestion-item">
              <span className="bullet">•</span>
              <p>
                Keep your profile updated to
                <br />
                build trust with buyers.
              </p>
              <button className="item-sound">🔊</button>
            </div>

          </section>

          {/* Keep Growing */}
          <section className="message-card keep-growing">

            <div className="message-icon">📈</div>

            <div className="message-text">
              <h2>Keep Growing!</h2>

              <p>
                Regular updates and new products
                <br />
                help you get more orders and grow
                <br />
                your business.
              </p>
            </div>

            <div className="pottery">🏺</div>

          </section>

          {/* Doing Great */}
          <section className="message-card doing-great">

            <div className="message-icon trophy">🏆</div>

            <div className="message-text">
              <h2>You're Doing Great!</h2>

              <p>
                Keep it up! Your growth will inspire
                <br />
                many others.
              </p>
            </div>

            <button className="message-sound">🔊</button>

          </section>

        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">

          <div className="nav-item active">
            <span>⌂</span>
            <p>Dashboard</p>
          </div>

          <div className="nav-item">
            <span>⊕</span>
            <p>Add Product</p>
          </div>

          <div className="nav-item">
            <span>▣</span>
            <p>Active Orders</p>
          </div>

          <div className="nav-item">
            <span>♜</span>
            <p>Exhibitions</p>
          </div>

        </nav>

      </div>
    </div>
  );
};

export default GrowthCentre;