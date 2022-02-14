import React, { useState } from "react";
import style from './Form.module.scss'
export default function Form(props){
  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [date,setDate] = useState("")

  const handleTitle = (event) =>{
    setTitle(event.target.value);
  }
  const handleText = (event) =>{
    setText(event.target.value);
  }
  const handleDate = (event) =>{
    setDate(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    const movie = {
      title: title,
      openingText: text,
      releaseDate: date,
    }
    props.handleSubmit(movie);
    setTitle("");
    setText("");
    setDate("");
  }

  return(
    <form className={style.form} onSubmit={handleSubmit}>
       <input placeholder="Title" value={title} onChange={handleTitle}></input>
       <textarea placeholder="Opening Text" value={text} onChange={handleText}></textarea>
       <input placeholder="Release Date" value={date} onChange={handleDate}></input>
       <button type="submit">Submit</button>
    </form>
  )
}