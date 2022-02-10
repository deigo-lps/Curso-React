import React, { useState } from "react";
import Button from "./components/Button"
import Demo from "./components/Demo";
function App() {
  const [showP, setShowP] = useState(false);

  console.log("app running");

  const toggleParagraphHandler = () => {
    setShowP(prevP => !prevP);
  };

  return (
    <div className="main">
      <Demo show={showP}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
