import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <h2 className={styles.modal__title}>{props.title}</h2>
      <p className={styles.modal__message}>{props.message}</p>
      <Button onClick={props.close}>Okay</Button>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          close={props.close}
          message={props.message}
          title={props.title}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}