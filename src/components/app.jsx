import { useState } from "react";
import GeneralInfo from "./general-info";
import EducationalExp from "./educational-exp";
import PracticalExp from "./practical-exp";
import Cv from "./cv";
import "../styles/app.css";

export default function App() {
  // states for GeneraInfo()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [generalSent, setGeneralSent] = useState(false);
  // states for EducationalExp()
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [educationalExpSent, setEducationalExpSent] = useState(false);
  // states for PracticalExp()
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [practicalExpSent, setPracticalExpSent] = useState(false);

  // GeneralInfo() states handle function
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleGeneralSubmit(e) {
    e.preventDefault();
    setGeneralSent(true);
  }
  function handleGeneralEdit(e) {
    e.preventDefault();
    setGeneralSent(false);
  }
  // EducationalExp() states handle function
  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }
  function handleStudyTitleChange(e) {
    setStudyTitle(e.target.value);
  }
  function handleStudyDateChange(e) {
    setStudyDate(e.target.value);
  }
   function handleEducationalExpSubmit(e) {
    e.preventDefault();
    setEducationalExpSent(true);
  }
  function handleEducationalExpEdit(e) {
    e.preventDefault();
    setEducationalExpSent(false);
  }
  // PracticalExp() states handle function
  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }
  function handlePositionChange(e) {
    setPosition(e.target.value);
  }
  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }
  function handlePracticalExpSubmit(e) {
    e.preventDefault();
    setPracticalExpSent(true);
  }
  function handlePracticalExpEdit(e) {
    e.preventDefault();
    setPracticalExpSent(false);
  }
  return (
    <>
      <main>
        <GeneralInfo
          nameValue={name}
          changeName={handleNameChange}
          phoneValue={phone}
          changePhone={handlePhoneChange}
          emailValue={email}
          changeEmail={handleEmailChange}
          handleSubmit={handleGeneralSubmit}
          isGeneralSent={generalSent}
          edit={handleGeneralEdit}
        />
        <EducationalExp
          schoolValue={school}
          changeSchool={handleSchoolChange}
          studyTitleValue={studyTitle}
          changeStudyTitle={handleStudyTitleChange}
          studyDateValue={studyDate}
          changeStudyDate={handleStudyDateChange}
          handleSubmit={handleEducationalExpSubmit}
          isEducationalExpSent={educationalExpSent}
          edit={handleEducationalExpEdit}
        />
        <PracticalExp
          company={company}
          changeCompany={handleCompanyChange}
          position={position}
          changePosition={handlePositionChange}
          responsibilities={responsibilities}
          changeResponsibilities={handleResponsibilitiesChange}
          handleSubmit={handlePracticalExpSubmit}
          isPracticalExpSent={practicalExpSent}
          edit={handlePracticalExpEdit}
        />
      </main>
      <Cv
        name={name}
        email={email}
        phone={phone}
        company={company}
        position={position}
        responsibilities={responsibilities}
        school={school}
        studyTitle={studyTitle}
        studyDate={studyDate}
      />
    </>
  );
}
