import { type NextPage } from "next";
import CampifyNavbar from "../components/CampifyNavbar";
import { ExperienceListing } from "../components/ExperienceListing";
import { type DetailedExperience } from "../state/useMapState";
import dynamic from "next/dynamic";
import SearchBar from "../components/SearchBar";

export interface ExperienceMarker {
  latitude: number;
  longitude: number;
  price: number;
  tags: string[];
  experience: DetailedExperience;
}

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const MapPage: NextPage = () => {
  return (
    <div className="min-w-screen h-screen min-h-screen w-screen bg-black">
      <CampifyNavbar />
      <div className="grid h-full grid-cols-2 gap-5">
        <div className="mt-16 h-[calc(100vh-64px)]">
          <SearchBar />
          <ExperienceListing />
        </div>
        <div className="mt-16 h-[calc(100vh-64px)]">
          <MapWithNoSSR className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
