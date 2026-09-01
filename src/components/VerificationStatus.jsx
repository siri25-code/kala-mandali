import React from "react";
import "./VerificationStatus.css";

function VerificationStatus({ onBack }) {
  return (
    <div className="verification-page">

      {/* HEADER */}
      <header className="verification-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>

        <h1>Verification Status</h1>

        <div className="header-actions">
          <button className="language-btn">
            English⌄
          </button>

          <button className="sound-btn">
            🔊
          </button>
        </div>
      </header>


      {/* VERIFIED STATUS */}
      <section className="verified-banner">
        <div className="verified-check">
          ✓
        </div>

        <div>
          <h2>Verified Artisan</h2>
          <p>Your profile has been verified.</p>
          <p>Thank you!</p>
        </div>
      </section>


      {/* ARTISAN DETAILS */}
      <section className="details-card">

        <div className="detail">
          <label>Name</label>
          <div className="detail-value">
            <span>Lakshmi Devi</span>
            <button>🎙</button>
          </div>
        </div>

        <div className="detail">
          <label>Age</label>
          <div className="detail-value">
            <span>32</span>
            <button>🎙</button>
          </div>
        </div>

        <div className="detail">
          <label>Category</label>
          <div className="detail-value">
            <span>Pottery</span>
            <button>🎙</button>
          </div>
        </div>

        <div className="detail">
          <label>Address</label>
          <div className="detail-value">
            <span>Ramgundam, Telangana</span>
            <button>🎙</button>
          </div>
        </div>

        <div className="detail">
          <label>Experience (in years)</label>
          <div className="detail-value">
            <span>10 Years</span>
            <button>🎙</button>
          </div>
        </div>

        <div className="detail about-detail">
          <label>About Your Work</label>

          <div className="about-content">
            <span>
              I create handmade pottery items
              like pots, vases, diyas and more.
            </span>

            <button>🎙</button>
          </div>
        </div>

      </section>


      {/* PHOTOS */}
      <section className="photos-section">

        <h3>Photos of Your Work</h3>

        <div className="photos-row">

          <div className="photo-box">
            <img
              src="/images/pottery1.jpg"
              alt="Pottery work"
            />
          </div>

          <div className="photo-box">
            <img
              src="/images/pottery2.jpg"
              alt="Pottery work"
            />
          </div>

          <div className="photo-box">
            <img
              src="/images/pottery3.jpg"
              alt="Pottery work"
            />
          </div>

        </div>

      </section>


      {/* WHOLESALE OPTION */}
      <section className="wholesale-card">

        <div className="wholesale-text">
          <h3>Do you want to sell wholesale?</h3>

          <div className="wholesale-option">
            <div className="checkbox checked">
              ✓
            </div>

            <span>Yes, I want to sell wholesale</span>
          </div>
        </div>

      </section>


      {/* VERIFIED MESSAGE */}
      <section className="bottom-verified-message">
        <div className="small-shield">
          ✓
        </div>

        <span>
          Your profile is verified and will always remain verified.
        </span>
      </section>


      {/* BOTTOM NAVIGATION */}
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
  );
}

export default VerificationStatus;