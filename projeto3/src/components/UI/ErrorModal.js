import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './ErrorModal.module.scss'
export default function ErrorModal(props){
  return(
    <>
    <div className={styles.backdrop}/>
    <Card className={styles.modal}>
      <span className={styles.modal__title}>{props.title}</span>
      <span className={styles.modal__message}>{props.message}</span>
      <Button onClick={props.close}>Okay</Button>
    </Card>
    </>
  )
}