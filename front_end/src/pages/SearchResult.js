import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import SearchResults from "../components/SearchResults";
import RadioInput from "../components/RadioInput";

const ApartmentType = (props) => {
  return (
    <div
      style={{
        ...styles.apartment,
        color: props.color ? "white" : "black",
        backgroundColor: props.color ? "#C2185B" : "#E7E7E7",
      }}
      className="col p-2"
      onClick={props.onPress}
    >
      {props.title}
    </div>
  );
};

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "purple",
      },
      track: {
        color: "red",
      },
      rail: {
        color: "purple",
      },
    },
  },
});

let a = 0;
let b = 0;
let newValue = [a, b];
const SearchResult = () => {
  const [oneBhk, setOneBhk] = useState(false);
  const [twoBhk, setTwoBhk] = useState(false);
  const [threeBhk, setThreeBhk] = useState(false);
  const [fourBhk, setFourBhk] = useState(false);
  const [fourPlusBhk, setFourPlusBhk] = useState(false);

  const [value, setValue] = useState([0, 100000]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  const rangeSelector = (event, newValues) => {
    setValue(newValues);
    console.log(newValues);
    setMin(value[0]);
    setMax(value[1]);
  };

  const minInputHandler = (event) => {
    if (!event.target.value) {
      event.target.value = 0;
    }
    if (event.target.value) {
      if (event.target.value === 0) {
        setMin(0);
      } else if (event.target.value <= max) {
        newValue[0] = parseInt(event.target.value);
        newValue[1] = parseInt(max);
        setMin(newValue[0]);
      } else {
        newValue[0] = parseInt(0);
        newValue[1] = parseInt(max);
        setMin(newValue[0]);
        setValue(newValue);
      }
    }
  };
  const maxInputHandler = (event) => {
    console.log(event.target.value);
    if (!event.target.value) {
      event.target.value = 0;
    }
    if (event.target.value === 0) {
      setMax(0);
      console.log(max);
    } else if (event.target.value > 100000) {
      newValue[0] = parseInt(min);
      newValue[1] = 100000;
      setMax(100000);
      setValue(newValue);
    } else if (event.target.value >= min) {
      newValue[1] = parseInt(event.target.value);
      setMax(newValue[1]);
      setValue(newValue);
    } else {
      newValue[0] = parseInt(min);
      newValue[1] = parseInt(min);
      setMax(newValue[1]);
      setValue(newValue);
    }
  };

  return (
    <div style={styles.container} className="container">
      <div style={styles.border} className="row">
        <div className="col-lg-3 bg-light " style={{ margin: 10 }}>
          <div>
            <h3>Filters</h3>
            <h5>Apartment type</h5>
            <div style={styles.apartmentTypes} className="row  ">
              <ApartmentType
                title="1BHK"
                color={oneBhk}
                onPress={() => {
                  setOneBhk(!oneBhk);
                }}
              />

              <ApartmentType
                title="2BHK"
                color={twoBhk}
                onPress={() => {
                  setTwoBhk(!twoBhk);
                }}
              />
              <ApartmentType
                title="3BHK"
                color={threeBhk}
                onPress={() => {
                  setThreeBhk(!threeBhk);
                }}
              />
              <ApartmentType
                title="4BHK"
                color={fourBhk}
                onPress={() => {
                  setFourBhk(!fourBhk);
                }}
              />
              <ApartmentType
                title="+4BHK"
                color={fourPlusBhk}
                onPress={() => {
                  setFourPlusBhk(!fourPlusBhk);
                }}
              />
            </div>
            <div
              style={{
                margin: "auto",
                display: "block",
                width: "fit-content",
              }}
            >
              <Typography>Select Price Range:</Typography>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  style={{ flex: 1 }}
                  value={value}
                  min={0}
                  max={100000}
                  onChange={rangeSelector}
                />
              </ThemeProvider>

              <form className="row">
                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div className="col d-flex" style={{ marginRight: 5 }}>
                      <div class="input-group-prepend">
                        <div class="input-group-text">₹</div>
                      </div>

                      <input
                        className="col border form-control"
                        value={min !== 0 ? min : 0}
                        onChange={minInputHandler}
                      />
                    </div>
                    <div className="col d-flex" style={{ marginLeft: 5 }}>
                      <div class="input-group-prepend">
                        <div class="input-group-text">₹</div>
                      </div>
                      <input
                        className="col border form-control"
                        value={max !== 0 ? max : 0}
                        onChange={maxInputHandler}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div style={{ marginTop: 20 }}>
              <h6>Availability</h6>
              <div className="row">
                <div className="col">
                  <RadioInput
                    text="Immediate"
                    name="availability"
                    type="radio"
                  />
                  <RadioInput
                    text="Within 15 Days"
                    name="availability"
                    type="radio"
                  />
                </div>
                <div className="col">
                  <RadioInput
                    text="Within 30 Days"
                    name="availability"
                    type="radio"
                  />
                  <RadioInput
                    text="After 30 Days"
                    name="availability"
                    type="radio"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h6>Preferred Tenants</h6>
              <div className="row">
                <div className="col">
                  <RadioInput text="Family" name="preferred" type="checkbox" />
                  <RadioInput text="Company" name="preferred" type="checkbox" />
                </div>
                <div className="col">
                  <RadioInput
                    text="Bachelor"
                    name="preferred"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h6>Furnishing</h6>
              <div className="row">
                <div className="col">
                  <RadioInput text="Full" name="furnishing" type="checkbox" />
                  <RadioInput text="None" name="furnishing" type="checkbox" />
                </div>
                <div className="col">
                  <RadioInput text="Semi" name="furnishing" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-8"
          style={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}
        >
          <div className="p-3 ">
            <div className="bg-light">
              <SearchResults />
            </div>
            {/* <div style={{ marginTop: 20 }} className="bg-light">
              <SearchResults />
            </div>
            <div style={{ marginTop: 20 }} className="bg-light">
              <SearchResults />
            </div>
            <div style={{ marginTop: 20 }} className="bg-light">
              <SearchResults />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  border: {
    justifyContent: "center",
    marginTop: 20,
  },
  filter: {
    // maxWidth: "45%",
  },
  apartmentTypes: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  apartment: {
    margin: 10,
    borderRadius: 7,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "red",
    maxWidth: 70,
    minWidth: 70,
    cursor: "pointer",
  },
  apartmentType: {},
  priceRange: {
    // padding: 10,
    // margin: 10,
  },
};

export default SearchResult;
