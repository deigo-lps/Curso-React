import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList"

function App() {

  const [users,setUsers] = useState([])

  const onAddUser = (user) =>{
    setUsers((oldUsers) =>{
      return([user,...oldUsers])
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
      <AddUser onAddUser={onAddUser}/>
      <UserList users={users} onUserDelete={onUserDelete}/>
    </div>
  );
}

export default App;
