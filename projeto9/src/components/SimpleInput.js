import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInvalid = !enteredNameIsValid && nameTouched;

  const regEmail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  const enteredEmailIsValid = regEmail.test(enteredEmail);
  const emailInvalid = !enteredEmailIsValid && emailTouched;

  let formValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formValid=true;

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleNameBlur = (event) => {
    setNameTouched(true);
  };
  const handleEmailBlur = (event) => {
    setEmailTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    alert(enteredName);
    setEnteredName("");
    setEnteredEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInvalid ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameHandler}
          onBlur={handleNameBlur}
        />
        {nameInvalid && nameTouched && (
          <p className="error-text">Name must not be blank.</p>
        )}
      </div>
      <div className={emailInvalid ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailHandler}
          onBlur={handleEmailBlur}
        />
        {emailInvalid && (
          <p className="error-text">Email must be valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
