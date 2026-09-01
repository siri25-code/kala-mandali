import { LanguageProvider } from "./LanguageContext";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.css";

import SmartCataloging from "./components/SmartCataloging";
import GrowBusiness from "./components/growbusiness";
import RoleSelection from "./components/RoleSelection";
import AL from "./components/al";
import Dashboard from "./components/Dashboard";
import Addproduct from "./components/Addproduct";
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
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/smart-catalogue" element={<SmartCataloging />} />
          <Route path="/grow-business" element={<GrowBusiness />} />
          <Route path="/roles" element={<RoleSelection />} />
          <Route path="/artisan-login" element={<AL />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}


export default App;