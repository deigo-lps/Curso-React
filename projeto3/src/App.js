import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList"
// import ErrorModal from "./components/UI/ErrorModal";
function App() {

  const [users,setUsers] = useState([])

  const onAddUser = (user) =>{
    setUsers((oldUsers) =>{
      return([...oldUsers,user])
    })
  }

  const onUserDelete = (id)=>{
    setUsers(oldUsers => {
      return(
        oldUsers.filter(user=>user.id!==id)
      )
    })
  }

  return (
    <div>
      {/* <ErrorModal title="Error." message="Something went wrong."/> */}
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users} onUserDelete={onUserDelete}/>
    </div>
  );
}

export default App;
