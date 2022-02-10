import React from "react";

const Demo = (props) =>{
  console.log("demo");
  return(
    <p>{props.show ? 'this is new' : ''}</p>
  )
}
// para esse componente react deve checar os valores dos props
// e comparar com os anteriores.
// só vai reavaliar se os props mudaram.
// é um trabalho a mais pro react que tem que armazenar os valores do props
// e dps comparar dnv ent tem q ta vendo se vale a pena.
// bom usar no topo da arvore de componentes que ja evita reavaliar os abaixo
export default React.memo(Demo);