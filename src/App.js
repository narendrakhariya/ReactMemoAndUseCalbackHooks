import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutPut";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My title");

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

  const ChangeListTitleHandler = () => {
    setListTitle("New title");
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* DemoOutPut is long child branch cutoff using React.Demo*/}
      <DemoOutPut show={showParagraph} />
      <DemoList title={listTitle} items={listItems}></DemoList>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={ChangeListTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
