import "../styles/general-info.css";

export default function GeneralInfo() {
  return (
    <div id="general-info">
      <h1>General Information</h1>

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />

      <label htmlFor="phone">Phone number: </label>
      <input type="number" id="phone" />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </div>
  );
}
