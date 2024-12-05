import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import PersonalInformation from './PersonalInformation';
import WebForm from './WebForm';
import CommunicationForm from "./CommunicationForm";
import RestrictedInterestsForm from "./RestrictedInterestsForm";
import SectionBForm from './section_b';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/web-form" element={<WebForm />} />
        <Route path="/communication" element={<CommunicationForm />} />
        <Route path="/restricted" element={<RestrictedInterestsForm />} />
        <Route path="/section-b" element={<SectionBForm />} />
      </Routes>
    </Router>
  );
}

export default App;
