import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const questions = [
  {
    section: "A1a (i)",
    question:
      "For children aged less than 4 years: Does your child usually enjoy being taken in the lap or hugged? For children aged 4 years or more: Did they enjoy being taken in the lap as a baby?",
    observation:
      "Response to being touched or cuddled by parent (enjoys/tolerates/squirms/stiffens/gets upset).",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1a (ii)",
    question:
      "Does your child usually make eye contact with you or other people? E.g., While playing, asking for things, talking to you.",
    observation: "Quality of eye contact.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1a (iii)",
    question:
      "Does your child usually use various gestures appropriately during social interactions? E.g., Namaste, Salaam, waving bye-bye, hello, touching feet, etc.",
    observation:
      "Use of these gestures in response to greeting and while departing.",
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1a (iv)",
    question:
      "Does your child usually show appropriate facial expressions according to the situation? E.g. being happy, sad, afraid etc.",
    observation: `Appropriateness of facial expressions while interacting with parents, with you (stranger), while playing, when given toy/favorite food or when scolded.`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1b (i)",
    question:
      "Does your child usually enjoy the company of other children?",
    observation: `Child’s interaction with other children`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1b (ii)",
    question:
      "For children aged 4 years or more: Does your child have friends of his/her age (In school and neighbor-hood) with whom he/she loves to chat, share food or play together?",
    observation: `Quality of child’s interaction with other children of his/her age`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1b (iii)",
    question: `For children aged 4 years or more: Does your child play mostly with children who are much older or much younger than him/her?`,
    observation: `Quality of child’s interaction with other children `,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1c (i)",
    question: `For children aged less than 4 years: Does/did your child ever point with his/her index finger to bring your attention to show the things that interest him/her? E.g. kite, plane flying in the sky, cow/dog on the road etc.`,
    observation: `Observe how the child draws attention toward a toy/object of interest; Look for coordinated pointing`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1c (ii)",
    question: `For children aged 4 years or more, and are able to speak: Does your child talk to you about things he/she likes or has achieved without being asked about them?`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1d (i)",
    question: `Does your child usually prefer to play alone and gets irritated/moves away when his/her sibs or other kids try to play with him/her?`,
    observation: `Quality of play activity in a group of children or with siblings `,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1d (ii)",
    question: `Does your child play games involving turn taking or rule based with other children properly? E.g. Cricket, Hide and seek/I-spy, Ludo, Stapoo, Ring-a- ring roses etc.`,
    observation: `Quality of child’s involvement in rule-based games or games involving taking turns  `,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1d (iii)",
    question: `Does your child usually share his/her happiness with you or come to you for comfort when hurt or upset? `,
    observation: `Sharing happiness or distress with the parents`,
    responses: ["Yes", "No", "Unsure"],
  },
  {
    section: "A1d (iv)",
    question: `For children aged 4 years or more: Does your child usually share your happiness or try to comfort you when you are upset / sad? `,
    observation: `Sharing of parent’s happiness or distress by the child   `,
    responses: ["Yes", "No", "Unsure"],
  },
  // Add more questions here...
];

const WebForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/communication');
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
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    }
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
    "&:hover": {
      backgroundColor: "#4338CA",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(79, 70, 229, 0.4)",
    }
  };

  return (
    <div style={formStyle}>
      <div style={cardStyle}>
        <div className="text-center mb-5">
          <h2 className="text-primary fw-bold mb-2" style={{ fontSize: "1.5rem", color: "#4F46E5" }}>
            SECTION - A
          </h2>
          <h3 className="fw-bold mb-3" style={{ color: "#4F46E5" }}>Social Interaction Assessment</h3>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Please answer the following questions based on your observations of the child.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {questions.map((item, index) => (
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
              <span className="me-2">Continue to Communication Assessment</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebForm;
