import React, {Component}from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 55.860916,
         lng: -4.251433
        }}
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey:'AIzaSyDizWKQw1kvLlsLftF46v_z_FzAt0Raork'
})(MapContainer);
