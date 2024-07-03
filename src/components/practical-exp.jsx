import "../styles/practical-exp.css";

export default function PracticalExp() {
  return (
    <div id="practical-exp">
      <h1>Practical Experience</h1>
  
      <label htmlFor="company">Company name: </label>
      <input type="text" id="company" />

      <label htmlFor="position">Position title: </label>
      <input type="text" id="position" />

      <label htmlFor="responsibilities">
        Main responsibilities of your job:
      </label>
      <textarea type="text" id="responsibilities" />

      <button type="submit">Submit</button>
      <button >Edit</button>
    </div>
  );
}
