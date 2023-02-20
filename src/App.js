import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutPut";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running!");

  // UseCallBack hooks to store this function and
  // it will not get change after re - evaluate unless dependency get changes
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* DemoOutPut is long child branch cutoff using React.Demo*/}
      <DemoOutPut show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
