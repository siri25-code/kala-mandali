import "./growbusiness.css";

function GrowBusiness({ onNext, onBack }) {
  return (
    <div className="grow-page">

      {/* Top decorative border */}
      <div className="grow-pattern">
        ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
      </div>

      {/* Logo */}
      <div className="grow-logo">
        <div className="grow-logo-icon">🏺</div>

        <h1>Kala Mandali</h1>

        <p>✦ Our Art.. Our Pride ✦</p>
      </div>

      {/* Heading */}
      <h2>
        Find Buyers &
        <br />
        Grow Your Business
      </h2>

      <p className="grow-subtitle">
        Get pricing suggestions, buyer
        <br />
        recommendations, festival demand
        <br />
        insights, and business guidance.
      </p>

      {/* Robot + Graph image */}
      <div className="grow-image-container">
        <img
          src="/images/grow-business.png"
          alt="AI powered business growth"
          className="grow-image"
        />
      </div>

      {/* AI Features */}

      <div className="grow-features">

        <div className="feature-card pricing">
          <div className="feature-icon">₹</div>

          <div>
            <h3>AI Pricing Assistant</h3>
            <p>
              Get the best price for your products
            </p>
          </div>
        </div>

        <div className="feature-card festival">
          <div className="feature-icon">✦</div>

          <div>
            <h3>Festival Demand Insights</h3>
            <p>
              Know what sells and when
            </p>
          </div>
        </div>

        <div className="feature-card buyers">
          <div className="feature-icon">♧</div>

          <div>
            <h3>Buyer Recommendations</h3>
            <p>
              Connect with the right buyers
            </p>
          </div>
        </div>

        <div className="feature-card mentor">
          <div className="feature-icon">✧</div>

          <div>
            <h3>AI Business Mentor</h3>
            <p>
              24×7 guidance for your business
            </p>
          </div>
        </div>

      </div>

      {/* Slide dots */}
      <div className="grow-dots">
        <span></span>
        <span></span>
        <span className="active"></span>
      </div>

      {/* Get Started */}
      <button
        className="grow-start-button"
        onClick={onNext}
      >
        Get Started
      </button>

      {/* Back */}
      <button
        className="grow-back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      {/* Bottom decoration */}
      <div className="grow-bottom-pattern">
        ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
      </div>

    </div>
  );
}

export default GrowBusiness;