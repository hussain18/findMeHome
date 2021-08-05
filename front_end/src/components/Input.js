import React from "react";

const Input = (props) => {
  return (
    <div className="col" style={{ textAlign: "start" }}>
      <div style={{ margin: 5 }}>{props.title}</div>

      <select style={{ padding: 10, width: props.width }}>
        {props.children}
      </select>
    </div>
  );
};

export default Input;
