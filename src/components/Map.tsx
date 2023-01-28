import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { type Bounds } from "../state/useMapState";
import { type ExperienceMarker } from "../pages/map";

interface MapProps {
  bounds: Bounds;
  markers: ExperienceMarker[];
  className?: string;
}

const Map = ({ bounds, markers, className }: MapProps) => {
  console.log(markers);

  return (
    <MapContainer
      className={className}
      bounds={[
        [bounds.minLatitude, bounds.minLongitude],
        [bounds.maxLatitude, bounds.maxLongitude],
      ]}
      zoom={13}
      scrollWheelZoom={false}
      zoomAnimation={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.latitude, marker.longitude]} />
      ))}
    </MapContainer>
  );
};

export default Map;
