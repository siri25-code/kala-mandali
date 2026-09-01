import React from "react";
import "./ActiveOrders.css";

const orders = [
  {
    id: "KM1234",
    date: "24 May 2025",
    status: "Processing",
    product: "Handcrafted Decorative Pot",
    quantity: 2,
    price: "₹1,250.00",
    delivery: "28 May 2025",
    icon: "🏺",
  },
  {
    id: "KM1220",
    date: "16 May 2025",
    status: "Shipped",
    product: "Traditional Handmade Basket",
    quantity: 1,
    price: "₹980.00",
    delivery: "25 May 2025",
    icon: "🧺",
  },
  {
    id: "KM1215",
    date: "12 May 2025",
    status: "Ready to Ship",
    product: "Handmade Terracotta Diyas",
    quantity: 10,
    price: "₹750.00",
    delivery: "23 May 2025",
    icon: "🪔",
  },
];

export default function ActiveOrders() {
  return (
    <div className="orders-page">

      {/* Header */}
      <header className="orders-header">
        <button className="menu-btn">☰</button>

        <div className="orders-brand">
          <div className="orders-logo">🏺</div>

          <div>
            <h2>Kala Mandali</h2>
            <p>Our Art.. Our Pride</p>
          </div>
        </div>

        <button className="language">English⌄</button>
        <button className="sound">🔊</button>
      </header>

      {/* Decorative border */}
      <div className="orders-border">
        ♧ ♡ ♧ ♡ ♧ ♡ ♧ ♡ ♧ ♡ ♧
      </div>

      {/* Main */}
      <main className="orders-main">

        <h1>Active Orders</h1>
        <p className="orders-subtitle">
          Track and manage your current orders
        </p>

        {/* Order Cards */}
        <div className="orders-list">

          {orders.map((order) => (
            <div className="order-card" key={order.id}>

              {/* Order top */}
              <div className="order-top">
                <div>
                  <h2>Order #{order.id}</h2>
                  <p>{order.date}</p>
                </div>

                <span
                  className={`status ${
                    order.status === "Processing"
                      ? "processing"
                      : order.status === "Shipped"
                      ? "shipped"
                      : "ready"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="divider"></div>

              {/* Product */}
              <div className="product-section">

                <div className="product-image">
                  {order.icon}
                </div>

                <div className="product-details">
                  <h3>{order.product}</h3>

                  <p>Quantity: {order.quantity}</p>

                  <strong>{order.price}</strong>
                </div>

              </div>

              {/* Delivery */}
              <div className="delivery-box">
                <span className="delivery-icon">📦</span>

                <div>
                  <p>Expected Delivery</p>
                  <strong>{order.delivery}</strong>
                </div>
              </div>

              {/* Track */}
              <button className="track-btn">
                Track Order <span>→</span>
              </button>

            </div>
          ))}

        </div>

      </main>

      {/* Bottom Navigation */}
      <nav className="orders-bottom-nav">

        <div>
          <span>⌂</span>
          <p>Home</p>
        </div>

        <div>
          <span>＋</span>
          <p>Add Product</p>
        </div>

        <div className="nav-active">
          <span>📦</span>
          <p>Orders</p>
        </div>

        <div>
          <span>♙</span>
          <p>Profile</p>
        </div>

      </nav>

    </div>
  );
}