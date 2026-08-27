import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";

import SmartCataloging from "./components/SmartCataloging";
import GrowBusiness from "./components/growbusiness";
import RoleSelection from "./components/RoleSelection";
import AL from "./components/al";
function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="phone-screen">
        <img src={logo} alt="Kala Mandali" className="logo" />

        <h1 className="title">Kala Mandali</h1>

        <p className="subtitle">
          Celebrating Culture, Creativity
          <br />
          and Community
        </p>

        <button
          className="next-btn"
          onClick={() => navigate("/roles")}
        >
          Next →
        </button>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/smart-catalogue" element={<SmartCataloging />} />
        <Route path="/grow-business" element={<GrowBusiness />} />
      <Route path="/roles" element={<RoleSelection />} />
      <Route path="/artisan-login" element={<AL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;