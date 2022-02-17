import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [touched, setTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInvalid = !enteredNameIsValid && touched;

  let formValid = false;

  if (enteredNameIsValid) formValid=true;

  const inputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const handleBlur = (event) => {
    setTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    alert(enteredName);
    setEnteredName("");
    setTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInvalid ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputHandler}
          onBlur={handleBlur}
        />
        {nameInvalid && touched && (
          <p className="error-text">Name must not be blank.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
