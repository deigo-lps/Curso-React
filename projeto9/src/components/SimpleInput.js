import React from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const [
    nameValue,
    nameIsValid,
    nameError,
    nameHandler,
    nameBlurHandler,
    resetName,
  ] = useInput((value) => value.trim() !== "");
  const regEmail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const [
    emailValue,
    emailIsValid,
    emailError,
    emailHandler,
    emailBlurHandler,
    resetEmail,
  ] = useInput((value) => regEmail.test(value));

  var formValid = false;
  if (nameIsValid && emailIsValid) formValid = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert([nameValue,emailValue]);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <p className="error-text">Name must not be blank.</p>}
      </div>
      <div className={emailError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && (
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
