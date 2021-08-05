import React from "react";
import GoogleMapReact from "google-map-react";

import HouseProperties from "../components/HouseProperties";
import Button from "../components/Button";

const home = require("../assets/home-lg.jpg").default;
const icon = require("../assets/sofa-svg-2.png").default;
const bedroom = require("../assets/bedroom.png").default;
const bedroom1 = require("../assets/bedroom1.png").default;
const apartment = require("../assets/apartment.png").default;
const preferred = require("../assets/preferred.png").default;
const vehicle = require("../assets/vehicle.png").default;
const balcony = require("../assets/balcony.png").default;
const calendar = require("../assets/calendar.png").default;
const buildingAge = require("../assets/building-age.png").default;
const water = require("../assets/water.png").default;
const facing = require("../assets/facing.png").default;
const bathroom = require("../assets/bathroom.png").default;
const food = require("../assets/food.png").default;
const guard = require("../assets/guard.jpg").default;

const detail = require("../assets/details.png").default;

const Overview = ({ title, value, icon }) => {
  return (
    <div
      className="row"
      style={{
        fontFamily: "sans-serif",
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        margin: 10,
        maxWidth: 500,
      }}
    >
      <div
        className="col d-flex border-bottom"
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "start",
        }}
      >
        <img style={styles.icon} src={icon} />
        <div style={styles.detailText1}>{title}</div>
        <div style={styles.detailText}>{value}</div>
      </div>
    </div>
  );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FlatDetails = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <div className="bg-light ">
      <div className="container ">
        <div className="row bg-white" style={{ marginBottom: 20 }}>
          <img
            className=" border col"
            style={styles.image}
            src={home}
            alt="Responsive image"
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
                  icon={bedroom}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Property Age"
                  value="5-10 years"
                  icon={apartment}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Preferred Tenants"
                  value="All"
                  icon={preferred}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Available From"
                  value="Ready to move"
                  icon={vehicle}
                />
              </div>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: "#E7E7E7",
                }}
              >
                <Button icon={detail} title="Contact" link="#" />
              </div>
            </div>
            <div className="col">
              <div className="border">
                <HouseProperties
                  title="Preferred Tenants"
                  value="All"
                  icon={vehicle}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Available From"
                  value="Ready to move"
                  icon={balcony}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Preferred Tenants"
                  value="All"
                  icon={calendar}
                />
              </div>
              <div className="border">
                <HouseProperties
                  title="Available From"
                  value="Ready to move"
                  icon={buildingAge}
                />
              </div>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: "#E7E7E7",
                }}
              >
                <Button icon={detail} title="Schedule Visit" link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-white">
          <h4 className=" d-flex" style={{ margin: 20 }}>
            Overview
          </h4>
          <div className="row">
            <div className="col">
              <Overview
                title="Furnishing "
                value="Fully furnish"
                icon={bedroom}
              />
            </div>

            <div className="col">
              <Overview title="Facing " value="North" icon={facing} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Overview title="Water Supply" value="Both" icon={water} />
            </div>

            <div className="col">
              <Overview title="Floor " value="4/4" icon={apartment} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Overview title="Bathroom " value="2" icon={bathroom} />
            </div>

            <div className="col">
              <Overview title="Non-Veg Allowed " value="Yes" icon={food} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Overview
                title="Furnishing "
                value="Fully furnish"
                icon={guard}
              />
            </div>
          </div>
        </div>
        <div style={styles.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
      <h1>Hi</h1>
    </div>
  );
};

const styles = {
  image: {
    width: 900,
  },
  icon: {
    width: 30,
    margin: 10,
    height: 30,
  },
  detailText: {
    marginTop: 20,
    paddingLeft: 50,
  },
  detailText1: {
    marginTop: 20,
    paddingLeft: 50,
    width: 180,
    textAlign: "start",
  },
  map: {
    height: "50vh",
    marginTop: 50,
    textAlign: "center",
    marginBottom: 50,
  },
};

export default FlatDetails;
