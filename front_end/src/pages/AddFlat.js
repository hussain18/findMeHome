import React, { useState } from "react";

import Property from "../components/addFlat/Property";
import Locality from "../components/addFlat/Locality";
import Rental from "../components/addFlat/Rental";
import Amenities from "../components/addFlat/Amenities";
import Gallery from "../components/addFlat/Gallery";
import Schedule from "../components/addFlat/Schedule";

const house = require("../assets/home.png").default;
const location = require("../assets/tool.png").default;
const rent = require("../assets/rental.png").default;
const amenity = require("../assets/amenities.png").default;
const photos = require("../assets/image.png").default;
const calendar = require("../assets/calendar.png").default;

const Button = ({ icon, title, onPress, color }) => {
  return (
    <div
      className="row border-bottom"
      onClick={onPress}
      style={{
        paddingBottom: 10,
        paddingTop: 15,
        background: color ? "#7bd5f5" : "white",

        cursor: "pointer",
      }}
    >
      <img style={styles.icon} className="col" src={icon} />
      <div style={styles.text} className="col">
        {title}
      </div>
    </div>
  );
};

const AddFlat = () => {
  const [property, setProperty] = useState(true);
  const [locality, setLocality] = useState(false);
  const [rental, setRental] = useState(false);
  const [amenities, setAmenities] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [schedule, setSchedule] = useState(false);

  return (
    <div className="bg-light">
      <div className="container">
        <div
          className="row "
          style={{
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <div className="col-2 bg-white" style={{ minWidth: 250 }}>
            <Button
              title="Property Details"
              icon={house}
              color={property}
              onPress={() => {
                setProperty(true);
                setLocality(false);
                setRental(false);
                setAmenities(false);
                setGallery(false);
                setSchedule(false);
              }}
            />
            <Button
              title="Locality Details"
              icon={location}
              color={locality}
              onPress={() => {
                setProperty(false);
                setLocality(true);
                setRental(false);
                setAmenities(false);
                setGallery(false);
                setSchedule(false);
              }}
            />
            <Button
              title="Rental Details"
              icon={rent}
              color={rental}
              onPress={() => {
                setProperty(false);
                setLocality(false);
                setRental(true);
                setAmenities(false);
                setGallery(false);
                setSchedule(false);
              }}
            />
            <Button
              title="Amenities"
              color={amenities}
              icon={amenity}
              onPress={() => {
                setProperty(false);
                setLocality(false);
                setRental(false);
                setAmenities(true);
                setGallery(false);
                setSchedule(false);
              }}
            />
            <Button
              title="Gallery"
              color={gallery}
              icon={photos}
              onPress={() => {
                setProperty(false);
                setLocality(false);
                setRental(false);
                setAmenities(false);
                setGallery(true);
                setSchedule(false);
              }}
            />
            <Button
              title="Schedule"
              color={schedule}
              icon={calendar}
              onPress={() => {
                setProperty(false);
                setLocality(false);
                setRental(false);
                setAmenities(false);
                setGallery(false);
                setSchedule(true);
              }}
            />
          </div>
          <div className="col-9 border bg-white">
            {property && <Property />}
            {locality && <Locality />}
            {rental && <Rental />}
            {amenities && <Amenities />}
            {gallery && <Gallery />}
            {schedule && <Schedule />}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  icon: { maxWidth: 60 },
  text: {
    marginTop: 10,
    textAlign: "start",
  },
};

export default AddFlat;
