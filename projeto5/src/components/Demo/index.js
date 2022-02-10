import React from "react";

const Demo = (props) =>{
  console.log("demo");
  return(
    <p>{props.show ? 'this is new' : ''}</p>
  )
}

export default Demo;