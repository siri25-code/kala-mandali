import "./al.css";
import logo from "../assets/logo.png";

function ArtisanLogin() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="top-border"></div>

        <img
          src={logo}
          alt="Kala Mandali"
          className="login-logo"
        />

        <h1 className="login-title">
          Welcome Artisan
        </h1>

        <p className="login-subtitle">
          Login to manage your products and grow your business
        </p>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="login-input"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="login-input"
        />

        <button className="otp-btn">
          Send OTP
        </button>

        <p className="signup-text">
          New here? <span>Create Account</span>
        </p>

      </div>

    </div>
  );
}

export default ArtisanLogin;