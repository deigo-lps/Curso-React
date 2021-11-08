import React from 'react';
import "./ExpensesList.scss"
import ExpenseItem from '../ExpenseItem';
export default function ExpensesList(props){

  const expenses = props.children.map((expense) =>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      id={expense.id}
      onDelete={props.onDelete}
    ></ExpenseItem>
  );

  if(expenses.length === 0)
    return <h2 className=".expenses-list__fallback">Found no expenses.</h2>

  return(
    <ul className="expenses-list">
      {expenses}
    </ul>
  )
}