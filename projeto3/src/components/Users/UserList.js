import React from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.scss'
import User from './User';
export default function UserList(props){

  if(props.users[0] === undefined)
    return(
      <Card className={styles.list}>
        No users found.
      </Card>
    )

  const list=props.users.map(user => <User key={user.id} onUserDelete={props.onUserDelete}>{user}</User>)

  return(
    <Card className={styles.list}>
      <ul>
      {list}
      </ul>
    </Card>
  )
}