import Button from "../UI/Button";
export default function User(props) {
  const handleDelete = () => {
    props.onUserDelete(props.children.id);
  };

  return (
    <li>
      <div>
        <span>{props.children.name}</span>
        <span>{props.children.age}</span>
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );  
}
