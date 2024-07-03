import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInfo from './components/general-info'
import EducationalExp from './components/educational-exp'
import PracticalExp from './components/practical-exp'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationalExp />
    <PracticalExp />
  </React.StrictMode>
);
