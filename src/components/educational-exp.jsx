import "../styles/educational-exp.css";

export default function EducationalExp({
  schoolValue,
  changeSchool,
  studyTitleValue,
  changeStudyTitle,
  studyDateValue,
  changeStudyDate,
}) {
  return (
    <div id="educational-exp">
      <h1>Educational Experience</h1>

      <label htmlFor="school">School name: </label>
      <input
        type="text"
        id="school"
        value={schoolValue}
        onChange={changeSchool}
      />

      <label htmlFor="study-title">Title Of Study: </label>
      <input
        type="text"
        id="study-title"
        value={studyTitleValue}
        onChange={changeStudyTitle}
      />

      <label htmlFor="study-date">Date of study: </label>
      <input
        type="date"
        id="study-date"
        value={studyDateValue}
        onChange={changeStudyDate}
      />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </div>
  );
}
