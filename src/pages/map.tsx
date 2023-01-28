import { type NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import CampifyNavbar from "../components/CampifyNavbar";
import { type Bounds } from "../state/useMapState";
import { api } from "../utils/api";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

export interface ExperienceMarker {
  latitude: number;
  longitude: number;
  price: number;
}

const Map: NextPage = () => {
  const [bounds, setBounds] = useState<Bounds>({
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  });

  const { data, isLoading } = api.experiences.getWithinArea.useQuery(bounds);
  if (isLoading || !data) return <div>Loading...</div>;

  const markers: ExperienceMarker[] = data.map((experience) => {
    return {
      latitude: experience.latitude,
      longitude: experience.latitude,
      price: experience.cost,
    };
  });

  return (
    <>
      <CampifyNavbar />
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-slate-500">{JSON.stringify(data)}</div>
        <MapWithNoSSR className="h-screen" bounds={bounds} markers={markers} />
      </div>
    </>
  );
};

export default Map;
