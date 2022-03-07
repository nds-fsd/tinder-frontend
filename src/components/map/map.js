import * as React from 'react';
import {render} from 'react-dom';
import MapGL, {GeolocateControl} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGluZGVyLXJlYWN0IiwiYSI6ImNreWxoMTJlZzM3YXMyeG84NDVsemoxNGoifQ.cXiIOLJsdVJ4NZxb2mnhWw'; // Set your mapbox token here

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};


export default function App({viewport, setViewport}) {


  console.log(viewport);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="350px"
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />
    </MapGL>

  );
}

export function renderToDom(container) {
  render(<App />, container);
}