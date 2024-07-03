import "../styles/general-info.css";

export default function GeneralInfo({
  nameValue,
  changeName,
  emailValue,
  changeEmail,
  phoneValue,
  changePhone,
}) {
  return (
    <div id="general-info">
      <h1>General Information</h1>

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={nameValue} onChange={changeName} />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={emailValue}
        onChange={changeEmail}
      />

      <label htmlFor="phone">Phone number: </label>
      <input
        type="number"
        id="phone"
        value={phoneValue}
        onChange={changePhone}
      />

      <button type="submit">Submit</button>
      <button>Edit</button>
    </div>
  );
}
