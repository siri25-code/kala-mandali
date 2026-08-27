import "./growbusiness.css";
import { useNavigate } from "react-router-dom";

function GrowBusiness() {
  const navigate = useNavigate();

  return (
    <div className="grow-page">

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
        onClick={() => navigate("/artisan-login")}
      >
        Get Started
      </button>

    </div>
  );
}

export default GrowBusiness;