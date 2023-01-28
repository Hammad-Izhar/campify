import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useMapState, type Bounds } from "../state/useMapState";
import { type ExperienceMarker } from "../pages/map";
import { api } from "../utils/api";
import { useEffect } from "react";
import { BoundsUpdater } from "./BoundsUpdater";
import { Markers } from "./Markers";

interface MapProps {
  className?: string;
}

const Map = ({ className }: MapProps) => {
  const bounds = useMapState(state => state.bounds);
  return (
    <MapContainer
      className={className}
      bounds={[
        [bounds.minLatitude, bounds.minLongitude],
        [bounds.maxLatitude, bounds.maxLongitude],
      ]}
      zoom={13}
      scrollWheelZoom={true}
      zoomAnimation={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        
      />
      <Markers />
      <BoundsUpdater />
    </MapContainer>
  );
};

export default Map;
