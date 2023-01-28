import { type NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import CampifyNavbar from "../components/CampifyNavbar";
import { Bounds } from "../state/useMapState";
import { api } from "../utils/api";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const Map: NextPage = () => {
  const [bounds, setBounds] = useState<Bounds>({
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  });

  const { data, isLoading } = api.experiences.getWithinArea.useQuery({
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  });

  return (
    <>
      <CampifyNavbar />
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-slate-500">
          {isLoading ? (
            "Loading..."
          ) : (
            <ul>
              {data?.map((experience) => (
                <li key={experience.name}>{experience.name}</li>
              ))}
            </ul>
          )}
        </div>
        <MapWithNoSSR className="h-screen" bounds={bounds} />
      </div>
    </>
  );
};

export default Map;
