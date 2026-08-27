import "./RoleSelection.css";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <div className="role-screen">

        <h1 className="role-title">
          Join Kala Mandali
        </h1>

        <p className="role-subtitle">
          Choose a role to get started
        </p>

        {/* Artisan Card */}
        <div
          className="role-card artisan-card"
          onClick={() => navigate("/smart-catalogue")}
        >
          <div className="role-content">
            <div>
              <h2>I am an</h2>
              <h1>Artisan</h1>
              <p>
                Sell your handmade products and
                grow your business
              </p>
            </div>

            <img
              src="/images/artisan.png"
              alt="Artisan"
              className="role-image"
            />
          </div>
        </div>

        {/* Buyer Card */}
        <div
          className="role-card buyer-card"
          onClick={() => alert("Buyer Login Page")}
        >
          <div className="role-content">
            <div>
              <h2>I am a</h2>
              <h1>Buyer</h1>
              <p>
                Discover unique handmade
                products from artisans
              </p>
            </div>

            <img
              src="/images/buyer.png"
              alt="Buyer"
              className="role-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default RoleSelection;