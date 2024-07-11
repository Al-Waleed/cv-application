import "../styles/educational-exp.css";

export default function EducationalExp({
  schoolValue,
  changeSchool,
  studyTitleValue,
  changeStudyTitle,
  studyDateValue,
  changeStudyDate,
  isEducationalExpSent,
  handleSubmit,
  edit,
}) {
  return (
    <form id="educational-exp" onSubmit={handleSubmit}>
      <h1>Educational Experience</h1>

      <label htmlFor="school">School name: </label>
      <input
        type="text"
        id="school"
        value={schoolValue}
        onChange={changeSchool}
        disabled={isEducationalExpSent}
      />

      <label htmlFor="study-title">Title Of Study: </label>
      <input
        type="text"
        id="study-title"
        value={studyTitleValue}
        onChange={changeStudyTitle}
        disabled={isEducationalExpSent}
      />

      <label htmlFor="study-date">Date of study: </label>
      <input
        type="date"
        id="study-date"
        value={studyDateValue}
        onChange={changeStudyDate}
        disabled={isEducationalExpSent}
      />

      <button type="submit" disabled={isEducationalExpSent}>
        Submit
      </button>
      <button onClick={edit}>Edit</button>
    </form>
  );
}
