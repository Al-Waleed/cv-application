import "../styles/educational-exp.css";

export default function EducationalExp() {
  return (
    <div id="educational-exp">
      <h1>Educational Experience</h1>

      <label htmlFor="school">School name: </label>
      <input type="text" id="school" />

      <label htmlFor="study-title">Title Of Study: </label>
      <input type="text" id="study-title" />

      <label htmlFor="study-date">Date of study: </label>
      <input type="date" id="study-date" />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </div>
  );
}
