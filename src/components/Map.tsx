import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useMapState } from "../state/useMapState";
import { BoundsUpdater } from "./BoundsUpdater";
import { Markers } from "./Markers";
import { MarkerLayer } from "react-leaflet-marker";

interface MapProps {
  className?: string;
}

const Map = ({ className }: MapProps) => {
  const bounds = useMapState((state) => state.bounds);

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
      <MarkerLayer>
        <Markers />
      </MarkerLayer>
      <BoundsUpdater />
    </MapContainer>
  );
};

export default Map;
