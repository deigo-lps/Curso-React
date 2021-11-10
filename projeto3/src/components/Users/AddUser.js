import React from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.scss'
import Button from "../UI/Button";
export default function AddUser() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submited.")
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" step="1" min="0"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
