import Card from "../../UI/Card"
import Date from "../../UI/Date"
import './ExpenseItem.scss'
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Date>
        {props.date}
      </Date>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  )
}