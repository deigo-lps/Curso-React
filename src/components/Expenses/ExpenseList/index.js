import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import './ExpensesList.scss'

export default function ExpenseList(props) {

  const [year, setYear] = useState("all");

  const handleYear = (newYear) => {
    setYear(newYear);
  }

  const expenses = props.children.filter(currentYear => currentYear.date.getFullYear() == year || year === "all").map((expense) =>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  );
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter currentValue={year} onYearChange={handleYear} />
        {expenses}
      </Card>
    </>
  )
}