import React from 'react';
import './App.css';
import polygons from '../src/data/sample.json';
//import polygons from '../src/data/Web_cementries_demo_Map_ploting.json';
import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  let dataPoints = polygons.features.map((polygon, index) => {
    return polygon.geometry.coordinates[0].map((points, _) => (
      { "lng": points[0], "lat": points[1]}
    ))
  });

  return (
    <Map google={props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        initialCenter={{
          lng: -122.448977511080727,
          lat: 37.676151431885145
        }}
        zoom={20}>
        {
          dataPoints.map((points, index) => (
            <Polygon
              key={index}
              paths={points}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={1}
              fillColor="#0000FF"
              fillOpacity={0.35} />
          ))
        }
        
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAGDlju5CrE5Nz9id9lM4TnPYKWQUTpjww")
})(MapContainer)
