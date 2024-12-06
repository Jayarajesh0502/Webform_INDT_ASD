import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';

const restrictedInterestQuestions = [
  {
    section: "A3a (i)",
    question: "Does your child have excessive interest in odd things/activities?",
    observation:
      "Any unusual interests inappropriate for the child’s age.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3a (ii)",
    question:
      "Does your child have excessive interest in typical things but the interest is so all encompassing that it interferes his/her activities? (Excluding T.V watching) ",

    observation: "Excessive and all-encompassing interest in activities that are typical for other child  his/her age ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3a (iii)",
    question:
      "Does your child like lining or stacking objects/toys excessively? (Excluding blocks) ",
    observation:
      "Excessive lining of objects or toys ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3b",
    question: "Does your child unreasonably insist on doing things in a particular way and/or become upset if there is any change in the daily routine? E.g., Taking exactly the same route to the school or market, insisting on food being served in the same pattern or sequence etc.",

    observation:
      "Child’s insistence on any unusual routines or rituals ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3c (i)",
    question: "Does your child keep on repeating any of the followings, like • flapping hands, • hand wringing, • toe-walking, • rocking or spinning, • making unusual finger or hand movements near his/her face? ",


    observation:
      "Any type of motor stereotypes, unusual finger/hand movements near face  ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3c (ii)",
    question: "Does your child prefer to play with a particular part of a toy/object rather than the whole toy/object?",
    observation: "Child's inappropriate fascination with movement",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A3d",
    question: "Does your child prefer to play with a particular part of a toy/object rather than the whole toy/object? E.g. wheels of a toy rather than the whole toy ",
    observation: "Quality of child’s play with different toys and objects",
    responses: ["Yes", "No", "Unsure"],
  },
  
  // Add more questions here...
];

const RestrictedInterestsForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/section-b');
  };

  const formStyle = {
    background: "linear-gradient(135deg, #0000FF, #1E90FF)",
    minHeight: "100vh",
    padding: "3rem 1rem",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2.5rem",
  };

  const questionCardStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const buttonStyle = {
    backgroundColor: "#4F46E5",
    color: "white",
    padding: "1rem 2.5rem",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    boxShadow: "0 4px 6px rgba(79, 70, 229, 0.3)",
    transition: "all 0.3s ease",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    padding: "0 1rem",
    color: "#4F46E5", // Blue color
  };

  const logoStyle = {
    height: "40px", // Adjust the size as needed
  };

  return (
    <div style={formStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <div>
            <p style={{ margin: 0 }}>
              Administered by: Dr John Doe
            </p>
            <p style={{ margin: 0 }}>
              Date: DD-MON-YYYY
            </p>
          </div>
          <div>
            <img
              src="src/assets/logo.png" // Replace with the actual path to your logo
              alt="SM for Practitioners"
              style={logoStyle}
            />
          </div>
        </div>

        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3" style={{ color: "#4F46E5" }}>Restricted Interests Assessment</h3>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Please evaluate the child's behavioral patterns and interests.
          </p>
        </div>

        <form className="p-4" onSubmit={handleSubmit}>
          {restrictedInterestQuestions.map((item, index) => (
            <div key={index} style={questionCardStyle} className="mb-4">
              <div className="p-3">
                <div className="d-flex align-items-start mb-3">
                  <span className="badge bg-primary me-3 p-2" style={{ minWidth: "80px" }}>
                    {item.section}
                  </span>
                  <h5 className="mb-0" style={{ color: "#1F2937", lineHeight: "1.5" }}>
                    {item.question}
                  </h5>
                </div>
                
                {item.observation && (
                  <div className="mb-3 ps-4">
                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                      <i className="bi bi-eye-fill me-2"></i>
                      <em>Observation:</em> {item.observation}
                    </p>
                  </div>
                )}

                <div className="mt-4 ps-4">
                  {item.responses.map((response, i) => (
                    <div className="form-check form-check-inline me-4" key={i}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`question_${index}`}
                        id={`question_${index}_${i}`}
                        value={response}
                        required
                        style={{ transform: "scale(1.2)" }}
                      />
                      <label
                        className="form-check-label ms-2"
                        htmlFor={`question_${index}_${i}`}
                        style={{ color: "#4B5563", fontSize: "1rem" }}
                      >
                        {response}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5 py-3"
              style={buttonStyle}
            >
              <span className="me-2">Complete Assessment</span>
              <i className="bi bi-check-circle-fill"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestrictedInterestsForm;
