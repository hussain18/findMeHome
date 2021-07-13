import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = null //add your google API key here

const marker_img = require('../assets/img/marker_default.png').default
const house_marker = require('../assets/img/marker_house.png').default


const MapMarker = props => {
    const marker = props.marker || marker_img
    return <img src={marker}  style = {{height: 40 }}/>
}

class FlatsMap extends Component {
  static defaultProps = {
    center: {
      lat: 18.51957,
      lng: 73.85535
    },
    zoom: 13,
    height: '600px'
  };

  render() {
    return (
      <div style={{ height: this.props.height, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY, libraries:['places'] }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            <MapMarker lat = {18.51957} lng = {73.85535} marker = {house_marker}/>
        </GoogleMapReact >
      </div>
    );
  }
}

export default FlatsMap;