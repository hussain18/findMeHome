import React, { Component } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const SearchInContainer = (props) => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-12 col-sm-10">
        <SearchBar />
      </div>
    </div>
  );
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row g-1 justify-content-center">
        <div className="col-sm-9" style={searchStyle}>
        <GooglePlacesAutocomplete apiKey = "******" />
        </div>
        <div className="col-8 col-sm-3" style={searchBtnStyle}>
          Search
        </div>
      </div>
    );
  }
}

export { SearchBar, SearchInContainer };

// Styles
const searchStyle = {
  padding: "2% 2%",
  textAlign: "left",
  border: "1px solid rgba(255, 255, 255, 0.164534)",
  backgroundColor: "rgba(0,0,0,.5)",
};

const searchBtnStyle = {
  padding: "2% 1%",
  border: "1px solid rgba(255, 255, 255, 0.2567)",
  backgroundColor: "black",
};
