import React from 'react';

import Card from "../../UI/Card"
import Date from "../../UI/Date"
import './ExpenseItem.scss'
export default function ExpenseItem(props) {

  const handleDelete = () =>{
    props.onDelete(props.id)
  }

  return (
    <li>
      <Card className="expense-item">
        <Date>
          {props.date}
        </Date>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price-delete">
            <div className="expense-item__price">{props.amount}</div>
            <button type="button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </Card>
    </li>
  )
}