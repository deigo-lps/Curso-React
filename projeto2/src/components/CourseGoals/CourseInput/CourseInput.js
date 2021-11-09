import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.scss";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  }

  input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  }

  input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
  }

  &.invalid {
  input {
    border-color: red;
    background-color: rgba(255, 0, 0, 0.26);
  }
  label{
    color:var(--red);
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <FormControl className={!isValid && 'invalid'}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
