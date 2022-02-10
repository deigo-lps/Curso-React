import React, { useState, useCallback } from "react";
import Button from "./components/Button"
import Demo from "./components/Demo";
function App() {
  const [showP, setShowP] = useState(false);

  console.log("app running");

  /*
  funções são objetos em js.
  memo funciona fazendo comparações ===, que não
  funcionam com objetos.
  Sempre que o componente é reavaliado, é criada uma
  nova função, que, para js, é diferente da anterior.

  useCallback armazena o objeto e não cria um novo na reavaliação
  assim permitindo que a comparação do memo funcione.
  */
  const toggleParagraphHandler = useCallback(() => {
    setShowP(prevP => !prevP);
  },[]);

  return (
    <div className="main">
      <Demo show={true}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
