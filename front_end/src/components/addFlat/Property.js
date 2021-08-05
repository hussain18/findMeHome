import React from "react";

import Input from "../Input";

const Property = () => {
  return (
    <div>
      <h3 className="border-bottom" style={{ padding: 20 }}>
        Property Details
      </h3>

      <div class="row" style={{ marginTop: 50 }}>
        <Input width={300} title="Apartment Type*">
          <option>Select</option>
          <option>Apartment</option>
          <option>Independent House/Villa</option>
          <option>Gated Community Villa</option>
        </Input>

        <Input width={300} title="Apartment Name*"></Input>
      </div>

      <div style={{ marginTop: 30 }} className="row">
        <Input width={300} title="BHK Type*">
          <option>Select</option>
          <option>1 RK</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
          <option>4 + BHK</option>
        </Input>
        <Input width={300} title="Facing">
          <option>Select</option>
          <option>North</option>
          <option>West</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </Input>

        <div style={{ marginTop: 30 }} className="row">
          <Input width={300} title="Property Age*">
            <option>Select</option>
            <option>Less than a year</option>
            <option>1 to 3 years</option>
            <option>3 to 5 years</option>
            <option>5 to 10 years</option>
            <option>More than 10 years</option>
          </Input>
          <div className="col d-flex ">
            <Input width={130} title="Floor*">
              <option>Ground</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
            <Input width={130} title="Total Floor*">
              <option>Ground</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </div>
        </div>
        <div style={{ marginTop: 30, textAlign: "start" }} className="row">
          <label>Property Size*</label>

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
      <button style={{ margin: 30 }} type="submit" class="btn btn-primary">
        Save & Continue
      </button>
    </div>
  );
};

const styles = {
  input: {
    padding: 10,
    width: 300,
    textAlign: "center",
  },
};

export default Property;
