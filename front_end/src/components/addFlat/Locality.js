import React from "react";

import GoogleMapReact from "google-map-react";

import Input from "../Input";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Locality = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div>
      <h3 className="border-bottom" style={{ padding: 20 }}>
        Locality Details
      </h3>

      <div class="row" style={{ margin: 20, marginTop: 50 }}>
        <div className="row ">
          <Input width={300} title="City*">
            <option>Select</option>
            <option>Pune</option>
            <option>Bangalore</option>
            <option>Delhi</option>
          </Input>

          <Input width={300} title="Locality*"></Input>
        </div>

        <div style={{ textAlign: "start", marginTop: 50 }}>
          Mark Locality on Map
        </div>

        <div
          style={{
            height: "50vh",
            marginTop: 10,
            textAlign: "center",
          }}
        >
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
    </div>
  );
};

export default Locality;
