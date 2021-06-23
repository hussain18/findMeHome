import React, { useState } from "react";

import ApartmentType from "../components/ApartmentType";

const SearchResult = () => {
  const [oneBhk, setOneBhk] = useState(false);
  const [towBhk, setTwoBhk] = useState(false);
  const [threeBhk, setThreeBhk] = useState(false);
  const [fourBhk, setFourBhk] = useState(false);
  const [fourPlusBhk, setFourPlusBhk] = useState(false);
  return (
    <div className="container overflow-hidden">
      <div className="row gx-4">
        <div
          // style={{ ...styles.border, ...styles.filter }}
          className="col-lg-4 p-3 border bg-light "
        >
          <h3>Filters</h3>
          <h5>Apartment type</h5>
          <div style={styles.apartmentType} className="row  border bg-light">
            <ApartmentType
              title="1BHK"
              onPress={() => {
                console.log("1bhk");
              }}
              touchable
            />
            <ApartmentType title="2BHK" />
            <ApartmentType title="3BHK" />
            <ApartmentType title="4BHK" />
            <ApartmentType title="+4BHK" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-3 border bg-light">
            <p>Flat Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  border: {
    borderStyle: "solid",
    borderColor: "black",
    // margin: 15,
    alignItems: "center",
  },
  filter: {
    // maxWidth: "45%",
  },
  apartmentType: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SearchResult;
