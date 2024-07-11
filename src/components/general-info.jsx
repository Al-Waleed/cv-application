import "../styles/general-info.css";

export default function GeneralInfo({
  nameValue,
  changeName,
  emailValue,
  changeEmail,
  phoneValue,
  changePhone,
  isGeneralSent,
  handleSubmit,
  edit,
}) {
  return (
    <form id="general-info" onSubmit={handleSubmit}>
      <h1>General Information</h1>

      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={nameValue}
        onChange={changeName}
        disabled={isGeneralSent}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={emailValue}
        onChange={changeEmail}
        disabled={isGeneralSent}
      />

      <label htmlFor="phone">Phone number: </label>
      <input
        type="number"
        id="phone"
        value={phoneValue}
        onChange={changePhone}
        disabled={isGeneralSent}
      />

      <button type="submit" disabled={isGeneralSent}>
        Submit
      </button>
      <button onClick={edit}>Edit</button>
    </form>
  );
}
