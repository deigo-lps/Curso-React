import { useState } from "react";
export default function useInput(validateValue){
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && touched;

  const inputChangeHandler = (event) =>{
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () =>{
    setIsTouched(true);
  }

  const reset = () =>{
    setEnteredValue("");
    setIsTouched(false);
  }

  return [
    enteredValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  ]
}