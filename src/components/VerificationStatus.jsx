import React, { useState } from "react";
import "./VerificationStatus.css";

function VerificationStatus() {

  // -----------------------------
  // FORM DATA
  // -----------------------------

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    category: "",
    address: "",
    experience: "",
    aboutWork: "",
    wholesale: false
  });

  // -----------------------------
  // VERIFICATION STATE
  // -----------------------------

  const [verified, setVerified] = useState(false);

  // -----------------------------
  // HANDLE INPUT CHANGES
  // -----------------------------

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // -----------------------------
  // CHECK IF ALL REQUIRED FIELDS
  // ARE FILLED
  // -----------------------------

  const allDetailsFilled =
    formData.name.trim() !== "" &&
    formData.age.trim() !== "" &&
    formData.category.trim() !== "" &&
    formData.address.trim() !== "" &&
    formData.experience.trim() !== "" &&
    formData.aboutWork.trim() !== "";

  // -----------------------------
  // VERIFY PROFILE
  // -----------------------------

  const handleVerify = () => {

    if (!allDetailsFilled) {
      alert("Please enter all details before verification.");
      return;
    }

    setVerified(true);
  };

  // -----------------------------
  // EDIT AFTER VERIFICATION
  // -----------------------------

  const handleEdit = () => {
    setVerified(false);
  };

  return (
    <div className="verification-page">

      <div className="verification-mobile">

        {/* =========================
            HEADER
        ========================= */}

        <header className="verification-header">

          <button className="back-button">
            ←
          </button>

          <h1>Verification Status</h1>

          <div className="header-right">

            <button className="language-button">
              English⌄
            </button>

            <button className="header-sound">
              🔊
            </button>

          </div>

        </header>


        {/* =========================
            VERIFICATION STATUS
        ========================= */}

        <section
          className={
            verified
              ? "status-card verified"
              : "status-card not-verified"
          }
        >

          <div className="status-icon">

            {verified ? "✓" : "!"}

          </div>

          <div className="status-text">

            <h2>
              {verified
                ? "Verified Artisan"
                : "Not Verified"}
            </h2>

            <p>
              {verified
                ? "Your profile has been successfully verified."
                : "Complete all your details and verify your profile."}
            </p>

          </div>

        </section>


        {/* =========================
            ARTISAN DETAILS
        ========================= */}

        <section className="details-card">

          <h2 className="section-heading">
            Artisan Details
          </h2>


          {/* NAME */}

          <div className="form-group">

            <label>
              Name <span>*</span>
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={verified}
              placeholder="Enter your name"
            />

          </div>


          {/* AGE */}

          <div className="form-group">

            <label>
              Age <span>*</span>
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              disabled={verified}
              placeholder="Enter your age"
            />

          </div>


          {/* CATEGORY */}

          <div className="form-group">

            <label>
              Category <span>*</span>
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={verified}
            >

              <option value="">
                Select category
              </option>

              <option value="Pottery">
                Pottery
              </option>

              <option value="Handloom">
                Handloom
              </option>

              <option value="Wood Craft">
                Wood Craft
              </option>

              <option value="Painting">
                Painting
              </option>

              <option value="Jewellery">
                Jewellery
              </option>

              <option value="Embroidery">
                Embroidery
              </option>

            </select>

          </div>


          {/* ADDRESS */}

          <div className="form-group">

            <label>
              Address <span>*</span>
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={verified}
              placeholder="Enter your address"
              rows="2"
            />

          </div>


          {/* EXPERIENCE */}

          <div className="form-group">

            <label>
              Experience (in years) <span>*</span>
            </label>

            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              disabled={verified}
              placeholder="Enter years of experience"
            />

          </div>


          {/* ABOUT WORK */}

          <div className="form-group">

            <label>
              About Your Work <span>*</span>
            </label>

            <textarea
              name="aboutWork"
              value={formData.aboutWork}
              onChange={handleChange}
              disabled={verified}
              placeholder="Tell us about your work"
              rows="4"
            />

          </div>


          {/* =========================
              WHOLESALE
          ========================= */}

          <div className="wholesale-section">

            <h3>
              Do you want to sell wholesale?
            </h3>

            <label className="wholesale-option">

              <input
                type="checkbox"
                name="wholesale"
                checked={formData.wholesale}
                onChange={handleChange}
                disabled={verified}
              />

              <span className="custom-checkbox">
                {formData.wholesale ? "✓" : ""}
              </span>

              <span>
                Yes, I want to sell wholesale
              </span>

            </label>

          </div>


          {/* =========================
              VERIFY BUTTON
          ========================= */}

          {!verified && (

            <button
              className={
                allDetailsFilled
                  ? "verify-button active"
                  : "verify-button disabled"
              }
              onClick={handleVerify}
            >

              ✓ Verify Profile

            </button>

          )}


          {/* =========================
              VERIFIED MESSAGE
          ========================= */}

          {verified && (

            <div className="verified-bottom">

              <div className="verified-small-icon">
                ✓
              </div>

              <div>
                <strong>
                  Profile Verified
                </strong>

                <p>
                  Your artisan profile is verified.
                </p>
              </div>

            </div>

          )}


          {/* EDIT BUTTON */}

          {verified && (

            <button
              className="edit-button"
              onClick={handleEdit}
            >
              Edit Details
            </button>

          )}

        </section>


        {/* =========================
            BOTTOM NAVIGATION
        ========================= */}

        <nav className="bottom-navigation">

          <div className="nav-item active">
            <span>⌂</span>
            <p>Dashboard</p>
          </div>

          <div className="nav-item">
            <span>⊕</span>
            <p>Add Product</p>
          </div>

          <div className="nav-item">
            <span>📦</span>
            <p>Active Orders</p>
          </div>

          <div className="nav-item">
            <span>🏛</span>
            <p>Exhibitions</p>
          </div>

        </nav>

      </div>

    </div>
  );
}

export default VerificationStatus;