import React from "react";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/web-form");
  };

  const inputStyle = {
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "500",
    marginBottom: "8px",
    color: "rgba(255, 255, 255, 0.8)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6C63FF, #FF6584)",
        padding: "2rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "auto"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          padding: "2.5rem",
          margin: "auto",
          transform: "translateY(-2%)"
        }}
      >
        <div className="text-center mb-4">
          <h2 style={{ color: "#ffffff", fontWeight: "600", marginBottom: "10px" }}>
            Personal Information
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Please enter the child's details below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          {/* Child's Name */}
          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Child's Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter child's full name"
              style={inputStyle}
              required
            />
          </div>

          {/* Date of Birth and Age */}
          <div className="row" style={{ marginBottom: "24px" }}>
            <div className="col-md-6">
              <label style={labelStyle}>Date of Birth</label>
              <input
                type="date"
                className="form-control form-control-lg"
                style={inputStyle}
                required
              />
            </div>
            <div className="col-md-6">
              <label style={labelStyle}>Age</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Years and months"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Gender */}
          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Gender</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  required
                />
                <label className="form-check-label" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                />
                <label className="form-check-label" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Address */}
          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Address</label>
            <textarea
              className="form-control form-control-lg"
              rows="3"
              placeholder="Enter full address"
              style={inputStyle}
            ></textarea>
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              className="form-control form-control-lg"
              placeholder="Enter contact number"
              style={inputStyle}
            />
          </div>

          {/* Assessment Details */}
          <div className="row" style={{ marginBottom: "24px" }}>
            <div className="col-md-6">
              <label style={labelStyle}>Assessment Date</label>
              <input
                type="date"
                className="form-control form-control-lg"
                style={inputStyle}
              />
            </div>
            <div className="col-md-6">
              <label style={labelStyle}>Assessor's Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter assessor's name"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#6C63FF",
                fontWeight: "600",
                padding: "15px",
                borderRadius: "12px",
                fontSize: "16px",
              }}
            >
              Continue to Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
