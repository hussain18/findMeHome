import React from "react";

const RadioInput = (props) => {
  return (
    <div className="form-check" style={styles.radio}>
      <input
        style={{ padding: 0 }}
        className="form-check-input"
        type={props.type}
        name={props.name}
      />
      <label class="form-check-label" for="inlineRadio1">
        {props.text}
      </label>
    </div>
  );
};

const styles = {
  radio: {
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },
};

export default RadioInput;
