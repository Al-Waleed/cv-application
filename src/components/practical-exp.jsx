import "../styles/practical-exp.css";

export default function PracticalExp({
  company,
  changeCompany,
  position,
  changePosition,
  responsibilities,
  changeResponsibilities,
}) {
  return (
    <div id="practical-exp">
      <h1>Practical Experience</h1>

      <label htmlFor="company">Company name: </label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={changeCompany}
      />

      <label htmlFor="position">Position title: </label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={changePosition}
      />

      <label htmlFor="responsibilities">
        Main responsibilities of your job:
      </label>
      <textarea
        type="text"
        id="responsibilities"
        value={responsibilities}
        onChange={changeResponsibilities}
      />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </div>
  );
}
