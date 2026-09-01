import React from "react";
import "./KalaBalance.css";

const transactions = [
  {
    icon: "💼",
    title: "Order Payment Received",
    sub: "Order #KM1234",
    amount: "+ ₹1,250.00",
    date: "24 May 2025",
    type: "green",
  },
  {
    icon: "🏛️",
    title: "Exhibition Payout",
    sub: "Hyderabad Haat",
    amount: "+ ₹3,500.00",
    date: "20 May 2025",
    type: "orange",
  },
  {
    icon: "🛡️",
    title: "Verification Bonus",
    sub: "Verified Artisan",
    amount: "+ ₹500.00",
    date: "18 May 2025",
    type: "purple",
  },
  {
    icon: "🛍️",
    title: "Order Payment",
    sub: "Order #KM1220",
    amount: "+ ₹980.00",
    date: "16 May 2025",
    type: "yellow",
  },
  {
    icon: "🏦",
    title: "Withdrawal to Bank",
    sub: "A/c ending 5678",
    amount: "- ₹2,000.00",
    date: "14 May 2025",
    type: "red",
  },
];

export default function KalaBalance() {
  return (
    <div className="balance-page">

      {/* Header */}
      <header className="balance-header">
        <button className="menu-btn">☰</button>

        <div className="brand">
          <div className="brand-logo">🏺</div>
          <div>
            <h2>Kala Mandali</h2>
            <p>Our Art.. Our Pride</p>
          </div>
        </div>

        <div className="header-actions">
          <button>English⌄</button>
          <button className="sound">🔊</button>
        </div>
      </header>

      {/* Decorative border */}
      <div className="art-border">
        ♧ ♡ ♧ ♡ ♧ ♡ ♧ ♡ ♧ ♡ ♧ ♡ ♧
      </div>

      <main>

        {/* Balance Card */}
        <section className="balance-card">
          <div>
            <p className="balance-title">Kala Balance</p>
            <h1>₹8,250.00</h1>
            <p className="available">Available Balance</p>
          </div>

          <div className="pot">🏺</div>
          <button className="card-sound">🔊</button>
        </section>

        {/* Buttons */}
        <div className="balance-actions">
          <button className="add-money">
            💼 <span>Add Money</span>
          </button>

          <button className="withdraw">
            ⇥ <span>Withdraw</span>
          </button>
        </div>

        {/* Transactions */}
        <section className="transactions">
          <div className="transaction-heading">
            <h2>Recent Transactions</h2>
            <button>View All</button>
          </div>

          {transactions.map((item, index) => (
            <div className="transaction" key={index}>

              <div className={`transaction-icon ${item.type}`}>
                {item.icon}
              </div>

              <div className="transaction-info">
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
              </div>

              <div className="transaction-right">
                <strong className={
                  item.amount.startsWith("-") ? "negative" : "positive"
                }>
                  {item.amount}
                </strong>
                <span>{item.date}</span>
              </div>

            </div>
          ))}
        </section>

        {/* Security */}
        <div className="security-box">
          <div className="security-icon">🔐</div>
          <div>
            <h3>Your transactions are safe with us!</h3>
            <p>100% Secure & Trusted</p>
          </div>
          <span>🔊</span>
        </div>

        {/* Help */}
        <div className="help-box">
          <div className="help-icon">🎧</div>
          <div>
            <h3>Need Help?</h3>
            <p>Contact our support team</p>
          </div>
          <span>›</span>
        </div>

      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">

        <div>
          <span>⌂</span>
          <p>Home</p>
        </div>

        <div>
          <span>＋</span>
          <p>Add Product</p>
        </div>

        <div className="active">
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