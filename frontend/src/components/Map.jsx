// frontend/src/components/Map.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import riverData from '../data/river.json';
import cboData from '../data/cbos.json';
import buildingData from '../data/buildings.json';
import roadData from '../data/roads.json';


const FitBounds = ({ bounds}) => {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [map, bounds]);
  return null;
  }

const NairobiMap = ({ onSelectCBO }) => {
  /* const riverBounds = [
    [-1.29, 36.83], 
    [-1.19, 37.00]
  ]
  bigger bounds vs 4cbos bounds */
  const riverBounds = [
    [-1.29, 36.80], //SW Corner
    [-1.16, 37.00] //NE Corner
  ]
  const buildingStyle = {
    color: "transparent",
    weight: 0,
    fillColor: "#567C8D",
    fillOpacity: 0.2
  }

  const roadStyle = {
    color: "#F5EFEB",
    weight: 0.5,
    opacity: 0.3
  }

  const riverStyle = {
    color: "#C8D9E6",
    weight: 4,
    opacity: 0.9,
    fillColor: "#C8D9E6",
    fillOpacity: 0.3
  }

  const createPulseIcon = () => {
    return L.divIcon({
      className: '',
      html: `<div class="cbo-pulse-marker"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6,6],
      popupAnchor: [0, -10]
    });
  };
  
  const onEachCBO = (feature, layer) => {
        if (feature.properties) {
            const props = feature.properties;
            
            const wasteScore = Math.min((props.waste_collected || 0) / 10, 100); 
            const treeScore = Math.min((props.trees_planted || 0) / 5, 100);

            const popupContent = `
                <div class="p-1 min-w-[150px]">
                    <h3 class="font-bold text-brand-navy text-sm mb-2 border-b border-gray-200 pb-1">
                        ${props.name}
                    </h3>
                    
                    <div class="mb-1">
                        <div class="flex justify-between text-[10px] text-gray-500 uppercase font-bold">
                            <span>Waste Recycled</span>
                            <span>${props.waste_collected || 0}kg</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-0.5">
                            <div class="bg-orange-500 h-1.5 rounded-full" style="width: ${wasteScore}%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-[10px] text-gray-500 uppercase font-bold">
                            <span>Biomass (Trees)</span>
                            <span>${props.trees_planted || 0}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-0.5">
                            <div class="bg-green-500 h-1.5 rounded-full" style="width: ${treeScore}%"></div>
                        </div>
                    </div>
                </div>
            `;

            layer.bindTooltip(popupContent, {
                permanent: false,
                direction: "top",
                className: "custom-tooltip",
                opacity: 1
            });

            layer.on({
                click: () => onSelectCBO(props)
            });
        }
    };

    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, { icon: createPulseIcon()});
    };

  return (
    <MapContainer
      center={[-1.248675, 36.880443]}
      zoom={13}
      minZoom={12}
      maxBounds={riverBounds}
      maxBoundsViscosity={1.0}
      style={{ height: "100%", width: "100%", background: '#2F4156' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        className='map-tiles-filter'
      />

      <FitBounds bounds={riverBounds} />

      <GeoJSON data={buildingData} style={buildingStyle} />
      <GeoJSON data={roadData} style={roadStyle} />
      <GeoJSON data={riverData} style={riverStyle} />
      <GeoJSON
        data={cboData}
        onEachFeature={onEachCBO}
        pointToLayer={pointToLayer}
      />

    </MapContainer>
  );
};

export default NairobiMap;