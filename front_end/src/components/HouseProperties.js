import React from "react";

const HouseProperties = ({ title, value, icon }) => {
  return (
    <div
      className="row"
      style={{
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        className="col"
        style={{
          display: "flex",
          flex: 2,
          margin: 10,
          minWidth: 200,
          maxWidth: 200,
        }}
      >
        <img style={styles.icon} src={icon} />
        <div className="col">
          <div style={styles.detailText}>{value}</div>
          <div style={styles.detailText1}>{title}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    width: 30,
    margin: 5,
    justifyContent: "center",
    height: 30,
  },
};

export default HouseProperties;
