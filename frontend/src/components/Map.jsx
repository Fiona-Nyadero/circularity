// frontend/src/components/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import riverData from '../data/river.json';
import cboData from '../data/cbos.json';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const NairobiMap = ({ onSelectCBO }) => {
  const position = [-1.248675, 36.880443]; // Youthprinua

  const riverStyle = {
    color: "#C8D9E6",
    weight: 3,
    opacity: 0.8,
    fillColor: "#C8D9E6",
    fillOpacity: 0.2
  }

  const onEachCBO = (feature, layer) => {
    if (feature.properties) {
        layer.bindPopup(`<strong>${feature.properties.name || "Unknown CBO"}</strong>`)

        layer.on({
            click: () => {
                onSelectCBO(feature.properties);
            }
        });
    }
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        className='map-tiles-filter'
      />
      <GeoJSON data={riverData} style={riverStyle} />

      <GeoJSON data={cboData} onEachFeature={onEachCBO} />

    </MapContainer>
  );
};

export default NairobiMap;