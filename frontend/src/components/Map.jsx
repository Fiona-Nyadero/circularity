import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
    color: "3b82f6",
    weight: 5,
    opacity: 0.7,
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
    <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <JSON data={riverData} style={riverStyle} />

      <JSON data={cboData} onEachFeature={onEachCBO} />

    </MapContainer>
  );
};

export default NairobiMap;