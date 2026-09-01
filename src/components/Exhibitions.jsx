import React from "react";
import "./Exhibitions.css";

const exhibitions = [
  {
    name: "Hyderabad Haat",
    location: "Hyderabad, Telangana",
    date: "20–25 June 2025",
    status: "Registration Open",
  },
  {
    name: "Shilparamam Craft Festival",
    location: "Hyderabad, Telangana",
    date: "5–10 July 2025",
    status: "Registration Open",
  },
  {
    name: "National Handicrafts Exhibition",
    location: "Bengaluru, Karnataka",
    date: "15–20 August 2025",
    status: "Coming Soon",
  },
];

function Exhibitions() {
  return (
    <div className="exhibitions-page">

      {/* Header */}
      <div className="exhibitions-header">
        <button className="back-btn">←</button>

        <div>
          <h1>Upcoming Exhibitions</h1>
          <p>Find and register for exhibitions & fairs</p>
        </div>
      </div>

      {/* Search */}
      <div className="search-box">
        🔍
        <input
          type="text"
          placeholder="Search exhibitions..."
        />
      </div>

      {/* Exhibition Cards */}
      <div className="exhibition-list">

        {exhibitions.map((exhibition, index) => (
          <div className="exhibition-card" key={index}>

            <div className="exhibition-image">
              🏛️
            </div>

            <div className="exhibition-details">
              <h2>{exhibition.name}</h2>

              <p>📍 {exhibition.location}</p>

              <p>📅 {exhibition.date}</p>

              <span className="status">
                {exhibition.status}
              </span>

              <button className="register-btn">
                View Details →
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div>🏠<span>Dashboard</span></div>
        <div>＋<span>Add Product</span></div>
        <div>📦<span>Orders</span></div>
        <div>👤<span>Profile</span></div>
      </div>

    </div>
  );
}

export default Exhibitions;