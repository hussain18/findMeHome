import React, { useState } from "react";

import HouseProperties from "./HouseProperties";
import Button from "../components/Button";

const icon = require("../assets/sofa-svg-2.png").default;
const save = require("../assets/save.png").default;
const detail = require("../assets/details.png").default;

const SearchResults = (props) => {
  const [saveIcon, setSaveIcon] = useState(false);
  const [detailIcon, setDetailIcon] = useState(false);

  const [saveText, setSaveText] = useState(false);
  const [detailText, setDetailText] = useState(false);

  return (
    <>
      <div
        style={styles.container}
        className="container border-top border-bottom "
      >
        <div style={styles.rent}>
          <div style={styles.price}>
            <div style={styles.number}>Builtup</div>
            <div style={styles.text}>1005 sqft</div>
          </div>
          <div
            style={styles.price}
            className="border border-top-0 border-bottom-0 border-right-0"
          >
            <div style={styles.number}>₹65,000</div>
            <div style={styles.text}>Deposit</div>
          </div>
          <div style={styles.price}>
            <div style={styles.number}>₹23000</div>
            <div style={styles.text}>Rent(Negotiable)</div>
          </div>
        </div>
      </div>
      <div style={styles.detail} className="row ">
        <img
          style={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE-8XUYailjRYw2Em-fy_CfS5dC6bMlUSUA&usqp=CAU"
        />
        <div
          className="col"
          style={{
            flex: 1,
            display: "flex",
            marginTop: 10,
          }}
        >
          <div className="col">
            <div className="border">
              <HouseProperties
                title="Furnishing"
                value="Fully furnished"
                icon={icon}
              />
            </div>
            <div className="border">
              <HouseProperties
                title="Property Age"
                value="5-10 years"
                icon={icon}
              />
            </div>

            {
              <Button
                icon={detail}
                title="Go to Details"
                link="/flat-details"
              />
            }
          </div>

          <div className="col">
            <div className="border">
              <HouseProperties
                title="Preferred Tenants"
                value="All"
                icon={icon}
              />
            </div>
            <div className="border">
              <HouseProperties
                title="Available From"
                value="Ready to move"
                icon={icon}
              />
            </div>
            <Button
              onPress={() => {
                setSaveIcon(!saveIcon);
                setSaveText(!saveText);
              }}
              color={saveIcon}
              icon={save}
              title={saveText ? "Saved" : "Save for later"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {},
  rent: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20,
  },
  number: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
  price: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  image: {
    padding: 10,
    width: 350,
    height: 220,
    justifyContent: "center",
  },
  detail: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },

  detailText: {
    fontSize: 14,
  },
  detailText1: {
    fontSize: 12,
    margin: 5,
  },
};

export default SearchResults;
