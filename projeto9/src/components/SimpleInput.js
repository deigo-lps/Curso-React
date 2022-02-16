import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [valid, setValid] = useState(true);
  const inputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setValid(false);
      return;
    }
    setValid(true);

    alert(enteredName);
    alert(nameInputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={valid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={inputHandler}
        />
        {!valid && <p className="error-text">Name must not be blank.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
