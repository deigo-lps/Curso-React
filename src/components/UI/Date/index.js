import "./Date.scss"
export default function Date(props) {
  const month = props.children.toLocaleString('pt-BR', { month: 'long' });
  const day = props.children.toLocaleString('pt-BR', { day: '2-digit' });
  const year = props.children.getFullYear();
  return (
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__year">{year}</div>
      <div className="date__day">{day}</div>
    </div>
  )
}