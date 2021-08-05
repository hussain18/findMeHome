import React from "react";

const Button = ({ onPress, color, icon, title, link }) => {
  return (
    <a style={{ textDecoration: "none" }} href={link}>
      <div style={{ margin: 10, paddingLeft: 5 }}>
        <div
          onClick={onPress}
          className="row"
          style={{
            background: color ? "green" : "#C2185B",
            justifyContent: "center",
            borderRadius: 5,
            cursor: "pointer",
            margin: 0,
          }}
        >
          <div
            className="col"
            style={{ color: "white", justifyContent: "space-between" }}
          >
            <img style={styles.icon} src={icon} />
            {title}
          </div>
        </div>
      </div>
    </a>
  );
};

const styles = {
  icon: {
    height: 25,
    margin: 8,
  },
};

export default Button;
