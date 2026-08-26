import React from "react";
import "./SmartCataloging.css";

function SmartCataloging() {
  return (
    <div className="catalog-page">

      {/* Top decorative border */}
      <div className="top-border">
        ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
      </div>

      {/* Logo */}
      <div className="brand">
        <div className="brand-logo">🏺</div>

        <h1>Kala Mandali</h1>

        <p>✦ Our Art.. Our Pride ✦</p>

        <div className="small-decoration">
          ─── ◇ ───
        </div>
      </div>

      {/* Heading */}
      <section className="catalog-content">

        <h2>
          Create Listings
          <br />
          in Seconds
        </h2>

        <p className="description">
          Upload a photo and let AI generate
          <br />
          titles, descriptions, categories,
          <br />
          and tags automatically.
        </p>

        {/* Step 1 */}
        <div className="basket-section">

          <div className="basket-image-box">
            <img
              src="/images/bamboo-basket.png"
              alt="Handwoven Bamboo Basket"
            />
          </div>

          <h3>1. Upload Photo</h3>

          <div className="arrow">↓</div>

        </div>

        {/* Step 2 */}
        <div className="ai-section">

          <div className="ai-circle">
            <span>✿</span>
            <strong>AI</strong>
          </div>

          <h3>2. AI Analyzes</h3>

          <div className="arrow">↓</div>

        </div>

        {/* Product result */}
        <div className="product-card">

          <img
            src="/images/bamboo-basket.png"
            alt="Handwoven Bamboo Bag"
          />

          <div className="product-info">

            <h3>Handwoven Bamboo Bag</h3>

            <p>Eco-friendly handwoven bamboo bag.</p>

            <p>Category: Bags</p>

            <p>Material: Bamboo</p>

            <p>Price Range: ₹600 – ₹800</p>

          </div>

        </div>

        {/* Step 3 */}
        <h3 className="ready-text">
          3. Ready to Publish
        </h3>

        {/* Dots */}
        <div className="dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>

        {/* Next button */}
        <button className="next-button">
          <span>Next</span>
          <span className="next-arrow">→</span>
        </button>

        {/* Skip */}
        <button className="skip-button">
          Skip
        </button>

      </section>

      {/* Bottom folk art */}
      <div className="folk-art">
        ♙ ♟ ♙  🐘  ♙ ♟ ♙  🌳  ♙ ♟ ♙  🐎  ♙ ♟ ♙
      </div>

      <div className="bottom-border">
        ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
      </div>

    </div>
  );
}

export default SmartCataloging;