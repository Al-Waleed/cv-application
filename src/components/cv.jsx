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
    <>
      <header>
        <h1>Curriculum Vitae</h1>
        <h2>{name} </h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
      </header>
      <main>
        <h1>Experience</h1>
        <h2>{company}</h2>
        <h2>{position}</h2>
        <h2>{responsibilities}</h2>
      </main>
      <footer>
        <h1>Educational Experience</h1>
        <h2>{school}</h2>
        <h2>{studyTitle}</h2>
        <h2>{studyDate}</h2>
      </footer>
    </>
  );
}
