import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal"
export default function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState(undefined);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 || age.length === 0){
      setError({title:"Invalid input.",message:"Name or age invalid (must not be blank)."})
      return
    }
    if(+age<=0){
      setError({title:"Invalid age.",message:"Age must be greater than 0."})
      return
    }
    props.onAddUser({"name": name,"age": age, "id": Math.random().toString()})
    setName("");
    setAge("");
  };

  const handleError = ()=>{
    setError(undefined)
  }

  return (
    <Card>
      {error && <ErrorModal title={error.title} message={error.message} close={handleError}></ErrorModal>}
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
          onChange={handleAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
