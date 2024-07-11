import "../styles/cv.css"

export default function Cv({
  name,
  email,
  phone,
  company,
  position,
  responsibilities,
  school,
  studyTitle,
  studyDate,
}) {
  return (
    <div id="cv">
      <header>
        <h1>Curriculum Vitae</h1>
        <h2>{name} </h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
      </header>
      <main>
        <h1>Experience</h1>
        <h2>Company: {company}</h2>
        <h2>Position: {position}</h2>
        <h2>Responsibilities: {responsibilities}</h2>
      </main>
      <footer>
        <h1>Educational Experience</h1>
        <h2>School: {school}</h2>
        <h2>Title of study: {studyTitle}</h2>
        <h2>Date of study: {studyDate}</h2>
      </footer>
    </div>
  );
}
