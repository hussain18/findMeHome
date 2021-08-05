import React from "react";

import Input from "../Input";

const Rental = () => {
  return (
    <div>
      <h3 className="border-bottom" style={{ padding: 20 }}>
        Rental Details
      </h3>
      <div className="row">
        <div style={{ marginTop: 30, textAlign: "start" }} className="col">
          <div className="row">
            <label>Expected Rent *</label>
            <input
              placeholder="Property Size "
              style={{
                width: 300,
                padding: 10,
                margin: 10,
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: 30, textAlign: "start" }} className="col">
          <div className="row">
            <label>Expected Deposit *</label>
            <input
              placeholder="Property Size "
              style={{
                width: 300,
                padding: 10,
                margin: 10,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
