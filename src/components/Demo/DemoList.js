import React, { useMemo } from "react";
// import classes from "./Demo/DemoList.module.css";

const DemoList = (props) => {
  const { items, title } = props;
  const sortedList = useMemo(() => {
    console.log("sortedList");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Demo-List");
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
