import React from "react";
import { useNavigate } from 'react-router-dom';

import './App.css';

const communicationQuestions = [
  {
    section: "(1)",
    question:
      "No. of criteria fulfilled in A1 of the section A (Social Interaction)",
        responses: ["Less than two ", "Two or more "],
  },
  {
    section: "(2)",
    question:
      "No. of criteria fulfilled in A2 of the section A (Communication)",
        responses: ["Nil ", "One or more "],
  },
  {
    section: "(3)",
    question:
      "No. of criteria fulfilled in A3 of the section A (Restricted Interests)",
        responses: ["Nil ", "One or more "],
  },
  {
    section: "(4)",
    question:
      "Interpretation of questionnaire (1 to 3)",
        responses: ["No ASD ( If response to 2 or more of 1 to 3 is “0”) ", "ASD present (If response to 1 is “1” and  response to either or both of 2 and 3 is “1”)  "],
  },
  {
    section: "(5)",
    question:
      "Total number of criteria fulfilled in A1, A2 and A3 together",
        responses: ["Less than 6 ", "Six or more "],
  },
  {
    section: "(6)",
    question:
      "Does / did your child have any of any of the following? A. Significant delay in development of language of the child? (Not spoken single words by 2 years and communicative phrases by 3 years B.Difficulty in using language in daily activities or during interaction C.Started participating in varieties of pretend play at a later age/Not started pretend play?)",
        responses: ["Yes ", "No "],
  },
  {
    section: "(7)",
    question:
      "Did your child have these symptoms before three years? ",
        responses: ["Yes/Do not know/ Not sure  ", "No "],
  },
  {
    section: "(8)",
    question:
      "Does the child fulfill all the following criteria for diagnosis of Rett’s Disorder?  A. Female Child B.Loss of purposeful hand skills between 5-30 months age and development of stereotyped hand wringing, hand washing or hand to mouthing movements  C.Loss of social engagement early in course during 9-29 months (although often social interaction develops later D.Severely impaired expressive and receptive language development with severe psychomotor retardation ) ",
        responses: ["Yes ", "No "],
  },
  {
    section: "(9)",
    question:
      "Does the child fulfill all the following criteria for diagnosis of Childhood Disintegrative Disorder?   A. Normal development till 2 years age, by the presence of age appropriate verbal and nonverbal communication, social relationships, play and adaptive behavior B. Development of social engagement between 2-3 years C. Development of purposeful hand skills between 3-5 years D. Development of language between 3-5 years E. Development of self-injurious behavior between 3-5 years F. Development of stereotyped hand movements between 5-30 months G. Development of psychomotor retardation between 3-5 years B.After 2 years of age, loss of previously acquired milestones (before age 10 years) in 2 or more of the following areas (Expressive/receptive language, Social skills/Adaptive behavior , Bowel or bladder control, Play skills, motor skills) D.Abnormalities of functioning in at least two of the following areas: (Qualitative impairment in social interaction, Qualitative impairment in communication  Restricted, repetitive and stereotyped patterns of behavior )  ",
        responses: ["Yes ", "No "],
  },
  {
    section: "(10)",
    question:
      "There is no clinically significant delay in any of the following? A.Language development (single words used by age 2 years, communicative phrase used by age 3 years B.Cognitive Development OR Development of age-appropriate self-help skills C.Adaptive behavior (Other than in social interaction) ",
        responses: ["Yes/Do not know/ Not sure  ", "No "],
  },
  {
    section: "(11)",
    question: "Did your child have these symptoms before three years?",
    responses: [
      "No ASD (Response to 4 is '0')",
      "Autism (Response to ALL of 1 to 7 is '1' and 8,9 is '0')",
      "Asperger's Disorder (Response to 4 is '1', 6D is '1' and 10 is '1')",
      "PDD-NOS (Response to 4 is “1” and either 5 or 7 or both is”0”) )",
      "Rett’s Disorder (Response to 4 is “1” and 8 is “1”) ",
      "CDD (Response to 4 is “1” and 9 is “1”) ",
      "Indeterminate (Criteria not fulfilled, too many unsure responses, could not be tested in appropriate condition)"
    ],
  },
  {
    section: "(12)",
    question:
      "Can these symptoms be solely explained by Intellectual Disability? ",
        responses: ["Yes If yes, refer to TAG review   ", "No "],
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

  return (
    <div style={formStyle}>
      <div style={cardStyle}>
        
        
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#4F46E5" }}>SECTION B</h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Complete this section (1-5) based on responses from section A and further history taking (6-12)
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
                      <em></em> {item.observation}
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
              <span className="me-2">Submit</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunicationForm;
