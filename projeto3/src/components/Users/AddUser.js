import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button";
export default function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [valid,setValid] = useState(true);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddUser({"name": name,"age": age, "id": Math.random().toString()})
    setName("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={name}
          type="text"
          onChange={handleName}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          value={age}
          type="number"
          step="1"
          min="0"
          onChange={handleAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
