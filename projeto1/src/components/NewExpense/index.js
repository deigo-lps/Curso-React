import React, {useState} from 'react'

import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const[show,setShow]=useState(0);

  const handleShow = () =>{
    setShow((prev)=>{return(!prev)})
  }

  if(show){
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleShow}></ExpenseForm>
      </div>
    )
  }

  return(
    <div className="new-expense">
      <button onClick={handleShow}>Add New Expense</button>
    </div>
  )
}

export default NewExpense;