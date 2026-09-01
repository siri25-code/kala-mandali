import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./al.css";
import logo from "../assets/logo.png";

function ArtisanLogin() {

  const [showOtp, setShowOtp] = useState(false);
const navigate = useNavigate();

const [otpVerified, setOtpVerified] = useState(false);
const [name, setName] = useState("");
  return (
    <div className="login-page">

      <div className="login-card">


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
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

        <input
          type="tel"
          placeholder="Phone Number"
          className="login-input"
        />

       <button
  className="otp-btn"
  onClick={() => setShowOtp(true)}
>
  Send OTP
</button>
{showOtp && (
  <>
   <input
  type="text"
  placeholder="Enter OTP"
  className="login-input otp-input"
/>
   <button
  className="otp-btn"
  onClick={() => {
   setOtpVerified(true);

localStorage.setItem("artisanName", name);

setTimeout(() => {
  navigate("/Dashboard");
}, 3000);
  }}
>
  Verify OTP
</button>
{otpVerified && (
  <div className="success-message">
    <div className="tick">✅</div>
    OTP Verified Successfully
  </div>
)}
  </>
)}

        <p className="signup-text">
          New here? <span>Create Account</span>
        </p>

      </div>

    </div>
  );
}

export default ArtisanLogin;