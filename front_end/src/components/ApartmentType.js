import React from "react";

const ApartmentType = (props) => {
  return (
    <div
      style={styles.apartment}
      className="col p-3 border bg-light"
      onClick={props.onPress}
    >
      {props.title}
    </div>
  );
};

const styles = {
  apartment: {
    backgroundColor: "#cccc",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    maxWidth: 70,
    cursor: "pointer",
  },
};

export default ApartmentType;
