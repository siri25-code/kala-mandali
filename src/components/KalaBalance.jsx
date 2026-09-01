import React from "react";
import "./KalaBalance.css";

function KalaBalance() {
  return (
    <div className="balance-page">

      {/* Header */}
      <header className="balance-header">
        <div className="brand">
          <div className="brand-logo">🎨</div>
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

      {/* Balance Card */}
      <section className="balance-card">
        <div>
          <h3>Kala Balance</h3>
          <h1>₹8,250.00</h1>
          <p>Available Balance</p>
        </div>

        <div className="pot-image">
          🏺
        </div>
      </section>

      {/* Buttons */}
      <div className="balance-actions">
        <button className="add-money">
          💰 &nbsp; Add Money
        </button>

        <button className="withdraw">
          ⇥ &nbsp; Withdraw
        </button>
      </div>

      {/* Transactions */}
      <div className="transaction-section">
        <div className="transaction-title">
          <h2>Recent Transactions</h2>
          <span>View All</span>
        </div>

        <Transaction
          icon="👛"
          title="Order Payment Received"
          subtitle="Order #KM1234"
          amount="+ ₹1,250.00"
          date="24 May 2025"
        />

        <Transaction
          icon="🏛️"
          title="Exhibition Payout"
          subtitle="Hyderabad Haat"
          amount="+ ₹3,500.00"
          date="20 May 2025"
        />

        <Transaction
          icon="🛡️"
          title="Verification Bonus"
          subtitle="Verified Artisan"
          amount="+ ₹500.00"
          date="18 May 2025"
        />

        <Transaction
          icon="🛍️"
          title="Order Payment"
          subtitle="Order #KM1220"
          amount="+ ₹980.00"
          date="16 May 2025"
        />

        <Transaction
          icon="🏦"
          title="Withdrawal to Bank"
          subtitle="A/c ending 5678"
          amount="- ₹2,000.00"
          date="14 May 2025"
          negative
        />
      </div>

      {/* Safety */}
      <div className="safe-box">
        🔐
        <div>
          <strong>Your transactions are safe with us!</strong>
          <p>100% Secure & Trusted</p>
        </div>
        <span>🔊</span>
      </div>

      {/* Help */}
      <div className="help-box">
        <span className="help-icon">🎧</span>
        <div>
          <strong>Need Help?</strong>
          <p>Contact our support team</p>
        </div>
        <span>›</span>
      </div>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <div>🏠<span>Home</span></div>
        <div>⊕<span>Add Product</span></div>
        <div>📦<span>Orders</span></div>
        <div>👤<span>Profile</span></div>
      </nav>

    </div>
  );
}

function Transaction({
  icon,
  title,
  subtitle,
  amount,
  date,
  negative
}) {
  return (
    <div className="transaction">
      <div className="transaction-icon">{icon}</div>

      <div className="transaction-info">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>

      <div className={`transaction-amount ${negative ? "negative" : ""}`}>
        <strong>{amount}</strong>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default KalaBalance;