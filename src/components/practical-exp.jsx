import "../styles/practical-exp.css";

export default function PracticalExp({
  company,
  changeCompany,
  position,
  changePosition,
  responsibilities,
  changeResponsibilities,
  isPracticalExpSent,
  handleSubmit,
  edit,
}) {
  return (
    <form id="practical-exp" onSubmit={handleSubmit}>
      <h1>Practical Experience</h1>

      <label htmlFor="company">Company name: </label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={changeCompany}
        disabled={isPracticalExpSent}
      />

      <label htmlFor="position">Position title: </label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={changePosition}
        disabled={isPracticalExpSent}
      />

      <label htmlFor="responsibilities">
        Main responsibilities of your job:
      </label>
      <textarea
        type="text"
        id="responsibilities"
        value={responsibilities}
        onChange={changeResponsibilities}
        disabled={isPracticalExpSent}
      />

      <button type="submit" disabled={isPracticalExpSent}>
        Submit
      </button>
      <button onClick={edit}>Edit</button>
    </form>
  );
}
