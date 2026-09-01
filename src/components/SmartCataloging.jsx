import React from "react";
import { useNavigate } from "react-router-dom";
import "./SmartCataloging.css";

function SmartCataloging() {
  const navigate = useNavigate()
  return (
    <div className="catalog-page">

      

  

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
       <h3>2. AI Analyzes</h3>

<div className="arrow">↓</div>

        

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

<div className="button-section">
  <button
    className="next-button"
    onClick={() => navigate("/grow-business")}
  >
    Next →
  </button>

 <button
  className="skip-btn"
  onClick={() => navigate("/artisan-login")}
>
  Skip
</button>
</div>

      </section>

     

    </div>
  );
}

export default SmartCataloging;