import ExpenseItem from "../ExpenseItem";
import Card from "../../UI/Card";
import './ExpensesList.scss'
export default function ExpenseList(props) {
  const expenses = props.children.map((expense) =>
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  );
  return (
    <Card className="expenses">
      {expenses}
    </Card>
  )
}