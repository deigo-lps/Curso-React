import React, { useState } from 'react';

import Card from "../../UI/Card"
import Date from "../../UI/Date"
import './ExpenseItem.scss'
export default function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle("Clicked")
  }

  // setTimeout(()=>{setTitle("Clicked")},3000)

  return (
    <Card className="expense-item">
      <Date>
        {props.date}
      </Date>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}