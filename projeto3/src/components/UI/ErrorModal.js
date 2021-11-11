import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './ErrorModal.module.scss'
export default function ErrorModal(props){
  return(
    <>
    <div className={styles.backdrop}/>
    <Card className={styles.modal}>
      <h2 className={styles.modal__title}>{props.title}</h2>
      <p className={styles.modal__message}>{props.message}</p>
      <Button onClick={props.close}>Okay</Button>
    </Card>
    </>
  )
}