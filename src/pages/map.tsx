import { type NextPage } from "next";
import dynamic from "next/dynamic";
import CampifyNavbar from "../components/CampifyNavbar";
import { ExperienceListing } from "../components/ExperienceListing";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

export interface ExperienceMarker {
  latitude: number;
  longitude: number;
  price: number;
}

const Map: NextPage = () => {
  return (
    <div className="min-w-screen w-screen h-screen min-h-screen">
      <CampifyNavbar />
      <div className="grid grid-cols-2 gap-5 h-[calc(100vh-48px)]">
        <div className="">
          <ExperienceListing />
        </div>
        <div>
          <MapWithNoSSR className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Map;
