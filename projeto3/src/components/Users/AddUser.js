import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name.trim().length === 0 || age.length === 0) {
      setError({
        title: "Invalid input.",
        message: "Name or age invalid (must not be blank).",
      });
      return;
    }
    if (+age <= 0) {
      setError({
        title: "Invalid age.",
        message: "Age must be greater than 0.",
      });
      return;
    }
    props.onAddUser({ name: name, age: age, id: Math.random().toString() });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    nameInputRef.current.focus();
  };

  const handleError = () => {
    setError(undefined);
  };

  return (
    <Card>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close={handleError}
        ></ErrorModal>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef}></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" step="1" ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
