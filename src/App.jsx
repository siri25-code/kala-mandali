function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#F8F1E7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#8B4513",
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        కళా మండలి
      </h1>

      <h2
        style={{
          color: "#5C4033",
        }}
      >
        Kala Mandali
      </h2>

      <p
        style={{
          maxWidth: "300px",
          color: "#555",
          marginTop: "20px",
        }}
      >
        Empowering artisans and connecting them directly with buyers.
      </p>

      <button
        style={{
          marginTop: "30px",
          background: "#A0522D",
          color: "white",
          border: "none",
          padding: "12px 30px",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;