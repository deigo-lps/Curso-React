import React from "react";
import style from "./Button.module.scss";
const Button = (props) =>{
  console.log("botao");
  return(
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
} 

export default React.memo(Button);