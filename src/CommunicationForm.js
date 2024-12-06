import React from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';

const communicationQuestions = [
  {
    section: "A2a",
    question:
      "Does your child speak normally for his/her age? If not, can they communicate using gestures (e.g., pointing, nodding)?",
    observation:
      "Use of age-appropriate language and spontaneous use of gestures.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2b (i)",
    question: "Does your child initiate a conversation with you?",
    observation: "Quality of child's conversation with parents or yourself.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2b (ii)",
    question:
      "For children aged 4 years or more: Can you have conversation with your child during which he/she not only answers your questions, but also adds something new to continue the conversation? ",
    observation: "Quality of child’s conversation with parents or yourself ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2c (i)",
    question:
      "Does your child usually repeat words or phrases regardless of meaning (in part or whole) that he/she has heard?   ",
    observation: "Immediate echolalia (words or phrases).",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2c (ii)",
    question:
      "Does he/she incessantly repeat things/T.V serial dialogue regardless of meaning/ context, whatever he/she has heard later on?     ",
    observation: "Delayed echolalia.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2c (iii)",
    question:
      "For children aged 4 years or more: Does your child usually use “I for me” and “me for you” incorrectly?       ",
    observation: "Pronoun reversal ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2c (iv)",
    question:
      "For children aged 4 years or more: During conversation does your child often speak ‘out of context’ or irrelevantly?      ",
    observation: "Out-of-context speech and neologisms ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2c (v)",
    question:
      "For children aged 6 years or more: Does your child understand that somebody is making fun of him/her or can he/she understands jokes?     ",
    observation: "Child’s response to an age-appropriate joke  ",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A2d (i)",
    question:
      "Does your child participate in games  like “Pat-a-cake”, “Peek-a-boo”, “Ring-a-ring rose”, “Akkad bakkad bambe po”, “Posam paa”, “Chal chameli baag mein” and “Totaa ud-maina ud” etc.?        ",
     
    observation: "Quality of child’s play with toys or other objects Look for any form of variable  pretend play   ",
    responses: ["Yes", "No", "Unsure"],
  },
  // Add more questions here...
];

const CommunicationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/restricted');
  };

  const formStyle = {
    background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
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
          <h3 className="fw-bold mb-3" style={{ color: "#4F46E5" }}>Communication Assessment</h3>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Please evaluate the child's communication patterns.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {communicationQuestions.map((item, index) => (
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
              <span className="me-2">Continue to Restricted Interests Assessment</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunicationForm;
