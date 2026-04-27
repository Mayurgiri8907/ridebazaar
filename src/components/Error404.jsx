import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.text}>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div style={styles.actions}>
          <button style={styles.primaryBtn} onClick={() => navigate("/")}>
            Go Home
          </button>
          <button style={styles.secondaryBtn} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    maxWidth: "400px",
    width: "90%",
  },
  code: {
    fontSize: "6rem",
    margin: 0,
    color: "#38bdf8",
    textShadow: "0 0 20px rgba(56,189,248,0.5)",
  },
  title: {
    margin: "10px 0",
    color: "#fff",
  },
  text: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "25px",
  },
  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  primaryBtn: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: "bold",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #38bdf8",
    background: "transparent",
    color: "#38bdf8",
    cursor: "pointer",
  },
};

export default Error404;