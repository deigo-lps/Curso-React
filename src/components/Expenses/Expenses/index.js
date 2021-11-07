import React, { useState } from 'react';
import Card from "../../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesList from '../ExpensesList';
import './Expenses.scss'

export default function Expenses(props) {

  const [year, setYear] = useState("all");

  const handleYear = (newYear) => {
    setYear(newYear);
  }

  const filteredExpenses = props.children.filter(currentYear => currentYear.date.getFullYear().toString() === year || year === "all")
  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter currentValue={year} onYearChange={handleYear} />
        <ExpensesList>
          {filteredExpenses}
        </ExpensesList>
      </Card>
    </>
  )
}