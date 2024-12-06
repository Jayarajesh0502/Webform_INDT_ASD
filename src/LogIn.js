import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login validation
    navigate("/personal-info");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0000FF, #1E90FF)",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "#333",
          }}
        >
          Log In
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Welcome back! Please log in to your account.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email/Username Field */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
            >
              Practitioner ID
            </label>
            <input
              type="text"
              placeholder="Enter Practitioner ID"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "14px",
                backgroundColor: "#f9f9f9",
              }}
              required
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "14px",
                backgroundColor: "#f9f9f9",
              }}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <a href="#!" style={{ color: "#6C63FF", textDecoration: "none" }}>
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#6C63FF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </form>

        {/* Register Link */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ color: "#666" }}>
            New User?{" "}
            <a href="/register" style={{ color: "#6C63FF", textDecoration: "none" }}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
