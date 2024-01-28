import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapSelector = ({marks}) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapContainerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: parseFloat(marks[0].lat), // Default center latitude
    lng: parseFloat(marks[0].long), // Default center longitude
  };

  const onSelect = (location) => {
    setSelectedLocation(location);
    console.log('Selected Location:', location);
  };

  const onMapClick = (e) => {
    const newLocation = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setLocations([...locations, newLocation]);
    onSelect(newLocation);
  };

  const allLocations = [...marks, ...locations];

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBy6T9XTSHfSrvemXNkkZCzn1jnpwHfLQk"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        onClick={onMapClick}
      >

      {allLocations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
          />
        ))}

      </GoogleMap>
    </LoadScript>
  );
};

export default MapSelector;
